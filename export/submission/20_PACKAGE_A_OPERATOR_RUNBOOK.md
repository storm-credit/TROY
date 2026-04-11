# TROY Package A Operator Runbook

## 1. purpose

이 문서는 `package A first wave`를 실제 운영할 때 어떤 문서를 어떤 순서로 써야 하는지 한 장으로 정리한 실행 런북이다.

핵심:

- 준비
- 대상 선정
- 발송
- 회신 기록
- 승급 판단

을 순서대로 흔들리지 않게 진행한다.

## 2. phase 0 - prepare

먼저 확인:

- `00_START_HERE.md`
- `01_EVALUATOR_NOTE.md`
- `showcase_index.md`
- `pilot_showcase/`

운영 문서 확인:

- `11_PACKAGE_A_FIRST_WAVE_MESSAGES.md`
- `17_PACKAGE_A_SLOT_SEND_CHECKLIST.md`
- `15_PACKAGE_A_FOLLOWUP_MESSAGE.md`

## 3. phase 1 - choose contacts

이 순서로 본다:

1. `14_PACKAGE_A_CONTACT_QUALIFICATION_RUBRIC.md`
2. `19_PACKAGE_A_ALIAS_MAPPING_SHEET.md`
3. `13_PACKAGE_A_FIRST_WAVE_EXECUTION_BOARD.md`

목표:

- `A-primary-01`
- `B-primary-01`
- `D-primary-01`

에 실제 alias를 넣는다.

## 4. phase 2 - preflight

발송 직전 확인:

1. `17_PACKAGE_A_SLOT_SEND_CHECKLIST.md`
2. `ops/package_a_preflight_gate_2026_04_11.md`

확인 항목:

- 메시지 버전이 맞는지
- package A 범위를 넘지 않는지
- 질문 수가 3개를 넘지 않는지
- tracker와 session log를 업데이트할 준비가 됐는지

## 5. phase 3 - send

발송 직후 기록:

1. `12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`
2. `18_PACKAGE_A_SEND_SESSION_LOG.md`

해야 할 일:

- 상태를 `planned -> sent`로 변경
- send date 입력
- session id 생성 또는 갱신

## 6. phase 4 - follow-up

day 7 전후:

1. `15_PACKAGE_A_FOLLOWUP_MESSAGE.md`
2. `ops/package_a_day7_review_protocol_2026_04_11.md`

원칙:

- follow-up은 한 번만
- 부담 없는 톤 유지
- 답이 없으면 `no response` 또는 `closed`로 정리

## 7. phase 5 - capture responses

회신이 오면:

1. `16_PACKAGE_A_RESPONSE_CAPTURE_SHEET.md`
2. `12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`

해야 할 일:

- capture tags 기록
- `replied` 상태 반영
- next move suggestion 기록

## 8. phase 6 - promote or hold

판단 문서:

1. `ops/package_a_promotion_rule_2026_04_11.md`
2. `ops/package_a_status_transition_rule_2026_04_11.md`

가능한 결과:

- `package B`
- `package C`
- `hold`
- `closed`
- `secondary lane open`

## 9. minimal live path

최소 실행 경로:

1. `19_PACKAGE_A_ALIAS_MAPPING_SHEET.md`
2. `13_PACKAGE_A_FIRST_WAVE_EXECUTION_BOARD.md`
3. `17_PACKAGE_A_SLOT_SEND_CHECKLIST.md`
4. 실제 발송
5. `12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`
6. `18_PACKAGE_A_SEND_SESSION_LOG.md`
7. 회신 시 `16_PACKAGE_A_RESPONSE_CAPTURE_SHEET.md`

## 10. orchestra note

- 지금 단계의 핵심은 새 자료를 더 만드는 것이 아니라, 이미 만들어 둔 문서를 순서대로 써서 첫 파동을 실제로 시작하는 것이다
- 이 런북은 운영자가 중간에 길을 잃지 않도록 만든 최종 사용 순서표다
