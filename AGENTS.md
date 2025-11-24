uplivemepplatform – AI Agent Guide
===================================

Purpose
- Keep changes aligned with the existing design system, routing, and component patterns.
- Avoid regressions by reusing what exists before adding new abstractions.

Quick Checklist (run every time)
- Use only design tokens defined in `src/index.css` and surfaced via `tailwind.config.ts` (e.g., `bg-primary`, `text-foreground`, `bg-surfaceSecondary`). No inline hex/rgb/hsl colors.
- Favor composition and reuse: if you copy/paste similar UI or logic a third time, extract a component, hook, or utility instead.
- Wrap new pages in `PageLayout` and keep navigation/footer behavior consistent. Include `ScrollToTop` only once at the app shell (already in `App.tsx`).
- Maintain accessibility: keyboard paths, focus states, `aria-*`, and meaningful alt text.
- Before handing off work: `npm run lint` and `npm run build`.

Project Map
- Tooling: Vite + React 18 + TypeScript, Tailwind + shadcn-ui, React Router v6, @tanstack/react-query, Sonner/Radix toasts.
- Paths: `@/*` resolves to `src/*` (see `tsconfig.json`).
- Structure: `src/pages` (route screens), `src/components` (reusable UI), `src/hooks`, `src/constants`, `src/lib`, `src/assets` (fonts, media), `src/index.css` (tokens), `tailwind.config.ts` (theme wiring).

Design System Rules
- Colors: use the CSS variables declared in `src/index.css` (`--background`, `--foreground`, `--primary`, `--primary-deep`, `--primary-dimmer`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover`, `--surface-secondary`, and sidebar tokens). Access them through Tailwind classes (`bg-primary`, `text-foreground`, `border-border`, `bg-surfaceSecondary`, etc.). Do not introduce inline color values; add new tokens in `src/index.css` if truly needed.
- Typography: default to the Refinery95 family (already applied globally). Do not add new font faces without placing them in `src/assets/fonts` and updating `index.css`.
- Spacing & layout: prefer Tailwind utilities; use `container` settings from `tailwind.config.ts` for consistent gutters.
- Motion: reuse the predefined animations (`accordion-*`, `holo-shift`, `shimmer`, `marquee`) when possible; add new keyframes in `tailwind.config.ts` with a matching utility name.

Components & Reuse
- Shared shell: use `PageLayout` for pages so navigation/footer stay uniform.
- Navigation/footer: prefer editing `Navigation`/`Footer` components rather than duplicating nav/footer blocks on pages.
- UI atoms: prefer existing shadcn-ui components in `src/components/ui` before creating new bespoke elements.
- DRY guardrail: after two similar implementations, extract a reusable component/hook; colocate it in `src/components` or `src/hooks` with a clear name and prop interface.

Data, State, and Side Effects
- Async data: prefer `@tanstack/react-query`; keep queries keyed by resource and params, and co-locate fetchers in `src/lib` or `src/constants` when shared.
- Routing: declare routes in `src/App.tsx` using React Router; favor nested routes over ad-hoc conditionals inside pages.
- Toasts/alerts: use the provided `Toaster`/`Sonner` instances already mounted in `App.tsx`—just call the exposed helpers; avoid adding new global toaster hosts.
- Scrolling: `ScrollToTop` already lives in the router shell; don’t reintroduce page-level scroll resets.

Authoring Notes
- Styling: attach styles via Tailwind class names; add new component-level classes in `src/index.css` within the appropriate `@layer` block when utilities are insufficient.
- Accessibility: ensure focus outlines remain visible, label form controls, and keep motion optional when applicable.
- Files: name React components `PascalCase.tsx`; colocate companion styles/tests; export types from `src/types` when shared.

Quality Gates
- Commands: `npm run lint`, `npm run build` (add focused tests when you introduce logic-heavy hooks or utilities).
- Review self-check: no console warnings, responsive at common breakpoints (`sm`, `md`, `lg`, `xl`), zero inline colors, and no third-time duplications.

When in Doubt
- Prefer small, composable components over large monoliths.
- Extend the existing token system instead of bypassing it.
- Leave concise comments only where intent is non-obvious; keep code self-explanatory otherwise.
