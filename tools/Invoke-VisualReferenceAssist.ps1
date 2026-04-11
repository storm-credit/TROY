param(
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$intakeScript = Join-Path $PSScriptRoot "Test-VisualReferenceIntake.ps1"
$worksheetScript = Join-Path $PSScriptRoot "Get-VisualReferenceWorksheet.ps1"

$intake = & $intakeScript -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

$readyReferences = @(
    $intake | Where-Object { $_.Status -eq "reference image ready for review" }
)

$payload = [pscustomobject]@{
    ImageRoot = [System.IO.Path]::GetFullPath($ImageRoot)
    ReadyCount = $readyReferences.Count
    ReadyReferences = @(
        foreach ($row in $readyReferences) {
            $sheet = & $worksheetScript -BaseName $row.BaseName -AsJson | ConvertFrom-Json
            [pscustomobject]@{
                BaseName = $row.BaseName
                LatestFile = $row.LatestFile
                LastWriteTime = $row.LastWriteTime
                Bytes = $row.Bytes
                Worksheet = $sheet
            }
        }
    )
    WaitingReferences = @(
        foreach ($row in ($intake | Where-Object { $_.Status -ne "reference image ready for review" })) {
            [pscustomobject]@{
                BaseName = $row.BaseName
                Status = $row.Status
            }
        }
    )
}

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 7
}
else {
    Write-Output ("ImageRoot: {0}" -f $payload.ImageRoot)
    Write-Output ("ReadyCount: {0}" -f $payload.ReadyCount)

    if ($payload.ReadyCount -eq 0) {
        Write-Output "No reference image is ready for review."
    }
    else {
        foreach ($item in $payload.ReadyReferences) {
            Write-Output ""
            Write-Output ("[{0}] {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot)
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

    if ($payload.WaitingReferences.Count -gt 0) {
        Write-Output ""
        Write-Output "WaitingReferences:"
        foreach ($item in $payload.WaitingReferences) {
            Write-Output ("  - {0}: {1}" -f $item.BaseName, $item.Status)
        }
    }
}
