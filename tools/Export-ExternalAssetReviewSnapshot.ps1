param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),
    [string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$reviewRunScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetReviewRun.ps1"
$result = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

if (-not $OutputPath) {
    $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $opsDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) "ops"
    $OutputPath = Join-Path $opsDirectory ("external_asset_review_snapshot_{0}.md" -f $stamp)
}

$generatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$lines = New-Object System.Collections.Generic.List[string]

[void]$lines.Add("# External Asset Review Snapshot")
[void]$lines.Add("")
[void]$lines.Add(("Generated at: {0}" -f $generatedAt))
[void]$lines.Add(("OverallStatus: {0}" -f $result.Dashboard.OverallStatus))
[void]$lines.Add(("TotalReadyItems: {0}" -f $result.Dashboard.TotalReadyItems))
[void]$lines.Add(("NextAction: {0}" -f $result.NextAction))
[void]$lines.Add("")
[void]$lines.Add("## Dashboard")
[void]$lines.Add("")
[void]$lines.Add("| Lane | ReadyCount | Root |")
[void]$lines.Add("|---|---:|---|")
[void]$lines.Add(("| audio | {0} | `{1}` |" -f $result.Dashboard.AudioReadyCount, $result.Dashboard.AudioRoot))
[void]$lines.Add(("| visual | {0} | `{1}` |" -f $result.Dashboard.VisualReadyCount, $result.Dashboard.ImageRoot))

[void]$lines.Add("")
[void]$lines.Add("## Waiting Audio")
[void]$lines.Add("")
if ($result.Dashboard.AudioWaiting.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $result.Dashboard.AudioWaiting) {
        [void]$lines.Add(("- `{0}`: {1}" -f $item.RunId, $item.Status))
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Waiting Visual References")
[void]$lines.Add("")
if ($result.Dashboard.VisualWaiting.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $result.Dashboard.VisualWaiting) {
        [void]$lines.Add(("- `{0}`: {1}" -f $item.BaseName, $item.Status))
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Ready Audio Reviews")
[void]$lines.Add("")
if ($null -eq $result.AudioAssist -or $result.AudioAssist.ReadyCount -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $result.AudioAssist.ReadyRuns) {
        [void]$lines.Add(("### {0} - {1}" -f $item.RunId, $item.Worksheet.Title))
        [void]$lines.Add("")
        [void]$lines.Add("- file: $($item.LatestFile)")
        [void]$lines.Add("- pass anchor: $($item.Worksheet.PassAnchor)")
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
[void]$lines.Add("## Ready Visual Reviews")
[void]$lines.Add("")
if ($null -eq $result.VisualAssist -or $result.VisualAssist.ReadyCount -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $result.VisualAssist.ReadyReferences) {
        [void]$lines.Add(("### {0} - {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot))
        [void]$lines.Add("")
        [void]$lines.Add("- file: $($item.LatestFile)")
        [void]$lines.Add("- pass anchor: $($item.Worksheet.PassAnchor)")
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
Write-Output ("Snapshot: {0}" -f $OutputPath)
