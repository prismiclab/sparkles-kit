# sparkles-kit

[![GitHub](https://img.shields.io/badge/github-prismiclab%2Fsparkles--kit-D97757?style=flat&logo=github)](https://github.com/prismiclab/sparkles-kit) · [Live demo](https://wyss.cx/sparkles/)

A small, dependency-free CSS kit for sparkles, holo edges, and rainbow UI.

Distilled from the look on [nicowyss.ch](https://nicowyss.ch) and [wyss.cx](https://wyss.cx) — drifting aurora blobs, rotating conic-gradient borders, twinkling sparkles, and pill buttons that bloom on hover. Drop one file into any project, use the classes, ship.

## Design lineage

This kit gives you the construction blocks for what designers call **"the Linear look"** — dark-first surfaces, hairline borders with animated specular highlights, subtle aurora-tinted color spills, glassmorphic floating tiles, and grid-on-dark backgrounds. The same vocabulary shows up across [linear.app](https://linear.app), [raycast.com](https://raycast.com), [vercel.com](https://vercel.com), [supabase.com](https://supabase.com), [railway.app](https://railway.app), and [resend.com](https://resend.com). Background reading: [Frontend Horse — The Linear Look](https://frontend.horse/articles/the-linear-look/), [Linear's redesign post](https://linear.app/now/how-we-redesigned-the-linear-ui), [Aurora UI on BramblingTech](https://bramblingtech.com/blog/aurora-ui-the-new-visual-trend-for-2022/), and [Bento UI on NateBal](https://natebal.com/bento-ui-design-modular-grid-ux/).

Sparkles-kit takes that vocabulary, dials the aurora a touch louder (because we like the rainbow), and ships the primitives as plain classes you can copy.

> **Status:** v0.1 — MIT — framework-agnostic CSS, optional Astro components.

---

## What's in the box

| Primitive | Class | What it does |
|---|---|---|
| Aurora background | `.sk-aurora-layer` + `.sk-blob-*` | Six drifting, blurred radial-gradient blobs in the aurora palette. Fixed to the viewport, behind everything. |
| Aurora veil | `.sk-aurora-veil` | Subtle vignette overlay that tames the blobs at the edges. |
| Sparkles | `.sk-sparkle-layer` + `.sk-sparkle-ambient` | Drifting, pulsing dots in six hues. Per-sparkle `--sk-*` vars control color, drift, pulse. |
| Aurora line | `.sk-aurora-line[data-text]` | Cream headline + slowly-rotating conic-gradient duplicate clipped to the text. |
| Holo card | `.sk-holo-card` (+ `.sk-holo-glow`) | Glass surface with a rotating 1px conic-gradient border. Optional outer bloom. |
| Holo panel | `.sk-holo-panel` | Lighter card variant — no border ring, just a soft conic bloom on hover. |
| Prism tile | `.sk-prism-tile` (+ `.sk-prism-sweep`, `.sk-prism-festival`) | Holographic-foil background — diagonal aurora stripe, caustic glints, conic edge. Festival flavor crosses a second stripe. |
| Putty blob | `.sk-putty-blob` (+ `.sk-putty-aurora`) | Morphing blob shape — animated border-radius, glossy highlight + shadow, glitter sub-layer. Emerald or aurora palette. |
| Antigravity tile | `.sk-antigrav-tile` (+ `.sk-antigrav-grid`) | Floating glassmorphic tile — backdrop-blur, animated specular hairline ring, aurora underglow, drifting particles, idle bob, hover-lift. Optional dotted-grid modifier. |
| Grid background | `.sk-grid-bg` (+ `.sk-grid-lined`) | Fixed dotted (default) or lined grid overlay. Sits between aurora veil and sparkles. Drop in once per layout. |
| Color spill | `.sk-color-spill` + `.sk-spill-{peach,rose,violet,indigo,mint,amber}` (+ `.sk-spill-drift`) | Tile-sized aurora accent blob. Different from `.sk-blob` (fullscreen) — use for *localized* accents behind hero text, beside cards. |
| Liquid tile | `.sk-liquid-tile` (+ `.sk-liquid-dark`) | Flowing iridescent foil — pastel radial blobs drift via animated `background-position`, glossy specular on top. Pinterest-aesthetic. Light substrate by default, dark variant uses kit aurora tokens. |
| Aurora text | `.sk-aurora-text` | Static aurora-gradient text utility. Background-clip:text. For stat numbers + hero accents. |
| Spotlight tile | `.sk-spotlight-tile` (+ `data-sk-spotlight`) | **Interactive.** Cursor-tracked radial highlight. Vercel/Linear pricing-card move. Needs JS. |
| Tilt tile | `.sk-tilt-tile` (+ `data-sk-tilt`, `data-sk-tilt-max`) | **Interactive.** 3D perspective tilt toward cursor. Stripe pricing-card flavor. Needs JS. |
| Stat tile | `.sk-stat-tile` + `.sk-stat-{label,value,trend,trend-up,trend-down}` | Big number + label + optional trend arrow. Composes `.sk-aurora-text` for the value. |
| Bento grid | `.sk-bento` + `.sk-bento-{2,3,4,2-2,feature}` (+ `.sk-bento-hero`) | Predefined grid recipes. Auto-collapse to 1 column on mobile. |
| Tabs | `.sk-tabs` + `.sk-tab` (+ `.is-active` / `[aria-selected]`) | Pill-style tabs. Active tab tints with the section accent. |
| Inputs | `.sk-input`, `.sk-textarea` | Text input + textarea with aurora focus rings. |
| Progress | `.sk-progress` + `.sk-progress-fill` (+ `.sk-progress-indeterminate`) | Aurora-filled progress bar. Determinate or sliding indeterminate. |
| Skeleton | `.sk-skeleton` | Loading placeholder with aurora shimmer wave. |
| Status dot | `.sk-status-dot` + `.sk-status-{online,busy,away,offline}` | Tiny colored pulse for presence indicators. |
| Tooltip | `.sk-tooltip` + `data-tooltip` | CSS-only hover tooltip, glassy frosted pill. |
| Modal scaffold | `.sk-modal-backdrop` + `.sk-modal` | Backdrop-blur overlay + sized container. Compose with `.sk-antigrav-tile` or `.sk-holo-card`. |
| Command palette | `.sk-cmdk` + `.sk-cmdk-{input,list,item,empty}` + `.sk-kbd` | **Interactive.** ⌘K modal with filter + keyboard nav. Needs JS. |
| Marquee | `.sk-marquee` + `.sk-marquee-track` | Smooth horizontal scroll with edge-fade mask. Hover pauses. |
| Divider | `.sk-divider` (+ `.sk-divider-aurora`) | Section divider — neutral hairline or aurora-tinted. |
| Noise overlay | `.sk-noise-overlay` | Subtle SVG-grain layer for cinematic finish. Mount once on body. |
| Reveal | `.sk-reveal` | Scroll-driven entrance — element fades + slides up as it enters the viewport via `animation-timeline: view()`. Zero JS, graceful fallback. |
| Stagger children | `.sk-stagger-children` (children get `--i` from nth-child up to 12) | Cascade reveal — each child enters slightly after the previous as the parent scrolls into view. |
| Custom cursor | `.sk-cursor` (mount once) | **Interactive.** Soft halo follows OS pointer with lag. Grows on hover over interactive elements. Hidden on touch. Needs JS. |
| Magnetic | `.sk-magnetic` + `data-sk-magnetic` (+ `data-sk-magnetic-strength`) | **Interactive.** Element pulls toward cursor on hover. Linear/Vercel CTA flavor. Needs JS. |
| Ripple | `.sk-ripple` + `data-sk-ripple` | **Interactive.** Material-style click wave from cursor position. Needs JS. |
| Flip card | `.sk-flip-card` + `.sk-flip-card-inner` + `.sk-flip-card-face` (`-front` / `-back`) (+ `.sk-flip-card-toggle` for click-state) | 3D card-flip on hover. Add `.sk-flip-card-toggle` + a hidden checkbox for click-to-toggle (CSS-only via `:has()`). Pure CSS. |
| Pill button | `.sk-pill` (+ `.sk-pill-ghost`, `.sk-pill-holo`) | Three pill-shaped button variants. The holo one wraps a rotating rainbow ring. |
| Slider | `.sk-slider` | Cross-browser styled `<input type="range">` with full-aurora track. |
| Toggle | `.sk-toggle` | Pill-style on/off switch. Track gradients to aurora when checked. |
| Avatar | `.sk-avatar` | Rotating aurora ring around a circular photo well. |

All animations honor `prefers-reduced-motion`.

---

## Install

### Option A — Vanilla HTML / any framework

Copy [`src/styles/sparkles-kit.css`](src/styles/sparkles-kit.css) into your project and link it:

```html
<link rel="stylesheet" href="/sparkles-kit.css" />
```

That's the whole install. No JS, no build step.

### Option B — Vite / Astro / Next / SvelteKit / etc.

Drop the file into your styles directory and import it once from your root layout / entry:

```js
import './sparkles-kit.css';
```

### Option C — Use the Astro components

If you happen to be on Astro, copy the [`src/components/`](src/components/) folder too. You then get drop-in `<HoloCard />`, `<PillButton />`, `<HoloSlider />`, `<HoloToggle />`, `<HoloPanel />`, `<Sparkles />`. The components are thin wrappers around the same classes — they don't add behavior.

---

## Usage

Once the CSS is loaded, drop the markup. None of these primitives require JavaScript.

### Aurora background + sparkles

Mount these once in your root layout. They're `position: fixed` and `pointer-events: none`, so they sit behind your content forever.

```html
<div class="sk-aurora-layer" aria-hidden="true">
  <div class="sk-blob sk-blob-peach"></div>
  <div class="sk-blob sk-blob-amber"></div>
  <div class="sk-blob sk-blob-mint"></div>
  <div class="sk-blob sk-blob-indigo"></div>
  <div class="sk-blob sk-blob-violet"></div>
  <div class="sk-blob sk-blob-rose"></div>
</div>
<div class="sk-aurora-veil" aria-hidden="true"></div>

<div class="sk-sparkle-layer" aria-hidden="true">
  <span
    class="sk-sparkle sk-sparkle-ambient"
    style="
      left: 12%; top: 33%; width: 2px; height: 2px;
      --sk-c: #C5759A;
      --sk-base-opacity: 0.6;
      --sk-drift-x: 30px; --sk-drift-y: -20px;
      --sk-drift-dur: 22s; --sk-pulse-dur: 4s;
    "
  ></span>
  <!-- repeat for each sparkle -->
</div>
```

For Astro users, the `<Sparkles count={32} />` component generates this list deterministically.

### Holo card

```html
<div class="sk-holo-card">
  <h3>Quiet by default</h3>
  <p>Edge gradient at 32% until you hover.</p>
</div>

<div class="sk-holo-card sk-holo-glow">
  <h3>With outer bloom</h3>
  <p>A blurred conic gradient bleeds outward behind it.</p>
</div>
```

### Prism tile

Holographic-foil flavor. Three variants — pick by how loud you want it.

```html
<div class="sk-prism-tile">…still ambient…</div>

<div class="sk-prism-tile sk-prism-sweep">…sweep on hover…</div>

<div class="sk-prism-tile sk-prism-festival">…festival energy…</div>
```

### Antigravity tile

Floating glassmorphic panel. Backdrop-blur frosted glass, animated specular hairline ring (low-opacity rotating conic gradient), aurora underglow welling up from below, particles drifting upward inside, idle ~3px bob, hover lifts to 8px and intensifies the underglow + edge highlight. Add `.sk-antigrav-grid` for a 24px dotted grid behind the particles.

```html
<div class="sk-antigrav-tile">
  <h3>Suspended.</h3>
  <p>Bottom-up aurora wash + drifting particles.</p>
</div>

<div class="sk-antigrav-tile sk-antigrav-grid">
  <h3>With dotted grid.</h3>
</div>
```

Astro: `<AntigravTile grid={true}>...</AntigravTile>`. Pairs naturally with bento layouts (`grid-template-columns: 2fr 1fr 1fr` etc.) — the look you see on linear.app and vercel.com.

### Grid background

Fixed dotted or lined grid overlay across the whole viewport. Mount once in your layout — same shape as `.sk-aurora-layer` and `.sk-sparkle-layer`. Sits at z:1, between the aurora veil (z:1, placed before in DOM) and sparkles (z:2).

```html
<div class="sk-grid-bg" aria-hidden="true"></div>

<!-- or 1px lines instead of dots -->
<div class="sk-grid-bg sk-grid-lined" aria-hidden="true"></div>
```

Astro: `<GridBg variant="dotted" />` or `<GridBg variant="lined" />`.

### Color spill

Tile-sized aurora accent blob — different from `.sk-blob` (which is fullscreen-sized for the ambient layer). Use these for *localized* accents behind hero text, beside cards, at section transitions. Six color modifiers; add `.sk-spill-drift` for slow movement.

```html
<div class="sk-color-spill sk-spill-violet"
     style="position: absolute; top: 80px; left: 40%;"></div>

<!-- or with slow drift animation -->
<div class="sk-color-spill sk-spill-mint sk-spill-drift"></div>
```

Astro: `<ColorSpill color="violet" size={320} drift={true} />`. Default size 320px; pass `size` (px) to override.

### Putty blob

Morphing glitter blob. Inspired by emerald "smart putty". Two flavors:

```html
<div class="sk-putty-blob"></div>
<div class="sk-putty-blob sk-putty-aurora"></div>
```

You can resize via inline `style="width: 320px"` — the aspect-ratio is locked to 1:1 so height follows.


### Pill button

```html
<button class="sk-pill">primary</button>
<button class="sk-pill sk-pill-ghost">ghost</button>
<button class="sk-pill sk-pill-holo">holo on hover</button>
```

### Slider + toggle

```html
<input type="range" class="sk-slider" min="0" max="100" value="62" />

<label class="sk-toggle">
  <input type="checkbox" />
  <span class="sk-toggle-track"><span class="sk-toggle-thumb"></span></span>
</label>
```

### Aurora-line headline

The conic-gradient duplicate is generated from `data-text`, so pass the same string twice:

```html
<h1 class="sk-aurora-line" data-text="hello, holo.">
  hello, holo.
</h1>
```

### Avatar

```html
<div class="sk-avatar">
  <div class="sk-avatar-ring"></div>
  <div class="sk-avatar-photo">
    <img src="/me.jpg" alt="" />
    <!-- or just initials, e.g. "nw", as a fallback -->
  </div>
</div>
```

---

## Customizing

Every visual lives behind a `--sk-*` custom property. Override any of these on `:root` (or on an ancestor of the components you want to retheme) to recolor the entire kit.

```css
:root {
  /* aurora palette */
  --sk-peach:  #D97757;
  --sk-rose:   #C5759A;
  --sk-violet: #8E7FB8;
  --sk-indigo: #6B8DC9;
  --sk-mint:   #7FB69E;
  --sk-amber:  #D9B377;

  /* per-blob opacity multipliers (0..1) */
  --sk-mul-peach:  0.45;
  --sk-mul-indigo: 0.30;
  /* ... */

  /* surfaces + text */
  --sk-bg-base:        #0A0A0A;
  --sk-bg-elevated:    #141413;
  --sk-text-primary:   #F5F1EB;
  --sk-text-secondary: #8B8884;
  --sk-text-muted:     #5A5754;
  --sk-border-subtle:  rgba(245, 241, 235, 0.06);

  /* the active section accent — used by hover states (RGB triplet) */
  --sk-section-rgb: 217, 119, 87;
}
```

You can also drive `--sk-section-rgb` from JS as the user scrolls past sections, for the trick where pill buttons / hover borders color-shift between sections.

---

## How it works (in 60 seconds)

The kit leans on three modern CSS features and nothing else:

1. **`@property --angle <angle>`** — a registered custom property that the browser knows how to interpolate. We animate it with a `to { --angle: 360deg; }` keyframe, and any `conic-gradient(from var(--angle), …)` painted on a border / text / glow rotates smoothly, GPU-accelerated, no JS.
2. **`mask-composite: exclude`** — lets us paint a 1px conic-gradient ring on a card's `::before` while keeping the card's interior transparent. That's the holo border.
3. **`background-clip: text`** — the aurora-line headline. The body text renders cream-white; an absolutely-positioned `::after` paints a low-opacity conic gradient and clips it to the text outline. Reads like a shimmer, not a rainbow.

The sparkles, blobs, and toggle thumbs are plain transforms, opacity, and box-shadows. No tricks.

---

## Browser support

- ✅ Recent Chrome, Edge, Safari, Firefox (anything that supports `@property` — Firefox 128+, March 2024).
- ⚠️ The aurora ring on the avatar uses `-webkit-mask-composite`, which Firefox supports via standard `mask-composite: exclude`. The CSS in this kit ships both. Tested against Safari 17, Chrome 120, Firefox 128.
- 🚫 IE11: not supported. Anything pre-2024-Firefox: gradients won't rotate, but you'll still see static borders and the kit will look fine.

---

## Project layout

```
sparkles-kit/
├── src/
│   ├── styles/
│   │   ├── sparkles-kit.css   ← THE library. Copy this.
│   │   └── site.css           ← Showcase-only styles, ignore.
│   ├── components/            ← Optional Astro wrappers.
│   │   ├── Sparkles.astro
│   │   ├── HoloCard.astro
│   │   ├── HoloPanel.astro
│   │   ├── PillButton.astro
│   │   ├── HoloSlider.astro
│   │   ├── HoloToggle.astro
│   │   └── CodeBlock.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro        ← The showcase page.
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
└── README.md
```

If you only want the kit, the only file you need is [`src/styles/sparkles-kit.css`](src/styles/sparkles-kit.css). Everything else is the showcase site that hosts the docs.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/sparkles/
npm run build    # static output → dist/
```

The site is configured with `base: '/sparkles'` so it can be deployed as a subpath of [wyss.cx](https://wyss.cx).

---

## License

MIT — copy, fork, retheme. A "Made with sparkles-kit" link back is appreciated but not required.

---

## Credits

- Design language distilled from `nicowyss.ch` and `wyss.cx`.
- Conic-gradient `@property` rotation pattern: a riff on Adam Argyle's [open-props](https://open-props.style/) gradient experiments.
- Built by [Nico Wyss](https://nicowyss.ch) with Claude Code, espresso, and a handful of sparkles.
