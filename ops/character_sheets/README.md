# Character Sheets — TROY 「너라는 운율」

> Face-lock reference sheets. **STEP 1 of 5-part production bible.**
> 모든 후속 작업 (storyboard sheet · video prompt) 의 reference image 로 attach.
>
> 도구: **GPT Image 2** (paste-ready prompts)
> 톤: **Modern Korean cinematic illustration** (Z 갈래 — 음악·MV 비주얼 모드 분리)
> 산출 위치: 사용자 자유 (권장: `export/characters/{name}_sheet_v{N}.png`)

## 진행 보드

| 우선순위 | 캐릭터 | 캐논 위치 | Prompt 상태 | Sheet 상태 | 파일 |
|---|---|---|---|---|---|
| 1 | **윤서준** (Yoon Seojun) | 메인 남주, 모든 트랙 | ✅ prompt-ready (v1) | ⏳ pending | `yoon_seojun_sheet_v1.md` |
| 2 | **지아린** (Ji Arin) | 메인 여주, vol1 가창자 | ✅ prompt-ready (v2) | ⚠️ v1 calibrating · v2 pending | `ji_arin_sheet_v2.md` |
| 3 | **최이든** (Choi Iden) | 룸메, 조연 | ⏳ pending | ⏳ pending | (다음) |
| 4 | **강도현** (Kang Dohyun) | 연적, Phase 2-4 | ✅ prompt-ready (v2) | 🔒 **LOCKED** (v2 검증 완료) | `kang_dohyun_sheet_v2.md` |
| 5 | **배소나** (Bae Sona) | 아린 현실거울, Phase 2+ | ✅ prompt-ready (v2) | ⚠️ v1 baseline · v2 pending | `bae_sona_sheet_v2.md` |
| 6 | **송유빈** (Song Yubin) | 16세 첫사랑, Phase 4-5 | ⏳ pending | ⏳ pending | (다음) |
| 7 | **이태율** (Lee Taeyul) | 윤리적 거울, Phase 5-6 | ⏳ pending | ⏳ pending | (다음) |

## 상태 정의

- **pending** — 아직 prompt 안 만듦 또는 시트 안 받음
- **prompt-ready** — `.md` 파일에 GPT Image 2 paste-ready prompt 저장됨
- **sheet-generated** — 사용자가 paste → 시트 이미지 받음 (저장 위치 별도 기록)
- **calibrating** — 시트 받았지만 톤·디테일 보정 필요 (prompt v2 작성 중)
- **locked** — 시트 face-lock 완료, 후속 production bible reference 로 사용 가능

## 진행 룰

1. **순서 엄수** — 위 우선순위대로. 1번(윤서준) sheet locked 되어야 2번 prompt 진행
2. **톤 일관 강제** — 첫 sheet (윤서준) 가 baseline. 나머지 6명은 IDENTICAL art style (matching set)
3. **calibration 피드백 반영** — 첫 sheet 받고 톤 안 맞으면 v2 작성. 그 calibration 결과를 다음 캐릭터 prompt 에 자동 적용
4. **저장 위치 기록** — 시트 이미지 받으면 본 README 의 "Sheet 상태" 컬럼에 위치 적기

## 참조

- TROY 캐논: `canon/characters.md` (각 캐릭터 정의 baseline)
- 음악적 인상어: `canon/characters.md §5 Character Design Rule`
- Phase 팔레트: `canon/style.md §5 seasonal grammar`
- Production bible skill: `.claude/skills/troy-production-bible-builder/SKILL.md`
- 5 메커니즘 M1-M5: `.claude/skills/troy-production-bible-builder/SKILL.md` 상단

## Z 갈래 결정 (2026-04-30)

음악·MV 비주얼 모드 = Modern Korean cinematic illustration (도구: GPT Image 2 + Seedance 2.0 + Suno).
소설 prose 톤은 그대로 유지 (canon/style.md §6 의 cinematic live-action 은 prose 에만 적용).
별도 문서로 `canon/style.md §6` 갱신 예정 (다음 turn).

## Calibration History

### 지아린 v1 → v2 (2026-04-30)

**v1 sheet 결과 평가** (사용자 보고): "너무 밋밋하고 수수해, 청바지 때문인가, 볼륨감이 없어"

**오케스트라 5팀 점검 결과** — v1 캐논 lock 위반 3건:
1. ❌ **밴드 보컬 visible trait** (canon §3) — 무대 의상이 sub
2. ❌ **image keyword "warmth"** (canon §3) — cream 위주, 노란/코랄 약함
3. ❌ **밝고 사교적 surface** (canon §3) — baseline 차분 과함

**캐논 사전 read 추가 발견** (E002 §46, §145, E003 §15, §32, §69, §90, face_lock_harness §4, §7):
1. ⭐ **"옅은 노란 가디건"** lock (E002 §46) — v1 의 cream + 청바지가 가장 큰 미스
2. ⭐ **"긴 머리"** lock (E002 §46) — v1 의 shoulder-length 보다 길어야
3. ⭐ **기타 케이스 signature prop** (E003 §15) — v1 누락
4. **expression set 4 canonical** (face_lock §4): calm / hidden thought / quiet selfhood / private pause — v1 6개와 미스매치
5. **outfit anchor 3** (face_lock §4): music room / campus walking ⭐MAIN / private room
6. **신체 습관**: 발끝 박자 (E003 §15), 무심코 흥얼 (E003 §90), 부름 직전 (E003 §69)
7. **anti-rule** (face_lock §7): NO performance flex, subject-not-object, NO possessive romance pose

**v2 통합 보정 10개**: 위 발견 모두 prompt 에 lock. Marketing 의 "강한 무대 hook" 권고는 face_lock §7 위반이라 부분 reject — 대신 "옅은 노란빛 = 유일한 발신자" 캐논 lock 이 진짜 hook.

**v2 산출 권장 위치**: `export/music/character_lock_pack/ji_arin_sheet_v2.png` (face_lock_harness §10 표준 위치)

### 강도현 v1 → v2 (2026-04-30)

**v1 sheet 결과 평가** (사용자 보고): "**얼굴이 너무 겹친다**" — 윤서준과 face mold 유사

**오케스트라 진단 — 두 가지 미스**:
1. **얼굴 차별화 부족** — 둘 다 검은 머리 + 무표정 계열 + 22-23세 동급. silhouette/분위기는 차별되지만 face mold 자체가 비슷
2. **manuscript 사전 read 누락** — v1 prompt 가 canon §5 음악 메타포 (피아노) 만 적용. 실제 in-world 활동 (문예지 편집) + 외형 시그니처 (소매 두 번 걷음) 누락

**manuscript E043 (도현 첫 등장) read 발견 9개**:
1. ⭐ "흰 셔츠 소매를 두 번 걷어 올린 남자" (§68) — silhouette 시그니처
2. 학생회관 옆 야외 테이블 + 문예지 편집 (§7-8, §38) = 공간·활동
3. "먼저 손 내밀지 않음" (§97-99) — 인사 매너
4. "할 말만 하고 괜한 여운 X" (§89-90) — 말투
5. "원고 끝까지 한 번 더 읽고 답변" (§124-125) — 행동
6. "판단의 기준을 하나 놓아 주는 사람 / 말을 정리해 놓는 사람" (§142-145) — 사고
7. "웃지도 않고 그냥 사실처럼 말함" (§198-199) — 표정 baseline
8. "어깨를 가볍게 으쓱" (§225) — 제스처
9. "너무 적절해서 누군가를 불안하게 만드는 매끈함" (§176, §180-183) — 핵심 인상

**얼굴 차별화 lock 5개 추가**:
1. 나이감 — 23세 mature (서준 22세 student 와 차별)
2. Jawline / cheekbone — sharper / more defined
3. 머리 — neat side part (NOT messy, NOT overgrown bangs)
4. Gaze — direct level (NOT withdrawn lowered)
5. Mature shading — eye corner + cheek 미세 그림자

**v2 통합 보정 10개**: manuscript lock 9개 + 얼굴 차별화 5개 + canon §5 음악 메타포 layer + canon §4 후퇴 lock + 핵심 대사 ("맞는 게 중요하진 않지. 네가 납득해야지.") panel 추가.

**v2 산출 권장 위치**: `export/music/character_lock_pack/kang_dohyun_sheet_v2.png`

### 배소나 v1 → v2 (2026-04-30)

**v1 prompt 진단**: manuscript 사전 read 없이 canon §4 추상 정의 ("calm intelligent baseline") 만 적용. 실제 캐릭터 정체성과 결정적 미스매치.

**manuscript E020 (첫 등장 뒤풀이) + E049 (활약 신 친구들의 개입) read 발견 9개**:
1. ⭐ "지나치게 단순해서 오히려 더 정확한" 핵심 인상 (E049 §157-158)
2. ⭐ "아이스티 컵 뚜껑을 손톱으로 톡톡 두드림" 시그니처 신체 습관 (E049 §31)
3. 즉각 reaction: 받아치기, 피식/물 뿜듯 웃음 (E049 §82, §192, §342)
4. 직설 톤: "표현은 또 왜 그렇게 해" / "그럼 싫겠다" (E049 §83, §155)
5. 정확한 통찰: "오빠는 상대 마음 빨리 알아차리는 게 다정한 거라고 생각하죠" (E049 §168-170)
6. 관찰력: "언니가 다 참으면서 괜찮은 척할 때 표정이 더 보여요" (E049 §339-340)
7. 호칭: 서준 = "오빠" / 아린 = "언니" — 친밀 후배 톤 (E049 §168, §337)
8. 둘만 대화 만들어 주는 장치: "잠깐 화장실 하며 일어남" (E049 §307-308)
9. 위로보다 현실 조언: "그럼 또 말해야죠. 언니가 안 말하면 오빠는 자기가 맞았다고 착각할걸요" (E049 §371-374)

**얼굴 차별화 lock 5개 추가** (vs 아린·송유빈):
- 머리: bob (vs 아린 long wavy)
- 컬러: cool gray (vs 아린 warm yellow)
- 나이감: 21세 active (vs 송유빈 22세 calm mature)
- 눈: sharp intelligent (NOT dreamy)
- 시그니처: round-frame glasses

**사용자 결정**: A — 안경 keep + 컵 손동작 추가 (둘 다 살림)

**v2 통합 보정 10개**: manuscript lock 9개 + 얼굴 차별화 5개 + 핵심 대사 panel 2개 (오빠/언니 호칭 사용) + active direct baseline 전환.

**v2 산출 권장 위치**: `export/music/character_lock_pack/bae_sona_sheet_v2.png`
