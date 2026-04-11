# TROY Package C Feedback Intake Log

## 1. purpose

이 문서는 `package C`에서 들어오는 상세 피드백을 `위치 + 이유 + 처리 판단` 기준으로 남기는 intake log다.

## 2. use when

- 상대가 실제 수정 의견을 줄 의사가 있다
- `23_PACKAGE_C_ALPHA_FEEDBACK_HANDOFF.md` 기준으로 상세 피드백 요청을 보냈다
- 감상 메모가 아니라 수정 가능한 판단 단위를 회수해야 한다

## 3. entry template

| Feedback ID | Reader Alias | Source Lane | Location | Read Type | Issue Summary | Why It Landed That Way | Suggested Action | Triage | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-001 | pending | package B / package A direct | E000 or scene marker | opening / mid / ending / line | pending | pending | keep / adjust / hold / reject | pending | pending |

## 4. preferred location format

- `E001-E003 opening`
- `E045 around cafeteria scene`
- `E094 confession aftermath`
- `ending / E118-E120`

## 5. what counts as strong feedback

- 어디가 문제인지 위치가 있다
- 왜 그렇게 읽혔는지 이유가 있다
- 작품을 다른 장르로 바꾸라는 요구가 아니라 현재 설계를 기준으로 말한다
- 수정 여부를 판단할 수 있게 읽기 경험이 구체적이다

## 6. suggested action labels

- `keep`:
  - 작품 핵심 설계와 맞고 유지해야 한다
- `adjust`:
  - 실제 문장/구조 조정 후보가 된다
- `hold`:
  - 의견은 의미 있지만 증거가 더 필요하다
- `reject`:
  - 작품 방향과 어긋나거나 단발 취향일 가능성이 높다

## 7. must-avoid

- `좋아요/별로예요`만 적고 위치와 이유를 비우는 일
- 여러 독자 의견을 한 줄에 섞는 일
- triage 전에 바로 원고를 흔드는 일

## 8. next link

- triage 참고:
  - `03_FEEDBACK_TEMPLATE.md`
  - `04_FEEDBACK_TRIAGE_NOTE.md`
- 실제 수정 판단:
  - `ops/feedback_triage_protocol.md`
