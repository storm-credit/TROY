@echo off
setlocal

REM ====================================================================
REM  TROY Docker: UP (start container, build image if missing/stale)
REM
REM  - Use after pulling code, or first time
REM  - Builds image then starts container in detached mode
REM ====================================================================

pushd "%~dp0..\.."

REM --- Docker Desktop running? ---------------------------------------
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    echo Start Docker Desktop first, then retry.
    popd
    pause
    exit /b 1
)

echo Building image (first time may take 2-4 minutes) ...
docker compose up -d --build
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] docker compose up failed. Check error above.
    popd
    pause
    exit /b 1
)

echo.
echo ====================================================================
echo  TROY is starting in background.
echo ====================================================================
echo.
echo  Wait 10-30 seconds for the server to boot, then open:
echo    http://localhost:3211
echo.
echo  Status:    scripts\docker\status.bat
echo  Logs:      scripts\docker\logs.bat
echo  Stop:      scripts\docker\down.bat
echo  Restart:   scripts\docker\restart.bat
echo  Rebuild:   scripts\docker\rebuild.bat  (after code changes)
echo.
popd
timeout /t 8 /nobreak >nul
endlocal
