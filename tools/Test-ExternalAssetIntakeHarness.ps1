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
$verdictTemplateScript = Join-Path $PSScriptRoot "Export-ExternalAssetVerdictTemplate.ps1"
$operatorSessionScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetOperatorSession.ps1"

$tempOutput = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_review_snapshot_{0}.md" -f ([guid]::NewGuid().ToString("N")))
$tempActionPacket = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_action_packet_{0}.md" -f ([guid]::NewGuid().ToString("N")))
$tempVerdictTemplate = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_verdict_template_{0}.md" -f ([guid]::NewGuid().ToString("N")))
$tempOperatorSession = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_operator_session_{0}" -f ([guid]::NewGuid().ToString("N")))

try {
    $dashboard = & $dashboardScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $reviewRun = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
    $snapshotLine = & $snapshotScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempOutput
    $actionPacketLine = & $actionPacketScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempActionPacket
    $verdictTemplateLine = & $verdictTemplateScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputPath $tempVerdictTemplate
    $operatorSession = & $operatorSessionScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -OutputDirectory $tempOperatorSession -AsJson | ConvertFrom-Json

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

    $verdictTemplateExists = Test-Path -LiteralPath $tempVerdictTemplate
    $verdictTemplatePreview = @()
    if ($verdictTemplateExists) {
        $verdictTemplatePreview = @(Get-Content -LiteralPath $tempVerdictTemplate | Select-Object -First 10)
    }

    $operatorSessionExists = Test-Path -LiteralPath $tempOperatorSession
    $operatorSessionFilesExist = $false
    if ($operatorSessionExists) {
        $operatorSessionFilesExist =
            (Test-Path -LiteralPath (Join-Path $tempOperatorSession "01_review_snapshot.md")) -and
            (Test-Path -LiteralPath (Join-Path $tempOperatorSession "02_action_packet.md")) -and
            (Test-Path -LiteralPath (Join-Path $tempOperatorSession "03_verdict_template.md"))
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
        [pscustomobject]@{
            Check = "verdict template export"
            Status = if ($verdictTemplateExists) { "pass" } else { "fail" }
            Note = if ($verdictTemplateExists) { $tempVerdictTemplate } else { "verdict template file not created" }
        }
        [pscustomobject]@{
            Check = "operator session bundle"
            Status = if ($operatorSessionExists -and $operatorSessionFilesExist) { "pass" } else { "fail" }
            Note = if ($operatorSessionExists -and $operatorSessionFilesExist) { $tempOperatorSession } else { "operator session files not created" }
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
        VerdictTemplatePreview = $verdictTemplatePreview
        SnapshotOutput = $tempOutput
        ActionPacketOutput = $tempActionPacket
        VerdictTemplateOutput = $tempVerdictTemplate
        OperatorSessionOutput = $tempOperatorSession
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

        if ($verdictTemplatePreview.Count -gt 0) {
            Write-Output ""
            Write-Output "VerdictTemplatePreview:"
            foreach ($line in $verdictTemplatePreview) {
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
    if (Test-Path -LiteralPath $tempVerdictTemplate) {
        Remove-Item -LiteralPath $tempVerdictTemplate
    }
    if (Test-Path -LiteralPath $tempOperatorSession) {
        Remove-Item -LiteralPath $tempOperatorSession -Recurse -Force
    }
}
