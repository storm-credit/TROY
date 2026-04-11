# package A live ops sequence 2026-04-11

## 1. purpose

- 이 문서는 오케스트라 관점에서 `package A first wave`를 실제 운영 단계로 옮길 때의 live sequence를 잠근다

## 2. sequence

1. contact qualification
2. alias mapping
3. execution board fill
4. slot preflight check
5. send
6. tracker update
7. send session log update
8. follow-up once
9. response capture
10. promotion / hold / close decision

## 3. live control points

- control point A:
  - primary 3 slot이 다 채워졌는가
- control point B:
  - package A 범위를 넘는 자료가 섞이지 않았는가
- control point C:
  - send 직후 tracker와 session log가 동시에 갱신됐는가
- control point D:
  - reply가 왔을 때 response capture 없이 promotion하지 않았는가

## 4. success condition

- first wave가 실제 발송됨
- primary 3 slot 상태가 `planned`에서 `sent` 이상으로 이동함
- day 7 review 시 promotion 또는 hold 판단이 가능한 수준의 기록이 남아 있음

## 5. orchestra note

- 이 시퀀스는 더 많은 문서를 만들기 위한 것이 아니라, 이미 잠근 자산을 실제 운영 상태로 옮기기 위한 마지막 운영 경로다
