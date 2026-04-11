# KLING_I2V_MODULE

## owner

- parent:
  - 뮤비 감동 지휘
- specialist:
  - Kling 전문가

## job

- accepted still을 짧은 image-to-video block으로 움직인다
- 얼굴/장면 일관성을 유지하며 4-6초 단위로 테스트한다

## input slots

- accepted source still
- subject consistency instruction
- camera motion
- motion objective
- duration
- start frame intention
- end frame intention
- negative motion guardrails

## output

- 4-6 sec I2V block
- motion verdict

## best use

- slow dolly
- restrained push-in
- subtle room motion
- light and curtain movement
- small listening reaction

## pass gate

- no face morph
- no identity drift
- camera motion supports the song
- clip can be assembled into MV block

## reject if

- face changes during motion
- hands/body become uncanny
- motion becomes melodramatic
- transition invents wrong story emotion
