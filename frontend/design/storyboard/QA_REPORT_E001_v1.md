# QA Report — TROY Storyboard Generator · E001 · v1

> QA role: Prompt QA (Senior)
> Date: 2026-05-07
> Generator version: Phase 2 ship (assemble.ts + subdivide.ts + parse-cut-list.ts)
> Source data: `GET /api/storyboard/E001?songLengthSec=210` → 228 KB JSON (confirmed working on first call)
> Server state: stable for initial E001?songLengthSec=210 call; all subsequent variant calls returned HTTP 500 (Jest worker crash — see Section 3, CRITICAL-04)

---

## Section 1 — Pass / Fail Summary Matrix

| Test | E001 | E047 |
|---|---|---|
| 14 cuts generated | PASS (14 cuts confirmed) | FAIL — server crash (HTTP 500) |
| CUT01 byte-match | PASS (exact match confirmed section-by-section) | N/A |
| M2 attach 14/14 | PASS (14/14 LOCKED present in sheets + seedance) | FAIL — server crash |
| M2 atmospheric substitution | PASS (CUT03, CUT04 emit "(Atmospheric cut, no character on-screen.)") | N/A |
| M3 SFX-only 14/14 | PASS (14/14 seedance prompts contain "AUDIO: SFX ONLY") | FAIL — server crash |
| M4 HEX 14/14 (all 4 Phase 1 HEX) | PASS (all 4 HEX present in all 42 prompts) | FAIL — server crash |
| M4 NEGATIVE in sheets 14/14 | FAIL — "NEGATIVE:" literal absent from all 14 storyboard sheets (OUTPUT RULES used instead; internal audit incorrectly reports pass) | FAIL — server crash |
| M4 NEGATIVE in seedance/stills | PASS (14/14 each) | FAIL — server crash |
| M5 lens-switch count == subShot count | PASS (all 14 match) | FAIL — server crash |
| M5 subShot count rule per spec §1.5.5 | FAIL — CUT08 and CUT09 (persona "한 줌 따뜻함") have 3 subshots; spec requires 4. CUT07 (persona "심해") has 4; spec requires 3. CUT13 (persona "고독") has 4; spec requires 3. | N/A |
| Anti-panorama block present | PASS (14/14 contain "CRITICAL RENDERING") | FAIL — server crash |
| Anti-panorama rowCount correct | PASS (rowCount matches subShot count in all 14) | FAIL — server crash |
| No forbidden cultural markers (hanfu/qipao/kimono/dancheong) | PASS (zero hits in all 42 prompts) | FAIL — server crash |
| No leaky {{...}} placeholders | PASS (zero hits) | FAIL — server crash |
| Phase 1 palette correct for E001 | PASS | N/A |
| Phase 3 palette for E047 | FAIL — server crash; code inspection confirms Phase 3 HEX (#FFD580 etc.) would be applied if server recovered, but this cannot be verified | FAIL |
| Edge case songLengthSec=180 → 14 cuts | FAIL — HTTP 500 (server crash) | N/A |
| Edge case songLengthSec=240 → 16 cuts | FAIL — HTTP 500 (server crash) | N/A |
| Edge case songLengthSec=400 → 16 cuts | FAIL — HTTP 500 (server crash) | N/A |
| BOGUS episode → 400 error | FAIL — HTTP 500 instead of 400 | N/A |
| /episode/E001/storyboard page renders without error | PASS (HTTP 200, no "Application error" marker; 14 CutCards rendered) | FAIL — server crash |
| 3 copy buttons per card | PASS (3 CopyPromptButton per CutCard confirmed in source) | N/A |
| Export all button present | PASS (ExportAllButton in StoryboardClient.tsx) | N/A |
| Audit summary visible on page | PARTIAL — audit shows "audit pass / audit N warn" badge, NOT the "M2: 14/14, M3: 14/14" format specified. No per-M-rule breakdown in the UI. | N/A |

---

## Section 2 — Cut-by-Cut Quality Scores (E001, Cuts 2–14)

CUT01 (hand-curated) is baseline = 5/5 on all dimensions.

| Cut | 1. Coherence | 2. Sub-shot Variety | 3. Text Specificity | 4. TROY Tone | 5. KO/EN Mix | Avg |
|-----|------------|-------------------|-------------------|-------------|------------|-----|
| CUT02 | 3 | 2 | 2 | 3 | 4 | **2.8** |
| CUT03 | 2 | 1 | 2 | 3 | 4 | **2.4** |
| CUT04 | 2 | 1 | 2 | 3 | 4 | **2.4** |
| CUT05 | 3 | 1 | 2 | 2 | 4 | **2.4** |
| CUT06 | 3 | 1 | 2 | 2 | 4 | **2.4** |
| CUT07 | 3 | 1 | 2 | 3 | 4 | **2.6** |
| CUT08 | 3 | 1 | 2 | 2 | 4 | **2.4** |
| CUT09 | 3 | 1 | 2 | 2 | 4 | **2.4** |
| CUT10 | 3 | 2 | 2 | 3 | 4 | **2.8** |
| CUT11 | 3 | 2 | 2 | 3 | 4 | **2.8** |
| CUT12 | 3 | 1 | 2 | 3 | 4 | **2.6** |
| CUT13 | 3 | 1 | 2 | 3 | 4 | **2.6** |
| CUT14 | 2 | 2 | 2 | 2 | 4 | **2.4** |

**Overall average (CUT02-14): 2.54 / 5.0**

CUT01 assumed bar: 5.0 / 5.0

**Gap from bar: -2.46 points**. This is expected given heuristic generation; the honest target for Phase 2 heuristic output was 3–4. The generator lands below even this honest target. The Korean/English mix (dimension 5) consistently scores 4 across all cuts because the boilerplate and per-cut Korean fields are structurally correct. The collapse is in sub-shot variety (near-universal 1–2) and text specificity (universal 2).

### Dimension notes

**1. Coherence**: CUT03 and CUT04 score 2 because they render "Wide establishing of 이어폰 클로즈업" — incoherent framing for a close-up cut. CUT14 scores 2 because the action text "다음 화의 예외를 기다리게 만드는 엔딩" is a meta-description, not a director's visual direction.

**2. Sub-shot variety**: 10 of 13 cuts receive a score of 1 (near-duplicate). The `makeAction()` function in `subdivide.ts` emits the same `baseAction` string for all 3 shots, differing only by appending "다음 컷으로 전이." on the closer. The `makeCamera()` function produces: opener = "static wide opening, [motionIntent]", mid = "[motionIntent]", closer = "slow forward dolly, [motionIntent]". This is structurally identical across all cuts sharing the same motionIntent.

**3. Text specificity**: All non-CUT01 cuts receive 2. The music field uses the template "muted intro, soft texture (Suno cut NN 0.0-5.0)" — compared to CUT01's "muted piano intro, soft noise texture (Suno 0:00-0:05)". The SFX field for most cuts defaults to "spring breeze, distant chatter (muffled), footsteps" regardless of the cut's interior/exterior location. CUT07 (창가와 유리 반사, classroom window) correctly uses "classroom murmur, paper rustle, distant bell" but its start-frame still says "Wide establishing" which contradicts the close profile shot.

**4. TROY-fit emotional tone**: Cuts with the 이든 cafeteria scene (CUT08, CUT09) score 2 because the action text repeats the cut's purpose verbatim ("이든과의 최소한의 연결") without any visual specificity that distinguishes the warmth contrast from pure description. CUT14 scores 2 because the "endure/wait" emotional register is absent from any of the shot descriptions.

**5. Korean/English mix**: All cuts score 4. The Korean action lines are grammatically correct and appropriately brief. The English camera/SFX/music fields are syntactically clean. One minor issue: the `startFrame` and `endFrame` fields in generated cuts mix Korean title fragments with English beat labels ("Wide establishing of 이어폰 클로즈업") which reads as awkward hybrid prose, but not broken.

---

## Section 3 — Specific Issues Found

### CRITICAL

**CRITICAL-01 — M4 NEGATIVE block absent from all 14 storyboard sheet prompts**

- Scope: Generator algorithm (`lib/storyboard/assemble.ts`, function `assembleSheetPrompt`)
- Location: storyboardSheetPrompts[0] through [13]
- Spec citation: `PROMPT_BOILERPLATES.md §BOILERPLATE_NEGATIVE_PROMPT`: "Bottom of every Seedance 2.0 prompt AND every storyboard sheet prompt's no-go list AND every main still prompt's no-go list."
- Observed: Sheets contain only `OUTPUT RULES` (which lists "No moe-childish…" as bullet points) but NO `NEGATIVE:` keyword block. The `BOILERPLATE_NEGATIVE_PROMPT` is never called in `assembleSheetPrompt`.
- Internal audit false positive: `assemble.ts` line 222 checks `sheet.includes('NEGATIVE') || sheet.includes('No watermarks')`, so `negativePass=true` is reported even though the actual NEGATIVE: block is absent. The condition should be AND, not OR, or the sheet must include the NEGATIVE: keyword.
- Suggested fix: In `assembleSheetPrompt`, add `negativePromptBlock({ phase, variant: 'sheet' })` to the `sections` array, between `outputRules` and `finalOutputChecklist`. Also correct the audit condition to `sheet.includes('NEGATIVE:')` without the fallback.
- Fix scope: Generator algorithm (template assembly).
- Severity: CRITICAL — GPT Image 2 will not have the explicit negative list for all 14 sheet prompts.

**CRITICAL-02 — Server instability: all variant requests return HTTP 500 (Jest worker crash)**

- Scope: Next.js dev server runtime; affects all routes except the initial E001?songLengthSec=210 call.
- Observed: After the first successful call, all subsequent requests including E001?songLengthSec=180, E001?songLengthSec=240, E001?songLengthSec=400, E047 (no params), BOGUS, and re-requests of E001?songLengthSec=210 all return HTTP 500 with error "Jest worker encountered 2 child process exceptions, exceeding retry limit".
- Root cause: Not determined from static analysis. Possible causes: (a) Turbopack hot-reloading cache invalidation triggered by fs.readFile in route handler, (b) Jest worker pool size exhausted by concurrent file system reads, (c) Windows path resolution issues in `safeJoin` when episodeId resolution fails.
- Impact: Makes Test 5 (E047), Test 6 (edge cases), and Test 7 (page reload) impossible to verify after the first successful call.
- Suggested fix: Investigate `lib/paths.ts safeJoin` for Windows compatibility; add try/catch around file reads in parseCutList that logs the specific file path on failure; restart dev server in a clean state and reproduce with a minimal reproduction. Do not ship to staging until HTTP 500 rate is zero.
- Fix scope: Infrastructure / server runtime.
- Severity: CRITICAL — blocks production use of the generator for all non-E001-default requests.

**CRITICAL-03 — BOGUS episode returns HTTP 500 instead of 400**

- Scope: `app/api/storyboard/[episode]/route.ts`
- Observed: `GET /api/storyboard/BOGUS` returns HTTP 500 (server crash). Spec says 400 should be returned.
- Code inspection shows `isValidEpisode('BOGUS')` correctly returns `false` (BOGUS doesn't match `/^E\d{3}$/`), and the route would emit `return jsonResponse(apiError('bad_request', ...), 400)`. The 500 is caused by the Jest worker crash that precedes routing, not a logic bug.
- Fix scope: Contingent on CRITICAL-02 fix. Once Jest worker is stable, BOGUS should auto-return 400.
- Severity: CRITICAL — dependent on CRITICAL-02.

**CRITICAL-04 — Clamp range bug: spec says 14–16, code uses 8–20**

- Scope: `lib/storyboard/subdivide.ts`, line 124: `const N = clamp(cutOverride ?? Math.ceil(songLengthSec / 15), 8, 20)`
- Spec citation: `STORYBOARD_TEMPLATE.md §1.5.2`: "N = cutOverride ?? clamp(N_default, 14, 16)". Edge-case: "songLengthSec < 180 (3:00 미만) → allow N as low as 8; songLengthSec > 270 (4:30 초과) → allow N up to 20."
- Observed effect:
  - songLengthSec=180 → spec expects 14 (clamp lower), generator produces 12 (8≤12≤20, no lower clamp to 14).
  - songLengthSec=400 → spec expects 16 (clamp upper at 4:30 edge), generator would produce 20 (ceil(400/15)=27, clamped to 20). This is above the 16 upper clamp for standard songs.
- Note: The server crash (CRITICAL-02) prevented runtime confirmation of songLengthSec=180/400 cut counts. Code inspection confirms the bug.
- Suggested fix: Change to `clamp(N_default, 14, 16)` as the primary path. Add special-case logic: `if (songLengthSec < 180) N = Math.max(N, 8); if (songLengthSec > 270) N = Math.min(N, 20)`.
- Fix scope: Generator algorithm.
- Severity: CRITICAL — incorrect cut counts for non-standard song lengths.

---

### MAJOR

**MAJOR-01 — Sub-shot count rule violation: CUT08/CUT09 have 3 subshots instead of 4**

- Scope: `lib/storyboard/subdivide.ts`, line 141: `const isWeighted = cutNumber === 1 || cutNumber === Math.ceil(N / 2) || cutNumber === N - 1`
- Spec citation: `STORYBOARD_TEMPLATE.md §1.5.5`: "sub_shot_count = 4 if (cut_persona contains 'chorus' OR 'drop' OR 'transition' OR '진입' OR '한 줌')".
- Observed: CUT08 persona = "한 줌 따뜻함 / A Warm Pinch" — contains '한 줌' — should have 4 subshots. Actual: 3.
- Also: CUT07 (persona "심해 / Submersion") has 4 subshots because it happens to be `ceil(14/2)=7`, not because its persona requires 4. CUT13 (persona "고독") has 4 subshots for the same spurious positional reason.
- Suggested fix: Replace the position-based `isWeighted` check with persona-based: `const FOUR_SHOT_TRIGGERS = ['chorus', 'drop', 'transition', '진입', '한 줌']; const isWeighted = FOUR_SHOT_TRIGGERS.some(t => cutPersona.includes(t));`
- Fix scope: Generator algorithm (subdivide).
- Severity: MAJOR — wrong subshot count breaks spec §1.5.5 for cafeteria/chorus cuts.

**MAJOR-02 — All sub-shots across cuts 2–14 have near-identical action, camera, and frame descriptions**

- Scope: `lib/storyboard/subdivide.ts`, functions `makeAction`, `makeCamera`, `makeStartFrame`, `makeEndFrame`
- Observed: For CUT03 (이어폰 클로즈업):
  - Shot 1 action: "이어폰을 차단 장치로 각인"
  - Shot 2 action: "이어폰을 차단 장치로 각인"
  - Shot 3 action: "이어폰을 차단 장치로 각인 다음 컷으로 전이."
  - Shot 1 camera: "static wide opening, static with subtle hand movement"
  - Shot 2 camera: "static with subtle hand movement"
  - Shot 3 camera: "slow forward dolly, static with subtle hand movement"
  - All three startFrame: prefix-variant of "이어폰 클로즈업. 이어폰을 차단 장치로 각인"
- CUT01 bar: Shot 1 action = "봄 캠퍼스 평범한 정경. 사람들 두셋 무리. 서준 frame 진입 직전." / Shot 2 = "서준이 혼자 캠퍼스를 가로지름. 주변 무리와 다른 리듬." / Shot 3 = "무리의 웃음에도 반응 없음. 닫힘 baseline 시각화. cable 이 발걸음에 따라 흔들림." — three distinct moments, each advancing the visual narrative.
- Suggested fix: The generator needs per-sub-shot content templates that derive distinct opening / mid / closing visual moments from the source cut's purpose and shot type. Minimum viable: maintain three distinct action slots (intro_action, peak_action, transition_action) in the per-source-cut data, each pulling from a different textual register (context-set / character-moment / transition-cue).
- Fix scope: Generator algorithm (content generation depth).
- Severity: MAJOR — the generated prompts for cuts 2–14 will produce near-identical visuals within each 15-second clip.

**MAJOR-03 — Visual cut doubling produces duplicate content pairs (CUT03=CUT04, CUT05=CUT06, etc.)**

- Scope: `lib/storyboard/subdivide.ts`, line 134: `sourceIndex = Math.min(Math.floor((i * sourceCount) / N), sourceCount - 1)`
- Observed: With 8 source cuts and N=14, the interpolation formula maps:
  - i=0 → source 0 (캠퍼스 와이드) — CUT01 hand-curated
  - i=1 → source 0 (캠퍼스 와이드) — CUT02 = repeat
  - i=2 → source 1 (이어폰) — CUT03
  - i=3 → source 1 (이어폰) — CUT04 = repeat
  - i=4,5 → source 2 (강의실) — CUT05, CUT06 = repeat
  - etc.
- Result: 6 of 13 generated cuts are content-identical pairs; CUT02 is a repeat of CUT01's source visual cut.
- Impact: The visual cut doubling approach will produce pairs of near-identical Seedance clips.
- Suggested fix: When a source cut is mapped twice, the second occurrence should be a "deep cut" variant — focusing on a different sub-element of the same scene (e.g. 강의실 CUT05 = wide back row, CUT06 = window close-up within the same classroom). This requires adding "secondary focus" content to the visual cut source data.
- Fix scope: Generator algorithm (source mapping strategy) and possibly source data enrichment.
- Severity: MAJOR — 6 of 13 heuristic cuts will be near-identical to their pair.

**MAJOR-04 — CUT01 header format includes duplicate Korean title (spec violation)**

- Scope: `lib/storyboard/assemble.ts`, E001_CUT01_SHEET constant, line 506.
- Observed: Header reads `「캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry」` — this includes both the Korean title (캠퍼스 와이드 / 닫힌 진입) AND the English title separated by slash.
- Spec format (`STORYBOARD_TEMPLATE.md §1.2.2`): `CUT{NN} ({mm:ss}-{mm:ss})  |  「{한국어 제목} / {English Title}」  |  {Cut Persona}`
- The spec intends ONE Korean title + ONE English title separated by " / ". The CUT01 sample has "캠퍼스 와이드 / 닫힌 진입 / Campus Wide / Closed Entry" which is ambiguous — it could be read as two Korean words + two English words. The generated cuts 2–14 correctly produce "캠퍼스 중앙 길 와이드 / Campus Wide / Closed Entry" (Korean / English), which is the spec-compliant pattern.
- Note: The CUT01 hand-curated string in `E001_SAMPLE_OUTPUTS.md` uses the same ambiguous format. This may be intentional (dual-language persona phrase). Flag for clarification.
- Fix scope: Spec clarification needed from Template Designer; if confirmed as error, fix E001_CUT01_SHEET and E001_SAMPLE_OUTPUTS.md.
- Severity: MAJOR (spec ambiguity / documentation inconsistency).

**MAJOR-05 — Start/end frame descriptions for close-up cuts label themselves as "Wide establishing"**

- Scope: `lib/storyboard/subdivide.ts`, `makeStartFrame` function, line 323.
- Observed: For CUT03 (이어폰 클로즈업, shot type "insert close-up"), Shot 1 startFrame = "Wide establishing of 이어폰 클로즈업. 이어폰을 차단 장치로 각인". Close-ups cannot be "Wide establishing" shots.
- The `makeStartFrame` function unconditionally uses "Wide establishing of " as the opener prefix regardless of the cut's shot type. For wide/medium cuts this is acceptable; for close-ups and interior cuts it is incoherent.
- Suggested fix: In `makeStartFrame`, check `source.shotType`:
  - If shotType contains 'close' or 'insert' → use "Close-up: " prefix
  - If shotType contains 'profile' → use "Profile shot: "
  - If shotType contains 'interior' or 'medium' → use "Interior: "
  - Otherwise → "Wide establishing of "
- Fix scope: Generator algorithm (content generation).
- Severity: MAJOR — incoherent descriptions will confuse GPT Image 2 into generating the wrong framing.

**MAJOR-06 — Director intent is a template concatenation, not a cut-specific narrative**

- Scope: `lib/storyboard/subdivide.ts`, `deriveDirectorIntent` function, lines 376–388.
- Observed for CUT02: "봄 캠퍼스와 서준의 고립을 동시에 소개 닫힘 / Closure 베이스라인을 한 컷 안에 각인. Visual thesis: 세상은 봄인데, 서준에게만 아직 공기가 회색이고 잠겨 있다."
- CUT01 bar (hand-curated): "E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. 사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. 이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, 다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다." — three sentences, specific camera technique, specific motif link, specific next-cut bridge.
- The heuristic intent is 1.5 sentences of generic template; the spec requires 2–3 sentences with "컷 존재 이유 + 본편 캐논 응축 포인트" (§1.2.5).
- Fix scope: Generator algorithm (content depth). Requires richer input data or LLM-assisted generation.
- Severity: MAJOR — the director's intent field is the key artifact for CapCut-stage QA; generic text defeats this purpose.

**MAJOR-07 — E047 format 2 parser would succeed, but server crash prevents runtime verification**

- Scope: Runtime (CRITICAL-02 dependency).
- Code inspection confirms `parseCutsFormat2` correctly parses E047's "## Cut List" numbered format into 9 cuts. The `phaseOf` function in `lib/paths.ts` would correctly assign Phase 3 (E036–E060) to E047. Phase 3 HEX (#FFD580, #C8553D, #5A8DAE, #3A3530) would be applied via `PHASE_PALETTES[3]` in `boilerplates.ts`.
- Verification blocked by CRITICAL-02.
- Severity: MAJOR (deferred — contingent on CRITICAL-02 fix).

---

### MINOR

**MINOR-01 — Audit summary UI does not show per-M-rule breakdown**

- Scope: `app/episode/[id]/storyboard/page.tsx`
- Observed: The page shows only "audit pass" (green badge) or "audit N warn" (yellow badge). Spec implied "M2: 14/14, M3: 14/14" format audit summary at the top. The per-cut audit data is available in `out.audit.perCut` but not surfaced in the UI.
- Suggested fix: Add a summary row below the main badge: "M2: {m2pass}/14 | M3: {m3pass}/14 | M4HEX: {hexPass}/14 | M5: {m5pass}/14".
- Fix scope: UI component.
- Severity: MINOR — the underlying audit logic is correct; this is a display omission.

**MINOR-02 — Transition text for non-final cuts is identical boilerplate**

- Scope: `lib/storyboard/subdivide.ts`, `deriveTransition`, lines 391–396.
- Observed: All non-final cuts: "[korean title] 의 정서 마감 → 1초 hold → CUT{N+1} 진입. 청각 다리: 현재 컷 SFX 의 잔향이 다음 컷 첫 비트까지 이어짐."
- Spec requires "1-2 문장, 시각/청각 다리" specific to the cut's content.
- Fix scope: Generator algorithm (content depth). Lower priority than MAJOR-06.
- Severity: MINOR.

**MINOR-03 — SFX for non-dorm/cafeteria/window cuts defaults to spring campus regardless of cut location**

- Scope: `lib/storyboard/subdivide.ts`, `makeSfx` function, lines 345–357.
- Observed: CUT02 (캠퍼스 wide), CUT10 (커플 회피 — campus path), CUT11 (커플 회피) all use "spring breeze, distant chatter (muffled), footsteps". CUT12 (밤의 기숙사 방) correctly uses "room tone, distant traffic, fabric rustle". CUT14 (천장을 보는 마지막 샷, which is also 기숙사) uses the campus SFX because "기숙사" is not in its koreanTitle (which is "천장을 보는 마지막 샷").
- Fix scope: Generator algorithm. Add a night/ceiling case to makeSfx.
- Severity: MINOR — SFX mismatch for one cut.

**MINOR-04 — Music field uses colon-separated cut number format inconsistent with CUT01**

- Scope: `lib/storyboard/subdivide.ts`, `makeMusic` function.
- Observed cuts 2–14: "muted intro, soft texture (Suno cut 02 0.0-5.0)" — uses decimal seconds.
- CUT01 bar: "muted piano intro, soft noise texture (Suno 0:00-0:05)" — uses mm:ss and is more specific ("muted piano intro, soft noise texture" vs "muted intro, soft texture").
- Fix scope: Generator algorithm — use mm:ss in music field and add instrument specificity.
- Severity: MINOR.

---

## Section 4 — Phase 4 Priority List

| Priority | Title | Estimated Effort | Impact |
|----------|-------|----------------|--------|
| 1 | Fix server crash (Jest worker instability) — without this, none of the other fixes can be tested | L | L |
| 2 | Add NEGATIVE: block to storyboard sheet prompts in `assembleSheetPrompt` + fix internal audit false-positive | S | L |
| 3 | Fix sub-shot content variety — per-beat distinct action/camera/frame descriptions in `generateSubShots` | M | M |
| 4 | Fix clamp range bug (14–16 standard; 8/20 edge cases) in `subdivideEpisode` | S | M |
| 5 | Fix sub-shot count rule — replace position-based `isWeighted` with persona-keyword-based trigger | S | M |

Rationale for ordering:
- Priority 1 must precede all others to allow runtime QA of any fix.
- Priority 2 is a one-line addition with large prompt quality impact (GPT Image 2 needs the NEGATIVE: block to be reliable).
- Priority 3 is the most impactful quality improvement but requires content design work.
- Priority 4 and 5 are small algorithmic fixes that close spec compliance gaps.

---

## Section 5 — Sample Side-by-Side

**Lowest scoring cut: CUT03 (avg 2.4/5)** — selected because it demonstrates the widest gap from the CUT01 bar across all dimensions.

### Generator output (CUT03, verbatim excerpt from storyboardSheetPrompt)

```
ROW 1 | Shot 01 | 0:30-0:35
  Start thumbnail: Wide establishing of 이어폰 클로즈업. 이어폰을 차단 장치로 각인
  End thumbnail: Subtle push begins. 이어폰 클로즈업
  Camera: static wide opening, static with subtle hand movement
  Action: 이어폰을 차단 장치로 각인
  Lyrics: —
  SFX: spring breeze, distant chatter (muffled), footsteps
  Music: muted intro, soft texture (Suno cut 03 0.0-5.0)

ROW 2 | Shot 02 | 0:35-0:40
  Start thumbnail: Mid-beat: 이어폰 클로즈업. 이어폰을 차단 장치로 각인
  End thumbnail: Beat lands; small motion. 이어폰 클로즈업
  Camera: static with subtle hand movement
  Action: 이어폰을 차단 장치로 각인
  SFX: spring breeze, distant chatter (muffled), footsteps
  Music: mid-beat sustain, ambience (Suno cut 03 5.0-10.0)

CUT03 DIRECTOR'S INTENT:
이어폰을 차단 장치로 각인 차단 / Insulation 베이스라인을 한 컷 안에 각인. Visual thesis: 세상은 봄인데, 서준에게만 아직 공기가 회색이고 잠겨 있다.
```

### Designer's CUT01 bar (excerpt from E001_SAMPLE_OUTPUTS.md)

```
ROW 1 | Shot 01 | 0:00-0:05
  Start thumbnail: Wide of 혜담대 인문캠퍼스 중앙 길, late-spring thin sunlight, students in small groups under light blossom trees. Pale sky #E8F0F5 dominant.
  End thumbnail: Same wide, gentle push-in start. A charcoal-hoodie figure (서준) enters the frame slightly left of center.
  Camera: static wide opening, holding the campus context
  Action: 봄 캠퍼스 평범한 정경. 사람들 두셋 무리. 서준 frame 진입 직전.
  SFX: spring breeze, distant chatter (muffled), footsteps, faint blossom
  Music: muted piano intro, soft noise texture (Suno 0:00-0:05)

CUT01 DIRECTOR'S INTENT:
E001 의 첫 컷으로 봄 캠퍼스의 외부 따뜻함과 서준 내부의 회색 닫힘을 동시에 establishing 한다. 사건 없이도 강한 isolation 상태를 wide-to-medium push-in 한 번으로 각인. 이어폰 cable 의 시각 cue 가 차단 모티프 (canon/style.md §5 fixed motifs) 의 첫 등장이며, 다음 컷 (CUT02 의 손/이어폰 close-up) 의 주인공 prop 으로 자연스럽게 연결된다.
```

### Side-by-side commentary

CUT03's generator output has three structural failures versus the CUT01 bar. First, the startFrame label "Wide establishing of 이어폰 클로즈업" is self-contradictory — a close-up insert cannot be a wide establishing shot, so GPT Image 2 will receive conflicting instructions and likely default to a wide composition rather than the intended tactile earphone close-up. Second, all three shots share the same action text "이어폰을 차단 장치로 각인" with only a mechanical "다음 컷으로 전이." suffix on the closer — versus CUT01's three distinct visual moments (context-set, character-introduced, social-contrast-demonstrated). This means the Seedance clip for CUT03 will have no internal narrative arc across its 15 seconds. Third, the director's intent is a 38-character concatenation of the purpose text and the visual thesis; CUT01's intent references a specific canon motif (`canon/style.md §5 fixed motifs`), a specific prop transition narrative (earphone cable to next cut), and a specific camera technique (wide-to-medium push-in) — none of which appear in the heuristic. The result is that CUT03 is technically valid (M-rules pass) but functionally unusable without manual rewriting.

---

*End of QA report. Phase 4 Conductor: please review Section 4 priority list. CRITICAL-02 (server crash) must be resolved before any other fix can be end-to-end tested.*
