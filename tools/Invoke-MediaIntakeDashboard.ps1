param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$audioAssistScript = Join-Path $PSScriptRoot "Invoke-PilotVerdictAssist.ps1"
$visualAssistScript = Join-Path $PSScriptRoot "Invoke-VisualReferenceAssist.ps1"

$audio = & $audioAssistScript -AudioRoot $AudioRoot -AsJson | ConvertFrom-Json
$visual = & $visualAssistScript -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

$dashboard = [pscustomobject]@{
    AudioRoot = [System.IO.Path]::GetFullPath($AudioRoot)
    ImageRoot = [System.IO.Path]::GetFullPath($ImageRoot)
    AudioReadyCount = $audio.ReadyCount
    VisualReadyCount = $visual.ReadyCount
    TotalReadyItems = ($audio.ReadyCount + $visual.ReadyCount)
    AudioWaiting = @($audio.WaitingRuns)
    VisualWaiting = @($visual.WaitingReferences)
    OverallStatus = if (($audio.ReadyCount + $visual.ReadyCount) -eq 0) {
        "blocked on external assets"
    }
    else {
        "ready items available for review"
    }
    NextAction = if (($audio.ReadyCount + $visual.ReadyCount) -eq 0) {
        "wait for external audio or reference images, then rerun the dashboard"
    }
    else {
        "review ready items and update session logs / continuity board"
    }
}

if ($AsJson) {
    $dashboard | ConvertTo-Json -Depth 6
}
else {
    Write-Output ("AudioRoot: {0}" -f $dashboard.AudioRoot)
    Write-Output ("ImageRoot: {0}" -f $dashboard.ImageRoot)
    Write-Output ("AudioReadyCount: {0}" -f $dashboard.AudioReadyCount)
    Write-Output ("VisualReadyCount: {0}" -f $dashboard.VisualReadyCount)
    Write-Output ("TotalReadyItems: {0}" -f $dashboard.TotalReadyItems)
    Write-Output ("OverallStatus: {0}" -f $dashboard.OverallStatus)
    Write-Output ("NextAction: {0}" -f $dashboard.NextAction)

    if ($dashboard.AudioWaiting.Count -gt 0) {
        Write-Output ""
        Write-Output "AudioWaiting:"
        foreach ($item in $dashboard.AudioWaiting) {
            Write-Output ("  - {0}: {1}" -f $item.RunId, $item.Status)
        }
    }

    if ($dashboard.VisualWaiting.Count -gt 0) {
        Write-Output ""
        Write-Output "VisualWaiting:"
        foreach ($item in $dashboard.VisualWaiting) {
            Write-Output ("  - {0}: {1}" -f $item.BaseName, $item.Status)
        }
    }
}
