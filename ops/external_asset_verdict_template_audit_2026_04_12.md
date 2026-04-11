# external asset verdict template audit 2026-04-12

## 1. purpose

- 이 문서는 `Export-ExternalAssetVerdictTemplate.ps1`가 blocked path와 synthetic ready path 양쪽에서 usable verdict template을 생성하는지 검증한 audit이다.
- 목표는 실제 첫 review 세션에서 사람이 빈 verdict 칸을 바로 채울 수 있게 만드는 것이다.

## 2. audited component

| component | file | status |
|---|---|---|
| verdict template export | `tools/Export-ExternalAssetVerdictTemplate.ps1` | pass |
| blocked-path harness integration | `tools/Test-ExternalAssetIntakeHarness.ps1` | pass |
| synthetic ready-path integration | `tools/Test-ExternalAssetReadyPath.ps1` | pass |

## 3. blocked-path result

Command:

```powershell
.\tools\Test-ExternalAssetIntakeHarness.ps1
```

Result:

- verdict template export:
  - `pass`
- ready audio blocks:
  - `0`
- ready visual blocks:
  - `0`
- operator note:
  - blocked state still produces a safe blank template

Orchestra verdict:

- pass
- no fake review section is generated for missing assets

## 4. synthetic ready-path result

Command:

```powershell
.\tools\Test-ExternalAssetReadyPath.ps1
```

Result:

- verdict template export:
  - `pass`
- ready audio blocks:
  - `3`
- ready visual blocks:
  - `4`
- field skeleton:
  - included for same-session verdict writing

Orchestra verdict:

- pass
- when all expected external assets arrive, the template opens immediately usable verdict blocks

## 5. release decision

`Export-ExternalAssetVerdictTemplate.ps1` is `operator-ready`.

Allowed next steps:

- run it after `Invoke-ExternalAssetReviewRun.ps1` when a fillable verdict skeleton is needed
- keep generated template files untracked via git ignore
- use it together with `Export-ExternalAssetActionPacket.ps1` and `external_asset_update_map_2026_04_12.md`
