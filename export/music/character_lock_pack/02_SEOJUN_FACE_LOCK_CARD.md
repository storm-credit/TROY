# Seojun Face Lock Card

## 1. character identity

- character:
  - Seojun
- role:
  - listener / counterpart / respectful presence
- face lock purpose:
  - keep Seojun recognizable without letting him own Arin's in-world song visuals

## 2. canonical face direction

- age impression:
  - young Korean university student
- face tone:
  - realistic, calm, grounded
- emotional range:
  - quiet listening
  - careful acceptance
  - distance without coldness
  - moved but not central
- must avoid:
  - possessive romance hero framing
  - melodrama
  - savior energy
  - idol-drama over-polish

## 3. master reference prompt

```text
Realistic cinematic portrait of Seojun, a young Korean university student with a calm grounded presence, quiet attentive eyes, understated campus realism, respectful listening energy, no possessive romance pose, no idol-drama gloss, no logos, no readable text, neutral background, face centered and unobstructed, realistic skin texture, emotionally present but not dominant.
```

## 4. required reference set

- `SEOJUN_REF_01_FRONT_CALM`
  - centered front face, calm expression
- `SEOJUN_REF_02_THREE_QUARTER`
  - 3/4 face angle, same identity
- `SEOJUN_REF_03_LISTENING`
  - quiet listening posture
- `SEOJUN_REF_04_ACCEPTANCE`
  - respectful acceptance without ownership

## 5. tool reference slots

### Midjourney

- character reference slot:
  - `SEOJUN_REF_01_FRONT_CALM`
  - `SEOJUN_REF_02_THREE_QUARTER`
- style reference slot:
  - accepted TROY campus/music-room visual reference
- prompt rule:
  - Seojun must listen without taking over the frame

### Nano Banana / Gemini Image

- input:
  - accepted Seojun still
- preserve:
  - face identity, age, calmness, outfit logic
- change only:
  - gaze direction, distance, local lighting, posture detail

### Imagen

- subject:
  - Seojun as the referenced person
- context:
  - campus / music room / separate night frame
- negative:
  - no possessive romance pose, no melodramatic close-up, no logo/text

### Kling

- source:
  - accepted Seojun still only
- motion:
  - small breath, still listening, minimal eye movement, quiet shift
- negative:
  - no dramatic approach, no ownership gesture, no identity morph

### Higgsfield

- reference:
  - accepted Seojun close-up
- motion:
  - subtle listening reaction
- negative:
  - no K-drama climax acting, no savior framing, no fashion ad drift

## 6. pass signature

- same person across cuts
- emotional presence without dominance
- body language respects Arin's subjectivity
- scene remains grounded and restrained

## 7. reject signature

- Seojun visually owns the song moment
- expression becomes possessive or melodramatic
- face changes across cuts
- romance framing becomes more important than Arin's voice
