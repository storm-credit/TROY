# Novel Line Edit Sweep - E001-E120

## 1. Purpose

이 문서는 `TROY` 이관 완료 후 `novel-only` 기준으로 수행한 1차 line edit sweep 결과를 잠근다.

주의:

- 이 문서는 수정 우선순위와 실제 반영 상태를 함께 잠근다
- media / music / MV 관련 판단은 제외한다

## 2. Scope

- migrated prose: `E001-E120`
- base folders:
  - `manuscript/chapter1`
  - `manuscript/chapter2`
  - `manuscript/chapter3`
  - `manuscript/chapter4`
  - `manuscript/chapter5`
  - `manuscript/chapter6`

## 3. Harness Run

- orchestra mode: `직접 오케스트라 모드`
- truth source:
  - `ops/novel_orchestra_report_001_120.md`
  - `ops/manuscript_migration_checklist.md`
  - migrated prose under `manuscript/chapter1` through `manuscript/chapter6`
- MCP used:
  - no available MCP resources in this pass
  - local repo truth source used
- skills run:
  - no dedicated skill used
  - 이유: 이번 패스는 정형 생성이 아니라 line-edit priority 판정 패스다
- agent input:
  - prior expert syntheses from `ops/novel_orchestra_report_001_120.md`
- hook checks:
  - chapter coverage check
  - representative turning-point close read
  - vocabulary repetition check
  - ending-language context check
- director lock note:
  - 이 문서는 `교열 우선순위`와 `실제 selective edit 반영 상태`를 함께 잠근다
  - 실제 문장 수정은 아래 applied pass에 누적 기록한다

## 4. Overall Judgment

Status:

- pass with targeted line-edit needs

판단:

- 구조, 흐름, 결말 잠금은 안정적이다
- 현재 남은 문제는 캐논 충돌이 아니라 문장 밀도와 리듬의 미세 조정이다
- 따라서 전체 재작성보다 `선택적 축약`, `문장 분리`, `문단 호흡 조정`이 적절하다

## 5. Priority List

### Priority 1

File:

- `manuscript/chapter1/E001_무료한일상_정본초고.md`

Focus:

- 13-21행의 세계 설명과 과거 상처 도입이 밀도는 좋지만, `늘 / 먼저 / 말보다 먼저 / 감각` 계열 반복이 가까이 모여 있다
- 1화 첫 진입부라서 정보보다 리듬이 먼저 살아야 한다

Edit direction:

- 설명 문장 1개를 줄이고
- 감각 설명 중 의미가 겹치는 구절 1-2개를 압축
- `열여섯의 봄` 회상 진입을 반 박자 늦추면 현재 장면의 집중력이 올라간다

### Priority 2

File:

- `manuscript/chapter2/E040_첫키스_정본초고.md`

Focus:

- 23-25행, 41-47행은 분위기는 좋지만 감정 요약어가 조금 빠르게 붙는다
- `자연스러워서 / 알고 있는 / 충분했다 / 분명했고 / 조심해야` 흐름이 약간 설명적으로 들릴 수 있다

Edit direction:

- 입맞춤 직전 정적 설명을 1문장 덜고
- 입맞춤 후 공기 변화 묘사를 더 단순하게 정리
- 마지막 문장에 남은 `행복 + 조심` 이중 요약을 조금 더 장면 중심으로 돌린다

### Priority 3

File:

- `manuscript/chapter3/E060_돌아볼수없는선_정본초고.md`

Focus:

- 15-18행과 29-33행은 핵심 장면이 맞지만 비유와 해설이 연달아 붙어 있다
- 파열 직전 회차라 힘은 충분한데, 한 문장만 덜 설명해도 더 아프게 남는다

Edit direction:

- `비유가 아니라 경고처럼` 이후 해설을 1단 줄이고
- `너무 늦게 배운 언어였다` 같은 해석 문장을 한 박자 뒤로 빼거나 더 짧게 압축
- 대사와 침묵이 더 직접 부딪히게 한다

### Priority 4

File:

- `manuscript/chapter4/E080_청취소실전환_정본초고.md`

Focus:

- 7-15행은 전환의 의미를 분명히 잡지만, 설명 문장들이 연쇄적으로 붙어 약간 논문형 리듬이 난다
- `아니었다 / 의미도 없었다 / 인정해야 했다 / 분명했다`가 연속되어 문장 표면이 비슷해진다

Edit direction:

- 전환 설명을 한 단계 덜 해설하고 감각 묘사 쪽으로 기울인다
- 부정문 반복을 줄인다
- `질문 / 기다림 / 관계` 3단 구조는 유지하되 더 짧게 정리한다

### Priority 5

File:

- `manuscript/chapter6/E110_다시이어지는리듬_정본초고.md`

Focus:

- 5-7행은 결말 윤리에는 정확하지만 산문 리듬이 조금 격언형으로 들릴 수 있다
- 특히 `대신 지금이 있었다`, `현재를 성실하게 대할 수는 있으니까`는 의미는 좋지만 약간 추상적이다

Edit direction:

- 장면에서 이미 보이는 의미를 한 문장 덜 말한다
- `미래/현재` 대비를 더 짧게 하거나 행동 쪽으로 전환
- 비차단 판정은 유지하되 산문 밀도는 낮춘다

### Priority 6

File:

- `manuscript/chapter6/E118_마지막재회_정본초고.md`

Focus:

- 3-7행에 회차의 핵심 감정, 인정, 대화, 골목 이동, 작별 의미가 촘촘하게 몰려 있다
- 정보는 맞지만 문단 호흡이 조금 빠르다

Edit direction:

- 카페 대화와 골목 작별을 문단상 더 분리
- `같은 말을 하고 있었다` 같은 결론 문장을 바로 닫지 말고 한 호흡 비워 준다
- 마지막 재회의 감정 여운을 한 템포 더 확보한다

## 6. What Is Working Well

- 짧은 회차 형식 안에서 계절, 거리, 빛, 공기 같은 반복 모티프가 안정적으로 작동한다
- 결별 이후의 산문은 과장보다 절제가 앞서서 결말 톤과 잘 맞는다
- 결말부는 `능력 회복`이나 `해피엔드`로 미끄러지지 않고, 말과 거리의 윤리로 닫힌다

## 7. Remaining

다음 소설 작업:

- 위 priority 순서대로 selective line edit
- 수정 후 chapter별 revision memo 생성
- 마지막으로 `E001-E120` 어휘/표기 일관성 교열

분리 유지:

- media report
- music / image / MV 상태 보고

## 8. Applied Pass

이번 패스에서 실제 selective line edit를 반영한 파일:

- `manuscript/chapter1/E001_무료한일상_정본초고.md`
- `manuscript/chapter1/E002_서점에서의충격_정본초고.md`
- `manuscript/chapter1/E003_아린이라는존재_정본초고.md`
- `manuscript/chapter1/E004_네가들리는거리_정본초고.md`
- `manuscript/chapter1/E005_내일을기다리며_정본초고.md`
- `manuscript/chapter1/E006_문학과철학_정본초고.md`
- `manuscript/chapter1/E007_같은조가되다_정본초고.md`
- `manuscript/chapter1/E008_도서관첫미팅_정본초고.md`
- `manuscript/chapter1/E009_마음의비밀_정본초고.md`
- `manuscript/chapter1/E010_특별한관심_정본초고.md`
- `manuscript/chapter1/E018_손이닿은순간_정본초고.md`
- `manuscript/chapter1/E019_이어달리기_정본초고.md`
- `manuscript/chapter1/E020_뒤풀이_정본초고.md`
- `manuscript/chapter1/E011_첫공연_정본초고.md`
- `manuscript/chapter1/E013_새로운운율_정본초고.md`
- `manuscript/chapter1/E014_음악이야기_정본초고.md`
- `manuscript/chapter1/E015_연결되는마음_정본초고.md`
- `manuscript/chapter1/E012_방음실의고백_정본초고.md`
- `manuscript/chapter2/E023_작은질투_정본초고.md`
- `manuscript/chapter2/E024_기다리는사람_정본초고.md`
- `manuscript/chapter2/E025_말해야하는이유_정본초고.md`
- `manuscript/chapter2/E030_대답_정본초고.md`
- `manuscript/chapter2/E031_어색한기쁨_정본초고.md`
- `manuscript/chapter2/E032_서로의속도_정본초고.md`
- `manuscript/chapter2/E033_기대와현실_정본초고.md`
- `manuscript/chapter2/E035_다시맞춘호흡_정본초고.md`
- `manuscript/chapter2/E037_가까운행복_정본초고.md`
- `manuscript/chapter2/E038_둘만의세계_정본초고.md`
- `manuscript/chapter2/E039_안정의표면_정본초고.md`
- `manuscript/chapter2/E021_가까워지는거리_정본초고.md`
- `manuscript/chapter2/E022_익숙해진목소리_정본초고.md`
- `manuscript/chapter2/E026_고백의예감_정본초고.md`
- `manuscript/chapter2/E027_망설임_정본초고.md`
- `manuscript/chapter2/E028_질문의문장_정본초고.md`
- `manuscript/chapter2/E029_고백_정본초고.md`
- `manuscript/chapter2/E034_아린의닫힘_정본초고.md`
- `manuscript/chapter2/E036_연애시작_정본초고.md`
- `manuscript/chapter2/E040_첫키스_정본초고.md`
- `manuscript/chapter3/E043_도현등장_정본초고.md`
- `manuscript/chapter3/E045_흔들리는해석_정본초고.md`
- `manuscript/chapter3/E048_말보다빠른해석_정본초고.md`
- `manuscript/chapter3/E052_함께있는미래의환상_정본초고.md`
- `manuscript/chapter3/E053_익숙한행복_정본초고.md`
- `manuscript/chapter3/E055_금의시작_정본초고.md`
- `manuscript/chapter3/E056_말하지않은것들_정본초고.md`
- `manuscript/chapter3/E058_잘못읽은마음_정본초고.md`
- `manuscript/chapter3/E059_쌓이는피로_정본초고.md`
- `manuscript/chapter3/E057_다르게느끼는사랑_정본초고.md`
- `manuscript/chapter3/E051_가장행복한날들_정본초고.md`
- `manuscript/chapter3/E041_세계의확장_정본초고.md`
- `manuscript/chapter3/E042_낯선시선_정본초고.md`
- `manuscript/chapter3/E044_다른방식의다정함_정본초고.md`
- `manuscript/chapter3/E046_행복의리듬_정본초고.md`
- `manuscript/chapter3/E049_친구들의개입_정본초고.md`
- `manuscript/chapter3/E060_돌아볼수없는선_정본초고.md`
- `manuscript/chapter3/E047_읽힌다는불편함_정본초고.md`
- `manuscript/chapter3/E054_정점_정본초고.md`
- `manuscript/chapter5/E086_과거의직면_정본초고.md`
- `manuscript/chapter5/E089_관계의의미_정본초고.md`
- `manuscript/chapter5/E093_편안함과사랑_정본초고.md`
- `manuscript/chapter5/E094_말로하는이해_정본초고.md`
- `manuscript/chapter5/E092_과거의해석_정본초고.md`
- `manuscript/chapter5/E096_다시읽는아린_정본초고.md`
- `manuscript/chapter5/E098_그때우리는_정본초고.md`
- `manuscript/chapter5/E099_다시만나기전_정본초고.md`
- `manuscript/chapter5/E100_문턱_정본초고.md`
- `manuscript/chapter5/E095_상처봉합_정본초고.md`
- `manuscript/chapter5/E091_우연한재회_정본초고.md`
- `manuscript/chapter5/E081_침묵이후_정본초고.md`
- `manuscript/chapter5/E082_익숙하지않은평온_정본초고.md`
- `manuscript/chapter5/E083_남겨진습관_정본초고.md`
- `manuscript/chapter5/E084_혼자서배우는언어_정본초고.md`
- `manuscript/chapter5/E085_작은성숙_정본초고.md`
- `manuscript/chapter5/E088_아린없는세계_정본초고.md`
- `manuscript/chapter5/E097_내이야기의오류_정본초고.md`
- `manuscript/chapter4/E063_말할수없는진실_정본초고.md`
- `manuscript/chapter4/E064_흔들리는운율_정본초고.md`
- `manuscript/chapter4/E067_상처의언어_정본초고.md`
- `manuscript/chapter4/E074_소실심화_정본초고.md`
- `manuscript/chapter4/E069_파열이후_정본초고.md`
- `manuscript/chapter4/E071_거리두기_정본초고.md`
- `manuscript/chapter4/E072_재시도_정본초고.md`
- `manuscript/chapter4/E076_마지막대화의준비_정본초고.md`
- `manuscript/chapter4/E077_서로다른언어_정본초고.md`
- `manuscript/chapter4/E073_어색한친절_정본초고.md`
- `manuscript/chapter4/E079_이후_정본초고.md`
- `manuscript/chapter4/E061_후퇴_정본초고.md`
- `manuscript/chapter4/E062_압박_정본초고.md`
- `manuscript/chapter4/E065_어긋난타이밍_정본초고.md`
- `manuscript/chapter4/E066_큰충돌의시작_정본초고.md`
- `manuscript/chapter4/E070_돌이킬수없는금_정본초고.md`
- `manuscript/chapter4/E080_청취소실전환_정본초고.md`
- `manuscript/chapter4/E068_rupture_정본초고.md`
- `manuscript/chapter4/E078_결별_정본초고.md`
- `manuscript/chapter6/E103_재회_정본초고.md`
- `manuscript/chapter6/E109_거리와예의_정본초고.md`
- `manuscript/chapter6/E112_말로하는고백_정본초고.md`
- `manuscript/chapter6/E113_아린의선택_정본초고.md`
- `manuscript/chapter6/E114_마지막시험_정본초고.md`
- `manuscript/chapter6/E111_선택의시작_정본초고.md`
- `manuscript/chapter6/E101_재회의예감_정본초고.md`
- `manuscript/chapter6/E102_다시만난두사람_정본초고.md`
- `manuscript/chapter6/E104_말로묻기_정본초고.md`
- `manuscript/chapter6/E105_남겨진감정_정본초고.md`
- `manuscript/chapter6/E106_재접속_정본초고.md`
- `manuscript/chapter6/E108_들리지않아도_정본초고.md`
- `manuscript/chapter6/E115_증명_정본초고.md`
- `manuscript/chapter6/E116_마지막화음의시작_정본초고.md`
- `manuscript/chapter6/E117_끝내피하지않는이유_정본초고.md`
- `manuscript/chapter6/E120_에필로그_정본초고.md`
- `manuscript/chapter6/E107_예외의의미_정본초고.md`
- `manuscript/chapter6/E110_다시이어지는리듬_정본초고.md`
- `manuscript/chapter6/E118_마지막재회_정본초고.md`
- `manuscript/chapter6/E119_침묵의완성_정본초고.md`

반영 원칙:

- 캐논 의미는 유지
- 결말 잠금은 유지
- 문장 밀도와 문단 호흡만 조정

후속 상태:

- chapter1-2 selected files: second pass applied
- chapter3-4 selected files: second pass applied
- chapter5-6 selected files: second pass applied
- total applied files: 114
- original priority 6 files: first pass applied
- additional sweep files: `E002`, `E023`, `E043`, `E063`, `E086`, `E103`
- additional sweep files 2: `E004`, `E025`, `E045`, `E064`, `E089`, `E112`
- additional sweep files 3: `E003`, `E024`, `E048`, `E067`, `E093`, `E109`
- additional sweep files 4: `E005`, `E030`, `E052`, `E074`, `E094`, `E113`
- additional sweep files 5: `E006`, `E031`, `E053`, `E069`, `E092`, `E115`
- additional sweep files 6: `E007`, `E032`, `E055`, `E071`, `E096`, `E116`
- additional sweep files 7: `E008`, `E033`, `E056`, `E072`, `E098`, `E117`
- additional sweep files 8: `E009`, `E035`, `E058`, `E076`, `E099`, `E120`
- additional sweep files 9: `E010`, `E037`, `E059`, `E077`, `E100`, `E114`
- additional sweep files 10: `E018`, `E038`, `E057`, `E073`, `E095`, `E111`
- additional sweep files 11: `E019`, `E039`, `E051`, `E079`, `E091`, `E101`
- additional sweep files 12: `E020`, `E021`, `E041`, `E061`, `E081`, `E102`
- additional sweep files 13: `E011`, `E022`, `E042`, `E062`, `E082`, `E104`
- additional sweep files 14: `E013`, `E026`, `E046`, `E065`, `E083`, `E105`
- additional sweep files 15: `E014`, `E027`, `E044`, `E066`, `E084`, `E106`
- additional sweep files 16: `E015`, `E028`, `E049`, `E070`, `E085`, `E108`
- remaining files: expanded line-edit pending
