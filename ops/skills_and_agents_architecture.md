# Skills, Agents, MCP, And Hooks Architecture

## 1. Director Decision

네, 등록해야 할 `스킬`이 있고, 분리해야 할 `에이전트`도 있다.

기준은 단순하다.

- source/context 조회는 `MCP`
- 반복 가능하고 형식이 중요한 일은 `스킬`
- 해석, 판단, 논쟁, 선택이 중요한 일은 `에이전트`
- 자동 강제 검수는 `훅`
- 최종 잠금과 충돌 조정은 `총괄 오케스트라`

## 2. What Should Be MCP

### MCP 1. canon-context-fetch

역할:
- canon, structure, manuscript source를 정확한 원문 기준으로 불러온다
- 작업 시작 전에 truth source를 고정한다

왜 MCP인가:
- 조회와 fetch는 해석보다 정확성이 중요하다
- source path와 schema를 안정적으로 재사용할 수 있다

### MCP 2. workspace-search

역할:
- 회차, 인물, 모티프, 장소 관련 기존 문서를 빠르게 찾는다
- 중복 생산 전에 기존 상태를 확인한다

왜 MCP인가:
- 사람이 매번 수동 탐색하는 것보다 빠르고 일관적이다

### MCP 3. external-data-fetch

역할:
- Notion, 외부 인덱스, 연결된 작업 공간이 있을 때 최신 상태를 가져온다

왜 MCP인가:
- 외부 시스템은 조회 계층과 판단 계층을 분리해야 안전하다

## 3. What Should Be A Skill

### Skill 1. canon-lock-check

역할:
- 새 문서가 잠긴 캐논과 충돌하는지 빠르게 검사
- ending, 120화 구조, 인물 엔드포인트, 장소명 사용 여부 점검

왜 스킬인가:
- 매번 같은 체크리스트로 반복된다
- 자유도보다 누락 방지가 더 중요하다

### Skill 2. episode-harness-fill

역할:
- 한 화를 `episode_harness_template` 형식에 맞춰 채운다
- story / song / visual / prose 모듈을 빠짐없이 기록

왜 스킬인가:
- 포맷이 고정되어 있다
- 회차가 많아질수록 자동화 이득이 크다

### Skill 3. suno-brief-builder

역할:
- 회차 감정 한 줄을 Suno 프롬프트 시트로 변환
- 금지어, 보컬 거리감, 악기 질감, 후렴 감정 문장까지 정리

왜 스킬인가:
- 입력 포맷과 금지 규칙이 일관되어야 한다
- 유명곡 복제 위험을 줄이는 기준이 반복된다

### Skill 4. mv-cutlist-builder

역할:
- 회차별 MV 컷 리스트, 마스터 룩, 이미지 프롬프트를 생성
- 컷 수와 연속성 앵커를 고정 포맷으로 정리

왜 스킬인가:
- 구조가 정형화되어 있다
- 이미지 툴 선택과 연속성 규칙이 반복된다

### Skill 5. prose-metaphor-polish

역할:
- 설정어를 문학적 감각 비유로 번역
- 음악 용어 과잉을 줄이고 촉감/빛/공기 중심으로 교정

왜 스킬인가:
- 문체 규칙이 비교적 명확하다
- 반복 리라이트에 유리하다

### Skill 6. continuity-sweep

역할:
- 이름, 회차, 장소명, 악장, 결말 언어가 뒤섞이지 않는지 검사
- `성균관대` 같은 실참조 이름이 공개용 본문에 섞였는지 점검

왜 스킬인가:
- 검수 항목이 매우 반복적이다

### Skill 7. campus-map-builder

역할:
- 캠퍼스 전체 배치, 감정 동선, 내부 평면 초안을 같은 형식으로 생성
- 장소 기능과 시각 이미지까지 함께 정리

왜 스킬인가:
- 같은 구조의 지도 문서가 여러 개 필요하다

## 4. What Should Stay An Agent

### Agent A. Character Psychologist

담당:
- 서준/아린의 내면 윤리
- 아름다운 이별이 인물답게 성립하는지 판단

### Agent B. Music Imagery Dramatist

담당:
- 클래식 감각을 소설 문장으로 번역
- 음악 용어 대신 이미지와 촉감 사전 확장

### Agent C. Critical Musicologist

담당:
- 곡이 너무 뻔한지, 너무 닮았는지, 너무 설명적인지 감수

### Agent D. MV Storyboard Director

담당:
- 상징 반복, 컷 간 감정 이동, 계절 시각화 판단

### Agent E. Foreshadow Architect

담당:
- 결말 기준 역설계
- 장기 복선과 후반 회수 설계

### Agent F. Seasonal Motif Architect

담당:
- 여름에서 가을로 식는 감정의 속도 조정
- 계절을 직접 말하지 않고 공간과 빛으로 보여주는 방식 검토

## 5. What Should Be A Hook

### Hook 1. harness-required-fields

역할:
- 하네스 필수 필드 누락 여부를 자동 검사

왜 훅인가:
- 사람이 가장 쉽게 빠뜨리는 반복 체크다

### Hook 2. forbidden-language-guard

역할:
- `능력 회복`, `운명적 재회`, 실명 캠퍼스 표기 같은 금지 표현을 자동 탐지

왜 훅인가:
- 룰 위반은 초기에 끊어내는 편이 비용이 낮다

### Hook 3. naming-and-archive-check

역할:
- 파일명, episode id, 인덱스 반영, 로그 업데이트 필요 여부를 점검

왜 훅인가:
- 산출물이 많아질수록 수동 정합성 유지가 어렵다

### Hook 4. release-gate-check

역할:
- gate pass, review status, director approval 필드가 비어 있지 않은지 확인

왜 훅인가:
- 초안과 잠긴 산출물을 운영상 명확히 구분해야 한다

## 6. Division Of Labor

### mcp first

아래는 먼저 MCP가 고정한다.

- canon source fetch
- episode/source search
- external workspace state fetch

### skill second

그 다음 스킬이 초안을 만든다.

- episode harness 초안
- Suno brief 초안
- MV cut list 초안
- continuity sweep 초안

### agent third

그 다음 에이전트가 아래를 판단한다.

- 감정이 진짜인지
- 문학성이 살아 있는지
- 결말과 맞닿는지
- 이미지가 작품답게 남는지

### hook fourth

그 다음 훅이 아래를 강제한다.

- required field check
- forbidden language check
- naming consistency
- release gate completeness

### director final

마지막에는 총괄이 잠근다.

- 본체 반영 여부
- 보류 여부
- 실험안 전환 여부
- escalation 필요 여부

## 7. Recommended Build Order

실제로 만들 스킬 우선순위는 아래가 좋다.

1. `episode-harness-fill`
2. `suno-brief-builder`
3. `mv-cutlist-builder`
4. `continuity-sweep`
5. `prose-metaphor-polish`
6. `campus-map-builder`
7. `canon-lock-check`

이 순서가 좋은 이유:
- 당장 회차 생산에 바로 도움이 된다
- 엔진 하네스와 직접 연결된다
- 초기부터 품질 편차를 줄일 수 있다

## 8. Immediate Recommendation

지금 당장 실제로 만들 가치가 가장 큰 것은 세 개다.

1. `episode-harness-fill`
2. `suno-brief-builder`
3. `mv-cutlist-builder`

이 세 개만 있어도 `한 화 생산 엔진`이 거의 자동 정렬된다.

다만 운영 잠금을 위해 아래 둘도 함께 붙이는 것이 좋다.

- MCP truth-source fetch
- hook-based required-field and forbidden-language checks
