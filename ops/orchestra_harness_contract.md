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

할 수 있는 것:

- canon/structure/media 방향 승인
- harness schema 승인
- escalation 결정
- final merge 및 release 승인

할 수 없는 것:

- source truth 없이 즉흥 확정
- hook 실패를 설명 없이 무시한 채 본체 반영

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

## 5. Lock Rights

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

## 6. Harness Requirement

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

## 7. Failure Conditions

아래 중 하나라도 발생하면 director 재판단 전까지 진행 중지다.

- truth source가 불명확하다
- skill 출력이 agent review 없이 본체로 들어간다
- hook 실패가 unresolved 상태다
- locked field가 director note 없이 수정된다
- media output이 source packet보다 앞서 의미를 확정한다

## 8. Benefit Lock

오케스트라 방식의 이점은 아래 네 가지로 잠근다.

- single source truth: 각 레이어가 같은 원본에서 출발한다
- parallel expert review: 전문 판단을 병렬로 붙여도 마지막 기준점은 하나다
- cost discipline: MCP/skills/hooks는 반복 작업을 담당하고, agent는 해석 지점에만 쓴다
- stable merge rule: 많은 초안이 생겨도 director만 본체 반영을 잠근다
