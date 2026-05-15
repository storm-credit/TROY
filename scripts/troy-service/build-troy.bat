@echo off
setlocal EnableExtensions

REM ====================================================================
REM  TROY Build + Restart helper
REM  Use after `git pull` or any frontend code change to:
REM    1. npm install (in case package.json changed)
REM    2. npm run build (production bundle)
REM    3. restart TROY-Dev service
REM
REM  Auto-elevates to administrator (needed for nssm restart).
REM ====================================================================

REM --- Auto-elevate to admin ------------------------------------------
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Requesting administrator elevation ...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

REM --- Path detection -------------------------------------------------
REM Works whether this file lives in scripts/troy-service/ (repo) or
REM Desktop\TROY-Control\ (copy). The latter needs absolute repo path.
REM
REM Try repo-relative first:
set "SCRIPT_DIR=%~dp0"
set "TROY_FRONTEND=%SCRIPT_DIR%..\..\frontend"

if not exist "%TROY_FRONTEND%\package.json" (
    REM Fallback: hardcoded repo path
    set "TROY_FRONTEND=C:\Users\Storm Credit\Desktop\Novel\너라는운율\project\TROY\frontend"
)

if not exist "%TROY_FRONTEND%\package.json" (
    echo [ERROR] Could not locate frontend\package.json
    echo Tried: %SCRIPT_DIR%..\..\frontend
    echo Tried: C:\Users\Storm Credit\Desktop\Novel\너라는운율\project\TROY\frontend
    pause
    exit /b 1
)

pushd "%TROY_FRONTEND%"
set "TROY_FRONTEND=%CD%"

REM --- npm locate -----------------------------------------------------
set "NPM_CMD="
for /f "delims=" %%i in ('where npm.cmd 2^>nul') do (
    if not defined NPM_CMD set "NPM_CMD=%%i"
)
if not defined NPM_CMD (
    echo [ERROR] npm.cmd not found in PATH.
    popd
    pause
    exit /b 1
)

set "NSSM_EXE=C:\ProgramData\TROY\nssm.exe"
if not exist "%NSSM_EXE%" (
    echo [ERROR] NSSM not installed. Run install-troy-service.bat first.
    popd
    pause
    exit /b 1
)

echo ====================================================================
echo  Target: %TROY_FRONTEND%
echo ====================================================================
echo.

echo Step 1/3: npm install ...
call "%NPM_CMD%" install
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed.
    popd
    pause
    exit /b 1
)
echo.

echo Step 2/3: npm run build ...
call "%NPM_CMD%" run build
if %errorlevel% neq 0 (
    echo [ERROR] npm run build failed.
    popd
    pause
    exit /b 1
)
echo.

echo Step 3/3: Restarting TROY-Dev service ...
"%NSSM_EXE%" restart TROY-Dev
echo.

popd

echo ====================================================================
echo  Build complete. http://localhost:3211 refreshed.
echo ====================================================================
echo.
timeout /t 5 /nobreak >nul
endlocal
