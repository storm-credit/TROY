# arin in-world album vol1 generation test gate

## 1. purpose

- 이 문서는 파일럿 3곡의 실제 generation test 기준을 잠근다

## 2. truth source

- `ops/arin_inworld_album_vol1_pilot_lyric_lock.md`
- `ops/E054_inworld_suno_final.md`
- `ops/E113_inworld_suno_final.md`
- `ops/E050_inworld_suno_final.md`
- `ops/arin_inworld_album_vol1_producer_stack.md`

## 3. pilot queue

1. `E054 / 밝은 창`
2. `E113 / 나를 잃지 않는 일`
3. `E050 / 접힌 문장`

## 4. pass rule

- 아린이 실제로 부를 수 있는 톤인가
- 가사가 production 위에 묻히지 않는가
- 곡의 감정 기능이 한 줄로 선명한가
- 실존 유명곡 모사처럼 들리지 않는가

## 5. reject rule

- 해피엔드 과열
- 과한 belting / show vocal
- 서준 시점 해설화
- thriller / fantasy / miracle drift

## 6. next after pass

1. accepted generation direction note 기록
2. 필요 시 prompt 미세 조정
3. second-pass `E011 / E030 / E118`
