# SUNO_MODULE

## owner

- parent:
  - 음악 감동 지휘
- specialist:
  - Suno 전문가

## job

- locked title and lyrics를 실제 음악 생성 입력으로 변환한다
- 아린 authored voice와 track role을 보존한다

## input

- fixed title
- custom lyrics with section tags
- style prompt
- vocal direction
- arrangement density
- negative guardrails
- first verdict rule

## output

- music attempt
- attempt verdict
- retry direction if needed

## current cards

- `export/music/arin_album_vol1_pilot/suno_copy_cards/01_E054_SUNO_COPY_CARD.md`
- `export/music/arin_album_vol1_pilot/suno_copy_cards/02_E113_SUNO_COPY_CARD.md`
- `export/music/arin_album_vol1_pilot/suno_copy_cards/03_E050_SUNO_COPY_CARD.md`

## pass gate

- Arin voice leads
- no imitation
- no happy-ending/finale drift
- track role is clear

## reject if

- sounds like cover or artist imitation
- male narrator owns the emotion
- romance payoff overtakes Arin subjectivity
- arrangement becomes too large for the episode
