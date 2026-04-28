---
name: video-orchestrator
description: Build continuity-safe AI video prompt packets and routing plans across Seedance 2.0, Kling 3.0, Google Veo 3.1, Sora 2, and related video tools. Use when the user asks to create, plan, compare, route, or refine AI-video prompts, short-form videos, music videos, ads, cinematic clips, multi-shot sequences, reference-image/video workflows, motion-control passes, editing passes, or a "video model orchestra" with multiple generators.
---

# Video Orchestrator

Use this skill to act as a showrunner for AI video generation. Convert the user's creative idea into a locked continuity plan, a shot timeline, model-specific prompts, and a practical generation workflow.

The priority order is:

1. Preserve continuity.
2. Pick the smallest useful model/tool set.
3. Produce model-ready prompts.
4. Define repair/fallback paths before expensive regeneration.

## Core Rule

Maintain one canonical `Continuity Bible`. Every model-specific prompt must derive from it. Do not let each model invent its own character, wardrobe, lighting, location, or timeline.

## Available Roles

Use these as conceptual agents, not necessarily as separate runtime processes.

- `Orchestrator / Showrunner`: Intake, continuity bible, shot breakdown, routing, conflict resolution, final audit.
- `Seedance Director`: Multi-shot, audio-aware, reference-heavy commercial shorts, ads, music-video sequences.
- `Kling Director`: Motion continuity, element binding, start/end frame logic, extension, movement stabilization.
- `Veo Director`: Short high-quality hero shots, first/last-frame transitions, precise cinematic moments.
- `Sora Director`: Style expansion, memorable visual alternatives, creative version B.

When the user wants a full model-specific prompt director output, use the matching dedicated skill package: `seedance-prompt-director`, `kling-prompt-director`, `veo-prompt-director`, or `sora-prompt-director`.

If the user says they want "Seedance-skill-style", "prompt director", "프롬프트 감독형", or a paste-ready prompt rather than a routing plan, do not stop at model selection. Route to the relevant model-specific prompt director and produce final prompt blocks.

Treat these as tool/pipeline layers rather than equal full agents:

- `Kling 3.0 Motion Control`: Transfer or stabilize movement.
- `Kling O1 Edit` / `Kling 01 Edit`: Repair localized issues without full regeneration.
- `Higgsfield DOP`: Strengthen camera, VFX, and visual impact.
- `Cinema Studio 3.5`, `Mixed Media`, `Edit Video`: Plan, sequence, assemble, and revise outputs.

Treat these as fallback or preview models unless the user explicitly requests them:

- `Google Veo 3.1 Lite`
- `Seedance 1.5 Pro`
- `Wan 2.7`
- `Minimax Hailuo 2.3`
- `Grok Imagine`

## Workflow

### 1. Intake

Extract only the information needed to start:

- Duration and aspect ratio.
- Single video or series.
- Reference images, videos, audio, or sketches.
- Final use: short, ad, music video, drama, product demo, UGC, experiment.
- Required language, dialogue, or audio style.

Ask at most three focused questions if missing details would materially change routing. Otherwise make reasonable defaults and state them.

### 2. Lock Continuity

Create a compact `Continuity Bible` before writing final prompts. Include:

- World, tone, visual grade.
- Characters, wardrobe, signature details.
- Props and motif anchors.
- Time, weather, light direction.
- Space layout and 180-degree line.
- Camera language.
- Audio layer.
- Reference asset handling.
- Negative constraints.
- Ending state / bridge state.

For full schema, read `references/continuity-templates.md`.

### 3. Break Into Shots

Create shot specs with:

- Timecode.
- Purpose.
- Start state and ending state.
- Action.
- Camera.
- Audio.
- Continuity anchors.
- Assigned model and fallback model.

Keep each shot simple enough for the chosen model.

### 4. Route Models

Use the smallest effective route:

- One simple clip: choose one best model.
- Multi-shot sequence: start with Seedance or Kling.
- Hero shot: use Veo or Sora.
- Motion reference: use Kling Motion Control.
- Local repair: use Kling Edit.
- Weak camera impact: use Higgsfield DOP.
- Long or complex project: use full orchestra.

For routing matrix and decision rules, read `references/model-routing.md`.

### 5. Produce Prompt Packet

Return a packet in this order:

1. `Continuity Bible`
2. `Shot Timeline`
3. `Model Assignment`
4. `Model-Ready Prompts`
5. `Tool / Edit / Motion Passes`
6. `Continuity Audit`
7. `Next Action`

Do not produce every model's prompt by default. Produce only the selected route, plus one fallback if useful.

### 6. Audit

Before final output, verify:

- Same character design, wardrobe, and signature detail.
- Light direction and time of day remain legal.
- Space layout and screen direction are consistent.
- Props do not pop in/out.
- Emotional arc progresses logically.
- Prompt does not contain contradictory instructions.
- Model choice matches the shot purpose.
- Repair/fallback path is clear.

## Output Style

Write user-facing explanations in Korean when the user writes Korean. Use clear section headers and concise bullets. Model-ready prompt blocks may be Korean, English, or bilingual depending on the target platform and user preference.

Do not over-orchestrate. If one model is enough, say so and use one model.
