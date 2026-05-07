# TROY Console — Layout Notes

> Concrete redesign sketches for the two highest-traffic pages.
> Numbers are pixel values. Engineers: implement to match.

---

## 0. Global frame

```
┌──────────┬─────────────────────────────────────────────────────────────┐
│          │                                                             │
│ SIDEBAR  │  MAIN  (max-width 1440, side-padded 32, top-padded 28)      │
│  240px   │                                                             │
│          │                                                             │
└──────────┴─────────────────────────────────────────────────────────────┘
```

- App-shell: `display: grid; grid-template-columns: var(--sidebar-w) 1fr;`
- Sidebar background `--surface-panel`, right border `1px var(--border-subtle)`.
- Main background `--surface-canvas`.
- Main `padding: var(--content-pad-y) var(--content-pad-x);` then inner wrapper `max-width: var(--content-max); margin: 0 auto;`.

### Responsive intent
This is a **desktop tool**. Targets:
- **Optimal**: 1440 – 1920 wide (designer's primary). All layouts assume this.
- **Min usable**: 1180 wide. Below this, the 20-col master grid gets cells <40px which is unreadable; collapse summary bar to 3-col, content padding 24/20.
- **<960**: explicit "사용 불가" notice. This is not a tablet app. Keep the layout but display a banner.
- **Multi-monitor**: layout caps at 1440 inner max-width — even on 4K (3840 wide), content stays centered. Sidebar can collapse to 64px (P1 feature) so the user can place a second window beside the console.
- **Mobile**: out of scope. Layout will technically render (single column stack at <720) but no design care invested.

```css
/* breakpoint hints (use only where required) */
@media (max-width: 1180px) {
  .troy-summary { grid-template-columns: repeat(3, 1fr); }
  :root { --content-pad-x: 20px; --content-pad-y: 20px; }
}
@media (max-width: 720px) {
  .troy-app-shell { grid-template-columns: 1fr; }
  .troy-sidebar { display: none; }
}
```

---

## 1. Sidebar (detail)

```
┌──────────────────────────┐
│                          │  ← 24px top
│ TROY                     │  ← serif 20px, tracking 0.12em, color text-strong
│ 너라는 운율               │  ← sans 11px, dim
│ 120화 콘솔               │  ← caps 10px, faint
│                          │  ← 16px gap
│ ──────────────────────── │  ← 1px subtle divider
│                          │  ← 8px gap
│   마스터 그리드          │  ← nav item, 32h
│   E054 워크벤치 ←        │  ← active, accent left bar
│   E054 상세              │
│                          │
│   ──── 향후 ────          │  ← (P1) collapsible "최근" section
│   E053 워크벤치          │
│   E052 워크벤치          │
│                          │
│ (스페이서 — flex 1)      │
│                          │
│ ──────────────────────── │
│ Dark / Light             │  ← (P1) ghost button row
│ build a3f1c2 · 21:04     │  ← 10px faint
│                          │  ← 16px bottom
└──────────────────────────┘
```

- Nav items: 32px height, 0 top padding from divider, 2px vertical gap between items.
- Active state: left 2px accent inset shadow + `--accent-dim` background.
- Brand wordmark "TROY" uses serif. Everything else uses sans.

---

## 2. Master grid page

```
┌────────────────────────────────────────────────────────────────────────────┐
│ 마스터 그리드                                last sync 21:04 · 120 episodes│  ← page header (28h)
│                                                                            │
│ ┌──────┬──────┬──────┬──────┬──────┬──────┐                                │
│ │ 원고 │ 하네스│ 송 BR│ 비주얼│  PB  │ 게이트│                                │  ← summary, 6 cards × ~88h
│ │ 117  │  82  │  64  │  44  │  18  │  39  │                                │
│ │  /120│  /120│  /120│  /120│  /120│  /120│                                │
│ │ ▰▰▰▰▰│ ▰▰▰░░│ ▰▰▱░░│ ▱▱▱░░│ ░░░░░│ ▰▱░░░│                                │  ← 3px progress bar
│ └──────┴──────┴──────┴──────┴──────┴──────┘                                │
│                                                                            │
│ 제1악장 · 얇은 봄빛                  E001 – E020      [Phase 1]            │  ← chapter head
│ ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐               │
│ │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │               │  ← 20-col grid
│ └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘               │
│                                                                            │
│ 제2악장 · 닿기 시작하는 거리         E021 – E040      [Phase 2]            │
│ [grid]                                                                     │
│ ...                                                                        │
│                                                                            │
│ ── legend ─────────────────────────────────────────────                     │
│ ●Phase1 ●Phase2 ●Phase3 ●Phase4 ●Phase5 ●Phase6                            │
│ │ │ │ │ │  ← 5개 막대: 원고 · 하네스 · 곡 · MV · 게이트                     │
└────────────────────────────────────────────────────────────────────────────┘
```

### Specifics
- Page header bottom margin: `var(--space-xl)` = 24.
- Summary grid: `repeat(6, 1fr)`, gap 12, bottom margin 24.
- Chapter section: bottom margin 32. Chapter head bottom margin 12.
- Cell grid: 20 columns, gap 5, **aspect-ratio 1.15:1** (slightly wider than tall to fit ID + bars).
- At 1440 inner width minus 32 padding = 1376 available. Sidebar 240. So main wrapper has 1376 - 64 (margin) = 1312 work area. With 20 cells × ~58px = 1160 + 19 × 5 gaps = 95 → fits with ~57px cells.
- At 1180 minimum: cells become ~46px wide — still readable since stripe (3px) + ID (3 chars × ~5px) + bars (12px area) fit.

### Cell anatomy (single)

```
┌──┬─────────────────────┬─┐
││ │ E054                │║│   ← stripe: left 3px phase color
│║│                     │║│      bars: right 12px wide, 5 vertical 2px bars
│║│                     │║│      ID: top-left, semibold xs
│║│ Phase 3             │║│      phase tag: bottom-left, 2xs caps dim
│║│                     │║│
└──┴─────────────────────┴─┘
```

- Padding: 6px top, 12px right (bar room), 6px bottom, 8px left (stripe + 5px gap).
- Hover: border 1px subtle → strong, bg panel → raised, transition 80ms.

### Hover preview (P2 feature)
On 400ms hover, show floating popover (Tooltip multiline) above cell:
```
┌────────────────────────────┐
│ E054 · 밝은 창              │
│ Chapter 3 · Phase 3        │
│                            │
│ 원고 ✓  하네스 ✓  곡 ✓     │
│ MV  —   게이트 PASS         │
└────────────────────────────┘
```
Uses `.troy-tooltip--multiline`.

### Chapter stagger reveal (P2)
On first paint of `/`:
- Each chapter section gets `opacity: 0; transform: translateY(4px)` initial.
- Animates to `opacity: 1; transform: translateY(0)` over 400ms `--ease-decelerate`.
- 60ms stagger between chapters.
- Disable under `prefers-reduced-motion`.
- Once revealed, no further transitions on chapter blocks (don't re-animate on filter / data refresh).

---

## 3. Workbench page

```
┌──────────────────────────────────────────────────────────────────────┐
│ ← E054 상세                                                           │
│                                                                      │
│ E054 워크벤치 · 밝은 창                       Chapter 3 · Phase 3     │
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 파이프라인                                                        │ │  ← pipeline card
│ │ [Canon][Harness][Song][Visual][Bible][Suno m]…[Render][QA][Rel]   │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 오디오                                            ○ 1 master   │ │
│ │ ──────────────────────────────────────────────────────────────── │ │
│ │ ┌────────────────────────────────────────────────────────────┐   │ │
│ │ │  Drop mp3 / wav / m4a 또는 클릭                              │   │ │  ← drop zone
│ │ │  허용: E054_master.mp3 / E054_var_a_lofi.mp3 ...             │   │ │
│ │ └────────────────────────────────────────────────────────────┘   │ │
│ │                                                                 │ │
│ │ [master] ▶ ────●────────── 0:38 / 3:22       1.2 MB             │ │  ← saved row
│ │ [var_a]  ▶ ──●──────────── 0:09 / 3:18       1.0 MB             │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 스토리보드 (cut 1 – 16)                       [Card grid]        │ │
│ │ ┌────┐┌────┐┌────┐┌────┐┌────┐                                  │ │
│ │ │ 01 ││ 02 ││ 03 ││ 04 ││ 05 │  …                              │ │  ← 5 col @ 1440
│ │ └────┘└────┘└────┘└────┘└────┘                                  │ │
│ │ ┌────┐┌────┐ …                                                  │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 일괄 인테이크                                                     │ │
│ │ [drop zone — wide]                                              │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 렌더 [accent]                                                    │ │  ← Card --accent
│ │ ──────────────────────────────────────────────────────────────── │ │
│ │ Final MV   [완성]   /export/.../E054_final.mp4   12.3 MB        │ │
│ │ Subs       [있음]   E054.srt                                    │ │
│ │                                                                 │ │
│ │                              [▶ 렌더 시작]   ← Button primary lg │ │
│ └──────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

### Specifics

- Page header: 32px bottom margin.
- Card vertical gap: `var(--space-xl)` = 24.
- Pipeline card padding: 16 (inside Card.Body).
- Audio drop zone: dropzone height ~80px (padding 24 vertical).
- Saved audio row: 3-column grid `120px 1fr 96px` (variant tag / waveform+controls / size).
- Storyboard grid: `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))`. Gap 12. At 1312 work area = 5 cards per row (inc. gaps).
- Render card: uses `.troy-card--accent`. Render button at right-aligned via flex justify-end. Always lg size, primary variant.

### Final MV preview (NEW — when finalRender.exists)
Add inside the Render card, **above** the kv block:
```
┌─────────────────────────────────────────────┐
│  ▶  [video player, 16:9]                    │
└─────────────────────────────────────────────┘
```
- Aspect 16:9, max-width 720, centered.
- Background `--surface-sunken`. 1px `--border-default`.
- HTML5 `<video controls preload="metadata">`.
- Below: download link as ghost Button "다운로드".

If render does not exist, this preview block is replaced by a tall placeholder card with the message "아직 렌더되지 않음" centered, dim text, dashed border.

### Audio: waveform placeholder (P1)
Right now `<audio controls>` is fine. Future enhancement: render a static SVG wave above the audio element using the file's pre-computed peaks. Out of scope for this design phase. **For now: just `<audio controls>`** with the row layout above.

### Pipeline scroll behavior
On 1440: 15 stages × 96px min = 1440. Just barely fits. At narrower widths, horizontal scroll (existing behavior preserved). Add custom scrollbar style (already in COMPONENT_SPEC).

---

## 4. Episode detail page (read-only)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ← 마스터 그리드                                                        │
│                                                                      │
│ E054 · 밝은 창                                  [워크벤치 →]          │  ← serif H1
│ Chapter 3 · Phase 3 · Movement: title-track                          │  ← sans dim subtitle
│                                                                      │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ Episode Status                                                   │ │
│ │ ──────────────────────────────────────────────────────────────── │ │
│ │ 원고            [있음]                                           │ │
│ │ 하네스           [있음]                                           │ │
│ │ 송 브리프        [있음]                                           │ │
│ │ 비주얼 컷        [있음]                                           │ │
│ │ 프로덕션 바이블   [없음]                                          │ │
│ │ 길이 게이트      [safe-line]   3245 한글 / 3398 non-ws            │ │
│ │ 금지 패턴        [pass]                                           │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ ┌──────────────────────────────┬──────────────────────────────────┐ │
│ │ 에피소드 하네스                │ 송 브리프                         │ │  ← 2-col
│ │ [markdown rendered, dense]    │ [markdown]                       │ │
│ │                              │                                  │ │
│ └──────────────────────────────┴──────────────────────────────────┘ │
│ ┌──────────────────────────────┬──────────────────────────────────┐ │
│ │ 비주얼 컷 리스트              │ 프로덕션 바이블                    │ │
│ │ [markdown]                   │ [markdown]                       │ │
│ └──────────────────────────────┴──────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 원고 (정본 초고)                                                 │ │  ← FULL-WIDTH serif
│ │                                                                  │ │
│ │   봄볕이 얇게 들이친 문장과 문장 사이에서…                        │ │
│ │   (serif, leading 1.75, max-width 64ch, centered)                │ │
│ │                                                                  │ │
│ └──────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

- Detail grid (4 cards 2×2): `grid-template-columns: 1fr 1fr; gap: 16;`. Same as today.
- Manuscript card: `gridColumn: '1 / -1'` — full width. Inside it, content max-width 64ch, centered. Serif body.
- All status badges use new `<Badge>` variants.

---

## 5. Spacing recap (cheat-sheet)

| Region | Value |
|---|---|
| App horizontal padding | 32 |
| App vertical padding | 28 |
| Inner max-width | 1440 |
| Sidebar width | 240 |
| Card vertical gap (within page) | 24 |
| Card internal padding (header/body/footer rows) | 12 / 16 |
| Section header → first content | 16 |
| Cell grid gap | 5 |
| Storyboard card gap | 12 |
| Pipeline stage gap | 4 |

Stick to these. Any deviation requires a comment in the JSX.

---

## 6. Multi-monitor / panel use

Anticipated user pattern: console on primary monitor, file explorer (export folder) on secondary, browser with Suno/MJ/Veo on third. Implications:
- The console must be operable as a single column at narrower widths (when user shrinks it to 1180 wide while keeping other tools open). All Cards stack vertically already — no horizontal-only patterns.
- Avoid hover-only affordances for critical actions. The render button is always visible. Only the cell tooltip is hover-only — and it's just informational.
- (P1) Sidebar collapse to 64px frees 176px horizontally — useful when console is one of three windows.

---

## 7. Print / export

Out of scope. The console isn't designed to be printed. If the user needs an export of the master grid, we'll add a "Download SVG" button later. Don't waste time now.
