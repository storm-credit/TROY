# NANO_BANANA_EDIT_MODULE

## owner

- parent:
  - 뮤비 감동 지휘
- specialist:
  - Nano Banana / Gemini Image 전문가

## job

- accepted or near-accepted still을 reference로 받아 얼굴/표정/소품/조명을 보정한다
- 생성보다 보존과 수정이 핵심이다

## input slots

- input reference image
- preserve identity instruction
- preserve scene instruction
- change instruction
- local correction target
- negative instruction
- output verdict fields

## output

- repaired still
- alternate framing
- corrected expression/prop/light version

## best use

- face consistency repair
- hand/notebook correction
- expression softening
- lighting continuity
- same character in slightly different frame

## pass gate

- same face identity
- same scene logic
- requested change only
- no unwanted text/logos

## reject if

- identity changes
- age or face structure drifts
- edit overcorrects into beauty/ad style
- emotion no longer matches the cut
