# Local Hook Tooling

이 문서는 `TROY` 오케스트라에서 실제로 돌릴 수 있는 로컬 훅 스크립트를 잠근다.

## Hook Files

- `tools/Test-EpisodeLengthGate.ps1`
- `tools/Test-ForbiddenPatterns.ps1`
- `tools/New-RangeGateReport.ps1`
- `tools/Invoke-OrchestraRun.ps1`

## Purpose

- `Test-EpisodeLengthGate.ps1`
  - 회차 또는 range의 `한글 수`와 `공백 제외 전체문자 수`를 계산한다
  - 기준:
    - `3500` hard floor
    - `4000` safe line
- `Test-ForbiddenPatterns.ps1`
  - 금지 패턴 스윕을 자동으로 돌린다
  - 기본 패턴:
    - `운명`
    - `능력 회복`
    - `재결합`
    - `해피엔드`
- `New-RangeGateReport.ps1`
  - 길이 게이트와 금지 패턴 결과를 한 번에 range 문서 초안으로 정리한다
- `Invoke-OrchestraRun.ps1`
  - 오케스트라 로컬 훅 진입점이다
  - 길이 게이트, 금지 패턴 스윕, gate 문서 초안 생성을 한 번에 묶는다
  - `진행` 시 오케스트라가 빠르게 확인해야 하는 local hook bundle로 쓴다

## Example Commands

```powershell
pwsh -File .\tools\Test-EpisodeLengthGate.ps1 -Paths .\manuscript\chapter4\E071_거리두기_정본초고.md
pwsh -File .\tools\Test-EpisodeLengthGate.ps1 -Paths .\manuscript\chapter4 -AsJson
pwsh -File .\tools\Test-ForbiddenPatterns.ps1 -Paths .\manuscript\chapter4
pwsh -File .\tools\New-RangeGateReport.ps1 -RangeLabel "chapter4 late cluster 071_080" -Paths .\manuscript\chapter4\E071_거리두기_정본초고.md,.\manuscript\chapter4\E072_재시도_정본초고.md -OutputPath .\ops\generated_gate_071_072.md
pwsh -File .\tools\Invoke-OrchestraRun.ps1 -RangeLabel "chapter4 late cluster 071_080" -Paths .\manuscript\chapter4\E071_거리두기_정본초고.md,.\manuscript\chapter4\E072_재시도_정본초고.md
```

## Lock

- 이 스크립트들은 `local hook`이다
- 감정선, 구조, 윤리, 작문법 판단을 대신하지 않는다
- `pass / lock / official`은 이 결과와 전문가 레인을 함께 본 뒤 오케스트라가 잠근다
- `Invoke-OrchestraRun.ps1`는 local hook bundle일 뿐, agents나 skills를 대체하지 않는다
