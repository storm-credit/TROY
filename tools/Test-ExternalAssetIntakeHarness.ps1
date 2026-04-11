param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$dashboardScript = Join-Path $PSScriptRoot "Invoke-MediaIntakeDashboard.ps1"
$reviewRunScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetReviewRun.ps1"
$snapshotScript = Join-Path $PSScriptRoot "Export-ExternalAssetReviewSnapshot.ps1"
$actionPacketScript = Join-Path $PSScriptRoot "Export-ExternalAssetActionPacket.ps1"

$tempOutput = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_review_snapshot_{0}.md" -f ([guid]::NewGuid().ToString("N")))
$tempActionPacket = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_action_packet_{0}.md" -f ([guid]::NewGuid().ToString("N")))

try {
    $dashboard = & $dashboardScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $reviewRun = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $snapshotLine = & $snapshotScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempOutput
    $actionPacketLine = & $actionPacketScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempActionPacket

    $snapshotExists = Test-Path -LiteralPath $tempOutput
    $snapshotPreview = @()
    if ($snapshotExists) {
        $snapshotPreview = @(Get-Content -LiteralPath $tempOutput | Select-Object -First 5)
    }

    $actionPacketExists = Test-Path -LiteralPath $tempActionPacket
    $actionPacketPreview = @()
    if ($actionPacketExists) {
        $actionPacketPreview = @(Get-Content -LiteralPath $tempActionPacket | Select-Object -First 8)
    }

    $checks = @(
        [pscustomobject]@{
            Check = "dashboard json"
            Status = if ($null -ne $dashboard -and $null -ne $dashboard.OverallStatus) { "pass" } else { "fail" }
            Note = if ($null -ne $dashboard -and $null -ne $dashboard.OverallStatus) { $dashboard.OverallStatus } else { "missing dashboard payload" }
        }
        [pscustomobject]@{
            Check = "review run json"
            Status = if ($null -ne $reviewRun -and $null -ne $reviewRun.ReviewReady) { "pass" } else { "fail" }
            Note = if ($null -ne $reviewRun -and $null -ne $reviewRun.ReviewReady) { $reviewRun.NextAction } else { "missing review payload" }
        }
        [pscustomobject]@{
            Check = "snapshot export"
            Status = if ($snapshotExists) { "pass" } else { "fail" }
            Note = if ($snapshotExists) { $tempOutput } else { "snapshot file not created" }
        }
        [pscustomobject]@{
            Check = "action packet export"
            Status = if ($actionPacketExists) { "pass" } else { "fail" }
            Note = if ($actionPacketExists) { $tempActionPacket } else { "action packet file not created" }
        }
    )

    $failedChecks = @($checks | Where-Object { $_.Status -eq "fail" })

    $payload = [pscustomobject]@{
        AudioRoot = [System.IO.Path]::GetFullPath($AudioRoot)
        ImageRoot = [System.IO.Path]::GetFullPath($ImageRoot)
        OverallStatus = if ($failedChecks.Count -eq 0) { "pass" } else { "fail" }
        Checks = $checks
        SnapshotPreview = $snapshotPreview
        ActionPacketPreview = $actionPacketPreview
        SnapshotOutput = $tempOutput
        ActionPacketOutput = $tempActionPacket
        ReviewReady = $reviewRun.ReviewReady
        DashboardStatus = $dashboard.OverallStatus
    }

    if ($AsJson) {
        $payload | ConvertTo-Json -Depth 6
    }
    else {
        Write-Output "[EXTERNAL ASSET INTAKE HARNESS TEST]"
        Write-Output ("OverallStatus: {0}" -f $payload.OverallStatus)
        Write-Output ("DashboardStatus: {0}" -f $payload.DashboardStatus)
        Write-Output ("ReviewReady: {0}" -f $payload.ReviewReady)
        Write-Output ""
        $checks | Format-Table Check, Status, Note -AutoSize

        if ($snapshotPreview.Count -gt 0) {
            Write-Output ""
            Write-Output "SnapshotPreview:"
            foreach ($line in $snapshotPreview) {
                Write-Output ("  {0}" -f $line)
            }
        }

        if ($actionPacketPreview.Count -gt 0) {
            Write-Output ""
            Write-Output "ActionPacketPreview:"
            foreach ($line in $actionPacketPreview) {
                Write-Output ("  {0}" -f $line)
            }
        }
    }
}
finally {
    if (Test-Path -LiteralPath $tempOutput) {
        Remove-Item -LiteralPath $tempOutput
    }
    if (Test-Path -LiteralPath $tempActionPacket) {
        Remove-Item -LiteralPath $tempActionPacket
    }
}
