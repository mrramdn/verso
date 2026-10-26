---
version: alpha
name: Verso
description: A design system for reading. Warm paper, warm ink and one red; serif text at a book's measure; hairline rules instead of shadows.
colors:
  primary: "#B5321C"
  primary-hover: "#962814"
  primary-foreground: "#FBF7F0"
  background: "#F4EEE1"
  foreground: "#201B18"
  card: "#FBF7F0"
  card-foreground: "#201B18"
  popover: "#FBF7F0"
  popover-foreground: "#201B18"
  secondary: "#EAE2D3"
  secondary-foreground: "#201B18"
  muted: "#EAE2D3"
  muted-foreground: "#625951"
  accent: "#EAE2D3"
  accent-foreground: "#201B18"
  destructive: "#8B2015"
  destructive-foreground: "#FBF7F0"
  success: "#4D7345"
  warning: "#A0700E"
  border: "#DED4C3"
  input: "#8A7F73"
  ring: "#B5321C"
  highlight: "#F0D8CD"
typography:
  display:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: 300
    lineHeight: 68px
    letterSpacing: -0.02em
  h1:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: 400
    lineHeight: 50px
    letterSpacing: -0.015em
  h2:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.01em
  h3:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.005em
  title:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
  standfirst:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: 400
    lineHeight: 32px
  body:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: 400
    lineHeight: 30px
  footnote:
    fontFamily: Newsreader
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  button:
    fontFamily: Instrument Sans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
  ui:
    fontFamily: Instrument Sans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
  small:
    fontFamily: Instrument Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: Instrument Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.01em
  overline:
    fontFamily: Instrument Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 2px
  md: 4px
  lg: 6px
spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "5": 20px
  "6": 24px
  "7": 28px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 20px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    borderColor: "{colors.input}"
    textColor: "{colors.foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 20px
  button-ghost:
    textColor: "{colors.foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 20px
  button-ghost-hover:
    backgroundColor: "{colors.accent}"
  button-destructive:
    borderColor: "{colors.destructive}"
    textColor: "{colors.destructive}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 20px
  button-destructive-hover:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
  button-small:
    height: 32px
    padding: 0 14px
  icon-button:
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.sm}"
    size: 40px
  icon-button-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
  chip:
    borderColor: "{colors.border}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: 32px
    padding: 0 12px
  chip-selected:
    borderColor: "{colors.primary}"
    textColor: "{colors.primary}"
  tag:
    borderColor: "{colors.border}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.overline}"
    rounded: "{rounded.sm}"
    height: 24px
    padding: 0 8px
  toggle:
    borderColor: "{colors.input}"
    rounded: 9999px
    width: 40px
    height: 22px
  toggle-checked:
    backgroundColor: "{colors.primary}"
    borderColor: "{colors.primary}"
  text-field:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.input}"
    textColor: "{colors.foreground}"
    typography: "{typography.small}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0 14px
  text-field-error:
    borderColor: "{colors.destructive}"
  tab-selected:
    borderColor: "{colors.primary}"
    textColor: "{colors.foreground}"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    height: 24px
    padding: 0 8px
  card:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.border}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Verso

## Overview

Verso is by Rifki Ramdani (https://uiux.mrramdn.com/en/systems/verso). This file is licensed under CC BY 4.0: copy and adapt it, with credit. The CSS and HTML are MIT.

Verso is a design system for reading: long articles, newsletters, essays, documentation, and the quiet product interface around them (subscribe, settings, comments, a reading list). Its rules come from book and magazine typography. The verso is the left-hand page of an open book.

The page is warm paper, the text is warm ink, and one red does the work that red ink did in manuscripts: it marks the way through the text. Links, the one primary action, selected states, the drop cap and the reading progress are red; nothing else is. Structure comes from type, whitespace and hairline rules, never from shadows or tinted boxes. Text is set in Newsreader at a book's measure; the interface around it is set in Instrument Sans, smaller and quieter.

The same tokens exist in three places and must stay in sync:

- `verso.css` for Tailwind CSS v4. Token names follow shadcn/ui.
- This file, for people and coding agents.
- The Figma library "Verso" (variables, text styles, components).

When building with Verso, use the semantic tokens and the recipes under Components. If a screen needs something this file does not cover, build it from the same parts: paper, ink, a hairline, 15px interface text in Instrument Sans or 19px text in Newsreader, a 2px or 4px corner, and at most one red element asking for attention.

## Colors

Use semantic tokens only. The default Tailwind palette is removed in `verso.css`, so `bg-red-500` and similar classes produce nothing.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | `#F4EEE1` | `#1B1816` | The page: warm paper, warm charcoal at night |
| `foreground` | `#201B18` | `#EAE2D3` | Text and icons: warm ink, paper at night |
| `card` | `#FBF7F0` | `#24201D` | Cards and form controls: the paper one shade lighter |
| `card-foreground` | `#201B18` | `#EAE2D3` | Text on a card |
| `popover` | `#FBF7F0` | `#24201D` | Menus, popovers, dialogs |
| `popover-foreground` | `#201B18` | `#EAE2D3` | Text on a popover |
| `primary` | `#B5321C` | `#E0674E` | The red ink: links, the primary button, selected states, the drop cap, progress |
| `primary-hover` | `#962814` | `#E97B63` | Hover fill of the primary button |
| `primary-foreground` | `#FBF7F0` | `#1B1816` | Text on primary |
| `secondary` | `#EAE2D3` | `#2E2925` | Badges and quiet tinted surfaces |
| `secondary-foreground` | `#201B18` | `#EAE2D3` | Text on secondary |
| `muted` | `#EAE2D3` | `#2E2925` | Subtle surface behind grouped content |
| `muted-foreground` | `#625951` | `#A79D90` | Secondary text: bylines, hints, captions, resting icons |
| `accent` | `#EAE2D3` | `#2E2925` | Hover surface of ghost and icon buttons |
| `accent-foreground` | `#201B18` | `#EAE2D3` | Text on accent |
| `destructive` | `#8B2015` | `#D06655` | Errors and destructive actions: the deeper oxblood |
| `destructive-foreground` | `#FBF7F0` | `#1B1816` | Text on destructive |
| `success` | `#4D7345` | `#8FAE7E` | Success dot |
| `warning` | `#A0700E` | `#D4A64A` | Warning dot |
| `border` | `#DED4C3` | `#3A3430` | Hairline rules, dividers, card outlines, quiet tracks |
| `input` | `#8A7F73` | `#7A7167` | Outline of form controls, the off state of switch and slider |
| `ring` | `#B5321C` | `#E0674E` | Focus ring |
| `highlight` | `#F0D8CD` | `#4A2E27` | Text selection and marked text |

`card-foreground`, `popover-foreground`, `secondary-foreground` and `accent-foreground` equal `foreground`. In dark mode the text is paper-colored, not white, and the red is lighter so that it still reads on charcoal. Dark mode is the `.dark` class on a parent element. The .dark block also sets color-scheme: dark, so native controls and scrollbars follow the theme.

Rules:

- One red. `primary` is for the things that guide a reader: links, the single main action of a view, selected and on states, the drop cap, the reading progress line. Do not use it for headings, decoration or large surfaces.
- `destructive` is the deeper oxblood. It appears only next to a word (an error message, a destructive button label), never as color alone.
- `accent` is the hover surface, as in shadcn/ui. It is not a brand accent.
- `success` and `warning` are dots and small marks. Status is written in `foreground` next to the dot.
- `border` is for rules that only show; `input` is for outlines you can act on (fields, radios, the off switch, the slider track), because an actionable outline has to reach 3:1.

Measured contrast (WCAG 2.2, sRGB):

| Pair | Light | Dark |
| --- | --- | --- |
| Text on the page (`foreground` on `background`) | 14.8:1 | 13.7:1 |
| Text on a card (`foreground` on `card`) | 16.0:1 | 12.6:1 |
| Text on secondary (`foreground` on `secondary`) | 13.3:1 | 11.2:1 |
| Secondary text on the page (`muted-foreground` on `background`) | 5.9:1 | 6.6:1 |
| Secondary text on a card (`muted-foreground` on `card`) | 6.4:1 | 6.1:1 |
| Secondary text on secondary (`muted-foreground` on `secondary`) | 5.3:1 | 5.4:1 |
| Red ink on the page (`primary` on `background`) | 5.3:1 | 5.2:1 |
| Red ink on a card (`primary` on `card`) | 5.7:1 | 4.8:1 |
| Button text (`primary-foreground` on `primary`) | 5.7:1 | 5.2:1 |
| Button text on hover (`primary-foreground` on `primary-hover`) | 7.5:1 | 6.3:1 |
| Error text on the page (`destructive` on `background`) | 7.8:1 | 4.8:1 |
| Text on destructive (`destructive-foreground` on `destructive`) | 8.5:1 | 4.8:1 |
| Control outline on a card (`input` on `card`, needs 3:1) | 3.7:1 | 3.4:1 |
| Control outline on the page (`input` on `background`, needs 3:1) | 3.4:1 | 3.7:1 |
| Focus ring on the page (`ring` on `background`, needs 3:1) | 5.3:1 | 5.2:1 |
| Success dot on the page (`success` on `background`, needs 3:1) | 4.7:1 | 7.2:1 |
| Warning dot on the page (`warning` on `background`, needs 3:1) | 3.8:1 | 7.9:1 |
| Selected text (`foreground` on `highlight`) | 12.5:1 | 9.5:1 |

Body text is AAA in both modes. Every text pair is AA or better, and every outline, ring and dot reaches 3:1. The one pair to watch is the red on a dark card (4.8:1): it passes AA for text but not AAA, so do not set long passages in `primary`. `border` is decorative and is not meant to reach 3:1.

## Typography

Two families, loaded by the app (Google Fonts, `@fontsource-variable/newsreader` and `@fontsource-variable/instrument-sans`, or `next/font`):

- Newsreader for everything a reader reads: display, headings, standfirst, body, footnotes. It is a variable font with an optical-size axis; `verso.css` sets `font-optical-sizing: auto`, so the display sizes get the display cut and the body gets the text cut. Weights 300 (display), 400 and 500, plus the italic.
- Instrument Sans for everything a reader operates: buttons, tabs, chips, labels, hints, captions, field text. Weights 400 and 500.

| Utility | Size / line | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| `type-display` | 64 / 68 | 300 | -0.02em | A magazine opener or a cover; one per page at most |
| `type-h1` | 44 / 50 | 400 | -0.015em | The headline of an article |
| `type-h2` | 32 / 40 | 400 | -0.01em | Section title |
| `type-h3` | 24 / 32 | 500 | -0.005em | Subsection, card title |
| `type-title` | 20 / 28 | 500 | 0 | List rows, dialog titles, the reading bar |
| `type-standfirst` | 22 / 32 | 400 | 0 | The one or two sentences under a headline |
| `type-body` | 19 / 30 | 400 | 0 | Running text, option text that is meant to be read |
| `type-footnote` | 15 / 22 | 400 | 0 | Footnotes, margin notes, captions in the text face |
| `type-ui` | 15 / 20 | 500 | 0 | Buttons, tabs, chips, field labels, legends |
| `type-small` | 15 / 20 | 400 | 0 | Option labels, hints, bylines, metadata |
| `type-caption` | 12 / 16 | 500 | 0.01em | Badges |
| `type-overline` | 12 / 16 | 500 | 0.1em | Section labels in letterspaced capitals: kicker, card eyebrow, tag |

Buttons use `type-ui` (15 / 20, weight 500). `type-display` to `type-footnote` are Newsreader with old-style, proportional figures; `type-ui` to `type-overline` are Instrument Sans with lining figures.

Rules:

- Use the `type-*` utilities instead of composing family, size, weight and tracking by hand. They are not named `text-*` so that `tailwind-merge` does not confuse them with text colors.
- Body text sits on a measure of 60 to 70 characters: `max-w-prose` (65ch) at 19px. Never run text the full width of a wide screen.
- Headings are regular or medium, never bold. The display size is light.
- Use real typographic characters: curly quotes (“ ”), the en dash in ranges (1973–2026) and for asides, the ellipsis character (…), and the multiplication sign (×) in dimensions.
- Sentence case everywhere, including buttons. The only capitals are `type-overline`, which the utility sets itself.
- Text inputs stay at 16px so mobile browsers do not zoom on focus.

## Layout

- Spacing uses the Tailwind 4px unit. Common steps: 8 and 12 (inside a control), 16 (between stacked options), 24 and 28 (inside a panel), 48 to 96 (between sections and as page margins). Margins are generous on purpose; the whitespace is part of the system.
- The page is `bg-background`. Reading content sits directly on the paper in one column with a `max-w-prose` measure, centered or on the left with a wide margin for notes. Cards are for lists of things (a reading list, an archive), not for the text itself.
- Panels in a grid are separated by hairlines, not gaps: the container has `border-t border-l border-border`, every cell has `border-r border-b border-border`. Nothing floats.
- A thick-thin rule (`<hr class="verso-rule">`) separates a masthead from the page, or one part of an issue from the next. Use it once or twice a page, never as a divider between list rows.
- In running text, paragraphs follow each other without space; every paragraph after the first in a section is indented 1.5em (`indent-[1.5em]`), as in a book. The paragraph after a heading or a pull quote is not indented.
- Metadata (byline, date, reading time) sits in one line of `type-small text-muted-foreground`, parts separated by a middle dot ( · ), under a hairline.
- Inside a panel, the header holds an overline name on the left and quiet icon buttons on the right; the content below is left-aligned.

## Elevation & Depth

The system is flat. There are no shadows and no shadow tokens.

- Depth comes from three things: the step between the paper and the lighter card, 1px hairlines in `border`, and whitespace.
- Floating surfaces (menus, popovers, dialogs) are `bg-popover` with a 1px `border`, a 4px radius and more padding than the page around them. They may dim the page behind them with `bg-foreground/20`.
- The selected tab, the reading progress and the slider fill are 2px lines in `primary`; the thick-thin rule is 2px over 1px in `foreground`. These are the only lines heavier than a hairline.

## Shapes

Near-square.

- Controls (buttons, chips, text fields, tags, badges, checkboxes) are `rounded-sm` (2px).
- Panels, menus, popovers and dialogs are `rounded-md` (4px).
- Cards are `rounded-lg` (6px).
- Nothing is rounder than 6px except the switch track, the radio, the dots and the spinner, which are circles because that is what they are.

`--radius` is `0.25rem`, and `verso.css` caps every Tailwind radius step at 6px, so shadcn/ui components that use `rounded-md`, `rounded-lg` or `rounded-xl` come out near-square without changes.

Icons are Lucide at 16px (`size-4`) in compact buttons and lists, 20px (`size-5`) in a 40px icon button, drawn with `stroke-width="1.5"` so they match the hairlines. Icon-only buttons need an `aria-label`.

## Components

Copy these recipes. The live versions are in `preview/index.html`, each with its variants and states and neutral placeholder text; every class is a token of `verso.css` or a Tailwind utility. `preview/demo.html` is an example screen, an article page of a long-form publication, built only from these recipes and layout utilities.

### Article header

The opening of an article: a red kicker (section or series), the headline, the dek (standfirst), then the byline under a hairline. Keep it inside the `max-w-prose` measure, or across the text and its margin.

```html
<header class="w-full"><p class="type-overline text-primary">Kicker</p><h1 class="mt-3 type-h1">Headline set in the display style</h1><p class="mt-4 type-standfirst text-muted-foreground">A dek explains the story in one or two sentences.</p><p class="mt-6 border-t border-border pt-4 type-small text-muted-foreground">By <span class="text-foreground">Author name</span> · 14 Oct 2026 · <span class="whitespace-nowrap">6 min read</span></p></header>
```

- The kicker is the only red text in the header. The headline is ink, regular weight.
- The reading time comes from the word count at 230 words a minute, rounded up.

### Drop cap

The first paragraph of a piece. `verso-dropcap` sets the first letter in red, three lines deep, through `::first-letter`; the paragraph is ordinary `type-body`.

```html
<p class="w-full type-body verso-dropcap">A drop cap opens the first paragraph of a piece. Its first letter is set three lines deep in the red ink, and the rest of the paragraph runs around it in the body style.</p>
```

One drop cap per article, on the first paragraph only. Do not open a paragraph that starts with a quotation mark or a number with a drop cap.

### Button

44px tall, 2px corners, `type-ui`. Four variants: primary (filled red), secondary (outlined), ghost (text only) and destructive (outlined in the deeper oxblood, filled on hover). One primary button per view.

```html
<div class="flex flex-wrap gap-3"><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 bg-primary text-primary-foreground hover:bg-primary-hover">Save</button><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 border border-input text-foreground hover:bg-accent">Continue</button><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 text-foreground hover:bg-accent">Cancel</button><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">Delete</button></div>
```

- The shared base is `inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40`; the variant adds its colors.
- Primary: `bg-primary text-primary-foreground hover:bg-primary-hover`. Secondary: `border border-input text-foreground hover:bg-accent`. Ghost: `text-foreground hover:bg-accent`. Destructive: `border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground`.
- Labels are sentence case verbs: Save, Continue, Cancel, Delete.

### Button sizes

Two sizes and the disabled state. Default is 44px (`h-11 px-5`); small is 32px (`h-8 px-3.5`), for toolbars, panel headers and dense rows. Disabled buttons drop to 40% opacity and ignore the pointer.

```html
<div class="flex flex-col items-start gap-4"><div class="flex flex-wrap items-center gap-3"><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 bg-primary text-primary-foreground hover:bg-primary-hover">Save</button><button type="button" class="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-sm px-3.5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 bg-primary text-primary-foreground hover:bg-primary-hover">Save</button></div><div class="flex flex-wrap items-center gap-3"><button type="button" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 border border-input text-foreground hover:bg-accent">Continue</button><button type="button" class="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-sm px-3.5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 border border-input text-foreground hover:bg-accent">Continue</button></div><div class="flex flex-wrap items-center gap-3"><button type="button" disabled class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 bg-primary text-primary-foreground hover:bg-primary-hover">Save</button><button type="button" disabled class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 border border-input text-foreground hover:bg-accent">Continue</button></div></div>
```

### Icon button

A 40px square hit area around a 20px Lucide icon at stroke 1.5; compact is 32px (`size-8`) with a 16px icon, for panel headers and table rows.

```html
<div class="flex flex-col items-start gap-3"><div class="flex gap-1"><button type="button" aria-label="Save" class="inline-flex size-10 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 20px Lucide icon --></button><button type="button" aria-label="Share" class="inline-flex size-10 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 20px Lucide icon --></button><button type="button" aria-label="More" class="inline-flex size-10 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 20px Lucide icon --></button></div><div class="flex gap-1"><button type="button" aria-label="Save" class="inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 16px Lucide icon --></button><button type="button" aria-label="Share" class="inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 16px Lucide icon --></button><button type="button" aria-label="More" disabled class="inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><!-- 16px Lucide icon --></button></div></div>
```

Every icon button has an `aria-label`. Disabled: the `disabled` attribute, at 40% opacity.

### Chip

A filter in a hairline box. Pressed, the outline and the text turn red. In a filter group any number may be pressed; in a tab-like group exactly one.

```html
<div role="group" aria-label="Options" class="flex flex-wrap gap-2"><button type="button" aria-pressed="true" class="inline-flex h-8 shrink-0 items-center rounded-sm border border-border px-3 type-ui text-muted-foreground transition-colors hover:border-input hover:text-foreground aria-pressed:border-primary aria-pressed:text-primary">Option A</button><button type="button" aria-pressed="false" class="inline-flex h-8 shrink-0 items-center rounded-sm border border-border px-3 type-ui text-muted-foreground transition-colors hover:border-input hover:text-foreground aria-pressed:border-primary aria-pressed:text-primary">Option B</button><button type="button" aria-pressed="false" class="inline-flex h-8 shrink-0 items-center rounded-sm border border-border px-3 type-ui text-muted-foreground transition-colors hover:border-input hover:text-foreground aria-pressed:border-primary aria-pressed:text-primary">Option C</button></div>
```

### Toggle

A 40 by 22px switch drawn with a hairline (`verso-switch`): off is an outlined track with a gray dot, on is a red track with a paper dot. Flip `aria-checked` on click. Wrap it in a `label` with the text so that the text is the accessible name and a click on it toggles the switch.

```html
<div class="w-full divide-y divide-border"><label class="flex items-center justify-between gap-6 py-3 has-[:disabled]:text-muted-foreground"><span class="type-body">Notifications</span><button type="button" role="switch" aria-checked="true" class="verso-switch"></button></label><label class="flex items-center justify-between gap-6 py-3 has-[:disabled]:text-muted-foreground"><span class="type-body">Email updates</span><button type="button" role="switch" aria-checked="false" class="verso-switch"></button></label><label class="flex items-center justify-between gap-6 py-3 has-[:disabled]:text-muted-foreground"><span class="type-body">Autoplay</span><button type="button" role="switch" aria-checked="false" disabled class="verso-switch"></button></label></div>
```

Stack settings with `divide-y divide-border`. A disabled switch is at 40% opacity and its label turns `muted-foreground` through `has-[:disabled]`.

### Slider

A native range input drawn as a 2px line (`verso-slider`): red up to the value, `input` beyond it, with a hairline-ringed thumb. Chrome and Safari need `--slider-fill` to paint the filled part, so update it on every `input` event; the `output` shows the value. Disabled, the slider is at 40% opacity and its label is `muted-foreground`.

```html
<div class="w-full space-y-5"><div><div class="flex items-baseline justify-between gap-4"><span class="type-ui">Text size</span><output data-output class="type-small text-muted-foreground tabular-nums">19 px</output></div><input type="range" min="16" max="24" value="19" aria-label="Text size" class="mt-2 verso-slider" /></div><div class="text-muted-foreground"><div class="flex items-baseline justify-between gap-4"><span class="type-ui">Line height</span><output data-output class="type-small tabular-nums">30 px</output></div><input type="range" min="24" max="36" value="30" disabled aria-label="Line height" class="mt-2 verso-slider" /></div></div>
```

```js
el.style.setProperty('--slider-fill', `${((el.value - el.min) / (el.max - el.min)) * 100}%`);
```

### Single selection (radio)

Native radios in a `fieldset` with a `legend` in `type-ui`. `verso-radio` is an 18px circle with a hairline; checked, the ring and an 8px dot turn red. A disabled option is at 40% opacity with its text in `muted-foreground`.

```html
<fieldset class="w-full"><legend class="type-ui">Label</legend><div class="mt-3 space-y-3"><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="radio" name="option" value="a" checked class="verso-radio" />Option A</label><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="radio" name="option" value="b" class="verso-radio" />Option B</label><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="radio" name="option" value="c" disabled class="verso-radio" />Option C</label></div></fieldset>
```

### Checkbox

`verso-checkbox` is an 18px square with 2px corners and a hairline; checked, it fills red with a paper check mark.

```html
<fieldset class="w-full"><legend class="type-ui">Label</legend><div class="mt-3 space-y-3"><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="checkbox" checked class="verso-checkbox" />Option A</label><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="checkbox" class="verso-checkbox" />Option B</label><label class="flex items-center gap-3 type-small has-[:disabled]:text-muted-foreground"><input type="checkbox" disabled class="verso-checkbox" />Option C</label></div></fieldset>
```

Group options under a `legend` as the radios do, with `space-y-3`.

### Text field

44px, 2px corners, a hairline in `input` on the lighter card color. The label sits above in `type-ui`, the hint below in `type-small`. Field text is Instrument Sans at 16px.

```html
<label class="block w-full"><span class="type-ui">Email</span><input type="email" placeholder="name@example.com" class="mt-2 h-11 w-full rounded-sm border border-input bg-card px-3.5 font-sans text-base text-foreground placeholder:text-muted-foreground disabled:opacity-40" /><span class="mt-2 block type-small text-muted-foreground">Supporting text that explains the field.</span></label>
```

### Text field states

Error and disabled. For an error, add `aria-invalid="true"`, swap `border-input` for `border-destructive`, and replace the hint with a sentence in `text-destructive` that says how to fix the value, tied to the field with `aria-describedby`. Disabled fields are at 40% opacity.

```html
<div class="w-full space-y-5"><label class="block"><span class="type-ui">Email</span><input type="email" value="name@example" aria-invalid="true" aria-describedby="email-error" class="mt-2 h-11 w-full rounded-sm border border-destructive bg-card px-3.5 font-sans text-base text-foreground placeholder:text-muted-foreground" /><span id="email-error" class="mt-2 block type-small text-destructive">Enter an email address such as name@example.com.</span></label><label class="block"><span class="type-ui">Search</span><input type="search" placeholder="Search" disabled class="mt-2 h-11 w-full rounded-sm border border-input bg-card px-3.5 font-sans text-base text-foreground placeholder:text-muted-foreground disabled:opacity-40" /><span class="mt-2 block type-small text-muted-foreground">Supporting text that explains the field.</span></label></div>
```

### Subscribe form

An email field and the primary button on one line, a title above, a line about frequency and leaving below. On success, replace the form with one sentence that says what happens next.

```html
<form class="w-full" data-subscribe><p class="type-title">Subscribe by email</p><div class="mt-4 flex gap-2"><input type="email" required aria-label="Email" placeholder="name@example.com" class="h-11 min-w-0 flex-1 rounded-sm border border-input bg-card px-3.5 font-sans text-base text-foreground placeholder:text-muted-foreground" /><button type="submit" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-sm px-5 type-ui transition-colors disabled:pointer-events-none disabled:opacity-40 bg-primary text-primary-foreground hover:bg-primary-hover">Subscribe</button></div><p class="mt-3 type-small text-muted-foreground">Supporting text says how often mail is sent.</p></form>
```

### Tabs

Text tabs on a hairline. The selected tab is ink with a 2px red underline that sits on the hairline. Arrow keys move between tabs; only the selected tab is in the tab order. A section nav made of links uses the same classes with `aria-current="page"` and `aria-[current=page]:` in place of `aria-selected`.

```html
<div role="tablist" aria-label="Period" class="flex w-full gap-6 border-b border-border"><button type="button" role="tab" aria-selected="true" class="-mb-px h-11 shrink-0 border-b-2 border-transparent type-ui text-muted-foreground transition-colors hover:text-foreground aria-selected:border-primary aria-selected:text-foreground">Day</button><button type="button" role="tab" aria-selected="false" tabindex="-1" class="-mb-px h-11 shrink-0 border-b-2 border-transparent type-ui text-muted-foreground transition-colors hover:text-foreground aria-selected:border-primary aria-selected:text-foreground">Week</button><button type="button" role="tab" aria-selected="false" tabindex="-1" class="-mb-px h-11 shrink-0 border-b-2 border-transparent type-ui text-muted-foreground transition-colors hover:text-foreground aria-selected:border-primary aria-selected:text-foreground">Month</button></div>
```

### Table of contents

Entries in the text face with dotted leaders to a page or section number, between hairlines. The leader is an empty span with `border-dotted` that grows to fill the line; `items-baseline` puts it on the baseline.

```html
<nav aria-label="Contents" class="w-full"><p class="type-overline text-muted-foreground">Contents</p><ol class="mt-3 divide-y divide-border border-y border-border"><li><a href="#" class="flex items-baseline gap-2 py-2.5 type-body transition-colors hover:text-primary"><span>Section one</span><span aria-hidden="true" class="flex-1 border-b border-dotted border-input"></span><span class="type-small text-muted-foreground">1</span></a></li><li><a href="#" class="flex items-baseline gap-2 py-2.5 type-body transition-colors hover:text-primary"><span>Section two</span><span aria-hidden="true" class="flex-1 border-b border-dotted border-input"></span><span class="type-small text-muted-foreground">4</span></a></li><li><a href="#" class="flex items-baseline gap-2 py-2.5 type-body transition-colors hover:text-primary"><span>Section three</span><span aria-hidden="true" class="flex-1 border-b border-dotted border-input"></span><span class="type-small text-muted-foreground">9</span></a></li></ol></nav>
```

### Reading progress

A 2px red line across the top of the article that grows with the scroll position, over a 44px bar with the title and the time left. Make the whole block `sticky top-0 bg-background` on a long page; outside `main`, wrap it in an `aside` with an `aria-label` so it stays in a landmark.

```html
<div class="w-full border-b border-border"><div role="progressbar" aria-label="Reading progress" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" class="h-0.5 w-full bg-border"><div class="h-full w-[56%] bg-primary"></div></div><div class="flex h-11 items-center justify-between gap-4"><p class="truncate type-title">Article title</p><p class="shrink-0 type-small text-muted-foreground">4 min left</p></div></div>
```

### Footnote

A red superscript number in the text links to the note. The note is `type-footnote` under a hairline, at the end of the article or in the margin on wide screens.

```html
<div class="w-full"><p class="type-body">A footnote mark follows the word it explains,<a href="#note-1" class="text-primary no-underline"><sup class="ml-0.5 font-sans text-[0.65em]">1</sup></a> and the note sits below the text.</p><aside id="note-1" class="mt-5 flex gap-3 border-t border-border pt-3 type-footnote text-muted-foreground"><span class="text-primary">1</span><span>The note repeats the number and is set in the footnote style.</span></aside></div>
```

Links inside running text are `text-primary underline decoration-1 underline-offset-4`: thin, offset, in red ink. The footnote mark is the one link without an underline.

### Tag

A topic label: letterspaced capitals in a 24px hairline box. A tag is a link to its topic; a chip is a filter you press.

```html
<div class="flex flex-wrap gap-2"><a href="#" class="inline-flex h-6 items-center rounded-sm border border-border px-2 type-overline text-muted-foreground transition-colors hover:border-input hover:text-foreground">Topic A</a><a href="#" class="inline-flex h-6 items-center rounded-sm border border-border px-2 type-overline text-muted-foreground transition-colors hover:border-input hover:text-foreground">Topic B</a><a href="#" class="inline-flex h-6 items-center rounded-sm border border-border px-2 type-overline text-muted-foreground transition-colors hover:border-input hover:text-foreground">Topic C</a></div>
```

### Badge

Status is a colored dot plus a word, never color alone, on a quiet `secondary` tint. Dots: `bg-success` for active or done, `bg-warning` for pending, `bg-destructive` for failed, `bg-muted-foreground` for a draft.

```html
<div class="flex flex-wrap gap-2"><span class="inline-flex h-6 items-center gap-2 rounded-sm bg-secondary px-2 type-caption text-secondary-foreground"><span class="size-1.5 rounded-full bg-success"></span>Active</span><span class="inline-flex h-6 items-center gap-2 rounded-sm bg-secondary px-2 type-caption text-secondary-foreground"><span class="size-1.5 rounded-full bg-warning"></span>Pending</span><span class="inline-flex h-6 items-center gap-2 rounded-sm bg-secondary px-2 type-caption text-secondary-foreground"><span class="size-1.5 rounded-full bg-destructive"></span>Failed</span><span class="inline-flex h-6 items-center gap-2 rounded-sm bg-secondary px-2 type-caption text-secondary-foreground"><span class="size-1.5 rounded-full bg-muted-foreground"></span>Draft</span></div>
```

### Progress

A 2px line in `border` with the done part in red, under a line of `type-small` that says what the number means.

```html
<div class="w-full"><div class="flex items-baseline justify-between gap-4 type-small"><span>Label</span><span class="text-muted-foreground">3 of 4</span></div><div role="progressbar" aria-label="Label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="mt-2 h-0.5 w-full bg-border"><div class="h-full w-3/4 bg-primary"></div></div></div>
```

### List

Rows between hairlines, no box: a title in the text face, supporting text under it, a chevron on the right.

```html
<ul class="w-full divide-y divide-border border-y border-border"><li class="flex items-center justify-between gap-4 py-3.5"><div><p class="type-title">Account</p><p class="mt-0.5 type-small text-muted-foreground">Supporting text</p></div><span class="text-muted-foreground"><!-- 16px Lucide icon --></span></li><li class="flex items-center justify-between gap-4 py-3.5"><div><p class="type-title">Notifications</p><p class="mt-0.5 type-small text-muted-foreground">Supporting text</p></div><span class="text-muted-foreground"><!-- 16px Lucide icon --></span></li><li class="flex items-center justify-between gap-4 py-3.5"><div><p class="type-title">Privacy</p><p class="mt-0.5 type-small text-muted-foreground">Supporting text</p></div><span class="text-muted-foreground"><!-- 16px Lucide icon --></span></li></ul>
```

### Spinner

A 20px ring drawn with a 1.5px line, the moving part in red, next to a sentence that says what is loading. `role="status"` goes on the sentence, not on the ring.

```html
<p role="status" class="flex items-center gap-3 type-small text-muted-foreground"><span aria-hidden="true" class="size-5 animate-spin rounded-full border-[1.5px] border-border border-t-primary"></span>Loading…</p>
```

### Card

The lighter paper with a hairline and 6px corners, for an item in a list of things to read: overline, title, one or two sentences, byline.

```html
<article class="w-full rounded-lg border border-border bg-card p-6"><p class="type-overline text-muted-foreground">Overline</p><h3 class="mt-3 type-h3">Card title</h3><p class="mt-2 type-footnote text-muted-foreground">Supporting text that explains the item in a line or two.</p><p class="mt-5 type-small text-muted-foreground">Author name · 14 Oct 2026 · 6 min</p></article>
```

### Pull quote

A sentence from the text, set large and light in italic between hairlines, with the source under it. One per screen of text at most.

```html
<figure class="w-full border-y border-border py-6"><blockquote class="font-serif text-[1.75rem]/9 font-light italic">“A pull quote repeats one line from the text, set large.”</blockquote><figcaption class="mt-4 type-small text-muted-foreground">Source or author</figcaption></figure>
```

### Focus

Every interactive element gets the global focus style from `verso.css`: a 2px `ring` outline with a 2px offset, in the red ink. Do not remove it or replace it with a shadow.

## Do's and Don'ts

- Do set body text in Newsreader at 19px on a 30px line, 60 to 70 characters wide.
- Do keep one red element per view asking for attention; links and selected states share the same red.
- Do separate things with hairlines and whitespace. A thick-thin rule marks a section break.
- Do write status and errors as words next to the colored mark.
- Do give icon-only buttons an `aria-label` and form controls a visible label or legend.
- Do use curly quotes, en dashes and old-style figures in running text.
- Don't add shadows, gradients, tinted panels or a second accent color.
- Don't set headings in bold or in capitals; weights stop at 500 and only `type-overline` is uppercase.
- Don't round corners past 6px, except circles that are circles.
- Don't put the article text in a card; cards are for lists of things, the text sits on the paper.
- Don't use the default Tailwind palette or hard-coded hex values in components.
- Don't shrink interface text below 12px or text inputs below 16px.
- Don't put an icon, a logo mark or an initials badge beside the wordmark or a headline: both are text only.
