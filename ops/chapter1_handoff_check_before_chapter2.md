# Chapter1 Handoff Check Before Chapter2

## 1. Purpose

이 문서는 `chapter2 / E021-E030`를 full production으로 열기 전에
`chapter1`이 handoff 가능한 상태인지 점검하고 잠근다.

참조:

- `ops/director_orchestra.md`
- `ops/orchestra_harness_contract.md`
- `ops/chapter1_mid_cluster_rewrite_gate_013_020.md`
- `02_SESSION_SUMMARY.md`

## 2. Handoff Scope

- primary scope:
  - `E013-E020`
- boundary check:
  - `E011-E012` 이후 감정 상태가 `E013-E020`와 자연스럽게 이어지는지
  - `E020` 종료 지점이 `chapter2` 진입 질문을 만들고 있는지

## 3. Required Check Items

### A. Time Axis Continuity

- `E016-E020` 체육대회 cluster는 같은 날 afternoon -> evening 흐름으로 정렬돼 있다
- `E018 -> E019 -> E020`의 사건 residue는 `접촉 -> 질문 형성 -> 직접 질문`으로 이어진다
- status:
  - pass

### B. Relation Speed / Intimacy Ceiling

- `E013-E020`는 고백/확정이 아니라 `가까운 날`의 실험 구간으로 유지된다
- 손 접촉, 이어달리기, 뒤풀이 질문은 전부 선언적 관계 확정이 아니라
  `감당 가능한 가까움`과 `직접 질문의 첫 발생` 수준으로 잠근다
- status:
  - pass

### C. Diction Repetition / Cadence Fatigue

- 반복군:
  - `이상하게`
  - `오래 남`
  - `같이`
  - `조금`
- 오케스트라 통독 패스로 과잉 반복 일부는 줄였다
- 남은 반복은 cluster 핵심어 성격이 강해 현재는 허용 가능 범위로 둔다
- 단, `chapter2` 시작 시 어휘군을 일부 교체해 cadence 피로를 분산한다
- status:
  - pass with watchlist

### D. Length Gate Records

기준:

- metric:
  - `공백 제외 한글 수`
- hard floor:
  - `3500`
- safe line:
  - `4000`

현재 기록:

- `E013`: `4230`
- `E014`: `3644`
- `E015`: `3543`
- `E016`: `3659`
- `E017`: `5543`
- `E018`: `5105`
- `E019`: `4973`
- `E020`: `4694`

- status:
  - pass with safe-line watchlist

### E. Forbidden Pattern Sweep

- checked range:
  - `E016-E020`
- patterns:
  - `운명`
  - `능력 회복`
  - `재결합`
  - `해피엔드`
  - `성균관`
  - `김은지`
  - `상태창`
  - `스킬`
  - `레벨업`
- status:
  - pass

### F. Summary / Gate Sync

- `ops/chapter1_mid_cluster_rewrite_gate_013_020.md` synced
- `02_SESSION_SUMMARY.md` synced
- status:
  - pass

## 4. Director Judgment

- `chapter1`은 `chapter2`를 열기 전에 점검하는 것이 맞다
- 현재 기준으로는 handoff check를 통과했으므로
  `chapter2 / E021-E030`를 full production으로 열 수 있다
- 단, `E014-E016`은 `4000` safe line 미달이므로 chapter1 safe-line watchlist로 남긴다
- 단, `chapter2` 시작 시 아래 두 가지를 watch item으로 넘긴다
  - `같이 / 오래 남 / 조금` 계열 어휘 피로 분산
  - 관계 속도는 계속 `직접적 상호애 확정 이전` 수준으로 유지

## 5. Next Safe Order

1. `chapter1` handoff check 문서를 truth source로 잠근다
2. `chapter2 / E021-E030` 작업 모드를 선언한다
3. `required expert lane matrix`에서 이번 range bundle을 먼저 고른다
4. local hooks를 먼저 선언한다
5. 그다음에만 episode rewrite 또는 cluster pass를 시작한다
