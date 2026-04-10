param(
    [Parameter(Mandatory = $true)]
    [string[]]$Paths,

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

$files = Get-TroyEpisodeFiles -Paths $Paths
$results = foreach ($file in $files) {
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

if ($AsJson) {
    $results | ConvertTo-Json -Depth 5
}
else {
    foreach ($result in ($results | Sort-Object EpisodeCode)) {
        Write-Output ("[{0}] {1} ({2})" -f $result.Status.ToUpperInvariant(), $result.EpisodeCode, $result.Path)
        if ($result.HitCount -gt 0) {
            foreach ($hit in $result.Hits) {
                Write-Output ("  - {0} @ line {1}: {2}" -f $hit.Pattern, $hit.Line, $hit.Text)
            }
        }
    }
}
