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

## 7. Director Rule

최종 잠금은 총괄 오케스트라가 한다.

에이전트는 제안할 수 있지만, canon-changing decision은 `TROY` 승인 없이 반영하지 않는다.
