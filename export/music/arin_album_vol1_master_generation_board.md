# Arin Album Vol.1 Master Generation Board

## 1. purpose

아린 1집 12트랙의 현재 generation 진행 상태를 한 장에서 추적한다.

상태값:

- `ready`
- `queued external run`
- `in test`
- `pass`
- `revise`
- `reject`
- `stills ready`
- `mv ready`

## 2. board

| order | episode | title | role | packet set | current status | attempts | next gate | notes |
|---|---|---|---|---|---|---|
| 1 | E054 | 밝은 창 | title-track-class candidate | pilot | queued external run | 0 | external music output | bright room / unspoken shadow / run id E054-A01 |
| 2 | E113 | 나를 잃지 않는 일 | selfhood declaration | pilot | ready | 0 | music test | selfhood over payoff |
| 3 | E050 | 접힌 문장 | private diary | pilot | ready | 0 | music test | diary air / no reveal |
| 4 | E011 | 남은 소리 | debut spark | second pass | ready | 0 | music test | stage intimacy |
| 5 | E030 | 천천히 열어 둔 문 | careful yes | second pass | ready | 0 | music test | warm but cautious |
| 6 | E118 | 같은 말을 하던 저녁 | dignified parting | second pass | ready | 0 | music test | no reunion cue |
| 7 | E014 | 이름 없는 노래 | shy conversation | third pass | ready | 0 | music test | taste intimacy |
| 8 | E022 | 없는 시간에도 | voice-memory | third pass | ready | 0 | music test | ordinary absence |
| 9 | E034 | 유리 뒤의 여름 | withdrawal | third pass | ready | 0 | music test | protected interior |
| 10 | E064 | 흔들리는 운율 | pre-loss instability | fourth pass | ready | 0 | music test | blurred trust |
| 11 | E094 | 끝까지 들은 말 | correction / asking | fourth pass | ready | 0 | music test | ethics over reconciliation |
| 12 | E108 | 정상인 불안 | uncertainty-with-attitude | fourth pass | ready | 0 | music test | livable uncertainty |

## 3. recommended first execution run

1. `E054`
2. `E113`
3. `E050`
4. `E011`
5. `E118`

## 4. execution wave lock

- first wave truth source:
  - `ops/arin_inworld_album_vol1_first_execution_wave.md`
- 운영자는 첫 5곡에 대해 `attempts`와 `next gate`를 반드시 갱신한다
- `next gate` 값 예시:
  - `music test`
  - `revise prompt`
  - `direction note`
  - `stills`
  - `mv test`

## 5. note

- status 변경은 실제 generation test 이후만 갱신한다
- `ready`는 packet complete 상태를 뜻한다
