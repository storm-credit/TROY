# E001 Suno Style Prompt v2 + Run Plan

> v2 fixes the v1 weak-first-impression failure mode (intro length, vocal mix presence, melodic generic-ness).
> 3-version Master/Lo-fi/Alt-folk run, vocal config identical, BPM-only differentiator.

## 1. Hook Spec

- Hook line (Korean): 내 귀부터 닫고 살았어
- Hook landing target: chorus 1 (full lock), chorus 3 (final earned)
- First-impression target: vocal enters by 0:07-0:08, first sung phrase is the verse 1 first line (hook-grade per lyrics-director)
- Syllable count: ~9 syllables — within breath, lands as a single sung exhale
- Vocal placement: downbeat-anchored, intimate dry attack, no melisma

## 2. Suno Style Prompt — 7-block paste

(paste-ready single block, plain ASCII, ENGLISH for Suno, no Korean lyric quotes, no artist names, 850 characters)

```
Korean modern indie folk, intimate restrained lane, gray late-spring campus air, closed emotionally tired, not redemptive. 75 bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato. Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward in mix, no vibrato gloss, conversational Korean, tense-consonant clarity. Intro under 6 sec: single warm fingerpicked nylon guitar, vocal enters by 0:07 with the hook as first sung phrase. Nylon counterpoint, muted felt-damper upright piano, low brushed snare ghost only, faint room, no pad, no synth, no strings. Dry close intimate mix, narrow stereo, subtle room, no reverb tail, no key change, no drum kit, no swell beyond a small bloom. Earphone-wire hiss, paper-thin air, cafeteria-corner stillness. Avoid ballad gloss, EDM, gospel choir, soaring final.
```

7-block coverage map (for sanity check, not for paste):

- Block 1 Genre/era: `Korean modern indie folk, intimate restrained lane, gray late-spring campus air`
- Block 2 Tempo/feel: `75 bpm slow walking pulse, no uplift, D minor feel, 4/4 breathing rubato`
- Block 3 Lead vocal: `Female intimate withdrawn alto, close-mic, dry, audible breath, soft consonants, vocal forward in mix, no vibrato gloss, conversational Korean, tense-consonant clarity`
- Block 4 Instrumentation: `Nylon counterpoint, muted felt-damper upright piano, low brushed snare ghost only, faint room, no pad, no synth, no strings`
- Block 5 Production/mix: `Dry close intimate mix, narrow stereo, subtle room, no reverb tail, no key change, no drum kit, no swell beyond a small bloom`
- Block 6 Texture/motion: `Intro under 6 sec ... vocal enters by 0:07 with the hook as first sung phrase` + `Earphone-wire hiss, paper-thin air, cafeteria-corner stillness`
- Block 7 Restraint/no-go: `Avoid ballad gloss, EDM, gospel choir, soaring final` + scattered `no pad, no synth, no strings, no reverb tail, no key change, no drum kit, no swell`

## 3. Suno UI Settings (per ui-settings.md)

- Lyrics Mode: Manual
- Lyrics: paste from `ops/E001_lyrics_v8.md` (parallel agent output)
- Styles: paste the block in §2 above (850/1000 chars used)
- Title: 무료한 일상
- Vocal Gender: Female
- Weirdness: 40 (controlled, intimate; not experimental)
- Style Influence: 70 (high adherence — we want the "vocal in by 0:07" and "no reverb tail" to actually land)
- Persona: leave blank (Suno v5 instruction per user)
- Model: v5 (v5.5 not required — no Voices/custom-voice need on this track)

## 4. Run Plan — 3 versions x N takes

| Version | BPM | Texture lean | Take target | Suno mode |
|---|---|---|---|---|
| Master | 75 | balanced muted piano + nylon | 8-12 takes | v5 |
| Var A Lo-fi | 70 | tape hiss, vinyl crackle, narrower mix | 5-8 takes | v5 |
| Var B Alt-folk | 80 | brushed drum ghost, slight pull, broader mix | 5-8 takes | v5 |
| Total | — | — | 18-28 generations | — |

Per-version delta in the Style block (one-line edits only — vocal config identical across all three, BPM is the headline differentiator):

- **Master (BPM 75)**: use the §2 block as-is.
- **Var A Lo-fi (BPM 70)**: replace `75 bpm slow walking pulse` with `70 bpm slow walking pulse, lo-fi tape feel, soft vinyl crackle bed, narrowed stereo, slight tape saturation`. Keep all other lines identical (vocal block, mix block, "vocal enters by 0:07" all preserved).
- **Var B Alt-folk (BPM 80)**: replace `75 bpm slow walking pulse` with `80 bpm gentle alt-folk pulse, low brushed drum ghost present (still ghost, never kit), wider stereo image but still dry`. In the Instrumentation line change `low brushed snare ghost only` to `low brushed snare and rim ghost, still subdued`. Everything else identical.

Locking rule (per arrangement-run-strategy.md): vocal config, language, length range, hook line, intro-under-6 sec rule, vocal-by-0:07 rule, lyric file all locked across the 3 versions. Only BPM + texture-lean shift.

## 5. Reference Calibration

User did not supply specific references. Below: 6 Korean indie folk songs whose first 8-12 seconds either (a) drop a vocal in fast or (b) establish intimate close-mic presence immediately. Mentioned only here in §5 — never inside the Suno paste prompt.

| # | Artist - Title | First-impression note (≤ 12 words) |
|---|---|---|
| 1 | 검정치마 - 강아지 | nylon guitar in instantly, intimate male voice by ~0:08 |
| 2 | 검정치마 - Everything | dry close vocal lands within first bar, no padded intro |
| 3 | 9와 숫자들 - 보물 | sparse acoustic, vocal grabs in first phrase, no big build |
| 4 | 정밀아 - 그리운 그대 | breath-forward female vocal, intimate from second one |
| 5 | 짙은 - 우리의 밤은 당신의 낮보다 아름답다 | felt-piano restraint, vocal carries before any swell |
| 6 | 신해경 - 나는 (낮에 꾸는 꿈) | dry close vocal, paper-thin air, no reverb tail |

User-listening rule: A/B each generated take against #1 and #4 specifically — those two represent our female-vocal first-impression bar. If a take feels distant/wet/late next to those, skip.

## 6. Curation Workflow

User's curation rule per take:

1. Skip if vocal entry > 0:10 (the v1 failure mode)
2. Skip if vocal feels distant / wet / underpowered (reverb tail, buried in mix)
3. Skip if first sung phrase doesn't anchor emotionally (generic descending melody, unmemorable contour)
4. Skip if Suno introduces drum kit / pad wash / strings / key change (any "hopeful lift" violates Phase 1 thesis)
5. Of survivors, A/B by chorus hook strength against §5 references #1 and #4
6. Top 1-2 per version → upload to TROY console workbench (`export/music/arin_album_vol1_*/external_audio_intake/` per CLAUDE.md §13)

## 7. Output Contract (per odd-engine-output-contract.md)

- Hook Spec: PASS (§1)
- Audit PASS-REVISE log: see §8
- Run Goal: 18-28 takes total, surviving ≥ 1 candidate per version after curation §6
- Locked variables across all 3 runs: vocal config (female intimate withdrawn alto, close-mic, dry), language (Korean 100%), length range (3:30-4:00), lyric file ref (`ops/E001_lyrics_v8.md`), hook line, intro-under-6-sec, vocal-by-0:07, no-hopeful-lift, no-drum-kit, no-reverb-tail
- Differentiator: BPM only (75 / 70 / 80) plus minimal texture-lean tweak

## 8. Audit PASS-REVISE log

- Hook strength (8-sec test): PASS — vocal enters by 0:07 carrying the hook line itself; first-impression failure mode addressed at the prompt layer rather than relying on Suno's default intro behavior.
- Copyright/artist safety: PASS — no artist names inside the Suno paste block. References live in §5 only.
- Style focus and length: PASS — 850 chars exactly (target 600-850), no duration promise inside the prompt (`3:30-4:00` lives in §7 Locked variables, not the paste block).
- Korean pronunciation: N/A here (Korean QA owned by lyrics-director on `ops/E001_lyrics_v8.md`); style block adds the steering cue `tense-consonant clarity` to help Suno preserve `귀부터 / 닫고` consonants.
- Vocal config locking across 3 runs: PASS — only BPM and a one-line texture-lean tweak per run; vocal block, mix block, intro-rule, vocal-entry-rule all identical.
- Run A/B/C variable count: PASS — 1 variable (BPM) plus a contained texture-lean rider per run (within "1-2 variables" rule per arrangement-run-strategy.md §Locking rule).
- Female vocal lock (override of v1 brief's "male"): PASS — explicit `Female intimate withdrawn alto` in Block 3 of the paste block; UI Vocal Gender: Female.
- No hopeful lift: PASS — `no uplift`, `no key change`, `no drum kit`, `no swell beyond a small bloom` all present. Phase 1 closed/gray thesis preserved.
- UI settings provided: PASS — §3.
- Phase 1 brief override note: brief at `ops/E001_song_brief.md` line 20 still says "intimate male vocal". User has explicitly overridden to female (per Conductor instruction). This v2 file supersedes the brief on the vocal-gender field only; all other brief constraints (palette, no-hopeful-lift, isolation thesis) preserved.

## 9. Open questions for Conductor / user

1. The legacy brief at `ops/E001_song_brief.md` line 20 still reads `intimate male vocal`. Do you want me to flag a future edit to that file to reconcile, or leave the brief untouched and let this v2 doc be the supersede record? (I did NOT edit the brief per the "don't touch any other file" instruction.)
2. Style Influence is set to 70 (high adherence) so the intro-under-6-sec and no-reverb-tail rules actually land. If after a few takes Suno feels boxed-in, drop to 60 on a side run and compare.
3. Weirdness 40 is conservative. If the first 8-12 takes all feel safe/generic in melody contour, bump to 50 on Var B Alt-folk only (still within Master locking).
4. Reference song #5 (짙은) leans male vocal — kept for texture/mix calibration only, not for vocal-gender match. User should mentally ignore the gender of the reference singer when judging mix character.
