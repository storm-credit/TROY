# TROY Dev Service — 무창 백그라운드 운영 (Production 모드)

TROY Next.js production server (`localhost:3211`) 를 Windows 서비스로 등록.
**창 0건**, 부팅 시 자동 시작, 죽으면 자동 부활, **상시 켜도 가벼움 (~200-300MB RAM)**.

> ⚠ .bat / .vbs 파일은 인코딩 문제 회피를 위해 **순수 ASCII 영어**로 작성. 한국어 안내는 본 README.md 만.

## 왜 Production 모드인가

| | dev (`next dev`) | **production (`next start`)** ← 채택 |
|---|---|---|
| RAM | 500MB ~ 1.5GB | **200 ~ 300MB** |
| CPU (idle) | 파일 watcher 가 계속 스캔 | **near-zero** |
| 페이지 첫 로딩 | 매번 컴파일 (느림) | **사전 빌드 (빠름)** |
| Hot reload | ✅ | ❌ (필요 시 `TROY-Build.bat`) |
| 상시 켜기 적합 | ❌ PC 느려짐 | ✅ |

TROY 워크벤치는 *쓰는* 도구이지 *개발하는* 도구가 아님. 코드 수정 빈도 낮음 → production 이 적합.

## 셋업 (한 번만, 5-10분)

1. `install-troy-service.bat` **우클릭 → "관리자 권한으로 실행"**
2. 자동 진행:
   - NSSM 다운로드 (`C:\ProgramData\TROY\nssm.exe`)
   - `npm install` (의존성 설치, 첫 실행 시 1-2 분)
   - `npm run build` (production bundle, 30-90 초)
   - `TROY-Dev` 서비스 등록 + 시작 (`localhost:3211` 즉시 살아남)
   - 바탕화면에 `TROY-Control\` 폴더 + 5개 제어 파일 복사
3. 브라우저로 `http://localhost:3211` 접속 → 끝

## 일상 사용

### 자동 모드 (대부분의 경우)

Windows 부팅 → TROY-Dev 자동 시작 → 브라우저로 `localhost:3211` 즉시 접속.
**클릭 0건, 명령어 0건.** RAM 200-300MB, CPU 거의 안 씀.

### 수동 제어

바탕화면 `TROY-Control\` 폴더에서 더블클릭:

| 파일 | 동작 | 창? | 권한 |
|---|---|---|---|
| `TROY-Start.vbs` | 서비스 시작 | ❌ 무창 | 일반 |
| `TROY-Stop.vbs` | 서비스 정지 | ❌ 무창 | 일반 |
| `TROY-Restart.vbs` | 서비스 재시작 | ❌ 무창 | 일반 |
| `TROY-Status.bat` | 상태 + HTTP 응답 + 로그 표시 | ✅ 표시 | 일반 |
| **`TROY-Build.bat`** | **코드 업데이트 후 rebuild + restart** | ✅ 표시 | 자동 elevate |

### 코드 업데이트 워크플로

```
1. git pull (또는 코드 수정)
2. 바탕화면 TROY-Control\TROY-Build.bat 더블클릭
3. 자동 진행: npm install -> npm run build -> 서비스 재시작
4. localhost:3211 즉시 갱신
```

`TROY-Build.bat` 은 자동으로 관리자 권한을 요청 (UAC 팝업 한 번 OK).

### OS 기본 GUI

`Win + R` → `services.msc` → `TROY-Dev` 우클릭 → 시작/중지/다시 시작.

## 로그

- `frontend\.next\troy-dev.log` — stdout
- `frontend\.next\troy-dev.err.log` — stderr
- 10MB 초과 시 자동 rotation

## 제거

`uninstall-troy-service.bat` 우클릭 → "관리자 권한으로 실행"
- 서비스 정지 + 제거
- 바탕화면 `TROY-Control\` 폴더 삭제
- NSSM 바이너리는 남겨둠 (재설치 빨라짐)

완전 제거 원하면 `C:\ProgramData\TROY\` 폴더 수동 삭제.

## 트러블슈팅

### "PC 가 느려진 느낌"
- v2 까지는 dev 모드로 등록되어 무거웠음. **v3 부터 production 모드 기본**.
- 이미 dev 모드로 설치된 상태면 `uninstall-troy-service.bat` → `install-troy-service.bat` 재실행.

### 부팅 후 `localhost:3211` 안 열림
1. `Win+R → services.msc → TROY-Dev` 상태 확인
2. "실행 중" 이 아니면 우클릭 → 시작
3. 그래도 안 되면 로그 확인: `frontend\.next\troy-dev.err.log`
4. build 가 깨졌을 가능성 → `TROY-Build.bat` 더블클릭으로 재빌드

### "npm.cmd 찾을 수 없습니다" 에러
설치 시점에 PATH 에 `npm.cmd` 가 있어야 함. Node.js 가 설치되어 있는지 확인.

### 포트 충돌 (3211)
다른 프로세스가 3211 점유 중이면 서비스가 못 뜸.
```
netstat -ano | findstr :3211
```
PID 확인 후 Task Manager 에서 종료.

### 빌드 실패
- 로그: `frontend\.next\troy-dev.err.log`
- 의존성 깨졌으면 `frontend\node_modules` 삭제 후 `TROY-Build.bat` 재실행
- 그래도 안 되면:
  ```
  cd frontend
  rmdir /S /Q node_modules .next
  npm install
  npm run build
  ```

### 코드 변경 후 자동 반영 안 됨
production 모드는 hot reload 없음 — `TROY-Build.bat` 더블클릭으로 명시적 rebuild.

### dev 모드 (hot reload) 가 정말 필요하면
설치된 서비스는 production. 코드 활발히 수정 중이면:
1. `TROY-Stop.vbs` 로 서비스 정지 (또는 임시로 안 띄움)
2. 터미널에서 `cd frontend && npm run dev` 수동 실행
3. 작업 끝나면 터미널 닫고 `TROY-Start.vbs` 로 production 다시 시작

## 작동 원리

- **NSSM** (Non-Sucking Service Manager): `npm start` 를 Windows 서비스로 감쌈
- **창이 안 뜨는 이유**: Windows 서비스는 `Session 0` 에서 실행 — 데스크톱과 격리
- **자동 재시작**: `AppExit Default Restart` + 5초 delay
- **부팅 자동**: `Start SERVICE_AUTO_START`
- **Production 의 가벼움**: 사전 빌드된 정적 파일 제공만 함. 컴파일러 / 파일 watcher / 핫리로드 워커 0개

## TROY 와의 연결 없음

이 패키지 설치 후 **나(Claude)의 도움 없이 100% 사용자 단독 제어 가능**.
TROY 의 가사·MV·orchestra 작업만 필요할 때 Claude 호출.
