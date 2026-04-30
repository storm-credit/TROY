# 강도현 (Kang Dohyun) — Character Sheet Prompt v2

> **GPT Image 2 paste-ready prompt** for 강도현 캐릭터 시트.
> Phase 2-4 등장. Modern Korean cinematic illustration.
> MATCHING SET with 서준·아린·이든 (locked). 같은 일러스트 hand 강제.
>
> **v1 → v2 변경 이유**:
> - v1 시트 결과 사용자 피드백: "**얼굴이 너무 겹친다**" (윤서준과 mold 유사)
> - v1 prompt 가 manuscript E043 (첫 등장) 사전 read 없이 작성 — canon §5 음악 메타포만 적용, 실제 in-world 활동 (문예지 편집) 누락
> - v2 = manuscript lock 9개 + 얼굴 차별화 lock 5개 + canon §5 음악 메타포 + canon §4 서사 lock 통합
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 에 paste.
> 산출 권장 위치: `export/music/character_lock_pack/kang_dohyun_sheet_v2.png`
>
> **상태**: prompt-ready (v2) · sheet 검증 대기

---

## v1 → v2 차이 (10개 보정)

| # | v1 (폐기) | v2 (적용) | 출처 |
|---|---|---|---|
| 1 | Visible trait = 클래식 피아노 연주자 only | **문예지 편집** (in-world 활동) + 피아노 (음악 메타포만) | E043 §7-8, §38 |
| 2 | 메인 outfit = 흰 셔츠 + camel 카디건 | **흰 셔츠 + 소매 두 번 걷음** ⭐ + camel 카디건 sub | E043 §68 ⭐ |
| 3 | 메인 공간 = 클래식 피아노실 | **학생회관 옆 야외 테이블** (E043 첫 등장 공간) | E043 §8, §67 |
| 4 | Props = 피아노 건반·악보·시계·만년필 | + **수정액·인쇄물·펜·노트북** (편집 도구) | E043 §120, §18 |
| 5 | 표정 baseline = composed reserved | + **"웃지도 않고 사실처럼"** matter-of-fact | E043 §198-199 |
| 6 | Pose = 피아노 앞 sub | + **야외 테이블 원고 읽기**, **소매 걷음**, **어깨 으쓱** | E043 §125, §225 |
| 7 | 행동 lock 부재 | + **먼저 손 안 내밈**, 원고 끝까지 읽고 답변, 짧은 사과 X 과장 | E043 §97-99, §124-125 |
| 8 | 핵심 인상 = 단정·통제·바흐풍 | + **"너무 적절해서 불안하게 만드는 매끈함"** ⭐ | E043 §176, §180-183 |
| 9 | 얼굴 = 23세 generic | + **얼굴 차별화 5 lock** (서준과 mold 분리) | 사용자 피드백 |
| 10 | Outfit ranking = 메인/피아노/디테일 | **메인 = 야외 편집 테이블** / 2 = 피아노 / 3 = 디테일 | E043 + 음악 layer 분리 |

---

## GPT Image 2 PROMPT

```
You are a professional animation character designer, art director,
and visual concept artist.

Your task is to generate a complete character profile sheet for
"강도현" (Kang Dohyun), supporting male character in TROY 「너라는
운율」 — the false-right romantic alternative for 지아린, with
sincere feelings but locked as NOT the final partner.

This sheet must MATCH the locked character sheets of 윤서준·지아린·
최이든 (same artist hand, IDENTICAL Modern Korean cinematic
illustration style — matching set), BUT must be visually
DISTINCT from 윤서준 in face mold (see [FACE DIFFERENTIATION] below).

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Korean primary, English in parentheses. NO Japanese characters.

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, IDENTICAL to the
locked sheets of 서준·아린·이든. Cool composed palette (formal,
controlled — contrast to 서준의 messy charcoal isolation,
이든의 cream warmth, 아린의 noran warmth).
- Clean cel-shading, medium clean outlines, crisp digital finish
- Phase 2-4 palette: cool slate #7A9CB0, camel #B89870,
  white #FFFFFF, dark navy #2E3A50
- NOT moe-childish, NOT idol-fanart, NOT chaebol-villain trope,
  NOT advertising gloss

═══════════════════════════════════════════════════════════
[FACE DIFFERENTIATION — CRITICAL]
═══════════════════════════════════════════════════════════

강도현 must be visually distinct from 윤서준 (the male protagonist
sheet already locked). Apply ALL 5 differentiation rules:

1. AGE FEEL — 23 years old, slightly more mature than 서준 (22).
   Subtle visible adulthood: micro-shadow at eye corners and
   under cheekbone, slightly more defined facial structure,
   "fresh graduate" vs "current undergraduate" feel.

2. JAWLINE & CHEEKBONE — Sharper jawline, slightly more defined
   cheekbone (서준 = softer rounder student face). 강도현's face
   reads as cleaner-architecture, more sculpted.

3. HAIR — Neat clean black with slight cool sheen, clean side
   part, NO overgrown bangs. (직접 대비: 서준의 messy matte
   black with overgrown bangs falling above eyes.)

4. GAZE — Direct level gaze, eyes meeting forward calmly.
   (직접 대비: 서준의 withdrawn lowered or off-frame gaze.)

5. SHADING — Slight mature shading at eye corners + cheek depth.
   서준 = soft natural undergraduate shading. 강도현 = subtle
   defined shading suggesting 1-2 years more lived.

OVERALL FACE INSTRUCTION: "Visually distinct from 윤서준 —
sharper, neater, slightly older (23 vs 22), direct gaze, neat
side-part hair (NOT messy), defined cheekbone with mature
shading. Same illustration hand and matching set, but face
mold clearly differentiated."

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE]
═══════════════════════════════════════════════════════════

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 강도현 (Kang Dohyun)
Age (나이): 23세
Height (신장): 182cm
Nationality (국적): 대한민국
Department (학과): 혜담대학교 (학과 다름, 단정한 인상)
Visible trait (시각 특징): 문예지 편집 멤버 +
                              흰 셔츠 소매 두 번 걷어 올린 silhouette
                              (음악 인상은 바흐풍 클래식 피아노 메타포)
Role (역할): TROY 조연 — 지아린의 다른 표현성을 가진 false-right
              romantic alternative. 진심 있으나 최종 상대 X (locked).

Profile description (프로필 소개 — in Korean):
"단정하고 통제된 인상의 23세 남자. 문예지 편집 멤버이자 클래식
피아노를 잘 친다. 지아린에게 다른 결의 호감을 가진 인물이지만
최종 상대는 아니다. 깔끔한 표현성과 바흐풍 단정함이 서준의 회색
노이즈와 정확히 대조된다.

Phase 2-4 가장 강하게 작동, 이후 미련보다 '다른 선택의 형상'으로
후퇴 (locked). chaebol-villain 도, 잔인한 연적도 아니다 — 그저
'너무 적절해서 누군가를 불안하게 만들 수 있는, 다른 결로 살아온
사람'."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) --
═══════════════════════════════════════════════════════════

Left side large portrait (leftmost column, full height):
- Upper body portrait, three-quarter angle
- Face mold: 23세 mature feel, sharper jawline + defined cheekbone,
  subtle mature shading at eye corners (DIFFERENTIATED from 서준)
- Neat clean black hair, clean side part (NOT messy, NOT bangs)
- Pale Korean skin, slightly cool tone
- Calm direct level gaze (NOT withdrawn, NOT flirty)
- WHITE BUTTON-UP SHIRT WITH SLEEVES ROLLED UP TWO TURNS ⭐
  (signature silhouette from E043 §68 — visible forearm)
- Camel cardigan worn over shoulders or unbuttoned (sub layer)
- Dark slim trousers
- Small classy leather watch on visible wrist (sleeve rolled up)
- Background: 학생회관 옆 야외 테이블 light, late-afternoon thin
  sunlight, cool slate #7A9CB0 to warm cream gradient

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
6 face close-ups in row, all consistent style. Apply face
differentiation across all 6.

1. 기본 (Neutral) — composed reserved baseline, faint half-smile,
   eyes calm direct. NEVER blank, NEVER cold, NEVER warm-flirty.

2. 사실처럼 (Matter-of-fact) — "웃지도 않고 그냥 사실처럼 말하는"
   face. Neutral surface, no performance, the moment of telling
   plain truth without softening. (E043 §198-199 lock)

3. 진심 (Sincere) — looking directly at someone off-frame, brows
   soft, the moment he means his words. Never uses sincerity as
   weapon. (canon §4 lock: 진심은 있는 인물)

4. 통제 (Controlled) — neutral surface, masked feeling underneath,
   the moment of holding back something he chose not to say.

5. 단정 (Polite refusal) — gentle but firm, lips slightly closed,
   eyes giving clear "no" without harshness.

6. 후퇴 (Stepping back) — calm acceptance after Phase 4, slight
   respectful nod, no resentment. The "다른 선택의 형상" face.
   (canon §4 locked)

All 6 same hairstyle (neat side part), neutral cool-slate
backgrounds.

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
3 half-body variations. Outfit ranking REVISED for E043 lock:

1. ⭐ 메인 (Editing meeting / Daily) — PRIMARY OUTFIT
   White button-up shirt with sleeves ROLLED UP TWO TURNS ⭐
   (signature E043 §68 silhouette)
   + camel cardigan (worn over shoulders OR unbuttoned over shirt)
   + dark slim trousers
   + leather watch on visible wrist
   Setting context: 학생회관 옆 야외 테이블, papers and laptop
   visible nearby (문예지 편집 활동)
   → MARK "메인 / MAIN" with star icon

2. 피아노 연주 (Piano performance, music metaphor layer)
   Black turtleneck or fine knit + dark slim slacks. Hand on piano
   keys (close-up of upper body). Practice or recital, NOT idol
   stage flex. (canon §5 musical signature)

3. 디테일 (Detail) — close-up of:
   - Sleeves rolled up + watch on wrist (signature E043 detail)
   - Cardigan cuff + sheet music edge (cross-layer reference)

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
3 views in main outfit (sleeves rolled up):
1. 정면 (Front) — upright posture, controlled, sleeves rolled
2. 측면 (Side) — clean line, no slump, sleeves visible from side
3. 후면 (Back) — neat shoulder line, cardigan back

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
4 action poses. Each anchored to E043 body habits.

1. 야외 테이블 원고 읽기 (Reading manuscript at outdoor table) —
   학생회관 옆 야외 테이블에 앉아 papers 한 장 한 장 끝까지 읽는
   moment. Sleeves rolled up. (E043 §124-125 lock)

2. 피아노 앞 (At piano) — focused, hands on keys, slight forward
   lean, classical concentration. (canon §5 metaphor)

3. 어깨 으쓱 (Light shoulder shrug) — small dismissive-but-
   accepting gesture, the "맞는 게 중요하진 않지" moment.
   (E043 §225 lock)

4. 후퇴 (Stepping back) — calm withdrawal, looking at someone
   with acceptance, the Phase 4 후퇴 moment. (canon §4 locked)

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"
- 흰 셔츠 (White button-up shirt) — crisp, sleeves ROLLED UP TWO
  TURNS in main outfit (signature)
- 카디건 (Cardigan) — camel #B89870, fine knit, worn over
  shoulders or unbuttoned
- 슬랙스 (Slacks) — dark navy or charcoal, slim fit
- 가죽 시계 (Leather watch) — small classy leather strap
- 구두 (Dress shoes) — dark brown leather

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
Two layers — in-world activity (편집) + musical signature (피아노):

In-world (편집 활동, E043 lock):
- 인쇄물 (Printed manuscript pages) — main signature
- 수정액 (White-out / correction fluid) — editing tool
- 펜 (Pen) — for marking edits
- 노트북 (Laptop) — outdoor table context

Musical signature (canon §5 metaphor):
- 피아노 건반 (Piano keys) — close-up image
- 악보 (Sheet music) — Bach or classical
- 만년필 (Fountain pen) — small writing detail

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
- Primary: 차가운 슬레이트 (Cool Slate) #7A9CB0
- Accent: 카멜 (Camel) #B89870
- Supporting: 화이트 (White) #FFFFFF
- Base: 다크 네이비 (Dark Navy) #2E3A50

Below palette: "단정함, 통제, 너무 적절한 매끈함, false-right"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box description in Korean:

"지아린에게 진심을 가진 다른 결의 남성. 문예지 편집 멤버,
클래식 피아노 연주자. 최종 상대는 아니지만 서준과 정확히 대비되는
표현성을 가진 인물.

핵심 인상: '겉으로 보기엔 아주 괜찮은 종류의 어른' — 너무 적절해서
오히려 누군가를 불안하게 만들 수 있는 매끈함. chaebol-villain 도,
잔인한 연적도 아니다 — 그저 다른 결로 살아온 사람.

Phase 2-4 강하게 작동, 이후 윤리적으로 후퇴 (locked: false-right
choice)."

서사적 역할 (Narrative Roles):
- 연적 (Romantic alternative)
- 다른 표현성의 거울
- false-right choice (locked)
- Phase 2-4 강하게, 이후 윤리적 후퇴

═══════════════════════════════════════════════════════════
-- MUSICAL SIGNATURE (음악 인상) --
═══════════════════════════════════════════════════════════

Header label: "음악 인상 (MUSICAL SIGNATURE)"

"바흐풍 클래식 피아노, 통제, 단정함"
(서준의 회색 노이즈, 아린의 투명한 피아노, 이든의 재즈 드럼과
정확히 다른 4번째 결 — 통제된 형식)

═══════════════════════════════════════════════════════════
-- KEY QUOTE (핵심 대사) --
═══════════════════════════════════════════════════════════

Header label: "핵심 대사 (KEY QUOTE)"

"맞는 게 중요하진 않지. 네가 납득해야지."
— 강도현 (E043) — 판단을 대신하지 않으면서 자기 의견은 정리해
말할 줄 아는 인물의 시그니처 라인

═══════════════════════════════════════════════════════════
-- MOOD BOARD (무드) --
═══════════════════════════════════════════════════════════

Header label: "무드 (MOOD BOARD)"
4 small thumbnail mood references:
- 학생회관 옆 야외 테이블, 늦오후 햇빛, papers 흩어진 풍경 (E043)
- 셔츠 소매 두 번 걷어 올린 forearm + watch close-up
- 클래식 피아노 연습실 (음악 메타포 layer)
- 캠퍼스 계단 천천히 내려오는 silhouette (E043 §67)

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Magazine 2:3 (1024 x 1536), cool slate-cream background
- IDENTICAL artist hand to 서준·아린·이든 sheets (matching set)
- Korean labels primary, English in parentheses
- Outfit panel emphasizes ROLLED-UP SLEEVES in main view

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- IDENTICAL art style to all locked sheets
- FACE DIFFERENTIATION from 윤서준 (5 rules above) — STRICT
- ALL views same face, same hair (neat side part), same design
- White shirt with sleeves rolled up two turns visible in EVERY
  main-outfit view (signature lock E043 §68)
- Watch on visible wrist (since sleeves are rolled)
- Composed reserved + matter-of-fact baseline
  (NEVER warm idol-smile, NEVER chaebol-villain sneer)
- Formal silhouette (NEVER hoodie, NEVER sloppy)
- "Phase 4 후퇴" 표정 lock (canon §4 false-right)
- "너무 적절한 매끈함" 인상 lock (E043 §176)

--no photorealistic, no 3D render, no chaebol-villain trope,
no romantic possessive pose, no aggressive jealousy,
no idol-fanart, no Japanese characters, no luxury flash,
no face-mold copy of 윤서준 (face mold MUST differ)
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

### Manuscript lock 체크 (E043)
- [ ] **흰 셔츠 + 소매 두 번 걷어 올림** — 메인 outfit 시그니처 visible? (E043 §68)
- [ ] **문예지 편집 활동** — 야외 테이블·papers·노트북 컨텍스트 보임? (E043 §7-8)
- [ ] **학생회관 옆 야외 테이블** — 메인 portrait 또는 pose 1 배경에 등장?
- [ ] 핵심 대사 "맞는 게 중요하진 않지. 네가 납득해야지." 인용 panel 보임?
- [ ] 표정 2 "사실처럼" — matter-of-fact 톤 식별 가능?

### 얼굴 차별화 체크 (vs 윤서준)
- [ ] **나이감 차별** — 23세 mature 인상이 22세 서준 student 인상과 구분되는가?
- [ ] **jawline / cheekbone** — 서준보다 sharper / more defined?
- [ ] **머리** — neat side part (NOT messy, NOT overgrown bangs)?
- [ ] **gaze** — direct level (NOT withdrawn lowered)?
- [ ] **mature shading** — eye corner + cheek 미세 그림자 보임?
- [ ] **얼굴 mold** — 서준 시트와 나란히 비교 시 명확히 다른 인물로 보임?

### 캐논 §4 lock 체크
- [ ] false-right "후퇴" 표정 6번 식별 가능?
- [ ] "너무 적절한 매끈함" 핵심 인상 전달됨?
- [ ] chaebol-villain 톤 0건? (calm sincere baseline)

### 기술 체크
- [ ] 모든 view 동일 인물 (face-lock 일관성)
- [ ] matching set with 서준·아린·이든 (same artist hand)
- [ ] 컬러: cool slate primary
- [ ] 한국어 primary + 영어 parentheses (NO Japanese)

### 문제 발견 시 v3 보정
- 얼굴 여전히 서준과 비슷 → "FACE DIFFERENTIATION" 섹션의 5 rules 강조 + "must look like a different actor playing a different character" 추가
- 소매 안 걷음 → "sleeves ROLLED UP TWO TURNS in EVERY view, forearm visible" 강조
- 편집 컨텍스트 약함 → outfit 1번 배경에 papers·노트북 강제

→ 본 calibration 결과를 v3 prompt 에 반영. v3 OK 면 sheet locked.
