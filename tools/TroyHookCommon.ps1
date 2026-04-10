Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-TroyEpisodeFiles {
    param(
        [string[]]$Paths
    )

    $resolved = New-Object System.Collections.Generic.List[string]

    foreach ($path in $Paths) {
        if (-not (Test-Path -LiteralPath $path)) {
            throw "Path not found: $path"
        }

        $item = Get-Item -LiteralPath $path
        if ($item.PSIsContainer) {
            Get-ChildItem -LiteralPath $item.FullName -File -Filter "E*.md" |
                Sort-Object Name |
                ForEach-Object { [void]$resolved.Add($_.FullName) }
        }
        else {
            [void]$resolved.Add($item.FullName)
        }
    }

    return $resolved.ToArray()
}

function Get-TroyEpisodeCode {
    param(
        [string]$Path
    )

    $base = [System.IO.Path]::GetFileNameWithoutExtension($Path)
    if ($base -match "^(E\d{3})") {
        return $Matches[1]
    }

    return $base
}

function Get-TroyHangulCount {
    param(
        [string]$Text
    )

    return ([regex]::Matches($Text, "[가-힣]")).Count
}

function Get-TroyNonWhitespaceCount {
    param(
        [string]$Text
    )

    return ([regex]::Matches($Text, "\S")).Count
}

function Get-TroyLengthStatus {
    param(
        [int]$HangulCount,
        [int]$HardFloor = 3500,
        [int]$SafeLine = 4000
    )

    if ($HangulCount -lt $HardFloor) {
        return "draft"
    }

    if ($HangulCount -lt $SafeLine) {
        return "safe-line under"
    }

    return "safe-line candidate"
}
