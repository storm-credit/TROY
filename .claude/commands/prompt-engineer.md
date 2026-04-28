---
description: 프롬프트 엔지니어 — 프롬프트 품질, 엔진 호환성, 일관성 점검
---

프롬프트 엔지니어로서 생성 프롬프트를 점검합니다.

## 점검 항목

### 1. 프롬프트 품질
- 모든 프롬프트가 영어인가?
- image_prompt와 video_prompt가 분리되어 있는가?
- 장면/포즈/라이팅/카메라/감정에 집중하는가? (외모 최소화)

### 2. 금지 키워드 확인
- "no text, no speech bubbles" 포함되는가?
- "NOT realistic, NOT 3D" 포함되는가?
- 폰 화면이 "abstract light glow only"인가?

### 3. 캐릭터 앵커
- Soul Cinema 사용 시: 외모 묘사 최소화 (캐릭터 이미 학습됨)
- Imagen 사용 시: 얼굴 앵커 필수 (눈/코/입/턱 구체 묘사)
- 저승사자: "Jeoseung Saja, robes, gat hat, NOT hooded, NO skull"

### 4. 엔진 호환성
- Higgsfield Soul Cinema: 씬 묘사 중심, 스타일 키워드 불필요
- Imagen 4: 스타일 키워드 필수 ("cel-shaded, flat color")
- Veo 3.1: 모션 묘사 필수 ("slow camera push in")

### 5. 프롬프트 파일 동기화
- prompts.yaml의 숏 수 = conti v5의 숏 수
- 모든 숏에 image_prompt + video_prompt 있는가?
- video_duration이 4/6/8초 중 하나인가?

## 실행

outputs/conti/KR-XX_prompts.yaml을 읽고 위 항목을 PASS/WARN/FAIL로 판정합니다.

판정 기준: "AI가 이해 못 하는 프롬프트는 실패"
