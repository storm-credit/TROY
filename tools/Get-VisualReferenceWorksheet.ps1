param(
    [Parameter(Mandatory = $true)]
    [ValidateSet(
        "ARIN_MASTER_FRONT_v01",
        "ARIN_MASTER_34_v01",
        "SEOJUN_MASTER_FRONT_v01",
        "SEOJUN_MASTER_34_v01"
    )]
    [string]$BaseName,

    [switch]$AsJson
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$rows = @{
    "ARIN_MASTER_FRONT_v01" = [pscustomobject]@{
        BaseName = "ARIN_MASTER_FRONT_v01"
        Character = "Arin"
        Shot = "master front"
        ReferencePath = "local/generated_visual/character_lock/ARIN_MASTER_FRONT_v01.*"
        SourceCard = "export/music/character_lock_pack/01_ARIN_FACE_LOCK_CARD.md"
        PassAnchor = "Arin reads as one grounded person in a front-facing neutral frame without idol drift"
        KeyChecks = @(
            "face is centered, open, and unobstructed",
            "campus realism stays over glamour polish",
            "Arin remains subject rather than romance object"
        )
        RejectSignals = @(
            "idol or beauty-editorial gloss",
            "young-age drift or over-mature drift",
            "male-gaze romance framing"
        )
    }
    "ARIN_MASTER_34_v01" = [pscustomobject]@{
        BaseName = "ARIN_MASTER_34_v01"
        Character = "Arin"
        Shot = "master three-quarter"
        ReferencePath = "local/generated_visual/character_lock/ARIN_MASTER_34_v01.*"
        SourceCard = "export/music/character_lock_pack/01_ARIN_FACE_LOCK_CARD.md"
        PassAnchor = "Arin keeps the same face identity in a natural three-quarter angle with quiet self-possession"
        KeyChecks = @(
            "same person as front reference with no identity drift",
            "expression is luminous but restrained",
            "camera angle does not stylize her into an idol poster"
        )
        RejectSignals = @(
            "different-person drift from front view",
            "fashion-shoot or poster energy",
            "soft-focus fantasy polish that removes realism"
        )
    }
    "SEOJUN_MASTER_FRONT_v01" = [pscustomobject]@{
        BaseName = "SEOJUN_MASTER_FRONT_v01"
        Character = "Seojun"
        Shot = "master front"
        ReferencePath = "local/generated_visual/character_lock/SEOJUN_MASTER_FRONT_v01.*"
        SourceCard = "export/music/character_lock_pack/02_SEOJUN_FACE_LOCK_CARD.md"
        PassAnchor = "Seojun reads as calm and grounded in a front-facing frame without hero or savior drift"
        KeyChecks = @(
            "face is centered, open, and unobstructed",
            "quiet attentive presence stays over dominance",
            "respectful realism stays over drama-lead polish"
        )
        RejectSignals = @(
            "savior or hero-shot framing",
            "possessive romance lead energy",
            "idol-drama gloss"
        )
    }
    "SEOJUN_MASTER_34_v01" = [pscustomobject]@{
        BaseName = "SEOJUN_MASTER_34_v01"
        Character = "Seojun"
        Shot = "master three-quarter"
        ReferencePath = "local/generated_visual/character_lock/SEOJUN_MASTER_34_v01.*"
        SourceCard = "export/music/character_lock_pack/02_SEOJUN_FACE_LOCK_CARD.md"
        PassAnchor = "Seojun keeps the same identity in a three-quarter view while remaining present but non-owning"
        KeyChecks = @(
            "same person as front reference with no age or face drift",
            "listening energy remains stronger than charisma display",
            "camera angle supports continuity rather than romantic dominance"
        )
        RejectSignals = @(
            "different-person drift from front view",
            "romance-poster dominance",
            "too much charisma polish for the canon tone"
        )
    }
}

$sheet = [pscustomobject]@{
    BaseName = $rows[$BaseName].BaseName
    Character = $rows[$BaseName].Character
    Shot = $rows[$BaseName].Shot
    ReferencePath = $rows[$BaseName].ReferencePath
    SourceCard = $rows[$BaseName].SourceCard
    PassAnchor = $rows[$BaseName].PassAnchor
    KeyChecks = $rows[$BaseName].KeyChecks
    RejectSignals = $rows[$BaseName].RejectSignals
    UpdateTargets = @(
        "export/visual/mv_character_continuity_board.md",
        "export/visual/character_master/arin_master_face.md",
        "export/visual/character_master/seojun_master_face.md",
        "export/visual/character_sheets/arin_sheet_v01.md",
        "export/visual/character_sheets/seojun_sheet_v01.md"
    )
}

if ($AsJson) {
    $sheet | ConvertTo-Json -Depth 5
}
else {
    Write-Output ("BaseName: {0}" -f $sheet.BaseName)
    Write-Output ("Character: {0}" -f $sheet.Character)
    Write-Output ("Shot: {0}" -f $sheet.Shot)
    Write-Output ("ReferencePath: {0}" -f $sheet.ReferencePath)
    Write-Output ("SourceCard: {0}" -f $sheet.SourceCard)
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
