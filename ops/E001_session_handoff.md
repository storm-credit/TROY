# E001 Session Handoff — 새 세션 first read

> **새 Claude Code 세션 (TROY 폴더) 시작 시 가장 먼저 읽을 문서.**
> 이 문서 한 번 read 하면 직전 세션의 모든 컨텍스트 복원 가능.
> 작성일: 2026-05-05 (oddengine worktree 세션 마지막)

---

## 🎬 현재 진행 상태 (what done)

### ✅ 완료 — Bootstrap·Setup
- TROY 레포에 `.claude/` 오케스트라 시스템 이식 (commit `b5c047b`)
- TROY-mode 노트 + 매핑 표 (commit `dafa2fd`)
- `troy-production-bible-builder` skill 신규 (commit `f6154b3`)
- E001 production bible v1 (라이브액션 톤, **폐기**) (commit `0375f54`)

### ✅ 완료 — Character Lock Pack (7명 LOCKED)
8장 시트 LOCKED (송유빈 dual-age 2장 포함):

| # | 캐릭터 | 시트 prompt 파일 | 시그니처 컬러 |
|---|---|---|---|
| 1 | 윤서준 | `ops/character_sheets/yoon_seojun_sheet_v1.md` | 회색 노이즈 (charcoal hoodie + 흰 이어폰) |
| 2 | 지아린 | `ops/character_sheets/ji_arin_sheet_v2.md` | 옅은 노란 (봄빛 발신자 + 기타 케이스) |
| 3 | 최이든 | `ops/character_sheets/choi_iden_sheet_v1.md` | warm cream (knit cardigan + 드럼스틱) |
| 4 | 강도현 | `ops/character_sheets/kang_dohyun_sheet_v2.md` | 카멜+슬레이트 (흰셔츠 소매 + 카디건) |
| 5 | 배소나 | `ops/character_sheets/bae_sona_sheet_v2.md` | mid gray (안경 + 카페 컵 톡톡) |
| 6 | 송유빈 | `ops/character_sheets/song_yubin_sheet_v3.md` | autumn beige+brown (chest-length wavy + dual-age) |
| 7 | 이태율 | `ops/character_sheets/lee_taeyul_sheet_v3.md` | camel + deep dusk navy (절대음감 음악인) |

진행 보드: `ops/character_sheets/README.md`

### ✅ 완료 — Canon §6 Z-track split (commit `ad17dce`)
`canon/style.md §6 visual mode lock` 갱신 — TWO TRACKS 분리:
- **track 1: prose** = cinematic live-action (소설 본문 묘사)
- **track 2: MV / character_lock_pack / image+video** = **modern Korean cinematic illustration** (해치 v9 패턴, 도구 = GPT Image 2 + Seedance 2.0 + Suno)

### ✅ 완료 — E001 Production Bible v2 (일러스트 톤)
`ops/E001_production_bible_v2.md` (commit `8cdd1ac`):
- 1부 캐릭터 reference manifest (윤서준 + 최이든 LOCKED attach)
- 2부 Suno paste pack (구버전 가사, **현재 v6/v7/v8 검토 중**)
- 3부 storyboard sheet prompt (8샷, 일러스트 톤)
- 4부 Seedance 비디오 prompt 8개 (AUDIO: SFX ONLY)
- 5부 편집 가이드

### ⚠️ 진행 중 — E001 Suno 가사 다듬기
- **v4 가사**: 검정치마 톤, 49 라인 (사용자 paste 결과 = `Downloads/무료한 일상.mp3` 받음)
- **v6 가사**: 5팀장 정식 점검 + Bridge "묻지 못함" 추가 + Final Chorus "그래서 더 괜찮아" lift (50 라인)
- **v8 권고 (대대적 universal 화)**: 사용자 통찰 — OST 작동 원리 = 곡 가사 = 보편 정서, 작품 신 직접 묘사 X
  - chorus emotion line "내 귀부터 닫고 살았어" canon lock 만 유지
  - 나머지 모든 라인 = 보편 isolation 정서 (작품 신·캐릭터 능력 풀이 0건)
  - 작품 신 = MV 영상이 책임 (3·4부)

---

## 🎯 사용자 핵심 결정·룰 (변경 X)

### 작품·트랙
- 작품: TROY 「너라는 운율」 — 120화 시리얼
- E001 = "무료한 일상" (Phase 1, 제1악장 얇은 봄빛)
- 곡 기능: Seojun inner monologue (canon §3 thesis "세상은 시끄럽고, 나는 닫혀 있다")
- chorus emotion line lock: "**내 귀부터 닫고 살았어**" (canon §3, E001_song_brief)
- **사용자 의지: ep01부터 노래 + 영상 페어링 발행** (1화 = 1곡 = 1MV)

### 음악 결정 (오케스트라 자동)
- **언어: 한국어 100%** (E001 캐논 정합, 한국 indie folk 청자 타겟)
- **vocal gender: female** (사용자 선호. OST narrator 패턴, canon §4 song_brief 의 "male vocal" lock 은 사용자 권한으로 갱신)
- **장르 톤: Korean modern indie folk** (검정치마 계열, 간접 표현 — 아티스트 이름 직접 X)
- **길이: 3:30~4:00** (Suno v5 표준)
- **BPM: 75** (Master) / 70 (Lo-fi) / 80 (Alt-folk)
- **Run A/B/C: 3 버전** (Master + Variation A Lo-fi + Variation B Alt-folk)
- **vocal config = female 모두 동일** → BPM·장르 톤만 차이 (skill Locking rule 준수)

### Hybrid 모델 (canon §10 재해석)
- **노래는 노래대로** (song-first), **분위기 맞는 화에 매칭**
- canon §10 "음악은 본편 감정 핵심을 **압축**" = **압축 = 추상화·보편화** (스토리 풀이 X)
- 가사 = 보편 정서 / 영상 = 작품 신 / 시청자 = 머릿속 자연 연결

### Visual·MV 결정
- **Z 갈래**: MV 비주얼 모드 = **modern Korean cinematic illustration** (해치 v9 패턴)
- 도구: **GPT Image 2** (캐릭터 시트·스토리보드) + **Seedance 2.0** (영상) + **Suno** (음악) + **CapCut** (편집)
- 라이브액션 톤 폐기 (canon §6 갱신 commit `ad17dce`)

### 핵심 메커니즘 (M1-M5, 해치 v9 패턴)
- **M1**: 5부 의존 순서 (캐릭터→음악→이미지→비디오→편집)
- **M2**: LOCKED 시트 → 모든 후속 prompt 에 attach
- **M3**: 4부 비디오 prompt 에 **AUDIO: SFX ONLY** 강제 (Suno 음악과 영상 도구 BGM 충돌 차단)
- **M4**: HEX 컬러 + NEGATIVE prompt 매 컷 반복
- **M5**: `Lens switch to ... [시간]` multi-shot 패턴

### 사용자 자기 정보
- 사용자 = f (female) — 단순 자기 정보, vocal gender 결정과 직접 무관

---

## 🚦 미해결 결정 (새 세션 첫 작업)

### 결정 1: 받은 mp3 평가
파일: `C:\Users\Storm Credit\Downloads\무료한 일상.mp3`
- 어느 버전 (Master / Variation A / Variation B) 인지 사용자에게 확인
- 사용자 평가:
  - vocal female intimate withdrawn 톤 OK?
  - chorus hook 인지 됨?
  - 정서 (isolation·차단·잔향) 닿음?
  - 길이·전반 catchy?

### 결정 2: 가사 v8 작성 GO?
**오케스트라 권고: α v8 작성** (대대적 universal 화)
- v6 (현재 paste 가능) = 캐논 풀이 15% 잔존 → OST 작동 원리 위반
- v8 = chorus emotion line "내 귀부터 닫고 살았어" lock 만 유지, 나머지 49 라인 보편 정서
- 보정 라인 (v6→v8):
  - "사람들이 너무 많아" → "소리가 너무 많아"
  - "한 칸씩 뒤에 서 있어" → "박자가 자꾸 어긋나"
  - "굳이 듣지 않아도 알아" → "닿지 않아도 알아"
  - "나만 들리는 게 너무 많아서" → "마음들이 너무 많아서"
  - "들어오지 않은 마음들이 / 내 안에서 자고 있어" → "닫아 둔 말들이 / 내 안에서 자고 있어"

→ 사용자 결정 후 진행

### 결정 3: 곡 OK 면 다음 단계
- **3부 Storyboard 12 시트 prompt** (해치 v9 풀구조, GPT Image 2 paste-ready)
  - 3:30 길이 = 12컷 × 17.5초
  - LOCKED 시트 (윤서준 + 최이든) attach 강제
  - 일러스트 톤
- **4부 Seedance 12 영상 prompt** (각 17.5초, AUDIO: SFX ONLY 강제)
- **5부 편집 가이드** 갱신
- **`ops/E001_production_bible_v3.md` 통합 commit** (해치 v9 풀구조)

---

## 📋 새 세션 시작 가이드

### Step 1: 새 Claude Code 세션 열기
```
경로: C:\Users\Storm Credit\Desktop\Music\TROY
```
첫 명령: `/status` → TROY 시스템 점검

### Step 2: 핸드오프 문서 read
첫 요청: 
> "ops/E001_session_handoff.md 읽고 직전 세션 컨텍스트 복원 후 다음 진행"

### Step 3: 진행 (사용자 결정 따라)

**시나리오 A: 받은 mp3 평가부터**
- 사용자가 mp3 들어보고 평가 보고
- OK → 가사 v8 작성 결정 (또는 v6 그대로 가도 됨)
- 보정 필요 → Style·Settings·가사 갱신 후 Suno 재생성

**시나리오 B: v8 가사 즉시 작성**
- Hybrid 모델 + OST 작동 원리 적용
- 5팀장 정식 점검
- skill suno-prompt-director references 정식 활용 (Hook Spec / Audit PASS-REVISE / Run Goal / Locked variables)
- v8 paste-ready 출력 → 사용자 Suno 재생성

**시나리오 C: 곡 OK 면 3·4부 진행**
- E001 production bible v3 작성 (해치 v9 풀구조)
- 12 storyboard 시트 prompt + 12 Seedance 영상 prompt
- LOCKED 시트 attach 강제 (M2)
- AUDIO: SFX ONLY 강제 (M3)

---

## 📚 핵심 참조 파일

### 캐논
- `canon/style.md §6` (Z-track 갱신 완료)
- `canon/characters.md` (7명 LOCKED 정의)
- `canon/series.md`, `canon/world.md`

### E001 baseline
- `ops/E001_episode_harness.md` — 곡 기능·정서 thesis
- `ops/E001_song_brief.md` — chorus emotion line lock + sonic palette
- `ops/E001_visual_cut_list.md` — 8 visual cut 정의 (3:30 → 12컷 확장 필요)

### Production Bible
- `ops/E001_production_bible_v2.md` — 일러스트 톤 + LOCKED attach (v3 작성 시 베이스)
- `.claude/skills/troy-production-bible-builder/SKILL.md` — 5부 메커니즘 M1-M5

### Skills (정식 활용)
- `.claude/skills/suno-prompt-director/SKILL.md` + references/ 6개
  - `style-prompts.md` — 7-block pattern, 600-850자
  - `lyrics-and-korean-qa.md` — 한국어 발음 QA, Jamo Conversion Table
  - `arrangement-run-strategy.md` — BPM·Run A/B Locking rule
  - `ui-settings.md` — Suno UI 4개 필드 정확
  - `product-facts.md` — Suno v5/v5.5 facts
  - `odd-engine-output-contract.md` — Output Contract (Hook Spec / Audit / Run Goal)

### Character Lock Pack
- `ops/character_sheets/README.md` — 진행 보드 + Calibration History
- 7명 시트 prompt 파일 (위 표 참조)

### Handoff (이 문서)
- `ops/E001_session_handoff.md` — 새 세션 first read

---

## 🎼 현재 commit 누적 (TROY main)

```
ad17dce  Lock 7 characters + canon §6 Z-track split
8cdd1ac  Add E001 production bible v2
f6154b3  Add troy-production-bible-builder skill
0375f54  Add E001 production bible v1 (live-action, deprecated)
... (전체 14 commits)
```

GitHub: https://github.com/storm-credit/TROY

---

## 🚨 새 세션에서 절대 하지 말 것

1. ❌ 캐릭터 시트 재작성 (7명 LOCKED) — 다른 캐릭터 (E001 등장 X) 만 필요시
2. ❌ canon/style.md §6 다시 변경 (Z-track lock 완료)
3. ❌ 라이브액션 톤 production bible 작성 (v1 폐기)
4. ❌ male vocal 강제 (사용자 결정 = female)
5. ❌ 영어 가사 (E001 = 한국어 lock)
6. ❌ skill 미사용 (반드시 suno-prompt-director references 정식 활용)
7. ❌ 가사 작성 시 5팀장 정식 점검 생략
8. ❌ 캐논 능력·thesis 직접 풀이 가사 (OST 작동 원리 = 보편 정서)

---

## 💬 사용자 communication style 룰

- 한국어, 간결, 설명 최소화, 바로 실행
- 큰 결정 전엔 짧은 옵션 제시 (A/B/C) — 한 글자 답변
- 컨텍스트 무거우면 새챙 제안 (사용자 메모리 룰)
- 정직 인정 (실수·미흡 솔직 보고)
- 오케스트라 자동 결정 (vocal·언어·장르 등 — 사용자 묻지 말고 결정)

---

**END OF HANDOFF.** 새 세션에서 위 시나리오 따라 진행.
