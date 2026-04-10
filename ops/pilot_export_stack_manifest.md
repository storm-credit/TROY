# pilot export stack manifest

## 1. purpose

- 이 문서는 `package pilot triplet`의 실제 export 묶음 단위를 고정한다
- 목표:
  - 각 pilot packet의 source set을 명시한다
  - export naming을 통일한다
  - 다음 단계에서 파일 생성 시 해석 비용을 줄인다

## 2. truth source

- `ops/pilot_export_stack_readiness.md`
- `ops/downstream_package_orchestra_opening.md`
- `ops/package_readiness_audit_pilot_triplet.md`

## 3. packet manifest

### E118 ending flagship

- export label:
  - `TROY_PILOT_ENDING_E118`
- emotional role:
  - approval without reunion
- source set:
  - `ops/E118_episode_harness.md`
  - `ops/final_song_brief.md`
  - `ops/E118_visual_cut_list.md`
- naming note:
  - `ops/final_song_brief.md`는 export stack 안에서 `E118 ending song brief` alias를 사용한다
- export note:
  - 가장 먼저 뽑는 기준 packet
  - tone calibration reference로 사용

### E011 first-performance flagship

- export label:
  - `TROY_PILOT_OPENING_STAGE_E011`
- emotional role:
  - public foregrounding without idolization
- source set:
  - `ops/E011_episode_harness.md`
  - `ops/E011_song_brief.md`
  - `ops/E011_visual_cut_list.md`
- naming note:
  - opening packet이라도 romance overstatement 금지
- export note:
  - human-scale performance rule reference로 사용

### E054 summer-peak flagship

- export label:
  - `TROY_PILOT_PEAK_LIGHT_E054`
- emotional role:
  - peak brightness with faint shadow
- source set:
  - `ops/E054_episode_harness.md`
  - `ops/E054_song_brief.md`
  - `ops/E054_visual_cut_list.md`
- naming note:
  - brightest packet이지만 final-closure language 금지
- export note:
  - brightness-shadow balance reference로 사용

## 4. recommended export order

1. `TROY_PILOT_ENDING_E118`
2. `TROY_PILOT_OPENING_STAGE_E011`
3. `TROY_PILOT_PEAK_LIGHT_E054`

## 5. packet contents rule

- each packet contains:
  - one episode harness
  - one song brief source
  - one visual cut list
- packet must not include:
  - raw manuscript full text
  - unrelated canon docs
  - governance logs or git-facing notes

## 6. naming and boundary

- packet labels are export-facing convenience names
- repo truth source filenames remain unchanged
- export labels must never overwrite:
  - `ops/E011_episode_harness.md`
  - `ops/E054_episode_harness.md`
  - `ops/E118_episode_harness.md`
  - existing song brief or visual cut list files

## 7. release check

- `E118` must keep `approval + separation`
- `E011` must keep `foregrounding + human scale`
- `E054` must keep `brightness + shadow`
- if any export packet drifts hotter than manuscript truth, reject it before release

## 8. director verdict

- manifest status:
  - approved
- current gain:
  - readiness 문서가 `왜 이 셋인가`를 잠갔다면,
    manifest는 `이 셋을 실제로 어떻게 묶는가`를 잠근다
