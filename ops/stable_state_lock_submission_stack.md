# stable state lock - submission stack

## 1. scope

- `export/submission/`
- `export/pilot_packets/`
- `export/wave1_packets/`
- `export/wave2_packets/`
- `export/wave3_packets/`
- `export/wave4_packets/`

## 2. lock statement

- 현재 submission stack은 stable state로 본다
- 다음 세션의 기본값은 `유지`다
- 새 산출은 반드시 명확한 외부 목적이 있을 때만 연다

## 3. open only if

- 외부 평가자가 실제로 다른 샘플 구성을 요청했다
- 특정 축이 누락되었다는 근거가 생겼다
- 제출 포맷 요구사항이 바뀌었다

## 4. otherwise

- 기존 stack 유지
- repo clean 유지
- summary / handoff만 최신 상태로 갱신
