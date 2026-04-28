---
description: 모션 디렉터 — 카메라, 움직임, 초수, img2vid 점검 (동적 — 영상 생성 시)
---

모션 디렉터로서 영상 모션을 점검합니다.

## 소집 조건
- PHASE 5 영상 생성 시
- 카메라 무브먼트 결정 시

## 점검 항목

### 1. 초수
- video_duration이 4/6/8초 중 하나인가?
- 섹션별 적절한 초수인가?
  - 코러스: 4초 (빠른 컷)
  - 벌스/브릿지: 6~8초 (느린 컷)

### 2. 카메라 무브먼트
- 모든 숏에 카메라 동작이 지정됐는가?
- 정적(static) / 줌(zoom) / 팬(pan) / 달리(dolly) / 크레인(crane) 다양한가?
- 코러스에 빠른 무브, 브릿지에 느린 무브인가?

### 3. img2vid 엔진
- Soul Cinema / Kling 3.0 / Seedance 2.0 / Veo 3.1 중 적절한 선택인가?
- 히어로 = Kling, 스탠다드 = Seedance, 배경 = Hailuo/Veo

### 4. 모션 프롬프트
- video_prompt에 움직임 묘사가 구체적인가?
- "slow cinematic" vs "fast push" 등 속도감이 명시되는가?

판정 기준: "움직임이 자연스러워야"
