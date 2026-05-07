# E001 — Sample Outputs (CUT01 only)

> Worked example demonstrating the full template assembled for ONE cut.
> The Generator Engineer (Phase 2) implements code that produces this exact
> shape for each of the 14 cuts of E001 (and 14-16 cuts × 119 other episodes).
>
> Inputs assumed:
> - episodeId: `E001`
> - songLengthSec: `210` (3:30 — placeholder before final mp3 lock)
> - cutOverride: not set → N = ceil(210/15) = 14
> - phaseNumber: 1 (derived from E001 ∈ E001-E020)

---

## 1. Sample CutSpec (TypeScript-style)

```ts
const cut01: CutSpec = {
  cutNumber: 1,
  startSec: 0,
  endSec: 15,
  koreanTitle: "캠퍼스 와이드 / 닫힌 진입",
  englishTitle: "Campus Wide / Closed Entry",
  cutPersona: "닫힘 / Closure",
  charactersOnScreen: ["윤서준"],
  subShots: [
    {
      shotNumber: 1,
      startTimeOffset: 0.0,
      endTimeOffset: 5.0,
      startFrame: "혜담대 인문캠퍼스 중앙 길 wide 와이드. 늦봄 얇은 햇살, 학생들 small group 으로 걷는 풍경, 가벼운 blossom tree.",
      endFrame: "같은 와이드. 카메라가 미세하게 push-in 시작. 멀리 검정 hoodie 의 인영 하나가 frame 중앙 약간 좌측에 들어옴.",
      cameraMovement: "static wide opening, holding the campus context",
      shotType: "wide",
      actionDirection: "봄 캠퍼스의 평범한 정경. 사람들은 두셋 무리, 발걸음 정박. 한 인영 (서준) 이 frame 에 진입하기 직전.",
      dialogueLyrics: "—",
      sfx: "spring breeze, distant student chatter (slightly muffled), light footsteps on stone path, faint blossom sounds",
      music: "muted piano intro, soft noise texture (Suno 0:00-0:05)"
    },
    {
      shotNumber: 2,
      startTimeOffset: 5.0,
      endTimeOffset: 10.0,
      startFrame: "Slow push-in. 22세 한국 남대생 (윤서준) 의 상반신이 frame 중심에 들어옴. 짧고 헝클어진 검은 머리, 차콜 그레이 oversized hoodie, 흰 wired earphones cable 가 가슴 앞으로 떨어짐.",
      endFrame: "Push-in 도착. 서준의 medium-wide. 양손은 hoodie 주머니, 머리는 살짝 숙임, 시선은 정면 살짝 아래.",
      cameraMovement: "slow push-in from wide to medium-wide",
      shotType: "medium-wide",
      actionDirection: "서준이 캠퍼스 중앙 길을 혼자 걷는다. 주변 학생들 무리와 다른 리듬. 절대 미소 baseline 없음.",
      dialogueLyrics: "—",
      sfx: "footsteps continue, slight earphone audio leak (faint piano hint, almost inaudible)",
      music: "muted piano sustains, soft low ambience (Suno 0:05-0:10)"
    },
    {
      shotNumber: 3,
      startTimeOffset: 10.0,
      endTimeOffset: 15.0,
      startFrame: "Medium tracking from behind 서준. Hoodie 등판 + earphone cable 가 어깨에서 등으로 흐른 곳. 멀리 캠퍼스 건물 layered.",
      endFrame: "같은 트래킹. 한 무리의 학생들이 웃으며 frame 옆으로 지나감. 서준의 머리는 그 방향으로 조금도 돌아보지 않음. 어깨 위 햇살은 소프트, 얼굴 쪽은 muted slate 그늘.",
      cameraMovement: "medium tracking from behind, slow forward dolly",
      shotType: "medium tracking",
      actionDirection: "사람 무리의 웃음 소리에도 반응 없음. 닫힘 baseline 시각화. cable 이 발걸음에 따라 흔들림.",
      dialogueLyrics: "—",
      sfx: "group laughter passes (muffled), wind, fabric rustle, footsteps fade",
      music: "piano sustain begins to thin out, building toward CUT02 vocal entry (Suno 0:10-0:15)"
    }
  ],
  directorIntent:
    "E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. " +
    "사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. " +
    "이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, " +
    "다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다.",
  transitionToNext:
    "마지막 트래킹 프레임에서 카메라가 서준의 어깨 라인에 머무름 → 1초 hold → CUT02 의 손/이어폰 close-up 으로 컷. " +
    "음악적으로는 piano sustained note 가 thin out 하며 CUT02 첫 vocal line (귀를 막아도 들려와) 진입 직전까지 이어짐."
};
```

---

## 2. Sample storyboardSheetPrompt (paste-ready into GPT Image 2)

> Engineer note: this is the FULL string the user copies into GPT Image 2.
> Approximate length: 1900 characters. The user uploads `yoon_seojun_sheet_v1.png`
> as image reference alongside this paste.

```text
You are a professional Korean indie illustrated music-video storyboard designer.

Create a single landscape storyboard planning sheet image, aspect ratio 3:2,
approximately 1536×1024 pixels, with a dark surface background (#0F1014) and
crisp text in #E8E6E1. This is a planning document, not a panoramic artwork.

CUT01 (0:00-0:15)  |  「캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry」  |  닫힘 / Closure

‼ CRITICAL RENDERING — STORYBOARD TABLE, NOT PANORAMA ‼
Render EXACTLY 3 horizontal rows, each row = 1 sub-shot = 2 small thumbnails.
TOTAL 3 START thumbnails + 3 END thumbnails, each in its OWN cell.
DO NOT merge thumbnails into a single wide image.
DO NOT span thumbnails across rows.
DO NOT skip the grid lines. Show THIN GRID LINES (color #2A2D34) between all rows and columns.
This is a planning sheet, NOT a panoramic illustration. Do not stylize as a single artwork.
Aspect ratio 3:2, 1536×1024, dark surface #0F1014 with crisp white text.

VISUAL STYLE — MODERN KOREAN CINEMATIC ILLUSTRATION (Z-track, NOT live-action):
Modern Korean indie illustration aesthetic, fresh contemporary indie artbook
feel, refined illustrated character art for emotional music video.
Clean cel-shading with defined natural light and shadow, medium-weight clean
outlines, crisp digital finish.
NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro.
Restrained mood, Korean indie graphic-novel feel meets contemporary illustrated MV.

PHASE 1 PALETTE: pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — never substitute)
- skin tone with natural cool-toned shading
- expression baseline (per phase + per character lock)
- art style (modern Korean cinematic illustration, clean cel-shading)

Attached LOCKED sheets (paste these as image references in GPT Image 2):
- 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG

CHARACTER LOCK (verbatim, repeat in every prompt):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student
at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long).
Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always
visible (cable falling along chest). Pale Korean skin, withdrawn observant
guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

Character must look like the SAME ACTOR across every cut of this episode's MV.
Do NOT redraw the face; match the LOCKED sheet face design exactly.

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

3 SUB-SHOT ROWS — each in its own row

ROW 1 | Shot 01 | 0:00-0:05
  Start thumbnail: Wide of 혜담대 인문캠퍼스 중앙 길, late-spring thin sunlight, students in small groups under light blossom trees. Pale sky #E8F0F5 dominant.
  End thumbnail: Same wide, gentle push-in start. A charcoal-hoodie figure (서준) enters the frame slightly left of center.
  Camera: static wide opening, holding the campus context
  Action: 봄 캠퍼스 평범한 정경. 사람들 두셋 무리. 서준 frame 진입 직전.
  Lyrics: —
  SFX: spring breeze, distant chatter (muffled), footsteps, faint blossom
  Music: muted piano intro, soft noise texture (Suno 0:00-0:05)

ROW 2 | Shot 02 | 0:05-0:10
  Start thumbnail: Slow push-in. 윤서준 medium-wide enters frame. Short messy black hair, charcoal hoodie, white wired earphones cable down chest, hands in hoodie pocket.
  End thumbnail: Push-in arrives. 서준's medium-wide locked, head slightly down, gaze just below horizon, never smiling.
  Camera: slow push-in from wide to medium-wide
  Action: 서준이 혼자 캠퍼스를 가로지름. 주변 무리와 다른 리듬.
  Lyrics: —
  SFX: footsteps, faint earphone audio leak (almost inaudible piano hint)
  Music: muted piano sustains, soft low ambience (Suno 0:05-0:10)

ROW 3 | Shot 03 | 0:10-0:15
  Start thumbnail: Medium tracking from behind 서준. Hoodie back + earphone cable from shoulder to back. Campus building layered in background.
  End thumbnail: Tracking continues. A laughing student group passes by frame edge — 서준's head does NOT turn. Soft sun on shoulder, face still in muted slate shade.
  Camera: medium tracking from behind, slow forward dolly
  Action: 무리의 웃음에도 반응 없음. 닫힘 baseline 시각화. cable 이 발걸음에 따라 흔들림.
  Lyrics: —
  SFX: group laughter passes (muffled), wind, fabric rustle, fading footsteps
  Music: piano sustain thinning, building toward CUT02 vocal entry (Suno 0:10-0:15)

CUT01 DIRECTOR'S INTENT:
E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. 사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. 이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, 다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다.

TRANSITION → CUT02:
마지막 트래킹 프레임에서 카메라가 서준의 어깨 라인에 머무름 → 1초 hold → CUT02 의 손/이어폰 close-up 으로 컷. 음악적으로는 piano sustained note 가 thin out 하며 CUT02 첫 vocal line (귀를 막아도 들려와) 진입 직전까지 이어짐.

OUTPUT RULES:
- All text Korean primary + English in parentheses; NO Japanese characters, NO Chinese characters.
- All thumbnails use the LOCKED character reference attached (when character is on-screen).
- Modern Korean cinematic illustration, clean cel-shading, medium-weight outlines, crisp digital finish.
- Phase 1 muted palette throughout — see VISUAL STYLE block.
- No watermarks, no logos, no signature marks, no artist tags.
- No moe-childish, no chibi proportions, no idol-fanart, no anime smile baseline.
- No retro halftone, no print-noise grain, no muddy tones, no over-saturation.
- No fantasy creature, no magical particles (unless Phase 5-6 symbolic insert).
- Output: single flat 3:2 storyboard sheet image, 1536×1024, dark surface #0F1014.

OUTPUT CHECKLIST (must satisfy ALL):
✓ 3 distinct horizontal rows with grid lines
✓ 3 + 3 separate thumbnails (3 start + 3 end), each in its own cell
✓ NOT a panoramic merged image
✓ Korean + English text only (no Japanese, no Chinese)
✓ All character thumbnails identical to attached LOCKED sheet (윤서준)
✓ Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)
✓ Phase 1 palette (#E8F0F5 / #7A9CB0) consistent across all thumbnails
✓ 윤서준의 wired white earphones must be visible in every shot featuring him.
✓ Header reads: "CUT01 (0:00-0:15)  |  「캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry」  |  닫힘 / Closure"
✓ Footer LEFT = director's intent, RIGHT = transition spec
✓ No watermarks, no logos, no Japanese characters, no Chinese characters
```

---

## 3. Sample seedancePrompt (paste-ready into Seedance 2.0)

> Engineer note: this is the FULL string the user copies into Seedance 2.0.
> Approximate length: 1500 characters. The user uploads `yoon_seojun_sheet_v1.png`
> as the character reference image AND `e001_cut01_main_still.png` (from §4 below)
> as the first-frame reference.

```text
CUT01 (0:00-0:15) — 15-second modern Korean cinematic illustration multi-shot sequence (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart)

STYLE: Clean cel-shading, medium-weight outlines, crisp digital finish, illustrated like the attached LOCKED character reference sheet. Modern Korean indie graphic-novel feel.

COLORS (Phase 1 palette): pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in:
- face design (eye shape, nose, jaw, lip thickness, cheekbone)
- hair (length, style, color, texture)
- outfit (signature pieces — never substitute)
- skin tone with natural cool-toned shading
- expression baseline (Phase 1 윤서준 = withdrawn observant, NEVER smile)
- art style (modern Korean cinematic illustration, clean cel-shading)

Attached LOCKED sheets:
- 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG

CHARACTER LOCK (verbatim):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long). Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always visible (cable falling along chest). Pale Korean skin, withdrawn observant guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

────────────────── MULTI-SHOT TIMELINE (M5) ──────────────────

[0.0-5.0] Lens switch to static wide opening, wide. Spring campus central path of 혜담대, students moving in small groups under light blossom trees, late-spring thin sunlight, long shadows. A charcoal-hoodie figure begins to enter the frame slightly left of center near the end. Pale sky #E8F0F5 dominant, soft slate #7A9CB0 in shadows.

[5.0-10.0] Lens switch to slow push-in from wide to medium-wide, medium-wide. 윤서준 emerges into focus walking alone along the path, hands in hoodie pocket, head slightly down. Wired white earphones cable visible falling along chest, swaying slightly with steps. Pale spring light on shoulder, face stays in muted slate shade. Modern Korean cinematic illustration, clean cel-shading.

[10.0-15.0] Lens switch to medium tracking from behind, slow forward dolly, medium tracking. He walks past a group laughing — does not turn his head. Earphone cable continues to sway with each step. Pale sun light on shoulder, face still in muted slate shade. Soft slate #7A9CB0 dominant in his face zone, warm cream #F5E1D0 highlights only on the passing group's edges.

AUDIO: SFX ONLY. Include: spring breeze, distant student chatter and laughter (slightly muffled), footsteps on stone path, faint blossom petal sounds, very faint earphone audio leak (almost inaudible piano hint), passing group laughter (muffled), fabric rustle, birds in distance.
NO music, NO BGM, NO melody, NO singing, NO dialogue, NO narration.
NO instrumental track of any kind. NO score, NO ambient music bed.
Music for the final MV is generated separately by Suno (track-level) and added in CapCut post-production.
Seedance MUST output a silent video with only the SFX listed above.

NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no music, no BGM, no instruments in the file, no singing, no dialogue, no narration;
no photorealistic, no 3D render, no live-action, no CGI, no rendered photography;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom, no flame VFX (unless Phase-canon symbolic insert);
no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant;
no Japanese characters, no Chinese characters (Korean and English only).

OUTPUT: 15-second silent illustrated video with SFX only.
No music, no speech, no BGM. Aspect ratio 16:9. 24fps.
```

---

## 4. Sample mainStillPrompt (paste-ready into GPT Image 2 — first-frame still)

> Engineer note: this is the FULL string the user copies into GPT Image 2 to
> generate the 16:9 1920×1080 first-frame still that anchors CUT01's look.
> The user uploads `yoon_seojun_sheet_v1.png` as character reference.
> Output PNG is then uploaded into Seedance 2.0 as the first-frame reference.

```text
CUT01 MAIN STILL — first-frame reference for Seedance 2.0
캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry  ·  닫힘 / Closure

Aspect ratio 16:9 (1920×1080). Modern Korean cinematic illustration (Z-track, NOT live-action, NOT moe anime, NOT idol-fanart). Clean cel-shading, medium-weight outlines, crisp digital finish.

VISUAL STYLE (shorthand): Modern Korean indie illustration aesthetic, fresh contemporary indie artbook feel, refined illustrated character art for emotional music video. Clean cel-shading with defined natural light and shadow, medium-weight clean outlines, crisp digital finish. NOT photorealistic, NOT 3D render, NOT moe-childish, NOT idol-fanart, NOT retro. Restrained mood.

COMPOSITION:
Wide cinematic view of 혜담대 인문캠퍼스 중앙 길 in late spring. Students walking in small groups under light blossom trees. Thin sunlight from upper-left, long shadows on stone path. Pale sky #E8F0F5 fills the upper 40% of frame. Mid-ground: stone path with scattered cherry petals. Foreground left: a 22-year-old Korean male student (윤서준) just entering the frame from left, walking alone, charcoal-gray oversized hoodie, wired white earphones cable falling along his chest, hands in hoodie pocket, head slightly down. He is about 1/4 the frame height, positioned at left third. He is OUT OF SYNC with the laughing student groups in mid-ground — separate rhythm.

CAMERA: static wide opening, holding the campus context (this still is the WIDE establishing shot — frame-1 reference for the cut)
LIGHTING: Phase 1 late-spring thin sunlight, key light from upper-left at low angle, soft warm cream #F5E1D0 highlights on shoulders and tree edges, soft slate #7A9CB0 in cast shadows, no harsh contrast.
PALETTE (Phase 1): pale sky #E8F0F5 (50% — sky, classroom outer light), warm cream #F5E1D0 (15% — sun highlight, cafeteria wall, lamp glow), soft slate #7A9CB0 (25% — shadow, glass reflection, closed-air visualization), charcoal #2C2E33 (10% — hoodie, deep outline, grid line). Muted, restrained, late-spring melancholy. Saturation cap 60%.

CHARACTER REFERENCE (M2 — LOCKED sheet attach, mandatory):
Match the attached LOCKED character reference sheet EXACTLY in face, hair, outfit, expression baseline.

Attached LOCKED sheets:
- 윤서준 (Yoon Seojun) — `ops/character_sheets/yoon_seojun_sheet_v1.md` 산출 PNG

CHARACTER LOCK (verbatim):
윤서준 (Yoon Seojun): 22-year-old Korean male, business administration student at 혜담대. Short messy black hair (NOT idol-styled, NOT bald, NOT long). Charcoal-gray oversized hoodie (signature). WIRED WHITE EARPHONES always visible (cable falling along chest). Pale Korean skin, withdrawn observant guarded expression baseline, NEVER smile (Phase 1 = pre-Arin isolation).

NEGATIVE: no text overlays, no subtitles, no letters, no watermark, no logo, no signature mark;
no photorealistic, no 3D render, no live-action, no CGI;
no moe anime, no chibi proportions, no idol-fanart, no anime smile baseline;
no Pixiv top-1 gloss, no Japanese light-novel cover style, no Western fashion editorial;
no retro halftone, no print-noise grain, no muddy tones, no over-saturation;
no fantasy creature, no magical particle bloom;
no smile baseline (E001-E020 윤서준 lock); no romantic uplift; no chorus blossom celebration overflow; no warm coral or vivid red dominant;
no Japanese characters, no Chinese characters (Korean and English only).

OUTPUT: single 16:9 illustrated still, 1920×1080, suitable as first-frame reference for Seedance 2.0.
```

---

## 5. Audit notes for this sample

The Generator must produce, for CUT01:
- Sub-shot timing sum: 5.0 + 5.0 + 5.0 = 15.0 ✓
- M2 (LOCKED attach): present in storyboard sheet + Seedance + main still ✓
- M3 (AUDIO: SFX ONLY): present in Seedance only (correct — main still + sheet are static) ✓
- M4 (HEX + NEGATIVE): all 4 Phase 1 HEX values appear; NEGATIVE block present everywhere ✓
- M5 (Lens switch): exactly 3 occurrences in Seedance prompt (matches sub_shot count) ✓
- charactersOnScreen: ["윤서준"] — single LOCKED sheet attached ✓
- No Japanese characters ✓
- No leaky `{{...}}` placeholders ✓

**All 14 cuts of E001** must satisfy these audits. The Generator's audit step
(STORYBOARD_TEMPLATE.md §1.8.2 step 10) enforces this.
