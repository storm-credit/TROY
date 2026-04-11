# tool-specific prompt optimization matrix

## 1. purpose

- 이 문서는 공통 visual/MV card를 각 툴의 입력 방식에 맞춰 분화하기 위한 기준표다
- 공통 프롬프트 하나를 모든 툴에 그대로 넣지 않는다
- 각 툴 docs와 실제 강점에 맞게 prompt slots를 나눈다

## 2. source references

- Midjourney docs:
  - `https://docs.midjourney.com/`
- Gemini image generation / Nano Banana docs:
  - `https://ai.google.dev/gemini-api/docs/image-generation`
- Vertex AI Imagen prompt guide:
  - `https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide`
- Kling video model guide:
  - `https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide`
- Higgsfield references:
  - `https://higgsfield.ai/`

## 3. Suno optimized structure

- fixed title
- custom lyrics with section tags
- style prompt
- vocal direction
- arrangement density
- negative guardrails
- retry ladder
- first verdict rule

Current output:

- `export/music/arin_album_vol1_pilot/suno_copy_cards/`

## 4. Midjourney optimized structure

- subject:
  - who / where / what action
- scene:
  - place, light, season, object anchors
- style:
  - cinematic realism / live-action still / restrained campus tone
- composition:
  - shot size, lens feeling, frame priority
- continuity:
  - character reference slot
  - style reference slot
- parameters:
  - aspect ratio slot
  - style/raw slot
  - character reference slot
  - style reference slot
  - negative `--no` slot
- reject:
  - idol gloss
  - readable text
  - real campus identifiers
  - final-love closure coding

Use for:

- key visual
- hero still
- style exploration
- visual identity test

## 5. Nano Banana / Gemini Image optimized structure

- input reference:
  - accepted still or character reference image
- edit instruction:
  - what must change
- preservation instruction:
  - face, outfit, place, prop, light that must remain
- local correction:
  - expression, hand, notebook, window light, distance between characters
- negative:
  - do not change identity
  - do not add text/logos
  - do not make scene melodramatic
- output check:
  - same person
  - same scene logic
  - emotion adjusted without canon drift

Use for:

- character consistency repair
- expression correction
- prop/light continuity
- alternate framing from an accepted still

## 6. Imagen optimized structure

- subject
- context
- style attributes
- camera/framing
- lighting
- mood
- exclusions
- safety/brand guardrails

Use for:

- clean still generation
- realistic background or room still
- less stylized visual base
- poster-safe or scene-safe image variants

## 7. Kling optimized structure

- source image:
  - accepted still path
- motion objective:
  - what emotion moves across the shot
- subject consistency:
  - keep face, outfit, body position, prop logic
- camera motion:
  - slow dolly, micro handheld, restrained push-in, hold, fade
- duration:
  - short test block
- start/end frame:
  - frame intention
- negative:
  - no fast transitions
  - no lip-sync exaggeration
  - no melodrama
  - no identity drift

Use for:

- image-to-video
- MV block movement
- camera rhythm test

## 8. Higgsfield optimized structure

- reference:
  - accepted character or hero still
- motion type:
  - subtle performance / fashion-adjacent movement / emotional close-up
- face priority:
  - keep identity and expression continuity
- cinematic direction:
  - camera, light, atmosphere
- styling guardrail:
  - no idol ad drift
  - no luxury campaign drift
  - no brand logo
- output check:
  - emotion stays story-first
  - performance does not overpower Arin voice

Use for:

- character-centric motion
- expression/close-up tests
- short cinematic performance shot

## 9. orchestration rule

- Midjourney / Imagen can generate first still candidates
- Nano Banana / Gemini Image can repair or adapt accepted stills
- Kling moves accepted stills into MV blocks
- Higgsfield tests character-centric motion only after the still identity is stable
- MV director decides cut order after tool outputs exist
- Orchestra decides final pass
- face lock rule:
  - `ops/character_face_lock_harness.md` overrides tool convenience
  - no accepted face reference means no production MV

## 10. next deliverable

- Create pilot tool-specific prompt folders:
  - `midjourney_cards/`
  - `nano_banana_cards/`
  - `imagen_cards/`
  - `kling_cards/`
  - `higgsfield_cards/`
- Character lock pack:
  - `export/music/character_lock_pack/`
