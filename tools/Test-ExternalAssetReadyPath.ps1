param(
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

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("troy_external_asset_ready_{0}" -f ([guid]::NewGuid().ToString("N")))
$audioRoot = Join-Path $tempRoot "audio"
$imageRoot = Join-Path $tempRoot "image"
$snapshotPath = Join-Path $tempRoot "ready_snapshot.md"
$actionPacketPath = Join-Path $tempRoot "ready_action_packet.md"
$verdictTemplatePath = Join-Path $tempRoot "ready_verdict_template.md"
$operatorSessionPath = Join-Path $tempRoot "operator_session"

$audioFiles = @(
    "E054-A01.wav",
    "E113-A01.wav",
    "E050-A01.wav"
)

$imageFiles = @(
    "ARIN_MASTER_FRONT_v01.png",
    "ARIN_MASTER_34_v01.png",
    "SEOJUN_MASTER_FRONT_v01.png",
    "SEOJUN_MASTER_34_v01.png"
)

try {
    New-Item -ItemType Directory -Path $audioRoot -Force | Out-Null
    New-Item -ItemType Directory -Path $imageRoot -Force | Out-Null

    foreach ($name in $audioFiles) {
        Set-Content -LiteralPath (Join-Path $audioRoot $name) -Value "dummy-audio" -Encoding UTF8
    }

    foreach ($name in $imageFiles) {
        Set-Content -LiteralPath (Join-Path $imageRoot $name) -Value "dummy-image" -Encoding UTF8
    }

    $dashboard = & $dashboardScript -AudioRoot $audioRoot -ImageRoot $imageRoot -AsJson | ConvertFrom-Json
    $reviewRun = & $reviewRunScript -AudioRoot $audioRoot -ImageRoot $imageRoot -AsJson | ConvertFrom-Json
    $snapshotLine = & $snapshotScript -AudioRoot $audioRoot -ImageRoot $imageRoot -OutputPath $snapshotPath
    $actionPacketLine = & $actionPacketScript -AudioRoot $audioRoot -ImageRoot $imageRoot -OutputPath $actionPacketPath
    $verdictTemplateLine = & $verdictTemplateScript -AudioRoot $audioRoot -ImageRoot $imageRoot -OutputPath $verdictTemplatePath
    $operatorSession = & $operatorSessionScript -AudioRoot $audioRoot -ImageRoot $imageRoot -OutputDirectory $operatorSessionPath -AsJson | ConvertFrom-Json

    $snapshotExists = Test-Path -LiteralPath $snapshotPath
    $snapshotPreview = @()
    if ($snapshotExists) {
        $snapshotPreview = @(Get-Content -LiteralPath $snapshotPath | Select-Object -First 12)
    }

    $actionPacketExists = Test-Path -LiteralPath $actionPacketPath
    $actionPacketPreview = @()
    if ($actionPacketExists) {
        $actionPacketPreview = @(Get-Content -LiteralPath $actionPacketPath | Select-Object -First 12)
    }

    $verdictTemplateExists = Test-Path -LiteralPath $verdictTemplatePath
    $verdictTemplatePreview = @()
    if ($verdictTemplateExists) {
        $verdictTemplatePreview = @(Get-Content -LiteralPath $verdictTemplatePath | Select-Object -First 12)
    }

    $operatorSessionExists = Test-Path -LiteralPath $operatorSessionPath
    $operatorSessionFilesExist = $false
    if ($operatorSessionExists) {
        $operatorSessionFilesExist =
            (Test-Path -LiteralPath (Join-Path $operatorSessionPath "01_review_snapshot.md")) -and
            (Test-Path -LiteralPath (Join-Path $operatorSessionPath "02_action_packet.md")) -and
            (Test-Path -LiteralPath (Join-Path $operatorSessionPath "03_verdict_template.md"))
    }

    $checks = @(
        [pscustomobject]@{
            Check = "dashboard ready count"
            Status = if ($dashboard.TotalReadyItems -eq 7) { "pass" } else { "fail" }
            Note = "expected 7 ready items"
        }
        [pscustomobject]@{
            Check = "audio ready count"
            Status = if ($dashboard.AudioReadyCount -eq 3) { "pass" } else { "fail" }
            Note = "expected 3 ready audio runs"
        }
        [pscustomobject]@{
            Check = "visual ready count"
            Status = if ($dashboard.VisualReadyCount -eq 4) { "pass" } else { "fail" }
            Note = "expected 4 ready visual references"
        }
        [pscustomobject]@{
            Check = "review run ready"
            Status = if ($reviewRun.ReviewReady -eq $true) { "pass" } else { "fail" }
            Note = "review run should switch to ready"
        }
        [pscustomobject]@{
            Check = "audio assist ready count"
            Status = if ($null -ne $reviewRun.AudioAssist -and $reviewRun.AudioAssist.ReadyCount -eq 3) { "pass" } else { "fail" }
            Note = "audio assist should include all three runs"
        }
        [pscustomobject]@{
            Check = "visual assist ready count"
            Status = if ($null -ne $reviewRun.VisualAssist -and $reviewRun.VisualAssist.ReadyCount -eq 4) { "pass" } else { "fail" }
            Note = "visual assist should include all four references"
        }
        [pscustomobject]@{
            Check = "snapshot export"
            Status = if ($snapshotExists) { "pass" } else { "fail" }
            Note = if ($snapshotExists) { $snapshotPath } else { "snapshot file not created" }
        }
        [pscustomobject]@{
            Check = "action packet export"
            Status = if ($actionPacketExists) { "pass" } else { "fail" }
            Note = if ($actionPacketExists) { $actionPacketPath } else { "action packet file not created" }
        }
        [pscustomobject]@{
            Check = "verdict template export"
            Status = if ($verdictTemplateExists) { "pass" } else { "fail" }
            Note = if ($verdictTemplateExists) { $verdictTemplatePath } else { "verdict template file not created" }
        }
        [pscustomobject]@{
            Check = "operator session bundle"
            Status = if ($operatorSessionExists -and $operatorSessionFilesExist) { "pass" } else { "fail" }
            Note = if ($operatorSessionExists -and $operatorSessionFilesExist) { $operatorSessionPath } else { "operator session files not created" }
        }
    )

    $failedChecks = @($checks | Where-Object { $_.Status -eq "fail" })

    $payload = [pscustomobject]@{
        OverallStatus = if ($failedChecks.Count -eq 0) { "pass" } else { "fail" }
        DashboardStatus = $dashboard.OverallStatus
        TotalReadyItems = $dashboard.TotalReadyItems
        AudioReadyCount = $dashboard.AudioReadyCount
        VisualReadyCount = $dashboard.VisualReadyCount
        ReviewReady = $reviewRun.ReviewReady
        Checks = $checks
        SnapshotPreview = $snapshotPreview
        ActionPacketPreview = $actionPacketPreview
        VerdictTemplatePreview = $verdictTemplatePreview
    }

    if ($AsJson) {
        $payload | ConvertTo-Json -Depth 6
    }
    else {
        Write-Output "[EXTERNAL ASSET READY PATH TEST]"
        Write-Output ("OverallStatus: {0}" -f $payload.OverallStatus)
        Write-Output ("DashboardStatus: {0}" -f $payload.DashboardStatus)
        Write-Output ("TotalReadyItems: {0}" -f $payload.TotalReadyItems)
        Write-Output ("AudioReadyCount: {0}" -f $payload.AudioReadyCount)
        Write-Output ("VisualReadyCount: {0}" -f $payload.VisualReadyCount)
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
    if (Test-Path -LiteralPath $tempRoot) {
        Remove-Item -LiteralPath $tempRoot -Recurse -Force
    }
}
