# Tool Reference Routing Card

## 1. purpose

- 이 문서는 얼굴 유지가 필요한 MV 제작에서 어떤 툴을 어떤 순서로 쓸지 고정한다
- 핵심:
  - first still은 생성해도 되지만, 영상은 accepted still만 사용한다

## 2. routing map

| phase | owner | tool | input | output | pass gate |
|---|---|---|---|---|---|
| master face candidate | Midjourney / Imagen | image generation | character face prompt + reference slots | face candidate | reference quality gate |
| face repair | Nano Banana / Gemini Image | image edit | candidate + correction instruction | repaired reference | same identity |
| character sheet | Midjourney / Imagen + Nano Banana | image generation/edit | accepted master face | front / 3/4 / expression set | sheet consistency |
| priority still | Midjourney / Imagen | still generation | character references + visual card | priority stills | face drift verdict |
| still repair | Nano Banana / Gemini Image | image edit | priority still | corrected still | same face, same scene |
| MV block | Kling | image-to-video | accepted still | 4-6 sec motion | no face morph |
| close-up motion | Higgsfield | character motion | accepted close-up | close-up test | no ad/idol drift |

## 3. hard rules

- no full MV from text only
- no I2V from unapproved still
- no character sheet from unstable face candidate
- no final cut from a clip with face morph
- no scene expansion if priority stills fail identity check

## 4. file naming

- references:
  - `ARIN_REF_01_FRONT_CALM`
  - `ARIN_REF_02_THREE_QUARTER`
  - `SEOJUN_REF_01_FRONT_CALM`
  - `SEOJUN_REF_02_THREE_QUARTER`
- accepted still:
  - `E054_ARIN_CUT08_ACCEPTED_STILL`
  - `E113_ARIN_CUT06_ACCEPTED_STILL`
  - `E050_ARIN_CUT05_ACCEPTED_STILL`
- MV block:
  - `E054_BLOCK02_ARIN_LEADS`
  - `E113_BLOCK02_SELFHOOD_LANDS`
  - `E050_BLOCK02_PRIVATE_PAUSE`

## 5. per-tool retry policy

- Midjourney:
  - revise reference weight / negative slot / aspect ratio
- Nano Banana / Gemini Image:
  - revise change instruction and preservation instruction
- Imagen:
  - revise structured attributes and negative prompt
- Kling:
  - shorten duration, reduce camera motion, strengthen subject consistency
- Higgsfield:
  - reduce performance intensity, strengthen face preservation, avoid ad gloss

## 6. orchestra verdict

- `pass`:
  - identity stable, emotional role correct, safe to move next
- `revise`:
  - identity close but correctable
- `reject`:
  - identity unstable or emotional/canon drift
