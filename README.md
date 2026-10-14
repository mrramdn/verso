# Verso

A design system for reading: warm paper, warm ink and one red; serif text set at a book's measure; hairline rules instead of shadows. It is meant for long articles, newsletters, essays and documentation, and for the quiet interface around them (subscribe, settings, a reading list). The same tokens exist as a Tailwind CSS v4 theme, a `DESIGN.md` that people and coding agents follow, and a Figma library.

"Verso" is a working name. The verso is the left-hand page of an open book.

## Files

| File | What it is |
| --- | --- |
| `verso.css` | Tailwind CSS v4 theme: color tokens (light and dark), radii, type utilities for both families, and the line-drawn controls (`verso-switch`, `verso-radio`, `verso-checkbox`, `verso-slider`), the thick-thin rule and the drop cap. Token names follow shadcn/ui. |
| `DESIGN.md` | The rules and the component recipes, in the [design.md](https://github.com/google-labs-code/design.md) format. |
| `preview/index.html` | Component gallery built with the theme: 24 panels grouped under category headings, showing every component with its variants and states in neutral placeholder text, a night-reading switch, copy on every panel and reset on the ones that keep state. |
| `preview/demo.html` | An example screen built only from the recipes: the article page of an invented weekly of long reads, with a masthead, a reading bar, a table of contents, footnotes, a pull quote, a subscribe form and related cards. |
| `CHANGELOG.md` | What changed in each version. |

Figma: [Verso](https://www.figma.com/design/IiU2krIVXjmT2BZbesCTBv) (pages Cover, Foundations, Components and Example, where the article page is rebuilt from component instances in light and dark).

## Use it in a project

1. Load the two families: Newsreader (weights 300, 400 and 500, with the italic) and Instrument Sans (400 and 500), for example from Google Fonts, with `@fontsource-variable/newsreader` and `@fontsource-variable/instrument-sans`, or with `next/font`.
2. Copy `verso.css` next to your main stylesheet and import it after Tailwind:

   ```css
   @import "tailwindcss";
   @import "./verso.css";
   ```

3. Copy `DESIGN.md` to the project root so coding agents follow the same rules.
4. Dark mode (night reading) is the `.dark` class on `<html>`.

The theme removes the default Tailwind color palette on purpose. Use the semantic tokens (`bg-background`, `text-muted-foreground`, `bg-primary`, `border-border` and so on) and the `type-*` utilities, which set the family together with the size: `type-body` is Newsreader at 19px, `type-ui` is Instrument Sans at 15px.

## Preview

```sh
pnpm install
pnpm build   # writes preview/preview.css from the classes in preview/index.html and preview/demo.html
pnpm dev     # same, watching for changes
```

Then open `preview/index.html` (the component gallery) or `preview/demo.html` (the article page) in a browser. The article page is sized by its content; its reading bar follows the scroll of the page, or of the page around it when it is shown in a frame on the same site. Copy needs a secure context, so serve the folder (`python3 -m http.server -d preview`) if the clipboard button does nothing over `file://`.

`npx @google/design.md lint DESIGN.md` checks the token file.

## Versions

The version is in `package.json`, `CHANGELOG.md` says what changed, and every release is a git tag. To release:

1. Change the files and run `pnpm build`, so `preview/preview.css` matches the gallery.
2. Raise `version` in `package.json` and add an entry to `CHANGELOG.md`.
3. Commit, tag `v<version>` (`git tag -a v0.2.0 -m "Verso 0.2.0"`) and push with `git push --follow-tags`.
4. On the design site, sync this folder and add the version to Verso's record. The site's tests fail while the
   record states a different version from the synced files.

## Where the look comes from

The rules are the ordinary rules of book and magazine typography: a text face at 19px on a 30px line and a 60 to 70 character measure, headings in regular weight, a lighter display size, a standfirst, a drop cap on the first paragraph, footnotes, a table of contents with dotted leaders, hairlines and a thick-thin rule between parts. The one red follows the rubrication of manuscripts, where red ink marked the way through the text: here it marks links, the main action, selected states, the drop cap and the reading progress. The colors, the controls and the dark mode are original. The gallery uses neutral placeholder text. The article on the example page, its publication and its people are invented; the places, the craft and the 2009 UNESCO listing of Indonesian batik are real.
