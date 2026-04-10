# arin in-world album vol1 generation bundle export

## 1. purpose

- 이 문서는 아린 1집 파일럿 3곡을 실제 generation-ready bundle로 export한 결과를 잠근다
- 목표:
  - 제작자가 `ops`를 뒤지지 않고 `export/music/arin_album_vol1_pilot/`에서 바로 작업할 수 있게 만든다

## 2. truth source

- `ops/arin_inworld_album_vol1_generation_test_gate.md`
- `ops/E054_inworld_suno_final.md`
- `ops/E113_inworld_suno_final.md`
- `ops/E050_inworld_suno_final.md`
- `ops/E054_inworld_song_final_lock.md`
- `ops/E113_inworld_song_final_lock.md`
- `ops/E050_inworld_song_final_lock.md`

## 3. output

- `export/music/README.md`
- `export/music/arin_album_vol1_pilot/README.md`
- `export/music/arin_album_vol1_pilot/01_E054_generation_card.md`
- `export/music/arin_album_vol1_pilot/02_E113_generation_card.md`
- `export/music/arin_album_vol1_pilot/03_E050_generation_card.md`
- `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`

## 4. judgment

- status:
  - pass
- note:
  - 파일럿 3곡은 이제 `title / lyrics / producer stack / final prompt / reject rule`을 한 장씩 보고 바로 생성 테스트 가능하다

## 5. next order

1. 실제 generation attempt 기록
2. accepted direction / failed direction 메모
3. second-pass `E011 / E030 / E118`
