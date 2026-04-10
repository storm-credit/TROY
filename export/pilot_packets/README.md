# TROY Pilot Packet Export

이 폴더는 `package pilot triplet`의 외부 전달용 export copy를 담는다.

원칙:

- source of truth는 `ops/` 패킷 문서다
- 이 폴더는 export-facing copy다
- export 이름은 전달 편의를 위한 label이며, repo source 파일명을 대체하지 않는다

현재 패킷:

1. `TROY_PILOT_ENDING_E118`
2. `TROY_PILOT_OPENING_STAGE_E011`
3. `TROY_PILOT_PEAK_LIGHT_E054`

구성 규칙:

- 각 패킷은 아래 3종만 포함한다
  - episode harness
  - song brief
  - visual cut list
- 원고 전문, 캐논 운영 문서, 거버넌스 로그는 포함하지 않는다

주의:

- `TROY_PILOT_ENDING_E118`의 song brief는 `final_song_brief.md`의 export alias copy이며,
  export 안에서는 `E118_ending_song_brief.md`로 고정한다
- `TROY_PILOT_ENDING_E118`는 tone calibration reference다
- `TROY_PILOT_OPENING_STAGE_E011`는 human-scale performance reference다
- `TROY_PILOT_PEAK_LIGHT_E054`는 brightness-shadow balance reference다
