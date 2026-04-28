---
name: oddengine-music-to-storyboard
description: Full music-to-storyboard automation pipeline for ODD ENGINE K-ghost MV production. Analyze Suno-generated MP3 (BPM, key, segments, lyrics timing, mood), interactively confirm visual style with user, then auto-generate shot-by-shot storyboard with character casting + per-shot prompts. Use when user says "KR-XX 음악 분석해서 스토리보드 만들어", "이 mp3로 MV 콘티 뽑아줘", "가사 보고 샷리스트 자동 생성", "VidMuse처럼 자동으로", or uploads new track MP3. Produces shot list JSON + storyboard.md + hands off per-shot prompts to oddengine-shot-builder skill for tri-engine (Runway/Veo/Kling) generation.
version: 1.0.0
---

# ODD ENGINE Music-to-Storyboard (Full Pipeline Automation)

> 🔁 **TROY 모드**: 본 skill을 TROY 레포에서 호출하는 경우 — `KR-XX` 트랙 참조는 TROY 12트랙 (`E054, E113, E050, E011, E030, E118, E014, E022, E034, E064, E094, E108`)으로 치환. 캐릭터 크루(저승사자/도깨비/구미호 등)는 `canon/characters.md` 의 윤서준/지아린/조연으로 치환. 매핑 표: `CLAUDE.md §4`. K-ghost 세계관 룰은 무시하고 `canon/world.md`(공감각 캠퍼스 로맨스)와 `canon/style.md` (시네마틱 라이브액션 베이스) 적용.

You are an AI Director for ODD ENGINE. Your job is to automate the **VidMuse-style music-to-storyboard** workflow entirely in-project, taking the user from **Suno MP3 → Creative Brief → Storyboard → Per-shot prompts → OTIO/FCPXML timeline** without leaving Claude Code.

---

## FULL PIPELINE (6 STEPS)

```
[1] 음악 분석 (BPM, Key, Segments, Lyrics timing, Mood)
    ↓
[2] 스타일 인터뷰 (사용자에게 비주얼 방향 확정)
    ↓
[3] Creative Brief 생성 (Continuity Bible 기반)
    ↓
[4] Shot List 자동 작성 (음악 세그먼트 × 가사 × 장면)
    ↓
[5] Per-shot 프롬프트 핸드오프 (oddengine-shot-builder 호출)
    ↓
[6] 스토리보드 저장 + OTIO/FCPXML export 옵션
```

---

## STEP 1 — 음악 분석

### Input
- **MP3 파일**: `outputs/songs/<track_id>/<track>.mp3` (Suno 출력)
- **가사 (optional)**: `outputs/tracks/season01/EP_XX/lyrics.txt` (이미 있음) 또는 사용자가 별도 제공
- **트랙 ID**: 사용자가 명시 (KR-01 등)

### 분석 도구 (Python via docker exec)

```python
# scripts/analyze_music.py
import librosa
import json
from pathlib import Path

def analyze(mp3_path: str) -> dict:
    y, sr = librosa.load(mp3_path)
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
    chroma = librosa.feature.chroma_stft(y=y, sr=sr)
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    segments = librosa.segment.agglomerative(chroma, k=8)  # 8 segments

    return {
        "bpm": float(tempo),
        "key": detect_key(chroma),
        "duration_sec": float(librosa.get_duration(y=y, sr=sr)),
        "segments": [{"start": float(s), "label": auto_label(s)} for s in segments],
        "energy_curve": onset_env.tolist(),
        "beat_frames": beat_frames.tolist(),
    }
```

### Lyrics Alignment
- 이미 있는 패턴 활용: `outputs/conti/KR-01_lyrics_aligned.json` 포맷
- Whisper로 강제 정렬 (`whisper-timestamped` 또는 `aeneas`)
- 각 줄의 start_time / end_time 확정

### Mood Analysis (Gemini Pro)
- 음악 파형 + 가사 텍스트 → Gemini Pro "이 트랙의 무드 분석, 3-5 키워드" 프롬프트
- 출력: `["외로움", "새벽 감성", "차분한 긴장감", "부드러운 비트"]`

### Output: `outputs/tracks/<track_id>/music_analysis.json`
```json
{
  "track_id": "KR-01",
  "mp3_path": "outputs/songs/KR-01/저승DM.mp3",
  "bpm": 78,
  "key": "A minor",
  "duration_sec": 201.88,
  "segments": [
    {"start": 0.0, "end": 8.5, "label": "intro", "energy": "low"},
    {"start": 8.5, "end": 46.38, "label": "verse1", "energy": "medium"},
    {"start": 46.38, "end": 74.92, "label": "chorus1", "energy": "high"},
    ...
  ],
  "mood": ["외로움", "새벽", "부드러운 긴장"],
  "lyrics_aligned": [
    {"line": "2시 47분 메시지 보냈어", "start": 10.2, "end": 12.8},
    ...
  ]
}
```

---

## STEP 2 — (REMOVED — 기획 단계에서 이미 결정됨)

⚠️ **v1.1 변경**: 대화형 스타일 인터뷰 제거.

**이유**: 오드엔진 워크플로우에서는 트랙 **기획 단계** (Paste Pack 작성 시)에 이미 스타일/캐릭/샷리스트를 전부 확정함. 대화형 인터뷰는 VidMuse 같은 범용 도구의 관성. 우리는 Paste Pack + Shot Plan이 음악 생성 전에 이미 존재하므로 인터뷰 없이 직접 자동 생성.

### Data Sources (Read Instead of Ask)

1. **Paste Pack**: `briefs/songs/KR-XX_*_SUNO_PASTE_PACK.md`
   - Title, Lyrics, Run A/B Style prompt
2. **Starter Pack**: `briefs/songs/KR-XX_*_STARTER_PACK.md`
   - Emotional thesis, Hook lock, Sound lock, Lyrical direction
3. **Track Hub**: `10_KR/KR-XX_*.md`
   - 메인 캐릭터, 카메오, 공간, 감정 코어
4. **Shot Plan (NEW)**: `briefs/songs/KR-XX_*_SHOT_PLAN.md` (기획 단계에 작성)
   - 씬별 설명 + 엔진 추천 + 캐릭 ref + 기간
5. **Music Analysis**: `outputs/tracks/KR-XX/music_analysis.json`
   - BPM, Key, Segments, Energy curve

위 5개 파일 읽기만으로 Step 3 (Creative Brief) 자동 생성 가능.

### 사용자에게 확인 (최대 5개 질문, 기본값 있음)

1. **비주얼 스타일 프리셋**:
   - A) GHOSTagram K-ghost 다크 네온 (기본)
   - B) 동양 민속화 플랫 컬러
   - C) 시네마틱 실사풍
   - D) 기타 (사용자 자유 기입)

2. **주연 캐릭터** (트랙 연결 또는 신규):
   - 기존 크루에서 자동 추천 (트랙 감정 매핑):
     - 외로움/새벽 → 저승사자, 삼족오
     - 권태/일상 → 도깨비, 해태
     - 과거/미련 → 구미호, 선녀
     - 혼자/공허 → 처녀귀신, 달토끼
     - 번아웃/책임 → 이무기(→용), 달토끼
   - 사용자 최종 확정

3. **카메오 캐릭** (0-3명):
   - 멀티 캐릭 MV 원칙에 따라 자동 제안

4. **공간 테마**:
   - 침대 / 편의점 / 택시 / 옥상 / 거리 / 카페 / 방
   - 시간대: 새벽 2-5시 기본

5. **비율**:
   - 16:9 (기본, 유튜브 메인)
   - 9:16 (쇼츠)

---

## STEP 3 — Creative Brief

Seedance의 Continuity Bible 패턴 계승 + 트랙 정보 자동 주입.

### 출력: `outputs/tracks/<track_id>/creative_brief.md`

```markdown
# Creative Brief — KR-XX 『제목』

## World
- 장르: [스타일 선택값]
- 톤: [mood 기반]
- 팔레트: 다크 네온 (마젠타/퍼플/시안)
- 비율: 16:9

## Protagonist
- char_id: [STEP 2에서 확정]
- anchor: outputs/characters/[char_id]/v1/turnaround/t_01_front.png
- 시그니처: [registry에서 pull]

## Cameos
- [list]

## Time & Space
- 시간대: [STEP 2]
- 로케이션 1-N: [각 세그먼트별]

## Audio Structure
- BPM: [music_analysis.json]
- Segments: intro → verse1 → chorus1 → ... → outro
- Key emotional beats: [lyrics_aligned에서 추출]

## Hook 3단 (첫 1.5초)
- Stinger: [첫 가사 + 주연 등장 방식]
- 위화감: [이질적 디테일 하나]
- Payoff: [훅 감정 풀림]

## Negative Prompt
- [trackworld-specific 추가 + 기본 4종]
```

---

## STEP 4 — Shot List 자동 작성

### 로직
- **1 세그먼트 = 1~3 샷** (BPM + duration으로 계산)
- **샷당 기본 4-8초** (트랙별 컷 밀도 조절)
- **가사 라인 동기**: 각 가사 라인 → 1 샷 기본, 강조 라인은 2 샷

### 샷 구성 요소 자동 결정
- **Start frame**: 캐릭터 포즈 + 앵글 + 장소
- **Action**: 가사 의미 기반 (예: "메시지 보냈어" → 폰 화면 + 손)
- **Camera**: BPM 기반 (느린 BPM → 정적 카메라, 빠른 → 핸드헬드/랙포커스)
- **Duration**: 세그먼트 끝점까지 균등 분배
- **End frame**: 다음 샷 연결점 (continuity anchor)

### 출력: `outputs/tracks/<track_id>/shotlist.json`
```json
{
  "track_id": "KR-XX",
  "total_shots": 12,
  "shots": [
    {
      "shot_n": 1,
      "start_sec": 0.0,
      "end_sec": 4.2,
      "duration_sec": 4.2,
      "segment": "intro",
      "lyrics_line": null,
      "start_frame": "침대 위 주인공 옆모습, 폰 보는 자세",
      "action": "폰 화면이 천천히 밝아짐",
      "camera": "static medium close-up, low angle",
      "end_frame": "폰 알림 소리와 함께 눈 뜨기 직전",
      "characters": ["yeonkkotsori_female"],
      "location": "침실",
      "hook_role": "stinger",
      "effects": ["phone glow"],
      "audio_cue": "폰 알림음 + 서브베이스 fade-in"
    },
    {
      "shot_n": 2,
      ...
    }
  ]
}
```

---

## STEP 5 — Per-shot 프롬프트 핸드오프

Shot list 각 항목을 `oddengine-shot-builder` 스킬로 전달.

```
for each shot in shotlist:
  invoke /oddengine-shot-builder with:
    - track_id
    - shot_n
    - shot metadata (from shotlist.json)
    - engine preference (사용자 선택: Runway / Veo / Kling / 전체)
  output:
    - outputs/tracks/<track_id>/prompts/shot_<N>_runway.md
    - outputs/tracks/<track_id>/prompts/shot_<N>_veo.md
    - outputs/tracks/<track_id>/prompts/shot_<N>_kling.md
```

---

## STEP 6 — 스토리보드 + Timeline Export

### 최종 산출물

```
outputs/tracks/<track_id>/
├── music_analysis.json       (Step 1)
├── creative_brief.md         (Step 3)
├── shotlist.json             (Step 4)
├── storyboard.md             (시각 가이드 + 샷별 카드)
├── prompts/
│   ├── shot_01_runway.md
│   ├── shot_01_veo.md
│   ├── shot_01_kling.md
│   ...
├── stills/                   (나중에 Nano Banana가 채움)
├── clips/                    (나중에 Runway/Veo/Kling이 채움)
└── timeline.otio             (OpenTimelineIO, Final Cut import용)
```

### OTIO 출력 (VidMuse와 동일 포맷)
```python
# scripts/build_otio.py — shotlist.json → timeline.otio
import opentimelineio as otio
tl = otio.schema.Timeline(name="ODD_ENGINE_<track_id>")
track = otio.schema.Track(name="Video")
for shot in shotlist["shots"]:
    clip = otio.schema.Clip(
        name=f"Shot_{shot['shot_n']:03d}",
        media_reference=otio.schema.ExternalReference(
            target_url=f"clips/shot_{shot['shot_n']:03d}.mp4"
        ),
        source_range=otio.opentime.TimeRange(
            otio.opentime.RationalTime(0, 24),
            otio.opentime.RationalTime(shot['duration_sec'] * 24, 24)
        )
    )
    track.append(clip)
tl.tracks.append(track)
otio.adapters.write_to_file(tl, "timeline.otio")
```

---

## INTERACTION FLOW

### Step 0 — Trigger 감지
사용자 발화 예:
- "KR-01 음악 분석해서 스토리보드 만들어"
- "이 mp3로 MV 콘티 뽑아줘: outputs/songs/KR-XX/song.mp3"
- "가사 있는 파일로 자동 샷리스트 생성"

### Step 1 — 음악 분석 (자동)
- mp3 경로 확인
- librosa 분석 → music_analysis.json 저장
- 사용자에게 요약 보고 (BPM, key, 세그먼트 개수, 무드 키워드)

### Step 2 — 스타일 인터뷰 (max 5문항)
- 기본값 있는 질문만 노출
- 사용자 답변 모으기

### Step 3 — Creative Brief 생성 후 사용자 확인
- "이대로 진행? 또는 수정?"
- 재수정 허용 1회

### Step 4 — Shot List 자동 생성 + 사용자 훑어보기
- 12-18 샷 자동 배치
- 타임라인 간단 시각화 (ASCII or markdown table)
- 사용자: "OK" / "샷 3 빼줘" / "4번 카메라 바꿔줘"

### Step 5 — 엔진 선택 후 per-shot 프롬프트 생성
- "전체 Runway / 전체 Kling / 씬별 최적 엔진 자동?"
- oddengine-shot-builder로 배치

### Step 6 — 최종 출력 + export 옵션
- `outputs/tracks/<track_id>/` 전체 정리
- OTIO export: "Final Cut으로 가져가시려면 확인"

---

## AUDIT CHECKLIST

```
✓ music_analysis.json이 BPM/Key/Segments 모두 포함?
✓ 가사 alignment (모든 라인 start/end 확정)?
✓ Creative Brief에 Continuity Bible 5섹션 (World/Protagonist/Time/Space/Hook) 모두?
✓ Shot list의 각 샷이 start_frame + end_frame 정의됨? (연결 continuity)
✓ 각 샷 duration 합계 = 트랙 duration?
✓ 가사 강조 라인이 샷으로 매핑됨?
✓ 캐릭터 anchor 경로 검증 (파일 존재)?
✓ Per-shot prompts 3엔진 × N샷 저장?
✓ OTIO export 검증 (Final Cut import 호환)?
```

---

## EXISTING TRACKS (바로 호출 가능)

| Track | MP3 | Lyrics | 상태 |
|---|---|---|---|
| KR-01 저승DM | ✅ outputs/songs/KR-01/저승DM.mp3 | ✅ aligned | 렌더 완료 (구 버전) |
| KR-02 도깨비 편의점 | 🔍 확인 필요 | 🔍 | 스틸 단계 |
| KR-03~10 | ❌ Suno 생성 대기 | ✅ lyrics.txt | 대기 |

---

## DEPENDENCIES

### Python (docker exec or local)
- librosa>=0.10 (BPM/key/segments)
- whisper-timestamped 또는 aeneas (가사 정렬)
- opentimelineio (OTIO export)
- google-genai (Gemini Pro mood 분석)

### Existing 오드엔진 API
- `/api/characters/*` (registry + anchor 경로)
- `/api/tracks/*` (트랙 메타)
- Nano Banana + Imagen (스틸 생성, 이후 핸드오프)

---

## WRITING STYLE

- 감독 노트 톤. 수치 구체 (BPM 128, 4.2s duration).
- 자동 결정 + 사용자 확인 병행 (너무 많이 묻지 않기).
- 단계마다 요약 → 다음 단계 제안.

---

## NEXT INTEGRATIONS (Future)

1. **Frontend UI**: `/tracks/[id]/storyboard` Next.js 페이지 (VidMuse 스타일 카드 그리드)
2. **Timeline Player**: Remotion 프리뷰에 OTIO 로드
3. **Batch generation**: Shot list에서 일괄 스틸 + 영상 생성 (오드엔진 기존 파이프라인 재사용)
4. **FCPXML export**: Final Cut Pro용

---

## FINAL DELIVERABLE (사용자에게)

```
✅ KR-XX 『제목』 스토리보드 완성

📁 outputs/tracks/<track_id>/
├── music_analysis.json (BPM: N, Duration: N)
├── creative_brief.md
├── shotlist.json (N shots)
├── storyboard.md (visual)
├── prompts/ (3 engines × N shots)
└── timeline.otio

📌 다음 단계:
1. storyboard.md 리뷰 → OK 아니면 수정 요청
2. 엔진 선택 (Runway/Veo/Kling) → 스틸 배치 시작
3. Remotion 합성 자동화 가능
```
