# submission release readiness audit

## 1. purpose

- 이 문서는 현재 `submission-facing stack`이 외부 검토 기준으로 어느 정도까지 닫혔는지 최종 점검한다
- 목표:
  - 원고, showcase, starter note, evaluator note, export map이 실제로 하나의 제출 레이어로 묶여 있는지 확인한다
  - 다음 세션에서 불필요하게 새 산출을 늘리지 않고 안정 상태를 유지할 수 있게 한다

## 2. truth source

- `ops/manuscript_master_handoff_001_120.md`
- `ops/export_stack_series_map.md`
- `ops/wave_selection_discipline_opening.md`
- `ops/presentation_polish_orchestra_opening.md`
- `ops/presentation_polish_pass_001.md`
- `ops/presentation_polish_pass_002.md`
- `ops/presentation_polish_pass_003.md`
- `ops/submission_cosmetic_pass_001.md`
- `ops/submission_cosmetic_pass_002.md`
- `export/submission/README.md`
- `export/submission/00_START_HERE.md`
- `export/submission/01_EVALUATOR_NOTE.md`
- `export/submission/showcase_index.md`
- `export/submission/너라는운율_submission_draft_v1.md`

## 3. gate check

- manuscript lock:
  - `E001-E120` safe-line candidate 상태 유지
- package layer:
  - `pilot + wave1 + wave2 + wave3 + wave4` export copy complete
- showcase layer:
  - `pilot_showcase + wave1_showcase + wave2_showcase + wave3_showcase + wave4_showcase` complete
- entrypoint layer:
  - `README.md`, `00_START_HERE.md`, `01_EVALUATOR_NOTE.md`, `showcase_index.md` complete
- cosmetic layer:
  - presentation / submission cosmetic passes complete
- packet header layer:
  - `no urgent correction needed`

## 4. current judgment

- status:
  - pass / stable state
- meaning:
  - 지금 stack은 외부 검토용으로 이미 충분히 닫혀 있다
  - 새 wave나 새 패킷을 억지로 추가하는 것보다 현재 상태를 유지하는 쪽이 이득이 크다

## 5. allowed next moves

1. 실제 외부 전달
2. 알파리더 피드백 수집 후 선택적 수정
3. 필요 시 `submission filename softening` 정도의 저위험 cosmetic pass

## 6. must-avoid next moves

- 목적 없는 `wave5` 확장
- 기존 showcase 기능과 겹치는 packet 추가
- submission 표면을 과하게 광고문처럼 바꾸는 일
- 원고를 다시 흔드는 대규모 cosmetic rewrite

## 7. director note

- 현재 프로젝트는 `계속 뭔가를 더 만들수록 좋아지는 단계`를 이미 지나갔다
- 오케스트라는 이제 `확장`보다 `선택`, `유지`, `전달 가능성`을 우선해야 한다
