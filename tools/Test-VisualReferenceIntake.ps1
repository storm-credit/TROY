param(
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),

    [string[]]$ExpectedBaseNames = @(
        "ARIN_MASTER_FRONT_v01",
        "ARIN_MASTER_34_v01",
        "SEOJUN_MASTER_FRONT_v01",
        "SEOJUN_MASTER_34_v01"
    ),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$resolvedRoot = [System.IO.Path]::GetFullPath($ImageRoot)

$rows = foreach ($baseName in $ExpectedBaseNames) {
    $matches = @()

    if (Test-Path -LiteralPath $resolvedRoot) {
        $matches = @(
            Get-ChildItem -LiteralPath $resolvedRoot -File |
                Where-Object { $_.BaseName -eq $baseName } |
                Sort-Object LastWriteTime -Descending
        )
    }

    $latest = $matches | Select-Object -First 1

    [pscustomobject]@{
        BaseName = $baseName
        Status = if ($latest) { "reference image ready for review" } else { "awaiting reference image" }
        MatchCount = $matches.Count
        LatestFile = if ($latest) { $latest.FullName } else { $null }
        LastWriteTime = if ($latest) { $latest.LastWriteTime } else { $null }
        Bytes = if ($latest) { $latest.Length } else { $null }
        ImageRoot = $resolvedRoot
    }
}

if ($AsJson) {
    $rows | ConvertTo-Json -Depth 4
}
else {
    $rows | Format-Table BaseName, Status, MatchCount, LatestFile, LastWriteTime, Bytes -AutoSize
}
