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
    $OutputPath = Join-Path $opsDirectory ("external_asset_action_packet_{0}.md" -f $stamp)
}

$generatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

$updateTargets = New-Object System.Collections.Generic.List[string]

if ($null -ne $result.AudioAssist) {
    foreach ($item in $result.AudioAssist.ReadyRuns) {
        foreach ($target in $item.Worksheet.UpdateTargets) {
            if (-not $updateTargets.Contains($target)) {
                [void]$updateTargets.Add($target)
            }
        }
    }
}

if ($null -ne $result.VisualAssist) {
    foreach ($item in $result.VisualAssist.ReadyReferences) {
        foreach ($target in $item.Worksheet.UpdateTargets) {
            if (-not $updateTargets.Contains($target)) {
                [void]$updateTargets.Add($target)
            }
        }
    }
}

$sessionSteps = @(
    "Run `.\tools\Invoke-ExternalAssetReviewRun.ps1` and confirm the current dashboard state.",
    "Review only the assets listed under ready items below.",
    "Apply `pass / revise / reject` using each worksheet's pass anchor and reject signals.",
    "Update all listed targets in the same session.",
    "Rerun `.\tools\Invoke-MediaIntakeDashboard.ps1` before opening the next stage."
)

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
    TotalReadyItems = $result.Dashboard.TotalReadyItems
    NextAction = $result.NextAction
    OrderedUpdateTargets = @($updateTargets)
    SessionSteps = $sessionSteps
    ReadyAudio = $readyAudio
    ReadyVisual = $readyVisual
}

$lines = New-Object System.Collections.Generic.List[string]

[void]$lines.Add("# External Asset Action Packet")
[void]$lines.Add("")
[void]$lines.Add(("Generated at: {0}" -f $generatedAt))
[void]$lines.Add(("OverallStatus: {0}" -f $payload.OverallStatus))
[void]$lines.Add(("ReviewReady: {0}" -f $payload.ReviewReady))
[void]$lines.Add(("TotalReadyItems: {0}" -f $payload.TotalReadyItems))
[void]$lines.Add(("NextAction: {0}" -f $payload.NextAction))
[void]$lines.Add("")
[void]$lines.Add("## Session Steps")
[void]$lines.Add("")
for ($i = 0; $i -lt $sessionSteps.Count; $i++) {
    [void]$lines.Add(("{0}. {1}" -f ($i + 1), $sessionSteps[$i]))
}

[void]$lines.Add("")
[void]$lines.Add("## Ordered Update Targets")
[void]$lines.Add("")
if ($updateTargets.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($target in $updateTargets) {
        [void]$lines.Add(("- {0}" -f $target))
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Ready Audio")
[void]$lines.Add("")
if ($readyAudio.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyAudio) {
        [void]$lines.Add(("### {0} - {1}" -f $item.RunId, $item.Worksheet.Title))
        [void]$lines.Add("")
        [void]$lines.Add(("- file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add(("- copy card: {0}" -f $item.Worksheet.CopyCard))
        [void]$lines.Add("- key checks:")
        foreach ($check in $item.Worksheet.KeyChecks) {
            [void]$lines.Add(("  - {0}" -f $check))
        }
        [void]$lines.Add("- reject signals:")
        foreach ($signal in $item.Worksheet.RejectSignals) {
            [void]$lines.Add(("  - {0}" -f $signal))
        }
        [void]$lines.Add("- update targets:")
        foreach ($target in $item.Worksheet.UpdateTargets) {
            [void]$lines.Add(("  - {0}" -f $target))
        }
        [void]$lines.Add("")
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Ready Visual")
[void]$lines.Add("")
if ($readyVisual.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyVisual) {
        [void]$lines.Add(("### {0} - {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot))
        [void]$lines.Add("")
        [void]$lines.Add(("- file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add(("- source card: {0}" -f $item.Worksheet.SourceCard))
        [void]$lines.Add("- key checks:")
        foreach ($check in $item.Worksheet.KeyChecks) {
            [void]$lines.Add(("  - {0}" -f $check))
        }
        [void]$lines.Add("- reject signals:")
        foreach ($signal in $item.Worksheet.RejectSignals) {
            [void]$lines.Add(("  - {0}" -f $signal))
        }
        [void]$lines.Add("- update targets:")
        foreach ($target in $item.Worksheet.UpdateTargets) {
            [void]$lines.Add(("  - {0}" -f $target))
        }
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
    Write-Output ("ActionPacket: {0}" -f $OutputPath)
}
