# Read-Aloud Cadence Pass - Anchor Episodes

## 1. Purpose

이 문서는 소리 내 읽는 기준으로 수행한 `read-aloud cadence pass`의 앵커 회차 결과를 잠근다.

목표:

- 감정 문장이 한 호흡에 과하게 몰리는 지점을 분리한다
- 대사 직후의 정적과 여운이 낭독에서 살아나게 한다
- 사건 의미와 캐논은 그대로 두고 읽기 리듬만 더 또렷하게 만든다

## 2. Scope

- selected anchor files:
  - `manuscript/chapter1/E012_방음실의고백_정본초고.md`
  - `manuscript/chapter2/E029_고백_정본초고.md`
  - `manuscript/chapter4/E078_결별_정본초고.md`
  - `manuscript/chapter6/E110_다시이어지는리듬_정본초고.md`
  - `manuscript/chapter6/E119_침묵의완성_정본초고.md`

## 3. Harness Run

- orchestra mode: `전문가 감사 포함 오케스트라 모드`
- truth source:
  - selected anchor prose files
  - `ops/print_facing_paragraph_rhythm_pass_anchors.md`
  - `ops/ending_cluster_prestige_polish_101_120.md`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 포맷 생성보다 문장 낭독 리듬 보정이다
- agent reviews:
  - one expert audit used for breakpoint sanity check
  - audit scope limited to paragraph break candidates only
- hook checks:
  - forbidden-language spot sweep
  - ending-language context check on `E110`
  - cadence split sanity check on anchor dialogue passages
- director lock note:
  - meaning, sequence, ending model stay unchanged
  - only breath spacing, dialogue landing, and paragraph drop are adjusted

## 4. Applied Focus

- `E012`
  - 방음실 진입 묘사와 감정 인식을 분리
  - 마지막 이해 문단의 낙차를 더 또렷하게 조정
- `E029`
  - 고백 문장과 그 여운을 나눠 낭독 정적 확보
  - 마지막 깨달음 문단의 리듬을 두 호흡으로 정리
- `E078`
  - 결별 부탁의 슬픔과 서준의 무력감을 분리
  - 돌아서는 동작과 붙잡지 않는 선택의 간격 확보
- `E110`
  - 재접속 장면을 대사, 현재의 거리, 동행의 감각으로 분리
  - `재결합` 표현은 부정 문맥 유지 상태로 잠금
- `E119`
  - 이어폰 습관과 몸의 학습을 분리
  - 마지막 침묵 수용 문장을 낭독 호흡 기준으로 정리

## 5. Lock Judgment

Status:

- pass with anchor read-aloud cadence polish applied

결론:

- 앵커 회차의 대사 착지와 감정 여운이 더 천천히 읽히도록 정리했다
- 캐논, 결말 의미, 관계 결론은 바꾸지 않았다

## 6. Optional Next

- full-book read-aloud cadence pass
- export-facing layout prep
- chapter-by-chapter performance reading check
