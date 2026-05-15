@echo off
setlocal

REM ====================================================================
REM  TROY Docker: RESTART (bounce container, no rebuild)
REM  Use for: data file edits, restart hint from logs
REM  NOT for: frontend code changes (use rebuild.bat instead)
REM ====================================================================

pushd "%~dp0..\.."

docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    popd
    pause
    exit /b 1
)

echo Restarting TROY container ...
docker compose restart

echo.
echo Done. http://localhost:3211 refreshing in 5-10s.
popd
timeout /t 4 /nobreak >nul
endlocal
