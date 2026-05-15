@echo off
setlocal EnableExtensions
chcp 65001 >nul

REM ════════════════════════════════════════════════════════════════════
REM  TROY Dev Service Uninstaller
REM  - TROY-Dev 서비스 정지 + 제거
REM  - 바탕화면 "TROY 제어" 폴더 삭제
REM  - NSSM 자체는 남겨둠 (C:\ProgramData\TROY\nssm.exe)
REM    완전 제거 원하면 직접 폴더 삭제.
REM ════════════════════════════════════════════════════════════════════

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [오류] 관리자 권한이 필요합니다.
    echo 이 파일을 우클릭 후 "관리자 권한으로 실행" 을 선택하세요.
    pause
    exit /b 1
)

set "NSSM_EXE=C:\ProgramData\TROY\nssm.exe"

if exist "%NSSM_EXE%" (
    echo TROY-Dev 서비스 정지 + 제거 중...
    "%NSSM_EXE%" stop TROY-Dev >nul 2>&1
    timeout /t 2 /nobreak >nul
    "%NSSM_EXE%" remove TROY-Dev confirm >nul 2>&1
    echo 서비스 제거 완료.
) else (
    echo NSSM 이 없음 — 서비스도 없는 것으로 간주.
    sc delete TROY-Dev >nul 2>&1
)

echo.
echo 바탕화면 "TROY 제어" 폴더 삭제 중...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ctrl = Join-Path $env:USERPROFILE 'Desktop\TROY 제어'; if (Test-Path $ctrl) { Remove-Item -Recurse -Force $ctrl; Write-Host ('  → 삭제됨: ' + $ctrl) } else { Write-Host '  → 이미 없음' }"

echo.
echo ════════════════════════════════════════════════════════════════════
echo  TROY-Dev 서비스 제거 완료
echo ════════════════════════════════════════════════════════════════════
echo.
echo  NSSM 바이너리는 남겨둠: C:\ProgramData\TROY\nssm.exe
echo  완전 제거 원하면 위 폴더 수동 삭제.
echo.
echo  로그 파일도 남아있음 (필요 시 수동 삭제):
echo    frontend\.next\troy-dev.log
echo    frontend\.next\troy-dev.err.log
echo.
pause
endlocal
