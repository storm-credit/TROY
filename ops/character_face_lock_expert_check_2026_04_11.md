# character face lock expert check 2026-04-11

## 1. purpose

- 이 문서는 아린/서준 얼굴 캐릭터 유지 하네스에 대한 전문가 점검 로그와 오케스트라 결정을 기록한다
- 원고 수정은 제외하고 media 운영 레이어만 다룬다

## 2. expert logs

### Arendt

- 아린/서준은 각자 approved face reference set만 사용해야 한다
- 출력물이 같은 인물로 보이는가를 pass gate에 넣고, 닮은 배우풍 또는 랜덤 K-drama face로 흐르면 reject한다
- 아린은 뮤즈/상실 대상/남성 시점 보상 이미지가 아니라 자기 행동 프레임을 유지해야 한다
- 가까운 장면에서도 손, 거리, 시선, 동의 맥락을 보존해야 한다
- 과한 아이돌 보정, 성적 대상화, 나이 어려 보이는 연출, 비현실적 미화는 reject 기준에 넣는다

### Peirce

- 검증 루프에는 `identity lock`, `continuity drift`, `tool-specific verdict`, `shot-to-shot consistency`, `reject triggers`가 필요하다
- Midjourney / Nano Banana / Imagen / Kling / Higgsfield별로 `pass / revise / reject`, 실패 원인, 재시도 prompt 수정점을 기록해야 한다
- 아이돌화, 성숙화, 서구화, 과한 미화, 다른 사람처럼 보임, 로맨틱 과열은 즉시 reject한다

### Russell

- `master face -> character sheet -> still -> I2V` 순서가 명확해야 한다
- `export/visual/character_master/`, `export/visual/character_sheets/`, `export/visual/stills/`, `export/visual/i2v/` 구조를 별도로 둔다
- `export/visual/mv_character_continuity_board.md` 하나로 상태를 추적한다

### Linnaeus

- 상태값:
  - `face-lock pending`
  - `reference set ready`
  - `test still generated`
  - `accepted still locked`
  - `drift reject`
  - `revision needed`
  - `production approved`
- 필드:
  - `character`
  - `face_lock_version`
  - `reference_set_path`
  - `accepted_still_path`
  - `drift_reason`
  - `approval_owner`
  - `approved_date`
  - `episode_id`
  - `scene_id`
  - `still_id`
  - `prompt_version`
  - `model/tool`
  - `seed_or_job_id`
  - `source_packet`

## 3. orchestra decisions

- 채택:
  - accepted still locked 없이는 MV production 금지
  - drift reject 시 `drift_reason + replacement target` 기록 필수
  - `export/visual/mv_character_continuity_board.md` 생성
  - character master / character sheet / still / I2V 폴더 구조 생성
  - 아린 주체성, 관계 윤리, 아이돌화 방지를 face lock gate에 포함
- 유지:
  - 텍스트 프롬프트만으로 얼굴 유지 금지
  - reference image 기반 생성/보정/영상화 원칙 유지

## 4. verdict

- 상태:
  - `face lock harness ready`
- 다음 실무:
  - 아린/서준 master face reference 후보 생성
  - reference set pass 이후 character sheet 생성
