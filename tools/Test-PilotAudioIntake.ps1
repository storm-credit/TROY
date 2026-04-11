param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),

    [string[]]$RunIds = @(
        "E054-A01",
        "E113-A01",
        "E050-A01"
    ),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$resolvedRoot = [System.IO.Path]::GetFullPath($AudioRoot)

$rows = foreach ($runId in $RunIds) {
    $matches = @()

    if (Test-Path -LiteralPath $resolvedRoot) {
        $matches = @(
            Get-ChildItem -LiteralPath $resolvedRoot -File |
                Where-Object { $_.BaseName -eq $runId } |
                Sort-Object LastWriteTime -Descending
        )
    }

    $latest = $matches | Select-Object -First 1

    [pscustomobject]@{
        RunId = $runId
        Status = if ($latest) { "audio ready for verdict" } else { "awaiting external audio" }
        MatchCount = $matches.Count
        LatestFile = if ($latest) { $latest.FullName } else { $null }
        LastWriteTime = if ($latest) { $latest.LastWriteTime } else { $null }
        Bytes = if ($latest) { $latest.Length } else { $null }
        AudioRoot = $resolvedRoot
    }
}

if ($AsJson) {
    $rows | ConvertTo-Json -Depth 4
}
else {
    $rows | Format-Table RunId, Status, MatchCount, LatestFile, LastWriteTime, Bytes -AutoSize
}
