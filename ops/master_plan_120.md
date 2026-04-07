# Master Plan: 120 Episodes

## 1. Director Decision

총괄 판단:
- 본 프로젝트는 `100화`보다 `120화`가 더 적합하다.
- `150화`는 현재 코어 갈등 대비 과잉이다.
- `120화`는 감정선, 복선 회수, 음악/MV 확장성을 동시에 확보하는 균형점이다.

핵심 이유:
- 고백 전, 연애 황금기, 균열, 이별, 재회, 결말을 충분히 숨 쉬게 할 수 있다.
- 회차별 Suno와 MV를 붙여도 제작량이 아직 현실적이다.
- 중반 반복 오해의 위험을 줄이면서도 후반 회수를 풍부하게 만들 수 있다.

## 2. Orchestra Roster

모델은 `무조건 절약`이 아니라 `역할 적합성` 기준으로 배치한다.

| Specialist | Responsibility | Model |
|---|---|---|
| Director / Canon Arbiter | 최종 잠금, 충돌 정리, 결말 승인 | main thread |
| World Rules Specialist | 운율 규칙, 예외, 소실 체계 | gpt-5.1-codex-mini |
| Character Psychologist | 인물 엔드포인트, 관계 윤리 | gpt-5.2 low |
| Continuity QA | 문서 충돌, 명명, 위계 정리 | gpt-5.1-codex-mini |
| Episode Planner | 120화 구조, 챕터/비트 설계 | gpt-5.1-codex-mini |
| Foreshadowing Architect | 장기 복선 스레드 설계 | gpt-5.2 low |
| Audiovisual Bible Specialist | Suno/MV 규격, 스타일 드리프트 방지 | gpt-5.2 low |

## 3. Execution Principle

- 먼저 설정집을 잠근다.
- 그다음 120화 구조를 고정한다.
- 그다음 복선을 역설계한다.
- 원고와 미디어는 마지막에 이관한다.

## 4. Lock Sequence

### Step 1. Ending Lock

결정 완료:
- A: 서준-아린 재결합
- ending language: `청취 소실` -> `침묵의 완성`
- mature hopeful ending

### Step 2. World Lock

우선 잠가야 할 것:
- 운율 핵심 규칙
- 다중 감지 우선순위
- 아린 예외의 정의
- 소실 단계의 트리거와 회복 불가/가능 범위
- 심해 상태의 의미

### Step 3. Character Lock

리드:
- 윤서준
- 지아린

서포트:
- 강도현
- 최이든
- 송유빈
- 배소나

보류:
- 이태율

제거:
- 김은지

### Step 4. Structure Lock

- 24챕터 x 5화
- 6개 Phase
- 마일스톤 에피소드 고정

### Step 5. Foreshadow Lock

장기 복선을 `Seed -> Echo -> Payoff` 체계로 등록한다.

### Step 6. Audiovisual Lock

- 글로벌 오디오 모티프
- 글로벌 비주얼 문법
- Suno 문서 포맷
- MV 문서 포맷
- 아크 단위 스타일 체크포인트

## 5. 120-Episode Skeleton

| Phase | Episodes | Chapters | Function |
|---|---:|---:|---|
| 1 | 1-20 | 4 | 만남, 규칙, 예외 인식 |
| 2 | 21-35 | 3 | 썸, 감정 상승, 고백 |
| 3 | 36-60 | 5 | 연애 시작, 황금기, 행복의 정점 |
| 4 | 61-80 | 4 | 균열, 파국, 결별 |
| 5 | 81-105 | 5 | 이별 후 성장, 재해석, 재회 접근 |
| 6 | 106-120 | 3 | 재결합, 최종 선택, 엔딩 |

## 6. Milestone Targets

| Beat | Episode target |
|---|---:|
| confession | 29-30 |
| official dating start | 36-40 |
| dating peak | 54-55 |
| rupture | 68-70 |
| breakup | 78-80 |
| reunion | 103-105 |
| ending | 118-120 |

## 7. Rewrite Order

1. `canon/series.md`
2. `canon/world.md`
3. `canon/characters.md`
4. `canon/style.md`
5. external `시리즈바이블`
6. external `전권_아웃라인_통합본`
7. external `전체 구조`
8. external phase docs
9. external episode detail docs
10. media index

## 8. Immediate Tasks

### World

- define Arin exception
- define multi-person hearing
- define fade-stage triggers
- define environment rules

### Characters

- lock Seojun ending state
- lock Arin ending state
- decide `Yubin = first love`
- keep or cut `Taeyul`

### Structure

- replace all 100-episode references
- replace all 20-chapter references
- unify chapter definition
- unify major event names

### Media

- define global style pack
- define per-episode song template
- define per-episode MV template
- define per-arc checkpoint rhythm

## 9. Delivery Standard

각 전문가 산출물은 아래 조건을 만족해야 한다.

- 하나의 문서가 하나의 truth를 가진다
- 상위 문서가 하위 문서를 다시 덮어쓰지 않는다
- 캐논과 작법 가이드를 분리한다
- 제목보다 ID와 상태가 더 중요하다

## 10. Success Condition

다음 다섯 가지가 잠기면 집필을 시작한다.

- ending model locked
- world rules locked
- lead characters locked
- 120-episode structure locked
- audiovisual bible locked
