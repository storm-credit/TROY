param(
    [string]$AudioRoot = (Join-Path $PSScriptRoot "..\local\generated_audio\arin_album_vol1_pilot"),
    [string]$ImageRoot = (Join-Path $PSScriptRoot "..\local\generated_visual\character_lock"),
    [string]$OutputPath,
    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Add-TargetDraft {
    param(
        [System.Collections.Generic.List[string]]$Lines,
        [string]$Target,
        [string[]]$Fields
    )

    [void]$Lines.Add(("#### Target: {0}" -f $Target))
    [void]$Lines.Add("")
    foreach ($field in $Fields) {
        [void]$Lines.Add(("- {0}:" -f $field))
    }
    [void]$Lines.Add("")
}

function Get-AudioTargetFields {
    param([string]$Target)

    switch -Wildcard ($Target) {
        "*04_SESSION_RESULT_LOG.md" {
            return @(
                "status",
                "verdict",
                "what worked",
                "what failed",
                "next action"
            )
        }
        "*arin_album_vol1_first_execution_wave_sheet.md" {
            return @(
                "external run status",
                "verdict",
                "truth",
                "voice",
                "restraint",
                "memorability",
                "non-imitation",
                "keep",
                "change",
                "next gate"
            )
        }
        "*arin_album_vol1_master_session_log.md" {
            return @(
                "verdict",
                "what worked",
                "what failed",
                "next action",
                "next gate",
                "output path",
                "retry due",
                "still-image follow-up",
                "MV follow-up"
            )
        }
        "*arin_album_vol1_master_generation_board.md" {
            return @(
                "current status",
                "attempts",
                "next gate",
                "notes"
            )
        }
        default {
            return @("update field")
        }
    }
}

function Get-VisualTargetFields {
    param([string]$Target)

    switch -Wildcard ($Target) {
        "*mv_character_continuity_board.md" {
            return @(
                "status",
                "approval_owner",
                "approved_date",
                "notes",
                "model/tool",
                "prompt_version",
                "seed_or_job_id",
                "accepted_still_path",
                "drift_reason",
                "replacement_target",
                "next_action"
            )
        }
        "*character_master*" {
            return @(
                "status",
                "version",
                "current accepted references"
            )
        }
        "*character_sheets*" {
            return @(
                "status",
                "allowed variation",
                "not allowed"
            )
        }
        default {
            return @("update field")
        }
    }
}

$reviewRunScript = Join-Path $PSScriptRoot "Invoke-ExternalAssetReviewRun.ps1"
$result = & $reviewRunScript -AudioRoot $AudioRoot -ImageRoot $ImageRoot -AsJson | ConvertFrom-Json

if (-not $OutputPath) {
    $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $opsDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) "ops"
    $OutputPath = Join-Path $opsDirectory ("external_asset_update_draft_{0}.md" -f $stamp)
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
}

$lines = New-Object System.Collections.Generic.List[string]

[void]$lines.Add("# External Asset Update Draft")
[void]$lines.Add("")
[void]$lines.Add(("Generated at: {0}" -f $generatedAt))
[void]$lines.Add(("OverallStatus: {0}" -f $payload.OverallStatus))
[void]$lines.Add(("ReviewReady: {0}" -f $payload.ReviewReady))
[void]$lines.Add("")
[void]$lines.Add("## Use Rule")
[void]$lines.Add("")
[void]$lines.Add("- fill verdict first in the verdict template, then use this draft to update target files")
[void]$lines.Add("- keep wording short and operational")
[void]$lines.Add("- update all targets for the same asset in the same session")
[void]$lines.Add("")
[void]$lines.Add("## Audio Update Drafts")
[void]$lines.Add("")

if ($readyAudio.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyAudio) {
        [void]$lines.Add(("### {0} / {1}" -f $item.RunId, $item.Worksheet.Title))
        [void]$lines.Add("")
        [void]$lines.Add(("- source file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add("- verdict:")
        [void]$lines.Add("- keep:")
        [void]$lines.Add("- change:")
        [void]$lines.Add("- next gate:")
        [void]$lines.Add("")
        foreach ($target in $item.Worksheet.UpdateTargets) {
            Add-TargetDraft -Lines $lines -Target $target -Fields (Get-AudioTargetFields -Target $target)
        }
    }
}

[void]$lines.Add("")
[void]$lines.Add("## Visual Update Drafts")
[void]$lines.Add("")

if ($readyVisual.Count -eq 0) {
    [void]$lines.Add("- none")
}
else {
    foreach ($item in $readyVisual) {
        [void]$lines.Add(("### {0} / {1} {2}" -f $item.BaseName, $item.Worksheet.Character, $item.Worksheet.Shot))
        [void]$lines.Add("")
        [void]$lines.Add(("- source file: {0}" -f $item.LatestFile))
        [void]$lines.Add(("- pass anchor: {0}" -f $item.Worksheet.PassAnchor))
        [void]$lines.Add("- verdict:")
        [void]$lines.Add("- keep:")
        [void]$lines.Add("- change:")
        [void]$lines.Add("- drift reason:")
        [void]$lines.Add("- next action:")
        [void]$lines.Add("")
        foreach ($target in $item.Worksheet.UpdateTargets) {
            Add-TargetDraft -Lines $lines -Target $target -Fields (Get-VisualTargetFields -Target $target)
        }
    }
}

$directory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
}

Set-Content -LiteralPath $OutputPath -Value $lines -Encoding UTF8

if ($AsJson) {
    $payload | ConvertTo-Json -Depth 6
}
else {
    Write-Output ("UpdateDraft: {0}" -f $OutputPath)
}
