param(
    [Parameter(Mandatory = $true)]
    [string]$RangeLabel,

    [Parameter(Mandatory = $true)]
    [string[]]$Paths,

    [string]$OutputPath,

    [int]$HardFloor = 3500,
    [int]$SafeLine = 4000,

    [string[]]$Patterns = @(
        "운명",
        "능력 회복",
        "재결합",
        "해피엔드"
    ),

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

. "$PSScriptRoot\TroyHookCommon.ps1"

$files = Get-TroyEpisodeFiles -Paths $Paths | Sort-Object

if (-not $OutputPath) {
    $safeLabel = (($RangeLabel -replace "[^a-zA-Z0-9가-힣_\- ]", "") -replace "\s+", "_").Trim("_")
    $opsDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) "ops"
    $OutputPath = Join-Path $opsDirectory ("{0}_gate.md" -f $safeLabel)
}

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
        Path = $file
    }
}

$generatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$reportLines = New-Object System.Collections.Generic.List[string]

[void]$reportLines.Add("# $RangeLabel")
[void]$reportLines.Add("")
[void]$reportLines.Add("Generated at: $generatedAt")
[void]$reportLines.Add("")
[void]$reportLines.Add("## Length Gate")
[void]$reportLines.Add("")
[void]$reportLines.Add("| Episode | Hangul | Non-Whitespace | Status |")
[void]$reportLines.Add("|---|---:|---:|---|")

foreach ($row in $lengthRows) {
    [void]$reportLines.Add("| $($row.EpisodeCode) | $($row.HangulCount) | $($row.NonWhitespaceCount) | $($row.Status) |")
}

[void]$reportLines.Add("")
[void]$reportLines.Add("## Forbidden Pattern Sweep")
[void]$reportLines.Add("")

foreach ($row in $patternRows) {
    [void]$reportLines.Add("- $($row.EpisodeCode): $($row.Status)")
    if ($row.HitCount -gt 0) {
        foreach ($hit in $row.Hits) {
            [void]$reportLines.Add("  - $($hit.Pattern) @ line $($hit.Line): $($hit.Text)")
        }
    }
}

$directory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
}

Set-Content -LiteralPath $OutputPath -Value $reportLines -Encoding UTF8

$summary = [pscustomobject]@{
    RangeLabel = $RangeLabel
    GeneratedAt = $generatedAt
    OutputPath = $OutputPath
    EpisodeCount = $lengthRows.Count
    LengthRows = @($lengthRows)
    PatternRows = @($patternRows)
}

if ($AsJson) {
    $summary | ConvertTo-Json -Depth 6
}
else {
    Write-Output ("[ORCHESTRA RUN] {0}" -f $RangeLabel)
    Write-Output ("Output: {0}" -f $OutputPath)
    Write-Output ""
    $lengthRows | Format-Table EpisodeCode, HangulCount, NonWhitespaceCount, Status -AutoSize
    Write-Output ""
    foreach ($row in $patternRows) {
        Write-Output ("[{0}] {1}" -f $row.Status.ToUpperInvariant(), $row.EpisodeCode)
        if ($row.HitCount -gt 0) {
            foreach ($hit in $row.Hits) {
                Write-Output ("  - {0} @ line {1}: {2}" -f $hit.Pattern, $hit.Line, $hit.Text)
            }
        }
    }
}
