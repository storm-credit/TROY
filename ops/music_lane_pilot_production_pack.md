# Music Lane Pilot Production Pack

## 1. Purpose

이 문서는 `TROY` music lane 파일럿 6곡을 실제 생성 시도에 바로 넣을 수 있는 production pack으로 정리한다.

목표:

- first-pass generation order를 고정한다
- 각 곡의 성공 기준과 실패 기준을 미리 정의한다
- 후속 image / MV lane이 참조할 음악 truth를 빠르게 만든다

## 2. Source Set

- `ops/canon_to_media_bridge_memo.md`
- `ops/music_lane_pilot_opening.md`
- `ops/E001_song_brief.md`
- `ops/E029_song_brief.md`
- `ops/E040_song_brief.md`
- `ops/E078_song_brief.md`
- `ops/E110_song_brief.md`
- `ops/E120_song_brief.md`

## 3. Production Order

1. `E001`
2. `E040`
3. `E078`
4. `E120`
5. `E029`
6. `E110`

## 4. Pass Rules

- one track = one emotional job
- if a generation sounds bigger but less truthful, reject it
- if the hook becomes cliché through `forever`, `destiny`, `reunion`, reject it
- if a track sounds too healed, too triumphant, or too generic, revise prompt before retry

## 5. Pilot Cards

### E001

- role: character identity opener
- emotional job: 고립과 과부하의 기본 음색을 세운다
- first-pass target:
  - intro 5초 안에 `닫힌 공기`가 느껴질 것
  - 보컬이 사회적으로 멀고 정서적으로 가까울 것
- reject if:
  - 너무 희망적이다
  - 초능력/판타지 효과음처럼 들린다
  - 후렴이 지나치게 크다

### E040

- role: widest romance entry track
- emotional job: 가까워진 숨과 애매한 이해의 간격을 같이 남긴다
- first-pass target:
  - 키스보다 `직후의 공기`가 기억에 남을 것
  - 가까운 보컬이지만 소유욕이 없어야 함
- reject if:
  - 전형적 해피 로맨스 OST처럼 들린다
  - 너무 큰 클라이맥스로 터진다
  - 결말 도착감이 생긴다

### E078

- role: deepest wound track
- emotional job: 사랑이 남아 있는데 이 방식은 끝났다는 정직함
- first-pass target:
  - quiet decision이 들릴 것
  - 울부짖기보다 붙잡지 않는 정서가 먼저 와야 함
- reject if:
  - oversung breakup ballad다
  - 미련/증오 한쪽으로 치우친다
  - 최종 작별 선언처럼 과장된다

### E120

- role: signature ending track
- emotional job: 사랑의 승인과 늦게 도착한 이해를 dignified하게 닫는다
- first-pass target:
  - 한강의 공기, 이어폰 없는 걸음, 승인감이 남을 것
  - 여운은 길고 과시는 짧아야 함
- reject if:
  - reunion fantasy가 생긴다
  - sequel bait 느낌이 난다
  - ending이 승리감으로 변한다

### E029

- role: confession threshold track
- emotional job: 말한 뒤 기다리는 사람의 떨림
- first-pass target:
  - 고백 직전보다 고백 직후의 기다림이 더 강할 것
  - 작은 방의 공기와 두 컵의 정적이 느껴질 것
- reject if:
  - confession anthem처럼 커진다
  - grand promise 언어가 들어간다
  - 너무 귀엽거나 밝기만 하다

### E110

- role: present-tense reconnection track
- emotional job: 미래 확정 없이 같은 박자로 걷는 현재의 안도
- first-pass target:
  - 손을 잡지 않아도 이어지는 리듬이 느껴질 것
  - modest lift까지만 허용
- reject if:
  - 재결합 선언곡처럼 들린다
  - ending-credit glow가 생긴다
  - 완전한 평화/회복 톤으로 간다

## 6. Output Targets

파일럿 1차 산출물:

- approved prompt set for each of 6 tracks
- one accepted generation direction note per track
- cross-track motif note:
  - earphones
  - air
  - distance
  - same-direction walk
  - approval without possession

## 7. Director Note

- if only one track can be tested first, start with `E040`
- if two tracks can be tested, use `E040 + E120`
- if three tracks can be tested, use `E001 + E040 + E120`
