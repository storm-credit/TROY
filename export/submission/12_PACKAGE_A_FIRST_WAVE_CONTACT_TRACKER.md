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
| sample-A1 | type A | package A | type A message | pending | planned | pending | hold | pending | 문학형 로맨스 정독 독자 후보 |
| sample-B1 | type B | package A | type B message | pending | planned | pending | hold | pending | 웹소설 플랫폼 감각 확인용 후보 |
| sample-D1 | type D | package A | type D message | pending | planned | pending | hold | pending | 완독형 일반 독자 후보 |

## 3. interpretation rule

- `type A`는 문장 결, 낮은 종지, 잔향 반응을 우선 본다
- `type B`는 진입감, 다음 화 끌림, 읽기 속도 반응을 우선 본다
- `type D`는 첫인상, 감정 톤 이해도, 추천 가능성을 우선 본다

## 4. transition memo

- 한 명의 강한 호평만으로 바로 `package B` 전체 확장하지 않는다
- 서로 다른 reader type에서 긍정 반응이 확인되면 `package B` 후보를 연다
- 실제 수정 의견 의지가 분명할 때만 `package C`로 올린다
