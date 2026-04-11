# Module Routing Board

## 1. purpose

- 이 보드는 오케스트라가 어떤 단계에서 어떤 module을 열 수 있는지 추적한다

## 2. current global state

| lane | module | status | opens when | current note |
|---|---|---|---|---|
| music | SUNO_MODULE | ready | always, for pilot music | pilot copy cards ready |
| still | MIDJOURNEY_STILL_MODULE | blocked | character reference pass | needs face lock |
| edit | NANO_BANANA_EDIT_MODULE | blocked | candidate/accepted still exists | used for repair |
| still | IMAGEN_STILL_MODULE | blocked | character reference pass | clean still candidate |
| video | KLING_I2V_MODULE | blocked | accepted still locked | no text-only MV |
| video | HIGGSFIELD_MOTION_MODULE | blocked | accepted close-up still locked | close-up only |
| video | VEO_CINEMATIC_VIDEO_MODULE | blocked | accepted still or storyboard pass | cinematic candidate |
| video | SORA_STORYBOARD_VIDEO_MODULE | blocked | accepted still or storyboard pass | storyboard candidate |
| ops | EXTERNAL_ASSET_INTAKE_MODULE | ready | whenever queue or expected asset list exists | dashboard / intake / worksheet routing |

## 3. pilot sequence

1. `SUNO_MODULE`:
   - E054 / E113 / E050
2. `EXTERNAL_ASSET_INTAKE_MODULE`:
   - check audio arrival, image arrival, and dashboard state
3. `MIDJOURNEY_STILL_MODULE` or `IMAGEN_STILL_MODULE`:
   - Arin / Seojun master face reference candidates
4. `NANO_BANANA_EDIT_MODULE`:
   - repair candidate references if close
5. `MIDJOURNEY_STILL_MODULE` / `IMAGEN_STILL_MODULE`:
   - priority stills
6. `NANO_BANANA_EDIT_MODULE`:
   - repair face/expression/prop drift
7. `EXTERNAL_ASSET_INTAKE_MODULE`:
   - verify accepted still or verdict-ready asset before opening next stage
8. `KLING_I2V_MODULE` / `HIGGSFIELD_MOTION_MODULE` / `VEO_CINEMATIC_VIDEO_MODULE` / `SORA_STORYBOARD_VIDEO_MODULE`:
   - short motion test only after accepted still lock

## 4. hard stop

- no accepted still locked:
  - do not open video modules for production
- no music pass:
  - do not open visual production for the track
- face drift reject:
  - route back to still/edit modules
