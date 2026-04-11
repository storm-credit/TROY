# Arin Album Vol.1 Pilot External Audio Intake

## 1. purpose

이 문서는 파일럿 3곡의 실제 외부 music generation 결과를 어디에 두고, 어떤 이름으로 기록할지 정한다.

## 2. local drop location

실제 오디오 파일은 git에 올리지 않는다.

권장 로컬 위치:

- `local/generated_audio/arin_album_vol1_pilot/`

이 위치는 `.gitignore`의 `local/` 규칙 안에 있으므로, mp3/wav/m4a 파일이 실수로 커밋되지 않는다.

## 3. expected file names

| run id | expected audio file |
| --- | --- |
| E054-A01 | `local/generated_audio/arin_album_vol1_pilot/E054-A01.*` |
| E113-A01 | `local/generated_audio/arin_album_vol1_pilot/E113-A01.*` |
| E050-A01 | `local/generated_audio/arin_album_vol1_pilot/E050-A01.*` |

확장자는 외부 생성기가 내보내는 형식에 맞춘다.

- `.mp3`
- `.wav`
- `.m4a`

## 4. after drop

오디오를 넣은 뒤 오케스트라는 아래 순서로 갱신한다.

1. `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
2. `export/music/arin_album_vol1_first_execution_wave_sheet.md`
3. `export/music/arin_album_vol1_master_session_log.md`
4. `export/music/arin_album_vol1_master_generation_board.md`

## 5. verdict rule

- 실제 음원을 듣기 전에는 `pending`을 유지한다
- 파일명만 생겼다고 `pass`로 올리지 않는다
- `pass / revise / reject`는 오케스트라가 실제로 들은 뒤에만 기록한다
