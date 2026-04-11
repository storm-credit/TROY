# package A preflight gate 2026-04-11

## 1. purpose

- 이 문서는 `package A first wave`가 실제 발송 직전 어떤 조건을 만족해야 하는지 잠근다
- 목표:
  - slot mapping이 되었는지
  - message version이 맞는지
  - tracker / execution board / response sheet가 연결되는지
  - package 범위 초과가 없는지
  를 마지막으로 확인한다

## 2. truth source

- `export/submission/11_PACKAGE_A_FIRST_WAVE_MESSAGES.md`
- `export/submission/12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`
- `export/submission/13_PACKAGE_A_FIRST_WAVE_EXECUTION_BOARD.md`
- `export/submission/16_PACKAGE_A_RESPONSE_CAPTURE_SHEET.md`
- `export/submission/17_PACKAGE_A_SLOT_SEND_CHECKLIST.md`

## 3. hard pass conditions

- primary 3 slot:
  - `A-primary-01`
  - `B-primary-01`
  - `D-primary-01`
  이 execution board에 매핑되어 있다
- 각 slot의 message version이 맞다
- `package A` 범위를 넘는 자료가 포함되지 않는다
- 발송 후 tracker를 `sent`로 바꿀 준비가 되어 있다
- 회신 도착 시 response capture sheet에 바로 적을 수 있다

## 4. hard fail conditions

- primary slot 중 하나라도 아직 `pending`으로 비어 있다
- type A / B / D 중 하나가 빠져 있다
- full manuscript나 feedback template set이 실수로 같이 붙어 있다
- follow-up 문안이나 next move 기준이 정리되지 않았다

## 5. director judgment

- 현재 상태:
  - system ready
- 남은 인간 입력:
  - 실제 contact alias
  - 실제 채널
  - 실제 send date

## 6. orchestra note

- 이제부터는 오케스트라가 새 문서를 더 만드는 단계보다, 실제 사람 3명을 넣고 `sent` 상태를 찍는 단계다
- preflight gate를 넘기면 그다음부터는 운영 기록과 반응 해석이 중심이 된다
