# 송유빈 (Song Yubin) — Character Sheet Prompt v3

> **GPT Image 2 paste-ready prompt** for 송유빈 캐릭터 시트 (dual-age).
> Phase 5 재등장 (E086+) + 회상 16세. Modern Korean cinematic illustration.
> MATCHING SET with 서준·아린·이든·강도현·배소나 (LOCKED). 같은 일러스트 hand 강제.
>
> **v2 → v3 변경 이유**:
> - v2 시트 결과 사용자 피드백: "**송유빈 vs 배소나 얼굴이 너무 똑같다**"
> - 진행 룰: 배소나 v2 가 먼저 LOCKED (baseline) → 나중 작성된 송유빈이 차별화 책임
> - v2 의 표정·자세·머리 길이 차별로는 부족 — face mold 자체가 동일 (같은 일러스트 hand 의 default)
> - v3 = **face mold 독립 차별화 10개 lock** + 책 prop 추가 + warm undertone 강화
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 에 paste.
> 산출 권장 위치: `export/music/character_lock_pack/song_yubin_sheet_v3.png`
>
> **상태**: prompt-ready (v3) · sheet 검증 대기

---

## v2 → v3 차이 (송유빈 특화 차별 lock 10개)

| # | 차원 | 배소나 (LOCKED baseline) | 송유빈 v3 |
|---|---|---|---|
| 1 | **얼굴 윤곽** | sharp pointed chin, compact face | **softer oval, slightly longer face** ⭐ |
| 2 | **눈매 끝** | sharp lifted outer corner | ⭐ **slightly DOWNTURNED outer eye corner** (wistful 시각화) |
| 3 | **속눈썹** | minimal natural | **longer lashes**, soft under-eye shadow |
| 4 | **입술** | thin neutral, smile-readiness | ⭐ **fuller lower lip**, slightly parted quiet wistful |
| 5 | **턱선** | sharp jawline | **softer jawline**, mature settled |
| 6 | **광대** | slightly more pronounced | softer cheek shading |
| 7 | **머리 길이 (현재)** | bob (chin-length) | ⭐ **chest-length** (16세 = waist-length longer) |
| 8 | **머리 스타일** | clean blunt cut | **soft side part + slight natural wave/fall** |
| 9 | **피부 undertone** | cool undertone | ⭐ **warm autumn undertone** (autumn beige skin) |
| 10 | **추가 prop** | 안경 + 컵 톡톡 | ⭐ **카페 컵 + 책** (E086 늦은 설명자 = 책 추가) |

---

## GPT Image 2 PROMPT

```
You are a professional animation character designer, art director,
and visual concept artist.

Your task is to generate a complete DUAL-AGE character profile sheet
for "송유빈" (Song Yubin), supporting female character in TROY 「너라는
운율」 — 윤서준's first love at age 16 (the explicit origin of his
sensory trauma) and the late-Phase 5 reappearance who closes that
old wound. NOT a romantic re-entry. Locked as "**제대로 끝나기
위해 돌아온 과거**".

The sheet must show BOTH her present-day form (22세, Phase 5,
E086 reappearance) AND a memory variant (16세 flashback).

This sheet must MATCH the locked sheets of 서준·아린·이든·강도현·
배소나 (same artist hand, IDENTICAL Modern Korean cinematic
illustration style — matching set), AND must be visually CLEARLY
DISTINCT from 배소나 (locked baseline). v2 failed this — face
mold was nearly identical to 배소나. v3 enforces 10-rule face
mold independence.

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Korean primary, English in parentheses. NO Japanese characters.

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, IDENTICAL to the
locked sheets. Autumn-toned palette for present + memory-pink
nostalgic tilt for 16-year-old flashback.
- Clean cel-shading, medium clean outlines, crisp digital finish
- Phase 5 palette: calm beige #C8B68A, autumn brown #8B6F4E,
  memory pink #F2D5D0, soft gray #9BA0A6
- WARM autumn skin undertone (NOT cool gray like 배소나)
- NOT moe-childish, NOT femme-fatale, NOT villain framing,
  NOT romantic re-entry, NOT idol-fanart

═══════════════════════════════════════════════════════════
[FACE MOLD INDEPENDENCE — CRITICAL — 10 RULES]
═══════════════════════════════════════════════════════════

송유빈 must look like a CLEARLY DIFFERENT PERSON from 배소나
(locked baseline), even though both share the calm dark-haired
Korean female aesthetic. Apply ALL 10 rules with strict force:

1. FACE SHAPE — SOFTER OVAL (NOT sharp compact like 배소나).
   Slightly LONGER face proportion conveying mature stillness.

2. EYE CORNERS — Outer corners SLIGHTLY DOWNTURNED (wistful
   weight). NOT sharp lifted (배소나's sharp intelligent look).
   This is the most important single differentiation —
   wistfulness lives in the eye corner shape.

3. LASHES — LONGER lashes with soft under-eye shadow. NOT
   minimal natural like 배소나. The shadow gives "she has been
   thinking about something" weight.

4. LIPS — FULLER LOWER LIP, slightly parted quiet wistful.
   NOT thin neutral with smile-readiness like 배소나. The lower
   lip carries the unspoken weight.

5. JAWLINE — SOFTER jawline, mature settled. NOT sharp pointed
   chin like 배소나.

6. CHEEKBONE — Softer cheek shading. NOT slightly pronounced
   like 배소나.

7. HAIR LENGTH (PRESENT 22세) — CHEST-LENGTH straight black
   hair (length reaches mid-chest). NOT bob, NOT shoulder-only.
   Clearly longer than 배소나's bob.

8. HAIR STYLE — Soft SIDE PART with slight natural wave or
   fall. NOT clean blunt center cut like 배소나. Hair has
   slight movement and softness.

9. SKIN UNDERTONE — WARM autumn undertone (warm beige skin
   shading). NOT cool gray undertone like 배소나. This affects
   overall color temperature of the entire face.

10. NO GLASSES — Bare face (안경은 배소나의 lock 시그니처,
    송유빈은 안경 X). The bare face emphasizes the wistful
    eye-corner and full lower lip differentiation.

OVERALL FACE INSTRUCTION: "22세 Korean female with SOFTER OVAL
face, DOWNTURNED outer eye corners, LONGER lashes with soft
under-eye shadow, FULLER lower lip slightly parted, SOFTER
jawline, CHEST-LENGTH straight hair with soft side part and
natural wave, WARM autumn skin undertone, NO glasses. Must
look like a clearly different actor from 배소나 — different
face mold, different eye shape, different lip shape, different
hair, different undertone. Same illustration hand for matching
set, but visibly distinct person."

16세 face mold = same person younger, with WAIST-LENGTH longer
hair (visibly longer than 22세 chest-length), softer rounder
youth, but SAME oval face / downturned eye / fuller lip /
warm undertone signatures. Age difference is in hair length +
posture + youth softness, NOT in face mold change.

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE — DUAL-AGE LAYOUT]
═══════════════════════════════════════════════════════════

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

VERTICAL DUAL-AGE LAYOUT:
- Top half = 현재 (Present, 22세, Phase 5 reappearance)
- Bottom half = 회상 (Flashback, 16세, the "사랑해" trauma origin)

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 송유빈 (Song Yubin)
Age (나이): 22세 (현재) / 16세 (회상, 열여섯의 봄)
Nationality (국적): 대한민국
Visible trait (시각 특징): 단단해진 어깨 + 컵 물방울 엄지 문지름
                              + 책 (늦은 설명자 prop)
                              긴 chest-length 머리, downturned 눈매,
                              warm autumn undertone
Role (역할): TROY 조연 — 서준의 16세 첫사랑이자 sensory trauma
              origin. Phase 5 재등장 = "제대로 끝나기 위해 돌아온
              과거" (locked). 새 로맨스 X (canon §6).

Profile description (프로필 소개 — in Korean):
"서준의 16세 시절 첫사랑. '사랑해' 라는 말 뒤에서 지루함의
불협화음이 들렸던 사건의 당사자. 본인은 평범한 16세였고 서준의
능력을 알지 못했다.

Phase 5 (E086) 에서 22세 성인이 된 모습으로 재등장. 새 사랑이
아니라 서준이 자기 상처를 마주하고 봉합하는 계기 (locked: 새
삼각관계 X — 봉합 장치 only).

핵심 인상: '제대로 끝나기 위해 돌아온 과거'. 늦었지만 정확한
늦은 설명자. '시간은 얼굴보다 자세에 먼저 남는다' 는 사람."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) — DUAL-AGE --
═══════════════════════════════════════════════════════════

(A) 현재 22세 (Top half) — Large portrait:
- Upper body, three-quarter angle
- ⭐ CHEST-LENGTH straight black hair with soft SIDE PART and
  slight natural wave/fall (NOT bob, NOT shoulder-only)
- ⭐ Calm warm-brown eyes with DOWNTURNED outer corners
  (wistful weight)
- ⭐ LONGER lashes with soft under-eye shadow
- ⭐ FULLER lower lip slightly parted, quiet wistful baseline
- ⭐ SOFTER OVAL face, slightly longer proportion, softer jawline
- Pale Korean skin with WARM AUTUMN undertone (warm beige
  shading, NOT cool gray)
- NO glasses (안경은 배소나의 lock)
- Beige fine-knit sweater + brown midi skirt
  OR camel cardigan layered over white tee + dark slim pants
- 단단한 어깨 line (가방 끈 visible)
- Holding plastic café cup, 엄지가 컵 물방울 문지르는 자세
- Book (small hardcover) in other hand or on table beside cup
  (NEW prop — 늦은 설명자 정체성)
- Background: 혜담대 후문 작은 카페 창가, late-afternoon
  Phase 5 autumn light, warm beige to autumn brown gradient

(B) 16세 회상 (Bottom half) — Memory portrait:
- Same face mold (oval + downturned eye + fuller lip + warm
  undertone), just younger softer
- ⭐ WAIST-LENGTH longer straight black hair (visibly longer
  than current 22세 chest-length)
- Generic Korean high school uniform (white blouse + dark
  skirt + ribbon)
- HONEST YOUNG smile baseline (innocent, did not know about
  서준's ability)
- Background: pale spring with thin nostalgic glow, memory
  pink #F2D5D0 + cherry blossom petal hint
- "사랑해" 장면 표정 = 본인 의도 honest young, micro-shadow
  hint only (관찰자만 보는 ambiguity, NOT villain framing)

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
6 close-ups (4 present 22세 + 2 flashback 16세). All apply
the 10-rule face mold (downturned eyes + fuller lip + softer
oval + warm undertone).

1. 기본 22세 — calm wistful baseline, slight quiet smile,
   downturned eye corners visible

2. 작은 웃음 22세 — "아주 작게 웃음", quiet wistful smile,
   fuller lower lip slightly lifted at corners

3. 슬픈 웃음 22세 — "슬픈 표정에 가까운 웃음", lower lip
   slight tremor hint

4. 늦은 설명 22세 — calm direct, downturned eyes meeting
   camera, the "그때 넌, 늘 내가 무슨 생각을 하는지 이미 알고
   있는 사람처럼 굴았어" moment

5. 회상 16세 honest young — innocent young smile, fuller
   lower lip in youthful softness, longer hair visible

6. 회상 16세 그림자 — same honest young face but with
   subtle micro-shadow at mouth corner (observer
   interpretation only, NOT calculating)

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
3 variations:

1. ⭐ 메인 현재 22세 — beige fine-knit sweater + brown midi
   skirt + bag strap at shoulder + book in hand
   → MARK "메인 / MAIN" with star icon

2. 카페 22세 — same sweater, holding plastic café cup with
   thumb tracing condensation drop (signature gesture)

3. 회상 16세 — generic Korean high school uniform, longer
   waist-length hair, youthful posture

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
3 views (present 22세 only):
1. 정면 (Front) — settled posture, bag at shoulder, book
   in hand
2. 측면 (Side) — composed silhouette, chest-length hair
   visible from side
3. 후면 (Back) — calm walking-away silhouette, chest-length
   hair flowing soft

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
4 action poses:

1. ⭐ 카페에서 컵 물방울 문지름 (Café, thumb on cup
   condensation) — signature gesture, book on table beside

2. 횡단보도에서 알아봄 (Recognizing across crosswalk) —
   chest-length hair flowing, settled posture (E086 §6-22)

3. 늦은 설명 (Late truth-tell across café table) — book
   placed on table, calm direct gaze (E086 §192-194)

4. 회상 16세 "사랑해" (Flashback) — uniform, waist-length
   longer hair, honest young expression with subtle shadow
   hint

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"

Present (현재 22세):
- 스웨터 (Beige fine-knit sweater) — autumn beige #C8B68A
- 미디 스커트 (Midi skirt) — autumn brown #8B6F4E
- 가방 끈 (Bag strap) — visible at shoulder
- 책 (Book / hardcover) — NEW signature prop, 늦은 설명자
- 플랫 슈즈 (Flats) — soft brown leather

Flashback (회상 16세):
- 교복 (School uniform) — white blouse + dark skirt + ribbon
- 가방 (Schoolbag) — generic high school backpack

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
- ⭐ 플라스틱 카페 컵 (Plastic café cup) — 엄지 물방울 문지름
  signature
- ⭐ 책 (Book / hardcover) — NEW prop, 늦은 설명자 정체성
- 가방 (Bag with shoulder strap)
- 학교 노트 (School notebook) — 16세 flashback
- 봄꽃 / 가을 잎 (Spring blossom / Autumn leaf) — dual-age
  mood separator

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
- Primary: 차분한 베이지 (Calm Beige) #C8B68A
- Accent: 가을 브라운 (Autumn Brown) #8B6F4E
- Supporting: 회상 페일 핑크 (Memory Pink) #F2D5D0
- Base: 부드러운 그레이 (Soft Gray) #9BA0A6
- Skin undertone: WARM autumn (warm beige shading)

Below palette: "제대로 끝나기 위해 돌아온 과거, 늦었지만
정확, 단단해진 어깨, warm autumn"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box description in Korean:

"서준의 16세 첫사랑이자 sensory ability 의 origin. Phase 5
(E086) 에서 22세 성인으로 재등장 — 새 로맨스 X (canon §6).

locked: 봉합 장치 only — 본인은 평범한 16세였고 서준의 능력을
알지 못했다. 22세 재등장은 '제대로 끝나기 위해 돌아온 과거'
— 늦었지만 정확한 설명을 돌려주는 사람."

서사적 역할 (Narrative Roles):
- 트라우마 origin (16세, 열여섯의 봄)
- Phase 5 봉합 장치 (22세 재등장)
- 늦은 설명자 (NEW prop = 책 — 정체성 강화)
- "제대로 끝나기 위해 돌아온 과거"

═══════════════════════════════════════════════════════════
-- MUSICAL SIGNATURE (음악 인상) --
═══════════════════════════════════════════════════════════

Header label: "음악 인상 (MUSICAL SIGNATURE)"

"맑은 멜로디 위 미세한 불협 — 서준의 첫 트라우마 음향
(말과 마음의 괴리를 들리는 사람만 듣는 어긋남)
+ 22세 재등장 시 = 가을 acoustic, 늦은 화음의 정리"

═══════════════════════════════════════════════════════════
-- KEY QUOTES (핵심 대사) --
═══════════════════════════════════════════════════════════

Header label: "핵심 대사 (KEY QUOTES)"

대사 1 (트라우마 진단 — 22세 재등장):
"그때 넌, 늘 내가 무슨 생각을 하는지 이미 알고 있는 사람처럼
굴었어."
— 송유빈 (E086 §192-194)

대사 2 (봉합 인상 — 22세 재등장):
"우리 둘 다 언젠가 한 번은 제대로 마주 봐야 하는 과거라는 걸
알고 있었던 것 같아서."
— 송유빈 (E086 §174-177)

호칭 lock: 둘 다 "너" 직접 부름 + 이름 ("유빈"/"서준")
          — 오랜 친구·과거 연인 톤

═══════════════════════════════════════════════════════════
-- MOOD BOARD (무드) --
═══════════════════════════════════════════════════════════

Header label: "무드 (MOOD BOARD)"
4 small thumbnail mood references:
- 혜담대 후문 횡단보도 chest-length hair silhouette
- 카페 창가 plastic 컵 + 엄지 물방울 + 책 (NEW prop) close-up
- 가을 캠퍼스 길 단단한 어깨 + 책 든 walking
- 16세 봄 학교 풍경 (waist-length 머리 + 교복 + 벚꽃)

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Magazine 2:3 (1024 x 1536), DUAL-AGE vertical split
- Top half: 현재 22세 (warm autumn beige + brown gradient)
- Bottom half: 회상 16세 (memory pink + spring nostalgic)
- IDENTICAL artist hand to all locked sheets

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- IDENTICAL art style to all locked sheets (서준·아린·이든·
  강도현·배소나)
- ⭐ FACE MOLD INDEPENDENCE from 배소나 (10 rules above) — STRICT
  - Softer oval face / Downturned outer eye corners /
    Longer lashes / Fuller lower lip / Softer jawline /
    Softer cheek shading / Chest-length hair / Soft side part
    natural wave / Warm autumn undertone / NO glasses
- DUAL-AGE: TWO age variants (22세 + 16세) — same person,
  age difference in hair length + youth softness + posture
- 머리 길이 dual-age: 22세 chest-length / 16세 waist-length
  (longer)
- 단단한 어깨 (settled shoulder line) in present
- ⭐ 컵 물방울 엄지 문지름 signature in detail / pose 1
- ⭐ NEW prop: 책 (book) in main outfit / pose 1 / detail —
  늦은 설명자 정체성 시각화
- Present = calm wistful mature
- Flashback "사랑해" 표정 = honest young + subtle shadow hint
- Key quote panel showing 호칭 ("너" + 이름) usage
- NO femme-fatale, NO new-romance posing, NO villain framing

--no photorealistic, no 3D render, no femme-fatale framing,
no romantic re-entry posing, no seductive pose,
no villain framing, no calculating expression,
no idol-fanart, no Japanese characters, no spring-light gentle
(저건 아린 톤), no sharp active intelligent (저건 소나 톤),
no bob hair (저건 소나 lock), no glasses (저건 소나 lock),
no cool gray undertone (저건 소나 lock),
no compact sharp face mold (저건 소나 lock)
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

### v3 핵심 face mold 차별 체크 (vs 배소나)
- [ ] **얼굴 윤곽** — softer oval (NOT sharp compact)?
- [ ] ⭐ **눈매 끝** — slightly downturned outer corner (NOT lifted sharp)?
- [ ] **속눈썹** — longer with under-eye shadow?
- [ ] ⭐ **입술** — fuller lower lip slightly parted (NOT thin neutral)?
- [ ] **턱선** — softer (NOT sharp pointed)?
- [ ] **머리 길이** — chest-length (NOT bob)?
- [ ] **머리 스타일** — soft side part with natural wave (NOT blunt cut)?
- [ ] **피부 undertone** — warm autumn (NOT cool gray)?
- [ ] **안경** — 없음 (배소나의 lock)?
- [ ] **두 시트 나란히 비교 시 명확히 다른 인물**?

### Manuscript lock 유지 체크 (E086)
- [ ] **22세 머리** chest-length, 16세 waist-length 차별?
- [ ] **단단한 어깨** + 가방 끈 visible?
- [ ] ⭐ **컵 물방울 엄지 문지름** signature visible?
- [ ] ⭐ **책 (book)** prop visible (NEW)?
- [ ] **슬픈 웃음 / 작은 웃음** baseline?
- [ ] 핵심 대사 2개 panel 인용?
- [ ] 호칭 panel ("너" + 이름)?

### canon §6 lock 유지 체크
- [ ] "제대로 끝나기 위해 돌아온 과거" 인상?
- [ ] 새 로맨스 framing 0건?
- [ ] 16세 = honest young (NOT villain framing)?

### 기술 체크
- [ ] 모든 view 동일 인물 (face-lock)
- [ ] matching set with all 5 locked sheets (same artist hand)
- [ ] 한국어 primary + 영어 parentheses (NO Japanese)

### 문제 발견 시 v4 보정
- 여전히 배소나와 비슷 → "FACE MOLD INDEPENDENCE 10 rules" 강조 + "must look like a different actor" 추가
- 머리 길이 부족 → "chest-length minimum, longer than shoulder" 강조
- 책 prop 안 보임 → "book in hand or on table beside cup" 강조
- downturned eye 안 됨 → "outer eye corner slightly drooping, NOT lifted, NOT level" 강조
