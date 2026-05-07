# External Reference: Production-grade Storyboard Sheet Prompt Example

> ⚠️ THIS IS AN EXTERNAL REFERENCE — NOT TROY CANON. Do not copy content. Use ONLY for **format / depth / structural** principles.
> Source: user-provided example from a different work (Haechi/경복궁 fantasy MV, 2:15 length, 9 cuts).
> Purpose: Template Designer reads this to extract structure → produce TROY-adapted template.

## Why this is here

The user showed this as the depth/format storyboards SHOULD have for serious MV production. TROY's current `ops/E###_visual_cut_list.md` and `ops/E001_production_bible_v2.md` are too shallow for actual production.

## Key structural principles to extract

1. **Per-cut storyboard sheet** — each Seedance 15s cut gets its own paste-ready GPT Image 2 prompt that generates a planning sheet image
2. **Strict grid table layout** — 8 columns × N rows (one row per sub-shot)
3. **Critical rendering instruction** — explicit anti-panorama warnings (Image gen models default to merging into one wide image)
4. **Per-sub-shot fields** — SHOT/TIME · START FRAME · END FRAME · CAMERA · ACTION · DIALOGUE · SFX · MUSIC
5. **Header + Footer** — title block + director's intent + transition spec to next cut
6. **Visual style block** — palette, line weight, era, no-go list (NO retro, NO muddy, etc.)
7. **Character design block** — explicit attach to LOCKED character reference sheet
8. **Cultural anchoring** — explicit "no [other-culture] elements" lists
9. **Output rules + checklist** — language, watermarks, Japanese exclusion, etc.

## Reference content (do not paraphrase into TROY output)

(Below is the verbatim user-provided example. Read once for format extraction. Do not lift content into TROY storyboards.)

```text
CUT01  0:00-0:15  |  경복궁의 아침 / Morning at Gyeongbokgung
Before the Awakening  ·  5,309자

CUT01 IMAGE PROMPT — Copy & Paste
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CUT01 (0:00-0:15) — 경복궁의 아침 / Morning at Gyeongbokgung
  스토리보드 시트 생성용 이미지 프롬프트 (8샷)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a single landscape storyboard planning sheet image, aspect ratio 3:2,
approximately 1536x1024, with a dark navy-black background (#0A0A12) and crisp
white text. Professional anime music-video storyboard planning document.

All text in English and Korean only. No Japanese characters.

HEADER:
"CUT01 (0:00-0:15)  「경복궁의 아침 / Morning at Gyeongbokgung」   Before the Awakening"

TABLE LAYOUT — STRICT 8 COLUMNS:
Column widths (approximate): 6% / 22% / 22% / 13% / 15% / 8% / 7% / 7%
Headers in order:
1) SHOT / TIME
2) START FRAME   (wide thumbnail)
3) END FRAME     (wide thumbnail)
4) CAMERA / MOVEMENT
5) ACTION / DIRECTION
6) DIALOGUE / LYRICS
7) SFX
8) MUSIC
Thin white dividing lines. Exactly 8 shot rows.

[... shot-by-shot rows ...]

FOOTER:
Left cell: CUT01 DIRECTOR'S INTENT: [...]
Right cell: TRANSITION: [...]

OUTPUT RULES:
- English + Korean text only, no Japanese
- All N thumbnails use identical character design from attached sheet
- Fresh modern illustration aesthetic
- Bright sky blue + coral red + cream white palette
- Clean digital finish — no retro texture
- No watermarks, no logos
- Output single flat storyboard sheet image
```

The full example covered 9 sheets (CUT01-CUT08 + CUT05.5) for a 2:15 piece. CUT02, CUT04, CUT05, CUT05.5, CUT06, CUT07, CUT08 included a "CRITICAL RENDERING INSTRUCTION — READ FIRST" anti-panorama block.

## How TROY differs (must be reflected in TROY-adapted template)

| | External reference | **TROY E001** |
|---|---|---|
| Genre | Action fantasy (mythical creature, palace, flight) | Korean modern indie folk OST, isolation thesis |
| Visual lane | Pixiv illustrator / fresh bright modern illustration | Cinematic illustration per `canon/style.md §6` Z-track (illustration mode for MV) |
| Pacing | Dense action (6-8 sub-shots per 15s cut) | Meditative (3-4 sub-shots per 15s cut) |
| Palette | Vivid sky blue + coral red + cream white | Phase 1 thin spring light, gray-blue, restrained |
| Cultural elements | Joseon palace, hanbok, Haechi, dancheong | Modern Seoul university campus (universal cues; no novel-direct scenes per OST principle) |
| Length | 2:15 (8-9 cuts) | 3:30-4:00 (14-16 cuts) |
| Sub-shot density | 6-8 | 3-4 |
| Character | Single woman + Haechi creature | Single subject (universal-isolation register, not character-specific per OST principle — but LOCKED character sheets exist for narrative anchoring) |

## Attached LOCKED character sheets in TROY

`ops/character_sheets/` contains 8 LOCKED sheets (7 characters, including Yubin dual-age):
- yoon_seojun_sheet_v1.md — main male, 22, charcoal hoodie + 흰 이어폰 (★ E001 lead)
- ji_arin_sheet_v2.md — female lead, 21, 옅은 노란 + 기타 케이스
- choi_iden_sheet_v1.md — warm cream knit cardigan + 드럼스틱
- kang_dohyun_sheet_v2.md — 카멜+슬레이트
- bae_sona_sheet_v2.md — mid gray + 안경
- song_yubin_sheet_v3.md — autumn beige+brown, dual-age
- lee_taeyul_sheet_v3.md — camel + deep dusk navy, absolute pitch

For E001 (Seojun's first inner monologue), the LEAD character lock is `yoon_seojun_sheet_v1.md`. But per OST principle (canon §10), the MV may abstract — Template Designer decides whether character is on-screen or atmospheric.
