# package A status transition rule 2026-04-11

## 1. purpose

- 이 문서는 `12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`의 상태값을 언제 어떻게 바꿀지 잠근다
- 목표:
  - 상태가 제멋대로 섞이지 않게 한다
  - `sent`, `opened`, `replied`, `no response`, `closed`의 의미를 분명히 한다
  - day 7 review와 이후 promotion 판단을 안정적으로 만든다

## 2. truth source

- `export/submission/12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`
- `export/submission/18_PACKAGE_A_SEND_SESSION_LOG.md`
- `ops/package_a_day7_review_protocol_2026_04_11.md`

## 3. allowed transitions

- `planned -> sent`
  - 실제 발송이 이루어졌을 때
- `sent -> opened`
  - 확인 가능한 열람 신호가 있을 때
- `sent -> replied`
  - 회신이 왔을 때
- `opened -> replied`
  - 열람 후 회신이 왔을 때
- `sent -> no response`
  - follow-up 이후에도 응답이 없을 때
- `opened -> no response`
  - 열람 신호만 있고 follow-up 이후에도 회신이 없을 때
- `replied -> moved to package B`
  - full manuscript 신호가 충분할 때
- `replied -> moved to package C`
  - detailed feedback willingness가 충분할 때
- `no response -> closed`
  - 현재 파동에서 더 진행하지 않기로 했을 때
- `replied -> closed`
  - 현재 파동 판단을 마쳤을 때

## 4. must-not-do

- `planned -> replied`처럼 발송 없이 응답 상태로 건너뛰지 않는다
- `sent -> moved to package B`처럼 반응 기록 없이 승급하지 않는다
- `no response -> moved to package B` 같은 비약을 허용하지 않는다

## 5. update rule

- 상태를 바꿀 때는
  - tracker
  - send session log
  - response capture sheet
  중 필요한 문서를 같이 갱신한다
- `replied` 이후 분기 판단은 반드시 response capture sheet를 먼저 적은 뒤 한다
- `moved to package B`면 `export/submission/24_PACKAGE_B_FULL_READ_LOG.md`도 연다
- `moved to package C`면 `export/submission/25_PACKAGE_C_FEEDBACK_INTAKE_LOG.md`도 연다

## 6. orchestra note

- 상태 전이는 단순 표기 문제가 아니라, 오케스트라가 지금 어디까지 왔는지 보여 주는 운영 언어다
- 상태를 엄격히 쓰면 다음 파동 판단도 훨씬 덜 흔들린다
