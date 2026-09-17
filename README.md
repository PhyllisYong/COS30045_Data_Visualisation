# COS30045 Data Visualisation

## Appliance Energy Watch

A small three-page website built for the COS30045 assignment brief, hosting data
visualisations about household appliance energy consumption in the Australian market
(with a focus on televisions).

### Pages

- **Home** &mdash; intro plus three highlight facts read off the Televisions charts
  (most common screen technology, screen sizes, and brand), with links to the other
  two pages.
- **Televisions** &mdash; real data visualisations (charts exported to `assets/`) answering seven
  research questions about Australian TV screen technology, screen size, brand and power use.
- **About Us** &mdash; project goals and author information.

All three "pages" live inside [television.html](television.html) as `<section>` elements and are
swapped in and out by [js/script.js](js/script.js), which also keeps the nav menu, the
page title, and the browser's back/forward (URL hash) in sync. Clicking the logo in the
top-left always returns to Home.

### Structure

```
television.html    # markup for all three pages/sections + nav + footer
css/style.css      # styling, colours matched to the logo (brown / gold / orange)
js/script.js        # JS-based page switching, active-link state, footer year
assets/logo.svg   # power/lightning-bolt logo used in the nav and favicon
```

### Colour palette

Colours were picked to match the supplied logo (a lightning bolt in a pale gold
circle with a brown outline):

| Colour | Hex | Used for |
|---|---|---|
| Brown | `#6b5637` | header, headings, borders |
| Pale gold | `#f6e7a1` | active nav link, circle background |
| Orange | `#e9a23b` | accent, hover state, lightning bolt |
| Dark brown | `#4a3b26` | footer background |

---

## Use of Generative AI

This project was built with the help of Claude Code, an AI coding assistant (not
GitHub Copilot), as expected for this assignment. Notes on how it was used and a
short reflection are below.

### What the AI was used for

- Scaffolding the initial HTML structure for the three pages (Home, Televisions,
  About Us) and the shared header/nav/footer.
- Writing the JavaScript that swaps between pages (hash-based routing, active link
  highlighting, showing/hiding sections) instead of doing full page reloads.
- Writing the CSS, including deriving a colour palette from the supplied logo image
  and applying it consistently (nav, buttons, figures, footer).
- Laying out the real chart images on the Televisions page (one per research
  question) and writing a short, plain-language takeaway under each one.
- Building a click-to-enlarge lightbox for the charts.
- Recreating the logo as an SVG file so it could be used as a scalable nav icon
  and favicon.

### What I checked/changed myself

- Replaced the Home page's original made-up stats with real ones read off the
  Televisions charts instead (screen technology, size and brand), so Home and
  Televisions don't contradict each other, and flagged them as approximate since
  they're eyeballed from the chart images rather than the underlying dataset.
- Reviewed the JavaScript logic for the nav (hash routing, active state, logo
  click-to-home) to make sure it matched the assignment requirement of swapping
  pages via JavaScript rather than normal `<a href="page.html">` navigation.
- Checked the colour palette actually matches the supplied logo (brown outline,
  pale gold circle, orange bolt) instead of a generic AI-picked theme.
- Renamed the main HTML file to `television.html`.
- Found and fixed a CSS specificity bug where the lightbox's own `display: flex`
  silently overrode the `hidden` attribute, so it was visible (as a dimmed
  overlay with a broken image) all the time instead of only on click.

### Reflection

Using an AI assistant made it much faster to get a consistent structure across all
three pages and to keep the CSS/JS DRY (shared nav, shared footer, one script
handling all page switching) rather than duplicating markup across separate files.
It was particularly useful for quickly iterating on the colour palette until it
matched the logo, and for generating a reasonable amount of placeholder content so
the layout could be judged with real-looking (if not real) data.

The main thing to watch for when using AI assistance is that it will happily
invent statistics that look plausible but aren't backed by any source &mdash; I made
sure anything like that was clearly labelled as placeholder content rather than
presented as fact. It's also worth double-checking generated JavaScript actually
satisfies the specific requirement wording (e.g. "swap pages using JavaScript")
rather than just producing a website that happens to work.

---

*&copy; 2026 Phyllis Yong*
