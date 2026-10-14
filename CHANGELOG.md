# Changelog

Verso uses semantic versions. While it is in beta, a minor version adds or changes tokens, components or rules,
and a patch fixes them. Every version is a git tag (`v0.1.0`) and an entry in the design site's record.

## 0.1.0 (2026-10-14)

First beta.

- Tokens in light and dark mode, in `verso.css` (Tailwind CSS v4, shadcn/ui token names, plus `highlight`) and
  in the front matter of `DESIGN.md`: warm paper, warm ink, one red, hairlines, no shadows.
- Type utilities for the two families: `type-display` to `type-footnote` in Newsreader with old-style figures,
  `type-ui` to `type-overline` in Instrument Sans; the line-drawn controls `verso-switch`, `verso-radio`,
  `verso-checkbox` and `verso-slider`; `verso-rule` (thick-thin) and `verso-dropcap`.
- `DESIGN.md` with the rules, the measured contrast of both modes and 22 recipes, among them Article header,
  Drop cap, Pull quote, Footnote, Table of contents, Reading progress, Subscribe form and Tag.
- A component gallery in `preview/` with 22 live components and demo text from an invented weekly letter, a
  night-reading switch, category filters, copy on every panel and reset on the 11 that keep state.
- The Figma library "Verso Design System": 74 variables in four collections (Primitives, Color in Light and Dark, Size,
  Typography), 14 text styles bound to the font variables, 22 components with 67 variants, 10 Lucide icons, a
  cover drawn as a book spread, a foundations sheet, and a light and a dark gallery built from instances.
