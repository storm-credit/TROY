# 지아린 (Ji Arin) — Character Sheet Prompt v2

> **GPT Image 2 paste-ready prompt** for 지아린 캐릭터 시트.
> Phase 1 (얇은 봄빛, 첫 등장 신). Modern Korean cinematic illustration.
>
> **v1 → v2 변경 이유**: v1 (cream cardigan + 청바지) 가 캐논 lock 위반 + 오케스트라 5팀 점검 결과 캐릭터 정체성 약함.
> 본 v2 는 5팀 권고 + canon `E002 서점에서의 충격` + `E003 아린이라는 존재` + `ops/character_face_lock_harness.md §4 Arin lock` 통합 적용.
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 (또는 호환 도구) 에 paste → 시트 이미지 1장 산출.
> 산출 위치 권장: `export/music/character_lock_pack/ji_arin_sheet_v2.png` (face_lock_harness §10 표준 위치)
> 결과 검증 → 톤·디테일 OK 면 본 sheet 가 vol1 12트랙 모든 MV 의 face-lock baseline.
>
> **상태**: prompt-ready (v2) · sheet 검증 대기

---

## v1 → v2 차이 요약 (10개 보정)

| # | 차원 | v1 (폐기) | v2 (적용) | 출처 |
|---|---|---|---|---|
| 1 | 메인 컬러 | cream cardigan + 청바지 | **옅은 노란 가디건** (#F5E5A0) | E002 §46 lock ⭐ |
| 2 | Signature prop | pendant 1개 | **기타 케이스** + pendant + 문예지 | E003 §15 lock ⭐ |
| 3 | 머리 길이 | shoulder-length wavy | **긴 머리** (chest-length 이상, 부드럽게 떨어짐) | E002 §46 lock |
| 4 | 표정 set | 6개 (자유 작성) | **face_lock §4 4개 + warm direct + singing** | face_lock §4 lock |
| 5 | Outfit anchor | 4개 (자유) | **face_lock §4 3 anchor + 디테일** | face_lock §4 lock |
| 6 | 신체 습관 | 일반 포즈 | **발끝 박자 + 책장 누름 + 가디건 자락** | E003 §15, §32 lock |
| 7 | 배경 | 단색 cream gradient | **봄빛 캠퍼스 + 서점 창가 + 문향관 정원** | E002, E003 spaces |
| 8 | anti-rule | 일반 negative | **+ no performance flex, subject-not-object** | face_lock §7 lock |
| 9 | 팔레트 | cream 우세 | **옅은 노란 primary** (인파 속 분리되는 발신자) | E002 §145 lock |
| 10 | 표정 baseline | soft curious | **책 읽는 미세 변화** (살아있는 정직, idol-bright X) | E003 §32 lock |

---

## GPT Image 2 PROMPT

```
You are a professional animation character designer, art director,
and visual concept artist.

Your task is to generate a complete character profile sheet for
"지아린" (Ji Arin), the female protagonist of TROY 「너라는 운율」
(You are the Rhyme), a Korean campus romance with synesthetic fantasy
themes. She is the in-world singer of arin album vol.1 (12 tracks)
and the only "clear-rhyme sender" that 윤서준 can hear cleanly.
This sheet must MATCH the 윤서준 character sheet (same artist hand,
same Modern Korean cinematic illustration style — matching set).

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Target Language: Korean
- All visible text inside the image MUST be written in Korean
- English labels allowed as secondary annotations in parentheses
- Includes: character name, profile, role, labels, annotations
- NO Japanese characters anywhere

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, fresh contemporary
indie artbook style, refined illustrated character art for emotional
music video. IDENTICAL to the 윤서준 character sheet (matching set).
- Clean cel-shading with defined natural light and shadow
- Medium-weight clean outlines
- Crisp digital finish, NOT photorealistic
- Spring-warm naturalistic colors with cinematic late-spring atmosphere
- Phase 1 palette tilted warm: pale yellow #F5E5A0 (signature),
  warm cream #F5E1D0, pale sky #E8F0F5, soft coral #F2C5A0
- NOT moe-childish, NOT idol-fanart, NOT retro, NOT muddy
- NOT idol stage glamour, NOT fashion editorial, NOT advertising gloss
- Honest spring light, late-spring melancholy with warmth
- Korean indie graphic-novel feel meets contemporary illustrated MV

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE]
═══════════════════════════════════════════════════════════

Generate ONE final character sheet image using magazine-style layout:

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 지아린 (Ji Arin)
Birthdate (생년월일): 2004년생
Age (나이): 21세
Height (신장): 162cm
Nationality (국적): 대한민국
Department (학과): 혜담대학교 국문학과
Visible trait (시각 특징): 캠퍼스 밴드 동아리 보컬 (기타 케이스 동행)
Role (역할): TROY 메인 여자 주인공.
              발신자 (Sender). 인-월드 가수 (arin album vol.1 12 tracks).
              윤서준의 청각에 들리는 유일한 '맑은 운율'.

Profile description (프로필 소개 — in Korean):
"21세 국문학과 학생이자 캠퍼스 밴드 보컬. 솔직하고 호기심 많고
감정 표현이 직접적인 인물. 윤서준의 능력에 들리는 유일한 '맑은
운율'. 단순한 치유형 여주가 아니라 상처와 분노와 경계를 충분히
거친 뒤 자기 삶을 스스로 선택하는 사람으로 완성된다.
이중 구조: 밝음은 성격이고, 침묵은 방어다.
인파 속에서도 옅은 노란빛이 다른 속도로 움직이는 사람."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) --
═══════════════════════════════════════════════════════════

Left side large portrait (leftmost column, full height):
- Upper body portrait, three-quarter angle
- Modern Korean cinematic illustration style
- LONG black hair (chest-length or longer), softly falling, natural
  wave with subtle warm highlight, soft front bangs
  (NOT shoulder-length, NOT idol-styled, NOT moe-cut)
- Warm honest brown eyes, slight curiosity in baseline
- Pale Korean skin with warm spring-light shading
- Pale yellow / soft butter cardigan (#F5E5A0) over a soft coral
  inner top (#F2C5A0) — SIGNATURE COLOR LOCK
  (NOT pure cream, NOT white — must read as "옅은 노란 기" /
   pale yellow with warm tint)
- Long midi skirt or natural relaxed fit pants in soft beige tone
  (NOT denim jeans — replaced for visual richness)
- Small pendant necklace (subtle warm gold)
- Acoustic guitar case (small, hard-shell, simple) leaning against
  her or held by hand — SIGNATURE PROP (밴드 보컬 visible trait)
- Background: late-spring campus light, faint cherry blossom bokeh,
  warm cream-yellow gradient

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
Show 6 face close-ups in a row, all consistent style.
Built on face_lock_harness §4 Arin expression set (4 canonical) +
2 episode-anchored additions.

1. 차분 (Calm) — book-reading baseline. Eyes lowered slightly toward
   imaginary page, lips relaxed, micro-smile not yet formed.
   Living quietness, NOT idol-blank. (face_lock §4)

2. 숨은 생각 (Hidden thought) — micro-furrow between brows, eyes
   focused on something inward, mouth still. The moment a sentence
   on the page hooks her. (face_lock §4 + E003 §36)

3. 조용한 자기영역 (Quiet selfhood) — looking off-frame mid-distance,
   self-contained, neither inviting nor closing off. The expression
   of someone fully inside her own day. (face_lock §4)

4. 잠깐 멈춤 (Private pause) — head slightly turned, the moment of
   noticing something faintly — wind, sound, presence — without
   committing to a reaction yet. (face_lock §4)

5. 솔직한 미소 (Honest direct smile) — eyes crinkled at corners
   first, lips following. Warm and direct, NOT idol-bright.
   The face she shows when a friend calls her name.
   (E003 §69 lock)

6. 노래 (Singing) — eyes half-closed, mouth open mid-phrase.
   NOT stage performance flex — a quieter, almost humming-to-herself
   posture. The "noratgarak" she lets slip into the air without
   meaning to perform. (E003 §90 lock)

All 6 same long hairstyle, consistent skin tone, neutral warm-cream
backgrounds per frame.

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
Built on face_lock_harness §4 Arin outfit anchor (3 canonical) +
1 detail variant.

1. ⭐ 메인 — Campus Walking Outfit (캠퍼스 산책 / 정원)
   PRIMARY OUTFIT. Pale yellow / soft butter cardigan (#F5E5A0) over
   soft coral inner top (#F2C5A0), long midi skirt or relaxed
   beige pants, acoustic guitar case held in one hand, pendant
   necklace visible. The outfit she wears in 서점 + 문향관 정원
   first encounters.
   → MARK "메인 / MAIN" with small star icon

2. 음악실 (Music room outfit) — Band practice room.
   Soft white loose-fit blouse, dark slim jeans, hair tied back
   loosely. Acoustic guitar in lap (not case — instrument out).
   Mic stand cue partially visible. Practice-mode, NOT stage-
   performance flex. (face_lock §4 anchor + canon §3 musical
   signature: 투명한 피아노 / 정직한 호흡)

3. 자취방 (Private room outfit) — Home / unguarded.
   Oversized warm beige knit + simple cotton tee underneath,
   relaxed lounge pants. Hair down loosely, no guitar visible.
   The version of her that is alone — slight emotional release
   visible (밝음의 반대편, 침묵의 방어가 풀린 순간).
   (face_lock §4 anchor)

4. 디테일 — Signature items close-up:
   - Cardigan hem texture (옅은 노란 fabric weave)
   - Acoustic guitar case handle (worn from use)
   - Pendant necklace (warm gold, simple)
   - Small notebook for lyrics (lightly used, visible writing)

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
Show 3 full-body views in main outfit (campus walking):

1. 정면 (Front) — full body front view, guitar case held in left hand,
   right hand at her side, slight natural stance (NOT model-pose,
   NOT idol-stance)

2. 측면 (Side) — full body side profile, guitar case visible at
   her side, long hair falling forward slightly

3. 후면 (Back) — full body back view, long hair flowing, cardigan
   back visible, guitar case from behind

All 3 same height, same proportions, soft warm-cream background,
faint cherry blossom petals drifting (subtle).

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
Show 5 action poses. Each pose anchored to a canonical body habit
from E002/E003 — NOT idol stage flex, NOT romance pose.

1. 걷기 (Walking on campus) — natural campus walk, guitar case in
   one hand, cardigan hem flowing slightly in spring breeze.
   The pose of "옅은 노란빛 하나가 인파 속에서 다른 속도로 움직이는"
   moment. (E002 §145 lock)

2. 책 읽기 (Reading 문예지) — sitting on bench or low chair,
   one knee crossed, magazine open on lap, head slightly bowed,
   foot tapping gentle rhythm against ground.
   (E003 §15 발끝 박자 lock)

3. 부르면 돌아보기 직전 (Just before turning at her name) — paused
   mid-page-turn, head beginning to lift, the micro-second before
   "지아린!" 부름에 표정이 밝아지는 순간. (E003 §69)

4. 무심코 흥얼 (Humming to herself) — walking or sitting, faint
   short note at her lips, NOT performing. The "노랫가락처럼
   흘러나오는 한 소절" — accidentally let into the air.
   (E003 §90 lock)

5. 기타 옆에 (With guitar, music room) — sitting in band practice
   room, acoustic guitar in lap, hand on neck, head slightly down
   focused on a chord — quiet practice mode, NOT stage-pose.
   (face_lock §7 "no performance flex")

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"
Individual items laid out flat:

- 가디건 (Cardigan) — pale yellow #F5E5A0, soft knit, slightly
  oversized fit, warm hand-feel
- 이너 탑 (Inner top) — soft coral #F2C5A0, simple round-neck cotton
- 스커트 / 팬츠 (Skirt / Pants) — long midi skirt in soft beige,
  OR relaxed natural-fit pants in warm beige (NOT denim jeans)
- 펜던트 (Pendant) — warm gold, simple round disc, small
- 기타 케이스 (Acoustic guitar case) — hard-shell, simple black or
  natural brown, slightly worn, simple fabric strap
- 노트 (Lyrics notebook) — small leather/cloth cover, lightly
  used, visible pen clip

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
Story-related items as small icons:

- 어쿠스틱 기타 + 케이스 (Acoustic guitar with case) — most
  important signature, drawn larger than other props
- 문예지 (Literary magazine) — open or closed, soft worn cover
- 펜던트 (Pendant) — warm gold round disc
- 노트 + 펜 (Lyrics notebook + pen) — for capturing humming
- 마이크 (Microphone) — for music room shots only, simple
  practice mic stand

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
Color palette swatches with hex codes:

- Primary ⭐: 옅은 노란 (Pale Yellow) #F5E5A0
   ("the only yellow that moves at a different speed in the crowd")
- Accent: 부드러운 코랄 (Soft Coral) #F2C5A0
- Supporting 1: 따뜻한 크림 (Warm Cream) #F5E1D0
- Supporting 2: 옅은 봄빛 (Pale Sky) #E8F0F5
- Dark anchor: 검정 머리 + 기타 케이스 (Charcoal) #2C2E33

Below palette: "유일한 노란빛, 봄빛, 솔직함, 발신하는 사람"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box with description in Korean:

"21세 국문학과 학생이자 캠퍼스 밴드 보컬. 윤서준의 청각에 들리는
유일한 '맑은 운율'. 호기심→끌림→사랑→의심→상처→재선택의 6단계
아크. 결말은 Perfect Resonance 가 아니라 '말하고, 요구하고,
이해한 뒤에도 떠날 수 있는 성숙'.

이중 구조 lock: 밝음은 성격이고, 침묵은 방어다.
단순한 치유형 여주 아님 — 서준의 해석이 틀릴 수 있다는 현실을
들고 오는 인물."

서사적 역할 (Narrative Roles):
- TROY 메인 여자 주인공
- 발신자 (Sender)
- 인-월드 가수 (arin album vol.1 12 tracks vocalist)
- 자기 삶을 스스로 선택하는 인물

═══════════════════════════════════════════════════════════
-- MUSICAL SIGNATURE (음악 인상) --
═══════════════════════════════════════════════════════════

Header label: "음악 인상 (MUSICAL SIGNATURE)"

"투명한 피아노 + 숨결 같은 패드의 중첩
 기쁨: 경쾌한 스타카토
 사랑: 따뜻한 어쿠스틱과 피아노
 혼란: 복잡한 불협화음
 닫힘: 유리 너머로 멀어짐"

(서준의 회색 노이즈와 정확히 대비되는 톤)

═══════════════════════════════════════════════════════════
-- MOOD BOARD (무드) --
═══════════════════════════════════════════════════════════

Header label: "무드 (MOOD BOARD)"
4 small thumbnail mood references (illustrated, not photos):

- 혜담대 서점 창가, 옅은 노란빛 하나가 책 읽고 있는 풍경 (E002)
- 문향관 정원 벤치, 기타 케이스 옆에 둔 옆모습 (E003)
- 인파 속에서 다른 속도로 움직이는 노란빛 (E002 §145)
- 봄 캠퍼스 길, 가디건 자락이 바람에 가볍게 흔들리는 뒷모습

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Clean grid-based editorial magazine layout
- Portrait 2:3 aspect ratio (1024 x 1536)
- Warm cream-yellow background (#F5E1D0 / #F5E5A0 light tilt)
  with pale sky accents
- Large portrait on left, information panels on right
- Korean labels prominent, English in parentheses
- ALL character illustrations in same consistent art style
- Modern Korean cinematic illustration aesthetic throughout
- IDENTICAL artist hand to 윤서준 sheet (matching set)

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- MUST be illustration (NOT photorealistic, NOT 3D render)
- Modern Korean indie cinematic illustration
  (NOT moe anime, NOT idol-fanart, NOT retro, NOT advertising gloss)
- ALL views same face, same hair length (long), same design,
  same proportions
- Pale yellow cardigan IDENTICAL color (#F5E5A0) in every view
  that shows main outfit (signature color lock — 인파 속 분리되는
  유일한 노란빛)
- Acoustic guitar case visible in main outfit views (signature prop)
- LONG hair (chest-length or longer) consistent across all views
- Pendant necklace visible as detail accent
- Clean digital finish — NO halftone, NO retro texture, NO muddy
- Phase 1 palette tilted WARM (pale yellow primary, NOT cool gray)
- All text Korean (English in parentheses only)
- NO Japanese characters
- NO watermarks, NO logos
- Expression baseline = HONEST DIRECT, not idol-bright, not blank
- "Arin remains subject, not object" — no possessive romance pose,
  no idol stage flex, no fashion-editorial seductive stance
  (face_lock_harness §7 STRICT)
- "Brightness is personality, silence is defense" duality must
  be readable across the 6 expressions

--no photorealistic, no 3D render, no retro texture, no muddy tones,
no moe childish style, no idol-fanart pose, no idol stage flex,
no fashion editorial seductive pose, no advertising gloss,
no possessive romance pose, no Western fashion editorial,
no aggressive eye contact baseline, no Japanese characters,
no watermarks, no logos
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

시트 이미지 받으면 다음 항목 체크:

### 캐논 lock 체크 (face_lock_harness §4 + E002/E003)
- [ ] **옅은 노란 가디건** (#F5E5A0) — 인파 속 분리되는 시그니처 컬러로 인식 가능?
- [ ] **긴 머리** (chest-length 이상, 부드럽게 떨어짐) — shoulder-length 면 fail
- [ ] **기타 케이스** signature prop — 메인 outfit 에 visible?
- [ ] **이중 구조** — 밝음 + 침묵 둘 다 표정 set 에 보임?
- [ ] **expression set 4 canonical** (calm / hidden thought / quiet selfhood / private pause) 모두 식별 가능?
- [ ] **outfit anchor 3** (campus walking ⭐ / music room / private room) 분리 표시?

### face_lock_harness §7 anti-rule 체크
- [ ] **NO performance flex** — 무대 의상 outfit 이 idol stage pose 가 아닌 practice-mode?
- [ ] **NO possessive romance pose** — pose 5개 중 romance-coded 없음?
- [ ] **Subject not object** — 표정이 inviting/seductive baseline 이 아닌 self-contained?
- [ ] **NO idol-bright baseline** — calm baseline 이 idol fanart smile 아님?

### 기술 체크
- [ ] **모든 view 동일 인물** (face-lock 일관성)
- [ ] **얼굴**: 21세 한국 여대생 인상, warm honest 표정 baseline
- [ ] **컬러**: Phase 1 warm tilt — 옅은 노란 primary 가 cream 보다 강하게 우세
- [ ] **톤**: 일러스트 (NOT photo, NOT 3D, NOT moe, NOT idol-fanart)
- [ ] **텍스트**: 한국어 primary + 영어 parentheses (NO Japanese)
- [ ] **윤서준 sheet 와 matching set** (same artist hand)
- [ ] **포즈 5개 중 발끝 박자 / 흥얼 / 부름 직전** 캐논 lock 신체 습관 식별 가능?

### 문제 발견 시 v3 보정 가이드
- 가디건 색이 cream/white 로 나옴 → "pale yellow #F5E5A0 강제, NOT cream NOT white" 강조
- 머리 짧게 나옴 → "LONG hair, chest-length minimum" 강조
- 기타 케이스 누락 → "main outfit 모든 view 에 acoustic guitar case visible 강제"
- idol-bright 표정 → "NO idol-bright baseline, honest direct only" 강조
- 인파 속에서 안 분리됨 → "background 의 다른 인물 톤을 cool gray 로, 아린만 warm yellow 로 separation"
- 무대 outfit 이 idol stage flex → "music room PRACTICE mode, NOT stage performance"
- 톤 너무 cool/회색 → "Phase 1 WARM tilt, NOT muted gray-blue (서준 sheet 와 다름)"

→ 본 calibration 결과를 v3 prompt 에 반영 후 재생성. v3 결과가 OK 면 sheet locked, vol1 12트랙 모든 MV 의 reference 로 사용 가능.

---

## v2 다음 단계

1. 사용자: 위 prompt block 을 GPT Image 2 에 paste → 시트 이미지 1장 산출
2. 사용자: 결과 이미지 위치 알려주기 (권장: `export/music/character_lock_pack/ji_arin_sheet_v2.png`)
3. Conductor: calibration 가이드 따라 검증 → OK 면 status = locked, 다음 캐릭터 (최이든) prompt 작성. 보정 필요면 v3 작성.
