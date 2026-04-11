# Arin Face Lock Card

## 1. character identity

- character:
  - Arin
- role:
  - in-world singer / emotional subject / creative author
- face lock purpose:
  - keep Arin recognizable across music room, campus, and private diary visuals

## 2. canonical face direction

- age impression:
  - young Korean university student
- face tone:
  - realistic, natural, not idol-glossy
- emotional range:
  - luminous but restrained
  - hidden thought
  - quiet selfhood
  - private interiority
- must avoid:
  - glamorous idol styling
  - passive romance-object framing
  - overacted crying confession
  - advertising campaign polish

## 3. master reference prompt

```text
Realistic cinematic portrait of Arin, a young Korean university student and in-world singer, natural face, clear eyes, soft but self-possessed expression, understated campus realism, no idol styling, no luxury fashion polish, no logos, no readable text, neutral background, face centered and unobstructed, realistic skin texture, emotionally luminous but restrained.
```

## 4. required reference set

- `ARIN_REF_01_FRONT_CALM`
  - centered front face, calm expression
- `ARIN_REF_02_THREE_QUARTER`
  - 3/4 face angle, same identity
- `ARIN_REF_03_MUSIC_ROOM_LIGHT`
  - warm music-room light, creative subject
- `ARIN_REF_04_CAMPUS_SELFHOOD`
  - open campus air, self-possessed stance
- `ARIN_REF_05_PRIVATE_DIARY`
  - quiet night room, protected interiority

## 5. tool reference slots

### Midjourney

- character reference slot:
  - `ARIN_REF_01_FRONT_CALM`
  - `ARIN_REF_02_THREE_QUARTER`
- style reference slot:
  - accepted TROY campus/music-room visual reference
- prompt rule:
  - Arin must remain the creative subject, not a decorative romance figure

### Nano Banana / Gemini Image

- input:
  - accepted Arin still
- preserve:
  - face identity, age, hair family, outfit logic, emotional restraint
- change only:
  - expression, hand position, framing, local light, prop placement

### Imagen

- subject:
  - Arin as the referenced person
- context:
  - Korean campus / music room / private room
- negative:
  - no text, no logo, no idol gloss, no melodramatic romance pose

### Kling

- source:
  - accepted Arin still only
- motion:
  - restrained breath, slow turn, gentle push-in, tiny hand movement
- negative:
  - no face morph, no lip-sync exaggeration, no glamour performance drift

### Higgsfield

- reference:
  - accepted Arin close-up
- motion:
  - subtle expression change or small performance motion
- negative:
  - no fashion campaign, no idol ad energy, no identity drift

## 6. pass signature

- same person across cuts
- Arin remains subject of the frame
- face is natural and story-grounded
- emotional tone matches `bright / selfhood / diary` track role

## 7. reject signature

- face changes into another person
- beauty polish replaces character identity
- expression becomes too melodramatic
- Seojun or romance framing steals Arin's subject position
