@echo off
chcp 65001 >nul
title TROY 상태 확인

echo ════════════════════════════════════════════════════════════════
echo  TROY-Dev 서비스 상태
echo ════════════════════════════════════════════════════════════════
echo.

sc query TROY-Dev 2>nul
if %errorlevel% neq 0 (
    echo [경고] TROY-Dev 서비스가 등록되어 있지 않습니다.
    echo install-troy-service.bat 를 관리자 권한으로 먼저 실행하세요.
    echo.
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════════════
echo  localhost:3211 응답 확인
echo ════════════════════════════════════════════════════════════════
echo.

powershell -NoProfile -Command "& { try { $r = Invoke-WebRequest -Uri 'http://localhost:3211' -UseBasicParsing -TimeoutSec 3; Write-Host ('  HTTP ' + $r.StatusCode + ' — 정상 응답') -ForegroundColor Green } catch { Write-Host ('  연결 실패: ' + $_.Exception.Message) -ForegroundColor Yellow; Write-Host ''; Write-Host '  서비스가 막 시작했거나 빌드 중일 수 있습니다. 30초 후 재시도.' } }"

echo.
echo ════════════════════════════════════════════════════════════════
echo  최근 로그 (마지막 20 줄)
echo ════════════════════════════════════════════════════════════════
echo.

powershell -NoProfile -Command "& { $log = 'C:\Users\Storm Credit\Desktop\Novel\너라는운율\project\TROY\frontend\.next\troy-dev.log'; if (Test-Path $log) { Get-Content $log -Tail 20 } else { Write-Host '  로그 파일 없음' } }"

echo.
echo ════════════════════════════════════════════════════════════════
echo  제어 단축
echo ════════════════════════════════════════════════════════════════
echo.
echo   브라우저 접속: http://localhost:3211
echo   재시작:        TROY 재시작.vbs (이 폴더)
echo   정지:          TROY 정지.vbs   (이 폴더)
echo   시작:          TROY 시작.vbs   (이 폴더)
echo.
pause
