param(
    [Parameter(Mandatory = $true)]
    [string]$RangeLabel,

    [Parameter(Mandatory = $true)]
    [string[]]$Paths,

    [Parameter(Mandatory = $true)]
    [string]$OutputPath,

    [int]$HardFloor = 3500,
    [int]$SafeLine = 4000,

    [string[]]$Patterns = @(
        "운명",
        "능력 회복",
        "재결합",
        "해피엔드"
    )
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\TroyHookCommon.ps1"

$files = Get-TroyEpisodeFiles -Paths $Paths | Sort-Object
$lengthRows = foreach ($file in $files) {
    $text = Get-Content -LiteralPath $file -Raw
    $hangul = Get-TroyHangulCount -Text $text
    $nonWhitespace = Get-TroyNonWhitespaceCount -Text $text

    [pscustomobject]@{
        EpisodeCode = Get-TroyEpisodeCode -Path $file
        HangulCount = $hangul
        NonWhitespaceCount = $nonWhitespace
        Status = Get-TroyLengthStatus -HangulCount $hangul -HardFloor $HardFloor -SafeLine $SafeLine
        Path = $file
    }
}

$patternRows = foreach ($file in $files) {
    $hits = @(
        foreach ($pattern in $Patterns) {
        Select-String -LiteralPath $file -Pattern $pattern -SimpleMatch | ForEach-Object {
            [pscustomobject]@{
                Pattern = $pattern
                Line = $_.LineNumber
                Text = $_.Line.Trim()
            }
        }
        }
    )

    [pscustomobject]@{
        EpisodeCode = Get-TroyEpisodeCode -Path $file
        Status = if ($hits.Count -eq 0) { "pass" } else { "fail" }
        HitCount = $hits.Count
        Hits = @($hits)
    }
}

$generatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$lines = New-Object System.Collections.Generic.List[string]

[void]$lines.Add("# $RangeLabel")
[void]$lines.Add("")
[void]$lines.Add("Generated at: $generatedAt")
[void]$lines.Add("")
[void]$lines.Add("## Length Gate")
[void]$lines.Add("")
[void]$lines.Add("| Episode | Hangul | Non-Whitespace | Status |")
[void]$lines.Add("|---|---:|---:|---|")

foreach ($row in $lengthRows) {
    [void]$lines.Add("| $($row.EpisodeCode) | $($row.HangulCount) | $($row.NonWhitespaceCount) | $($row.Status) |")
}

[void]$lines.Add("")
[void]$lines.Add("## Forbidden Pattern Sweep")
[void]$lines.Add("")

foreach ($row in $patternRows) {
    [void]$lines.Add("- $($row.EpisodeCode): $($row.Status)")
    if ($row.HitCount -gt 0) {
        foreach ($hit in $row.Hits) {
            [void]$lines.Add("  - $($hit.Pattern) @ line $($hit.Line): $($hit.Text)")
        }
    }
}

$directory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
}

Set-Content -LiteralPath $OutputPath -Value $lines -Encoding UTF8
Write-Output $OutputPath
