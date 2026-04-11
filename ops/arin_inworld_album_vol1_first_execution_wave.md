# arin in-world album vol1 first execution wave

## 1. purpose

- 이 문서는 아린 1집 첫 실제 생성 웨이브의 판정 기준과 수정 한계를 잠근다
- 대상:
  - `E054 / 밝은 창`
  - `E113 / 나를 잃지 않는 일`
  - `E050 / 접힌 문장`
  - `E011 / 남은 소리`
  - `E118 / 같은 말을 하던 저녁`
- 목표:
  - 첫 5곡에서 앨범의 voice range가 실제 generation에서도 분리되는지 확인한다
  - `pass / revise / reject` 이후 어떤 방향만 허용되는지 흔들리지 않게 만든다

## 2. run order lock

1. `E054 / 밝은 창`
2. `E113 / 나를 잃지 않는 일`
3. `E050 / 접힌 문장`
4. `E011 / 남은 소리`
5. `E118 / 같은 말을 하던 저녁`

### gate precedence

- 실제 music test는 `phase gate`를 우선한다
- 즉 `E011`과 `E118`은 `phase 1`에서 최소 1곡 `pass`가 나온 뒤에만 실제 test로 연다
- 위 순서는 `immediate next queue`를 뜻하며, phase gate를 무시하는 fast-forward가 아니다

## 3. per-track pass signature

### E054 / 밝은 창

- truth:
  - 가장 밝은 장면인데도 말하지 않은 그림자가 함께 남아 있어야 한다
- voice:
  - 아린이 방을 밝히지만 장면을 지배하는 쇼맨십은 없어야 한다
- restraint:
  - title-track-class라도 `finale glow`로 가면 fail이다
- memorability:
  - 후렴 첫 줄이 바로 남아야 한다
- reject signature:
  - 해피엔드 선언처럼 들림
  - 뮤지컬 피날레처럼 커짐
  - 남성 청자의 감상곡처럼 무게 중심이 밀림

### E113 / 나를 잃지 않는 일

- truth:
  - 사랑의 성취보다 자기를 잃지 않는 선택이 앞서야 한다
- voice:
  - 선언적이되 격앙되면 안 된다
- restraint:
  - 승리 연설톤, 복수 끝난 톤, 대서사 엔딩톤 금지
- memorability:
  - 잔향형 후렴이어야지 슬로건형 후렴이면 안 된다
- reject signature:
  - 너무 큰 해방감
  - 누군가를 향한 심판처럼 들림
  - power ballad 과열

### E050 / 접힌 문장

- truth:
  - 일기장처럼 가까워야 하고 리빌 곡처럼 들리면 안 된다
- voice:
  - 아린의 안쪽 문장 감각이 전면에 있어야 한다
- restraint:
  - 너무 속삭이면 존재감이 사라지고, 너무 또렷하면 diary air가 깨진다
- memorability:
  - 큰 hook보다 문장 잔상이 남아야 한다
- extra watch:
  - 사적 문장을 정답 해설처럼 직설화하면 안 된다
- reject signature:
  - 반전 예고곡처럼 들림
  - ost underscore처럼만 남음
  - 보컬이 너무 멀어 감정 주체가 사라짐

### E011 / 남은 소리

- truth:
  - 시작의 떨림과 무대의 작은 스파크가 함께 살아야 한다
- voice:
  - 설렘이 있어도 신인 아이돌 데뷔곡처럼 glossy하면 안 된다
- restraint:
  - youthful energy는 허용되지만 `victory launch`는 금지
- memorability:
  - 첫 등장 트랙다운 선명한 입구가 있어야 한다
- reject signature:
  - 청춘 anthem처럼 과열
  - stage confidence가 너무 완성형
  - 아린보다 공연 포맷이 더 전면에 옴

### E118 / 같은 말을 하던 저녁

- truth:
  - 같은 진실을 말하지만 같은 미래를 고르지 않는 품위가 핵심이다
- voice:
  - 울먹임은 가능하지만 매달림은 금지
- restraint:
  - 재결합 냄새가 나면 즉시 fail이다
- memorability:
  - 큰 절규보다 저녁 공기와 문장 품위가 남아야 한다
- extra watch:
  - 이별의 의미를 설명하는 해설곡으로 기울면 안 된다
- reject signature:
  - reunion-coded
  - 멜로드라마 과열
  - 엔딩 크레딧형 closure glow

## 4. allowed revision ladder

- 1차 수정 허용:
  - producer stack의 형용사 강도 조정
  - vocal distance 조정
  - arrangement의 밀도 조정
- 2차 수정 허용:
  - same-role guardrail 강화
  - hook line 강조 위치 조정
  - tempo 감각을 한 단계만 이동
- 수정 금지:
  - 제목 변경
  - 가사 core thesis 변경
  - 곡 역할 변경
  - 금지 패턴 해제

## 5. cross-track separation watch

- `E054`가 가장 밝아도 `E011`의 시작 스파크를 먹으면 안 된다
- `E113`의 자기 선언은 `E118`의 이별 품위를 침범하면 안 된다
- `E050`의 diary air는 `E094`류 윤리 정정곡처럼 들리면 안 된다
- 첫 5곡만 돌려도 `bright / selfhood / diary / debut / parting` 다섯 온도가 귀로 구분돼야 한다
- 트랙마다 화자 거리감이 지나치게 성숙해지거나 지나치게 설명적이 되지 않아야 한다

## 6. wave success condition

- 첫 3곡 안에서 최소 1곡 `pass`
- 첫 5곡 종료 시:
  - 최소 2곡 `pass` 또는
  - 1곡 `pass` + 2곡 `strong revise`
- 위 조건을 못 채우면:
  - 개별 곡보다 `producer stack wording` 재정비를 먼저 한다

## 7. director note

- 첫 웨이브의 목적은 많이 뽑는 것이 아니라 앨범의 온도 분리와 authored voice를 확인하는 것이다
- 잘 만든 곡보다 `맞는 곡`이 우선이다
