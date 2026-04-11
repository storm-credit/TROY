# package A first-wave candidate slate 2026-04-11

## 1. purpose

- 이 문서는 `package A first wave`를 실제로 누구에게 보낼지 정하기 전, 필요한 reader mix와 우선순위를 미리 잠근다
- 목표:
  - 최소 3종 reader type을 확보한다
  - 한 타입에 과도하게 치우치지 않는다
  - 첫 파동을 작은 수로 시작하되 비교 가능한 표본을 만든다

## 2. truth source

- `ops/external_delivery_first_wave_selection_2026_04_11.md`
- `ops/package_a_first_wave_send_log_opening_2026_04_11.md`
- `export/submission/10_ALPHA_READER_TARGET_MATRIX.md`
- `export/submission/12_PACKAGE_A_FIRST_WAVE_CONTACT_TRACKER.md`

## 3. first-wave minimum composition

- required:
  - `type A` 1명 이상
  - `type B` 1명 이상
  - `type D` 1명 이상
- recommended:
  - `type A` 2명
  - `type B` 2명
  - `type D` 2명

## 4. candidate slate

### primary lane

- `A-primary-01`
  - reader type:
    - `type A`
  - role:
    - 문장 결 / 낮은 종지 / 정서 잔향 확인
- `B-primary-01`
  - reader type:
    - `type B`
  - role:
    - 초반 진입감 / 다음 화 끌림 / 중반 이탈 위험 확인
- `D-primary-01`
  - reader type:
    - `type D`
  - role:
    - 첫인상 / 감정 톤 이해도 / 추천 가능성 확인

### secondary lane

- `A-secondary-02`
  - reader type:
    - `type A`
  - role:
    - 문장 반복 피로 / ending temperature 보조 검증
- `B-secondary-02`
  - reader type:
    - `type B`
  - role:
    - 플랫폼 감각 기준의 읽기 속도 재검증
- `D-secondary-02`
  - reader type:
    - `type D`
  - role:
    - 일반 독자 기준의 자연스러운 추천 가능성 재검증

## 5. send order

1. `A-primary-01`
2. `B-primary-01`
3. `D-primary-01`
4. 첫 반응 대기
5. 필요 시 `A-secondary-02`, `B-secondary-02`, `D-secondary-02` 확장

## 6. expansion rule

- 1차 3명에서 반응이 모두 약하거나 편향되면:
  - secondary lane까지 연다
- 1차 3명 중 2명 이상이 긍정적이고 더 읽을 의사가 있으면:
  - `package B` 후보를 연다
- 1차 3명 중 실제 수정 코멘트 의사가 강한 사람이 있으면:
  - `package C` 후보로 별도 표시한다

## 7. must-avoid

- 첫 파동에서 같은 type만 3명 이상 몰아 넣는 일
- 신뢰도 낮은 후보를 수만 채우려고 넣는 일
- 반응이 오기 전에 secondary lane까지 한꺼번에 전부 보내는 일

## 8. orchestra note

- first wave는 `많이 보내기`가 아니라 `비교 가능한 첫 표본 만들기`가 핵심이다
- 지금 단계의 적정 규모는 primary 3명, 필요 시 secondary 3명 확장이다
