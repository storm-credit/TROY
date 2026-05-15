@echo off
setlocal

REM ====================================================================
REM  TROY Docker: STATUS (container state + HTTP probe + recent logs)
REM ====================================================================

pushd "%~dp0..\.."
title TROY Status

docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    popd
    pause
    exit /b 1
)

echo ====================================================================
echo  Container state
echo ====================================================================
docker compose ps

echo.
echo ====================================================================
echo  HTTP probe: http://localhost:3211
echo ====================================================================
powershell -NoProfile -Command "& { try { $r = Invoke-WebRequest -Uri 'http://localhost:3211' -UseBasicParsing -TimeoutSec 3; Write-Host ('  HTTP ' + $r.StatusCode + ' - OK') -ForegroundColor Green } catch { Write-Host ('  Connection failed: ' + $_.Exception.Message) -ForegroundColor Yellow } }"

echo.
echo ====================================================================
echo  Recent logs (last 30 lines)
echo ====================================================================
docker compose logs --tail 30

echo.
echo ====================================================================
echo  Controls (this folder):
echo    up.bat       - start
echo    down.bat     - stop
echo    restart.bat  - restart (no rebuild)
echo    rebuild.bat  - rebuild image + restart (after code change)
echo    logs.bat     - tail logs continuously
echo ====================================================================
echo.
popd
pause
endlocal
