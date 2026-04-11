# package A first-wave send log opening 2026-04-11

## 1. purpose

- 이 문서는 `package A first wave`를 실제 발송 단계로 옮길 때 필요한 운영 기록 레이어를 연다
- 목표:
  - 누구에게 보냈는지
  - 어떤 reader type으로 분류했는지
  - 어떤 반응이 왔는지
  - 다음 분기를 `package B`, `package C`, `hold` 중 어디로 둘지
  를 흔들리지 않게 기록한다

## 2. truth source

- `ops/external_delivery_first_wave_selection_2026_04_11.md`
- `ops/submission_stack_final_sanity_check_2026_04_11.md`
- `export/submission/11_PACKAGE_A_FIRST_WAVE_MESSAGES.md`
- `export/submission/10_ALPHA_READER_TARGET_MATRIX.md`

## 3. locked default

- current wave:
  - `package A first wave`
- bundle:
  - `00_START_HERE.md`
  - `01_EVALUATOR_NOTE.md`
  - `showcase_index.md`
  - `pilot_showcase/`
- target mix:
  - `type A`
  - `type B`
  - `type D`

## 4. required tracking fields

- contact id or label
- reader type
- send date
- sent bundle
- message version used
- response status
- first reaction summary
- next move
- follow-up due

## 5. allowed response status

- `planned`
- `sent`
- `opened`
- `replied`
- `declined`
- `no response`
- `moved to package B`
- `moved to package C`
- `closed`

## 6. next-move rule

- choose `hold` when:
  - 아직 답변이 없거나 샘플 첫반응만 더 기다려야 할 때
- choose `package B` when:
  - 전체 원고를 읽을 의사가 분명하고 장편 구조 피드백이 필요할 때
- choose `package C` when:
  - 실제 수정 의견까지 줄 수 있는 신뢰도 높은 독자일 때
- choose `closed` when:
  - 현재 파동에서 더 진행하지 않기로 했을 때

## 7. execution asset

- actual tracker:
  - `export/submission/12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`

## 8. orchestra note

- 지금 단계의 핵심은 더 많은 사람에게 무작정 보내는 것이 아니라, 반응을 비교 가능한 형태로 남기는 것이다
- first wave는 작은 수로 시작하고, 응답 품질이 좋은 쪽으로 다음 파동을 확장하는 것이 맞다
