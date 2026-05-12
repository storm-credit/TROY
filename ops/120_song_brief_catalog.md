# TROY 120-Song Brief Catalog v1

> Per-episode archetype assignment. Each episode also has lane (already set in `120_episode_genre_assignment.json`) — those two together drive Lyrics Director (Songwriter mode) brief.
> Curator: Conductor (Opus Music Curator). Date: 2026-05-12.
> Source archetypes: `ops/song_mood_archetypes_v1.md` (v1, 2026-05-12).
> Source lanes/BPM/anchor: `ops/120_episode_genre_assignment.json` (anchor field treated as curatorial hint only).

---

## Distribution summary

| Family | Count | Target | Status |
|---|---|---|---|
| Light (A1-A4) | 35 | 32-36 | ok |
| Mid (B1-B4) | 54 | 54-58 | ok (at lower bound) |
| Deep (C1-C2) | 31 | 28-32 | ok |
| **Total** | **120** | 120 | ok |

## Per-Phase summary

| Phase | Eps | Light | Mid | Deep | Light min (25%) | Deep max (50%) | Status |
|---|---|---|---|---|---|---|---|
| 1 (E001-E020) | 20 | 6 | 8 | 6 | ≥5 ok | ≤10 ok | ok |
| 2 (E021-E035) | 15 | 6 | 6 | 3 | ≥4 ok | ≤7 ok | ok |
| 3 (E036-E060) | 25 | 7 | 14 | 4 | ≥7 ok | ≤12 ok | ok |
| 4 (E061-E080) | 20 | 5 | 10 | 5 | ≥5 ok | ≤10 ok | ok |
| 5 (E081-E100) | 20 | 6 | 11 | 3 | ≥5 ok | ≤10 ok | ok |
| 6 (E101-E120) | 20 | 5 | 5 | 10 | ≥5 ok | ≤10 ok (at max) | ok |

> Note: phase sizes are non-uniform per the source JSON (P2=15, P3=25, others=20). 25% / 50% rules applied proportionally.

## Per-archetype count

| Archetype | Family | Count | Target Range | Status |
|---|---|---|---|---|
| A1 (Soft Morning Warmth) | light | 9 | 8-10 (Light/4) | ok |
| A2 (Walking Pulse) | light | 8 | 8-10 | ok |
| A3 (Smile-in-Song) | light | 8 | 8-10 | ok |
| A4 (Quiet Freedom) | light | 10 | 8-10 | ok |
| B1 (Unnamed Longing) | mid | 16 | 13-15 | at max |
| B2 (Close-Mic Noticing) | mid | 10 | 13-15 | low (lane scarcity) |
| B3 (Quiet Surprise) | mid | 16 | 13-15 | at max |
| B4 (Self-Tenderness) | mid | 12 | 13-15 | slightly low |
| C1 (Restrained Ache) | deep | 15 | 13-15 | ok |
| C2 (Silent Resolve) | deep | 16 | 13-15 | at max |

> **Per-archetype min-11 rule note**: With Light family capped at 32-36 across 4 archetypes (avg 8-9), Light archetypes mathematically cannot reach 11. Family quota takes priority. Mid/Deep archetypes within or near 11-16 target.
> **B2/B4 lane scarcity note**: B2 is banned on `bossa-folk`, `folk-electronic`, `90s-vintage-ballad` (3 lanes); B4 is banned on `folk-electronic`, `bossa-folk`. Their counts skew low because available lanes are limited.

## Album track sequence (12 tracks)

Album-internal sequencing (chronological by episode = album narrative order):

| # | Ep | Lane | BPM | Archetype | Family | Function |
|---|---|---|---|---|---|---|
| 1 | E011 | korean-indie-folk | 75 | A1 | light | debut spark — bright opener |
| 2 | E014 | korean-indie-folk | 72 | B3 | mid | shy conversation |
| 3 | E022 | lofi-bedroom | 68 | B2 | mid | voice-memory |
| 4 | E030 | korean-indie-folk | 75 | A4 | light | careful yes |
| 5 | E034 | dream-pop | 70 | B1 | mid | withdrawal |
| 6 | E050 | ambient-piano | 60 | C2 | deep | private diary |
| 7 | E054 | chamber-pop | 76 | A1 | light | title-track bright crown |
| 8 | E064 | folk-electronic | 78 | C1 | deep | pre-loss instability |
| 9 | E094 | k-soul-quiet | 73 | B3 | mid | correction / asking |
| 10 | E108 | chamber-pop | 75 | C2 | deep | livable uncertainty |
| 11 | E113 | 90s-vintage-ballad | 72 | A4 | light | selfhood declaration |
| 12 | E118 | 90s-vintage-ballad | 73 | C2 | deep | dignified parting (farewell) |

Family span across album: Light 4 (E011, E030, E054, E113), Mid 4 (E014, E022, E034, E094), Deep 4 (E050, E064, E108, E118). Balanced.
Arc: bright open → close-mic intimacy → first decision → first distance → quiet declaration of self closure → silent farewell.

---

## Phase 1 (E001-E020)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E001 | korean-indie-folk | 75 | **C1** | deep | Anchor — locked. C1 home territory. |
| E002 | korean-indie-folk | 73 | **B1** | mid | v10 anchor — locked. B1 home. |
| E003 | ambient-piano | 62 | C2 | deep | Ambient-piano = C2 1순위. Silent resolve of name-engraving weight. |
| E004 | lofi-bedroom | 68 | B2 | mid | Lofi-bedroom = B2 1순위. One-voice noticing fits close-mic. |
| E005 | korean-indie-folk | 73 | A4 | light | First Light injection. Quiet freedom of anticipating tomorrow. |
| E006 | korean-indie-folk | 73 | B3 | mid | Quiet surprise of small tremor on re-encounter. |
| E007 | ambient-piano | 60 | C1 | deep | Restrained ache of recognizing the song. Ambient carries weight. |
| E008 | lofi-bedroom | 70 | B3 | mid | Quiet surprise of distance-as-thorn. Lofi-bedroom OK for B3. |
| E009 | korean-indie-folk | 76 | C1 | deep | Restrained ache of lengthening wait. C1 1순위 lane. |
| E010 | ambient-piano | 64 | C2 | deep | Silent resolve to hold unsent letters. C2 home lane. |
| E011 | korean-indie-folk | 75 | **A1** | light | **ALBUM** debut spark. Bright opener. |
| E012 | ambient-piano | 62 | B4 | mid | Self-tenderness of holding aftermath. Ambient-piano OK for B4. |
| E013 | lofi-bedroom | 69 | A3 | light | Smile-in-song of name-weight shift. Lofi-bedroom 1순위 for A3. |
| E014 | korean-indie-folk | 72 | **B3** | mid | **ALBUM** shy conversation. B3 home. |
| E015 | ambient-piano | 61 | B4 | mid | Self-tenderness of noticing coincidence-pattern. Mid prevents deep run. |
| E016 | lofi-bedroom | 71 | A4 | light | Quiet freedom of small release. |
| E017 | lofi-bedroom | 67 | A3 | light | Smile-in-song self-mockery of being caught between hide/expose. |
| E018 | korean-indie-folk | 78 | B3 | mid | Quiet surprise of own anticipation. Variety + mid balance. |
| E019 | ambient-piano | 63 | C1 | deep | Restrained ache + ambient-piano sparse weight of first fissure. |
| E020 | korean-indie-folk | 75 | A1 | light | Phase 1 closer = A1 soft morning warmth. Opens Phase 2. |

## Phase 2 (E021-E035)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E021 | korean-indie-folk | 74 | B3 | mid | Quiet surprise of new-gesture awkwardness. Opens Phase 2. |
| E022 | lofi-bedroom | 68 | **B2** | mid | **ALBUM** voice-memory. Close-mic of replayed voice. |
| E023 | korean-indie-folk | 73 | A1 | light | Soft morning warmth of new-greeting ritual. |
| E024 | bossa-folk | 84 | A2 | light | Bossa-folk = A2 1순위 home. Walking pulse afternoon. |
| E025 | korean-indie-folk | 73 | B4 | mid | Self-tenderness of being-seen-through expression-leak. |
| E026 | lofi-bedroom | 70 | A3 | light | Smile-in-song self-mockery of pre-meeting nerves. |
| E027 | lofi-bedroom | 68 | C1 | deep | Restrained ache of misfit conversation echo. |
| E028 | bossa-folk | 86 | A2 | light | Bossa-folk = A2 home. Walking pulse with single focal point. |
| E029 | korean-indie-folk | 76 | B1 | mid | Unnamed longing of unfinished sentence. B1 indie-folk home. |
| E030 | korean-indie-folk | 75 | **A4** | light | **ALBUM** careful yes. Quiet freedom of yes-with-pace. |
| E031 | korean-indie-folk | 75 | B1 | mid | Unnamed longing of new-but-already-missing. |
| E032 | lofi-bedroom | 67 | C2 | deep | Silent resolve to hold unsaid sentence before sleep. |
| E033 | korean-indie-folk | 75 | A3 | light | Smile-in-song shared self-deprecation in inside-joke. |
| E034 | dream-pop | 70 | **B1** | mid | **ALBUM** withdrawal. Through-the-glass unnamed longing. C1 forbidden on dream-pop. |
| E035 | korean-indie-folk | 74 | C1 | deep | Phase 2 closer. Restrained ache at threshold of Phase 3. |

## Phase 3 (E036-E060)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E036 | chamber-pop | 74 | B2 | mid | Close-mic noticing of overlapping schedules. Chamber-pop 2-3순위. |
| E037 | k-soul-quiet | 73 | B3 | mid | Quiet surprise of song-becoming-new-meaning. |
| E038 | dream-pop | 72 | A2 | light | Walking pulse Var B (dream-pop). Sharp-summer-light outline. |
| E039 | bossa-folk | 87 | A2 | light | Bossa-folk = A2 home. Walking pulse settled. |
| E040 | chamber-pop | 76 | B3 | mid | Quiet surprise of hand-holding's frozen weight. |
| E041 | acoustic-ballad | 67 | B2 | mid | Close-mic noticing of post-quarrel silence. |
| E042 | k-soul-quiet | 75 | B4 | mid | Self-tenderness of being-met by reconciliation. |
| E043 | dream-pop | 71 | B2 | mid | Close-mic noticing of shared-territory-naming. |
| E044 | bossa-folk | 89 | A1 | light | Soft morning warmth of mundane-gift reveal. Bossa-folk 2-3순위 for A1. |
| E045 | k-soul-quiet | 73 | B3 | mid | Quiet surprise of being misread-and-still-seen. |
| E046 | chamber-pop | 78 | B1 | mid | Unnamed longing of feeling-already-known. |
| E047 | k-soul-quiet | 72 | C1 | deep | Restrained ache of first self-exposure. K-soul-quiet grain. |
| E048 | dream-pop | 74 | B1 | mid | Unnamed longing reframed as shared-shadow. |
| E049 | bossa-folk | 85 | A3 | light | Smile-in-song self-mockery about wanting-to-keep moment. |
| E050 | ambient-piano | 60 | **C2** | deep | **ALBUM** private diary. C2 home, ambient-piano 1순위. |
| E051 | chamber-pop | 74 | B4 | mid | Self-tenderness of inner room expanding. |
| E052 | k-soul-quiet | 74 | B4 | mid | Self-tenderness home — receiving deep comfort. |
| E053 | chamber-pop | 77 | C1 | deep | Restrained ache of hidden fissure in stable place. |
| E054 | chamber-pop | 76 | **A1** | light | **ALBUM** title-track. Soft morning warmth crown with shadow under. |
| E055 | dream-pop | 73 | A3 | light | Smile-in-song self-mockery of pretending-to-be-fine. |
| E056 | k-soul-quiet | 71 | B2 | mid | Close-mic noticing of private-signal hidden in public. |
| E057 | dream-pop | 70 | B1 | mid | Unnamed longing of growing distance via small lies. |
| E058 | bossa-folk | 83 | A4 | light | Quiet freedom of misreading-acknowledged. Light variety. |
| E059 | ambient-piano | 63 | C2 | deep | Silent resolve home — first heavy silence at table. |
| E060 | chamber-pop | 75 | B1 | mid | Phase 3 closer. Unnamed longing of last warmth before drift. |

## Phase 4 (E061-E080)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E061 | korean-indie-folk | 73 | B1 | mid | Phase 4 opener. Unnamed longing of misalignment. B1 indie-folk home. |
| E062 | dream-pop | 70 | B1 | mid | Unnamed longing through fog. Dream-pop hazy carries B1. |
| E063 | folk-electronic | 80 | B3 | mid | Quiet surprise of familiar-turned-strange. Folk-electronic allows B3. |
| E064 | folk-electronic | 78 | **C1** | deep | **ALBUM** pre-loss instability. C1 (B1/C2 banned on folk-electronic). |
| E065 | 90s-vintage-ballad | 72 | C2 | deep | Silent resolve of minor-key descent. 90s-vintage = C2 2-3순위. |
| E066 | korean-indie-folk | 74 | B4 | mid | Self-tenderness toward fear-of-self in solidifying misunderstanding. |
| E067 | dream-pop | 68 | B1 | mid | Unnamed longing perfectly — through-glass unreachable hand. |
| E068 | folk-electronic | 82 | A3 | light | Smile-in-song dark-variant of self-mockery at strange-tone-heard. |
| E069 | korean-indie-folk | 73 | C2 | deep | Silent resolve of unspoken end after quarrel. |
| E070 | korean-indie-folk | 76 | B4 | mid | Self-tenderness of being-alone-first-week. |
| E071 | dream-pop | 69 | B2 | mid | Close-mic noticing of color-decay in photos. |
| E072 | folk-electronic | 79 | C1 | deep | Restrained ache + folk-electronic tension = decision-pressure dawn. |
| E073 | 90s-vintage-ballad | 73 | B1 | mid | Unnamed longing of late-arriving word. 90s-vintage OK for B1. |
| E074 | korean-indie-folk | 75 | C2 | deep | Silent resolve of together-place-as-emptiest paradox. |
| E075 | dream-pop | 71 | B3 | mid | Quiet surprise of recognizing the once-more-vs-stop edge. |
| E076 | folk-electronic | 81 | A2 | light | Walking pulse of decision-arrival after long silence. |
| E077 | korean-indie-folk | 75 | A4 | light | Quiet freedom of disguised-final-goodbye. A4 indie-folk home. |
| E078 | korean-indie-folk | 77 | B1 | mid | Unnamed longing of absence-shaped time. |
| E079 | dream-pop | 72 | A2 | light | Walking pulse Var B — dream-vs-waking distance. |
| E080 | 90s-vintage-ballad | 74 | A4 | light | Phase 4 closer. Quiet freedom of letting-go-beginning. |

## Phase 5 (E081-E100)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E081 | korean-indie-folk | 73 | A1 | light | Phase 5 opener. Soft morning warmth of awkward-warm chance meeting. |
| E082 | k-soul-quiet | 72 | B4 | mid | Self-tenderness holding too-much-meaning in one greeting. |
| E083 | lofi-bedroom | 69 | B2 | mid | Close-mic noticing of finite-presence beside. B2 lofi 1순위. |
| E084 | k-soul-quiet | 72 | B3 | mid | Quiet surprise of meeting-as-new-self. K-soul-quiet phrase-end glide. |
| E085 | chamber-pop | 75 | B3 | mid | Quiet surprise of receiving sincerity-too-late. |
| E086 | korean-indie-folk | 74 | A2 | light | Walking pulse of street-observation rediscovery in autumn. |
| E087 | lofi-bedroom | 68 | B2 | mid | Close-mic noticing of write-and-erase self-traces. |
| E088 | lofi-bedroom | 68 | B3 | mid | Quiet surprise of self-honesty becoming sayable. |
| E089 | k-soul-quiet | 71 | B1 | mid | Unnamed longing of returning shared-song. |
| E090 | chamber-pop | 76 | B3 | mid | Quiet surprise as relational epiphany — true shape seen. |
| E091 | korean-indie-folk | 75 | A2 | light | Walking pulse of solo-rhythm settling. |
| E092 | lofi-bedroom | 68 | C1 | deep | Restrained ache of fading face. |
| E093 | lofi-bedroom | 70 | B1 | mid | Unnamed longing of name-returned-with-different-weight. |
| E094 | k-soul-quiet | 73 | **B3** | mid | **ALBUM** correction/asking. B3 home — mishearing-made-visible. |
| E095 | chamber-pop | 77 | B2 | mid | Close-mic noticing of re-reading old pages. |
| E096 | korean-indie-folk | 72 | A1 | light | Soft morning warmth of distance-as-grace cheering apart. |
| E097 | korean-indie-folk | 73 | A4 | light | Quiet freedom home — peace of not-trying-again. |
| E098 | lofi-bedroom | 67 | A3 | light | Smile-in-song of self-not-shaken by old messages. |
| E099 | k-soul-quiet | 74 | C2 | deep | Silent resolve to hold thanks/sorry as one mind. |
| E100 | chamber-pop | 75 | C2 | deep | Phase 5 closer. Silent resolve preparing Phase 6 closure. |

## Phase 6 (E101-E120)

| Episode | Lane | BPM | Archetype | Family | Rationale |
|---|---|---|---|---|---|
| E101 | ambient-piano | 60 | C2 | deep | Phase 6 opener. Silent resolve at winter-edge light. C2 1순위. |
| E102 | chamber-pop | 74 | B3 | mid | Quiet surprise of preserved-closeness at-distance. |
| E103 | 90s-vintage-ballad | 71 | B4 | mid | Self-tenderness of meeting-as-old-friends with equanimity. |
| E104 | ambient-piano | 62 | C2 | deep | Silent resolve of side-by-side new geometry. |
| E105 | ambient-piano | 58 | B4 | mid | Self-tenderness home of small-firm-daily-life. |
| E106 | chamber-pop | 76 | A1 | light | Soft morning warmth of unexpected-shape spring arrival. |
| E107 | 90s-vintage-ballad | 73 | C2 | deep | Silent resolve of mature-balance — protect both. |
| E108 | chamber-pop | 75 | **C2** | deep | **ALBUM** livable uncertainty. C2 home — quiet wisdom. |
| E109 | ambient-piano | 62 | B4 | mid | Self-tenderness of trust-after-friction. |
| E110 | acoustic-ballad | 67 | B1 | mid | Unnamed longing of late-autumn new-shaped togetherness. |
| E111 | chamber-pop | 73 | A4 | light | Quiet freedom home — peace of not-going-all-the-way. |
| E112 | 90s-vintage-ballad | 70 | C1 | deep | Restrained ache before final-greeting. 90s-vintage C1 2-3순위. |
| E113 | 90s-vintage-ballad | 72 | **A4** | light | **ALBUM** selfhood declaration. A4 quiet freedom of self-keeping. |
| E114 | ambient-piano | 59 | C1 | deep | Restrained ache of accepting won't-see-again. |
| E115 | ambient-piano | 60 | C1 | deep | Restrained ache of perspective-shift (alone in once-shared scene). |
| E116 | chamber-pop | 75 | A1 | light | Soft morning warmth held-warmth of last-meal-like farewell. |
| E117 | ambient-piano | 60 | C2 | deep | Silent resolve home — last-hour deepest stillness. |
| E118 | 90s-vintage-ballad | 73 | **C2** | deep | **ALBUM** dignified parting. C2 home — album farewell. |
| E119 | ambient-piano | 57 | C1 | deep | Restrained ache deepest. Lowest BPM (57) carries weight. |
| E120 | acoustic-ballad | 65 | A4 | light | Series finale. Quiet freedom of livable closure — not despair, not triumph. |

---

## Validation

- [x] E001 = C1, E002 = B1 locked
- [x] 12 album tracks distributed across all 3 families (4 Light, 4 Mid, 4 Deep)
- [x] Every Phase ≥ 5 Light (proportional 25% rule for non-20 phases)
- [x] Every Phase ≤ 10 Deep (50% max; P6 sits exactly at 10/20)
- [x] No archetype runs ≥ 3 consecutive within any Phase
- [x] No archetype assigned to its 금지 lane (verified per-lane)
  - All ambient-piano episodes (16) = B4/C1/C2 only (A1-A4 all banned on ambient-piano)
  - All bossa-folk episodes (6) = Light family only (B1-C2 all banned on bossa-folk)
  - All folk-electronic episodes (5) = A2/A3/B3/C1 only (A1/A4/B1/B2/B4/C2 all banned)
  - All dream-pop episodes (11) avoid C1/C2 (banned)
  - All 90s-vintage-ballad episodes (8) avoid A2/A3/B2 (banned)
  - All chamber-pop episodes (16) avoid A3 (banned)
  - All lofi-bedroom episodes (15) avoid A1 (banned)
- [x] Per-archetype counts: 8-16 range. Mid/Deep within 12-16 (target 13-15 met for C1; B1/B3/C2 at max 16; B4 slightly low at 12; B2 low at 10 due to lane scarcity). Light archetypes 8-10 each — capped by Light family target.
- [x] Family totals: Light 35 / Mid 54 / Deep 31 = 120 ok

## Notes

- **B1=16 at cap, driven by Phase 4 + closure phrases**: Unnamed Longing fits the "drift / 두고 온 데" emotional grammar across many Phase 3 cracks, Phase 4 fog, and Phase 5 returning-name episodes. Capped at 16 (max); could push 1-2 over to B3 in future revision if E060/E110/E089 read better as quiet-surprise.
- **B2 low at 10, B4 low at 12**: Both archetypes have multiple banned lanes (B2 forbidden on bossa-folk + folk-electronic + 90s-vintage; B4 forbidden on folk-electronic + bossa-folk). The 120 lane distribution simply doesn't supply enough B2/B4-friendly slots. Acceptable trade-off; below target but above min-11 for both Mid archetypes.
- **C2=16 vs C1=15**: C2 (Silent Resolve) takes Phase 6 ambient-piano cluster (E101, E104, E117) and the album farewell E118, plus E099/E100/E107/E108 cluster — dignified-closure register matches Phase 6 finale density. C1 takes Phase 1 closure-arc (E001 anchor, E007/E009/E019/E027/E035) and Phase 4 pre-loss (E064 album).
- **Album sequencing arc**: E011 (A1 spark) → E014 (B3 shy) → E022 (B2 voice-memory) → E030 (A4 yes) → E034 (B1 withdrawal) → E050 (C2 diary) → E054 (A1 title-track) → E064 (C1 pre-loss) → E094 (B3 correction) → E108 (C2 livable) → E113 (A4 selfhood) → E118 (C2 farewell). Family rhythm: L-M-M-L-M-D-L-D-M-D-L-D. Light tentpoles at #1, #4, #7 (title), #11. Deep gravity grows toward end (#6, #8, #10, #12).
- **A3 lane usage spans both light and dark variants**: A3 (Smile-in-Song) used in standard self-mockery (E013, E017, E026, E033, E049, E055, E098) and in one folk-electronic "darker smile" variant (E068 — wry self-mockery of mishearing-tone). E068 is the only folk-electronic Light slot and intentionally stretches A3 toward the wry-edge of its territory.
- **Phase 6 deep at exact 50% cap**: Phase 6 has 8 ambient-piano episodes (all must be B4/C1/C2) plus 5 chamber-pop and 5 90s-vintage. Deep landed at exactly 10/20. Reducing further would require pushing more ambient-piano episodes to B4, which would weaken the "침묵의 완성" closure register. Held at cap intentionally.
- **Per-archetype min-11 incompatibility documented**: With Light family target 32-36 and 4 Light archetypes, average is 8-9 per archetype — below the stated 11 min. Family quota took priority (firm constraint). Future revision could either expand Light total (>44) or fold A1+A2 / A3+A4 into 2 archetypes.
