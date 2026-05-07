# TROY Console — Design System

> 「너라는 운율」120화 운영 콘솔의 시각 언어
> v1.0 — Web Designer (Lead) 사양. 구현 단계의 판단 여지 최소화 목적.

---

## 0. Design Direction (1 paragraph)

TROY 콘솔은 **작가 한 명**이 매일 들여다보는 **로컬 작업대**다. 외부 사용자도, 마케팅 노출도, 모바일도 없다. 따라서 디자인은 화려해질 이유가 없고, 흐릿해질 자격도 없다. 우리는 세 가지 레퍼런스를 합친다.

- **Linear** — 좁은 트랙(track), monospace 숫자, 냉정한 그리드. "120화 시리즈를 한 화면에 본다" 라는 야망을 가능하게 하는 밀도.
- **Notion** — 본문 타이포의 따뜻함, 너무 검지 않은 다크, 지나친 채도 없음. 글을 다루는 도구의 톤.
- **한국 문학·인디 (검정치마, 늦봄–늦가을)** — Pretendard 의 단정함, 제목에서만 잠시 등장하는 명조의 호흡, Phase 1 (얇은 봄빛) 에서 Phase 6 (고요의 완성) 까지의 색 곡선.

핵심 원칙: **냉정한 격자 위에 따뜻한 타이포** (a cool grid, warm type). 색은 6 phase 외에는 거의 흑백·청회색으로 줄이고, 작품 내부의 계절 곡선만이 색의 자격을 가진다.

---

## 1. Naming Convention

**BEM-lite + utility hybrid**.

- 의미 컴포넌트는 `.troy-` 접두 + BEM 스타일: `.troy-cell`, `.troy-cell__id`, `.troy-cell--phase-3`, `.troy-cell--state-done`.
- 변형은 `--<dimension>-<value>` (예: `--state-pending`, `--size-sm`, `--variant-ghost`).
- 한 번 쓰는 보조 클래스는 utility: `.u-mt-md`, `.u-text-dim`, `.u-mono-num`. 단 utility 남발 금지 — 두 번 이상 등장할 패턴은 즉시 컴포넌트화.
- React 측: 컴포넌트 props 로 variant 받고, classNames 는 위 BEM 규칙으로 직접 결합. CSS-in-JS 도입 금지 (다음 phase 의 비용).

---

## 2. Color Philosophy

### 2.1 왜 다크가 primary 인가
작가의 본업은 새벽 1–5 시이며 6 page 동시 모니터링 시야 안에서 cell 이 120 개 깜빡인다. 라이트 모드는 종이 같은 안도감을 주지만 cell grid 의 hover state 와 phase stripe 가 시각 노이즈가 된다. 다크가 기본, 라이트는 낮 시간 백업.

### 2.2 Surface 톤 (왜 #0E0F12 가 아닌가)
기존 `#0E0F12` 는 GitHub-blue 계열이라 "code editor" 의 톤이다. 우리는 **약간 따뜻한 검정 (`#101013` ~ `#16161A`)** 으로 옮긴다. 색온도로 따지면 R 가 G·B 와 거의 같거나 1–2 단계 높음. 결과: 한국어 본문이 종이에 가까워 보이고 cell phase 색이 떠 보이지 않음.

### 2.3 Accent
청록 계열 단일 액센트 `#7FA9C9` (slate-cyan). 기존 `#7AA2F7` 는 너무 "Tokyo Night" 다. 새 액센트는 늦봄 하늘색에 회색을 한 스푼 — 작품 톤에 맞다. **destructive 외에는 빨강을 쓰지 않는다.**

### 2.4 Status Color Mapping
작가가 매일 30 회 이상 보는 색이므로 채도를 절제한다.

| 의미 | 토큰 | 헥스 (dark) | 용도 |
|---|---|---|---|
| done / pass | `--status-ok` | `#7AB28A` | 완료, 게이트 통과, 마스터 인테이크 완료 |
| in-progress | `--status-progress` | `#C9A96E` | 일부만 채워짐 (16 컷 중 7 컷) |
| pending / missing | `--status-pending` | `#5A5E68` | 미수행. **회색이지 빨강이 아님.** |
| warn | `--status-warn` | `#D4A24C` | 길이 over, 라우팅 의심 |
| fail / blocked | `--status-fail` | `#C76F6A` | 게이트 실패, 업로드 실패 |
| info | `--status-info` | `#7FA9C9` | 액센트와 동일 |

원칙: **missing ≠ fail.** 16 컷 중 0 컷 채워진 상태는 회색이지 빨강이 아님. 빨강은 "뭔가 잘못됨" 만 가리킨다.

### 2.5 Phase Color Mapping
**캐논 §Phase 1–6 의 계절·감정 곡선을 색으로 번역.** 모든 phase 가 같은 채도 (~32%) · 같은 명도 (~74%) 위에 있어 120 cell 그리드에서 충돌하지 않는다.

| Phase | 캐논 톤 | 토큰 | 헥스 | 색 의도 |
|---|---|---|---|---|
| 1 (E001–020) | 얇은 봄빛 · 회청색, 위축 | `--ph1` | `#9FB3C8` | 차가운 회청 — 미명 |
| 2 (E021–035) | 닿기 시작하는 거리 | `--ph2` | `#A8C4A2` | 풀빛 — 봄말 신록 |
| 3 (E036–060) | 겹쳐지는 운율 · 한여름 | `--ph3` | `#E0C896` | 흙빛 노랑 — 늦오후 |
| 4 (E061–080) | 어긋남 · 늦여름 | `--ph4` | `#D9A6A0` | 흐린 산호 — 일몰 직전 |
| 5 (E081–100) | 다시 들리는 자리 · 초가을 | `--ph5` | `#B5A4C9` | 라벤더 회색 — 박명 |
| 6 (E101–120) | 고요의 완성 · 늦가을 | `--ph6` | `#8FA0A8` | 청회색 — 비 갠 후 |

**기존 API 유지** (`--ph1` ~ `--ph6`) — page.tsx, 도트, stripe 모두 그대로 작동. 헥스만 차분하게 정제.

### 2.6 텍스트 위계
| 토큰 | 용도 |
|---|---|
| `--text-strong` | 본문 강조, 숫자, 제목 (`#E8E6E1`, 약간 따뜻한 흰색) |
| `--text` | 일반 본문 (`#C8C7C2`) |
| `--text-dim` | 라벨, 메타, 캡션 (`#878680`) |
| `--text-faint` | placeholder, disabled (`#5A5955`) |

따뜻한 회색 — `#FFFFFF` 절대 금지. 글자가 종이처럼 보여야 한다.

---

## 3. Typography

### 3.1 Font Stacks

```
--font-sans:  'Pretendard Variable', Pretendard, -apple-system, 'SF Pro Text', 'Helvetica Neue', 'Apple SD Gothic Neo', sans-serif;
--font-serif: 'Noto Serif KR', 'Sandoll Myungjo', 'Apple SD Gothic Neo', Georgia, serif;
--font-mono:  'JetBrains Mono', 'SF Mono', 'Cascadia Code', 'D2Coding', ui-monospace, monospace;
```

**왜 Pretendard:** 한국어 UI 의 사실상 표준. 한·영 자폭(advance width) 이 정렬되며, OpenType 의 tabular numbers 가 잘 작동 — cell 안의 `E054` 같은 ID 가 떨리지 않는다. Variable 버전 사용 (단일 woff2 로 weight 100–900 커버).

**왜 Noto Serif KR:** 페이지 제목 한정 명조. 본문에 명조를 쓰면 콘솔이 아니라 원고지가 된다. 페이지 H1 (e.g. `E054 · 밝은 창`) 에서만 사용해 "이건 소설 콘솔" 임을 1초 안에 알린다.

**왜 JetBrains Mono:** SF Mono 보다 한국어 폴백과의 baseline 정합성이 좋고, 0/O · 1/l 구분이 명확. 파일명·경로·코드블록 한정.

### 3.2 Font Loading
@font-face 는 **로컬 / unicode-range** 권장. 외부 CDN 의존 금지 (사용자가 오프라인 작업 가능해야 함). `tokens.css` 상단에 주석으로 설치 경로 명시. 미설치 시 stack 폴백이 충분히 자연스러우므로 P0 가 아님.

### 3.3 Scale (1.125 ratio · major second)

| 토큰 | px | 용도 |
|---|---|---|
| `--text-2xs` | 10 | cell ID, 도트 라벨 |
| `--text-xs`  | 11 | meta, 캡션, 사이드바 sub |
| `--text-sm`  | 12 | 일반 라벨, kv 키, summary label |
| `--text-md`  | 13 | 본문 기본 |
| `--text-lg`  | 14 | 섹션 제목 |
| `--text-xl`  | 16 | 페이지 부제, sidebar h1 |
| `--text-2xl` | 20 | 페이지 H2 (sans) |
| `--text-3xl` | 26 | 페이지 H1 (serif, episode detail) |
| `--text-4xl` | 34 | 마스터 그리드 hero numeric (예약) |

본문 기본은 `--text-md` (13px). 14px 보다 약간 작게 — 데이터 밀도 모드. 페이지 본문/원고 표시 영역만 `--text-lg` 로 키운다.

### 3.4 Weights

| 토큰 | 값 | 용도 |
|---|---|---|
| `--weight-regular` | 400 | 본문 |
| `--weight-medium`  | 500 | 라벨 강조, summary value |
| `--weight-semibold`| 600 | 섹션 제목, cell ID, 버튼 |
| `--weight-bold`    | 700 | 페이지 H1·H2 (serif 는 600 권장) |

### 3.5 Line Height & Letter Spacing

| 토큰 | 값 | 용도 |
|---|---|---|
| `--leading-tight`  | 1.2  | 큰 제목, 숫자 |
| `--leading-snug`   | 1.35 | UI 라벨 |
| `--leading-normal` | 1.55 | 본문 |
| `--leading-relaxed`| 1.75 | 원고 표시 영역 (Episode detail) |

`--tracking-tight: -0.01em` — 대형 sans 제목 한정.
`--tracking-normal: 0`.
`--tracking-wide: 0.04em` — 작은 라벨 caps (e.g. summary label "원고") 한정.

### 3.6 Numeric Treatment
숫자가 자주 변하는 곳 (summary value, cell counts, file sizes) 은 `font-feature-settings: "tnum" 1, "ss01" 1;` — Pretendard tabular numerals. 진동 없이 떨림 제거.

---

## 4. Spacing & Grid

### 4.1 Scale (4px base, geometric-ish)

| 토큰 | px |
|---|---|
| `--space-0`   | 0   |
| `--space-2xs` | 2   |
| `--space-xs`  | 4   |
| `--space-sm`  | 8   |
| `--space-md`  | 12  |
| `--space-lg`  | 16  |
| `--space-xl`  | 24  |
| `--space-2xl` | 32  |
| `--space-3xl` | 48  |

### 4.2 Layout Constants

| 토큰 | px | 비고 |
|---|---|---|
| `--sidebar-w`            | 240 | 기존 220 → 240 (브랜드+메타 호흡) |
| `--sidebar-w-collapsed`  | 64  | 옵션 (P1) |
| `--content-pad-x`        | 32  | main 좌우 |
| `--content-pad-y`        | 28  | main 상하 |
| `--content-max`          | 1440 | 워크벤치는 wide, max-width 적용 |
| `--grid-gap`             | 5   | 120-cell 그리드 — 기존 4 → 5 |
| `--grid-cols`            | 20  | chapter 당 20 화 = 20 col |

### 4.3 Grid Logic
- **Master grid** 의 chapter 별 20-col 그리드는 변경 없음.
- 페이지 내부 컨테이너는 `max-width: var(--content-max)` 에 좌우 자동 마진. 4K 듀얼 모니터에서 한쪽 패널만 사용해도 늘어지지 않게.
- Workbench 의 storyboard grid 는 `repeat(auto-fill, minmax(240px, 1fr))` (16:9 카드 4-5 열).

---

## 5. Surface Hierarchy

**3-level 표면.** 더 깊은 레이어 = 더 밝은 회색. 그림자가 아니라 명도로 위계를 만든다.

| Level | 토큰 | 헥스 (dark) | 용도 |
|---|---|---|---|
| 0 (canvas) | `--surface-canvas` | `#101013` | body, app-shell 배경 |
| 1 (panel)  | `--surface-panel`  | `#16171B` | sidebar, section, card |
| 2 (raised) | `--surface-raised` | `#1C1E23` | hover, drop zone, modal, popover |
| 3 (sunken) | `--surface-sunken` | `#0C0D10` | code block, pre, audio waveform 슬롯 |

### 5.1 Border
- `--border-subtle: #22242A` — 카드 내부 분할
- `--border-default: #2A2D34` — 카드 외곽
- `--border-strong: #3A3E47` — focus, hover edge
- `--border-focus: var(--accent-strong)` (1px 인셋 + 2px outset 가능)

### 5.2 Shadow
다크에서 그림자는 거의 안 보인다. 대신 **상단 1px 하이라이트** 와 **외곽 1px 보더** 로 elevation 표현.

```
--shadow-none:  0 0 0 0 transparent;
--shadow-sm:    inset 0 1px 0 rgba(255,255,255,0.04);
--shadow-md:    inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.4);
--shadow-lg:    inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5);
--shadow-glow:  0 0 0 1px var(--accent), 0 0 0 4px rgba(127,169,201,0.18);
```

`--shadow-glow` 는 focus ring + drop hover 한정.

### 5.3 Radius

| 토큰 | px | 용도 |
|---|---|---|
| `--radius-xs` | 3  | 도트, 작은 태그 |
| `--radius-sm` | 6  | 버튼, badge, cell |
| `--radius-md` | 10 | card, section, drop zone |
| `--radius-lg` | 14 | modal, large card |
| `--radius-pill` | 999 | gate-tag, status badge |

기존 4–8 보다 살짝 키움. 부드럽게 보이되 둥글지 않음.

---

## 6. Motion

### 6.1 원칙
- **데이터 콘솔은 빨라야 한다.** 트랜지션이 200ms 를 넘기면 작가가 느린 도구라고 인지한다.
- **상태 변화에만 모션을 쓴다** (hover, focus, load complete). 페이지 진입 모션은 금지 — Master grid 의 chapter 별 stagger reveal 만 예외 (한 번만 나오는 시그니처 모션).
- **곡선** 은 자연 가속 — `cubic-bezier(0.2, 0, 0, 1)` (Vercel 의 ease-out 변형). bounce 금지.

### 6.2 Tokens

```
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-emphasis: cubic-bezier(0.3, 0, 0, 1);
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
--duration-instant: 80ms;   /* hover bg, focus */
--duration-quick:   140ms;  /* button, badge, dot */
--duration-base:    220ms;  /* drop zone, popover */
--duration-slow:    400ms;  /* page-level reveal (master grid stagger) */
```

### 6.3 어디서 모션을 쓰는가
- ✅ Cell hover: border-color 80ms
- ✅ Drop zone hover: 140ms background + 1px border
- ✅ Render button loading: 360deg infinite linear (1.2s)
- ✅ Master grid chapter stagger: opacity 0→1, translateY 4px→0, 40ms 간격, 1회만
- ✅ Toast slide-in: 220ms, slide-out 140ms
- ❌ 페이지 라우팅 transition 없음 (Next 기본)
- ❌ Cell 내부 도트 색 변경에 트랜지션 없음 (즉시 반영)

`prefers-reduced-motion` 시 stagger 제거, 모든 트랜지션 60ms 클램프.

---

## 7. Z-Index Scale

```
--z-base: 0;
--z-raised: 10;       /* sticky header */
--z-overlay: 100;     /* tooltip */
--z-popover: 200;     /* hover preview */
--z-modal: 1000;
--z-toast: 2000;
```

---

## 8. Iconography

이번 phase 에서 아이콘 시스템 도입하지 않음. 구현 단계에서 lucide-react 가 들어오기 전엔, **글자와 점만으로 UI 가 작동해야 한다.** 텍스트 라벨을 줄이지 말 것. 향후 lucide 도입 시 stroke-width 1.5px / 16px / 20px 두 사이즈만 허용 — 별도 PR.

---

## 9. Accessibility & Keyboard

- 모든 인터랙티브 요소 `:focus-visible` 시 `--shadow-glow`.
- Cell 은 `<a>` 이므로 Tab 순회 가능 — outline 강조 필수.
- Color-only 정보 금지. 도트는 색 + (hover 시) 텍스트 라벨.
- 한국어 본문은 `lang="ko"` (이미 `<html lang="ko">`) — Pretendard hangul subset 자동 적용.

---

## 10. 구현 우선순위 (Engineer 인계용)

### P0 (이번 phase 안에)
1. `tokens.css` 적용, `globals.css` 의 디자인 토큰 영역 교체
2. Sidebar 타이포·간격·active state
3. Master grid cell 재디자인 (도트→마이크로바 옵션 채택, 아래 §LAYOUT_NOTES 참조)
4. Workbench section heading + drop zone 정제
5. Button / Badge / Card primitive 3종 추출

### P1 (다음 phase)
6. Tooltip primitive 도입 (현재 native `title=` 대체)
7. Episode detail 의 markdown 렌더 (현재 `<pre>` → react-markdown 또는 remark)
8. Sidebar collapsible
9. Light theme 검증

### P2 (나중)
10. Hover 프리뷰 popover (cell → 에피소드 카드 미리보기)
11. Master grid chapter stagger reveal
12. Storyboard waveform placeholder

---

## 11. Open Questions for Engineering

DESIGN_SYSTEM 단에서 못 정한 것:
1. **react-markdown vs remark+rehype**: episode detail 의 `<pre>` 교체 시 어느 쪽을 채택할지는 번들 크기 정책에 달림. 디자이너 의견: react-markdown + rehype-highlight, 그 외 플러그인 거부.
2. **Pretendard 설치 방법**: 사용자 시스템 폰트 vs npm `pretendard` 패키지 vs self-hosted woff2. tokens.css 는 셋 다 호환 — 결정 후 @font-face 만 작성.
3. **Phase stripe 위치**: cell 상단 3px (현재) 유지 vs 좌측 세로 3px. 좌측 세로 권장 (§LAYOUT_NOTES 참조). 엔지니어 판단으로 둘 중 채택.
