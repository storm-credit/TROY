# TROY Package A First-Wave Contact Tracker

## 1. how to use

이 문서는 `package A first wave` 발송 대상과 반응을 추적하는 내부용 표다.

기본값:

- package:
  - `package A`
- bundle:
  - `00_START_HERE.md`
  - `01_EVALUATOR_NOTE.md`
  - `showcase_index.md`
  - `pilot_showcase/`

상태 값:

- `planned`
- `sent`
- `opened`
- `replied`
- `declined`
- `no response`
- `moved to package B`
- `moved to package C`
- `closed`

next move 값:

- `hold`
- `package B`
- `package C`
- `closed`

## 2. tracker table

| Contact Label | Reader Type | Package | Message Version | Send Date | Status | First Reaction Summary | Next Move | Follow-Up Due | Notes |
|---|---|---|---|---|---|---|---|---|---|
| A-primary-01 | type A | package A | type A message | pending | planned | pending | hold | pending | primary lane / 문장 결 / 낮은 종지 / 잔향 확인 |
| B-primary-01 | type B | package A | type B message | pending | planned | pending | hold | pending | primary lane / 초반 진입감 / 다음 화 끌림 확인 |
| D-primary-01 | type D | package A | type D message | pending | planned | pending | hold | pending | primary lane / 첫인상 / 감정 톤 / 추천 가능성 확인 |
| A-secondary-02 | type A | package A | type A message | pending | planned | pending | hold | pending | secondary lane / ending temperature 보조 검증 |
| B-secondary-02 | type B | package A | type B message | pending | planned | pending | hold | pending | secondary lane / 플랫폼 감각 재검증 |
| D-secondary-02 | type D | package A | type D message | pending | planned | pending | hold | pending | secondary lane / 일반 독자 추천 가능성 재검증 |

## 3. interpretation rule

- `type A`는 문장 결, 낮은 종지, 잔향 반응을 우선 본다
- `type B`는 진입감, 다음 화 끌림, 읽기 속도 반응을 우선 본다
- `type D`는 첫인상, 감정 톤 이해도, 추천 가능성을 우선 본다

## 4. transition memo

- 한 명의 강한 호평만으로 바로 `package B` 전체 확장하지 않는다
- 서로 다른 reader type에서 긍정 반응이 확인되면 `package B` 후보를 연다
- 실제 수정 의견 의지가 분명할 때만 `package C`로 올린다

## 5. first-wave operating note

- first wave 최소 구성은 `A-primary-01`, `B-primary-01`, `D-primary-01`이다
- secondary lane은 first-wave 반응이 약하거나 표본이 부족할 때만 연다
