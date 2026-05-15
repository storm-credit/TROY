@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul

REM ════════════════════════════════════════════════════════════════════
REM  TROY Dev Service Installer
REM  - NSSM 다운로드 (없으면)
REM  - TROY-Dev Windows 서비스 등록 (Next.js dev server, 무창 백그라운드)
REM  - 부팅 시 자동 실행 + 죽으면 자동 재시작
REM  - 바탕화면 "TROY 제어" 폴더에 무창 시작/정지/재시작 파일 복사
REM
REM  사용법: 이 파일 우클릭 → "관리자 권한으로 실행" (1회만)
REM ════════════════════════════════════════════════════════════════════

REM ── 관리자 권한 검증 ────────────────────────────────────────────────
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [오류] 관리자 권한이 필요합니다.
    echo 이 파일을 우클릭 후 "관리자 권한으로 실행" 을 선택하세요.
    echo.
    pause
    exit /b 1
)

REM ── 경로 자동 검출 ──────────────────────────────────────────────────
set "SCRIPT_DIR=%~dp0"
pushd "%SCRIPT_DIR%..\.."
set "TROY_ROOT=%CD%"
popd
set "TROY_FRONTEND=%TROY_ROOT%\frontend"

if not exist "%TROY_FRONTEND%\package.json" (
    echo [오류] frontend\package.json 을 찾을 수 없습니다.
    echo 검색 경로: %TROY_FRONTEND%
    pause
    exit /b 1
)

echo TROY 루트:     %TROY_ROOT%
echo Frontend 경로: %TROY_FRONTEND%
echo.

REM ── npm.cmd 검출 ────────────────────────────────────────────────────
set "NPM_CMD="
for /f "delims=" %%i in ('where npm.cmd 2^>nul') do (
    if not defined NPM_CMD set "NPM_CMD=%%i"
)
if not defined NPM_CMD (
    echo [오류] npm.cmd 을 PATH 에서 찾을 수 없습니다.
    echo Node.js 가 설치되어 있는지 / PATH 에 등록되어 있는지 확인하세요.
    pause
    exit /b 1
)
echo npm.cmd:       %NPM_CMD%
echo.

REM ── NSSM 디렉토리 ──────────────────────────────────────────────────
set "NSSM_HOME=C:\ProgramData\TROY"
set "NSSM_EXE=%NSSM_HOME%\nssm.exe"

if not exist "%NSSM_HOME%" mkdir "%NSSM_HOME%"

REM ── NSSM 다운로드 (없으면) ─────────────────────────────────────────
if not exist "%NSSM_EXE%" (
    echo NSSM 다운로드 중... (포터블, 한 번만)
    powershell -NoProfile -ExecutionPolicy Bypass -Command "& { try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://nssm.cc/release/nssm-2.24.zip' -OutFile '%NSSM_HOME%\nssm.zip' -UseBasicParsing; Expand-Archive -Path '%NSSM_HOME%\nssm.zip' -DestinationPath '%NSSM_HOME%\tmp' -Force; Copy-Item -Path '%NSSM_HOME%\tmp\nssm-2.24\win64\nssm.exe' -Destination '%NSSM_EXE%' -Force; Remove-Item -Path '%NSSM_HOME%\nssm.zip','%NSSM_HOME%\tmp' -Recurse -Force } catch { Write-Host ('다운로드 실패: ' + $_.Exception.Message); exit 1 } }"
    if not exist "%NSSM_EXE%" (
        echo.
        echo [오류] NSSM 다운로드 실패.
        echo 수동 다운로드: https://nssm.cc/download → nssm.exe 를
        echo                %NSSM_EXE% 경로에 배치 후 다시 실행.
        pause
        exit /b 1
    )
    echo NSSM 다운로드 완료.
    echo.
) else (
    echo NSSM 이미 존재 — 다운로드 생략.
    echo.
)

REM ── 기존 서비스 있으면 정리 ────────────────────────────────────────
sc query TROY-Dev >nul 2>&1
if %errorlevel% == 0 (
    echo 기존 TROY-Dev 서비스 발견 — 재등록을 위해 정리...
    "%NSSM_EXE%" stop TROY-Dev >nul 2>&1
    timeout /t 2 /nobreak >nul
    "%NSSM_EXE%" remove TROY-Dev confirm >nul 2>&1
    echo.
)

REM ── .next 디렉토리 보장 (로그 저장용) ──────────────────────────────
if not exist "%TROY_FRONTEND%\.next" mkdir "%TROY_FRONTEND%\.next"

REM ── 서비스 등록 ────────────────────────────────────────────────────
echo TROY-Dev 서비스 등록 중...
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
"%NSSM_EXE%" set TROY-Dev Description "TROY 워크벤치 Next.js dev server — http://localhost:3211"
echo 서비스 등록 완료.
echo.

REM ── 서비스 시작 ────────────────────────────────────────────────────
echo TROY-Dev 시작 중...
"%NSSM_EXE%" start TROY-Dev
timeout /t 3 /nobreak >nul

REM ── 바탕화면 control 폴더 생성 + 파일 복사 ─────────────────────────
echo.
echo 바탕화면 "TROY 제어" 폴더 생성 중...
powershell -NoProfile -ExecutionPolicy Bypass -Command "& { $ctrl = Join-Path $env:USERPROFILE 'Desktop\TROY 제어'; New-Item -ItemType Directory -Force -Path $ctrl | Out-Null; Copy-Item -Force '%SCRIPT_DIR%start-troy.vbs'   (Join-Path $ctrl 'TROY 시작.vbs'); Copy-Item -Force '%SCRIPT_DIR%stop-troy.vbs'    (Join-Path $ctrl 'TROY 정지.vbs'); Copy-Item -Force '%SCRIPT_DIR%restart-troy.vbs' (Join-Path $ctrl 'TROY 재시작.vbs'); Copy-Item -Force '%SCRIPT_DIR%status-troy.bat'  (Join-Path $ctrl 'TROY 상태확인.bat'); Write-Host ('  → ' + $ctrl) }"

REM ── 완료 메시지 ────────────────────────────────────────────────────
echo.
echo ════════════════════════════════════════════════════════════════════
echo  TROY-Dev 서비스 설치 완료
echo ════════════════════════════════════════════════════════════════════
echo.
echo  ▸ 브라우저 접속: http://localhost:3211
echo  ▸ 자동 시작:     Windows 부팅 시 자동 (창 0)
echo  ▸ 자동 부활:     서비스 죽으면 5초 후 자동 재시작
echo.
echo  ▸ 수동 제어 (바탕화면 "TROY 제어" 폴더):
echo      TROY 시작.vbs       — 더블클릭 (무창)
echo      TROY 정지.vbs       — 더블클릭 (무창)
echo      TROY 재시작.vbs     — 더블클릭 (무창)
echo      TROY 상태확인.bat   — 더블클릭 (창 표시)
echo.
echo  ▸ OS 기본 GUI: Win+R → services.msc → TROY-Dev 우클릭
echo.
echo  ▸ 로그 위치:
echo      %TROY_FRONTEND%\.next\troy-dev.log
echo      %TROY_FRONTEND%\.next\troy-dev.err.log
echo.
echo  ▸ 제거 시: uninstall-troy-service.bat (관리자 권한)
echo ════════════════════════════════════════════════════════════════════
echo.
pause
endlocal
