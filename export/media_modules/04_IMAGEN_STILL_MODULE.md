# IMAGEN_STILL_MODULE

## owner

- parent:
  - 뮤비 감동 지휘
- specialist:
  - Imagen 전문가

## job

- clean realistic still과 subject-reference 기반 장면 후보를 만든다
- Midjourney보다 덜 화보적인 base still이 필요할 때 사용한다

## input slots

- subject
- context
- style attributes
- camera / framing
- lighting
- mood
- negative prompt
- subject reference numbers if available

## output

- realistic still candidate
- clean background still
- subject-reference still variant

## best use

- music room base still
- campus walkway base still
- private diary room still
- less stylized visual candidate

## pass gate

- structured prompt attributes are followed
- no brand/campus identifiers
- face identity remains stable if subject reference is used
- scene is clean and usable for I2V

## reject if

- generated face ignores subject reference
- scene becomes generic stock photo
- visible text/logo appears
- mood becomes too melodramatic
