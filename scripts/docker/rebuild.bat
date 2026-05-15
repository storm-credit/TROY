@echo off
setlocal

REM ====================================================================
REM  TROY Docker: REBUILD (rebuild image + restart container)
REM  Use after frontend code changes (git pull, file edits in frontend/).
REM ====================================================================

pushd "%~dp0..\.."

docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    popd
    pause
    exit /b 1
)

echo Rebuilding TROY image + restarting container ...
docker compose up -d --build
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Rebuild failed. Check error above.
    popd
    pause
    exit /b 1
)

echo.
echo ====================================================================
echo  Rebuild complete.
echo  http://localhost:3211 refreshing in 10-30s.
echo ====================================================================
popd
timeout /t 6 /nobreak >nul
endlocal
