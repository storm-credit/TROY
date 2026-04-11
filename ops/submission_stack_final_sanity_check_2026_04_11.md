# submission stack final sanity check 2026-04-11

## 1. purpose

- 이 문서는 `export/submission/`의 실제 파일 상태를 다시 대조해 현재 submission stack이 말뿐 아니라 실물 기준으로도 외부 전달 가능한지 최종 확인한다
- 목표:
  - top-level entry docs와 showcase bundles가 실제로 존재하는지 확인한다
  - 이미 잠근 `pass / stable state` 판단이 여전히 유효한지 재확인한다
  - 다음 단계가 `확장`이 아니라 `전달`과 `선택`이라는 점을 다시 잠근다

## 2. truth source

- `ops/submission_release_readiness_audit.md`
- `ops/submission_send_scenarios.md`
- `ops/submission_delivery_checklist.md`
- `export/submission/README.md`
- `export/submission/showcase_index.md`
- `export/submission/00_START_HERE.md`
- `export/submission/01_EVALUATOR_NOTE.md`
- `export/submission/너라는운율_submission_draft_v1.md`

## 3. actual inventory check

- top-level folders present:
  - `pilot_showcase`
  - `wave1_showcase`
  - `wave2_showcase`
  - `wave3_showcase`
  - `wave4_showcase`
- top-level entry docs present:
  - `00_START_HERE.md`
  - `01_EVALUATOR_NOTE.md`
  - `02_ALPHA_READER_FEEDBACK_GUIDE.md`
  - `03_FEEDBACK_TEMPLATE.md`
  - `04_FEEDBACK_TRIAGE_NOTE.md`
  - `05_DELIVERY_CHECKLIST.md`
  - `06_SEND_SCENARIOS.md`
  - `07_EXTERNAL_EVALUATION_PACKAGE_PLAN.md`
  - `08_PACKAGE_SEND_REFERENCE.md`
  - `09_OUTREACH_MESSAGE_TEMPLATES.md`
  - `10_ALPHA_READER_TARGET_MATRIX.md`
  - `showcase_index.md`
  - `너라는운율_submission_draft_v1.md`
- full manuscript export:
  - `너라는운율_submission_draft_v1.md`
  - size check:
    - `279265 bytes`

## 4. showcase bundle count check

- `pilot_showcase`:
  - `README.md`
  - `3 packet files`
- `wave1_showcase`:
  - `README.md`
  - `6 packet files`
- `wave2_showcase`:
  - `README.md`
  - `5 packet files`
- `wave3_showcase`:
  - `README.md`
  - `5 packet files`
- `wave4_showcase`:
  - `README.md`
  - `5 packet files`

## 5. consistency judgment

- `export/submission/README.md`에 적힌 현재 패키지 목록과 실제 파일 구성이 어긋나지 않는다
- `submission_release_readiness_audit.md`의 `pass / stable state` 판단을 뒤집을 새 결손은 발견되지 않았다
- `submission_send_scenarios.md`의 scenario A / B / C는 현재 실물 패키지만으로 바로 실행 가능하다

## 6. director judgment

- status:
  - `pass / delivery-ready stable state`
- meaning:
  - 지금 submission stack은 외부 전달 직전 상태로 유지해도 된다
  - 새 wave, 새 packet, 새 cosmetic layer를 더 만드는 것보다 실제 전달 목적을 고르고 보내는 쪽이 맞다

## 7. allowed next moves

1. showcase only 전달
2. full manuscript review 전달
3. alpha reader feedback request 전달
4. 전달 후 feedback triage에 따라 선택적 수정

## 8. must-avoid next moves

- 목적 없이 showcase packet을 더 늘리는 일
- 같은 기능의 안내 문서를 중복 생성하는 일
- 전달 전에 안정 상태를 다시 흔드는 대규모 문장 수정
- 아직 보내지 않았는데도 `wave5`나 새 외부 패키지 라인을 여는 일

## 9. orchestra note

- 현재 오케스트라의 일은 `더 만들기`보다 `무엇을 누구에게 어떤 묶음으로 보낼지`를 선택하는 것이다
- 이후 새 문서가 필요하다면 그것은 production 확장이 아니라 실제 전달 로그나 피드백 intake 쪽이어야 한다
