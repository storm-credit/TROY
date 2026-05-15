@echo off
title TROY Status

echo ====================================================================
echo  TROY-Dev service status
echo ====================================================================
echo.

sc query TROY-Dev 2>nul
if %errorlevel% neq 0 (
    echo [WARN] TROY-Dev service not registered.
    echo Run install-troy-service.bat as administrator first.
    echo.
    pause
    exit /b 1
)

echo.
echo ====================================================================
echo  HTTP probe: http://localhost:3211
echo ====================================================================
echo.

powershell -NoProfile -Command "& { try { $r = Invoke-WebRequest -Uri 'http://localhost:3211' -UseBasicParsing -TimeoutSec 3; Write-Host ('  HTTP ' + $r.StatusCode + ' - OK') -ForegroundColor Green } catch { Write-Host ('  Connection failed: ' + $_.Exception.Message) -ForegroundColor Yellow; Write-Host ''; Write-Host '  Service may still be building. Retry in 30 seconds.' } }"

echo.
echo ====================================================================
echo  Recent log (last 20 lines)
echo ====================================================================
echo.

powershell -NoProfile -Command "& { $log = 'C:\Users\Storm Credit\Desktop\Novel\너라는운율\project\TROY\frontend\.next\troy-dev.log'; if (Test-Path -LiteralPath $log) { Get-Content -LiteralPath $log -Tail 20 } else { Write-Host '  log file not found' } }"

echo.
echo ====================================================================
echo  Controls
echo ====================================================================
echo.
echo   Browser:   http://localhost:3211
echo   Restart:   TROY-Restart.vbs (this folder)
echo   Stop:      TROY-Stop.vbs    (this folder)
echo   Start:     TROY-Start.vbs   (this folder)
echo.
pause
