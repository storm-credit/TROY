@echo off
setlocal

REM ====================================================================
REM  TROY Docker: DOWN (stop + remove container)
REM  Image kept on disk for fast restart.
REM ====================================================================

pushd "%~dp0..\.."

docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Desktop is not running.
    popd
    pause
    exit /b 1
)

echo Stopping TROY container ...
docker compose down

echo.
echo ====================================================================
echo  TROY stopped. RAM/CPU released.
echo  To start again:  scripts\docker\up.bat
echo ====================================================================
echo.
popd
timeout /t 4 /nobreak >nul
endlocal
