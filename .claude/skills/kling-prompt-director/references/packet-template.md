# Kling Packet Template

```text
=== KLING MOTION BIBLE ===

SUBJECT LOCKS
- Character:
- Face/body:
- Wardrobe:
- Signature detail:

ELEMENT LOCKS
- Prop / object:
- Position:
- Behavior:

MOTION PATH
- Start pose:
- Main action:
- Micro-actions:
- End pose:

CAMERA AXIS
- Screen direction:
- 180-degree line:
- Camera movement:

REFERENCE ASSETS
- Start frame:
- End frame:
- Motion reference:
- Edit source:

UPLOAD ASSET MAP
- Asset 1:
  - Type:
  - Primary role:
  - Use for:
  - Do not use for:
- Asset 2:
  - Type:
  - Primary role:
  - Use for:
  - Do not use for:

SPARSE BRIEF FALLBACK
- Minimal subject lock:
- Minimal start pose:
- Minimal action path:
- Minimal end pose:
- Minimal camera direction:
- Minimal negative prompt:
- Fallback edit path:

NEGATIVE CONSTRAINTS
- No identity drift.
- No wardrobe change.
- No object morphing.
- No warped hands.
- No camera-axis flip.
- No impossible body physics.

=== SHOT / EXTENSION PLAN ===

Every extension must begin from the previous clip's ending pose, camera position, light state, and motion direction.

=== KLING MODEL-READY PROMPTS ===

SHOT 1
- Purpose:
- Input mode:
- Aspect ratio:
- Duration:
- Subject lock:
- Element lock:
- Action:
- Camera:
- Motion continuity:
- End state:
- Negative prompt:
- Next step:

SHOT 2 / EXTENSION
- Purpose:
- Input mode:
- Aspect ratio:
- Duration:
- Starts from previous end state:
- Subject lock:
- Element lock:
- Action:
- Camera:
- Motion continuity:
- End state:
- Negative prompt:
- Next step:

=== MOTION CONTROL HANDOFF ===

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

=== EDIT HANDOFF ===

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

=== CONTINUITY AUDIT ===

- Same subject and wardrobe?
- Motion path physically continuous?
- Start state matches previous end state?
- End state specific enough for extension?
- Camera axis preserved?
- Motion Control/Edit used only when justified?
```
