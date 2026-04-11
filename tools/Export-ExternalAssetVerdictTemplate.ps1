param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),
    [string]$OutputPath,
    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$reviewRunScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetReviewRun.ps1"
$result = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

if (-not $OutputPath) {
    $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $opsDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) "ops"
    $OutputPath = Join-Path $opsDirectory ("external_asset_verdict_template_{0}.md" -f $stamp)
}

$generatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$readyAudio = @()
if ($null -ne $result.AudioAssist -and $null -ne $result.AudioAssist.ReadyRuns) {
    $readyAudio = @($result.AudioAssist.ReadyRuns)
}

$readyVisual = @()
if ($null -ne $result.VisualAssist -and $null -ne $result.VisualAssist.ReadyReferences) {
    $readyVisual = @($result.VisualAssist.ReadyReferences)
}

$payload = [pscustomobject]@{
    GeneratedAt = $generatedAt
    OutputPath = $OutputPath
    OverallStatus = $result.Dashboard.OverallStatus
    ReviewReady = $result.ReviewReady
    AudioReadyCount = $readyAudio.Count
    VisualReadyCount = $readyVisual.Count
    ReadyAudio = $readyAudio
    ReadyVisual = $readyVisual
}

$lines = New-Object System.Collections.Generic.List[string]

[void]$lines.Add("# External Asset Verdict Template")
[void]$lines.Add("")
[void]$lines.Add(("Generated at: {0}" -f $generatedAt))
[void]$lines.Add(("OverallStatus: {0}" -f $payload.OverallStatus))
[void]$lines.Add(("ReviewReady: {0}" -f $payload.ReviewReady))
[void]$lines.Add("")
[void]$lines.Add("## Use Rule")
[void]$lines.Add("")
[void]$lines.Add("- fill `pass / revise / reject` first")
[void]$lines.Add("- keep verdict language short and operational")
[void]$lines.Add("- after filling this template, reflect the same verdict in the update targets from the action packet and update map")
[void]$lines.Add("")
[void]$lines.Add("## Ready Audio Verdict Blocks")
[void]$lines.Add("")

if ($readyAudio.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyAudio) {
        [void]$lines.Add(("### {0} / {1}" -f $item.RunId, $item.Worksheet.Title))
        [void]$lines.Add("")
        [void]$lines.Add(("- file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add("- verdict:")
        [void]$lines.Add("- truth:")
        [void]$lines.Add("- voice:")
        [void]$lines.Add("- restraint:")
        [void]$lines.Add("- memorability:")
        [void]$lines.Add("- non-imitation:")
        [void]$lines.Add("- keep:")
        [void]$lines.Add("- change:")
        [void]$lines.Add("- next gate:")
        [void]$lines.Add("")
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Ready Visual Verdict Blocks")
[void]$lines.Add("")

if ($readyVisual.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyVisual) {
        [void]$lines.Add(("### {0} / {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot))
        [void]$lines.Add("")
        [void]$lines.Add(("- file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add("- verdict:")
        [void]$lines.Add("- identity stability:")
        [void]$lines.Add("- age fit:")
        [void]$lines.Add("- dignity / subjecthood:")
        [void]$lines.Add("- keep:")
        [void]$lines.Add("- change:")
        [void]$lines.Add("- drift reason:")
        [void]$lines.Add("- replacement target:")
        [void]$lines.Add("- next action:")
        [void]$lines.Add("")
    }
}

$directory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
}

Set-Content -LiteralPath $OutputPath -Value $lines -Encoding UTF8

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 8
}
else {
    Write-Output ("VerdictTemplate: {0}" -f $OutputPath)
}
