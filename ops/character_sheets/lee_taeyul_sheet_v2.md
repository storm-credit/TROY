# 이태율 (Lee Taeyul) — Character Sheet Prompt v2

> **GPT Image 2 paste-ready prompt** for 이태율 캐릭터 시트.
> Phase 5-6 윤리적 거울. Modern Korean cinematic illustration.
> MATCHING SET with 서준·아린·이든·강도현·배소나·송유빈 (LOCKED). 같은 일러스트 hand 강제.
>
> **v1 → v2 변경 이유**:
> - v1 prompt 가 canon §4 추상 정의만 적용 ("25세 mature 윤리적 거울")
> - **manuscript 본문 등장 0건** (motif_audit + Grep 확인) — 정밀 lock 자료 부재
> - 그러나 **계획·복선 문서에 매우 풍부한 lock 자료 존재**:
>   - `ops/support_exit_map.md §6` — narrative role 정밀 정의
>   - `ops/foreshadow_plan_120.md §5 + §13` — ⭐⭐⭐ "**suspicion, absolute pitch, psychological insight**" 능력 정의 + ending tone
> - v2 = 계획 문서 lock 8개 + 절대음감 음악인 정체성 + 심리 통찰가 + 얼굴 차별화 (vs 강도현·송유빈 — 둘 다 mature 톤이라 strict)
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 에 paste.
> 산출 권장 위치: `export/music/character_lock_pack/lee_taeyul_sheet_v2.png`
>
> **상태**: prompt-ready (v2) · sheet 검증 대기

---

## v1 → v2 차이 (10개 보정)

| # | v1 (폐기) | v2 (적용) | 출처 |
|---|---|---|---|
| 1 | "25세 졸업생/대학원생" | + ⭐ **절대음감 음악인 정체성** | foreshadow §5 |
| 2 | leather watch + book | + ⭐ **악보 + 튜닝 도구 + 이어폰 + 노트북** (음악인 prop) | foreshadow §5 |
| 3 | "차분한 acoustic" 음악 인상 | + ⭐ **절대음감 = 정확한 음 식별** | foreshadow §5 |
| 4 | "윤리적 거울" 추상 | + ⭐ **suspicion 톤** — 서준 능력에 윤리적 거리 (warm 거리 X) | foreshadow §5 |
| 5 | calm composed | + ⭐ **사람 읽는 quiet observant** (심리 통찰) | foreshadow §5 |
| 6 | "떠남도 성숙" pose 추상 | + ⭐ **"does not steal ending focus"** — 후퇴 pose 강조 | support_exit §6 |
| 7 | autumn beige + camel + dusk | + 늦가을 톤 강조 (**#3D4A5C deep dusk 더 우세**) | foreshadow §13 |
| 8 | 핵심 인상 부재 | + ⭐ **"여름이 끝난 뒤의 공기처럼, 뜨겁지 않은데도 확실한 사랑"** ending tone 시각화 | foreshadow §13 |
| 9 | 얼굴 차별화 부재 | **vs 강도현 (23 sharp neat) + vs 송유빈 (22 oval wistful)**: 25 longer face + quiet weight + soft swept back hair | 누적 차별화 |
| 10 | "boundary-setting" 추상 | + **boundary-setting payoff** 표정 lock — "경계가 사랑의 성숙한 형식" | foreshadow §5 |

---

## GPT Image 2 PROMPT

```
You are a professional animation character designer, art director,
and visual concept artist.

Your task is to generate a complete character profile sheet for
"이태율" (Lee Taeyul), supporting male character in TROY 「너라는
운율」 — Phase 5-6 ethical mirror, the adulthood shadow showing
that "**leaving can also be maturity**". An **absolute-pitch
musician with psychological insight** who places ethical pressure
on 윤서준's use of his sensory ability. NOT a romantic rival
(canon §4 + support_exit_map §6 LOCKED).

This sheet must MATCH the locked sheets of 서준·아린·이든·강도현·
배소나·송유빈 (same artist hand, IDENTICAL Modern Korean cinematic
illustration style — matching set), AND be visually CLEARLY
DISTINCT from 강도현 (23 sharp neat composed) and 송유빈 (22
softer oval wistful) — both mature-tone characters that risk
face-mold collision.

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Korean primary, English in parentheses. NO Japanese characters.

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, IDENTICAL to the
locked sheets. Phase 5-6 deep autumn / late-autumn palette
(matured tone — most settled of all 7 characters).
- Clean cel-shading, medium clean outlines, crisp digital finish
- Phase 5-6 palette: autumn beige #C8B68A, camel #B89870,
  ⭐ deep dusk navy #3D4A5C (DOMINANT — late-autumn weight),
  cream #F5E1D0
- NOT moe-childish, NOT romantic-rival, NOT chaebol pose,
  NOT warm-flirty, NOT idol-fanart

═══════════════════════════════════════════════════════════
[FACE MOLD INDEPENDENCE — CRITICAL]
═══════════════════════════════════════════════════════════

이태율 must look like a CLEARLY DIFFERENT PERSON from 강도현 AND
송유빈 (both LOCKED mature-tone characters). Apply ALL 5 strict
differentiation rules:

1. AGE FEEL — 25세, MOST MATURE of all 7 characters. Visible
   adulthood: micro-shadow at eye corners, slight under-eye
   weight (not tired — settled wisdom). Older than 강도현 (23)
   and 송유빈 (22) by 2-3 years, with visible "post-graduation /
   graduate-student" stillness.

2. FACE SHAPE — Slightly LONGER face proportion (longer than
   강도현's clean architecture, longer than 송유빈's softer oval).
   Quiet weight in cheek line, NOT sharp.

3. HAIR — SOFT SWEPT BACK black hair, slightly longer than
   강도현's neat side part. Mature stylish but not idol-styled.
   NOT messy bangs (서준), NOT clean side part (강도현),
   NOT chest-length wavy (송유빈).

4. EYES — ⭐ QUIET OBSERVANT SUSPICIOUS gaze. Looks AT people,
   not through. The "psychological insight" face — reading
   another person calmly without aggression. Slight micro-shadow
   under eyes (mature settled, NOT sleepy).

5. AURA — ETHICAL DISTANCE, not warm distance. Looks like
   someone who has decided not to insist, even when he sees
   clearly. The "leaving can also be maturity" embodiment.
   NOT seductive, NOT charming, NOT chaebol elegance.

OVERALL FACE INSTRUCTION: "25세 Korean male, MOST MATURE of all
7 characters. Slightly longer face, soft swept-back black hair,
quiet observant gaze with psychological insight, slight
under-eye shadow conveying settled adulthood. Visually distinct
from 강도현 (23 sharp neat composed clean side part) and from
송유빈 (22 softer oval wistful chest-length wavy). Must read as
'someone who has lived through more, sees more, and chooses
ethical distance over insistence.'"

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE]
═══════════════════════════════════════════════════════════

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 이태율 (Lee Taeyul)
Age (나이): 25세 (가장 mature, vs 강도현 23 / 송유빈 22)
Height (신장): 180cm
Nationality (국적): 대한민국
Status: 졸업생 또는 대학원생 (학생 인상 X, post-undergrad mature)
Visible trait (시각 특징): ⭐ **절대음감 음악인** (악보·튜닝 도구·
                              이어폰 소품) + 심리 통찰가의 quiet
                              observant 시선 + 약간의 mature shadow
Role (역할): TROY 조연 — Phase 5-6 윤리적 거울. 서준의 능력 사용에
              ethical pressure. NOT 로맨스 경쟁자 (locked).

Profile description (프로필 소개 — in Korean):
"25세 졸업생/대학원생. **절대음감을 가진 음악인이자 심리 통찰가**.
Phase 5-6 에서 제한적으로 등장하는 윤리적 거울 — 서준의 듣기
능력에 의심(suspicion) 을 갖고 boundary-setting 의 윤리적 압박을
가하는 인물.

핵심 인상: '**여름이 끝난 뒤의 공기처럼, 뜨겁지 않은데도 확실한
사랑**' 의 ending tone 화신. '떠나는 선택도 성숙일 수 있다' 는
adulthood shadow.

locked: 로맨스 경쟁자 X. ending focus 훔치지 않음 (does not steal
ending focus). 새 사랑이 아니라 윤리적 거리의 형식만."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) --
═══════════════════════════════════════════════════════════

Left side large portrait (leftmost column, full height):
- Upper body portrait, three-quarter angle
- ⭐ Slightly longer face proportion, mature settled
- ⭐ Soft swept-back black hair (slightly longer than 강도현's
  neat side part), mature stylish
- ⭐ QUIET OBSERVANT SUSPICIOUS gaze — looking calmly,
  reading the moment
- Slight under-eye shadow (mature settled, NOT tired)
- Pale Korean skin, slightly cool tone with autumn warmth
- Soft camel cardigan or beige overshirt + cream tee
  underneath + dark relaxed trousers (Phase 5-6 layered)
- ⭐ Leather watch on wrist + small score sheet (악보) visible
  in hand or on table beside
- Background: late-autumn café or library, deep dusk navy
  #3D4A5C accent + camel #B89870, soft afternoon light

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
6 face close-ups in row, all consistent style. ETHICAL DISTANCE
+ PSYCHOLOGICAL INSIGHT baseline (NOT warm distance, NOT cold).

1. 기본 (Neutral) — calm composed mature with quiet observant
   gaze, slight under-eye weight. NEVER warm-flirty, NEVER
   chaebol elegance.

2. 통찰 (Psychological insight) — slight narrowing of eyes
   reading something inward in another person, the moment of
   "I see what you're doing." Calm, not aggressive.

3. 의심 (Suspicion) — quiet skeptical gaze, micro-furrow at
   brow, the moment of doubting 서준's use of his ability.
   NOT hostile, just ethically distant.

4. 거리 (Ethical distance) — gentle but firm, the chosen
   distance not from coldness but from respect for boundary.
   "내가 더 들어가지 않는다" face.

5. 떠남 (Leaving with maturity) — calm acceptance, slight nod,
   the "leaving can also be mature" face. (support_exit §6 lock)

6. 윤리적 거울 (Ethical mirror) — looking at someone (서준
   또는 아린) and silently reflecting back the ethical question
   without speaking it. (canon §4 + foreshadow §5 boundary-
   setting payoff)

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
3 variations:

1. ⭐ 메인 (Daily / Phase 5-6) — PRIMARY OUTFIT
   Soft camel cardigan or beige overshirt + cream tee + dark
   relaxed trousers + leather watch on wrist + small score
   sheet (악보) in hand or beside
   → MARK "메인 / MAIN" with star icon

2. 음악실 / 연주 (Music room / performance) — fine knit sweater
   + dark slim slacks. Holding tuning fork (튜닝 포크) or sitting
   beside piano with sheet music open. NOT performance flex —
   quiet practice mode. ⭐ Absolute pitch musician identity.

3. 디테일 (Detail) — close-up of:
   - Leather watch on wrist
   - Sheet music edge with handwritten notation marks
   - Earphones (subtle, mature design)

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
3 views in main outfit:
1. 정면 (Front) — calm steady, slight forward focus, settled
   posture
2. 측면 (Side) — composed silhouette, mature stillness
3. 후면 (Back) — calm walking-away posture, the "leaving" tone

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
4 action poses anchored to canon §4 + foreshadow §5 + support_exit §6:

1. 카페에서 악보 보기 (Café, reading sheet music) — late-
   autumn café table, leather watch on wrist, sheet music
   open. Calm focused. ⭐ Absolute pitch musician identity.

2. 통찰의 시선 (Insight gaze across table) — sitting across
   from someone (서준 또는 아린), quiet observant suspicious
   gaze. The "psychological insight" moment.
   (foreshadow §5 lock)

3. boundary-setting (Setting boundary calmly) — gentle but
   firm gesture toward off-frame, the moment of "내가 여기까지
   본다" without aggression. (foreshadow §5 payoff)

4. ⭐ 떠남 (Walking away with maturity) — calm walking-away
   silhouette, soft autumn light, no resentment. The "does not
   steal ending focus" exit pose. (support_exit §6 lock)

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"
- 카멜 카디건 또는 베이지 오버셔츠 (Camel cardigan / Beige
  overshirt) — Phase 5-6 가을 layered
- 크림 티셔츠 (Cream tee) — #F5E1D0
- 트라우저 (Trousers) — dark relaxed cut
- ⭐ 가죽 시계 (Leather watch) — leather strap classic, signature
- ⭐ 악보 (Sheet music) — handwritten notation marks, signature
- 이어폰 (Earphones) — subtle mature design
- 구두 (Shoes) — dark brown leather, polished but not flashy

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
음악인 + 심리 통찰가 dual layer:

음악 layer (절대음감):
- ⭐ 악보 (Sheet music, handwritten marks) — most important signature
- 튜닝 포크 (Tuning fork) — absolute pitch tool
- 이어폰 (Earphones) — subtle mature design
- 만년필 (Fountain pen) — score notation tool

심리 통찰 layer:
- ⭐ 가죽 시계 (Leather watch) — signature
- 책 (Hardcover book — ethics or philosophy genre)
- 노트북 또는 작은 노트 (Laptop or small notebook)

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
- Primary: 카멜 (Camel) #B89870
- Accent: ⭐ 깊은 황혼 (Deep Dusk Navy) #3D4A5C — DOMINANT
  (Phase 5-6 늦가을 weight)
- Supporting: 가을 베이지 (Autumn Beige) #C8B68A
- Base: 크림 (Cream) #F5E1D0

Below palette: "성숙, 윤리적 거리, 떠남도 성숙, 절대음감,
                여름이 끝난 뒤의 공기"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box description in Korean:

"Phase 5-6 제한적 등장. 로맨스 경쟁자 아님 (canon §4 locked).
'**떠나는 선택도 성숙일 수 있다**' 는 adulthood shadow.

⭐ **절대음감 음악인 + 심리 통찰가** — 서준의 듣기 능력 사용에
의심(suspicion) 을 갖고 boundary-setting 의 윤리적 압박을 가한다
(foreshadow §5 payoff: 'boundary-setting rather than exposure
gimmick').

ending tone 화신: '여름이 끝난 뒤의 공기처럼, 뜨겁지 않은데도
확실한 사랑' (foreshadow §13).

locked: ending focus 훔치지 않음 (support_exit §6: does not
steal ending focus)."

서사적 역할 (Narrative Roles):
- 윤리적 거울 (Phase 5-6)
- adulthood shadow (떠남도 성숙)
- 절대음감 음악인 + 심리 통찰가
- 서준 능력 사용에 윤리적 압박
- boundary-setting payoff
- 로맨스 경쟁자 아님 (locked)
- ending focus 훔치지 않음 (locked)

═══════════════════════════════════════════════════════════
-- MUSICAL SIGNATURE (음악 인상) --
═══════════════════════════════════════════════════════════

Header label: "음악 인상 (MUSICAL SIGNATURE)"

"⭐ **절대음감 (Absolute pitch)** — 정확한 음 식별, 음악적 정확함
+ 차분한 acoustic 늦가을 톤, 결심한 거리, 결심한 후의 잔향"

(서준의 회색 노이즈, 아린의 봄빛 발신, 이든의 재즈 드럼,
도현의 바흐풍 클래식, 소나의 미니멀 비트, 유빈의 미세한 불협과
정확히 다른 7번째 결 — 늦가을 단단한 정확함)

═══════════════════════════════════════════════════════════
-- KEY QUOTES (핵심 대사) --
═══════════════════════════════════════════════════════════

Header label: "핵심 대사 (KEY QUOTES)"

⚠️ manuscript 본문 등장 0건 — 캐논·계획 문서 인용:

대사 1 (foreshadow §5 payoff 인용):
"boundary-setting rather than exposure gimmick"
→ "경계를 묻는 것이지, 폭로가 아니야."
— 이태율 (foreshadow plan §5 paraphrase)

대사 2 (support_exit §6 role 인용):
"leaving can also be mature"
→ "떠나는 것도 성숙일 수 있어."
— 이태율 (support_exit_map §6 paraphrase)

대사 3 (ending tone 인용):
"여름이 끝난 뒤의 공기처럼, 뜨겁지 않은데도 확실한 사랑."
— ending tone (foreshadow §13)

═══════════════════════════════════════════════════════════
-- MOOD BOARD (무드) --
═══════════════════════════════════════════════════════════

Header label: "무드 (MOOD BOARD)"
4 small thumbnail mood references:
- 늦가을 캠퍼스 단풍 길, 단단한 silhouette
- 카페 창가 악보 + leather watch close-up ⭐
- 음악실 튜닝 포크 + 피아노 옆 (절대음감 layer)
- 늦가을 노을 진 walking-away silhouette (떠남 톤)

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Magazine 2:3 (1024 x 1536), camel + deep dusk navy background
- IDENTICAL artist hand to all locked sheets

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- IDENTICAL art style to all locked sheets (서준·아린·이든·
  강도현·배소나·송유빈)
- ⭐ FACE MOLD INDEPENDENCE from 강도현 + 송유빈 (5 rules above)
  — STRICT
  - 25 most mature (vs 23 강도현, 22 송유빈)
  - Slightly longer face proportion
  - Soft swept-back hair (NOT neat side part 강도현, NOT
    chest-length wavy 송유빈)
  - Quiet observant suspicious gaze (psychological insight)
  - Slight under-eye mature shadow
- ⭐ 절대음감 음악인 정체성 — 악보 prop in main outfit + music
  room outfit (signature lock)
- 가죽 시계 visible in main outfit
- ETHICAL DISTANCE baseline (NOT warm distance, NOT cold,
  NOT charming)
- Phase 5-6 deep dusk navy DOMINANT (not just accent)
- "떠남도 성숙" pose 4 — 후퇴 walking-away silhouette
- "boundary-setting" 표정 4-6 lock
- ⭐ "여름이 끝난 뒤의 공기" ending tone 시각화
- NEVER romantic-rival posing
- NEVER warm-flirty smile
- NEVER chaebol pose
- NEVER ending-focus stealing pose

--no photorealistic, no 3D render, no romantic-rival framing,
no warm-flirty smile, no chaebol pose, no idol-fanart,
no Japanese characters, no high-school youth aesthetic,
no sharp clean side part (저건 강도현 lock),
no chest-length wavy (저건 송유빈 lock),
no warm distance (이태율 = ethical distance only)
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

### 계획 문서 lock 체크 (foreshadow §5 + support_exit §6 + foreshadow §13)
- [ ] ⭐ **절대음감 음악인** — 악보 prop visible in main outfit + music room?
- [ ] ⭐ **심리 통찰가** — quiet observant suspicious gaze 표정 1-2 식별 가능?
- [ ] **suspicion 톤** — 표정 3 "의심" 식별 가능? (ethical distance, NOT hostile)
- [ ] **boundary-setting** — 표정 4-6 "거리·떠남·윤리적 거울" lock?
- [ ] ⭐ **"떠남도 성숙"** — 포즈 4 walking-away silhouette?
- [ ] **"여름이 끝난 뒤의 공기"** ending tone 시각화 — 늦가을 색감 + 차분함?
- [ ] 핵심 대사 panel 3개 (foreshadow §5 + support_exit §6 + foreshadow §13)?

### 얼굴 차별화 체크 (vs 강도현·송유빈)
- [ ] **나이감** — 25 mature (vs 23 강도현, 22 송유빈) 차이 visible?
- [ ] **얼굴 길이** — slightly longer than both (강도현 sharp, 송유빈 oval)?
- [ ] **머리** — soft swept-back (NOT 강도현's neat side part, NOT 송유빈's chest-length wavy)?
- [ ] **gaze** — quiet observant suspicious (NOT 강도현 composed, NOT 송유빈 wistful)?
- [ ] **under-eye shadow** — mature settled (NOT tired)?
- [ ] **세 명 (강도현·송유빈·이태율) 나란히 비교 시 명확히 다른 인물**?

### Matching set + 컬러 차별
- [ ] camel + deep dusk navy DOMINANT (Phase 5-6 늦가을)?
- [ ] 7 색상 시그니처 차별 — 회색(서준) / 노란(아린) / 크림(이든) / 슬레이트(도현) / mid gray(소나) / autumn beige(유빈) / **camel+dusk(태율)**?

### 기술 체크
- [ ] 모든 view 동일 인물 (face-lock)
- [ ] matching set with all 6 locked sheets
- [ ] 한국어 primary + 영어 parentheses (NO Japanese)

### 문제 발견 시 v3 보정
- 강도현·송유빈과 비슷 → FACE MOLD INDEPENDENCE 5 rules 강조 + "must look like a different actor" 추가
- 음악인 정체성 약함 → "absolute pitch musician — sheet music + tuning fork + earphones MUST be visible" 강조
- 너무 학생 같음 → "post-graduate / graduate student stillness, NOT undergrad" 강조
- ethical distance 가 cold 로 나옴 → "ethical distance is calm respect, NOT coldness" 강조
- 로맨스 톤 → "NEVER romantic-rival posing, NEVER warm-flirty smile" 강조
