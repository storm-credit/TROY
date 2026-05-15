@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ====================================================================
REM  TROY Dev Service Installer (ASCII safe)
REM  - Downloads NSSM if missing
REM  - Registers TROY-Dev Windows service (Next.js dev, no console window)
REM  - Auto-start at boot, auto-restart on crash
REM  - Copies control files to Desktop\TROY-Control\
REM
REM  Usage: Right-click this .bat -> "Run as administrator"  (one time)
REM ====================================================================

REM --- Admin check ----------------------------------------------------
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Administrator privileges required.
    echo Right-click this file and choose "Run as administrator".
    echo.
    pause
    exit /b 1
)

REM --- Path detection -------------------------------------------------
set "SCRIPT_DIR=%~dp0"
pushd "%SCRIPT_DIR%..\.."
set "TROY_ROOT=%CD%"
popd
set "TROY_FRONTEND=%TROY_ROOT%\frontend"

if not exist "%TROY_FRONTEND%\package.json" (
    echo [ERROR] frontend\package.json not found.
    echo Searched: %TROY_FRONTEND%
    pause
    exit /b 1
)

echo TROY root:     %TROY_ROOT%
echo Frontend path: %TROY_FRONTEND%
echo.

REM --- Locate npm.cmd -------------------------------------------------
set "NPM_CMD="
for /f "delims=" %%i in ('where npm.cmd 2^>nul') do (
    if not defined NPM_CMD set "NPM_CMD=%%i"
)
if not defined NPM_CMD (
    echo [ERROR] npm.cmd not found in PATH.
    echo Install Node.js or fix PATH and retry.
    pause
    exit /b 1
)
echo npm.cmd:       %NPM_CMD%
echo.

REM --- NSSM directory -------------------------------------------------
set "NSSM_HOME=C:\ProgramData\TROY"
set "NSSM_EXE=%NSSM_HOME%\nssm.exe"

if not exist "%NSSM_HOME%" mkdir "%NSSM_HOME%"

REM --- Download NSSM if missing --------------------------------------
if not exist "%NSSM_EXE%" (
    echo Downloading NSSM ...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "& { try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://nssm.cc/release/nssm-2.24.zip' -OutFile '%NSSM_HOME%\nssm.zip' -UseBasicParsing; Expand-Archive -Path '%NSSM_HOME%\nssm.zip' -DestinationPath '%NSSM_HOME%\tmp' -Force; Copy-Item -Path '%NSSM_HOME%\tmp\nssm-2.24\win64\nssm.exe' -Destination '%NSSM_EXE%' -Force; Remove-Item -Path '%NSSM_HOME%\nssm.zip','%NSSM_HOME%\tmp' -Recurse -Force } catch { Write-Host ('Download failed: ' + $_.Exception.Message); exit 1 } }"
    if not exist "%NSSM_EXE%" (
        echo.
        echo [ERROR] NSSM download failed.
        echo Manual download: https://nssm.cc/download
        echo Then place nssm.exe at: %NSSM_EXE%
        pause
        exit /b 1
    )
    echo NSSM downloaded.
    echo.
) else (
    echo NSSM already present - skipping download.
    echo.
)

REM --- Clean existing service if any ---------------------------------
sc query TROY-Dev >nul 2>&1
if %errorlevel% == 0 (
    echo Existing TROY-Dev service found - removing for clean reinstall ...
    "%NSSM_EXE%" stop TROY-Dev >nul 2>&1
    timeout /t 2 /nobreak >nul
    "%NSSM_EXE%" remove TROY-Dev confirm >nul 2>&1
    echo.
)

REM --- Ensure .next dir exists (for log files) -----------------------
if not exist "%TROY_FRONTEND%\.next" mkdir "%TROY_FRONTEND%\.next"

REM --- Register service ----------------------------------------------
echo Registering TROY-Dev service ...
"%NSSM_EXE%" install TROY-Dev "%NPM_CMD%" "run dev"
"%NSSM_EXE%" set TROY-Dev AppDirectory "%TROY_FRONTEND%"
"%NSSM_EXE%" set TROY-Dev AppStdout "%TROY_FRONTEND%\.next\troy-dev.log"
"%NSSM_EXE%" set TROY-Dev AppStderr "%TROY_FRONTEND%\.next\troy-dev.err.log"
"%NSSM_EXE%" set TROY-Dev AppStdoutCreationDisposition 4
"%NSSM_EXE%" set TROY-Dev AppStderrCreationDisposition 4
"%NSSM_EXE%" set TROY-Dev AppRotateFiles 1
"%NSSM_EXE%" set TROY-Dev AppRotateBytes 10485760
"%NSSM_EXE%" set TROY-Dev Start SERVICE_AUTO_START
"%NSSM_EXE%" set TROY-Dev AppExit Default Restart
"%NSSM_EXE%" set TROY-Dev AppRestartDelay 5000
"%NSSM_EXE%" set TROY-Dev DisplayName "TROY Dev Server (Next.js)"
"%NSSM_EXE%" set TROY-Dev Description "TROY workbench Next.js dev server on http://localhost:3211"
echo Service registered.
echo.

REM --- Start service --------------------------------------------------
echo Starting TROY-Dev ...
"%NSSM_EXE%" start TROY-Dev
timeout /t 3 /nobreak >nul

REM --- Create Desktop control folder ---------------------------------
echo.
echo Creating Desktop\TROY-Control folder ...
powershell -NoProfile -ExecutionPolicy Bypass -Command "& { $ctrl = Join-Path $env:USERPROFILE 'Desktop\TROY-Control'; New-Item -ItemType Directory -Force -Path $ctrl | Out-Null; Copy-Item -Force '%SCRIPT_DIR%start-troy.vbs'   (Join-Path $ctrl 'TROY-Start.vbs'); Copy-Item -Force '%SCRIPT_DIR%stop-troy.vbs'    (Join-Path $ctrl 'TROY-Stop.vbs'); Copy-Item -Force '%SCRIPT_DIR%restart-troy.vbs' (Join-Path $ctrl 'TROY-Restart.vbs'); Copy-Item -Force '%SCRIPT_DIR%status-troy.bat'  (Join-Path $ctrl 'TROY-Status.bat'); Write-Host ('  -> ' + $ctrl) }"

REM --- Done message ---------------------------------------------------
echo.
echo ====================================================================
echo  TROY-Dev service installed
echo ====================================================================
echo.
echo  Browser:        http://localhost:3211
echo  Auto-start:     boots with Windows (no window)
echo  Auto-restart:   5 seconds after crash
echo.
echo  Manual control (Desktop\TROY-Control):
echo    TROY-Start.vbs    - double-click (no window)
echo    TROY-Stop.vbs     - double-click (no window)
echo    TROY-Restart.vbs  - double-click (no window)
echo    TROY-Status.bat   - double-click (shows status)
echo.
echo  OS-native GUI: Win+R -^> services.msc -^> TROY-Dev -^> right-click
echo.
echo  Logs:
echo    %TROY_FRONTEND%\.next\troy-dev.log
echo    %TROY_FRONTEND%\.next\troy-dev.err.log
echo.
echo  Uninstall: uninstall-troy-service.bat (run as administrator)
echo ====================================================================
echo.
pause
endlocal
