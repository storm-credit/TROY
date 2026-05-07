# TROY Console — Component Specification

> v1.0. The Frontend Engineer implements directly from this document.
> Use BEM-lite class naming (see `DESIGN_SYSTEM.md §1`). Match every state listed.
> Class examples assume `tokens.css` is loaded.

---

## A. Primitives (NEW — to be created in `frontend/components/ui/`)

### A.1 Button — `<Button />`

**Path:** `components/ui/Button.tsx`
**Class root:** `.troy-btn`

#### Variants (mutually exclusive)
| Variant | Class | Use |
|---|---|---|
| `primary`     | `.troy-btn--primary`     | Render, Save, primary CTA. One per screen ideal. |
| `secondary`   | `.troy-btn--secondary`   | Cancel, "Open workbench →", neutral actions. |
| `ghost`       | `.troy-btn--ghost`       | Toolbar buttons, link-like. No fill. |
| `destructive` | `.troy-btn--destructive` | Delete, Remove. Red. Confirm dialog upstream. |

#### Sizes
| Size | Class | Height | Padding-x | Font |
|---|---|---|---|---|
| `sm` | `.troy-btn--sm` | 26px | 10px | `--text-sm` |
| `md` | `.troy-btn--md` | 32px | 14px | `--text-md` |
| `lg` | `.troy-btn--lg` | 40px | 18px | `--text-lg` |

Default: `md`.

#### States (apply on top of variant)
- `default` — base
- `hover` — `:hover` and `:focus-visible`
- `active` — `:active` (1px translateY for primary)
- `disabled` — `[aria-disabled="true"]` or `:disabled`. opacity 0.5, cursor not-allowed, no hover.
- `loading` — `.troy-btn--loading`. Spinner replaces icon, text dimmed; `aria-busy="true"`. Click no-op.
- `error` — `.troy-btn--error`. Red ring 600ms, then auto-clear. Used after a failed action.

#### CSS recipe
```css
.troy-btn {
  display: inline-flex; align-items: center; gap: var(--space-sm);
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-normal);
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: background var(--duration-quick) var(--ease-standard),
              border-color var(--duration-quick) var(--ease-standard),
              color var(--duration-quick) var(--ease-standard),
              transform var(--duration-instant) var(--ease-standard);
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
}
.troy-btn:focus-visible { outline: none; box-shadow: var(--shadow-glow); }

.troy-btn--primary {
  background: var(--accent); color: var(--text-on-accent);
  border-color: var(--accent-strong);
  box-shadow: var(--shadow-sm);
}
.troy-btn--primary:hover { background: var(--accent-strong); }
.troy-btn--primary:active { transform: translateY(1px); }

.troy-btn--secondary {
  background: var(--surface-panel); color: var(--text-strong);
  border-color: var(--border-default);
}
.troy-btn--secondary:hover {
  background: var(--surface-raised); border-color: var(--border-strong);
}

.troy-btn--ghost {
  background: transparent; color: var(--text);
  border-color: transparent;
}
.troy-btn--ghost:hover { background: var(--surface-raised); color: var(--text-strong); }

.troy-btn--destructive {
  background: transparent; color: var(--status-fail);
  border-color: var(--border-default);
}
.troy-btn--destructive:hover {
  background: var(--status-fail); color: var(--text-on-accent); border-color: var(--status-fail);
}

.troy-btn--loading { pointer-events: none; }
.troy-btn--loading .troy-btn__spinner {
  width: 12px; height: 12px;
  border: 1.5px solid currentColor; border-top-color: transparent;
  border-radius: 50%;
  animation: troy-spin 1.2s linear infinite;
}
@keyframes troy-spin { to { transform: rotate(360deg); } }
```

#### JSX
```tsx
<Button variant="primary" size="md" loading={busy} onClick={onRender}>
  렌더 시작
</Button>

<Button variant="secondary" size="sm" asChild>
  <Link href={`/episode/${id}/workbench`}>워크벤치 →</Link>
</Button>
```

---

### A.2 Badge — `<Badge />`

**Path:** `components/ui/Badge.tsx`
**Class root:** `.troy-badge`
Replaces all `gate-tag gate-pass / gate-warn / gate-fail / gate-none`. Migrate then delete legacy classes.

#### Variants (status mapping)
| Variant | Class | Usage |
|---|---|---|
| `ok` | `.troy-badge--ok` | done, pass, 완료 |
| `progress` | `.troy-badge--progress` | in-progress, 7/16 채워짐 |
| `pending` | `.troy-badge--pending` | empty, 미수행, 회색 |
| `warn` | `.troy-badge--warn` | length-warn, audit-warn |
| `fail` | `.troy-badge--fail` | gate fail, error |
| `info` | `.troy-badge--info` | accent, neutral info |
| `phase-1..6` | `.troy-badge--phase-N` | Phase chip, used on episode header |

#### Sizes
| Size | Height | Font | Padding-x |
|---|---|---|---|
| `sm` | 18px | `--text-2xs` (10px) | 6px |
| `md` | 22px | `--text-xs` (11px) | 10px |

#### CSS recipe
```css
.troy-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: var(--font-sans); font-weight: var(--weight-medium);
  font-feature-settings: var(--num-tabular);
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  white-space: nowrap;
  letter-spacing: var(--tracking-wide);
}
.troy-badge--sm { height: 18px; padding: 0 6px;  font-size: var(--text-2xs); }
.troy-badge--md { height: 22px; padding: 0 10px; font-size: var(--text-xs); }

.troy-badge--ok       { background: var(--status-ok-bg);       color: var(--status-ok); }
.troy-badge--progress { background: var(--status-progress-bg); color: var(--status-progress); }
.troy-badge--pending  { background: var(--status-pending-bg);  color: var(--text-dim); }
.troy-badge--warn     { background: var(--status-warn-bg);     color: var(--status-warn); }
.troy-badge--fail     { background: var(--status-fail-bg);     color: var(--status-fail); }
.troy-badge--info     { background: var(--status-info-bg);     color: var(--status-info); }

.troy-badge--phase-1 { background: var(--ph1-bg); color: var(--ph1); }
.troy-badge--phase-2 { background: var(--ph2-bg); color: var(--ph2); }
.troy-badge--phase-3 { background: var(--ph3-bg); color: var(--ph3); }
.troy-badge--phase-4 { background: var(--ph4-bg); color: var(--ph4); }
.troy-badge--phase-5 { background: var(--ph5-bg); color: var(--ph5); }
.troy-badge--phase-6 { background: var(--ph6-bg); color: var(--ph6); }
```

Optional inner dot — `<span class="troy-badge__dot" />`, 6×6 round, currentColor.

#### JSX
```tsx
<Badge variant="ok" size="md">완료</Badge>
<Badge variant="phase-3" size="sm">Phase 3</Badge>
<Badge variant="progress" size="sm" dot>7 / 16</Badge>
```

---

### A.3 Card — `<Card />`

**Path:** `components/ui/Card.tsx`
**Class root:** `.troy-card`
Replaces `.section`. Generic panel.

#### Slots
- `<Card.Header />` — `.troy-card__header`. Contains title (h3) + actions slot.
- `<Card.Body />` — `.troy-card__body`. Default content.
- `<Card.Footer />` — `.troy-card__footer`. Optional.

#### Variants
| Variant | Class | Use |
|---|---|---|
| `default`   | (no modifier)            | section default |
| `elevated`  | `.troy-card--elevated`   | hover-able, popover-style |
| `subtle`    | `.troy-card--subtle`     | nested card, less border |
| `accent`    | `.troy-card--accent`     | left 2px accent border (rare; e.g. Render section highlight) |
| `interactive` | `.troy-card--interactive` | hover changes border to strong; cursor pointer |

#### CSS recipe
```css
.troy-card {
  background: var(--surface-panel);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.troy-card--elevated  { background: var(--surface-raised); box-shadow: var(--shadow-md); }
.troy-card--subtle    { border-color: var(--border-subtle); box-shadow: none; }
.troy-card--accent    { border-left: 2px solid var(--accent); }
.troy-card--interactive { transition: border-color var(--duration-quick) var(--ease-standard); }
.troy-card--interactive:hover { border-color: var(--border-strong); }

.troy-card__header {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border-subtle);
}
.troy-card__header h3 {
  margin: 0; font-size: var(--text-lg); font-weight: var(--weight-semibold);
  color: var(--text-strong); letter-spacing: var(--tracking-tight);
}
.troy-card__body   { padding: var(--space-md) var(--space-lg); }
.troy-card__footer { padding: var(--space-md) var(--space-lg); border-top: 1px solid var(--border-subtle); }
```

#### JSX
```tsx
<Card>
  <Card.Header>
    <h3>오디오 인테이크</h3>
    <Badge variant="ok" size="sm">3/3</Badge>
  </Card.Header>
  <Card.Body>{children}</Card.Body>
</Card>
```

---

### A.4 Input / FileInput / DropZone

**Path:** `components/ui/Input.tsx`, `components/ui/DropZone.tsx`

#### Input (text) — `.troy-input`
Sizes: `sm` (28px) / `md` (32px). States: default / hover / focus / disabled / error.

```css
.troy-input {
  width: 100%; height: 32px;
  padding: 0 var(--space-md);
  background: var(--surface-sunken);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  color: var(--text-strong);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  transition: border-color var(--duration-quick) var(--ease-standard);
}
.troy-input::placeholder { color: var(--text-faint); }
.troy-input:hover { border-color: var(--border-strong); }
.troy-input:focus-visible { outline: none; border-color: var(--accent); box-shadow: var(--shadow-glow); }
.troy-input--error { border-color: var(--status-fail); }
```

#### DropZone — `.troy-dropzone`
This is the visual replacement for the inline-styled drop area inside `IntakeDropZone.tsx`.

States:
- `idle` — base
- `hover` — file dragged over (currently `hover` boolean)
- `busy` — uploading (`aria-busy`)
- `success` — last upload succeeded (auto-clears after 3s)
- `error` — last upload failed

```css
.troy-dropzone {
  position: relative;
  border: 1px dashed var(--border-default);
  background: var(--surface-sunken);
  border-radius: var(--radius-md);
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  color: var(--text-dim);
  cursor: pointer;
  transition: border-color var(--duration-base) var(--ease-standard),
              background var(--duration-base) var(--ease-standard);
}
.troy-dropzone:hover { border-color: var(--border-strong); }
.troy-dropzone--hover {
  border-color: var(--accent);
  border-style: solid;
  background: var(--accent-dim);
  color: var(--text-strong);
}
.troy-dropzone--busy { opacity: 0.7; cursor: progress; }
.troy-dropzone--success { border-color: var(--status-ok); }
.troy-dropzone--error { border-color: var(--status-fail); }

.troy-dropzone__title {
  color: var(--text-strong); font-size: var(--text-md);
  font-weight: var(--weight-medium); margin-bottom: var(--space-xs);
}
.troy-dropzone__hint {
  font-size: var(--text-xs); color: var(--text-dim);
}
.troy-dropzone__hint code {
  font-family: var(--font-mono);
  color: var(--text); padding: 1px 4px;
  background: var(--surface-raised); border-radius: var(--radius-xs);
}
```

#### File-row list (the saved/unrouted result section)
Replace the `<ul>` in IntakeDropZone with:
```css
.troy-filerow {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  align-items: center;
}
.troy-filerow + .troy-filerow { margin-top: 2px; }
.troy-filerow:hover { background: var(--surface-raised); }
.troy-filerow__name { font-family: var(--font-mono); color: var(--text); }
.troy-filerow__meta { color: var(--text-dim); font-feature-settings: var(--num-tabular); }
.troy-filerow__status--ok   { color: var(--status-ok); }
.troy-filerow__status--warn { color: var(--status-warn); }
```

---

### A.5 Toast — `<Toast />`

**Path:** `components/ui/Toast.tsx` + a `<ToastProvider />` at app root.

#### Variants: `success` / `error` / `info`
- Position: bottom-right, 16px gutter.
- Width: 320px, max 4 stacked.
- Lifetime: success 3s, info 4s, error sticky until dismissed.
- Slide-in 220ms `--ease-emphasis`, slide-out 140ms `--ease-standard`.

```css
.troy-toast {
  display: flex; gap: var(--space-md); align-items: flex-start;
  padding: var(--space-md) var(--space-lg);
  background: var(--surface-raised);
  border: 1px solid var(--border-default);
  border-left: 2px solid var(--status-info);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: var(--text-sm); color: var(--text-strong);
  z-index: var(--z-toast);
}
.troy-toast--success { border-left-color: var(--status-ok); }
.troy-toast--error   { border-left-color: var(--status-fail); }
.troy-toast--info    { border-left-color: var(--status-info); }

.troy-toast__title  { font-weight: var(--weight-semibold); margin-bottom: 2px; }
.troy-toast__body   { color: var(--text); }
.troy-toast__close  { margin-left: auto; }
```

#### Triggers (where to wire)
- `IntakeDropZone` upload success → `toast.success("저장됨 (3 파일)")`
- Upload failure → `toast.error("업로드 실패: <reason>")`, sticky.
- `RenderButton` start → `toast.info("렌더 시작…")`. End → success/error.

The result panel currently inlined in `IntakeDropZone.tsx` (the saved/unrouted lists) **stays** as a Card below the drop zone — toast is the ephemeral notification, the Card is the persistent log. Do not double-display.

---

### A.6 ProgressBar — `<ProgressBar />`

**Path:** `components/ui/ProgressBar.tsx`

#### Modes
- `determinate` — `value: number` (0–100). Used for: render progress, upload progress.
- `indeterminate` — sliding stripe. Used for: "checking…", server thinking.

#### Sizes: `sm` (3px) / `md` (6px)

```css
.troy-progress {
  position: relative; overflow: hidden;
  width: 100%;
  background: var(--surface-sunken);
  border-radius: var(--radius-pill);
}
.troy-progress--sm { height: 3px; }
.troy-progress--md { height: 6px; }
.troy-progress__fill {
  height: 100%;
  background: var(--accent);
  border-radius: inherit;
  transition: width var(--duration-base) var(--ease-decelerate);
}
.troy-progress--indeterminate .troy-progress__fill {
  width: 30%;
  animation: troy-progress-slide 1.4s var(--ease-standard) infinite;
}
@keyframes troy-progress-slide {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

---

### A.7 Tooltip — `<Tooltip />`

**Path:** `components/ui/Tooltip.tsx`. Replaces every native `title=` attribute. Especially critical on master grid cells (currently 5 dots × `title=` produces stacked native tooltips).

#### Behavior
- Show after 400ms hover delay (idle).
- Hide instantly on mouseleave.
- Position: `top` default, flip if clipped.
- Max-width 280px, multiline allowed.
- Keyboard: appears on `:focus-visible`.
- Use radix-ui style data attributes for state if a headless lib is added later — for now plain React.

```css
.troy-tooltip {
  position: absolute; z-index: var(--z-overlay);
  padding: var(--space-xs) var(--space-sm);
  background: var(--surface-raised);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  color: var(--text-strong);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-normal);
  box-shadow: var(--shadow-md);
  pointer-events: none;
  white-space: nowrap;
  opacity: 0; transform: translateY(2px);
  transition: opacity var(--duration-quick) var(--ease-standard),
              transform var(--duration-quick) var(--ease-standard);
}
.troy-tooltip--visible { opacity: 1; transform: translateY(0); }
.troy-tooltip--multiline { white-space: normal; max-width: 280px; }
```

#### Cell tooltip (master grid)
On hover of `.troy-cell`, after 400ms, show:
```
E054 · 밝은 창
Phase 3 · Chapter 3
원고 ✓ · 하네스 ✓ · 곡 ✓ · MV — · 게이트 PASS
```
Multi-line. Engineer: this is a small popover-flavored tooltip — see `LAYOUT_NOTES §Hover preview`.

---

## B. Existing components — refined spec

### B.1 Sidebar — `app/layout.tsx`

#### Visual
- Background: `--surface-panel`. Right border `1px var(--border-subtle)`.
- Width: `var(--sidebar-w)` = 240px. Padding: 24px 16px.
- Brand block (top, ~80px tall):
  - "TROY" — `--font-serif`, `--text-2xl`, `--weight-bold`, `--text-strong`. **Letter-spacing `0.12em`** for confident wordmark feel.
  - Below: "너라는 운율" — `--font-sans`, `--text-xs`, `--text-dim`, `--tracking-wide`.
  - Below: "120화 콘솔" — `--text-2xs`, `--text-faint`, `--tracking-caps`, uppercase.
- 16px gap, then 1px `--border-subtle` divider.
- Nav: vertical stack, gap 2px.

#### Nav items
```css
.troy-nav__item {
  display: flex; align-items: center; gap: var(--space-sm);
  height: 32px; padding: 0 var(--space-sm);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-size: var(--text-md); font-weight: var(--weight-medium);
  transition: background var(--duration-quick) var(--ease-standard),
              color var(--duration-quick) var(--ease-standard);
  text-decoration: none;
}
.troy-nav__item:hover { background: var(--surface-raised); color: var(--text-strong); }
.troy-nav__item--active {
  background: var(--accent-dim); color: var(--text-strong);
  box-shadow: inset 2px 0 0 var(--accent);
}
```

Active state uses `usePathname()` from `next/navigation` to compare current route — engineer adds Sidebar as a client component. Items: 마스터 그리드 (`/`), 워크벤치 (last visited episode workbench, fall back to E001).

#### Footer (bottom of sidebar, optional P1)
- Theme toggle (light/dark) — small ghost button, sm.
- Build hash + last sync timestamp, `--text-2xs --text-faint`.

---

### B.2 Master grid — `app/page.tsx`

**This is the most-viewed page. Spend the most care here.**

#### Page header
```
┌──────────────────────────────────────────────────────────────────┐
│ 마스터 그리드 ⌗                                                  │
│ 너라는 운율 · 120 episodes · last sync 21:04                    │
└──────────────────────────────────────────────────────────────────┘
```
- H2 — `--font-sans`, `--text-2xl`, `--weight-bold`, `--text-strong`.
- Right meta — `--text-sm --text-dim`, `font-feature-settings: var(--num-tabular)`.

#### Summary bar — `.troy-summary`
6 cards in a row, but **simpler than current**.
```css
.troy-summary {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: var(--space-md); margin-bottom: var(--space-xl);
}
.troy-summary__card {
  padding: var(--space-md) var(--space-lg);
  background: var(--surface-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}
.troy-summary__label {
  font-size: var(--text-2xs); color: var(--text-dim);
  text-transform: uppercase; letter-spacing: var(--tracking-caps);
  margin-bottom: var(--space-xs);
}
.troy-summary__value {
  font-family: var(--font-sans);
  font-size: var(--text-2xl); font-weight: var(--weight-medium);
  color: var(--text-strong);
  font-feature-settings: var(--num-tabular);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}
.troy-summary__value-total {
  color: var(--text-faint); font-size: var(--text-md); margin-left: 4px;
}
.troy-summary__bar {
  margin-top: var(--space-sm);
  /* Use ProgressBar sm */
}
```
Each card: label (uppercase caps), big value `${done}` + dim `/${total}`, then a 3px progress bar showing the ratio. Bar color matches the metric (gate PASS = ok green, others = accent).

#### Chapter section
```
제3악장 · 겹쳐지는 운율            E041 – E060           Phase 3
─────────────────────────────────────────────────────────
[grid of 20 cells]
```
- Chapter name: `--font-serif`, `--text-lg`, `--weight-semibold`, `--text-strong`.
- Range + phase: right-aligned. `--text-xs --text-dim`. Phase chip uses `Badge phase-N sm`.

#### Cell — **REDESIGNED**
**Decision: replace 5 dots with 5 vertical micro-bars on the right edge of the cell.** Reason: 5 dots horizontally crowd a 9px ID; vertical bars on the edge read as a 5-track status meter, separate from text content.

```
┌─────────────┐
│ E054        │ │
│             │ ║   ← 5 vertical bars right-aligned
│ ▔▔▔▔▔▔▔     │ │
│ Phase 3     │ │
└─────────────┘
```

```css
.troy-cell {
  position: relative;
  aspect-ratio: 1.15 / 1;
  background: var(--surface-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 6px 12px 6px 8px;        /* room for bars on right */
  display: flex; flex-direction: column; justify-content: space-between;
  font-family: var(--font-sans);
  color: var(--text);
  text-decoration: none;
  transition: border-color var(--duration-instant) var(--ease-standard),
              background var(--duration-instant) var(--ease-standard);
  overflow: hidden;
}
.troy-cell:hover {
  border-color: var(--border-strong);
  background: var(--surface-raised);
}
.troy-cell:focus-visible {
  outline: none; box-shadow: var(--shadow-glow);
  border-color: var(--accent);
}

.troy-cell__id {
  font-size: var(--text-xs); font-weight: var(--weight-semibold);
  color: var(--text-strong); letter-spacing: 0;
  font-feature-settings: var(--num-tabular);
}
.troy-cell__phase {
  font-size: var(--text-2xs); color: var(--text-dim);
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
}

/* Phase stripe — LEFT vertical 3px (was top horizontal 3px) */
.troy-cell__stripe {
  position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
}
.troy-cell--phase-1 .troy-cell__stripe { background: var(--ph1); }
.troy-cell--phase-2 .troy-cell__stripe { background: var(--ph2); }
.troy-cell--phase-3 .troy-cell__stripe { background: var(--ph3); }
.troy-cell--phase-4 .troy-cell__stripe { background: var(--ph4); }
.troy-cell--phase-5 .troy-cell__stripe { background: var(--ph5); }
.troy-cell--phase-6 .troy-cell__stripe { background: var(--ph6); }

/* 5 vertical status bars on right edge */
.troy-cell__bars {
  position: absolute; right: 4px; top: 6px; bottom: 6px;
  display: flex; gap: 2px;
}
.troy-cell__bar {
  width: 2px; height: 100%;
  background: var(--status-pending);
  border-radius: 1px;
}
.troy-cell__bar--ok       { background: var(--status-ok); }
.troy-cell__bar--progress { background: var(--status-progress); }
.troy-cell__bar--warn     { background: var(--status-warn); }
.troy-cell__bar--fail     { background: var(--status-fail); }
```

5 bars in order: 원고 / 하네스 / 곡 / MV / 게이트. State picks one of the variants.
Hover/focus shows the Tooltip (§A.7) with full status text.

#### Legend — `.troy-legend`
```css
.troy-legend {
  display: flex; flex-wrap: wrap; gap: var(--space-lg);
  margin-top: var(--space-xl); padding-top: var(--space-md);
  border-top: 1px solid var(--border-subtle);
  font-size: var(--text-xs); color: var(--text-dim);
}
.troy-legend__group { display: flex; gap: var(--space-sm); align-items: center; }
.troy-legend__swatch { width: 10px; height: 10px; border-radius: var(--radius-xs); }
.troy-legend__bar    { width: 2px;  height: 14px; border-radius: 1px; }
```
Two groups: phases (6 swatches) + bar legend ("막대 5개: 원고 · 하네스 · 곡 · MV · 게이트").

---

### B.3 Episode detail — `app/episode/[id]/page.tsx`

#### Page header — TWO-LINE elevated treatment
```
← 마스터 그리드

E054 · 밝은 창                                       [워크벤치 →]
Chapter 3 · Phase 3 · 겹쳐지는 운율
```

- "←" back link: ghost-style, `--text-sm --text-dim`.
- H1: `<h1 class="troy-page__title">` — **serif here**. `--font-serif`, `--text-3xl`, `--weight-semibold` (Noto Serif KR has no 700 in many subsets; 600 reads bold). `--leading-tight`. Episode ID stays sans-mono visually distinct? No — keep same serif for cohesion. Title separator is bullet "·".
- Subtitle: `--font-sans`, `--text-md --text-dim`. Replace inline meta. Phase becomes a `Badge phase-N md` next to chapter.
- Right action: `Button variant="primary" size="md"` — "워크벤치 → ".

#### Status section
Use `Card` with `Card.Header` "Episode Status".
Inside body: replace `.kv` grid with cleaner spec:
```css
.troy-kv {
  display: grid;
  grid-template-columns: 140px 1fr;
  row-gap: var(--space-sm); column-gap: var(--space-lg);
  font-size: var(--text-md);
}
.troy-kv__k {
  color: var(--text-dim);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  padding-top: 3px;
}
.troy-kv__v { color: var(--text-strong); }
```
Replace all `gate-tag` calls with `<Badge>`.

#### File sections
Replace `<pre>` with proper rendering.
Two cases:
1. **Markdown content** (harness, song brief, visual cut, production bible) → `react-markdown` + `rehype-highlight`. Wrap in:
   ```css
   .troy-prose {
     font-family: var(--font-sans);
     font-size: var(--text-md);
     line-height: var(--leading-relaxed);
     color: var(--text);
     max-width: 76ch;
   }
   .troy-prose h1 { font-family: var(--font-serif); font-size: var(--text-2xl); margin: var(--space-xl) 0 var(--space-sm); }
   .troy-prose h2 { font-size: var(--text-xl); font-weight: var(--weight-semibold); margin: var(--space-lg) 0 var(--space-xs); color: var(--text-strong); }
   .troy-prose h3 { font-size: var(--text-lg); font-weight: var(--weight-semibold); margin: var(--space-md) 0 var(--space-xs); color: var(--text-strong); }
   .troy-prose p  { margin: 0 0 var(--space-md); }
   .troy-prose code { font-family: var(--font-mono); font-size: 0.9em; background: var(--surface-sunken); padding: 1px 4px; border-radius: var(--radius-xs); }
   .troy-prose pre { background: var(--surface-sunken); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: var(--space-md); overflow: auto; }
   .troy-prose pre code { background: transparent; padding: 0; }
   .troy-prose hr { border: none; border-top: 1px solid var(--border-subtle); margin: var(--space-xl) 0; }
   .troy-prose ul, .troy-prose ol { margin: 0 0 var(--space-md) var(--space-lg); }
   .troy-prose blockquote { border-left: 2px solid var(--border-strong); padding-left: var(--space-md); color: var(--text-dim); margin: var(--space-md) 0; }
   ```
2. **Manuscript** (정본 초고) → `--font-serif`, `--text-lg`, `--leading-relaxed`. Rendered as paragraphs (split on blank line). max-width 64ch. This is a literary text — let it breathe.

If react-markdown is not yet installed: keep `<pre>` for harness/brief but apply `.troy-prose pre` style. Manuscript still gets serif paragraph treatment (parse-and-render is one paragraph split — trivial).

---

### B.4 Workbench — `app/episode/[id]/workbench/page.tsx`

The most important page. Define a clear vertical rhythm:

```
Header (page title + phase badge)
─────
1. PipelineStrip                       (15-stage timeline)
─────
2. Audio panel (drop + saved list)
─────
3. Storyboard grid (16 cuts)
─────
4. Bulk intake
─────
5. Render panel                        (accent-bordered card)
```

Each numbered block is a Card with Card.Header. Vertical gap between cards: `--space-xl` (24px).

See §LAYOUT_NOTES for the ASCII sketch.

---

### B.5 PipelineStrip

**Path:** `components/PipelineStrip.tsx`. Refactor the inline-styled component.

#### Visual: chevron-flow chain
- 15 stages, horizontal scroll on overflow (preserve current behavior).
- Each stage is a "chip" with a left-edge accent that indicates state.
- Connector: 1px line between chips, dimmer in pending state.

```css
.troy-pipeline {
  display: flex; gap: 0;
  padding: var(--space-sm) 0;
  overflow-x: auto;
  scrollbar-width: thin;
}
.troy-pipeline::-webkit-scrollbar { height: 6px; }
.troy-pipeline::-webkit-scrollbar-thumb { background: var(--border-default); border-radius: 999px; }

.troy-pipeline__stage {
  position: relative; flex: 0 0 auto;
  min-width: 96px;
  padding: var(--space-sm) var(--space-md) var(--space-sm) calc(var(--space-md) + 4px);
  background: var(--surface-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  color: var(--text-dim);
  display: flex; flex-direction: column; gap: 2px;
}
.troy-pipeline__stage + .troy-pipeline__stage { margin-left: 4px; }
.troy-pipeline__stage::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 3px; border-radius: 999px;
  background: var(--status-pending);
}
.troy-pipeline__label {
  color: var(--text-strong);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-normal);
}
.troy-pipeline__hint {
  color: var(--text-dim);
  font-size: var(--text-2xs);
  font-feature-settings: var(--num-tabular);
}

.troy-pipeline__stage--done       { background: var(--status-ok-bg); }
.troy-pipeline__stage--done::before       { background: var(--status-ok); }
.troy-pipeline__stage--in-progress { background: var(--status-progress-bg); }
.troy-pipeline__stage--in-progress::before { background: var(--status-progress); }
.troy-pipeline__stage--pending::before { background: var(--status-pending); }
```

Label format change: split current label like `"Stills (3/16)"` into:
- `__label` = "Stills"
- `__hint`  = "3 / 16"

This puts the count in tabular numerals — no more visual jitter.

---

### B.6 StoryboardCard

**Path:** `components/StoryboardCard.tsx`.

#### New visual
```
┌──────────────────────────────────┐
│ E054 · cut 03      [ready]       │  ← header row
├──────────────────────────────────┤
│ ▮▮▮▮▮▮▮▮▮ STILL ▮▮▮▮▮▮▮▮▮       │
├──────────────────────────────────┤
│ ▮▮▮▮▮▮▮▮▮ CLIP  ▮▮▮▮▮▮▮▮▮       │
└──────────────────────────────────┘
```

Use `Card subtle` + new internal classes:
```css
.troy-cut {
  display: flex; flex-direction: column;
  background: var(--surface-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--duration-quick) var(--ease-standard);
}
.troy-cut:hover { border-color: var(--border-strong); }
.troy-cut--missing-both { border-style: dashed; }   /* both still+clip absent */

.troy-cut__head {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-sm) var(--space-md);
  border-bottom: 1px solid var(--border-subtle);
}
.troy-cut__id {
  font-size: var(--text-xs); font-weight: var(--weight-semibold);
  color: var(--text-strong);
  font-feature-settings: var(--num-tabular);
}
.troy-cut__slot {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--surface-sunken);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-faint);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
}
.troy-cut__slot + .troy-cut__slot { border-top: 1px solid var(--border-subtle); }
.troy-cut__slot--filled { color: transparent; }   /* hide placeholder text */
.troy-cut__slot img,
.troy-cut__slot video { width: 100%; height: 100%; object-fit: cover; display: block; }

.troy-cut__slot__placeholder {
  display: flex; flex-direction: column; gap: var(--space-xs);
  align-items: center;
}
.troy-cut__slot__icon {
  /* small 16x16 outlined icon — use simple inline SVG. */
  opacity: 0.4;
}
.troy-cut__slot__hint {
  font-size: var(--text-2xs);
  letter-spacing: var(--tracking-caps);
}
```

#### Header badges
- both filled → `Badge ok sm` "ready"
- still missing → `Badge pending sm` "still 대기"
- clip missing → `Badge pending sm` "clip 대기"
- both missing → no badges, dashed border instead.

**Stop using `gate-warn` for "still missing"** — missing is not a warning, it's pending.

---

### B.7 IntakeDropZone

Already specced above (§A.4 DropZone + filerow). React-side changes:
- The inline-styled drop area becomes `.troy-dropzone`.
- The result lists become `.troy-filerow`.
- Wire toasts for success/error (§A.5).
- Loading state: the entire dropzone gets `.troy-dropzone--busy` plus a top 3px `ProgressBar` overlay (indeterminate).

#### Drop animation
On `dragenter`: `.troy-dropzone--hover` toggles. CSS transition handles it (220ms). No JS animation library needed.

---

## C. Migration Plan (engineer)

1. Create `frontend/components/ui/` and add primitives in this order: Badge → Card → Button → Input/DropZone → ProgressBar → Toast → Tooltip.
2. Replace `gate-tag *` with Badge throughout, then delete `.gate-*` from globals.css.
3. Replace `.section` with Card. Delete `.section` from globals.css.
4. Refactor `app/page.tsx` cells to `.troy-cell` + 5 bars.
5. Refactor PipelineStrip + StoryboardCard inline styles.
6. Refactor IntakeDropZone inline styles.
7. Sidebar + nav active state (requires client component).
8. Episode detail markdown rendering (P1).

Verify: dark mode is unchanged in structure but visibly more refined; light mode renders with no contrast failures via Storybook or manual.

---

## D. Don't-do List

- ❌ No glassmorphism backdrop-filter blur. Performance + aesthetic mismatch.
- ❌ No purple gradient accents. Save it for someone else's product.
- ❌ No emoji in actual UI labels. Rendered text in headers, buttons, badges = words only.
- ❌ No drop shadow on cells (120 of them — would cost). Use border + bg only.
- ❌ No bouncy easing. We are not Stripe checkout.
- ❌ No `font-weight: 800/900`. Pretendard at 600 is enough.
- ❌ No CSS-in-JS (styled-components / emotion). Stay with global CSS + tokens.
- ❌ No animated background gradients on hover.
