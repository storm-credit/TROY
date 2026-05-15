# TROY Docker — 컨테이너 운영

`localhost:3211` 워크벤치를 Docker 컨테이너로 운영. NSSM 서비스 대체.

## 사전 준비 (한 번만)

1. **Docker Desktop for Windows 설치** — https://www.docker.com/products/docker-desktop/
2. 설치 후 Docker Desktop 실행 (트레이 아이콘에서 "Running" 확인)
3. WSL2 백엔드 사용 (Docker Desktop 설치 시 기본 옵션)

## 첫 실행

1. `scripts\docker\up.bat` 더블클릭
2. 자동 진행:
   - Docker Desktop 실행 중인지 확인
   - 이미지 빌드 (`docker compose up -d --build`, 2-4 분)
   - 컨테이너 시작 (백그라운드 detached)
3. 10-30초 후 브라우저로 `http://localhost:3211` 접속

## 일상 사용

| .bat 파일 | 동작 | 언제 |
|---|---|---|
| `up.bat` | 컨테이너 시작 (이미지 자동 빌드) | 처음 시작 / Docker 재시작 후 |
| `down.bat` | 컨테이너 정지 + 제거 | 잠시 안 쓸 때 (RAM 회수) |
| `restart.bat` | 컨테이너 재시작 (rebuild X) | 데이터 파일 큰 변경 후 |
| `rebuild.bat` | **이미지 rebuild + 재시작** | **프론트엔드 코드 변경 후 (git pull 등)** |
| `status.bat` | 상태 + HTTP 응답 + 최근 로그 | 안 될 때 진단 |
| `logs.bat` | 로그 실시간 표시 (Ctrl+C 종료) | 자세한 디버그 |

## 자동 시작

`up.bat` 한 번 실행하면 `restart: unless-stopped` 정책으로:
- Docker Desktop 재시작 → 컨테이너 자동 부활
- Windows 재부팅 (Docker Desktop 자동 시작) → 컨테이너 자동 부활
- 사용자가 `down.bat` 으로 명시적 정지 → 부활 안 함 (의도 존중)

즉, **한 번 up 하면 사용자가 끄기 전까지 영구 실행**.

## 코드 업데이트 워크플로

```
1. git pull (또는 코드 수정)
2. scripts\docker\rebuild.bat 더블클릭
3. 자동 진행: 이미지 rebuild → 컨테이너 재시작 (10-30s)
4. localhost:3211 즉시 갱신
```

데이터 파일 (ops/, manuscript/, canon/, frontend/design/) 만 수정한 경우는 **rebuild 불필요** — volume mount 라 즉시 반영. (단, 브라우저 새로고침 OR 필요 시 `restart.bat`)

## 컨테이너 구조

```
host (Windows)                          container (Linux)
─────────────────────                   ─────────────────────
TROY/                                   /app/
├── ops/                  ── mount ──→  ├── ops/
├── manuscript/           ── mount ──→  ├── manuscript/
├── canon/                ── mount ──→  ├── canon/
├── export/               ── mount ──→  ├── export/
├── external_intake/      ── mount ──→  ├── external_intake/
├── frontend/
│   ├── design/           ── mount ──→  │   ├── design/
│   └── (code)            ── baked ──→  │   └── (code, built)
```

볼륨 마운트:
- 데이터 디렉토리: 호스트 ↔ 컨테이너 양방향 sync (즉시 반영)
- frontend 코드: 이미지에 baked (변경 시 rebuild)

## 자원 사용량

| 항목 | 사용량 |
|---|---|
| Docker Desktop 자체 | 1-1.5GB RAM (트레이) |
| TROY 컨테이너 (idle) | 200-300MB RAM |
| TROY 컨테이너 (사용 중) | 300-500MB RAM |
| 합계 (idle) | ~1.5GB RAM |

Docker Desktop 자체 무게가 있음. **PC 메모리가 8GB 이하라면 부담될 수 있음.** 16GB 이상이면 무관.

## 제거

전체 정리:
```
scripts\docker\down.bat        # 컨테이너 제거
docker rmi troy-frontend       # 이미지 제거
```

또는 Docker Desktop UI 에서 troy-server 컨테이너 + troy-frontend 이미지 우클릭 → 삭제.

`docker-compose.yml`, `frontend/Dockerfile`, `scripts/docker/` 폴더는 레포에 남아있음 (재설치 즉시 가능).

## 트러블슈팅

### `Docker Desktop is not running` 에러
트레이에서 Docker Desktop 실행. "Running" 상태 확인 후 .bat 재실행.

### `localhost:3211` 안 열림
1. `scripts\docker\status.bat` 더블클릭 → 상태 표시
2. 컨테이너가 `Up` 이지만 응답 없으면 10-30초 더 기다림 (Next.js 부팅 중)
3. 그래도 안 되면 `scripts\docker\logs.bat` 에서 에러 확인

### 이미지 빌드 실패
- `frontend\package-lock.json` 누락 가능성 → `cd frontend && npm install` 한 번 호스트에서 실행
- 그래도 안 되면 logs.bat 출력 확인

### Korean 경로 문제
경로에 `너라는운율` 같은 한글 포함. Docker Desktop WSL2 backend 는 일반적으로 OK. 만약 mount 안 되면:
- Docker Desktop → Settings → Resources → File Sharing → 경로 추가
- 또는 레포를 ASCII 경로로 이동 (예: `C:\TROY\`)

### 포트 충돌 (3211)
다른 프로세스가 3211 점유 중이면 컨테이너 못 뜸.
```
netstat -ano | findstr :3211
```
해당 프로세스 종료 후 `up.bat`.

### NSSM 서비스와 충돌
이전에 NSSM 서비스 (TROY-Dev) 를 설치했다면 먼저 제거:
```
scripts\troy-service\uninstall-troy-service.bat (관리자 권한)
```
그 후 Docker `up.bat`.

### Hot reload 가 필요할 때
production 모드라 hot reload 없음. 코드 적극 수정 중이면:
- `down.bat` 으로 컨테이너 정지
- 터미널에서 `cd frontend && npm run dev` 수동 실행
- 작업 끝나면 터미널 닫고 `up.bat` 으로 컨테이너 다시 시작

## 작동 원리

- **컨테이너**: Linux Alpine + Node.js 22 + Next.js production build
- **무엇이 baked**: `frontend/` 디렉토리 (Next.js 빌드 결과 + node_modules + 코드)
- **무엇이 mount**: 데이터 디렉토리 (ops, manuscript, canon, export, external_intake, frontend/design)
- **재시작 정책**: `unless-stopped` — Docker Desktop / Windows 재부팅 시 자동 복구
- **헬스체크**: 30초마다 `localhost:3211` TCP probe, 3회 실패 시 unhealthy 표시
- **로그**: `docker compose logs` (JSON 파일 driver, 10MB × 3 rotation)

## TROY 와의 연결 없음

Docker Desktop 만 켜져 있으면 Claude 도움 없이 100% 자체 제어. 가사·MV·orchestra 작업할 때만 Claude.
