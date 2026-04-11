# MV Character Continuity Board

## 1. purpose

- 이 보드는 TROY MV 제작에서 아린/서준 얼굴과 캐릭터 동일성 상태를 추적한다
- accepted still locked 없이는 I2V 또는 MV production으로 이동하지 않는다

## 2. status values

- `face-lock pending`
- `reference set ready`
- `reference pass`
- `reference revise`
- `reference reject`
- `sheet locked`
- `test still generated`
- `still pass`
- `still revise`
- `accepted still locked`
- `drift reject`
- `i2v test`
- `motion pass`
- `motion revise`
- `motion reject`
- `production approved`

## 3. master table

| character | face_lock_version | reference_set_path | sheet_path | status | approval_owner | approved_date | notes |
|---|---|---|---|---|---|---|---|
| Arin | v01 pending | `export/visual/character_master/arin_master_face.md` | `export/visual/character_sheets/arin_sheet_v01.md` | face-lock pending | orchestra |  | needs master reference |
| Seojun | v01 pending | `export/visual/character_master/seojun_master_face.md` | `export/visual/character_sheets/seojun_sheet_v01.md` | face-lock pending | orchestra |  | needs master reference |

## 4. asset tracking template

| episode_id | scene_id | still_id | character | source_packet | model/tool | prompt_version | seed_or_job_id | accepted_still_path | status | drift_reason | replacement_target | next_action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E054 | cut08 | E054_ARIN_CUT08 | Arin | `export/music/arin_album_vol1_pilot/visual_mv_copy_cards/01_E054_VISUAL_MV_COPY_CARD.md` |  | v01 |  |  | face-lock pending |  |  | create master face first |
| E113 | cut06 | E113_ARIN_CUT06 | Arin | `export/music/arin_album_vol1_pilot/visual_mv_copy_cards/02_E113_VISUAL_MV_COPY_CARD.md` |  | v01 |  |  | face-lock pending |  |  | create master face first |
| E050 | cut05 | E050_ARIN_CUT05 | Arin | `export/music/arin_album_vol1_pilot/visual_mv_copy_cards/03_E050_VISUAL_MV_COPY_CARD.md` |  | v01 |  |  | face-lock pending |  |  | create master face first |

## 5. hard gate

- no accepted still locked:
  - no Kling I2V
  - no Higgsfield motion
  - no final MV assembly
- drift reject:
  - must include `drift_reason`
  - must include `replacement_target`
- production approved:
  - requires face stability
  - requires emotional role pass
  - requires no canon or dignity drift
