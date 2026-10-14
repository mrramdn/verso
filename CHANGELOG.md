# Changelog

Verso uses semantic versions. While it is in beta, a minor version adds or changes tokens, components or rules,
and a patch fixes them. Every version is a git tag (`v0.1.0`) and an entry in the design site's record.

## 0.2.0 (2026-10-14)

The gallery becomes a blank component sheet, and an example screen shows the system in use.

- The gallery in `preview/index.html` shows every component with neutral placeholder text ("Kicker",
  "Headline set in the display style", "Save", "Email", "Option A", "Active", "Section one") instead of the
  invented weekly letter, and with its variants and states: 24 panels (22 before), Reset on the 9 that keep
  state, Copy on all of them. The first four, the catalog cover, are Article header, Drop cap, Button and Pull
  quote.
- An example screen, `preview/demo.html`: an article page of an invented weekly of long reads, built only from
  the recipes and layout utilities, with 15 kinds of components. `preview/input.css` scans it too.
- `DESIGN.md` has 24 recipes (22 before) with the gallery's neutral markup: new are Button sizes and Text field
  states, and the Button recipe gains a destructive variant (oxblood outline, filled on hover). Disabled options,
  switches and sliders dim their label; the Badge has a Draft status; the front matter has the tokens
  `button-destructive`, `button-small` and `text-field-error`. A sentence in Layout sets the paragraph indent of
  running text.
- Figma: neutral text in the components, the cover and both galleries; Button has 16 variants (a Destructive
  variant in both sizes and states), Badge has 4 (Draft); a new icon, `Icon/search`; a new page Example with the
  frames `Example/Light` and `Example/Dark` (1280 wide), the article page rebuilt from 31 instances of 13
  components.
- Fixes: `type-ui` and `type-small` in `verso.css` were 14px while DESIGN.md and Figma said 15px; they are now
  15px. The gallery no longer sets `min-h-screen`, so its height does not depend on the window.

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
