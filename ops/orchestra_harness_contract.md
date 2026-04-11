# Orchestra Harness Contract

## 1. Purpose

이 문서는 `총괄 오케스트라`, `MCP`, `skills`, `agents`, `hooks`가 `TROY 엔진` 안에서 어떤 순서와 권한으로 작동하는지 잠근다.

목표는 세 가지다.

- source of truth를 먼저 고정한다
- 반복 작업과 해석 작업의 경계를 분리한다
- 마지막 잠금권이 어디에 있는지 모호하지 않게 만든다

## 2. Stack Order

작동 순서는 아래와 같다.

1. director orchestra
2. MCP
3. skills
4. agents
5. hooks
6. director sign-off

## 3. Layer Roles

### Director Orchestra

역할:

- 작업 모드를 선언한다
- 잠금 대상과 비잠금 대상을 구분한다
- 전문가 호출 여부를 결정한다
- 충돌을 정리하고 최종 반영 여부를 잠근다
- 작업 성격에 맞게 전문가를 적절하게 배치하고 병합한다

할 수 있는 것:

- canon/structure/media 방향 승인
- harness schema 승인
- escalation 결정
- final merge 및 release 승인

할 수 없는 것:

- source truth 없이 즉흥 확정
- hook 실패를 설명 없이 무시한 채 본체 반영
- 전문가 판단이 필요한 안건을 local hook처럼 단순 처리

### MCP

역할:

- canon, outline, manuscript, external workspace context를 가져온다
- schema-aware fetch와 search를 담당한다

할 수 있는 것:

- 원문/원본/데이터 조회
- 최신 상태 확인
- 특정 문서나 데이터 소스의 구조 노출

할 수 없는 것:

- canon 결정
- 감정 해석 잠금
- release 승인

### Skills

역할:

- 반복 가능하고 포맷이 중요한 초안을 만든다
- 정형 입력을 정형 출력으로 바꾼다

대표 예시:

- episode-harness-fill
- suno-brief-builder
- mv-cutlist-builder
- continuity-sweep

할 수 있는 것:

- 하네스 초안
- song brief 초안
- cut list 초안
- 정형 검수

할 수 없는 것:

- 캐논 변경 승인
- 복선 재배치 승인
- 인물 윤리 최종 판정

### Agents

역할:

- 해석, 선택, 충돌 검토, 전문가 감수를 맡는다

구분:

- setting expert:
  - 무엇이 맞는 세계인가를 다룬다
- engine expert:
  - 그걸 어떻게 서사로 쓰는가를 다룬다
  - 지금 장면에 어떤 작문법이 맞는지, reveal delay가 맞는지, hook 강도를 얼마나 줄지/올릴지, 설명 대신 증상으로 갈지 같은 서사 운용을 제시한다

대표 예시:

- character psychologist
- foreshadow architect
- mv storyboard director
- critical musicologist

할 수 있는 것:

- 리스크 지적
- 대안 비교
- 전문 판단 의견 제시

할 수 없는 것:

- 단독 반영 잠금
- director 승인 없는 canon 변경

### Hooks

역할:

- 자동으로 돌아가는 강제 검수 레이어다
- 사람이 놓치기 쉬운 규칙 위반을 사전에 막는다

대표 예시:

- required field check
- naming check
- forbidden language check
- index/update reminder
- archive/log consistency check
- `tools/Test-EpisodeLengthGate.ps1`
- `tools/Test-ForbiddenPatterns.ps1`
- `tools/New-RangeGateReport.ps1`
- `tools/Invoke-OrchestraRun.ps1`

할 수 있는 것:

- 실패를 발생시켜 진행 중지
- 누락/규칙 위반 경고

할 수 없는 것:

- 감정 해석 대체
- 구조 개편 승인

## 4. Locked Execution Rule

모든 엔진 작업은 아래 순서를 벗어나지 않는다.

1. director가 이번 작업이 `직접 오케스트라 모드`인지 `전문가 에이전트 모드`인지 선언
2. MCP 또는 로컬 canon 문서로 truth source 확보
3. skill로 정형 초안 생성
4. agent가 해석/윤리/구조 리스크 점검
5. hook이 자동 규칙 검수
6. director가 반영/보류/실험안 여부 잠금

추가 고정:

- director는 `전문가가 필요한 안건`과 `hook으로 끝나는 안건`을 먼저 분리한다
- director는 필요한 전문가를 task-scoped로 붙이고, 쓰지 않은 레인은 이유를 남긴다
- director는 전문가 의견을 그대로 복붙 승인하지 않고 충돌을 병합해 최종 판단한다

## 5. Required Expert Lane Lock

아래 작업은 전문가 레인 구성이 없으면 시작하지 않는다.

### A. Episode Prose Rewrite

적용 조건:

- 기존 원고를 `늘리기`가 아니라 `재작성`으로 다시 쓸 때
- 분량 게이트가 hard gate로 걸린 회차 패스
- 감정선 / 장면 구조 / 리듬을 같이 다시 짜야 할 때

필수 전문가 레인:

- longform narrative craft architect
- continuity / canon architect
- character psychologist
- prose & rhythm director

참조:

- `ops/required_expert_lane_matrix.md`

추가 레인:

- 같은 날 / 같은 이벤트를 여러 화로 쪼개는 cluster arc면 `episode planner` 또는 domain planner를 반드시 추가한다

강제 훅:

- local length gate
- forbidden language sweep
- previous-range continuity reread

### B. Multi-Episode Event Cluster Rewrite

적용 조건:

- 체육대회, 축제, 여행, 공연 주간처럼 여러 화가 하나의 day-arc 또는 cluster arc를 공유할 때

필수 전문가 레인:

- longform narrative craft architect
- continuity / canon architect
- character psychologist
- prose & rhythm director
- cluster planner

참조:

- `ops/required_expert_lane_matrix.md`

강제 규칙:

- 각 화의 중심을 `장소`가 아니라 `행동 기능`으로 분리한다
- 개별 화가 같은 날 반복처럼 보이지 않도록 residue가 다음 화 목적을 바꿔야 한다

### C. Length-Gated Rewrite

적용 조건:

- director가 최소 글자수 또는 최소 장면 밀도를 hard gate로 잠근 경우

강제 규칙:

- 글자수 체크는 agent가 아니라 local hook이다
- `3500`은 hard floor다
- `4000`은 safe line이다
- `3500` 미만은 `draft`다
- `3500-3999`는 hard-gate pass일 수 있어도 safe-line under로 기록한다
- `4000+`이면서 구조/감정선이 정상일 때만 safe-line candidate로 본다
- 분량 채우기 흔적이 보이면 수치와 무관하게 rewrite fail이다
- 기준 미달 상태에서는 `pass`, `lock candidate`, `official` 같은 표현을 쓰지 않는다
- 기준을 넘기기 전 전문가 레인은 설계만 하고, 최종 통과 여부는 director가 local 수치로 확인한다

참조:

- `ops/required_expert_lane_matrix.md`

## 6. Routing Modes

director orchestra는 질문 성격에 따라 아래 셋 중 하나를 선언한다.

- discussion-first: 설정 의미, 감정선, 개연성 판단을 먼저 만들고 이후 repo 반영
- repo-first: 파일 구조, 중복, naming, schema, frontmatter를 먼저 정리하고 필요한 판단만 상위 모델에 올림
- hybrid: 설정 판단과 파일 반영이 같이 걸린 안건에 사용하며, 의미 판단과 repo 실행을 분리해서 진행

기본 배치:

- ChatGPT: discussion-first 상위 판단
- Codex: repo-first 실행, 정합성 검사, 자동화
- orchestra: hybrid 조정, hook 통과 확인, 최종 잠금

## 6A. Start Declaration

director orchestra는 실작업 시작 시 아래를 먼저 남긴다.

- orchestra mode
- routing mode
- truth source
- required expert bundle
- added experts
- local hooks
- director goal

위 선언이 없으면 그 작업은 정식 orchestration run이 아니다.

## 6B. Range Handoff Gate

직전 range를 점검하지 않은 상태에서는 다음 range를 full production으로 열지 않는다.

최소 점검:

- time axis continuity
- relation speed / intimacy ceiling
- diction repetition / cadence fatigue
- length gate records
- forbidden pattern sweep
- summary / gate doc sync

이 점검 전 다음 range는 planning-only로만 허용한다.

## 6C. Push / Main Release Gate

오케스트라는 적정 기준점마다 저장소 상태를 확인하고 푸시 여부를 판단한다.

작업 브랜치 푸시 기준:

- 안전선/훅/전문가 검수/문서 동기화 중 하나가 의미 있게 잠긴 경우
- 사용자가 `푸쉬`, `푸시 후 진행`, `계속 진행`을 요청했고 현재 변경 묶음이 분리 가능한 경우
- 다음 큰 작업으로 넘어가기 전에 현재 산출물을 잃으면 안 되는 경우

메인 반영 기준:

- 원고/자산/운영 문서가 release-ready 또는 stable baseline으로 판정된 경우
- 작업 브랜치가 최신 원격 기준과 충돌 없이 통합 가능한 경우
- director가 `main 반영 가능`이라고 판단하거나 사용자가 명시적으로 요청한 경우

메인 반영 금지 조건:

- dirty worktree에 무관한 사용자 변경이 섞여 있는 경우
- 하드 게이트가 실패했거나 검증 수치가 비어 있는 경우
- 리뷰/승인 전인 실험안, 후보안, old backup이 포함된 경우
- main에 force push가 필요한 상태인 경우

고정 규칙:

- 작업 브랜치 푸시는 적정 시점에 자동 판단한다
- main 반영은 안전한 fast-forward, merge, PR 중 가능한 방식으로만 한다
- main에는 절대 확인 없이 force push하지 않는다
- 푸시 전에는 stage 대상 파일을 명시적으로 좁히고, 커밋 내용에 원고/문서/백업 파일이 섞였는지 검산한다
- 컨텍스트가 길어지면 다음 대화창에서 이어갈 수 있도록 현재 브랜치, 최신 커밋, 미처리 파일, 다음 액션을 요약한다

## 7. Lock Rights

아래 항목은 director orchestra 승인 없이는 바꿀 수 없다.

- ending model
- 120-episode structure
- movement / phase naming
- listening loss / completion of silence language
- protagonist endpoints
- exception meaning
- episode harness schema
- engine gates schema
- public campus/location naming rule

## 8. Harness Requirement

모든 `official in-engine episode`는 아래를 기록해야 한다.

- orchestra mode
- truth source
- MCP used
- skills run
- agent reviews
- hook checks
- director lock note

생략 규칙:

- 어떤 레이어를 쓰지 않았으면 `not used`가 아니라 이유를 짧게 남긴다
- 이유 없이 비어 있으면 생산물은 초안일 뿐, 잠긴 산출물이 아니다

추가 고정 규칙:

- required expert lane lock 대상 작업에서 필수 레인이 빠졌다면 그 산출물은 `draft`다
- local length gate가 있는 작업은 실제 수치를 기록하기 전까지 `pass`로 부르지 않는다

## 9. Failure Conditions

아래 중 하나라도 발생하면 director 재판단 전까지 진행 중지다.

- truth source가 불명확하다
- skill 출력이 agent review 없이 본체로 들어간다
- hook 실패가 unresolved 상태다
- locked field가 director note 없이 수정된다
- media output이 source packet보다 앞서 의미를 확정한다
- required expert lane lock 작업인데 필수 전문가 레인이 빠졌다
- local length gate 작업인데 수치 검증 없이 `pass` 판정이 나갔다

## 10. Benefit Lock

오케스트라 방식의 이점은 아래 네 가지로 잠근다.

- single source truth: 각 레이어가 같은 원본에서 출발한다
- parallel expert review: 전문 판단을 병렬로 붙여도 마지막 기준점은 하나다
- cost discipline: MCP/skills/hooks는 반복 작업을 담당하고, agent는 해석 지점에만 쓴다
- stable merge rule: 많은 초안이 생겨도 director만 본체 반영을 잠근다
