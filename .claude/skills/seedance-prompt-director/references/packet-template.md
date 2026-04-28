# Seedance Packet Template

Use this as the full output skeleton for complex Seedance requests.

```text
=== CONTINUITY BIBLE ===

WORLD
- Genre / tone:
- Reality layer:
- Visual grade:
- Aspect ratio:
- Seed strategy:

CHARACTERS
- Character ID:
- Appearance:
- Wardrobe locked:
- Signature detail:
- Emotional baseline:
- Emotional target:

TIME
- Time of day:
- Weather:
- Light direction:
- Time progression:

SPACE
- Primary location:
- Spatial layout:
- Camera axis:
- Blocking:

HOOK STRATEGY
- 0-0.5s:
- 0.5-1.5s:
- 1.5s+:

PROPS / MOTIFS
- Prop:
- Motif:

REFERENCE INVENTORY
- Asset 1:
  - Type:
  - Bound role:
  - Must preserve:
  - Can ignore:
- Asset 2:
  - Type:
  - Bound role:
  - Must preserve:
  - Can ignore:
- Conflict rule:

AUDIO 3-LAYER
- Opening stinger:
- Rhythm beat:
- BPM:
- Dialogue timing:
- Beat-aligned cut notes:
- Ending tail:

NEGATIVE CONSTRAINTS
- No text, subtitles, watermarks, logos unless requested.
- No face/body defects.
- No time/light drift.
- No wardrobe flicker.
- No prop pop-in/pop-out.
- No AI plastic skin.

=== SHOT TIMELINE ===

SHOT 1 ([time]) - [name]
- Continuity anchor:
- Action:
- Camera:
- Effects:
- Audio:
- Ending state:

SHOT 2 ([time]) - [name]
- Continuity anchor from SHOT 1:
- Action:
- Camera:
- Effects:
- Audio:
- Ending state:

SHOT N ([time]) - [name]
- Continue the same schema.
- Every shot must inherit the previous shot's ending state unless a motivated transition is stated.

=== FINAL PROMPT ===

SEGMENT 1 ([time range])

[Korean Block]
- Technical parameters:
- Audio 3-layer:
- BPM / dialogue timing / beat-cut notes:
- Scene prompts:
- Negative prompt:
- Speed / Camera / Transitions / Optical:
- Effects density map:
- Exact ending state / next segment bridge:

[English Block if useful]
- Technical parameters:
- Audio 3-layer:
- BPM / dialogue timing / beat-cut notes:
- Scene prompts:
- Negative prompt:
- Speed / Camera / Transitions / Optical:
- Effects density map:
- Exact ending state / next segment bridge:

SEGMENT 2 ([time range], if needed)
- Start from Segment 1 exact ending state.
- Repeat the full prompt block.
- Default 30s split: Segment 1 = 0-15s, Segment 2 = 15-30s unless user specifies otherwise.

=== CONTINUITY AUDIT ===
- Character:
- Wardrobe:
- Light:
- Space:
- Props:
- Audio:
- Hook:
- Prompt load:
- Continuity load:
```
