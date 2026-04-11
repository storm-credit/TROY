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

$tempOutput = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_review_snapshot_{0}.md" -f ([guid]::NewGuid().ToString("N")))

try {
    $dashboard = & $dashboardScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $reviewRun = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $snapshotLine = & $snapshotScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempOutput

    $snapshotExists = Test-Path -LiteralPath $tempOutput
    $snapshotPreview = @()
    if ($snapshotExists) {
        $snapshotPreview = @(Get-Content -LiteralPath $tempOutput | Select-Object -First 5)
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
    )

    $failedChecks = @($checks | Where-Object { $_.Status -eq "fail" })

    $payload = [pscustomobject]@{
        AudioRoot = [System.IO.Path]::GetFullPath($AudioRoot)
        ImageRoot = [System.IO.Path]::GetFullPath($ImageRoot)
        OverallStatus = if ($failedChecks.Count -eq 0) { "pass" } else { "fail" }
        Checks = $checks
        SnapshotPreview = $snapshotPreview
        SnapshotOutput = $tempOutput
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
    }
}
finally {
    if (Test-Path -LiteralPath $tempOutput) {
        Remove-Item -LiteralPath $tempOutput
    }
}
