# Suno Product Facts

Last checked: 2026-04-23. Recheck official Suno help/blog pages when the user asks for latest model behavior, limits, access tiers, or UI details.

## Confirmed From Suno Sources

- Suno v5.5 was announced on 2026-03-26 with Voices, Custom Models, and My Taste. Voices is for Pro/Premier subscribers and includes voice verification and privacy controls. Source: https://suno.com/blog/v5-5
- Suno v5 was announced in September 2025 for Pro/Premier users, with improved audio quality and vocals. Source: https://help.suno.com/en/articles/8105153
- Suno's model timeline lists V4.5 and V5 as capable of up to 8 minutes in a single generation. Source: https://help.suno.com/en/articles/2409473 and https://help.suno.com/en/articles/5782721
- Custom Mode lets the user provide lyrics, styles/advanced options, and title; Instrumental mode can be toggled when lyrics are not wanted. Source: https://help.suno.com/en/articles/3197377 and https://help.suno.com/en/articles/3726721
- Extend can add music to the end of a track; the user can choose the extension point, add lyrics/style details, and then stitch with Get Whole Song. Source: https://help.suno.com/en/articles/2409601
- Song Editor supports section replacement, lyric edits, creating sections, extending, cropping, and fades. Source: https://help.suno.com/en/articles/6141505
- Stem Extraction can separate vocals/instrumental or more detailed stems from Library, Workspace, or Song Editor. Source: https://help.suno.com/en/articles/6141441
- Add Vocals can layer custom vocals onto uploaded or generated instrumentals and is documented as a Pro/Premier beta feature. Source: https://help.suno.com/en/articles/6882817
- My Taste can personalize style augmentation. Source: https://help.suno.com/en/articles/11362561

## House Heuristics, Not Official Guarantees

- Style prompt length: prefer compact prompts. User-provided 2026-04 screenshots show the current Styles box with a `1000` character counter, but still use about 600-850 characters for controlled Korean pop work unless the user wants rich cinematic detail. Treat 850-950 as higher risk for truncation, cramped editing, or diluted focus, and verify in the current UI.
- Lyrics line count: 45-55 vocal lines often gives enough material for a 3:00-4:00 pop form, but exact duration depends on model, arrangement density, repetition, tempo, and Extend/Edit choices.
- Lyric tags: common tags like `[Verse]`, `[Chorus]`, `[Bridge]`, `[Female]`, `[Male]`, and `[Duet]` are practical prompt conventions. Do not imply every creative tag is officially guaranteed.
- BPM/key requests are useful steering signals, but generated output may not perfectly obey them without post-production checks.

## When To Mention Product Features

- Mention v5.5/Voices only when the user asks about current Suno versions, custom voices, vocal identity, or model selection.
- Mention My Taste or Custom Models only when personalization or repeatable house sound matters.
- Mention stems/export only when the output is headed to MV editing, DAW work, remixing, or vocal/instrumental separation.
- Mention Extend/Song Editor when the user asks for longer songs, alternate endings, section repairs, or lyric replacement.
- Mention UI sliders when the user is pasting directly into Suno or comparing runs. See [ui-settings.md](ui-settings.md).
