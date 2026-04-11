# arin in-world album vol1 production pack

## 1. purpose

- 이 문서는 `아린 1집 12트랙 후보`를 실제 제작 순서로 옮기기 위한 production pack이다
- 목표:
  - 전곡을 한 번에 만들기보다 우선 3곡 파일럿부터 검증한다

## 2. source set

- `ops/arin_inworld_album_vol1_opening.md`
- `ops/arin_inworld_album_vol1_tracklist_12.md`
- `ops/music_producer_lane_matrix.md`
- `ops/arin_inworld_album_vol1_producer_stack.md`
- `ops/arin_inworld_album_vol1_pilot_lyric_lock.md`
- `ops/E054_inworld_suno_final.md`
- `ops/E113_inworld_suno_final.md`
- `ops/E050_inworld_suno_final.md`
- `ops/arin_inworld_album_vol1_generation_test_gate.md`
- key briefs:
  - `E054_song_brief.md`
  - `E113_song_brief.md`
  - `E050_song_brief.md`
  - `E011_song_brief.md`
  - `E118_song_brief.md`

## 3. pilot order

1. `E054`
   - 이유: 이미 explicit in-world candidate다
2. `E113`
   - 이유: 아린의 selfhood를 가장 선명하게 대표한다
3. `E050`
   - 이유: private diary track으로 앨범 깊이를 만든다

## 4. second pass order

4. `E011`
5. `E030`
6. `E118`

current lock:

- `E011`:
  - final title / lyric lock / Suno final ready
- `E030`:
  - final title / lyric lock / Suno final ready
- `E118`:
  - final title / lyric lock / Suno final ready

export bundle:

- `export/music/arin_album_vol1_second_pass/`

## 4A. third pass order

7. `E014`
8. `E022`
9. `E034`

current lock:

- `E014`:
  - final title / lyric lock / Suno final ready
- `E022`:
  - final title / lyric lock / Suno final ready
- `E034`:
  - final title / lyric lock / Suno final ready

export bundle:

- `export/music/arin_album_vol1_third_pass/`

## 4B. fourth pass order

10. `E064`
11. `E094`
12. `E108`

current lock:

- `E064`:
  - final title / lyric lock / Suno final ready
- `E094`:
  - final title / lyric lock / Suno final ready
- `E108`:
  - final title / lyric lock / Suno final ready

export bundle:

- `export/music/arin_album_vol1_fourth_pass/`

## 5. pass rule

- 아린이 실제로 부를 만한 문장인가
- 서준 해설곡처럼 들리면 reject
- 너무 해피엔드 앨범처럼 들리면 reject
- 공연곡 / private track / 후반 승인곡의 온도 차이가 살아 있어야 한다

## 6. reject if

- 남성 시점 해설이 너무 강하다
- 관계 설명이 감정보다 앞선다
- 아린의 주체성이 사라진다
- `운명`, `영원`, `완벽한 사랑` 같은 언어가 전면에 나온다

## 7. director note

- 아린 1집은 OST보다 더 조심스럽게 다뤄야 한다
- 핵심은 `예쁜 러브송`이 아니라 `아린 authored voice`다
- producer decision도 `유명인 모사`가 아니라 `producer-class lane 조합`으로 잠근다
- 현재 12트랙 전부가 `고정 제목 + 최종 가사 + Suno final + export media packet` 상태까지 올라왔다
- 다음 단계는 실제 generation test와 결과 로그 기록이다
- generation test는 `final Suno prompt + producer stack + lyric lock` 3축으로만 판단한다
- 첫 실행 웨이브는 아래 문서를 truth source로 사용한다
  - `ops/arin_inworld_album_vol1_first_execution_wave.md`
  - `export/music/arin_album_vol1_first_execution_wave_sheet.md`
