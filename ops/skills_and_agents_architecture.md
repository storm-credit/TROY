# Skills And Agents Architecture

## 1. Director Decision

네, 등록해야 할 `스킬`이 있고, 분리해야 할 `에이전트`도 있다.

기준은 단순하다.

- 반복 가능하고 형식이 중요한 일은 `스킬`
- 해석, 판단, 논쟁, 선택이 중요한 일은 `에이전트`
- 최종 잠금과 충돌 조정은 `총괄 오케스트라`

## 2. What Should Be A Skill

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

## 3. What Should Stay An Agent

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

## 4. Division Of Labor

### skill first

아래는 먼저 스킬이 초안을 만든다.

- episode harness 초안
- Suno brief 초안
- MV cut list 초안
- continuity sweep 초안

### agent second

그 다음 에이전트가 아래를 판단한다.

- 감정이 진짜인지
- 문학성이 살아 있는지
- 결말과 맞닿는지
- 이미지가 작품답게 남는지

### director final

마지막에는 총괄이 잠근다.

- 본체 반영 여부
- 보류 여부
- 실험안 전환 여부

## 5. Recommended Build Order

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

## 6. Immediate Recommendation

지금 당장 실제로 만들 가치가 가장 큰 것은 세 개다.

1. `episode-harness-fill`
2. `suno-brief-builder`
3. `mv-cutlist-builder`

이 세 개만 있어도 `한 화 생산 엔진`이 거의 자동 정렬된다.
