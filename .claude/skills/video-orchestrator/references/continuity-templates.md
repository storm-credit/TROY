# Continuity Templates

Use these templates when creating continuity-safe video prompt packets.

## Continuity Bible

```text
=== CONTINUITY BIBLE ===

PROJECT
- Title:
- Format: short / ad / music video / drama / product / experiment
- Target duration:
- Aspect ratio:
- Final delivery model:
- Candidate models:
- Language:
- Output style:

WORLD
- Genre:
- Tone:
- Reality layer:
- Visual grade:
- Color palette:
- Texture:
- Forbidden style drift:

CHARACTERS
- Character ID:
- Role:
- Age range:
- Face type:
- Body type:
- Hair:
- Wardrobe locked:
- Signature detail:
- Emotional baseline:
- Emotional arc:
- Must not change:

PROPS
- Prop ID:
- Description:
- Owner:
- Screen position rule:
- Continuity importance:
- Must not change:

TIME
- Time of day:
- Weather:
- Light source:
- Light direction:
- Time progression:
- Forbidden time drift:

SPACE
- Primary location:
- Layout map in words:
- Camera axis / 180-degree line:
- Foreground:
- Midground:
- Background:
- Entry/exit paths:
- Forbidden spatial drift:

CAMERA LANGUAGE
- Default lens feeling:
- Framing rules:
- Camera movement style:
- Allowed camera moves:
- Forbidden camera moves:
- Shot rhythm:

AUDIO
- Music mood:
- BPM:
- Opening stinger:
- Rhythm layer:
- Diegetic sound:
- Dialogue:
- Ending tail:

HOOK STRATEGY
- 0.0-0.5s:
- 0.5-1.5s:
- 1.5s+:
- Payoff:

NEGATIVE CONSTRAINTS
- No text/subtitles/watermarks/logos unless requested:
- No real-person likeness unless rights are confirmed:
- No face/body defects:
- No wardrobe flicker:
- No time/light drift:
- No prop pop-in/pop-out:
- No AI plastic skin:
- Brief-specific negatives:

REFERENCE ASSETS
- Asset ID:
- Asset type: image / video / audio / sketch
- Purpose:
- Use as first frame: yes / no
- Use as motion reference: yes / no
- Use as style reference: yes / no
- Natural-language description:

SEED / REPRODUCIBILITY
- Seed strategy:
- Successful generation ID:
- Reuse rules:
- Fallback if seed unavailable:

ENDING STATE
- Final character pose:
- Final expression:
- Final camera position:
- Final light state:
- Final prop positions:
- Bridge to next segment:
```

## Shot Spec

```text
=== SHOT SPEC ===

SHOT ID:
Timecode:
Purpose:
Assigned model:
Fallback model:

Continuity anchors:
- Character:
- Wardrobe:
- Prop:
- Location:
- Light:
- Emotional state:

Action:
- Main action:
- Secondary action:
- Micro gesture:

Camera:
- Framing:
- Angle:
- Movement:
- Lens feeling:
- Blocking:

Audio:
- Music cue:
- Sound effect:
- Dialogue:

Model-specific notes:
- Seedance:
- Kling:
- Veo:
- Sora:

Ending state:
- Pose:
- Expression:
- Camera:
- Prop:
- Light:

Risks:
- Continuity risk:
- Motion risk:
- Face/body risk:
- Prompt overload risk:
```

## Specialist Handoff

```text
=== SPECIALIST HANDOFF ===

To:
Assigned shot IDs:
Goal:
Model/tool:

Use only this Continuity Bible:
[paste locked Bible]

Use these shot specs:
[paste assigned shot specs]

Your task:
- Optimize only the assigned shots.
- Keep all locked continuity facts unchanged.
- Produce model-ready prompts.
- Include any model-specific warnings.
- Include ending state for the next shot.

Do not:
- Rewrite the whole story.
- Change character design.
- Change wardrobe.
- Change time of day or location unless explicitly instructed.
- Add new props unless approved by the Orchestrator.
```

## Final Prompt Packet

```text
=== FINAL VIDEO PROMPT PACKET ===

1. Continuity Bible
[locked project bible]

2. Shot Timeline
[shot-by-shot timeline]

3. Model Assignment
[shot -> model/tool -> reason -> fallback]

4. Model-Ready Prompts
[only selected models, not every model by default]

5. Tool / Edit / Motion Passes
[motion/edit/dop instructions if needed]

6. Continuity Audit
[checklist results]

7. Next Action
[what to generate first]
```

## Continuity Audit

```text
=== CONTINUITY AUDIT ===

Character:
- Same face type preserved?
- Same body type preserved?
- Same hair preserved?
- Same wardrobe preserved?
- Signature detail visible when needed?

World:
- Same genre and tone preserved?
- Same color palette preserved?
- No style drift between shots?

Time / Light:
- Time of day consistent?
- Weather consistent?
- Light direction consistent?
- No sudden day/night jump?

Space:
- Location layout consistent?
- 180-degree line respected?
- Character screen direction preserved?
- Props remain in plausible positions?

Action:
- Shot starts from previous ending state?
- Motion direction consistent?
- Emotional progression justified?

Audio:
- Opening stinger present?
- Rhythm layer consistent?
- Dialogue does not contradict action?
- Ending tail supports next segment?

Prompt:
- Not overloaded?
- No contradictory instructions?
- Negative constraints included?
- Model-specific controls separated?

Routing:
- Assigned model matches shot purpose?
- Fallback model selected?
- Repair path defined?
```
