# TROY Media Sub-Engines

## 1. Position

`TROY 엔진`은 상위 작법 체계다.

그 아래에 세 개의 하위 제작 엔진을 둔다.

- music engine
- image engine
- video engine

## 2. Why Separate

소설, 곡, 이미지, MV는 같은 작품을 말하지만 판단 기준은 다르다.

- music asks: what emotion remains
- image asks: what visual memory stays
- video asks: what sequence makes the emotion linger

따라서 하위 엔진을 분리하면 각 매체의 완성도가 올라가고, 동시에 상위 캐논과 충돌하지 않게 조절할 수 있다.

## 3. Hierarchy

- TROY engine: writing method system
- orchestra engine: director/control layer
- music engine: song translation layer
- image engine: still-memory visual layer
- video engine: MV sequence layer

## 4. Rule

하위 엔진은 자유롭게 보이더라도 반드시 상위 엔진에 종속된다.

- canon first
- story truth first
- no media decision may override ending meaning

## 5. Composition Logic

각 하위 엔진은 서로 다른 질문으로 움직인다.

- music engine: what emotion remains
- image engine: what visual memory remains
- video engine: what sequence makes that residue linger

즉, 같은 화라도 세 엔진은 서로 다른 방식으로 번역한다.

## 6. Contract

하위 엔진은 반드시 공통 계약서를 통해 움직인다.

see:

- `ops/media_engine_contract.md`

핵심:

- same input packet
- different media outputs
- shared gate system
- no canonical override from downstream media
