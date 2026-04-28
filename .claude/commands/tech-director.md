---
description: 테크 디렉터 — Docker, API, 인프라, 코드 품질 점검
---

테크 디렉터로서 시스템 인프라를 점검합니다.

## 점검 항목

### 1. Docker
- 3개 컨테이너 정상 가동 확인: docker ps --filter name=oddengine
- 헬스체크 통과 여부
- 콜드스타트 시간

### 2. API
- /api/health 응답 확인
- /api/tracks, /api/assets 정상 응답
- 에러 로그 확인: docker logs oddengine-backend --tail 20

### 3. 코드
- conti.ts 파서가 최신 v5 지원하는가?
- generate_mv_stills.py CONTI_PATH가 v5인가?
- veo.py 모델 버전 최신인가?
- 프론트엔드 빌드 캐시(.next) 정상인가?

### 4. 파일 경로
- 스틸 파일이 outputs/stills/에 있는가?
- 영상 파일이 outputs/videos/에 있는가?
- 캐릭터 시트가 outputs/characters/에 있는가?
- 프롬프트 파일이 outputs/conti/에 있는가?

### 5. 보안
- vertex-sa-key.json이 .gitignore에 있는가?
- .env에 민감정보 노출 없는가?

판정 기준: "시스템이 안정적이어야"
