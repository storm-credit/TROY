# TROY Package A Send Session Log

## 1. how to use

이 문서는 `package A first wave`를 실제로 보낸 세션 단위 기록지다.

기록 원칙:

- 발송 배치를 한 번 진행할 때마다 한 줄씩 남긴다
- 개별 대상 상세는 `12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`에 남기고
- 여기에는 배치 단위 요약만 남긴다

## 2. log fields

- session id
- send date
- slots sent
- channels used
- total count
- immediate issues
- follow-up due window
- day 7 review status

## 3. session table

| Session ID | Send Date | Slots Sent | Channels Used | Total Count | Immediate Issues | Follow-Up Due Window | Day 7 Review Status | Notes |
|---|---|---|---|---|---|---|---|---|
| package-a-wave1-session-01 | pending | pending | pending | pending | none yet | pending | pending | first live send batch |

## 4. logging rule

- primary 3명을 같은 배치로 보내면 같은 session id를 써도 된다
- day가 다르면 새 session id를 만든다
- secondary lane 발송은 primary session과 분리해 기록한다

## 5. orchestra note

- 이 로그의 목적은 `누구에게 보냈는지`보다 `언제 어떤 묶음이 발송됐고 언제 다시 리뷰할지`를 기억하는 것이다
