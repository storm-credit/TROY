# orchestra execution plan post evaluation - 2026-04-11

## 1. purpose

이 문서는 `novel_literary_story_expert_evaluation_2026_04_11.md` 이후 오케스트라의 다음 실행 순서를 잠근다.

전제:

- 원고는 이미 완성 원고 상태다
- 지금 필요한 것은 대수정이 아니라 `점검 -> watch -> 전달`의 분리다

## 2. completed this round

- `E001-E003` 후킹 끝단 점검 완료
- `E045 / E058 / E094 / E113 / E118-E120` 문장 피로 watch 완료
- 외부 평가 패키지 3단계 전달 플랜 정리 완료

참조:

- `ops/hook_tail_watch_001_003_2026_04_11.md`
- `ops/line_fatigue_watch_045_058_094_113_118_120_2026_04_11.md`
- `export/submission/07_EXTERNAL_EVALUATION_PACKAGE_PLAN.md`

## 3. orchestra verdict

### A. manuscript

- `E001-E003`:
  - 수정 없이 pass
- fatigue watch:
  - `E045`, `E058`만 high watch
  - 나머지는 mid 이하

### B. package delivery

- 첫 외부 접촉은 `package A`가 맞다
- full manuscript는 목적이 분명할 때만 연다
- 피드백 회수용 묶음은 별도로 분리한다

## 4. locked next order

1. 첫 외부 전달 대상이 생기면 `package A`부터 사용
2. 외부 통독이 실제로 필요해질 때 `package B`로 이동
3. 피드백 수집 단계가 열릴 때만 `package C` 사용
4. 원고 line polish가 꼭 필요해지면 `E045 -> E058 -> E094 -> E113` 순서로 별도 패스 개시
5. 그전까지는 원고 잠금 유지
6. 원고 병행 작업이 없다면 이후 미디어는 기존 순서대로 `E054 -> E113 -> E050` generation test

## 5. director note

이번 라운드의 핵심은
`소설을 더 써야 한다`가 아니라
`소설을 어디까지 건드리지 않고, 어떻게 보여줄지`를 정리한 데 있다.

즉, 지금 상태의 오케스트라 우선순위는 다음과 같다.

- 원고:
  - 보호
- 문장:
  - watchlist만 잠금
- 외부 전달:
  - 목적별 packet 사용
- 미디어:
  - downstream 순서 유지
