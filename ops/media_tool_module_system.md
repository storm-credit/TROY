# media tool module system

## 1. purpose

- 이 문서는 TROY media production에서 각 생성 툴을 모듈로 구성하는 운영 체계다
- 목표:
  - 오케스트라가 상황에 맞는 tool module을 선택한다
  - 툴별 docs / 강점 / 약점 / reject rule을 분리한다
  - 공통 프롬프트 하나를 모든 툴에 그대로 넣는 실수를 막는다

## 2. module hierarchy

```text
오케스트라 총괄
  |
  |-- 음악 감동 지휘
  |     |-- SUNO_MODULE
  |
  |-- 뮤비 감동 지휘
        |-- MIDJOURNEY_STILL_MODULE
        |-- NANO_BANANA_EDIT_MODULE
        |-- IMAGEN_STILL_MODULE
        |-- KLING_I2V_MODULE
        |-- HIGGSFIELD_MOTION_MODULE
        |-- VEO_CINEMATIC_VIDEO_MODULE
        |-- SORA_STORYBOARD_VIDEO_MODULE
```

## 3. module registry

| module | primary job | input | output | hard gate |
|---|---|---|---|---|
| SUNO_MODULE | in-world song generation | locked title + lyrics + style prompt | music attempt | no visual before music pass |
| MIDJOURNEY_STILL_MODULE | hero/key visual and character/style exploration | character refs + still prompt | still candidates | no production MV from MJ alone |
| NANO_BANANA_EDIT_MODULE | face/expression/prop correction | accepted or candidate image + edit instruction | repaired still | preserve identity |
| IMAGEN_STILL_MODULE | clean realistic stills and subject-reference variants | structured prompt + optional subject reference | still candidates | no identity drift |
| KLING_I2V_MODULE | reference still to short motion | accepted still + motion prompt | 4-6 sec I2V block | accepted still required |
| HIGGSFIELD_MOTION_MODULE | character-centric close-up motion | accepted face/still + motion brief | close-up motion test | no ad/idol drift |
| VEO_CINEMATIC_VIDEO_MODULE | cinematic short video / reference-guided clip | text or reference image + shot prompt | cinematic clip | face lock check required |
| SORA_STORYBOARD_VIDEO_MODULE | storyboard shot / recut / remix style video test | shot storyboard + optional first frame | storyboard clip | shot-level continuity check required |

## 4. routing rule

- 음악 전:
  - only `SUNO_MODULE`
- 음악 pass 후:
  - still modules open
- character reference pass 후:
  - Midjourney / Imagen / Nano Banana modules open
- accepted still locked 후:
  - Kling / Higgsfield / Veo / Sora modules open
- no accepted still:
  - no production MV

## 5. module selection guide

- 얼굴/캐릭터 유지:
  - `NANO_BANANA_EDIT_MODULE`
  - `IMAGEN_STILL_MODULE` with subject reference
  - `KLING_I2V_MODULE` with accepted still
- 키비주얼 미감:
  - `MIDJOURNEY_STILL_MODULE`
- 깨끗한 장면 still:
  - `IMAGEN_STILL_MODULE`
- 짧고 안정적인 I2V:
  - `KLING_I2V_MODULE`
- 인물 클로즈업 감정:
  - `HIGGSFIELD_MOTION_MODULE`
- 영화적 카메라/분위기:
  - `VEO_CINEMATIC_VIDEO_MODULE`
- storyboard 기반 컷 연결:
  - `SORA_STORYBOARD_VIDEO_MODULE`

## 6. common pass/revise/reject

### pass

- canon and track emotion preserved
- face identity stable
- tool output fits its assigned job
- no forbidden pattern drift

### revise

- tool output is close but needs parameter, reference, or prompt-slot correction
- identity is near-stable and repairable
- motion/camera is too strong but can be reduced

### reject

- face reads as another person
- tool output changes story emotion
- Arin becomes objectified or Seojun owns the frame
- idol/ad gloss overwhelms story realism
- final-love / reunion / happy-ending coding appears

## 7. module card location

- `export/media_modules/01_SUNO_MODULE.md`
- `export/media_modules/02_MIDJOURNEY_STILL_MODULE.md`
- `export/media_modules/03_NANO_BANANA_EDIT_MODULE.md`
- `export/media_modules/04_IMAGEN_STILL_MODULE.md`
- `export/media_modules/05_KLING_I2V_MODULE.md`
- `export/media_modules/06_HIGGSFIELD_MOTION_MODULE.md`
- `export/media_modules/07_VEO_CINEMATIC_VIDEO_MODULE.md`
- `export/media_modules/08_SORA_STORYBOARD_VIDEO_MODULE.md`
- `export/media_modules/09_MODULE_ROUTING_BOARD.md`

## 8. source references

- Midjourney:
  - `https://docs.midjourney.com/`
- Gemini / Nano Banana:
  - `https://ai.google.dev/gemini-api/docs/image-generation`
- Vertex AI Imagen:
  - `https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/`
- Kling:
  - `https://app.klingai.com/`
- Higgsfield:
  - `https://higgsfield.ai/`
- Veo:
  - `https://ai.google.dev/gemini-api/docs/video`
  - `https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview`
- Sora:
  - `https://platform.openai.com/docs/guides/video-generation`
  - `https://help.openai.com/en/articles/9957612-generating-videos-on-sora`

## 9. next action

- 파일럿 3곡에 대해 module-specific cards를 생성한다
- 시작 순서:
  1. Arin / Seojun master face reference
  2. E054 priority still module split
  3. E113 priority still module split
  4. E050 priority still module split
