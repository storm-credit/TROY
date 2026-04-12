# external asset update draft audit 2026-04-12

## 1. purpose

- 이 문서는 `Export-ExternalAssetUpdateDraft.ps1`가 blocked path와 synthetic ready path 양쪽에서 update-target 초안을 안정적으로 생성하는지 검증한 audit이다.
- 목표는 오케스트라가 verdict 이후 실제 target file 갱신으로 넘어갈 때 field-level draft를 바로 꺼내 쓰게 만드는 것이다.

## 2. audited component

| component | file | status |
|---|---|---|
| update draft exporter | `tools/Export-ExternalAssetUpdateDraft.ps1` | pass |
| blocked-path harness integration | `tools/Test-ExternalAssetIntakeHarness.ps1` | pass |
| synthetic ready-path integration | `tools/Test-ExternalAssetReadyPath.ps1` | pass |

## 3. blocked-path result

Command:

```powershell
.\tools\Test-ExternalAssetIntakeHarness.ps1
```

Result:

- update draft export:
  - `pass`
- ready items:
  - `0`

Orchestra verdict:

- pass
- blocked state still exports a truthful empty draft without inventing fake updates

## 4. synthetic ready-path result

Command:

```powershell
.\tools\Test-ExternalAssetReadyPath.ps1
```

Result:

- update draft export:
  - `pass`
- ready items:
  - `7`

Orchestra verdict:

- pass
- when all expected external assets arrive, field-level update drafts are available in the same session

## 5. release decision

`Export-ExternalAssetUpdateDraft.ps1` is `operator-ready`.

Allowed next steps:

- use it after verdict template when the operator wants file-specific update scaffolds
- include it inside the operator session bundle
- keep generated update draft files untracked via git ignore
