# 배소나 (Bae Sona) — Character Sheet Prompt v2

> **GPT Image 2 paste-ready prompt** for 배소나 캐릭터 시트.
> Phase 1 끝 ~ Phase 5+ 누적 등장. Modern Korean cinematic illustration.
> MATCHING SET with 서준·아린·이든·강도현 (locked). 같은 일러스트 hand 강제.
>
> **v1 → v2 변경 이유**:
> - v1 prompt 가 manuscript 사전 read 없이 작성 — canon §4 추상 정의만 적용 ("calm intelligent baseline")
> - manuscript E020 (첫 등장) + E049 (활약 신) 사전 read 결과 = **"지나치게 단순해서 오히려 더 정확한"** active direct 인물. v1 의 calm observant 와 결정적 차이
> - v2 = manuscript lock 9개 + 얼굴 차별화 (vs 아린·송유빈) + 안경 keep + 컵 손동작 signature + 호칭 (오빠/언니) + 핵심 대사 panel
>
> **사용법**: 아래 코드 블록 전체를 GPT Image 2 에 paste.
> 산출 권장 위치: `export/music/character_lock_pack/bae_sona_sheet_v2.png`
>
> **상태**: prompt-ready (v2) · sheet 검증 대기

---

## v1 → v2 차이 (10개 보정)

| # | v1 (폐기) | v2 (적용) | 출처 |
|---|---|---|---|
| 1 | 표정 baseline = calm observant | **active direct** — 즉각 reaction, 짧은 웃음, 받아치기 | E049 §82, §192, §342 |
| 2 | "calm intelligent" 인상 | **"지나치게 단순해서 오히려 더 정확"** ⭐ 핵심 인상 lock | E049 §157-158 |
| 3 | 신체 습관 부재 | ⭐ **음료 컵 + 컵 뚜껑 손톱 톡톡 두드림** signature 손동작 | E049 §31 |
| 4 | 호칭 부재 | **서준 = "오빠" / 아린 = "언니"** (친밀 후배 톤) | E049 §168, §337 |
| 5 | leather notebook prop | notebook 보다 **음료 컵 (아이스티/아메리카노)** signature | E049 §30-31 |
| 6 | "감정 통역자" 추상 | **"화장실 가자며 둘만 대화 만드는 장치"** + **직설 조언** 신 구체화 | E049 §307-308, §337-374 |
| 7 | 핵심 대사 부재 | **"오빠는 상대 마음 빨리 알아차리는 게 다정한 거라고 생각하죠"** panel | E049 §168-170 |
| 8 | 얼굴 차별화 부재 | **vs 아린**: bob (long wavy), cool gray (warm yellow). **vs 송유빈** (다음 22세 mature): 21세 active student | 사용자 피드백 패턴 |
| 9 | round-frame glasses | **유지** (사용자 결정 A) — 직설 정체성 시각화 | v1 baseline |
| 10 | 단순 사이드킥 추상 거부 | **"위로보다 현실 조언" + "관찰력 매우 정확"** 구체화 | E049 §340, §371-374 |

---

## GPT Image 2 PROMPT

```
You are a professional animation character designer, art director,
and visual concept artist.

Your task is to generate a complete character profile sheet for
"배소나" (Bae Sona), supporting female character in TROY 「너라는
운율」 — 지아린's reality mirror and emotion translator.
NOT a comic-relief sidekick. Active direct truth-teller whose
"지나치게 단순해서 오히려 더 정확한" reactions cut through
emotional fog.

This sheet must MATCH the locked sheets of 서준·아린·이든·강도현
(same artist hand, IDENTICAL Modern Korean cinematic illustration
style — matching set), AND be visually DISTINCT from 아린 (long
wavy + warm yellow) and from 송유빈 (next: 22세 calm mature).

═══════════════════════════════════════════════════════════
[LANGUAGE CONTROL]
═══════════════════════════════════════════════════════════

Korean primary, English in parentheses. NO Japanese characters.

═══════════════════════════════════════════════════════════
[ART STYLE — STRICT]
═══════════════════════════════════════════════════════════

Modern Korean cinematic illustration aesthetic, IDENTICAL to the
locked sheets. Cool intelligent palette (precise minimalism —
정확함과 명료함이 시각적 정체성).
- Clean cel-shading, medium clean outlines, crisp digital finish
- Cool intelligent palette: mid gray #8C8E92, beige #D8C4A0,
  cool white #F5F5F0, ink black #1E1F22
- NOT moe-childish, NOT comic-relief sidekick framing,
  NOT idol-fanart, NOT advertising gloss

═══════════════════════════════════════════════════════════
[FACE DIFFERENTIATION — CRITICAL]
═══════════════════════════════════════════════════════════

배소나 must be visually distinct from 아린 (locked) AND from
송유빈 (next sheet). Apply ALL 5 differentiation rules:

1. HAIR — Short straight bob (chin-length to jaw-length), NOT
   long, NOT wavy. (직접 대비: 아린의 long wavy that softly falls.)
   Clean blunt cut or slight inward curl.

2. COLOR ANCHOR — Cool gray + cool white. (직접 대비: 아린의
   warm yellow + soft coral.)

3. AGE FEEL — 21세 active student, sharper smile-readiness,
   more direct posture. (직접 대비 송유빈: 22세 calm mature
   stillness.) Looks like she's about to say something direct.

4. EYES — Sharp intelligent dark brown, slight squint behind
   glasses when analyzing. NOT dreamy, NOT soft.

5. SIGNATURE — Round-frame glasses (subtle thin metal frame).
   The "intellectual direct truth-teller" visual cue.

OVERALL FACE INSTRUCTION: "21세 Korean female student, short
bob hair (NOT long), round-frame glasses, sharp intelligent eyes,
slight smile-readiness in mouth corner — looks like she's about
to say something direct and accurate. Visually distinct from
아린 (long wavy + warm yellow) and from any other locked sheet."

═══════════════════════════════════════════════════════════
[OUTPUT STRUCTURE]
═══════════════════════════════════════════════════════════

masterpiece, best quality, ultra detailed, 4k resolution,
modern Korean cinematic illustration, clean digital art,
professional character design sheet, editorial layout,

═══════════════════════════════════════════════════════════
-- CHARACTER IDENTITY (정체) --
═══════════════════════════════════════════════════════════

Name (이름): 배소나 (Bae Sona)
Age (나이): 21세 (아린과 동갑)
Height (신장): 168cm
Nationality (국적): 대한민국
Department (학과): 혜담대학교 (아린의 가장 가까운 친구)
Visible trait (시각 특징): round-frame glasses + 음료 컵 손에
                              (컵 뚜껑 손톱으로 톡톡 두드림 signature)
Role (역할): TROY 조연 — 지아린의 현실 거울이자 감정 통역자.
              "지나치게 단순해서 오히려 더 정확한" active direct
              truth-teller. NOT 단순 사이드킥, NOT 코믹 릴리프.

Profile description (프로필 소개 — in Korean):
"21세, 아린의 가장 가까운 친구. 똑똑하고 직설적이며 감정 표현이
빠르고 정확한 사람. 위로보다 현실 조언을 먼저 건넨다. 아린의
솔직함을 현실로 끌어내려 주는 사람.

핵심 인상: '지나치게 단순해서 오히려 더 정확한' 반응.
한 마디 받아치기, 짧은 웃음, 컵 뚜껑 손톱으로 톡톡 두드리며
관찰. Phase 2부터 누적으로 작동하다가 후반에는 감정 통역보다
'경계 확인' 역할로 제한된다.

서준에게는 '오빠', 아린에게는 '언니' 라고 부르는 친밀한 후배."

═══════════════════════════════════════════════════════════
-- APPEARANCE (외형) --
═══════════════════════════════════════════════════════════

Left side large portrait (leftmost column, full height):
- Upper body portrait, three-quarter angle
- Modern Korean cinematic illustration style
- Short straight bob hair (chin-length to jaw-length, NOT long,
  NOT wavy) — cool dark brown to soft black
- Sharp intelligent dark brown eyes behind round-frame glasses
- Slight smile-readiness in mouth corner (about to say something
  direct, NOT bland, NOT comic)
- Pale Korean skin, neutral cool tone
- Mid-gray fine-knit sweater + black slim pants
  (cool intelligent silhouette)
- Round-frame glasses (thin metal frame, subtle, not flashy)
- Holding a tall café cup (iced americano or 아이스티) in one hand,
  THUMBNAIL hint of fingernail tapping cup lid (signature gesture)
- Background: 학생회관 뒤 카페 interior, cool neutral gray
  with soft cream accent, café 달 lighting

═══════════════════════════════════════════════════════════
-- EXPRESSIONS SHEET (표정) --
═══════════════════════════════════════════════════════════

Header label: "표정 (EXPRESSIONS)"
6 face close-ups in row, all consistent style. ACTIVE DIRECT
baseline (NOT calm observant — 즉각 reaction).

1. 기본 (Neutral) — slight smile-readiness baseline, eyes ALERT
   intelligent. About to react. NEVER blank, NEVER too calm.

2. 받아치기 (Quick rebuttal) — mouth slightly open mid-line, eyes
   bright with the "표현은 또 왜 그렇게 해" moment. (E049 §83)

3. 짧은 웃음 (Short laugh) — peeking laugh, eyes crinkled
   briefly. The "피식 웃었다" or "물 뿜듯 웃었다" energy.
   (E049 §82, §342)

4. 분석 (Analytic) — slight squint behind glasses, processing,
   the moment of seeing through someone's bullshit.

5. 직설 조언 (Direct truth-tell) — looking straight at someone,
   no sugarcoating, the "그럼 또 말해야죠. 언니가 안 말하면
   오빠는 자기가 맞았다고 착각할걸요" face. (E049 §371-374)

6. 경계 (Boundary) — calm "no" without aggression, raised palm
   or measured posture, the late-Phase boundary-confirmation
   role. (canon §4 후반 lock)

All 6 same hairstyle (bob), glasses consistent, neutral
warm-cream backgrounds.

═══════════════════════════════════════════════════════════
-- OUTFITS SHEET (의상) --
═══════════════════════════════════════════════════════════

Header label: "의상 (OUTFITS)"
3 half-body variations:

1. ⭐ 메인 (Café / Daily) — PRIMARY OUTFIT
   Mid-gray fine-knit sweater + black slim pants + round glasses
   + holding café cup (iced drink visible)
   → MARK "메인 / MAIN" with star icon

2. 식당 뒤풀이 (Restaurant / casual) — beige cardigan over white
   tee + jeans, slight warmer look. Same glasses. (E020 학생식당
   뒤풀이 컨텍스트)

3. 디테일 (Detail) — close-up of:
   - Round-frame glasses + slight smile mouth corner
   - HAND HOLDING CAFÉ CUP, fingernail tapping the cup lid ⭐
     (E049 §31 signature gesture lock)

═══════════════════════════════════════════════════════════
-- FULL BODY SHEET (전신) --
═══════════════════════════════════════════════════════════

Header label: "전신 (FULL BODY)"
3 views in main outfit:
1. 정면 (Front) — composed, slight forward focus, café cup in hand
2. 측면 (Side) — clean upright line, intelligent posture
3. 후면 (Back) — neat shoulder line, bob hair from behind

═══════════════════════════════════════════════════════════
-- POSES SHEET (포즈) --
═══════════════════════════════════════════════════════════

Header label: "포즈 (POSES)"
4 action poses anchored to E020/E049 body habits:

1. 카페에서 컵 톡톡 (Café table, tapping cup lid) ⭐ — 카페 의자에
   앉아 한 손으로 음료 컵을 잡고, 손톱으로 컵 뚜껑을 톡톡 두드리며
   상대방 말을 듣는 자세. (E049 §31 signature gesture)

2. 받아치기 (Quick rebuttal across table) — 마주앉은 사람의
   말에 즉각 받아치는 순간. 약간 앞으로 기운 자세, 입가 살짝
   열림. (E049 §83-84, §192)

3. "잠깐 화장실" 일어나기 (Standing up to leave the table) —
   "둘만 대화 만들어 주는 장치" 신. 의자에서 살짝 일어나며
   다른 두 사람 (서준+아린) 에게 자연스럽게 자리 비워 주는
   자세. (E049 §307-308 lock)

4. 거울 앞 직설 (Direct truth-tell in mirror context) — 화장실
   거울 앞에서 아린에게 "언니가 다 참으면서 괜찮은 척할 때
   표정이 더 보여요" 같은 직설을 건네는 순간. 차분하지만 명확.
   (E049 §337-340)

═══════════════════════════════════════════════════════════
-- STYLING BREAKDOWN (스타일링) --
═══════════════════════════════════════════════════════════

Header label: "스타일링 (STYLING BREAKDOWN)"
- 스웨터 (Sweater) — mid gray #8C8E92, fine knit
- 슬림 팬츠 (Slim pants) — black, simple cut
- 안경 (Round-frame glasses) — round, thin metal frame
- 음료 컵 (Café cup) — tall, transparent or kraft, signature item
- 가방 (Bag) — black tote, simple
- 신발 (Shoes) — clean white sneakers or simple flats

═══════════════════════════════════════════════════════════
-- PROPS (소품) --
═══════════════════════════════════════════════════════════

Header label: "소품 (PROPS)"
- 음료 컵 (Café cup) — most important signature, cup lid visible
  (for fingernail tapping gesture)
- 안경 (Round-frame glasses) — second signature
- 휴대폰 (Phone) — simple slab, for occasional reference
- 작은 노트 또는 메모 (Small notepad) — sub prop, NOT main

═══════════════════════════════════════════════════════════
-- COLOR & TONE (컬러 & 톤) --
═══════════════════════════════════════════════════════════

Header label: "컬러 & 톤 (COLOR & TONE)"
- Primary: 중간 그레이 (Mid Gray) #8C8E92
- Accent: 베이지 (Beige) #D8C4A0
- Supporting: 차가운 화이트 (Cool White) #F5F5F0
- Base: 잉크 블랙 (Ink Black) #1E1F22

Below palette: "지나치게 단순해서 정확함, 직설, 컵 톡톡, 현실 거울"

═══════════════════════════════════════════════════════════
-- ROLE CONCEPT (역할 컨셉) --
═══════════════════════════════════════════════════════════

Header label: "역할 컨셉 (ROLE CONCEPT)"
Box description in Korean:

"아린의 가장 가까운 친구이자 현실 거울. 감정 통역자에서 후반엔
경계 확인 역할로 변화. 단순 활달 사이드킥 아님 — '지나치게
단순해서 오히려 더 정확한' 직설가. 위로보다 현실 조언을 먼저
건넨다. 똑똑하고 차분하고 명료함."

서사적 역할 (Narrative Roles):
- 아린 현실 거울
- 감정 통역자 (~Phase 4)
- 후반 경계 확인 역할 (canon §4 locked)
- 둘만 대화 만들어 주는 장치 (자연스럽게 자리 비워 주기)
- 단순 사이드킥 아님

═══════════════════════════════════════════════════════════
-- MUSICAL SIGNATURE (음악 인상) --
═══════════════════════════════════════════════════════════

Header label: "음악 인상 (MUSICAL SIGNATURE)"

"짧고 정확한 미니멀 비트 — 군더더기 없는 톡톡거리는 리듬
(컵 뚜껑 손톱 톡톡 = 비유적 비트)"
(아린의 발신성·따뜻한 어쿠스틱과 정확히 대비되는 톤)

═══════════════════════════════════════════════════════════
-- KEY QUOTES (핵심 대사) --
═══════════════════════════════════════════════════════════

Header label: "핵심 대사 (KEY QUOTES)"

대사 1 (서준에게):
"오빠는 상대 마음 빨리 알아차리는 게 다정한 거라고 생각하죠."
— 배소나 (E049 §168-170)

대사 2 (아린에게):
"그럼 또 말해야죠. 언니가 안 말하면 오빠는 자기가 맞았다고
착각할걸요."
— 배소나 (E049 §371-374)

═══════════════════════════════════════════════════════════
-- MOOD BOARD (무드) --
═══════════════════════════════════════════════════════════

Header label: "무드 (MOOD BOARD)"
4 small thumbnail mood references:
- 학생회관 뒤 카페 인테리어 + 마주앉은 두 사람
- 손톱이 컵 뚜껑을 톡톡 두드리는 close-up ⭐
- 카페 화장실 거울 앞 직설 신
- 가을 캠퍼스 차분한 silhouette (Phase 후반 경계 톤)

═══════════════════════════════════════════════════════════
[LAYOUT]
═══════════════════════════════════════════════════════════

- Magazine 2:3 (1024 x 1536), cool neutral gray background
- IDENTICAL artist hand to all locked sheets (서준·아린·이든·강도현)
- Korean labels primary, English in parentheses
- Detail panel must show fingernail-tapping-cup-lid close-up

═══════════════════════════════════════════════════════════
[IMPORTANT RULES]
═══════════════════════════════════════════════════════════

- IDENTICAL art style to all locked sheets
- FACE DIFFERENTIATION from 아린 + 송유빈 (5 rules above) — STRICT
- Active direct baseline (NOT comic-relief sidekick framing,
  NOT calm observant)
- Round glasses visible in EVERY view (signature lock)
- Bob-length straight hair (NEVER long, NEVER wavy — 직접 대비
  to 아린의 long wavy)
- Café cup visible in main outfit + detail (signature prop)
- Fingernail-tapping-cup-lid gesture visible in detail panel ⭐
- NEVER over-emotional, NEVER reduced to simple cheerleader
- Key quote panel showing 호칭 (오빠/언니) usage

--no photorealistic, no 3D render, no comic-relief sidekick framing,
no over-emotional caricature, no idol-fanart, no Japanese characters,
no exaggerated cuteness, no calm-blank-face, no long wavy hair
```

---

## Calibration 가이드 (시트 받은 후 본 섹션 사용)

### Manuscript lock 체크 (E020 + E049)
- [ ] **active direct baseline** — calm observant 가 아닌 즉각 reaction 인상?
- [ ] ⭐ **컵 + 손톱 톡톡 손동작** — detail panel 또는 메인 portrait 에 visible?
- [ ] **round-frame glasses** 모든 view 에 보임?
- [ ] **bob-length hair** (NOT long, NOT wavy)?
- [ ] **호칭 panel** ("오빠/언니" 사용 컨텍스트) 보임?
- [ ] 핵심 대사 1번 ("오빠는 상대 마음 빨리 알아차리는 게...") 인용?
- [ ] 핵심 대사 2번 ("그럼 또 말해야죠...") 인용?
- [ ] 표정 2 "받아치기" + 표정 3 "짧은 웃음" 차별 식별 가능?

### 얼굴 차별화 체크 (vs 아린)
- [ ] **머리** — bob (vs 아린 long wavy) 명확 차별?
- [ ] **컬러 anchor** — cool gray (vs 아린 warm yellow) 명확 차별?
- [ ] **표정 baseline** — sharp smile-readiness (vs 아린 honest gentle) 차별?
- [ ] 두 인물 나란히 비교 시 명확히 다른 인물?

### 캐논 §4 lock 체크
- [ ] "감정 통역자" + "현실 거울" + "후반 경계 확인" 3 layer 표정·pose 에 lock?
- [ ] "단순 사이드킥 아님" — over-emotional caricature 0건?

### 기술 체크
- [ ] 모든 view 동일 인물 (face-lock)
- [ ] matching set with 서준·아린·이든·강도현 (same artist hand)
- [ ] 한국어 primary + 영어 parentheses (NO Japanese)

### 문제 발견 시 v3 보정
- 안경 안 보임 → "round-frame glasses visible in EVERY view" 강조
- 컵 손톱 톡톡 안 보임 → detail panel "fingernail tapping cup lid close-up" 강제
- 머리 너무 길음 → "SHORT BOB chin-length, NOT long, NOT wavy" 강조
- 표정 너무 차분 → "active direct, smile-readiness, NOT calm blank" 강조
- 아린과 비슷 → FACE DIFFERENTIATION 5 rules 강조 + "must look like a different person from 아린" 명시
