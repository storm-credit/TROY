param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),
    [string]$OutputDirectory,
    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$reviewRunScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetReviewRun.ps1"
$snapshotScript = Join-Path $PSScriptRoot "Export-ExternalAssetReviewSnapshot.ps1"
$actionPacketScript = Join-Path $PSScriptRoot "Export-ExternalAssetActionPacket.ps1"
$verdictTemplateScript = Join-Path $PSScriptRoot "Export-ExternalAssetVerdictTemplate.ps1"

if (-not $OutputDirectory) {
    $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $opsDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) "ops"
    $OutputDirectory = Join-Path $opsDirectory ("external_asset_operator_session_{0}" -f $stamp)
}

if (-not (Test-Path -LiteralPath $OutputDirectory)) {
    New-Item -ItemType Directory -Path $OutputDirectory | Out-Null
}

$reviewRun = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
$snapshotPath = Join-Path $OutputDirectory "01_review_snapshot.md"
$actionPacketPath = Join-Path $OutputDirectory "02_action_packet.md"
$verdictTemplatePath = Join-Path $OutputDirectory "03_verdict_template.md"

$null = & $snapshotScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $snapshotPath
$null = & $actionPacketScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $actionPacketPath
$null = & $verdictTemplateScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $verdictTemplatePath

$payload = [pscustomobject]@{
    OutputDirectory = $OutputDirectory
    OverallStatus = $reviewRun.Dashboard.OverallStatus
    ReviewReady = $reviewRun.ReviewReady
    TotalReadyItems = $reviewRun.Dashboard.TotalReadyItems
    NextAction = $reviewRun.NextAction
    Files = [pscustomobject]@{
        ReviewSnapshot = $snapshotPath
        ActionPacket = $actionPacketPath
        VerdictTemplate = $verdictTemplatePath
    }
}

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 6
}
else {
    Write-Output "[EXTERNAL ASSET OPERATOR SESSION]"
    Write-Output ("OverallStatus: {0}" -f $payload.OverallStatus)
    Write-Output ("ReviewReady: {0}" -f $payload.ReviewReady)
    Write-Output ("TotalReadyItems: {0}" -f $payload.TotalReadyItems)
    Write-Output ("NextAction: {0}" -f $payload.NextAction)
    Write-Output ("OutputDirectory: {0}" -f $payload.OutputDirectory)
    Write-Output ("ReviewSnapshot: {0}" -f $payload.Files.ReviewSnapshot)
    Write-Output ("ActionPacket: {0}" -f $payload.Files.ActionPacket)
    Write-Output ("VerdictTemplate: {0}" -f $payload.Files.VerdictTemplate)
}
