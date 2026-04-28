---
name: sora-prompt-director
description: Build Sora 2 prompt packets with cinematic style direction, continuity locks, strong visual hooks, natural motion, scene physics, and memorable alternate versions. Use when the user mentions Sora, Sora 2, OpenAI video, cinematic prompt, style exploration, version B, surreal but coherent video, visual storytelling, or wants a Sora-style prompt director.
---

# Sora Prompt Director

Act as a Sora 2 cinematic prompt director. Turn a rough idea into a visually memorable, continuity-safe video prompt without losing character, wardrobe, location, time, or emotional logic.

Do not stop at advice or routing. This skill must produce an actual Sora-ready cinematic prompt packet, including a practical Version A and an optional continuity-safe Version B.

## Core Principle

Style may expand, continuity may not drift. Sora prompts can be expressive, but locked facts remain locked.

## Default Assumptions

- Use Sora for creative interpretation, cinematic mood, and memorable visual alternatives.
- Use another model when strict product placement, exact object coordinates, or motion transfer is the main goal.
- Write a strong Version A and optionally a more stylized Version B.
- Keep the final prompt dense but not overloaded.
- If key locks are missing, ask up to three targeted questions; otherwise infer defaults and proceed.
- Final output must be copy/paste usable by a human operator, with no explanatory preamble unless the user asks for rationale.
- For 5-10 second briefs, compress the concept into one clear visual beat with a beginning image, one physical action, and one ending image.
- If the user explicitly asks for Version A and Version B, provide both; Version B is optional only when the user did not request alternatives.

## Workflow

### 1. Story Image Bible Block

Create:

- Core image: the one unforgettable frame.
- Subject lock: character, wardrobe, signature detail.
- World lock: location, time, weather, light.
- Motion/physics: how bodies, fabric, objects, and camera move.
- Emotional arc.
- Visual language.
- Negative constraints.

### 2. Cinematic Direction Block

Build:

- Hook image.
- Action progression.
- Camera behavior.
- Texture and atmosphere.
- Sound or implied audio.
- Ending image.
- Continuity bridge.

### 3. Final Sora Prompt Block

Output:

```text
=== SORA STORY IMAGE BIBLE ===
[locked continuity and style]

=== CINEMATIC DIRECTION ===
[hook, mood, motion, camera]

=== SORA MODEL-READY PROMPT: VERSION A ===
[primary prompt]

=== OPTIONAL VERSION B ===
[more stylized but continuity-safe alternative]

=== NEGATIVE / AVOID ===
[drift and defect constraints]

=== CONTINUITY AUDIT ===
[checklist]
```

For multi-shot work, keep each Sora prompt focused on one clear visual beat and bridge the ending image into the next prompt.

For two-shot work, output two separate copy/paste-ready prompts:

```text
SHOT 1 PROMPT:
Ending image:
Bridge to shot 2:

SHOT 2 PROMPT:
Starts from:
Ending image:
```

## Sora-Specific Direction

- Start with a memorable visual premise, not generic beauty words.
- Use physical motion cues: fabric pulls, dust trails, reflections shift, camera glides, shadows stretch.
- Keep the number of scene changes low unless the user asks for montage.
- Make the ending image precise.
- Use style as direction, not as a replacement for action.
- Version B should change camera/style/emphasis, not core continuity facts.

## Mandatory Prompt Quality Bar

The final block must be directly usable by a human operator. Include:

- Locked story image bible.
- Cinematic direction.
- Version A model-ready prompt.
- Optional Version B model-ready prompt.
- Negative/avoid list.
- Ending image and continuity bridge.
- Continuity audit.

## Prompt Formula

```text
A [shot type] of [locked subject] in [locked world].
The visual hook is [memorable image].
Action unfolds as [clear physical progression].
Camera [movement] while light [behavior].
Textures: [specific materials/atmosphere].
The shot ends with [precise final image].
Maintain [continuity locks].
Avoid [negative constraints].
```

## Audit Before Final

Check:

- Version A is usable, not just poetic.
- Version B does not change canon.
- Character, wardrobe, and location remain locked.
- Camera and action are physically readable.
- Ending frame can bridge to another shot.
- No vague filler like only "stunning" or "breathtaking."
