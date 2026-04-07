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

## 2. Agent Roster

| Role | Mission | Model | Why |
|---|---|---|---|
| Director / Canon Arbiter | 최종 판단, 충돌 정리, 잠금 승인 | main thread | 전체 문맥을 가장 길게 유지해야 함 |
| Story Bible Auditor | 설정 누락, 충돌, 캐논 검사 | gpt-5.1-codex-mini | 문서 탐색과 비교에 충분하고 저렴함 |
| Narrative Motif Specialist | 영화 모티브 해석, 톤 설계 | gpt-5.2 low | 정서 해석 품질이 중요하지만 장문 고추론은 불필요 |
| Character Psychologist | 인물 감정선, 대사 윤리, 관계 리스크 점검 | gpt-5.2 low | 캐릭터의 결 미세 조정에 적합 |
| Episode Planner | 회차 비트, 씬 배치, Phase 정렬 | gpt-5.1-codex-mini | 구조 작업 위주라 효율 좋음 |
| Lyrics Director | 화별 가사 구조, 후렴 핵심, POV 선택 | gpt-5.2 low | 감정 압축과 문구 선택이 중요 |
| Music Prompt Engineer | Suno 입력 문서 정리, 태그 규격화 | gpt-5.1-codex-mini | 포맷팅과 일관성 작업에 효율적 |
| MV Storyboard Director | 장면 구성, 상징 반복, 샷 리스트 | gpt-5.2 low | 영상 감정선과 시각 모티프 해석 필요 |
| Continuity QA | 이름, 설정, 장소, 회차 참조 검수 | gpt-5.1-codex-mini | 반복 검수에 최적 |

## 3. Escalation Rule

다음 경우에만 상위 추론 비용을 올린다.

- 엔딩 캐논 확정
- 후반부 대형 리콘
- 삼각관계 윤리 충돌
- 시즌 단위 대규모 구조 개편

그 외 대부분의 탐색, 정리, 비교, 체크는 `gpt-5.1-codex-mini`로 처리한다.

## 4. Current Phase

현재는 `canon lock phase`다.

순서:
1. ending canon 확정
2. 능력 최종 상태 확정
3. 아린 예외성 확정
4. 회차별 song 역할 확정
5. MV 시각 캐논 확정

## 5. Exit Criteria

아래 다섯 가지가 확정되면 원고 이관을 시작한다.

- series canon locked
- world rules locked
- character endings locked
- audio style locked
- visual style locked
