# TROY Package A Alias Mapping Sheet

## 1. how to use

이 문서는 `A-primary-01`, `B-primary-01`, `D-primary-01` 같은 tracker slot에 실제 대상자를 넣기 전 사용하는 내부용 매핑 시트다.

원칙:

- 실명 대신 내부 별칭만 쓴다
- reader type 적합 근거를 짧게 남긴다
- score와 approval을 같이 적어, 왜 이 대상을 slot에 넣었는지 나중에도 알 수 있게 한다

## 2. mapping table

| Tracker Slot | Proposed Alias | Reader Type | Qualification Score | Fit Evidence | Preferred Channel | Availability Signal | Approved | Notes |
|---|---|---|---|---|---|---|---|---|
| A-primary-01 | pending | type A | pending | pending | pending | pending | pending | 문장 결 / 낮은 종지 / 잔향 확인용 |
| B-primary-01 | pending | type B | pending | pending | pending | pending | pending | 초반 진입감 / 다음 화 끌림 확인용 |
| D-primary-01 | pending | type D | pending | pending | pending | pending | pending | 첫인상 / 감정 톤 / 추천 가능성 확인용 |
| A-secondary-02 | pending | type A | pending | pending | pending | pending | pending | ending temperature 보조 검증용 |
| B-secondary-02 | pending | type B | pending | pending | pending | pending | pending | 플랫폼 감각 재검증용 |
| D-secondary-02 | pending | type D | pending | pending | pending | pending | pending | 일반 독자 추천 가능성 재검증용 |

## 3. fill rule

- `Qualification Score`:
  - `7-8`이면 primary 우선
  - `5-6`이면 secondary 후보
  - `0-4`면 제외
- `Availability Signal`:
  - 최근 연락 가능성, 회신 습관, 읽기 여유 등을 짧게 적는다
- `Approved`:
  - `yes`
  - `hold`
  - `no`

## 4. orchestra note

- 이 시트의 목적은 실제 이름을 빨리 넣는 것이 아니라, `왜 이 사람이 이 slot에 들어갔는지`를 흔들리지 않게 남기는 것이다
