# TROY Storyboard — Prompt Boilerplates

> Engineer-facing reusable prompt fragments. Each block is a template-string
> fragment with `{{placeholder}}` slots. Generator does string substitution
> and concatenation per the assembly recipes shown in
> `STORYBOARD_TEMPLATE.md §1.8.2`.
>
> Convention: any text inside `<<< >>>` is the literal output. Anything inside
> `{{}}` is a placeholder. Outside both = engineer commentary (do NOT emit).
>
> All boilerplates are paste-ready and **already include the trailing newline
> behavior the final prompt expects**. Do not re-trim.

---

## BOILERPLATE_HEADER

**When**: First line of the storyboard sheet prompt (also written into the sheet image's HEADER block).

**Placeholders**:
- `{{cutNumber}}` — zero-padded 2 digits, e.g., `01`, `14`
- `{{startTime}}` — `mm:ss` (e.g., `0:00`)
- `{{endTime}}` — `mm:ss` (e.g., `0:15`)
- `{{koreanTitle}}` — Korean title for this cut, 4-10 chars
- `{{englishTitle}}` — English mirror, 2-5 words
- `{{cutPersona}}` — 1-3 word emotional descriptor

**Output**:

<<<
CUT{{cutNumber}} ({{startTime}}-{{endTime}})  |  「{{koreanTitle}} / {{englishTitle}}」  |  {{cutPersona}}
>>>

---

## BOILERPLATE_TABLE_LAYOUT_SPEC

**When**: Inside the storyboard sheet prompt's "TABLE LAYOUT" instruction. Tells GPT Image 2 the exact column structure to render.

**Placeholders**: none.

**Output**:

<<<
TABLE LAYOUT — STRICT 8 COLUMNS:
Column widths (approximate): 6% / 22% / 22% / 12% / 16% / 8% / 7% / 7%
Headers in order:
1) SHOT / TIME
2) START FRAME      (wide thumbnail)
3) END FRAME        (wide thumbnail)
4) CAMERA / MOVEMENT
5) ACTION / DIRECTION
6) DIALOGUE / LYRICS
7) SFX
8) MUSIC

Header row background: #16171B (slightly raised).
Body row background: #0F1014 (canvas).
Grid line color: #2A2D34, 1px thin.
Header text: ALL CAPS, sans-serif, color #E8E6E1.
Body text: sans-serif, color #C8C7C2 primary, #878680 for secondary annotations.
Vertical-center align text in every cell.
Thumbnail cells (columns 2 and 3) hold the illustration only — no caption text inside the cell.
>>>

---

## BOILERPLATE_VISUAL_STYLE

**When**: After the header, before the table content. Locks the illustration aesthetic.

**Placeholders**:
- `{{phaseNumber}}` — 1..6
- `{{phasePaletteBlock}}` — Phase-specific palette text (assembled from §1.3.2 of STORYBOARD_TEMPLATE.md)

  Phase 1 example value:
  ```
  pale sky #E8F0F5 (50%), warm cream #F5E1D0 (15%), soft slate #7A9CB0 (25%), charcoal #2C2E33 (10%)
  ```

**Output**:

<<<
VISUAL STYLE — MODERN KOREAN CINEMATIC ILLUSTRATION (Z-track, NOT live-action):
Modern Korean indie illustration aesthetic, fresh contemporary indie artbook
feel, refined illustrated character art for emotional music video.
Clean cel-shading with defined natural light and shadow, medium-weight clean
outlines, crisp digital finish.
NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro.
Restrained mood, Korean indie graphic-novel feel meets contemporary illustrated MV.

PHASE {{phaseNumber}} PALETTE: {{phasePaletteBlock}}.
Filmic grading. Practical lighting cue (sunlight or interior lamp). Late-spring
melancholy for Phase 1 / accordingly seasonal for other phases.
>>>

---

## BOILERPLATE_CHARACTER_ATTACH

**When**: After VISUAL STYLE, before the table rows. Enforces M2 (LOCKED sheet attach).

**Placeholders**:
- `{{characterAttachList}}` — bulleted list, one line per LOCKED sheet, format:
  ```
  - 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG
  - 최이든 (Choi Iden) — `ops/character_sheets/choi_iden_sheet_v1.md` 산출 PNG (CUT05만)
  ```
- `{{characterLockBlock}}` — concise per-character lock description

  E001 윤서준 example value:
  ```
  윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student
  at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long).
  Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always
  visible (cable falling along chest). Pale Korean skin, withdrawn observant
  guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).
  ```

**Output**:

<<<
CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — never substitute)
- skin tone with natural cool-toned shading
- expression baseline (per phase + per character lock)
- art style (modern Korean cinematic illustration, clean cel-shading)

Attached LOCKED sheets (paste these as image references in GPT Image 2 / Seedance UI):
{{characterAttachList}}

CHARACTER LOCK (verbatim, repeat in every prompt):
{{characterLockBlock}}

Character must look like the SAME ACTOR across every cut of this episode's MV.
Do NOT redraw the face; match the LOCKED sheet face design exactly.
>>>

---

## BOILERPLATE_CRITICAL_RENDERING_INSTRUCTION

**When**: Top of the storyboard sheet prompt, immediately after BOILERPLATE_HEADER. Anti-panorama warning.

**Placeholders**:
- `{{rowCount}}` — 3 or 4 (number of sub-shots in this cut)

**Output**:

<<<
‼ CRITICAL RENDERING — STORYBOARD TABLE, NOT PANORAMA ‼
Render EXACTLY {{rowCount}} horizontal rows, each row = 1 sub-shot = 2 small thumbnails.
TOTAL {{rowCount}} START thumbnails + {{rowCount}} END thumbnails, each in its OWN cell.
DO NOT merge thumbnails into a single wide image.
DO NOT span thumbnails across rows.
DO NOT skip the grid lines. Show THIN GRID LINES (color #2A2D34) between all rows and columns.
This is a planning sheet, NOT a panoramic illustration. Do not stylize as a single artwork.
Aspect ratio 3:2, 1536×1024, dark surface #0F1014 with crisp white text.
>>>

---

## BOILERPLATE_FOOTER_LEFT

**When**: Footer left cell of the storyboard sheet (≈ 60% width). Director's intent.

**Placeholders**:
- `{{cutNumber}}` — same as header
- `{{directorIntent}}` — 2-3 Korean sentences

**Output**:

<<<
CUT{{cutNumber}} DIRECTOR'S INTENT:
{{directorIntent}}
>>>

---

## BOILERPLATE_FOOTER_RIGHT

**When**: Footer right cell of the storyboard sheet (≈ 40% width). Transition spec to next cut.

**Placeholders**:
- `{{cutNumber}}` — current cut
- `{{nextCutNumber}}` — next cut number, OR literal "end" for the final cut
- `{{transitionToNext}}` — 1-2 Korean sentences

**Output (non-final cut)**:

<<<
TRANSITION → CUT{{nextCutNumber}}:
{{transitionToNext}}
>>>

**Output (final cut, where {{nextCutNumber}} = "end")**:

<<<
TRANSITION → end:
{{transitionToNext}}
>>>

---

## BOILERPLATE_OUTPUT_RULES

**When**: After footer, before checklist. Storyboard sheet prompt scope.

**Placeholders**:
- `{{phaseNumber}}` — 1..6

**Output**:

<<<
OUTPUT RULES:
- All text Korean primary + English in parentheses; NO Japanese characters, NO Chinese characters.
- All thumbnails use the LOCKED character reference attached (when character is on-screen).
- Modern Korean cinematic illustration, clean cel-shading, medium-weight outlines, crisp digital finish.
- Phase {{phaseNumber}} muted palette throughout — see VISUAL STYLE block.
- No watermarks, no logos, no signature marks, no artist tags.
- No moe-childish, no chibi proportions, no idol-fanart, no anime smile baseline.
- No retro halftone, no print-noise grain, no muddy tones, no over-saturation.
- No fantasy creature, no magical particles (unless Phase 5-6 symbolic insert).
- Output: single flat 3:2 storyboard sheet image, 1536×1024, dark surface #0F1014.
>>>

---

## BOILERPLATE_FINAL_OUTPUT_CHECKLIST

**When**: Bottom of the storyboard sheet prompt. Forces GPT Image 2 to self-verify.

**Placeholders**:
- `{{rowCount}}` — 3 or 4
- `{{phaseNumber}}` — 1..6
- `{{phaseHexAnchor}}` — top 2 HEX swatches, e.g., `#E8F0F5 / #7A9CB0`
- `{{cutNumber}}`, `{{startTime}}`, `{{endTime}}`, `{{koreanTitle}}`, `{{englishTitle}}`, `{{cutPersona}}` — same as header
- `{{characterSignatureLine}}` — 1 line, character signature props that must appear

  E001 윤서준 example: `윤서준의 wired white earphones must be visible in every shot featuring him.`

  Atmospheric cut example: `No character signature required (atmospheric cut).`

**Output**:

<<<
OUTPUT CHECKLIST (must satisfy ALL):
✓ {{rowCount}} distinct horizontal rows with grid lines
✓ {{rowCount}}+{{rowCount}} separate thumbnails ({{rowCount}} start + {{rowCount}} end), each in its own cell
✓ NOT a panoramic merged image
✓ Korean + English text only (no Japanese, no Chinese)
✓ All character thumbnails identical to attached LOCKED sheet (if character on-screen)
✓ Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)
✓ Phase {{phaseNumber}} palette ({{phaseHexAnchor}}) consistent across all thumbnails
✓ {{characterSignatureLine}}
✓ Header reads: "CUT{{cutNumber}} ({{startTime}}-{{endTime}})  |  「{{koreanTitle}} / {{englishTitle}}」  |  {{cutPersona}}"
✓ Footer LEFT = director's intent, RIGHT = transition spec
✓ No watermarks, no logos, no Japanese characters, no Chinese characters
>>>

---

## BOILERPLATE_SEEDANCE_M5_LENS_SWITCH

**When**: Inside the Seedance 2.0 prompt, between CHARACTER REFERENCE and CHARACTER LOCK blocks. Defines per-sub-shot timeline.

**Placeholders** (per sub-shot, repeated 3 or 4 times):
- `{{startTimeOffset}}` — float seconds, 1 decimal, e.g., `0.0`, `5.0`, `8.5`
- `{{endTimeOffset}}` — float seconds, 1 decimal
- `{{cameraMovement}}` — English, 8-12 words
- `{{shotType}}` — English, 2-3 words (e.g., `wide`, `medium close-up`, `over-shoulder`)
- `{{actionDirection}}` — English description (Generator translates from Korean ACTION cell), 15-30 words
- `{{visualDescription}}` — English description of visual continuity cue (light, palette anchor, character signature), 10-25 words

**Output (per sub-shot)**:

<<<
[{{startTimeOffset}}-{{endTimeOffset}}] Lens switch to {{cameraMovement}}, {{shotType}}. {{actionDirection}}. {{visualDescription}}.
>>>

**Assembly**: Generator emits one such block per sub-shot, separated by single blank lines, wrapped in a "MULTI-SHOT TIMELINE (M5)" section header.

**Sub-shot count + duration math (engineer enforce)**:
- 3 sub-shots: equal split = 5.0s each (offsets: 0.0-5.0 / 5.0-10.0 / 10.0-15.0)
- 4 sub-shots default split: 5.0/3.5/3.5/3.0 (offsets: 0.0-5.0 / 5.0-8.5 / 8.5-12.0 / 12.0-15.0)
- Sum of (endTimeOffset - startTimeOffset) MUST equal 15.0 exactly. Audit check rejects mismatch.

---

## BOILERPLATE_AUDIO_SFX_ONLY (M3)

**When**: Inside every Seedance 2.0 prompt. Bottom block before NEGATIVE. Non-negotiable.

**Placeholders**:
- `{{sfxList}}` — comma-separated English SFX cues, 6-12 items (Generator pulls from cut's SubShot.sfx fields and union-merges)

  E001 CUT01 example value:
  ```
  spring breeze, distant student chatter and laughter (slightly muffled), footsteps on stone path, faint blossom petal sounds, very faint earphone audio leak (almost inaudible piano hint), birds in distance
  ```

**Output**:

<<<
AUDIO: SFX ONLY. Include: {{sfxList}}.
NO music, NO BGM, NO melody, NO singing, NO dialogue, NO narration.
NO instrumental track of any kind. NO score, NO ambient music bed.
Music for the final MV is generated separately by Suno (track-level) and added in CapCut post-production.
Seedance MUST output a silent video with only the SFX listed above.
>>>

---

## BOILERPLATE_NEGATIVE_PROMPT (M4)

**When**: Bottom of every Seedance 2.0 prompt AND every storyboard sheet prompt's no-go list AND every main still prompt's no-go list. Last block before OUTPUT.

**Placeholders**:
- `{{phaseNumber}}` — 1..6 (only used to inject phase-specific guards; for Phase 1, the smile-baseline lock applies)
- `{{phaseSpecificNegative}}` — Phase 1 example value:
  ```
  no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant
  ```

**Output**:

<<<
NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no music, no BGM, no instruments in the file, no singing, no dialogue, no narration;
no photorealistic, no 3D render, no live-action, no CGI, no rendered photography;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom, no flame VFX (unless Phase-canon symbolic insert);
{{phaseSpecificNegative}};
no Japanese characters, no Chinese characters (Korean and English only).
>>>

---

## BOILERPLATE_PHASE_PALETTE_BLOCK (helper, used inside other boilerplates)

**When**: Substituted into `{{phasePaletteBlock}}` in BOILERPLATE_VISUAL_STYLE and `{{phaseHexAnchor}}` in BOILERPLATE_FINAL_OUTPUT_CHECKLIST.

**Placeholders**:
- `{{phaseNumber}}` — 1..6

**Output (Phase 1)**:

<<<
pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.
>>>

**Output (Phase 2)**:

<<<
mint #D8E5DA, warm peach #F2C5A0, slate #9FB3C8, deep slate #3F4A55. Muted, bridging spring to early summer.
>>>

**Output (Phase 3)**:

<<<
sun gold #FFD580, heat coral #C8553D, sea blue #5A8DAE, umber base #3A3530. Heated mid-summer density, more saturation allowed (cap 75%).
>>>

**Output (Phase 4)**:

<<<
wet slate #6B7A8F, damp earth #A4906E, rain green #8FA39A, rain charcoal #2A2E2F. Damp, late-summer humidity, blurred edges allowed in atmosphere.
>>>

**Output (Phase 5)**:

<<<
autumn beige #C8B68A, sage #7B8C7A, deep dusk #3D4A5C, night blue base #1F252E. Transparent autumn light, longer shadows.
>>>

**Output (Phase 6)**:

<<<
matured umber #9B7E5A, late warm #D9C4A0, dusk navy #2E3540, night base #1A1D24. Late autumn solid finish, restrained gold accents.
>>>

---

## Assembly recipes (engineer reference)

### Storyboard sheet prompt (per cut)

```
[GPT Image 2 prompt opening preamble — 1-2 sentences directing the model to render
 a single landscape storyboard planning sheet image, aspect 3:2, 1536×1024]

{BOILERPLATE_HEADER}

{BOILERPLATE_CRITICAL_RENDERING_INSTRUCTION}

{BOILERPLATE_VISUAL_STYLE}

{BOILERPLATE_CHARACTER_ATTACH}    // skip if cut.charactersOnScreen.length == 0
                                  //    → instead emit: "(Atmospheric cut, no character on-screen)"

{BOILERPLATE_TABLE_LAYOUT_SPEC}

{Per-row body: for each subShot in cut.subShots, emit one ROW block with:
 SHOT/TIME, START FRAME description, END FRAME description, CAMERA, ACTION,
 DIALOGUE/LYRICS, SFX, MUSIC. Markdown-style row block — see E001_SAMPLE_OUTPUTS.md}

{BOILERPLATE_FOOTER_LEFT}

{BOILERPLATE_FOOTER_RIGHT}

{BOILERPLATE_OUTPUT_RULES}

{BOILERPLATE_FINAL_OUTPUT_CHECKLIST}
```

### Seedance 2.0 prompt (per cut)

```
[Opening line: "CUT{{cutNumber}} ({{startTime}}-{{endTime}}) — 15-second modern Korean
 cinematic illustration multi-shot sequence (Z-track, NOT live-action, NOT moe anime,
 NOT idol-fanart)"]

STYLE: {1-line style block referencing BOILERPLATE_VISUAL_STYLE shorthand}

COLORS: {BOILERPLATE_PHASE_PALETTE_BLOCK}

{BOILERPLATE_CHARACTER_ATTACH}    // skip if cut.charactersOnScreen.length == 0
                                  //    → instead emit: "(Atmospheric cut, no character on-screen.)"

────────────────── MULTI-SHOT TIMELINE (M5) ──────────────────

{For each subShot, emit BOILERPLATE_SEEDANCE_M5_LENS_SWITCH}

{BOILERPLATE_AUDIO_SFX_ONLY}

{BOILERPLATE_NEGATIVE_PROMPT}

OUTPUT: 15-second silent illustrated video with SFX only.
No music, no speech, no BGM. Aspect ratio 16:9. 24fps.
```

### Main still prompt (per cut)

```
[Opening line: "CUT{{cutNumber}} MAIN STILL — first-frame reference for Seedance 2.0"]
[Sub-line: "{{koreanTitle}} / {{englishTitle}}  ·  {{cutPersona}}"]

[Aspect statement: "Aspect ratio 16:9 (1920x1080)."]

VISUAL STYLE (shorthand): {BOILERPLATE_VISUAL_STYLE inlined}

COMPOSITION: {subShot[0].startFrame in Korean + subShot[0].visualDescription augmented to a single still}

CAMERA: {subShot[0].cameraMovement}
LIGHTING: Phase {{phaseNumber}} {seasonal cue derived from phase}.
PALETTE (Phase {{phaseNumber}}): {BOILERPLATE_PHASE_PALETTE_BLOCK}

{BOILERPLATE_CHARACTER_ATTACH}    // skip if atmospheric

{BOILERPLATE_NEGATIVE_PROMPT}

OUTPUT: single 16:9 illustrated still, 1920x1080, suitable as first-frame reference for Seedance 2.0.
```

---

## Substitution audit (engineer must run before emit)

After all substitution, the final prompt string must satisfy:

1. **No leaky braces**: `String.includes("{{")` returns false. (Reject otherwise.)
2. **Korean + English only**: regex `/[぀-ヿ一-鿿]/u` returns no match (excludes Korean Hangul `가-힯` and Hangul Jamo). The Han block `一-鿿` should also be empty since TROY rejects Chinese characters.
3. **Length sanity**: storyboard sheet prompt body 800-2400 chars · Seedance prompt 600-1800 chars · main still prompt 400-1000 chars. Outside range → flag as warning (not hard reject).
4. **M3 presence**: Seedance prompt must contain literal substring `"AUDIO: SFX ONLY"`.
5. **M2 presence (when characters on-screen)**: Storyboard + Seedance prompt must contain literal substring `"LOCKED"` and one of the configured character names (`"윤서준"`, `"지아린"`, `"최이든"`, `"강도현"`, `"배소나"`, `"송유빈"`, `"이태율"`).
6. **M5 presence (Seedance only)**: Must contain literal substring `"Lens switch to"` exactly N times where N = sub-shot count.
7. **M4 presence**: Every prompt must contain literal substring `"NEGATIVE:"` and at least one HEX of the cut's phase palette.
