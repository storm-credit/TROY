# EXTERNAL_ASSET_INTAKE_MODULE

## owner

- parent:
  - 오케스트라 총괄
- specialist:
  - media intake / verdict routing specialist

## job

- 외부에서 들어오는 audio / reference image 유입 여부를 먼저 확인한다
- review 가능한 asset만 골라 verdict worksheet로 연결한다
- 아직 asset이 없을 때는 다음 실무자가 헷갈리지 않도록 blocked status를 명확히 보여 준다

## input

- queued music run ids
- expected audio file names
- expected reference image base names
- verdict worksheet rules
- local drop folders

## output

- ready / waiting intake status
- per-asset worksheet routing
- orchestra-level dashboard status
- next action line

## current tools

- `tools/Test-PilotAudioIntake.ps1`
- `tools/Get-PilotVerdictWorksheet.ps1`
- `tools/Invoke-PilotVerdictAssist.ps1`
- `tools/Test-VisualReferenceIntake.ps1`
- `tools/Get-VisualReferenceWorksheet.ps1`
- `tools/Invoke-VisualReferenceAssist.ps1`
- `tools/Invoke-MediaIntakeDashboard.ps1`
- `tools/Invoke-ExternalAssetReviewRun.ps1`
- `tools/Export-ExternalAssetReviewSnapshot.ps1`
- `tools/Test-ExternalAssetIntakeHarness.ps1`
- `tools/Test-ExternalAssetReadyPath.ps1`

## live ops lock

- `ops/external_asset_intake_live_sequence_2026_04_12.md`
- `ops/external_asset_intake_release_readiness_audit_2026_04_12.md`

## minimal live path

1. run `Invoke-MediaIntakeDashboard.ps1`
2. run `Invoke-ExternalAssetReviewRun.ps1` for one-command orchestration
3. if needed, inspect a specific worksheet in detail
4. if a session record is needed, run `Export-ExternalAssetReviewSnapshot.ps1`
5. update the target logs or continuity board in the same session
6. rerun dashboard before opening the next stage

## harness check

- run `Test-ExternalAssetIntakeHarness.ps1` when the intake stack changes
- this checks dashboard json, review run json, and snapshot export in one pass
- run `Test-ExternalAssetReadyPath.ps1` when you need a synthetic ready-path dry run without touching the real local media folders

## current tracked assets

- audio:
  - `E054-A01`
  - `E113-A01`
  - `E050-A01`
- visual reference:
  - `ARIN_MASTER_FRONT_v01`
  - `ARIN_MASTER_34_v01`
  - `SEOJUN_MASTER_FRONT_v01`
  - `SEOJUN_MASTER_34_v01`

## pass gate

- only assets that actually exist are marked ready
- each ready asset can immediately map to a review worksheet
- dashboard clearly separates ready items from waiting items
- no git-tracked media file is required

## reject if

- intake helper guesses readiness without a real file
- worksheet routing is missing for a ready asset
- dashboard hides blocked state or mixes audio/image queues
- orchestration jumps to MV production without a real intake pass
