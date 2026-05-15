@echo off
setlocal EnableExtensions

REM ====================================================================
REM  TROY Dev Service Uninstaller (ASCII safe)
REM  - Stops + removes TROY-Dev service
REM  - Deletes Desktop\TROY-Control folder
REM  - Leaves NSSM at C:\ProgramData\TROY\nssm.exe for reinstall convenience
REM ====================================================================

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Administrator privileges required.
    echo Right-click this file and choose "Run as administrator".
    pause
    exit /b 1
)

set "NSSM_EXE=C:\ProgramData\TROY\nssm.exe"

if exist "%NSSM_EXE%" (
    echo Stopping and removing TROY-Dev service ...
    "%NSSM_EXE%" stop TROY-Dev >nul 2>&1
    timeout /t 2 /nobreak >nul
    "%NSSM_EXE%" remove TROY-Dev confirm >nul 2>&1
    echo Service removed.
) else (
    echo NSSM not found - assuming service does not exist.
    sc delete TROY-Dev >nul 2>&1
)

echo.
echo Removing Desktop\TROY-Control folder ...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ctrl = Join-Path $env:USERPROFILE 'Desktop\TROY-Control'; if (Test-Path $ctrl) { Remove-Item -Recurse -Force $ctrl; Write-Host ('  -> deleted: ' + $ctrl) } else { Write-Host '  -> already absent' }"

echo.
echo ====================================================================
echo  TROY-Dev service removed
echo ====================================================================
echo.
echo  NSSM binary kept at: C:\ProgramData\TROY\nssm.exe
echo  Delete that folder manually if you want a full wipe.
echo.
echo  Log files also remain (delete manually if desired):
echo    frontend\.next\troy-dev.log
echo    frontend\.next\troy-dev.err.log
echo.
pause
endlocal
