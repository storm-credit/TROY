# arin in-world album vol1 full generation runway

## 1. purpose

- 이 문서는 아린 1집 12트랙 전체의 실제 generation test 순서와 운영 규칙을 잠근다
- 목표:
  - 이미 잠긴 `generation-ready packet`을 어떤 순서로 실제 생성할지 정한다
  - pass / revise / reject 이후 다음 행동이 흔들리지 않게 한다

## 2. truth source

- `ops/arin_inworld_album_vol1_tracklist_12.md`
- `ops/arin_inworld_album_vol1_production_pack.md`
- `ops/music_generation_review_rubric.md`
- `export/music/arin_album_vol1_pilot/`
- `export/music/arin_album_vol1_second_pass/`
- `export/music/arin_album_vol1_third_pass/`
- `export/music/arin_album_vol1_fourth_pass/`

## 3. full queue

### phase 1 - pilot validation

1. `E054 / 밝은 창`
2. `E113 / 나를 잃지 않는 일`
3. `E050 / 접힌 문장`

목표:

- title-track-class brightness 검증
- selfhood declaration 검증
- private diary depth 검증

### phase 2 - side spine expansion

4. `E011 / 남은 소리`
5. `E030 / 천천히 열어 둔 문`
6. `E118 / 같은 말을 하던 저녁`

목표:

- 공연 시작점
- careful yes
- dignified parting

### phase 3 - side A intimacy and withdrawal

7. `E014 / 이름 없는 노래`
8. `E022 / 없는 시간에도`
9. `E034 / 유리 뒤의 여름`

목표:

- taste intimacy
- voice-memory absence
- protected interior withdrawal

### phase 4 - late instability / correction / normal uncertainty

10. `E064 / 흔들리는 운율`
11. `E094 / 끝까지 들은 말`
12. `E108 / 정상인 불안`

목표:

- blur instability
- correction ethics
- uncertainty that remains livable

## 4. run rule

- 한 번에 전곡을 만들지 않는다
- 각 트랙은 아래 순서를 따른다

1. music generation
2. rubric verdict
3. accepted direction note
4. still-image generation
5. short MV test cut

- 다음 phase는 직전 phase에서 최소 1곡 이상 `pass`가 나와야 연다

## 5. verdict rule

### pass

- 곡 역할이 선명하다
- 아린 authored voice가 살아 있다
- 실존곡 모사 감이 없다
- 다음 레이어로 이동 가능

### revise

- core는 맞지만 prompt wording 또는 arrangement wording 미세 조정 필요
- 같은 트랙을 1-2회까지만 추가 시도

### reject

- 역할 자체가 어긋난다
- 다른 track identity처럼 들린다
- 해피엔드 과열 / miracle drift / 남성 해설화 / thriller drift 발생

## 6. stop conditions

- 한 트랙에서 3회 연속 reject면 다음 트랙으로 넘어간다
- 같은 producer stack에서 2곡 이상이 비슷하게 흐려지면 다음 phase로 넘어가지 않고 stack wording부터 재조정한다
- one-pass 안에서 `title-track`, `private diary`, `ending dignity` 축이 모두 fail이면 전체 앨범 generation wording을 재검토한다

## 7. next after album pass

1. accepted direction note 작성
2. 대표 3곡 우선 still generation
3. 30-45 sec MV test cut
4. volume 1 shortlist / sequencing note 작성

## 8. director note

- 지금부터는 설계가 아니라 실제 생성 운영이다
- `많이 만드는 것`보다 `맞게 채택하는 것`이 우선이다
- bigger, brighter, sadder는 정답이 아니다
- 아린 authored voice와 track temperature separation이 최우선이다
