# external asset update map 2026-04-12

## 1. purpose

- 이 문서는 external asset review 이후 `어느 파일의 어떤 필드`를 갱신해야 하는지 lane별로 고정한 update map이다.
- 목표는 오케스트라가 `action packet`을 받은 뒤 실제 기록 반영까지 같은 세션 안에서 끝내게 만드는 것이다.

## 2. core rule

- review verdict는 `pass / revise / reject`만 먼저 짧게 기록한다.
- 감상보다 `무엇을 유지 / 무엇을 바꿀지`를 먼저 남긴다.
- 같은 asset verdict는 lane별 대상 문서에 같은 세션 안에서 동시에 반영한다.
- audio `pass` 또는 `strong revise` 이전에는 visual/MV를 열지 않는다.

## 3. audio lane update map

### target 1

- file:
  - `export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md`
- update:
  - `status`
  - `verdict`
  - `what worked`
  - `what failed`
  - `next action`
- note:
  - 실제 생성 파일 경로가 있으면 `expected output` 대신 실파일 기준으로 메모한다

### target 2

- file:
  - `export/music/arin_album_vol1_first_execution_wave_sheet.md`
- update:
  - 해당 run id의 `external run status`
  - `verdict`
  - `truth`
  - `voice`
  - `restraint`
  - `memorability`
  - `non-imitation`
  - `keep`
  - `change`
  - `next gate`
- note:
  - 가장 먼저 판단한 핵심 축을 `truth / voice / restraint`에 짧게 적는다

### target 3

- file:
  - `export/music/arin_album_vol1_master_session_log.md`
- update:
  - 새 session block 추가 또는 기존 queued block 확장
  - `verdict`
  - `what worked`
  - `what failed`
  - `next action`
  - `next gate`
  - `output path`
  - `retry due`
  - `still-image follow-up`
  - `MV follow-up`
- note:
  - 이 파일은 operator audit trail 역할을 한다

### target 4

- file:
  - `export/music/arin_album_vol1_master_generation_board.md`
- update:
  - 해당 episode의 `current status`
  - `attempts`
  - `next gate`
  - `notes`
- status rule:
  - `pass` -> `pass`
  - `revise` -> `revise`
  - `reject` -> `reject`
  - `strong revise`면 notes에 `visual stills may open after orchestral confirmation`를 적는다

## 4. visual lane update map

### target 1

- file:
  - `export/visual/mv_character_continuity_board.md`
- update:
  - master table의 `status`
  - `approval_owner`
  - `approved_date`
  - `notes`
- asset tracking template:
  - `model/tool`
  - `prompt_version`
  - `seed_or_job_id`
  - `accepted_still_path`
  - `status`
  - `drift_reason`
  - `replacement_target`
  - `next_action`

### target 2

- file:
  - `export/visual/character_master/arin_master_face.md`
  - `export/visual/character_master/seojun_master_face.md`
- update:
  - `status`
  - `version`
  - `current accepted references`
- note:
  - pass면 accepted reference base name을 기록한다
  - revise/reject면 drift 핵심만 notes 성격으로 짧게 남긴다

### target 3

- file:
  - `export/visual/character_sheets/arin_sheet_v01.md`
  - `export/visual/character_sheets/seojun_sheet_v01.md`
- update:
  - `status`
  - 필요 시 `allowed variation` 또는 `not allowed`에 새 drift signal 추가
- note:
  - reference pass 전에는 여전히 `blocked until master face reference pass`
  - reference set가 충분히 통과하면 `ready for sheet generation`으로 승격 가능

## 5. verdict-specific shortcut

### if pass

- audio:
  - `next gate`를 `stills` 또는 `direction note`로 올린다
- visual:
  - `status`를 `reference pass`로 올린다
  - accepted reference path를 남긴다

### if revise

- audio:
  - `next gate`를 `revise prompt`로 둔다
  - `change` 필드를 한 줄로 분명히 적는다
- visual:
  - `status`를 `reference revise`로 둔다
  - `replacement_target`을 비우지 않는다

### if reject

- audio:
  - `current status`를 `reject`로 바꾸고 재시도 조건을 notes에 적는다
- visual:
  - `status`를 `reference reject` 또는 `drift reject`로 둔다
  - `drift_reason`을 반드시 채운다

## 6. one-line lock

> action packet이 어디를 고칠지 알려 주면, update map은 각 파일 안에서 무엇을 채울지 알려 준다.
