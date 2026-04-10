# Director Orchestra

총괄 목표:
- 소설
- 회차별 Suno 음악
- 회차별 MV

이 세 출력을 하나의 IP 언어로 묶는다.

## 1. 운영 원칙

- 설정이 먼저다
- 원고는 설정 잠금 전까지 이 저장소에 넣지 않는다
- 모든 파생물은 캐논에서 출발한다
- 비싼 모델은 결정 지점에서만 쓰고, 탐색은 저비용 모델로 처리한다

## 2. Orchestra Advantage Lock

총괄 오케스트라를 두는 이유는 아래 네 가지로 잠근다.

- single lock point: 최종 잠금권이 한 곳에 모인다
- parallel specialists: 분야별 전문가를 동시에 붙여도 기준점이 하나다
- cost discipline: 반복 작업은 skills/hooks로, 해석 지점만 agents로 보낸다
- stable merge: 초안이 많아져도 본체 반영 규칙이 흔들리지 않는다

## 3. Operating Modes

총괄은 매 작업 시작 시 아래 둘 중 하나를 선언한다.

- 직접 오케스트라 모드: 반복 제작, 경미한 확장, 낮은 해석 리스크
- 전문가 에이전트 모드: 캐논 충돌 가능성, 구조 변경, 윤리 판단, 미디어 방향 조정

`이어서 진행` 요청만 들어와도 총괄은 먼저 모드를 선언하고 시작한다.

## 3A. Orchestra Duty Lock

오케스트라의 기본 책임은 `전문가를 적절하게 붙여 총괄하는 것`으로 잠근다.

- 오케스트라는 작업을 혼자 처리하는 역할명이 아니다
- 오케스트라는 작업 성격, 리스크, 단계에 맞는 전문가 레인을 먼저 고른다
- 오케스트라는 전문가 의견을 병합하고 충돌을 정리해 최종 반영을 잠근다
- 오케스트라는 숫자 검증과 전문가 판단을 혼동하지 않는다

고정 구분:

- local hook:
  - 글자수
    - `3500` hard floor / `4000` safe line
  - 금지 패턴
  - 이름 / 형식 / 누락 검사
- expert lane:
  - 작문법 선택
  - 감정선 속도
  - 설정 / 연속성
  - 문장 리듬
  - 이벤트 클러스터 분리

운영 규칙:

- 오케스트라는 `최소 필수 전문가 세트 + 필요시 추가 전문가` 구조로 움직인다
- 필수 세트는 `ops/required_expert_lane_matrix.md`를 따른다
- 추가 전문가가 필요하면 오케스트라가 범위와 이유를 명시하고 고용한다

## 3B. Orchestra Start Template

모든 실작업 시작은 아래 선언으로 연다.

- orchestra mode:
  - 직접 오케스트라 모드 / 전문가 에이전트 모드
- routing mode:
  - discussion-first / repo-first / hybrid
- truth source:
  - 이번 작업의 기준 문서와 이전 range
- required expert bundle:
  - `ops/required_expert_lane_matrix.md` 기준 최소 필수 세트
- added experts:
  - 필요 시 추가 고용 레인과 이유
- local hooks:
  - 글자수 / 금지 패턴 / 형식 / 누락 검사
- director goal:
  - 이번 패스의 최종 잠금 목표

총괄은 위 선언 없이 본문 재작성이나 cluster pass를 시작하지 않는다.

## 3C. Range Handoff Rule

다음 range를 열기 전에는 직전 range handoff check를 먼저 잠근다.

기본 규칙:

- `chapter2`를 열기 전 `chapter1` handoff check를 먼저 본다
- handoff check 없이 다음 range를 열면 그 작업은 planning-only 상태다
- full rewrite 또는 official pass는 handoff check 이후에만 시작한다

handoff check 항목:

- 시간축 연결
- 관계 속도 / intimacy ceiling
- 어휘 반복 / cadence fatigue
- length gate 기록
- forbidden pattern sweep
- session summary / gate docs 동기화

## 4. Agent Roster

| Role | Mission | Model | Why |
|---|---|---|---|
| Director / Canon Arbiter | 최종 판단, 충돌 정리, 잠금 승인 | main thread | 전체 문맥을 가장 길게 유지해야 함 |
| Longform Narrative Craft Architect | 엔진 전문가. 상황에 맞는 작문법, 회차 압력, 장면 기능, setup-payoff, hook 강도, reveal delay, 장르 톤 선택을 제시 | gpt-5.2 low | 설정이 아니라 `지금 이 상황을 어떻게 서사로 쓸 것인가`를 결정하는 핵심 전문가 |
| Story Bible Auditor | 설정 누락, 충돌, 캐논 검사 | gpt-5.1-codex-mini | 문서 탐색과 비교에 충분하고 저렴함 |
| Narrative Motif Specialist | 영화 모티브 해석, 톤 설계 | gpt-5.2 low | 정서 해석 품질이 중요하지만 장문 고추론은 불필요 |
| Character Psychologist | 인물 감정선, 대사 윤리, 관계 리스크 점검 | gpt-5.2 low | 캐릭터의 결 미세 조정에 적합 |
| Episode Planner | 회차 비트, 씬 배치, Phase 정렬 | gpt-5.1-codex-mini | 구조 작업 위주라 효율 좋음 |
| Prose & Rhythm Director | 장면 밀도, 산문 호흡, 반복 위험, 재작성 구조 설계 | gpt-5.2 low | 회차 분량과 문장 리듬을 동시에 잡는 데 필요 |
| Cluster Planner | 같은 날/같은 이벤트 묶음의 회차 분리와 residue 설계 | gpt-5.1-codex-mini | multi-episode event arc를 기능별로 쪼개는 데 적합 |
| Lyrics Director | 화별 가사 구조, 후렴 핵심, POV 선택 | gpt-5.2 low | 감정 압축과 문구 선택이 중요 |
| Music Prompt Engineer | Suno 입력 문서 정리, 태그 규격화 | gpt-5.1-codex-mini | 포맷팅과 일관성 작업에 효율적 |
| Producer-Class Stack Designer | 실존 프로듀서 모사가 아니라 기능 단위의 producer lane 조합을 설계 | gpt-5.2 low | 음악 퀄리티를 올리되 imitation risk를 피하는 데 필요 |
| MV Storyboard Director | 장면 구성, 상징 반복, 샷 리스트 | gpt-5.2 low | 영상 감정선과 시각 모티프 해석 필요 |
| Continuity QA | 이름, 설정, 장소, 회차 참조 검수 | gpt-5.1-codex-mini | 반복 검수에 최적 |

## 5. Required Lane Bundles

총괄은 아래 작업에서 전문가 묶음을 잊지 않는다.

우선 참조:

- `ops/required_expert_lane_matrix.md`

구분 원칙:

- 설정 전문가:
  - 무엇이 맞는 세계인가를 다룬다
- 엔진 전문가:
  - 그걸 지금 어떻게 서사로 쓸 것인가를 다룬다
  - 즉, 작문법 추천기이자 서사 운용 전문가다

### Prose Rewrite Bundle

적용:

- 회차를 처음부터 다시 쓸 때
- 분량 게이트와 감정선 게이트가 동시에 걸린 경우

필수:

- Longform Narrative Craft Architect
- Story Bible Auditor 또는 Continuity QA
- Character Psychologist
- Prose & Rhythm Director

### Cluster Rewrite Bundle

적용:

- 체육대회, 축제, 여행, 공연 주간처럼 여러 화가 하나의 event arc를 공유할 때

필수:

- Longform Narrative Craft Architect
- Story Bible Auditor 또는 Continuity QA
- Character Psychologist
- Prose & Rhythm Director
- Cluster Planner

### Length Gate Rule

고정:

- `공백 제외 한글 수` 같은 분량 기준은 전문가 의견이 아니라 local 수치로 잠근다
- `3500`은 hard floor다
- `4000`은 safe line이다
- `3500` 미만은 `draft`다
- `3500-3999`는 hard-gate pass일 수는 있어도 safe-line under 상태로 watchlist에 남긴다
- `4000+`이면서 구조/감정선이 정상일 때만 safe-line candidate로 본다
- 분량 채우기 흔적이 보이면 수치와 무관하게 fail이다
- 총괄은 수치 검증 전 어떤 회차도 `pass`로 부르지 않는다
- 전문가 레인은 분량 자체가 아니라 `재작성 설계`를 맡는다

## 6. Escalation Rule

다음 경우에만 상위 추론 비용을 올린다.

- 엔딩 캐논 확정
- 후반부 대형 리콘
- 삼각관계 윤리 충돌
- 시즌 단위 대규모 구조 개편

그 외 대부분의 탐색, 정리, 비교, 체크는 `gpt-5.1-codex-mini`로 처리한다.

## 7. Current Phase

현재는 `working master canon-tightening phase`다.

순서:
1. migrated manuscript를 working master로 유지
2. range별 canon / relation speed / prose 리스크를 오케스트라 패스로 조정
3. chapter handoff check를 잠근 뒤 다음 range를 개방
4. 회차별 song 역할 확정
5. MV 시각 캐논 확정

## 8. Exit Criteria

아래 다섯 가지가 확정되면 release/export 단계를 시작한다.

- series canon locked
- world rules locked
- character endings locked
- audio style locked
- visual style locked

## 9. Authority Lock

아래 항목은 총괄 승인 없이는 수정하지 않는다.

- ending model
- movement / phase naming
- exception meaning
- silence language
- episode harness schema
- engine gates schema
- release decision

## 10. Engine Rule

이 프로젝트는 이제 `오케스트라 엔진`으로 운영한다.

핵심 문서:
- `ops/orchestra_engine.md`
- `ops/orchestra_harness_contract.md`
- `ops/episode_harness_template.md`
- `ops/engine_gates.md`

원칙:
- 총괄이 엔진을 관리한다
- 각 회차는 하네스 템플릿을 통과해야 한다
- 캐논, 구조, 음악, 비주얼, 문체는 개별 문서가 아니라 연결된 엔진으로 취급한다
- MCP는 truth source를 가져오고, skills는 초안을 만들고, agents는 판단하고, hooks는 자동 검수한다
- 마지막 반영 여부는 총괄만 잠근다

실행 도구:
- local hook scripts:
  - `tools/Test-EpisodeLengthGate.ps1`
  - `tools/Test-ForbiddenPatterns.ps1`
  - `tools/New-RangeGateReport.ps1`
  - `tools/Invoke-OrchestraRun.ps1`
- 설명 문서:
  - `ops/local_hook_tooling.md`
