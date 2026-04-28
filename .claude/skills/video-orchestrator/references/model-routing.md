# Model Routing Reference

Use this reference when selecting which available video model or tool should handle each shot.

## Primary Generators

| Model | Use For | Avoid When |
|---|---|---|
| Seedance 2.0 | Multi-shot shorts, ads, music-video sequences, audio-aware prompt packets, reference-heavy scenes | A single ultra-precise hero shot is the only goal |
| Kling 3.0 | Motion continuity, same-character movement, start/end frame logic, extension, element consistency | Audio-first whole-sequence design is more important than motion |
| Google Veo 3.1 | Short cinematic hero shots, first/last frame transitions, precise emotional moments | Too many events must happen in one prompt |
| Sora 2 | Creative style expansion, memorable visual alternative, version B, stylized cinematic interpretation | Strict object placement, product specs, or motion control are the top priority |

## Tool / Pipeline Layer

| Tool | Use For | Notes |
|---|---|---|
| Kling 3.0 Motion Control | Transfer motion from video to image, stabilize dance/action/camera movement | Use only when motion is a core quality factor |
| Kling O1 Edit / Kling 01 Edit | Local corrections, face/hand/prop fixes, wardrobe/background changes | Prefer this when 70%+ of a shot is already good |
| Higgsfield DOP | Camera impact, VFX, dynamic framing, stronger ad/music-video energy | Treat as enhancement, not the main generator |
| Cinema Studio 3.5 | Planning, sequencing, AI-director style shot development | Useful before generation |
| Mixed Media / Edit Video | Assembly, revisions, mixed assets, final video construction | Use after generation |

## Fallback / Preview Layer

| Model | Use For |
|---|---|
| Google Veo 3.1 Lite | Fast preview, lower-cost hero-shot test |
| Seedance 1.5 Pro | Fast Seedance-style previsualization |
| Wan 2.7 | First/end frame alternatives, backup candidate |
| Minimax Hailuo 2.3 | Dynamic motion alternatives, quick test clips |
| Grok Imagine | Stylized audio-synced alternative when a different look is needed |

## Routing Matrix

| Task Type | First Choice | Second Choice | Tool Support |
|---|---|---|---|
| Multi-shot short | Seedance 2.0 | Kling 3.0 | Cinema Studio / Edit Video |
| Audio/dialogue sequence | Seedance 2.0 | Veo 3.1 | Mixed Media |
| Hero shot | Veo 3.1 | Sora 2 | Higgsfield DOP |
| Distinct style version | Sora 2 | Veo 3.1 | Higgsfield DOP |
| Motion/action continuity | Kling 3.0 | Seedance 2.0 | Kling Motion Control |
| Motion transfer | Kling Motion Control | Kling 3.0 | Kling Edit |
| Local repair | Kling Edit | Edit Video | Mixed Media |
| Fast previsualization | Veo 3.1 Lite | Seedance 1.5 Pro | Wan 2.7 |
| Long sequence chain | Seedance 2.0 | Kling 3.0 | Cinema Studio |
| Camera/VFX boost | Higgsfield DOP | Sora 2 | Kling 3.0 |

## Mode Selection

### Minimal Mode

Use when:

- Single 5-10 second video.
- No references.
- Not a series.
- No strict continuity requirement.

Flow:

```text
Brief -> Orchestrator -> one best model -> final prompt
```

Default choices:

- Commercial short: Seedance 2.0.
- Strong single shot: Veo 3.1.
- Motion-focused shot: Kling 3.0.
- Style experiment: Sora 2.

### Full Orchestra Mode

Use when:

- 15 seconds or longer.
- Multiple shots or segments.
- Reference images/videos/audio are involved.
- Same character appears repeatedly.
- Series continuity matters.
- Audio, dialogue, or music rhythm matters.
- Editing/repair workflow is expected.

Flow:

```text
Brief
-> Continuity Bible
-> Shot Specs
-> Model Assignment
-> Specialist Drafts
-> Orchestrator Arbitration
-> Previz
-> Hero Generation
-> Repair / Motion / DOP
-> Final Assembly
-> Audit
```

## Anti-Patterns

- Send the same prompt unchanged to every model.
- Let each model rewrite the whole story.
- Use Motion Control, Edit, or DOP as equal peers to primary generators.
- Regenerate the whole video because one shot failed.
- Merge specialist outputs by simple concatenation.
- Invoke all agents by default.
