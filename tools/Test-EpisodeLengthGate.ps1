param(
    [Parameter(Mandatory = $true)]
    [string[]]$Paths,

    [int]$HardFloor = 3500,
    [int]$SafeLine = 4000,

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\TroyHookCommon.ps1"

$files = Get-TroyEpisodeFiles -Paths $Paths
$rows = foreach ($file in $files) {
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

if ($AsJson) {
    $rows | ConvertTo-Json -Depth 3
}
else {
    $rows | Sort-Object EpisodeCode | Format-Table EpisodeCode, HangulCount, NonWhitespaceCount, Status, Path -AutoSize
}
