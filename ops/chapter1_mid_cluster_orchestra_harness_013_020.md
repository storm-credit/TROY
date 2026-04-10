# Chapter1 Mid Cluster Orchestra Harness - E013-E020

## 1. Purpose

이 문서는 `chapter1` 중반부 `E013-E020`에 대해 실제 오케스트라 분배 하네스 기준으로 재실행한 전문가 패스를 잠근다.

목표:

- `E011-E012` 이후 감정선이 `E013-E020`에서 성급하게 점프하지 않도록 보정한다
- 체육대회 클러스터를 하나의 누적 arc로 재정렬한다
- 직접 오케스트라 초안 상태였던 구간을 `전문가 에이전트 모드` 기준으로 다시 기록한다

## 2. Scope

- target range: `E013-E020`
- target files:
  - `manuscript/chapter1/E013_새로운운율_정본초고.md`
  - `manuscript/chapter1/E014_음악이야기_정본초고.md`
  - `manuscript/chapter1/E015_연결되는마음_정본초고.md`
  - `manuscript/chapter1/E016_체육대회_정본초고.md`
  - `manuscript/chapter1/E017_족구경기_정본초고.md`
  - `manuscript/chapter1/E018_손이닿은순간_정본초고.md`
  - `manuscript/chapter1/E019_이어달리기_정본초고.md`
  - `manuscript/chapter1/E020_뒤풀이_정본초고.md`

## 3. Harness Run

- orchestra mode: `전문가 에이전트 모드 + director synthesis`
- director intent:
  - `E013-E020`를 생활 리듬형 감정 누적 구간으로 재정렬한다
  - 사건 추가보다 장면 사이 호흡, 질문/대답 구조, 집단 장면 적응 arc를 보강한다
- truth source:
  - `ops/orchestra_harness_contract.md`
  - `ops/director_orchestra.md`
  - `ops/episode_harness_template.md`
  - locked prose under `manuscript/chapter1/E003-E012`
  - source prose under `manuscript/chapter1/E013-E020`
- MCP used:
  - no available MCP resources
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 정형 초안 생성보다 산문 확장과 감정선 재배치가 중심이다
- agent reviews:
  - continuity / risk lane requested
  - emotion / character lane requested
  - prose / rhythm lane requested
  - integrated audit record: `ops/chapter1_mid_cluster_expert_audit_013_020.md`
  - note: lane outputs were synthesized by director into one locked audit record for merge control
- hook checks:
  - file coverage check for `E013-E020`
  - chapter1 relationship-stage continuity reread against `E011-E012`
  - sports-day cluster order sanity check
  - phrase density spot sweep on repeated cadence markers
  - session summary update reminder
- escalation status:
  - no canon-field escalation
  - no ending / exception / silence lock change
- director lock note:
  - 이번 패스는 chapter1 중반부의 밀도 보강과 arc 정렬만 다룬다
  - 캐논 의미 변경 없이 리듬, 심리, 장면 연결만 확장한다

## 4. Applied Focus

- `E013`
  - 공연 이후의 여운이 생활 톤으로 스며드는 리듬 보강
  - 도서관 이탈 / 재등장 장면에서 서준의 불안이 질투가 아니라 거리 공포로 읽히게 정리
- `E014`
  - 음악 대화를 능력 은유와 관계 질문 쪽으로 더 또렷하게 연결
  - 질문과 확인의 차이가 관계 윤리로 이어지게 보강
- `E015`
  - 조별 과제 미팅 장면에서 아린의 배려 방식과 서준의 반응 구조를 정교화
  - `질문 -> 애매한 대답 -> 받아줌`의 연결 메커니즘을 선명하게 정리
- `E016`
  - 체육대회 진입 장면을 `같이`라는 제안의 의미 중심으로 확장
  - 집단 소음 속으로 들어가는 첫 문턱을 독립 장면으로 강화
- `E017`
  - 족구 참여를 서준의 자발적 선택으로 더 분명하게 정리
  - 경기 내 awkwardness와 해방감이 같이 읽히도록 보강
- `E018`
  - 손끝 접촉 장면을 과장 없이 사소한 친밀감의 첫 물성으로 정리
  - 뒤풀이의 따뜻한 음료 제안과 감각 연결을 선행 배치
- `E019`
  - 이어달리기를 `해석 중단`과 `신뢰의 임시 실험`으로 읽히게 강화
  - 마지막 주자 부담이 관계 비유와 겹치도록 정리
- `E020`
  - 뒤풀이 질문 장면에서 아린의 다정함이 설명보다 선택의 누적으로 보이게 정리
  - 체육대회 하루 전체를 `멀리 있던 사람에게 가까운 날을 만드는 일`로 수렴

## 5. Lock Judgment

Status:

- pass with expert-orchestra rerun recorded

결론:

- `E013-E020`는 `E011-E012` 이후 감정선의 속도와 밀도를 더 안정적으로 잇도록 보강됐다
- 체육대회 구간은 개별 이벤트 나열이 아니라 하나의 적응 / 접촉 / 질문 arc로 재정렬됐다
- 현재 상태는 chapter1 중반부 산문 잠금 후보로 충분하며, 다음 작업은 `E021-E030`로 범위를 확장해 같은 하네스를 유지하는 쪽이 안전하다
