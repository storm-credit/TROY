# 송유빈 (Song Yubin) — Character Sheet Prompt v2

> **GPT Image 2 paste-ready prompt** for 송유빈 캐릭터 시트 (dual-age).
> Phase 5 재등장 (E086+) + 회상 16세. Modern Korean cinematic illustration.
> MATCHING SET with 서준·아린·이든·강도현·배소나 (locked). 같은 일러스트 hand 강제.
>
> **v1 → v2 변경 이유**:
> - v1 prompt 가 manuscript 사전 read 없이 작성 — canon §4 추상 정의만 적용
> - manuscript E086 (과거의 직면, 22세 첫 재등장) + ops/motif_audit_seojun_sensory_origin (16세 origin) read 결과 = **"제대로 끝나기 위해 돌아온 과거" + "늦었지만 정확한 늦은 설명자"** 정체성. v1 의 calm mature 보다 훨씬 풍부
> - v2 = manuscript lock 10개 + 얼굴 차별화 5개 (vs 아린·소나) + dual-age 정밀 처리 + 핵심 대사 panel 2개
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 에 paste.
> 산출 권장 위치: `export/music/character_lock_pack/song_yubin_sheet_v2.png`
>
> **상태**: prompt-ready (v2) · sheet 검증 대기

---

## v1 → v2 차이 (10개 보정)

| # | v1 (폐기) | v2 (적용) | 출처 |
|---|---|---|---|
| 1 | 현재 = shoulder-length straight | **22세 = shoulder-length 조금 짧아진 straight / 16세 = longer (more youthful)** dual-age 차별 | E086 §11 |
| 2 | 어깨 묘사 부재 | ⭐ **단단한 어깨** (시간이 자세에 먼저 남는 사람) | E086 §12-13 |
| 3 | 신체 습관 부재 | ⭐⭐ **컵 겉면 물방울 엄지로 느리게 문지름** signature (16세에도 동일 — dual-age 일관) | E086 §111-116 |
| 4 | 핵심 대사 부재 | ⭐⭐⭐ **2개 panel** — 트라우마 진단 + 봉합 인상 | E086 §192-194, §174-177 |
| 5 | 표정 baseline = calm mature | + **"슬픈 표정에 가까운 웃음" / "아주 작은 웃음"** wistful 톤 | E086 §171-172, §271-272 |
| 6 | 16세 표정 = ambiguous micro-bored | **본인은 honest young** (평범한 16세, 서준 능력 모름) — micro-bored 는 서준 청취 결과의 그림자 hint 만 | canon §4, §6 + motif_audit |
| 7 | 가방 = 베이지 토트 | "가방을 멘 어깨 단단함" 강조 — 가방 자체보다 자세 lock | E086 §12 |
| 8 | 호칭 부재 | **"너" 직접 + 이름 ("유빈"/"서준")** — 오랜 친구 톤 | E086 전체 |
| 9 | "제대로 끝나기 위해 돌아온 과거" 인상 부재 | core impression lock | E086 §332 |
| 10 | 얼굴 차별화 부재 | **vs 아린**: 22세 mature (vs 21세 spring) / **vs 소나**: calm wistful slow (vs active direct sharp) | 누적 차별화 |

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
위해 돌아온 과거**" — a past that returns to be properly closed,
not to be re-loved.

The sheet must show BOTH her present-day form (22세, Phase 5,
E086 reappearance) AND a memory variant (16세 flashback, the
"사랑해" trauma origin moment).

This sheet must MATCH the locked sheets of 서준·아린·이든·강도현·
배소나 (same artist hand, IDENTICAL Modern Korean cinematic
illustration style — matching set), AND be visually DISTINCT from
아린 (21 spring honest direct) and 배소나 (21 active sharp glasses).

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Korean primary, English in parentheses. NO Japanese characters.

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, IDENTICAL to the
locked sheets. Autumn-toned palette for present (Phase 5) +
memory-pink nostalgic tilt for 16-year-old flashback.
- Clean cel-shading, medium clean outlines, crisp digital finish
- Phase 5 palette: calm beige #C8B68A, autumn brown #8B6F4E,
  memory pink #F2D5D0, soft gray #9BA0A6
- NOT moe-childish, NOT femme-fatale framing, NOT villain framing,
  NOT romantic re-entry posing, NOT idol-fanart

═══════════════════════════════════════════════════════════
[FACE DIFFERENTIATION — CRITICAL]
═══════════════════════════════════════════════════════════

송유빈 must be visually distinct from 아린 (21 long wavy spring
yellow honest direct) AND from 배소나 (21 bob cool gray sharp
intelligent active). Apply ALL 5 differentiation rules:

1. AGE FEEL — 22세 mature stillness. Older than 아린·소나 by 1
   year, but the visible difference is in **자세** (posture) and
   **eyes** (settled, not active), NOT in face wrinkles.

2. POSTURE — "**가방을 멘 어깨가 단단해진**" person. Settled
   shoulder line, calm steady stance. NOT spring-light, NOT
   smile-readiness.

3. EYES — Calm wistful, slightly weighted with past time. Looks
   at the world like someone who has already learned what asking
   too late means. NOT dreamy (아린), NOT sharp analytic (소나).

4. SMILE — "**슬픈 표정에 가까운 웃음**" / "**아주 작은 웃음**".
   Quiet wistful baseline, not warm-direct (아린), not
   smile-readiness (소나).

5. SIGNATURE GESTURE — **컵 겉면 물방울을 엄지로 느리게 문지름**.
   This is the dual-age lock — 16세에도 동일 습관. Tension
   handler, NOT performative.

OVERALL FACE INSTRUCTION: "22세 Korean female with calm wistful
mature stillness. Shoulder-length straight black hair (slightly
shorter than her 16-year-old version). Settled steady posture
(not spring-light, not active sharp). Quiet small smile baseline.
Visually distinct from 아린 (21 long wavy warm honest) and from
배소나 (21 bob cool active). Must read as 'someone who has lived
through something she's now ready to close gently.'"

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE — DUAL-AGE LAYOUT]
═══════════════════════════════════════════════════════════

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

VERTICAL DUAL-AGE LAYOUT:
- Top half = 현재 (Present, 22세, Phase 5 reappearance)
- Bottom half = 회상 (Flashback, 16세, the "사랑해" trauma origin moment)
- Same person, recognizable face mold, age difference visible
  through posture / hair length / mature stillness

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 송유빈 (Song Yubin)
Age (나이): 22세 (현재) / 16세 (회상, 열여섯의 봄)
Nationality (국적): 대한민국
Visible trait (시각 특징): 단단해진 어깨 + 컵 물방울을 엄지로
                              느리게 문지르는 손 (긴장 시 시그니처,
                              16세에도 동일 습관)
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

핵심 인상: '**제대로 끝나기 위해 돌아온 과거**'. 늦었지만 정확한
늦은 설명자. '시간은 얼굴보다 자세에 먼저 남는다' 는 사람."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) — DUAL-AGE --
═══════════════════════════════════════════════════════════

(A) 현재 22세 (Top half) — Large portrait:
- Upper body, three-quarter angle
- Shoulder-length straight black hair (slightly shorter than 16세
  version, indicating time passed) — clean cut, soft natural fall
- Calm mature brown eyes, slight wistful weight
- Pale Korean skin with warm autumn-tone shading
- **단단한 어깨 line** (가방 끈 visible at shoulder) — settled
  posture, time-on-shoulders visualized
- Soft autumn outfit: beige fine-knit sweater + brown midi skirt
  OR camel cardigan layered over white tee + dark slim pants
- Holding a tall plastic café cup, **엄지가 컵 겉면 물방울을
  느리게 문지르는 자세** ⭐ (signature gesture lock E086 §111-112)
- Background: 혜담대 후문 작은 카페 창가, late-afternoon
  Phase 5 autumn light, beige #C8B68A to autumn brown #8B6F4E
  gradient

(B) 16세 회상 (Bottom half) — Memory portrait:
- Same face mold (recognizable as same person, just younger)
- LONGER straight black hair (visibly longer than current 22세 —
  the "before time" hair length)
- Generic Korean high school uniform (white blouse + dark skirt
  + ribbon, NOT specific school)
- **HONEST YOUNG smile baseline** — innocent, did not know about
  서준's ability, no malicious intent
- Background: pale spring with thin nostalgic glow, memory pink
  #F2D5D0 + cherry blossom petal hint
- ⚠️ "사랑해" 장면 표정 = **본인 의도는 honest young smile**.
  서준 청취 결과의 micro-bored hint 는 **그림자 처리** (관찰자만
  보는 ambiguity, 본인 표정 자체는 정직). NOT villain framing,
  NOT calculating expression.

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
6 close-ups (4 present 22세 + 2 flashback 16세):

1. 기본 22세 (Neutral, present) — calm mature wistful baseline,
   slight quiet smile, eyes settled

2. 작은 웃음 22세 (Small smile, present) — "**아주 작게 웃음**".
   Quiet wistful smile, not warm. The "잠깐 컵을 내려다보다가
   아주 작게 웃었다" moment. (E086 §271-272)

3. 슬픈 웃음 22세 (Wistful smile, present) — "**슬픈 표정에
   가까운 웃음**". The moment of acknowledging old time
   honestly. (E086 §171-172)

4. 늦은 설명 22세 (Late explanation, present) — looking directly
   at someone, calm but precise, the "그때 넌, 늘 내가 무슨
   생각을 하는지 이미 알고 있는 사람처럼 굴었어" moment.
   (E086 §192-194)

5. 회상 16세 honest young (Flashback, innocent) — innocent
   young smile, completely honest. Saying "사랑해" with no
   knowledge of 서준's ability.

6. 회상 16세 그림자 (Flashback, ambiguous shadow) — same honest
   young face but with **subtle micro-shadow at mouth corner /
   eye distance** that only the observer (서준 청취) reads as
   "지루함의 불협화음". Her own intent = honest. The shadow is
   the listener's interpretation, NOT her performance.

All 6 same person recognizably, age difference visible through
stillness + hair length + posture.

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
3 variations:

1. ⭐ 메인 현재 22세 (Present daily) — PRIMARY OUTFIT
   Beige fine-knit sweater + brown midi skirt + simple flats
   + bag strap visible at shoulder (단단한 어깨 line)
   → MARK "메인 / MAIN" with star icon

2. 카페 22세 (Café reappearance scene) — same beige sweater +
   holding plastic café cup, **엄지가 물방울 문지르는 손 visible**
   (E086 §111-112 signature gesture)

3. 회상 16세 (Flashback uniform) — generic Korean high school
   uniform (white blouse + dark skirt + ribbon), youthful
   posture, longer hair

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
3 views (present 22세 only):
1. 정면 (Front) — settled posture, bag at shoulder
2. 측면 (Side) — composed silhouette, time-on-shoulders visible
3. 후면 (Back) — calm walking-away silhouette, soft autumn tone

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
4 action poses anchored to E086 + canon §6:

1. ⭐ 카페에서 컵 물방울 문지름 (Café, thumb on cup condensation) —
   카페 창가 마주앉아 한 손에 plastic café cup 잡고 엄지로 컵
   겉면 물방울을 느리게 문지르는 순간. Tension handler signature.
   (E086 §111-112 lock)

2. 횡단보도에서 알아봄 (Recognizing across crosswalk) — 후문 쪽
   분식집 앞 횡단보도, 맞은편 보도블록 위에 선 silhouette.
   "시선이 맞는 순간 약간의 체념" 표정. (E086 §6-22)

3. 늦은 설명 (Late truth-tell across café table) — 마주앉아
   "그때 넌, 늘 내가 무슨 생각을 하는지 이미 알고 있는 사람처럼
   굴었어" 같은 직설을 꺼내는 순간. 비난 아닌 정확한 설명.
   (E086 §192-194 lock)

4. 회상 16세 "사랑해" (Flashback, the trauma origin moment) —
   교복 입고 honest young smile 로 "사랑해" 말하는 순간.
   본인은 평범한 16세, 표정 자체는 정직. **subtle shadow hint
   만 micro 처리** (캐논 §6 ambiguity lock).

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"

Present (현재 22세):
- 스웨터 (Beige fine-knit sweater) — autumn beige #C8B68A
- 미디 스커트 (Midi skirt) — autumn brown #8B6F4E
- 또는 카멜 카디건 + 어두운 슬랙스 (Phase 5 layered option)
- 가방 끈 (Bag strap) — visible at shoulder, signature posture
- 플랫 슈즈 (Flats) — soft brown leather

Flashback (회상 16세):
- 교복 (School uniform) — white blouse + dark skirt + ribbon
- 가방 (Schoolbag) — generic high school backpack

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
- ⭐ 플라스틱 카페 컵 (Plastic café cup) — most important signature,
  엄지가 물방울 문지르는 close-up 가능
- 가방 (Bag with shoulder strap) — 어깨 자세 lock
- 학교 노트 (School notebook) — 16세 flashback context
- 봄꽃 / 가을 잎 (Spring blossom / Autumn leaf) — dual-age mood
  separator

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
- Primary: 차분한 베이지 (Calm Beige) #C8B68A
- Accent: 가을 브라운 (Autumn Brown) #8B6F4E
- Supporting: 회상 페일 핑크 (Memory Pink) #F2D5D0
- Base: 부드러운 그레이 (Soft Gray) #9BA0A6

Below palette: "제대로 끝나기 위해 돌아온 과거, 늦었지만 정확,
                단단해진 어깨"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box description in Korean:

"서준의 16세 첫사랑. sensory ability 의 origin 이자 trauma 의
시작. Phase 5 (E086) 에서 22세 성인으로 재등장하지만 새 삼각관계
아님 (canon §6).

locked: 봉합 장치 only — 새 로맨스 X. 본인은 평범한 16세였고
서준의 능력을 알지 못했다. 22세 재등장은 '제대로 끝나기 위해
돌아온 과거' — 늦었지만 정확한 설명을 돌려주는 사람."

서사적 역할 (Narrative Roles):
- 트라우마 origin (16세, 열여섯의 봄)
- Phase 5 봉합 장치 (22세 재등장)
- 늦은 설명자 (NOT 새 사랑)
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
- 혜담대 후문 횡단보도, 맞은편 silhouette (E086 §6-22)
- 카페 창가 plastic 컵 + 엄지 물방울 문지르는 close-up ⭐
- 가을 캠퍼스 길 단단한 어깨 walking silhouette
- 16세 봄 학교 풍경 (교복 + 벚꽃 nostalgic memory pink)

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Magazine 2:3 (1024 x 1536), DUAL-AGE vertical split
- Top half: 현재 22세 (autumn beige + brown gradient)
- Bottom half: 회상 16세 (memory pink + spring nostalgic)
- IDENTICAL artist hand to all locked sheets

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- IDENTICAL art style to all locked sheets
- DUAL-AGE: TWO age variants visible (present 22세 + flashback
  16세) — recognizably the same person
- Hair length differentiation: 22세 = slightly shorter / 16세 =
  longer (the "before time" hair)
- 단단한 어깨 (settled shoulder line) visible in present views
- ⭐ 컵 물방울 엄지 문지름 signature visible in detail / pose 1
- Present = calm wistful mature (NOT romantic re-entry, NOT
  seductive)
- Flashback "사랑해" 표정 = honest young smile + subtle shadow
  hint (NOT villain framing, NOT calculating)
- FACE DIFFERENTIATION from 아린 + 소나 (5 rules above) — STRICT
- Key quote panel showing 호칭 ("너" + 이름) usage
- NO femme-fatale framing
- NO new-romance posing
- "제대로 끝나기 위해 돌아온 과거" core impression locked

--no photorealistic, no 3D render, no femme-fatale framing,
no romantic re-entry posing, no seductive pose,
no villain framing, no calculating expression,
no idol-fanart, no Japanese characters, no spring-light gentle
(저건 아린 톤), no sharp active intelligent (저건 소나 톤)
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

### Manuscript lock 체크 (E086)
- [ ] **22세 머리** — shoulder-length straight, 16세보다 짧음? (E086 §11)
- [ ] **단단한 어깨** — 가방 끈 visible at shoulder, settled posture? (E086 §12)
- [ ] ⭐ **컵 물방울 엄지 문지름** signature — pose 1 또는 detail panel 에 visible? (E086 §111-112)
- [ ] **dual-age 일관 신체 습관** — 16세에도 같은 컵 만지는 자세 표현? (E086 §115-116)
- [ ] **슬픈 웃음 / 작은 웃음** baseline — wistful 톤?
- [ ] 핵심 대사 1 (트라우마 진단) panel 인용?
- [ ] 핵심 대사 2 (봉합 인상) panel 인용?
- [ ] 호칭 panel ("너" + 이름) 컨텍스트 명시?

### canon §6 lock 체크
- [ ] "**제대로 끝나기 위해 돌아온 과거**" 인상 시각화?
- [ ] "**늦었지만 정확한 설명자**" Role concept 정확?
- [ ] 새 로맨스 framing 0건? (NOT romantic re-entry pose)
- [ ] femme-fatale 0건?

### dual-age 정밀 체크
- [ ] **16세 "사랑해" 표정** — 본인은 honest young smile, 미세 shadow hint 만? (NOT villain framing)
- [ ] 두 age 같은 인물로 인식 가능?
- [ ] 머리 길이 차별 visible (22세 < 16세)?

### 얼굴 차별화 체크 (vs 아린·소나)
- [ ] **vs 아린**: 22 mature settled (vs 21 spring honest direct) 분리?
- [ ] **vs 소나**: 22 calm wistful slow (vs 21 active sharp) 분리?
- [ ] 셋 나란히 비교 시 명확히 다른 인물?

### 기술 체크
- [ ] 모든 view 동일 인물 (face-lock)
- [ ] matching set with all 5 locked sheets (same artist hand)
- [ ] 한국어 primary + 영어 parentheses (NO Japanese)

### 문제 발견 시 v3 보정
- 머리 길이 dual-age 차별 부족 → "16세 longer / 22세 shorter, visible difference" 강조
- 컵 물방울 문지름 안 보임 → detail panel "thumb slowly tracing condensation drops on cup" 강조
- 16세 표정이 villain 같음 → "honest young smile, shadow hint is observer interpretation only" 강조
- 22세가 너무 cold → "wistful warm small smile, NOT cold mature" 강조
- 아린/소나와 비슷 → FACE DIFFERENTIATION 5 rules 강조
