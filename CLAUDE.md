---
name: sparkles-kit
classification: personal
status: active
i18n: en
---

# sparkles-kit

A small, framework-agnostic CSS kit for sparkles, rotating holo edges, rainbow pill buttons, and aurora-tinted UI. Distilled from the nicowyss.ch / wyss.cx design language so the look is portable. v0.1, MIT.

## Stack

- Astro (static, `output: 'static'`) — only as the showcase host
- Tailwind 4 — only for the showcase site, NOT a dependency of the kit itself
- The kit itself is one plain CSS file (`src/styles/sparkles-kit.css`) — no JS, no preprocessor

## Where things live

| Path | Purpose |
|------|---------|
| `src/styles/sparkles-kit.css` | **THE library.** This is what users copy. |
| `src/styles/site.css` | Showcase-only styles. Imports the kit + Tailwind. |
| `src/components/` | Optional Astro wrappers around the classes |
| `src/pages/index.astro` | Showcase page with live demos + copy snippets |
| `src/layouts/BaseLayout.astro` | Shared `<head>` + mounts aurora layer + sparkles |
| `README.md` | The user-facing docs. Treat as the canonical README. |

## Status

Initial scaffold (2026-05-04). v0.1 components built: aurora background, sparkles, holo card, holo panel, pill buttons (3 variants), slider, toggle, aurora-line headline, avatar. Showcase page lives. Not yet on GitHub — user wants it on a "new GitHub account" but hasn't named which one.

## Active blockers

- GitHub account / org for `gh repo create` not chosen yet
- No deploy target wired (intended to live as `wyss.cx/sparkles/`, but the wyss-cx project doesn't yet route a sub-path here)

## Open work

See `TODO.md`.

## Design intent

The user finds joy in sparkles and rainbow holo effects. This kit is the deliberate distillation of that delight into reusable primitives — explicitly so it can be copied and reskinned by anyone. Every visual is behind a `--sk-*` custom property. Don't add JS unless absolutely necessary; the rotating gradients all use `@property` registered angles so the browser owns the animation.

## Brain integration

Cross-project pattern (the kit itself, conic + `@property` recipe) belongs as an atom under `~/projects/_brain/atoms/` once it has settled. Sibling sites that consume it: `nicowyss-ch` (already uses v2.css internally; could later import sparkles-kit), `wyss-cx` (intended host).
