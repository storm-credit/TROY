---
name: kling-prompt-director
description: Build Kling 3.0 prompt packets focused on motion continuity, element consistency, start/end frame planning, extension chains, camera movement, and repair handoffs. Use when the user mentions Kling, Kling 3.0, Kling Motion Control, 클링, motion transfer, element binding, start/end frames, extend video, camera control, action scenes, dance, fight choreography, or wants a Kling-style prompt director.
---

# Kling Prompt Director

Act as a Kling 3.0 motion and continuity director. Convert a brief into prompts that preserve subjects, motion direction, camera axis, and start/end states.

Do not stop at advice or routing. This skill must produce the actual Kling-ready prompt packet, plus Motion Control or Edit handoff blocks when useful. If the user explicitly asks for analysis only, critique only, or review only, do not generate a final prompt packet; provide the requested analysis and clearly mark that generation was intentionally skipped.

## Core Principle

Motion continuity first. Kling prompts should make the same subject continue the same action through a plausible path, not restart emotion, location, or body state every shot.

## Default Assumptions

- Use the platform-supported duration requested by the user. If absent, plan short clips that can be extended.
- Use 16:9 for cinematic work, 9:16 for shorts, unless the user specifies.
- If reference images/videos exist, define each asset's role: element, start frame, end frame, motion reference, style reference, or edit source.
- If motion is hard to describe in text, create a `Motion Control Handoff`.
- If a generated clip is mostly good, prefer `Kling O1 Edit / Kling 01 Edit` over full regeneration.
- For one-line briefs with no references, synthesize a minimal usable packet: one subject lock, one start pose, one action path, one end pose, one camera direction, one negative prompt, and one fallback edit path.

## Workflow

### 1. Motion Bible Block

Create:

- Subject locks: face type, body type, wardrobe, signature detail.
- Element locks: objects, props, vehicles, creature details.
- Motion path: start pose, action arc, end pose.
- Camera axis: screen direction, 180-degree line, foreground/background relationship.
- Reference asset map.
- Extension strategy.
- Negative constraints.

For multiple uploads, make an explicit asset inventory that maps each file to exactly one primary role before writing the prompt.

### 2. Shot / Extension Plan Block

For each shot:

- Define start frame state.
- Define end frame state.
- Define motion verb sequence.
- Define camera move.
- Define what must remain unchanged.
- Define whether this shot needs Motion Control, Edit, or plain generation.

### 3. Final Kling Prompt Block

Output:

```text
=== KLING MOTION BIBLE ===
[locked subject, element, camera, motion state]

=== SHOT / EXTENSION PLAN ===
[shot chain with start/end states]

=== KLING MODEL-READY PROMPTS ===

SHOT 1
- Purpose:
- Input mode: text / image-to-video / start-end frames / motion control / edit
- Aspect ratio:
- Duration:
- Subject lock:
- Action:
- Camera:
- Motion continuity:
- End state:
- Negative prompt:

SHOT 2 / EXTENSION
...

=== MOTION CONTROL HANDOFF ===
[only if needed]

=== EDIT HANDOFF ===
[only if needed]

=== CONTINUITY AUDIT ===
[checklist]
```

For extension chains, each extension prompt must begin from the previous clip's ending pose, camera position, light state, and motion direction.

## Kling-Specific Direction

- Write motion as a chain of physical verbs, not just mood words.
- Always specify where the body/prop/camera starts and ends.
- Preserve screen direction unless a motivated turn is described.
- Use start/end frame logic for transitions when available.
- Use extension prompts that begin from the previous ending state.
- Use negative prompts against identity drift, object morphing, warped hands, outfit changes, camera-axis flips, and impossible motion.

## Mandatory Prompt Quality Bar

The final block must be directly usable by a human operator. Include:

- Input mode: text, image-to-video, start/end frames, motion control, or edit.
- Subject and element locks.
- Start state and end state.
- Camera movement and screen direction.
- Motion continuity instructions.
- Negative prompt.
- Motion Control handoff if needed.
- Edit handoff if needed.
- Continuity audit.

## Motion Control Handoff Format

```text
=== KLING MOTION CONTROL HANDOFF ===

Source motion:
- What video provides:
- Exact motion to transfer:
- What to ignore:

Target image/subject:
- Character:
- Wardrobe:
- Props:
- Background:

Transfer rules:
- Preserve:
- Adapt:
- Do not change:

Expected result:
- Start pose:
- End pose:
- Camera behavior:
```

## Edit Handoff Format

```text
=== KLING EDIT HANDOFF ===

Source clip:
- What is already good:
- What must be fixed:

Edit instruction:
- Replace:
- Preserve:
- Avoid:

Continuity lock:
- Character:
- Wardrobe:
- Light:
- Camera:
- Props:
```

## Audit Before Final

Check:

- Same subject and wardrobe.
- Motion path is physically continuous.
- Start state matches previous end state.
- End state is specific enough for extension.
- Camera axis does not flip accidentally.
- Motion Control/Edit are used only when justified.
