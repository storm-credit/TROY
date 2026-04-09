# Model / Reasoning Policy

## 1. Purpose

`TROY` 작업에서 모델과 추론 강도 선택 기준을 고정한다.

핵심 원칙:

- 무조건 절약하지 않는다
- 무조건 고비용으로 가지도 않는다
- 결정의 위험도와 창작 판단 난이도에 따라 선택한다

## 2. Default

기본값:

- ordinary production: medium
- repetitive packet filling: low to medium
- canon / ending / engine decisions: high

## 3. Use High Reasoning When

- 결말 모델이 바뀔 때
- TROY 엔진 핵심 작법이 바뀔 때
- 복선 회수 구조가 바뀔 때
- 인물의 엔드포인트가 바뀔 때
- 120화 전체 구조에 연쇄 영향이 있을 때
- 아름다운 이별 결말의 의미가 흔들릴 때

## 4. Use Medium Reasoning When

- 회차별 하네스 작성
- song brief 작성
- visual cut list 작성
- 원고 문체 보정
- 관계 온도계 / reveal matrix 업데이트

## 5. Use Low Reasoning When

- 파일명 정리
- 문서 목차 업데이트
- 단순 로그 반영
- 이미 확정된 템플릿 반복 채우기

## 6. Agent Rule

전문가 에이전트는 아래 상황에서 사용한다.

- 판단이 갈리는 작법 문제
- 음악/이미지/영상 전문 구성이 필요한 경우
- 결말에서 역산한 복선 의미를 다시 검토해야 하는 경우

토큰 운용 원칙:

- 서브에이전트는 별도 컨텍스트와 토큰을 사용해 병렬 검토한다
- 메인 오케스트라 문맥은 최종 판단, 충돌 조정, 잠금 기록에 집중한다
- 전체 사용량은 합산되므로, 에이전트 수는 필요한 전문 분야 수만큼만 연다
- 작업이 끝난 에이전트는 닫아 대기 컨텍스트를 늘리지 않는다

권장 모델 배치:

- repetitive packet filling: mini model, medium reasoning
- routine indexing / naming / archive checks: mini model, low reasoning
- song / visual / prose style refinement: mini model or standard model, medium reasoning
- ending / canon / engine lock review: main orchestra or higher reasoning model, high reasoning
- unresolved canon conflict: main orchestra final decision, high reasoning

## 7. ChatGPT vs Codex Split

`TROY` 기준에서 아래처럼 나누는 것이 가장 효율적이다.

### ChatGPT가 더 잘하는 일

- 세계관, 세력 구조, 인물 감정선, 개연성의 상위 재정리
- 중복 설정 통합안 비교
- 이름, 상징, 관계 의미의 서사적 판단
- 아직 파일 잠금 전인 아이디어 탐색과 대안 발산
- `왜 이 설정이 더 설득력 있는가`를 설명하는 일

### Codex가 더 잘하는 일

- vault / repo 전체 검색, 중복 후보 추출, frontmatter 통일
- 문서 스키마 정리, 하네스 채우기, 인덱스와 로그 갱신
- 금지어 훅, 이름 규칙, 파일명, 링크, 정합성 검사
- 배치 편집, 커밋, 브랜치 단위 변경 관리
- `그래서 어떤 파일을 어떻게 바꿀 것인가`를 실제로 처리하는 일

### 오케스트라 운용 원칙

- 설정 내용의 `판단 초안`은 ChatGPT에서 만들어도 된다
- 실제 source of truth 확인, 파일 반영, 훅 검사, 잠금 기록은 Codex가 맡는다
- `설정집 내용은 ChatGPT, 설정집 파이프라인/자동화는 Codex`라는 문장은 대체로 맞다
- 다만 잠길 문서가 repo 안에 있다면 최종 반영 전에는 반드시 Codex에서 workspace truth를 다시 확인한다
- Codex만으로도 작업은 가능하지만, 감정선/세계관 재설계처럼 상위 서사 판단이 많을수록 ChatGPT를 앞단에 두는 편이 효율적이다
- ChatGPT만으로도 방향은 잡을 수 있지만, 대량 파일 반영과 정합성 잠금은 Codex 없이 불안정해진다

### Codex만 계속 쓰면 비효율적인 경우

- 질문이 파일 수정이 아니라 설정 타당성 비교에 가까울 때
- 대안 3~5개를 놓고 서사적 손익을 가려야 할 때
- 감정선, 관계선, 상징 의미를 길게 따져야 할 때

### TROY 권장 라우팅

1. 설정 질문:
   ChatGPT에서 구조안, 통합안, 감정선 판단을 먼저 만든다.
2. 반영 질문:
   Codex에서 vault / repo를 훑고 실제 영향 파일과 변경 범위를 확정한다.
3. 혼합 질문:
   ChatGPT가 의미 판단을 하고, Codex가 그 판단을 문서/하네스/frontmatter에 반영한다.
4. 잠금 질문:
   마지막 canon sign-off, hook pass, commit/push는 오케스트라가 맡는다.

### TROY 예시

- `대륙별 세력 구조를 재정리해줘`: ChatGPT 우선
- `Obsidian vault 전체 faction/frontmatter 형식을 통일해줘`: Codex 우선
- `중복 도시명 통합안 정하고 설정집/메타데이터까지 같이 고쳐줘`: hybrid
- `결정된 설정을 canon 문서와 episode harness에 잠가줘`: Codex orchestra

### Default Recommendation

기본 추천은 아래와 같다.

1. ChatGPT: 설정/서사 재구성 초안
2. Codex: workspace fetch, 중복/충돌 탐색, 문서 반영
3. Codex orchestra: hooks, logs, final sign-off

## 8. Director Rule

최종 잠금은 총괄 오케스트라가 한다.

에이전트는 제안할 수 있지만, canon-changing decision은 `TROY` 승인 없이 반영하지 않는다.
