# Suno UI Settings

Use this when the user wants a paste-ready Suno setup, not just text. These notes are based on official Suno Custom Mode behavior plus user-provided 2026-04 screenshots showing the current Create UI.

## Visible Fields

- **Lyrics**: paste the section-tagged lyrics here.
- **Styles**: paste the Style prompt here. The user's current UI shows a `1000` character counter in this field.
- **More Options**: includes `Vocal Gender`, `Lyrics Mode`, `Weirdness`, and `Style Influence`.

## Recommended Defaults For Paste Packs

```text
Lyrics Mode: Manual
Vocal Gender: match the lead vocal, or leave unset/neutral if the UI allows it
Weirdness: 35-50 for controlled pop; 50-65 for experimental color
Style Influence: 60-75 for prompt adherence; 45-55 for looser exploration
Model: use the current best model available to the user; mention v5.5 when Voices/custom voice is needed
```

## Lyrics Mode

- **Manual**: use when the skill supplies lyrics. This is the default for ODD ENGINE and any paste-ready pack.
- **Auto**: use when the user wants Suno to generate lyrics from the concept and Style field. In that case, provide a stronger Style prompt and a short concept note instead of full lyrics.

## Vocal Gender

- For solo songs, set the lead vocal gender in UI and reinforce it in Style.
- For duet songs, the UI may not fully represent both singers. Use the UI setting for the dominant lead or the closest available option, then place explicit singer roles inside Lyrics tags:

```text
[Verse 1: Female]
[Verse 2: Male]
[Final Chorus: Duet - Female lead + Male harmony]
```

- If the song needs nonbinary, group, childlike, elderly, or character-specific vocals, avoid overpromising UI support. Describe the vocal in Style and section tags.

## Weirdness

Weirdness steers how conventional or surprising the output feels.

- **25-40**: safer, more radio-pop, better for clean hooks and client work.
- **45-55**: balanced default; use for most K-pop/K-R&B exploration.
- **60-75**: more unusual phrasing, texture, or structure; useful for supernatural or art-pop tracks.
- **75+**: high risk; use only for deliberate chaos, glitches, experimental vocals, or surreal BGM.

Run A/B tip: if comparing Weirdness, keep Style and Lyrics identical and move Weirdness by one meaningful step, such as `45` vs `60`.

## Style Influence

Style Influence steers how closely Suno follows the Style prompt.

- **40-55**: looser interpretation; good when the prompt is broad or the user wants surprise.
- **60-75**: stronger adherence; default for paste packs, Korean lyric clarity, and specific genre targets.
- **80+**: use cautiously. It can help strict direction, but may reduce natural variation or make the output feel boxed in.

Run A/B tip: for prompt-adherence tests, keep all text identical and compare `Style Influence 55` vs `70`.

## UI Settings Output Block

Add this block after Run Goal when the user needs direct Suno entry:

```md
## Suno UI Settings
- Lyrics Mode: Manual
- Vocal Gender: Female lead / Male lead / Duet handled in lyrics tags
- Weirdness: 50
- Style Influence: 65
- Model/Feature Notes: v5.5 if Voices are needed; otherwise use the user's preferred current model
- Styles length: 000/1000 characters
```

## Audit Items

- [ ] Lyrics Mode matches whether lyrics are supplied.
- [ ] Vocal Gender does not conflict with lyrics tags.
- [ ] Weirdness supports the song goal.
- [ ] Style Influence matches how strict the prompt needs to be.
- [ ] Style prompt fits the visible character counter.
- [ ] Any model/feature claim is either sourced, user-provided, or marked as an assumption.
