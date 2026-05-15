@echo off
setlocal

REM ====================================================================
REM  TROY Docker: LOGS (tail container logs continuously)
REM  Press Ctrl+C to exit (container keeps running).
REM ====================================================================

pushd "%~dp0..\.."
title TROY Logs (Ctrl+C to exit)

docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    popd
    pause
    exit /b 1
)

echo Tailing logs. Press Ctrl+C to exit (container keeps running).
echo.
docker compose logs -f --tail 50

popd
endlocal
