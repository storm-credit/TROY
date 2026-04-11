param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$dashboardScript = Join-Path $PSScriptRoot "Invoke-MediaIntakeDashboard.ps1"
$audioAssistScript = Join-Path $PSScriptRoot "Invoke-PilotVerdictAssist.ps1"
$visualAssistScript = Join-Path $PSScriptRoot "Invoke-VisualReferenceAssist.ps1"

$dashboard = & $dashboardScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

$audioAssist = $null
if ($dashboard.AudioReadyCount -gt 0) {
    $audioAssist = & $audioAssistScript -AudioRoot $AudioRoot -AsJson | ConvertFrom-Json
}

$visualAssist = $null
if ($dashboard.VisualReadyCount -gt 0) {
    $visualAssist = & $visualAssistScript -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json
}

$payload = [pscustomobject]@{
    Dashboard = $dashboard
    AudioAssist = $audioAssist
    VisualAssist = $visualAssist
    ReviewReady = [bool](($dashboard.TotalReadyItems) -gt 0)
    NextAction = $dashboard.NextAction
}

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 8
}
else {
    Write-Output "[EXTERNAL ASSET REVIEW RUN]"
    Write-Output ("OverallStatus: {0}" -f $dashboard.OverallStatus)
    Write-Output ("TotalReadyItems: {0}" -f $dashboard.TotalReadyItems)
    Write-Output ("NextAction: {0}" -f $dashboard.NextAction)

    Write-Output ""
    Write-Output "[DASHBOARD]"
    Write-Output ("  AudioReadyCount: {0}" -f $dashboard.AudioReadyCount)
    Write-Output ("  VisualReadyCount: {0}" -f $dashboard.VisualReadyCount)

    if ($dashboard.AudioWaiting.Count -gt 0) {
        Write-Output "  AudioWaiting:"
        foreach ($item in $dashboard.AudioWaiting) {
            Write-Output ("    - {0}: {1}" -f $item.RunId, $item.Status)
        }
    }

    if ($dashboard.VisualWaiting.Count -gt 0) {
        Write-Output "  VisualWaiting:"
        foreach ($item in $dashboard.VisualWaiting) {
            Write-Output ("    - {0}: {1}" -f $item.BaseName, $item.Status)
        }
    }

    if ($audioAssist -and $audioAssist.ReadyCount -gt 0) {
        Write-Output ""
        Write-Output "[AUDIO REVIEW READY]"
        foreach ($item in $audioAssist.ReadyRuns) {
            Write-Output ("  - {0}: {1}" -f $item.RunId, $item.Worksheet.Title)
            Write-Output ("    PassAnchor: {0}" -f $item.Worksheet.PassAnchor)
        }
    }

    if ($visualAssist -and $visualAssist.ReadyCount -gt 0) {
        Write-Output ""
        Write-Output "[VISUAL REVIEW READY]"
        foreach ($item in $visualAssist.ReadyReferences) {
            Write-Output ("  - {0}: {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot)
            Write-Output ("    PassAnchor: {0}" -f $item.Worksheet.PassAnchor)
        }
    }
}
