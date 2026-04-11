# package A day 7 review protocol 2026-04-11

## 1. purpose

- 이 문서는 `package A first wave` 발송 후 `day 7` 전후에 무엇을 점검하고 어떤 분기를 탈지 잠근다
- 목표:
  - 응답률만 보지 않는다
  - reader type별 signal quality를 함께 본다
  - `package B`, `package C`, `hold`, `closed`를 성급하지 않게 결정한다

## 2. truth source

- `export/submission/12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`
- `export/submission/16_PACKAGE_A_RESPONSE_CAPTURE_SHEET.md`
- `export/submission/18_PACKAGE_A_SEND_SESSION_LOG.md`
- `ops/package_a_promotion_rule_2026_04_11.md`

## 3. day 7 review checklist

- primary 3 slot 중 실제 발송 완료 수
- opened / replied / no response 비율
- reader type별 긍정 신호 유무
- `strong continue intent` 존재 여부
- `needs full manuscript` 존재 여부
- `willing to give detailed feedback` 존재 여부
- `slow opening concern`, `middle drag concern` 반복 여부

## 4. decision branches

### branch A - promote to package B

- 조건:
  - 서로 다른 reader type 2명 이상에서 continue intent 또는 full manuscript signal이 확인됨
- action:
  - `package B` 후보를 tracker에 표시
  - full manuscript 요청용 대상만 좁혀서 다음 파동 설계
  - 실제 승급 시 `export/submission/24_PACKAGE_B_FULL_READ_LOG.md` 입력 시작

### branch B - promote selected contact to package C

- 조건:
  - detailed feedback willingness가 분명한 신뢰도 높은 대상이 있음
- action:
  - `package C` 후보로 별도 분리
  - alpha feedback request 문서 세트 준비
  - 실제 승급 시 `export/submission/25_PACKAGE_C_FEEDBACK_INTAKE_LOG.md` 입력 시작

### branch C - hold and wait

- 조건:
  - 응답 수가 너무 적거나 signal quality가 약함
- action:
  - follow-up 1회 후 추가 대기
  - secondary lane 개방 여부만 검토

### branch D - open secondary lane

- 조건:
  - primary 3명만으로는 표본이 부족하거나 반응이 편향적임
- action:
  - `A-secondary-02`, `B-secondary-02`, `D-secondary-02` 중 필요한 slot만 개방

## 5. must-avoid

- day 7 이전에 조급하게 `package B` 전체 확장
- no response를 부정 반응으로 과해석
- 한 reader type의 반응만으로 작품 전체 방향을 수정

## 6. orchestra note

- day 7 review의 목표는 판결이 아니라 `다음 문이 어디서 열리는지`를 확인하는 것이다
- promotion이 없더라도 signal을 모으는 데 성공했다면 first wave는 실패가 아니다
