param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("E054-A01", "E113-A01", "E050-A01")]
    [string]$RunId,

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$rows = @{
    "E054-A01" = [pscustomobject]@{
        RunId = "E054-A01"
        Episode = "E054"
        Title = "Bright Window"
        Role = "title-track-class candidate"
        AudioPath = "local/generated_audio/arin_album_vol1_pilot/E054-A01.*"
        CopyCard = "export/music/arin_album_vol1_pilot/suno_copy_cards/01_E054_SUNO_COPY_CARD.md"
        PassAnchor = "bright room glow with shadow still present, not a finale"
        KeyChecks = @(
            "bright without sounding like a happy ending declaration",
            "Arin authored voice leads the track",
            "the first chorus line stays in memory"
        )
        RejectSignals = @(
            "happy-ending declaration energy",
            "musical finale scale",
            "male listener ownership drift"
        )
    }
    "E113-A01" = [pscustomobject]@{
        RunId = "E113-A01"
        Episode = "E113"
        Title = "Not Losing Myself"
        Role = "selfhood declaration"
        AudioPath = "local/generated_audio/arin_album_vol1_pilot/E113-A01.*"
        CopyCard = "export/music/arin_album_vol1_pilot/suno_copy_cards/02_E113_SUNO_COPY_CARD.md"
        PassAnchor = "a quiet declaration where selfhood remains over payoff"
        KeyChecks = @(
            "clear selfhood without sounding like a lecture",
            "selfhood lands before romance payoff",
            "firm vocal without victory speech energy"
        )
        RejectSignals = @(
            "breakup alarm tone",
            "slogan-like preachiness",
            "romance payoff dominates selfhood"
        )
    }
    "E050-A01" = [pscustomobject]@{
        RunId = "E050-A01"
        Episode = "E050"
        Title = "Folded Sentence"
        Role = "private diary"
        AudioPath = "local/generated_audio/arin_album_vol1_pilot/E050-A01.*"
        CopyCard = "export/music/arin_album_vol1_pilot/suno_copy_cards/03_E050_SUNO_COPY_CARD.md"
        PassAnchor = "an inner line that stays folded instead of being revealed"
        KeyChecks = @(
            "private night writing stays protected",
            "it remains a song without sounding like a reveal",
            "a memorable line remains even at small scale"
        )
        RejectSignals = @(
            "mystery / thriller drift",
            "too much underscore, not enough song",
            "too fragile to leave a line behind"
        )
    }
}

$sheet = [pscustomobject]@{
    RunId = $rows[$RunId].RunId
    Episode = $rows[$RunId].Episode
    Title = $rows[$RunId].Title
    Role = $rows[$RunId].Role
    AudioPath = $rows[$RunId].AudioPath
    CopyCard = $rows[$RunId].CopyCard
    PassAnchor = $rows[$RunId].PassAnchor
    KeyChecks = $rows[$RunId].KeyChecks
    RejectSignals = $rows[$RunId].RejectSignals
    UpdateTargets = @(
        "export/music/arin_album_vol1_pilot/04_SESSION_RESULT_LOG.md",
        "export/music/arin_album_vol1_first_execution_wave_sheet.md",
        "export/music/arin_album_vol1_master_session_log.md",
        "export/music/arin_album_vol1_master_generation_board.md"
    )
}

if ($AsJson) {
    $sheet | ConvertTo-Json -Depth 5
}
else {
    Write-Output ("RunId: {0}" -f $sheet.RunId)
    Write-Output ("Episode: {0}" -f $sheet.Episode)
    Write-Output ("Title: {0}" -f $sheet.Title)
    Write-Output ("Role: {0}" -f $sheet.Role)
    Write-Output ("AudioPath: {0}" -f $sheet.AudioPath)
    Write-Output ("CopyCard: {0}" -f $sheet.CopyCard)
    Write-Output ("PassAnchor: {0}" -f $sheet.PassAnchor)
    Write-Output "KeyChecks:"
    foreach ($item in $sheet.KeyChecks) {
        Write-Output ("  - {0}" -f $item)
    }
    Write-Output "RejectSignals:"
    foreach ($item in $sheet.RejectSignals) {
        Write-Output ("  - {0}" -f $item)
    }
    Write-Output "UpdateTargets:"
    foreach ($item in $sheet.UpdateTargets) {
        Write-Output ("  - {0}" -f $item)
    }
}
