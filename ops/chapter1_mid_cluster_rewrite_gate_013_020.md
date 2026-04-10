# Chapter1 Mid Cluster Rewrite Gate - E013-E020

## 1. Purpose

이 문서는 `E013-E020` 재작성 패스의 최우선 게이트를 잠근다.

핵심 원칙:

- 이번 범위는 `늘리기`가 아니라 `재작성`으로 처리한다
- `pass` 판정은 오케스트라 문서가 아니라 먼저 본문 분량 게이트를 통과해야 한다
- 기준 미달 회차는 하네스 `pass` 또는 `lock candidate`로 부르지 않는다

## 2. Hard Gate

기준:

- metric: `공백 제외 한글 수`
- hard floor per episode: `3500`
- safe line per episode: `4000`

판정 규칙:

- `3500` 미만: draft
- `3500-3999` + 구조/감정선 정상: hard-gate pass / safe-line under
- `4000+` + 구조/감정선 정상: safe-line candidate
- 분량 채우기 흔적이 보이면 수치와 무관하게 rewrite fail

## 3. Rewrite Rule

- 기존 문장 덧붙이기로 숫자만 채우지 않는다
- 회차당 최소 장면 밀도와 감정 전환을 먼저 재설계한다
- `E011-E012`의 감정 상태를 truth source로 삼는다
- `E013-E020`는 사건 추가보다 장면 구조 재배치와 회차 목적 재명료화로 분량을 확보한다

필수 전문가 레인:

- longform narrative craft architect
- continuity / canon architect
- character psychologist
- prose & rhythm director
- cluster planner

고정 메모:

- 앞으로 이 range와 같은 성격의 재작성은 위 네 레인 없이는 시작하지 않는다
- 글자수 검증은 전문가가 아니라 local hook으로만 잠근다

## 4. Current Measured Status

기준: `공백 제외 한글 수`

- `E013`: `4230`
- `E014`: `3644`
- `E015`: `3543`
- `E016`: `3659`
- `E017`: `5543`
- `E018`: `5105`
- `E019`: `4973`
- `E020`: `4694`

결론:

- 현재 `E013-E020` 전부 hard gate 통과
- safe line pass:
  - `E013`, `E017`, `E018`, `E019`, `E020`
- safe line under:
  - `E014`, `E015`, `E016`
- 따라서 이 range는 진행 가능하지만 safe-line watchlist를 유지한 채 재측정 잠금
- `E017-E020`는 이번 패스에서 전면 재작성 또는 신설 기준으로 다시 잠금

보조 확인:

- `E016-E020` forbidden sweep:
  - `운명`: pass
  - `능력 회복`: pass
  - `재결합`: pass
  - `해피엔드`: pass
  - `성균관`: pass
  - `김은지`: pass
  - `상태창`: pass
  - `스킬`: pass
  - `레벨업`: pass

## 5. Director Lock Note

- 이번 범위는 하네스 보강보다 먼저 재작성 게이트를 통과해야 한다
- 전문가 레인 설계는 이 분량 게이트를 전제로 병합한다
- `E013-E020`는 현재 `3500` hard floor는 넘겼지만 `4000` safe line 미달 회차를 watchlist로 유지한 채 다음 통독/연속성 점검 단계로 넘긴다
