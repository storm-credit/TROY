# Veo Packet Template

```text
=== VEO HERO SHOT BIBLE ===

SUBJECT
- Character/object:
- Wardrobe/material:
- Signature detail:

REFERENCE BINDING
- Reference asset:
- Bound role:
- Must preserve:
- May reinterpret:
- Must not affect:

ENVIRONMENT
- Location:
- Time:
- Light:
- Palette:

CAMERA
- Framing:
- Angle:
- Movement:
- Lens feeling:

ACTION
- Main action:
- Emotional beat:
- Micro gesture:

FRAMES
- First frame:
- Last frame:

AUDIO
- Dialogue:
- Ambience:
- SFX:

NEGATIVE
- No identity drift.
- No wardrobe flicker.
- No text/logos unless requested.
- No sudden time/location jump.
- No extra limbs or distorted hands.

=== VEO MODEL-READY PROMPT ===

Title:
Input mode:
Duration:
Aspect ratio:
Prompt:
First frame:
Last frame:
Audio:
Negative constraints:
Bridge:
```

## Continuity Bridge

```text
Previous end state:
Next start state:
Compatibility note:
Risk:
```

## Compact Worked Example

```text
Title: Rainlit discovery
Input mode: text-to-video
Duration: 8 seconds
Aspect ratio: 16:9
Prompt: A teenage girl in a locked yellow raincoat stands at the edge of an empty bus stop at blue hour, holding a cracked paper map with both hands. The camera slowly dollies in from a medium-wide shot as rain beads on the glass shelter and a warm vending-machine glow reflects across the wet pavement. She lowers the map slightly and notices a tiny blue light pulsing under the bench. The shot begins with her centered in the shelter doorway and ends in a tight medium shot as the blue light reflects in her eyes. Lighting remains blue-hour rain with warm side glow.
First frame: Medium-wide shot, girl centered at the bus stop doorway, yellow raincoat, paper map raised, rain falling.
Last frame: Tight medium shot, map lowered, blue light reflection visible in her eyes, same raincoat and bus stop.
Audio: Soft rain ambience, distant bus brake hiss, one low electronic pulse as the blue light appears.
Negative constraints: No text overlays, logos, wardrobe change, extra fingers, face morph, sudden daylight, or location jump.
Bridge: Ends with girl facing camera-right toward the blue light, ready for the next shot to reveal the object under the bench.
```

## First/Last Frame Example

```text
Title: Doorway resolve
Input mode: first/last-frame video
Duration: 8 seconds
Aspect ratio: 16:9
First frame: Medium shot of the locked protagonist standing in a narrow apartment doorway, right hand on the brass handle, warm hallway light behind her, blue room light in front.
Last frame: Tight medium shot from inside the room, same protagonist stepping across the threshold, hand released from the handle, warm backlight now outlining her shoulders.
Prompt: The protagonist slowly opens the apartment door and steps into the blue-lit room while the camera retreats smoothly, maintaining her same wardrobe, face type, and tense expression. The action is one continuous movement from hesitation to commitment.
Audio: Quiet door hinge, soft room tone, one low breath.
Negative constraints: No wardrobe change, face morph, extra hands, text, logo, sudden location jump, or light direction flip.
Bridge: Ends with her fully inside the room, facing camera-left, ready for the next clip to reveal what she sees.
```

## Ingredient-Guided Example

```text
Title: Map and lantern
Input mode: ingredient-guided image-to-video
Duration: 8 seconds
Aspect ratio: 16:9
Reference binding:
- Character reference -> preserve face type, hair, coat silhouette, and age range.
- Lantern reference -> preserve brass body, blue flame, and handheld scale.
- Forest reference -> preserve misty pine density and wet ground texture, not exact composition.
Prompt: The referenced young traveler walks slowly through the misty pine forest holding the referenced brass lantern with a blue flame. The camera tracks beside her at waist height as the blue flame flickers against wet tree bark and her coat hem moves in the damp wind. The shot ends as she raises the lantern toward a carved stone marker just entering frame.
Audio: Soft footsteps on wet soil, faint lantern hum, distant owl.
Negative constraints: No change to coat silhouette, lantern color, face type, forest time of day, or flame color; no text overlays or extra fingers.
Bridge: Ends with lantern raised near the stone marker, blue light touching the carved surface.
```
