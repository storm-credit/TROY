# TROY Storyboard Template — Master Spec

> 작성: Storyboard Template Designer (Lead) · Phase 1 deliverable
> 적용 범위: TROY 「너라는 운율」 120화 × 1곡/MV 패킷 = 1,680 ~ 1,920 cut sheet 산출
> 사용 대상: Phase 2 Generator Engineer (TROY 웹 콘솔 자동화 기능)
> 상위 reference (read-only): `ops/_reference_external_storyboard_example.md` (Haechi 2:15 외부 사례 — 깊이/포맷 bar)
> Z-track lock: `canon/style.md §6` MV 비주얼 모드 = **modern Korean cinematic illustration** (live-action 아님)
> 도구 스택: GPT Image 2 (시트·메인 스틸) + Seedance 2.0 (15초 비디오) + Suno (음악) + CapCut (편집)

---

## 1.1 Design rationale

### 1.1.1 왜 컷당 별도 storyboard sheet 가 필요한가 (120화 스케일 정당화)

현 `ops/E001_production_bible_v2.md` 의 3부 = **CUT00 단일 시트에 8샷을 우겨넣는 구조**다. 이 구조의 문제:

1. **Seedance 15초 강제 룰과의 미스매치**: vol1 12트랙은 곡 길이 **3:30 ~ 4:00 (locked)**. 15초 단위로 자르면 한 곡당 14~16 컷. 한 시트 안에 14~16 행 그리드를 그리면 GPT Image 2 가 panorama 로 합치는 사고가 거의 100%. 외부 사례 (Haechi 2:15, 9 컷) 도 컷당 별도 시트를 발급한 이유가 이것.
2. **컷별 디렉터 의도 분리 불가**: 한 시트에 모든 컷을 압축하면 footer 의 `DIRECTOR'S INTENT` 와 `TRANSITION` 이 하나로 뭉개진다. 컷마다 정서 sub-thesis 가 다른데 (예: CUT01 = 봄/회색 대비 진입 / CUT05 = 이든과의 최소 연결 / CUT08 = 잔향), 컷별 의도 라인이 죽는다.
3. **편집 단계에서 검증 불가**: CapCut 에서 컷 단위로 영상을 timeline 에 배치할 때, 컷별 시트가 1:1 대응되어야 visual QA 가 가능하다. 단일 시트는 종합 reference 일 뿐 cut-level 검수에 못 쓴다.
4. **120화 × 14~16 컷 = 약 1,800 산출 단위**: 자동 생성 시스템이 단일 입력 (E### + songLengthSec) 으로 1,800 개 paste-ready prompt 를 발급하려면, 컷이 generation atom 이어야 한다.

→ **결론**: cut sheet = generation atom. 한 컷 = 한 storyboard sheet (start/end thumbnail 그리드) + 한 Seedance video prompt + 한 main still prompt. 본 템플릿은 이 atom 의 unit spec.

### 1.1.2 외부 reference (Haechi) 와의 TROY-divergent 결정

| | Haechi (외부) | **TROY (본 템플릿)** | 이유 |
|---|---|---|---|
| 시트 background | `#0A0A12` (navy-black) | `#0F1014` (TROY storyboard surface) | TROY `tokens.css` 의 `--surface-canvas: #101013` 정렬 + 스토리보드용 살짝 push-down |
| 시트 aspect | 3:2 (1536×1024) | **3:2 (1536×1024) 유지** | 외부 ratio 가 3-4 행 그리드에도 잘 작동. 변경 안 함 |
| 컬럼 폭 | 6/22/22/13/15/8/7/7 | **6/22/22/12/16/8/7/7 (미세조정)** | TROY 는 OST 원칙상 dialogue 가 거의 항상 `—` (가사만) → DIALOGUE 1pt 줄이고 ACTION 에 1pt 보강. 캐논 §10 universalization. |
| 행수 | 컷당 6~8 sub-shot | **컷당 3~4 sub-shot** | TROY = meditative indie folk OST. 액션 밀도 낮음. 사용자 피드백 명시: 3-4. |
| 팔레트 | 비비드 sky blue + coral red + cream | **Phase 1 = pale sky #E8F0F5, warm cream #F5E1D0, soft slate #7A9CB0, charcoal #2C2E33** | `canon/style.md §5 seasonal grammar` + `E001 character sheet` 정합 |
| 캐릭터 | 단일 여성 + Haechi 신수 | **단일 인물 또는 무인물 (universal-isolation register)** | OST 원칙: 캐릭터 surface 는 director 재량. LOCKED 시트는 attach 하되 모든 컷 등장 강제 X |
| Dialogue | 작중 대사 라인 가능 | **거의 항상 `—` (Suno 가사만)** | OST 는 작중 대사 X. 가사 = music 컬럼 또는 LYRICS 컬럼에 표시 |
| Critical Rendering 행 수 | 8 행 강제 | **3 또는 4 행 강제** (`{{rowCount}}` 변수) | 컷별 sub-shot 수에 따라 동적 |
| 문화적 요소 negative | "no Japanese" | **"no Japanese characters, no chibi, no moe gloss, no idol-fanart, no anime smile baseline"** | Z-track illustration 가 anime 톤으로 흐를 위험 차단 |
| Output checklist | 외부 형 | **TROY 형 + Z-track 명시 (`Modern Korean cinematic illustration, NOT live-action, NOT moe anime`)** | M2/M4 강제 |

### 1.1.3 "8 columns × 3-4 rows × N cuts" 의 구조적 정당성

- **8 columns 고정**: 외부 사례에서 검증된 *information-density / readability* 균형 포인트. 줄이면 직무 분리 무너짐 (CAMERA 와 ACTION 합치면 디렉터 vs DP 직무 구분 사라짐). 늘리면 시트가 panoram-합쳐짐 위험 + GPT Image 2 가 그리드 깬다. 그대로 유지.
- **3-4 rows / cut**: TROY 의 명상적 페이싱 (BPM 68-72 walking-alone tempo) 에 맞춘 sub-shot 밀도. Haechi 의 6-8 은 3D 액션 fantasy 에 맞춤. 본 톤에서 6-8 적용 시 컷이 부산해지고 가사 호흡 (한 라인 6-8초) 과 충돌.
- **N cuts = ceil(songLengthSec / 15)**: Seedance 2.0 hard limit 이 15초/cut. 3:30 → 14 컷, 4:00 → 16 컷. clamp 14~16 표준. 8~20 edge case 허용 (intro·outro 가 짧거나 길 때).

---

## 1.2 The single-cut storyboard sheet template

### 1.2.1 Sheet image specification

| 항목 | 값 |
|---|---|
| **Aspect ratio** | 3:2 (landscape) |
| **Pixel dimensions** | 1536 × 1024 |
| **Background HEX** | `#0F1014` (TROY storyboard surface — `--surface-canvas: #101013` 보다 1 step push-down for ink-on-paper feel) |
| **Primary text color** | `#E8E6E1` (TROY `--text-strong`) |
| **Secondary text color** | `#878680` (TROY `--text-dim`) |
| **Grid line color** | `#2A2D34` (TROY `--border-default`) at 1px |
| **Korean font cue** | "sans-serif (Pretendard-feel)" — GPT Image 2 는 정확 폰트 락 불가. cue 워딩만 |
| **English font cue** | "modern sans, all-caps allowed in headers" |
| **Language rule** | Korean primary + English in parentheses. **NO Japanese characters anywhere.** |

### 1.2.2 Header block (시트 최상단 1줄, h1)

**정확한 텍스트 형식**:

```
CUT{NN} ({mm:ss}-{mm:ss})  |  「{한국어 제목} / {English Title}」  |  {Cut Persona}
```

규칙:
- `{NN}` = zero-padded 2자리 (CUT01, CUT14)
- 시간은 `mm:ss` (둘 다 zero-pad)
- 한국어 제목과 영어 제목은 슬래시로 분리. 외부 reference 와 동일.
- `{Cut Persona}` = 1~3 단어 정서 descriptor (예: `Closure`, `회피 / Recoil`, `잔향 / Residue`). Generator 가 cut 의 visual_cut_list segment + harness emotional thesis 에서 추출.
- 헤더는 `text-xl` (16px) 등가 — sheet 안에서 가장 큰 텍스트 element.

### 1.2.3 Table layout — strict 8 columns

**컬럼 폭** (외부에서 미세조정):

| # | 컬럼 헤더 | 폭 | 외부 사례 |
|---|---|---|---|
| 1 | SHOT / TIME | 6% | 6% |
| 2 | START FRAME (wide thumbnail) | 22% | 22% |
| 3 | END FRAME (wide thumbnail) | 22% | 22% |
| 4 | CAMERA / MOVEMENT | 12% | 13% |
| 5 | ACTION / DIRECTION | 16% | 15% |
| 6 | DIALOGUE / LYRICS | 8% | 8% |
| 7 | SFX | 7% | 7% |
| 8 | MUSIC | 7% | 7% |
| 합계 | | **100%** | |

**ACTION +1 / CAMERA -1**: TROY 는 카메라 vocabulary 가 단순 (slow push-in / static / lateral drift / fade) 한데, ACTION 은 OST 정서 묘사 라인이 길다 (가사 1행 + 정서 2-3 단어). 컬럼 폭 미세조정.

**그리드 룰**:
- 헤더 행 1 + sub-shot 행 N (3 또는 4) = 총 4 또는 5 행
- 모든 셀 사이 `1px` 라인, 색상 `#2A2D34`
- 헤더 행은 살짝 어두운 배경 `#16171B` (TROY `--surface-panel`)
- 행 높이 균등 분배 (vertical center align text)
- 썸네일 cell (column 2, 3) = thumbnail 이미지 가득 + 1px padding 만

### 1.2.4 Per-row content shape (각 컬럼의 텍스트 형식)

| 컬럼 | 콘텐츠 type | 길이 가이드 | 형식 예 |
|---|---|---|---|
| SHOT/TIME | 라벨+시간 | 2 줄, 컴팩트 | `Shot 01\n0:00-0:04` |
| START FRAME | 일러스트 썸네일 (이미지) | 한 셀 가득 | (image only, no text) — 단, image generation 시 caption은 prompt 본문에 묘사로만 |
| END FRAME | 일러스트 썸네일 (이미지) | 한 셀 가득 | (image only) |
| CAMERA / MOVEMENT | 한 줄 영문 | 8-12 단어 | `Wide, slow push-in` / `Static close-up, subtle hand motion` |
| ACTION / DIRECTION | 한국어 1-2 줄 | 18-30자 | `봄 캠퍼스와 서준의 고립 동시 소개. 사람들 평범하게 걷지만 서준만 다른 리듬` |
| DIALOGUE / LYRICS | 한국어 가사 라인 또는 `—` | 1-2 줄 | `귀를 막아도 들려와 / 누군가의 한숨 같은 봄` 또는 `—` |
| SFX | 영문 콤마 리스트 | 4-8 단어 | `birds, distant chatter, footsteps, soft breeze` |
| MUSIC | 영문 한 줄 | 6-12 단어 | `muted piano intro, soft noise texture (Suno 0:00-0:15)` |

### 1.2.5 Footer — 2-cell layout (시트 최하단)

```
┌─────────────────────────────────────┬───────────────────────────────┐
│ LEFT (60% 폭)                       │ RIGHT (40% 폭)                │
│ CUT{NN} DIRECTOR'S INTENT:          │ TRANSITION → CUT{NN+1}:       │
│ {2-3 문장 한국어, 컷 존재 이유 +    │ {1-2 문장, 시각/청각 다리}     │
│  본편 캐논 응축 포인트}             │                               │
└─────────────────────────────────────┴───────────────────────────────┘
```

마지막 컷 (CUT{N}) 의 RIGHT 셀 = `TRANSITION → end:` 로 변경하고 다음 화 prelude 또는 fade 라인 작성.

### 1.2.6 Critical Rendering Instruction block (anti-panorama, 헤더 직후)

GPT Image 2 가 그리드를 panorama 로 merge 하는 사고 차단 블록. 외부 reference 의 verbatim 형 + TROY 라벨:

```
‼ CRITICAL RENDERING — STORYBOARD TABLE, NOT PANORAMA ‼
Render EXACTLY {{rowCount}} horizontal rows, each row = 1 sub-shot = 2 small thumbnails.
TOTAL {{rowCount * 2}} thumbnails ({{rowCount}} START + {{rowCount}} END), each in its own cell.
DO NOT merge thumbnails into a single wide image. DO NOT span rows.
DO NOT skip the grid lines. Show THIN GRID LINES (color #2A2D34) between all rows and columns.
This is a planning sheet, NOT a panoramic illustration.
```

`{{rowCount}}` = 3 또는 4. Generator 가 substitute.

### 1.2.7 Output Rules block (시트 최하단, footer 위)

```
OUTPUT RULES:
- All text Korean primary + English in parentheses; NO Japanese characters.
- All thumbnails use the LOCKED character reference attached (when character on-screen).
- Modern Korean cinematic illustration, clean cel-shading, medium outlines, crisp digital finish.
- Phase {{phaseNumber}} muted palette throughout — see VISUAL STYLE block.
- No watermarks, no logos, no signature marks.
- No moe-childish, no idol-fanart, no anime smile baseline, no chibi proportions.
- No retro halftone, no muddy tones, no over-saturation.
- Output: single flat 3:2 storyboard sheet image, 1536×1024, dark surface #0F1014.
```

### 1.2.8 Final Output Checklist block (시트 최하단, output rules 아래)

```
OUTPUT CHECKLIST (must satisfy all):
✓ {{rowCount}} distinct horizontal rows with grid lines
✓ {{rowCount * 2}} separate thumbnails ({{rowCount}} start + {{rowCount}} end)
✓ NOT a panoramic merged image
✓ Korean + English text only (no Japanese characters)
✓ All character thumbnails identical to attached LOCKED sheet (if character on-screen)
✓ Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)
✓ Phase {{phaseNumber}} palette ({{phaseHexAnchor}}) consistent across all thumbnails
✓ Wired earphones visible in every shot featuring 윤서준 (Phase 1 signature lock)
✓ Header reads "CUT{{NN}} ({{mm:ss-mm:ss}}) | 「{{koreanTitle}} / {{englishTitle}}」 | {{cutPersona}}"
✓ Footer LEFT = director's intent, RIGHT = transition spec
✓ No watermarks, no logos, no Japanese characters
```

---

## 1.3 Visual style block (palette, line weight, era)

이 블록은 **모든 cut sheet prompt 의 VISUAL STYLE 섹션** + **모든 Seedance prompt 의 STYLE/COLORS 섹션** 에 boilerplate 로 박힌다. `BOILERPLATE_VISUAL_STYLE` (PROMPT_BOILERPLATES.md 참조).

### 1.3.1 TROY MV visual lane = Z-track (modern Korean cinematic illustration)

- **결정 근거**: `canon/style.md §6 visual mode lock — TWO TRACKS (Z 갈래)` (2026-04-30)
- **prose track** (소설) = cinematic live-action 묘사 (그대로 유지)
- **MV track** (본 템플릿) = **modern Korean cinematic illustration** — GPT Image 2 일러스트 톤 + Seedance 2.0 일러스트 톤 영상
- 베이스 reference: `ops/character_sheets/yoon_seojun_sheet_v1.md` 가 baseline. 7 캐릭터 LOCKED 시트가 matching set 강제 reference.

### 1.3.2 Phase별 팔레트 anchor (HEX swatches)

`canon/style.md §5 seasonal grammar` + `troy-production-bible-builder SKILL.md` Phase 표 + `frontend/design/tokens.css` `--ph1`~`--ph6` 정렬.

#### Phase 1 (E001~E020) — 얇은 봄빛 (DETAILED, 본 템플릿 적용 1차 락)

| 역할 | 이름 | HEX | 사용 비중 |
|---|---|---|---|
| Primary | 옅은 봄빛 (Pale Sky) | `#E8F0F5` | 배경 sky · classroom 창 외광 · 가장 넓은 면적 |
| Accent | 잔잔한 햇살 (Warm Cream) | `#F5E1D0` | 햇빛 highlight · 학생식당 벽 · 카페 lamp 광원 |
| Supporting | 닫힌 공기 (Soft Slate) | `#7A9CB0` | 그림자 · 유리 반사 · 차단된 정서의 시각화 |
| Base / 의상 | 후드 차콜 (Charcoal) | `#2C2E33` | 서준 후드 · 어두운 외곽 · grid line |
| Tonal token (UI 기준) | (TROY `--ph1`) | `#9FB3C8` | 시트 phase chip 또는 UI 인디케이터 — prompt 본문에는 사용 X (참고용) |

**팔레트 운영 규칙 (Phase 1)**:
- 비중: Primary 50% / Accent 15% / Supporting 25% / Base 10%
- 따뜻한 색은 accent 만 — Primary 압도 금지 (서준 = 닫힘)
- 채도: 모두 muted. 채도 60% 이상 색은 거부

#### Phase 2 (E021~E035) — 가까워지는 숨, 봄~초여름 (BRIEF — 엔지니어가 도달 시 보강)

- Primary: `#D8E5DA` (mint), Accent: `#F2C5A0` (warm peach), Supporting: `#9FB3C8` (slate), Base: `#3F4A55` (deep slate)
- TROY token: `--ph2: #A8C4A2`

#### Phase 3 (E036~E060) — 여름의 열, 과밀

- Primary: `#FFD580` (sun gold), Accent: `#C8553D` (heat coral), Supporting: `#5A8DAE` (sea blue), Base: `#3A3530` (umber base)
- TROY token: `--ph3: #E0C896`

#### Phase 4 (E061~E080) — 늦여름·장마, 눅눅

- Primary: `#6B7A8F` (wet slate), Accent: `#A4906E` (damp earth), Supporting: `#8FA39A` (rain green), Base: `#2A2E2F` (rain charcoal)
- TROY token: `--ph4: #D9A6A0`

#### Phase 5 (E081~E105) — 가을 투명

- Primary: `#C8B68A` (autumn beige), Accent: `#7B8C7A` (sage), Supporting: `#3D4A5C` (deep dusk), Base: `#1F252E` (night blue base)
- TROY token: `--ph5: #B5A4C9`

#### Phase 6 (E106~E120) — 늦가을 단단함

- Primary: `#9B7E5A` (matured umber), Accent: `#D9C4A0` (late warm), Supporting: `#2E3540` (dusk navy), Base: `#1A1D24` (night base)
- TROY token: `--ph6: #8FA0A8`

### 1.3.3 Line weight, finish, era

- Line: medium-weight clean cel outlines (≈ 2-3px relative to character height). NOT hairline (anime moe 위험), NOT brushy (painterly 톤 거부).
- Finish: clean digital, NO halftone, NO noise texture, NO retro grain. Crisp.
- Era cue: "modern Korean indie graphic-novel feel meets contemporary illustrated MV" — Pixiv top-1 일러스트 / 일본 라이트노벨 표지 톤 거부. 서울 indie artbook 톤.
- Light: filmic (single key direction + soft fill), late-spring sun (Phase 1 = upper-left, low angle, thin)

### 1.3.4 No-go list (모든 cut sheet prompt 의 NEGATIVE 에 박힘)

```
NEGATIVE: no photorealistic, no 3D render, no live-action, no CGI;
no moe-childish, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no advertising commercial gloss, no luxury brand product photography;
no fantasy creature (unless Phase 5-6 symbolic insert), no magical particle bloom;
no romantic uplift, no chorus blossom celebration overflow, no idealized couple imagery;
no smile baseline (E001-E020 윤서준 lock);
no text overlays beyond the storyboard sheet's own labels;
no watermarks, no logos, no signature marks;
no Japanese characters, no Chinese characters (Korean + English only).
```

---

## 1.4 Character design attach rule (M2 enforcement)

### 1.4.1 에피소드별 LOCKED 시트 매트릭스

Generator 가 episode harness 를 읽어 출연 인물을 결정. E001 의 경우:

| 에피소드 | 메인 등장 (모든 컷 잠재 가능) | 조연 등장 (특정 컷만) | LOCKED 시트 파일 |
|---|---|---|---|
| **E001** | 윤서준 | 최이든 (CUT05 학생식당 신만) | `ops/character_sheets/yoon_seojun_sheet_v1.md` + `choi_iden_sheet_v1.md` |

확장 룰 (Generator 가 자동 적용):
- `ops/E###_episode_harness.md` 의 등장 인물 리스트 read
- 7 LOCKED 시트 (송유빈 dual-age 포함 8장) 중 매핑 → attach 리스트 생성
- 컷별 등장 = visual_cut_list 의 cut purpose 행에서 인물명 grep

### 1.4.2 OST 원칙 — character on-screen vs atmospheric

`canon/series.md §10 Production Rule` + `canon/style.md §6 MV Rule`:

> MV 는 본편 재연보다 감정 응축에 집중한다. 노래·MV 는 본편 캐논을 새로 만들면 안 된다.

→ **OST 원칙**: 모든 컷에 캐릭터 등장 강제 X. Director 재량으로 atmospheric (인물 부재, 공간만 / 손·이어폰·창문 close-up 만) 컷 가능.

**판정 룰** (Generator 가 적용):
- visual_cut_list 의 cut purpose 행에 "서준" / "이든" 등 인물명 명시 → on-screen
- 명시 없거나 "이어폰" / "창" / "복도" 등 모티프만 명시 → atmospheric (인물 surface 안 함)
- E001 cut list 기준 분류:
  - on-screen: CUT01, 03, 04, 05 (이든 추가), 06, 07, 08
  - atmospheric (인물 부재 또는 손/오브제만): CUT02 (이어폰 close-up — 손은 보이되 얼굴 X 가능)

### 1.4.3 Character attach prompt fragment (M2 canonical wording)

모든 storyboard sheet prompt 와 Seedance prompt 에 박히는 표준 attach 워딩:

```
CHARACTER REFERENCE (M2 — LOCKED sheet attach):
Match the attached character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — for 윤서준: charcoal hoodie + WIRED WHITE EARPHONES always visible)
- skin tone and natural cool-toned shading
- expression baseline (for E001 윤서준: withdrawn observant, NEVER smile)
- art style (modern Korean cinematic illustration, clean cel-shading, medium outlines, crisp digital finish)

Attached LOCKED sheets (paste these as image references in GPT Image 2 / Seedance UI):
{{characterAttachList}}
  e.g.,
  - 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG
  - 최이든 (Choi Iden) — `ops/character_sheets/choi_iden_sheet_v1.md` 산출 PNG (CUT05만)

Character must look like the SAME ACTOR across every cut of E### MV.
Do NOT redraw the face — match the LOCKED sheet face exactly.
```

`{{characterAttachList}}` = Generator 가 episode harness 에서 추출.

---

## 1.5 Cut subdivision rules (the core algorithm)

### 1.5.1 Inputs

```
- songLengthSec: number       // 210 (3:30) baseline · final mp3 lock 전엔 210 placeholder
- visualCutListPath: string   // ops/E###_visual_cut_list.md
- episodeHarnessPath: string  // ops/E###_episode_harness.md
- songBriefPath: string       // ops/E###_song_brief.md
- phaseNumber: 1 | 2 | 3 | 4 | 5 | 6
- cutOverride?: number        // 사용자 강제 컷 수 (옵션)
```

### 1.5.2 Step 1 — Determine N (cut count)

```
N_default = ceil(songLengthSec / 15)
N = cutOverride ?? clamp(N_default, 14, 16)

// Edge cases:
// - songLengthSec < 180 (3:00 미만) → allow N as low as 8 (single-pass intro/outro 짧은 트랙)
// - songLengthSec > 270 (4:30 초과) → allow N up to 20 (긴 outro 트랙)
// - songLengthSec lock 전 placeholder = 210 → N = 14 default
```

### 1.5.3 Step 2 — Compute cut boundaries

```
default cut boundary = i * 15s (for i in 0..N-1)

// Lyric-aware adjustment (recommended, not hard-required):
// - Read song_brief.md 의 가사-컷 매핑 표 (E001 의 production_bible_v2 §2부 참조)
// - 코러스 진입점, 브릿지 진입점, outro 진입점에 cut boundary align
// - 1초 이내 swing 만 허용 (Seedance 15s hard limit 초과 금지)
//
// Example (E001 song length 2:00, intended 3:30 expansion):
//   - intro instrumental ends at 0:15 → CUT01 boundary = 15s ✓ (default match)
//   - chorus enters at 0:50 → align CUT04 boundary at 0:50 (default: 0:45 → swing +5s; if Seedance 15s limit 위반이면 CUT 분리 재계산)
//   - bridge at 1:35 → CUT06 또는 CUT07 진입에 align
```

`Generator 구현 룰`: lyric-aware swing 이 Seedance 15s 한계를 위반하면 그 경계는 default 15s 로 fallback. 보고 메시지: `"Cut N: lyric-aware swing rejected (would exceed 15s); using default 15s boundary."`

### 1.5.4 Step 3 — Per-cut emotional sub-thesis

각 컷마다 1줄 dramatic thesis 추출:

```
Source priority:
1. visual_cut_list.md 의 cut purpose 라인 → 직접 인용 또는 paraphrase
2. song_brief.md 의 가사 매핑 행 → 정서 표지
3. episode_harness.md 의 emotional thesis → fallback

Output: 1 line, 8-15 Korean characters, used as cutPersona AND part of directorIntent.
```

E001 예시 추출:
- CUT01: "닫힘 / Closure" (visual_cut_list "봄 캠퍼스와 서준의 고립 동시 소개")
- CUT05: "한 줌 따뜻함 / A Warm Pinch" (visual_cut_list "이든과의 최소한의 연결")
- CUT08: "잔향 / Residue" (visual_cut_list "다음 화 예외 대기")

### 1.5.5 Step 4 — Sub-shots per cut (3-4)

**TROY meditative density**: 3 sub-shots default, 4 if cut covers a chorus drop or transition spike.

**Default (3 sub-shots)**:
- 15s / 3 = 5s each
- Shot 1 (0.0-5.0s): cut 진입 — 공간/맥락 wide
- Shot 2 (5.0-10.0s): 중간 — character action 또는 정서 close-up
- Shot 3 (10.0-15.0s): 마무리 — transition cue (다음 컷으로 향하는 시각/청각 다리)

**Weighted (4 sub-shots, chorus/transition cuts only)**:
- 15s / 4 = 3.75s each, OR weighted (5/3.5/3.5/3.0) — opener 길게, 후반 빠르게
- Shot 1 (0.0-5.0s): wide / atmospheric
- Shot 2 (5.0-8.5s): character close-up
- Shot 3 (8.5-12.0s): action shift
- Shot 4 (12.0-15.0s): transition

**Override 결정 룰**:
```
sub_shot_count = 4 if (
  cut_persona contains 'chorus' OR
  cut_persona contains 'drop' OR
  cut_persona contains 'transition' OR
  cut_persona contains '진입' OR
  cut_persona contains '한 줌'  // E001 CUT05 = chorus 진입 + 이든 등장
)
else 3
```

### 1.5.6 Step 5 — Per-cut transition spec

각 컷의 footer RIGHT cell (`TRANSITION → CUT{NN+1}`):

```
Format: "{시각 다리 1구절 한국어} → {청각 다리 1구절 한국어 OR 영문}"
Length: 1-2 lines, 30-50 characters total

Example (E001 CUT01 → CUT02):
"마지막 발걸음 슬로 모션 → CUT02 의 손 close-up 으로 컷.
 음악적으로는 piano 한 음 sustain 이 CUT02 첫 가사 진입 직전까지 이어짐."

Example (E001 CUT08 → end):
"천장 응시 fade-out → black 1초 → next episode (E002) prelude.
 piano sustained note 가 다음 화 첫 컷의 다른 음으로 변주됨."
```

---

## 1.6 Seedance multi-shot prompt template (M5 lens-switch pattern)

각 컷의 paste-ready Seedance 2.0 prompt. **AUDIO: SFX ONLY 강제 (M3)**. **15초 lock**.

### 1.6.1 Skeleton

```
CUT{NN} ({mm:ss}-{mm:ss}) — 15-second modern Korean cinematic illustration
multi-shot sequence (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)

STYLE: Clean cel-shading, medium-weight outlines, crisp digital finish,
illustrated like the attached LOCKED character reference sheet. Modern
Korean indie graphic-novel feel.

COLORS (Phase {{phaseNumber}} palette):
{{phaseColorBlock}}
  e.g., Phase 1 = pale sky #E8F0F5 (50%), warm cream #F5E1D0 (15%),
        soft slate #7A9CB0 (25%), charcoal #2C2E33 (10%).

CHARACTER REFERENCE (M2 — LOCKED sheet attach):
Reference attached: {{characterAttachList}}
Match the attached LOCKED sheet EXACTLY (face, hair, outfit, expression baseline).

────────────────── MULTI-SHOT TIMELINE (M5) ──────────────────

[{{startTimeOffset_1}}-{{endTimeOffset_1}}] Lens switch to {{cameraMovement_1}},
{{shotType_1}}. {{actionDirection_1}}. {{visualDescription_1}}.

[{{startTimeOffset_2}}-{{endTimeOffset_2}}] Lens switch to {{cameraMovement_2}},
{{shotType_2}}. {{actionDirection_2}}. {{visualDescription_2}}.

[{{startTimeOffset_3}}-{{endTimeOffset_3}}] Lens switch to {{cameraMovement_3}},
{{shotType_3}}. {{actionDirection_3}}. {{visualDescription_3}}.

(if 4 sub-shots, add fourth [time] Lens switch to ... block)

──────────────── CHARACTER LOCK (repeated verbatim) ────────────────

{{characterLockBlock}}
  e.g., 윤서준 (Yoon Seojun): 22-year-old Korean male, business
  administration student. Short messy black hair (NOT idol-styled, NOT bald,
  NOT long). Charcoal-gray oversized hoodie. WIRED WHITE EARPHONES always
  visible (cable falling along chest). Pale Korean skin, withdrawn observant
  guarded expression, NEVER smile (Phase 1 baseline). Modern Korean cinematic
  illustration, NOT live-action, NOT moe anime, NOT idol-fanart.

──────────────── AUDIO: SFX ONLY (M3 — non-negotiable) ────────────────

AUDIO: SFX ONLY. Include: {{sfxList}}.
NO music, NO BGM, NO melody, NO singing, NO dialogue, NO narration.
Music from Suno (track-level) is added in CapCut post-production — Seedance
MUST output silent video with SFX only.

──────────────── NEGATIVE (M4) ────────────────

NEGATIVE: no text, no subtitles, no letters, no watermark, no logo;
no music, no BGM, no instruments, no singing, no dialogue;
no photorealistic, no 3D render, no live-action, no CGI;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style;
no retro halftone, no muddy tones, no over-saturation;
no romantic uplift, no chorus blossom celebration overflow;
no smile baseline (E001-E020 윤서준 lock);
no Japanese characters, no Chinese characters.

OUTPUT: 15-second silent illustrated video with SFX only.
No music, no speech, no BGM. Aspect ratio 16:9. 24fps.
```

### 1.6.2 Length lock enforcement

- 모든 sub-shot 의 `endTimeOffset` 합산 = 정확히 `15.0` 초.
- Generator 는 sub-shot 합산 검증 후 mismatch 면 ERROR (do not emit prompt).
- Seedance UI 는 15초 hard limit. 14.9 또는 15.1 도 거부.

---

## 1.7 GPT Image 2 prompt template (per cut start frame still)

각 컷마다 "main still" — Seedance 의 first-frame anchor + storyboard 시트의 START FRAME 썸네일 baseline. 사용자가 GPT Image 2 에 paste → 이미지 산출 → Seedance 의 reference image 또는 first-frame 으로 업로드.

### 1.7.1 Skeleton

```
CUT{NN} MAIN STILL — first-frame reference for Seedance 2.0
{{koreanTitle}} / {{englishTitle}}  ·  {{cutPersona}}

Aspect ratio 16:9 (1920x1080). Modern Korean cinematic illustration
(Z-track, NOT live-action, NOT moe anime, NOT idol-fanart). Clean
cel-shading, medium-weight outlines, crisp digital finish.

COMPOSITION:
{{subShot1_startFrame}}
{{subShot1_visualDescription}}

CAMERA: {{subShot1_cameraMovement}}
LIGHTING: Phase {{phaseNumber}} late-{{seasonalCue}} light, {{lightDirection}},
{{lightQuality}}.
PALETTE (Phase {{phaseNumber}}): {{phaseColorBlock}}.

CHARACTER REFERENCE (M2 — LOCKED sheet attach):
{{characterAttachList}}
Match the attached LOCKED sheet EXACTLY in face, hair, outfit,
expression baseline.

NEGATIVE: no photorealistic, no 3D render, no live-action;
no moe-childish, no chibi, no idol-fanart, no anime smile baseline;
no retro halftone, no muddy, no over-saturation;
no romantic uplift, no smile baseline (E001-E020 윤서준 lock);
no Japanese characters, no Chinese characters;
no text overlays, no watermarks, no logos.

OUTPUT: single 16:9 illustrated still, 1920x1080,
suitable as first-frame reference for Seedance 2.0.
```

### 1.7.2 Aspect choice — 16:9 (not 1:1)

- MV 최종 출력 = 16:9 widescreen. 1:1 으로 생성 후 crop 하면 캐릭터 머리가 잘리거나 환경 와이드 박탈.
- 16:9 main still 직생성 → Seedance 의 first-frame 으로 그대로 업로드 가능 (Seedance default aspect = 16:9).

---

## 1.8 Generator I/O contract (for Phase 2 engineer)

### 1.8.1 TypeScript contract

```ts
type GenerateInput = {
  episodeId: string                    // "E001"
  songLengthSec: number                // 210 (3:30) baseline · placeholder 가능
  cutOverride?: number                 // optional, default = ceil(songLengthSec / 15)
  phaseNumber?: 1 | 2 | 3 | 4 | 5 | 6  // optional, derived from episodeId if omitted
                                       // (E001-E020 = 1, E021-E035 = 2, E036-E060 = 3,
                                       //  E061-E080 = 4, E081-E105 = 5, E106-E120 = 6)
}

type SubShotSpec = {
  shotNumber: number                   // 1..3 or 1..4
  startTimeOffset: number              // sec offset within cut, e.g., 0.0
  endTimeOffset: number                // e.g., 5.0
  startFrame: string                   // 1-2 sentence Korean visual description
  endFrame: string                     // 1-2 sentence Korean visual description
  cameraMovement: string               // English, 8-12 words
  shotType: string                     // English, 2-3 words (e.g., "wide", "medium close-up")
  actionDirection: string              // Korean, 18-30 chars
  dialogueLyrics: string               // usually "—"; if cut covers a vocal line,
                                       // the Korean lyric line(s)
  sfx: string                          // English comma list, 4-8 words
  music: string                        // English single line, 6-12 words,
                                       // describes Suno arc at this beat
}

type CutSpec = {
  cutNumber: number                    // 1..N
  startSec: number
  endSec: number
  koreanTitle: string                  // generated from visual_cut_list segment
  englishTitle: string                 // English mirror
  cutPersona: string                   // 1-3 word emotional descriptor
                                       //   e.g., "닫힘 / Closure"
  subShots: SubShotSpec[]              // 3 or 4 entries
  directorIntent: string               // Korean, 2-3 sentences,
                                       // 컷 존재 이유 + 본편 캐논 응축 포인트
  transitionToNext: string             // Korean, 1-2 sentences,
                                       // 시각/청각 다리 to CUT{N+1}
                                       // (last cut: TRANSITION → end fade)
  charactersOnScreen: string[]         // ["윤서준"], or [] for atmospheric cut
                                       //   Generator derives from visual_cut_list grep
}

type GenerateOutput = {
  episodeId: string
  songLengthSec: number
  phaseNumber: 1 | 2 | 3 | 4 | 5 | 6
  cuts: CutSpec[]                      // length N

  // Per-cut paste-ready prompts (the actual exports)
  storyboardSheetPrompts: string[]     // length N · paste into GPT Image 2
                                       //   produces 3:2 1536×1024 sheet PNG
  seedancePrompts: string[]            // length N · paste into Seedance 2.0
                                       //   produces 15s silent video MP4
  mainStillPrompts: string[]           // length N · paste into GPT Image 2
                                       //   produces 16:9 1920×1080 first-frame PNG

  // Manifest (for QA + traceability)
  characterAttachManifest: {
    cutNumber: number
    attachedSheetIds: string[]         // ["yoon_seojun_v1", "choi_iden_v1"]
  }[]
  audit: {
    cutBoundariesAligned: boolean      // true if lyric-aware adjustment succeeded
                                       //  on chorus/bridge boundaries
    swingedBoundaries: number[]        // cut numbers where boundary was swung
    rejectedSwings: number[]           // cut numbers where lyric-aware swing
                                       //  was rejected due to 15s limit
    totalRunSec: number                // sum of all cut lengths (must equal songLengthSec
                                       //  ± 15s tolerance for Seedance hard limit)
  }
}
```

### 1.8.2 Generation order (Phase 2 engineer follow strictly)

1. Read inputs (episodeId, songLengthSec, optional cutOverride/phaseNumber)
2. Derive phaseNumber from episodeId if not given
3. Read source files:
   - `ops/{episodeId}_episode_harness.md`
   - `ops/{episodeId}_song_brief.md`
   - `ops/{episodeId}_visual_cut_list.md`
4. Compute N (Step 1 of 1.5)
5. Compute cut boundaries with lyric-aware swing (Step 2)
6. For each cut i in 1..N:
   - extract emotional sub-thesis → `cutPersona`, `koreanTitle`, `englishTitle`
   - decide sub_shot_count (3 or 4) per Step 4 rules
   - generate `SubShotSpec[]` from visual_cut_list segments + harness
   - derive `charactersOnScreen` (visual_cut_list grep)
   - generate `directorIntent` (2-3 sentences)
   - generate `transitionToNext` (1-2 sentences)
7. Assemble `storyboardSheetPrompts[i]` from `BOILERPLATE_*` fragments + cut data
8. Assemble `seedancePrompts[i]` from M5 lens-switch template + cut data + `BOILERPLATE_AUDIO_SFX_ONLY` + `BOILERPLATE_NEGATIVE_PROMPT`
9. Assemble `mainStillPrompts[i]` from §1.7 template + cut data
10. Run audit checks:
    - sub-shot offset sum == 15.0 for every cut
    - cut boundary sum == songLengthSec (± 15s for Seedance limit)
    - charactersOnScreen members exist in LOCKED sheet roster
    - All boilerplates substituted (no `{{...}}` leakage)
11. Return `GenerateOutput`

### 1.8.3 Error handling (engineer must implement)

- Missing source file → `throw new Error("E### source file missing: " + path)`
- songLengthSec < 60 or > 600 → `throw new Error("songLengthSec out of range")`
- cutOverride < 4 or > 30 → reject with explanation
- Sub-shot offset sum mismatch → drop the cut from output, log to audit
- Unsubstituted `{{...}}` in final prompt → throw before emit (no leaky prompts)

### 1.8.4 Frontend integration hint (non-binding)

- 사용자 콘솔 화면: 단일 입력 form (episodeId 드롭다운 + songLengthSec 인풋 + 옵션 cutOverride) → "Generate" 버튼 → 산출 N 컷의 paste-ready prompt 3종 (storyboardSheet / seedance / mainStill) 을 카드 UI 로 표시. 각 카드에 "Copy" 버튼.
- Generator 는 클라이언트 사이드 또는 Next.js API route 양쪽 가능. 본 템플릿은 I/O 스펙만 정의 — 구현 위치는 엔지니어 재량.
