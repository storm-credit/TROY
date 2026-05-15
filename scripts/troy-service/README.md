# TROY Dev Service — 무창 백그라운드 운영

TROY Next.js dev server (`localhost:3211`) 를 Windows 서비스로 등록.
**창 0건**, 부팅 시 자동 시작, 죽으면 자동 부활.

## 셋업 (한 번만, 5분)

1. `install-troy-service.bat` **우클릭 → "관리자 권한으로 실행"**
2. 자동 진행:
   - NSSM 다운로드 (`C:\ProgramData\TROY\nssm.exe`)
   - `TROY-Dev` Windows 서비스 등록
   - 서비스 시작 (`localhost:3211` 즉시 살아남)
   - 바탕화면에 `TROY 제어\` 폴더 + 4개 제어 파일 복사
3. 브라우저로 `http://localhost:3211` 접속 → 끝

설치 중 자동으로 처리하는 것:
- Node.js / npm 경로 자동 검출
- 기존 서비스 있으면 정리 후 재등록
- 로그 파일 자동 rotation (10MB 단위)
- 서비스 죽으면 5초 후 자동 재시작
- 부팅 시 자동 시작 (`SERVICE_AUTO_START`)

## 일상 사용

### 자동 모드 (대부분의 경우)

Windows 부팅 → TROY-Dev 자동 시작 → 브라우저로 `localhost:3211` 즉시 접속.
**클릭 0건, 명령어 0건.**

### 수동 제어

바탕화면 `TROY 제어\` 폴더에서 더블클릭:

| 파일 | 동작 | 창? |
|---|---|---|
| `TROY 시작.vbs` | 서비스 시작 | ❌ 무창 |
| `TROY 정지.vbs` | 서비스 정지 | ❌ 무창 |
| `TROY 재시작.vbs` | 서비스 재시작 (코드 업데이트 후 등) | ❌ 무창 |
| `TROY 상태확인.bat` | 상태 + HTTP 응답 + 최근 로그 표시 | ✅ 표시 |

### OS 기본 GUI

`Win + R` → `services.msc` → `TROY-Dev` 우클릭 → 시작/중지/다시 시작.

### 명령줄 (필요 시)

```
sc query TROY-Dev
sc start TROY-Dev
sc stop TROY-Dev
C:\ProgramData\TROY\nssm.exe restart TROY-Dev
```

## 로그

- `frontend\.next\troy-dev.log` — stdout
- `frontend\.next\troy-dev.err.log` — stderr
- 10MB 초과 시 자동 rotation

## 제거

`uninstall-troy-service.bat` 우클릭 → "관리자 권한으로 실행"
- 서비스 정지 + 제거
- 바탕화면 `TROY 제어\` 폴더 삭제
- NSSM 바이너리는 남겨둠 (재설치 빨라짐)

완전 제거 원하면 `C:\ProgramData\TROY\` 폴더 수동 삭제.

## 트러블슈팅

### 부팅 후 `localhost:3211` 안 열림
1. `Win+R → services.msc → TROY-Dev` 상태 확인
2. "실행 중" 이 아니면 우클릭 → 시작
3. 그래도 안 되면 로그 확인: `frontend\.next\troy-dev.err.log`

### "npm.cmd 찾을 수 없습니다" 에러
설치 시점에 PATH 에 `npm.cmd` 가 있어야 함. Node.js 가 설치되어 있는지 확인.
설치는 됐는데 PATH 에 없으면 새 cmd 창 열고 `where npm.cmd` 로 확인.

### 포트 충돌 (3211)
다른 프로세스가 3211 점유 중이면 dev server 가 못 뜸.
```
netstat -ano | findstr :3211
```
PID 확인 후 Task Manager 에서 종료.

### 서비스가 자꾸 죽음
- `frontend\.next\troy-dev.err.log` 확인 — Next.js 빌드 에러 가능성
- `cd frontend && npm install` 로 의존성 재설치
- 그래도 안 되면 수동 디버그:
  ```
  cd frontend
  npm run dev
  ```
  로 직접 띄워서 에러 확인 후 서비스 재시작

### 코드 변경 후 즉시 반영 안 됨
Next.js dev mode 는 일반적으로 hot-reload 됨. 안 되면 `TROY 재시작.vbs`.

## 작동 원리

- **NSSM** (Non-Sucking Service Manager): Windows 서비스 래퍼.
  `npm run dev` 같은 일반 프로세스를 진짜 Windows 서비스로 변환.
- **창이 안 뜨는 이유**: Windows 서비스는 `Session 0` 에서 실행 — 사용자 데스크톱과 격리됨. 그래서 콘솔창이 데스크톱에 표시되지 않음.
- **자동 재시작**: NSSM 의 `AppExit Default Restart` + `AppRestartDelay 5000` — 프로세스가 죽으면 5초 후 NSSM 이 다시 띄움.
- **부팅 자동**: `Start SERVICE_AUTO_START` — Windows 부팅 후 사용자 로그인 전에 이미 실행됨.

## TROY 와의 연결 없음

이 패키지 설치 후 **나(Claude)의 도움 없이 100% 사용자 단독 제어 가능**.
TROY 의 가사·MV·orchestra 작업만 필요할 때 Claude 호출.
