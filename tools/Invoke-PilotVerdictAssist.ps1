param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$intakeScript = Join-Path $PSScriptRoot "Test-PilotAudioIntake.ps1"
$worksheetScript = Join-Path $PSScriptRoot "Get-PilotVerdictWorksheet.ps1"

$intake = & $intakeScript -AudioRoot $AudioRoot -AsJson | ConvertFrom-Json

$readyRuns = @(
    $intake | Where-Object { $_.Status -eq "audio ready for verdict" }
)

$payload = [pscustomobject]@{
    AudioRoot = [System.IO.Path]::GetFullPath($AudioRoot)
    ReadyCount = $readyRuns.Count
    ReadyRuns = @(
        foreach ($row in $readyRuns) {
            $sheet = & $worksheetScript -RunId $row.RunId -AsJson | ConvertFrom-Json
            [pscustomobject]@{
                RunId = $row.RunId
                LatestFile = $row.LatestFile
                LastWriteTime = $row.LastWriteTime
                Bytes = $row.Bytes
                Worksheet = $sheet
            }
        }
    )
    WaitingRuns = @(
        foreach ($row in ($intake | Where-Object { $_.Status -ne "audio ready for verdict" })) {
            [pscustomobject]@{
                RunId = $row.RunId
                Status = $row.Status
            }
        }
    )
}

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 7
}
else {
    Write-Output ("AudioRoot: {0}" -f $payload.AudioRoot)
    Write-Output ("ReadyCount: {0}" -f $payload.ReadyCount)

    if ($payload.ReadyCount -eq 0) {
        Write-Output "No audio is ready for verdict."
    }
    else {
        foreach ($item in $payload.ReadyRuns) {
            Write-Output ""
            Write-Output ("[{0}] {1}" -f $item.RunId, $item.Worksheet.Title)
            Write-Output ("  File: {0}" -f $item.LatestFile)
            Write-Output ("  PassAnchor: {0}" -f $item.Worksheet.PassAnchor)
            Write-Output "  KeyChecks:"
            foreach ($check in $item.Worksheet.KeyChecks) {
                Write-Output ("    - {0}" -f $check)
            }
            Write-Output "  RejectSignals:"
            foreach ($signal in $item.Worksheet.RejectSignals) {
                Write-Output ("    - {0}" -f $signal)
            }
            Write-Output "  UpdateTargets:"
            foreach ($target in $item.Worksheet.UpdateTargets) {
                Write-Output ("    - {0}" -f $target)
            }
        }
    }

    if ($payload.WaitingRuns.Count -gt 0) {
        Write-Output ""
        Write-Output "WaitingRuns:"
        foreach ($item in $payload.WaitingRuns) {
            Write-Output ("  - {0}: {1}" -f $item.RunId, $item.Status)
        }
    }
}
