# COS30045 Data Visualisation

## Appliance Energy Watch

A small three-page website (COS30045 T01/T03) about appliance energy consumption in the
Australian market. Its main content is a data story about television energy use, built from an
Australian Government dataset.

Live site is served from [televisions.html](televisions.html) (see `vercel.json`).

### Pages

- **Home** &mdash; general overview of household appliance energy use in Australia (heating
  and cooling, always-on appliances, star ratings), with links to the other two pages.
- **Televisions** &mdash; the data story: an intro, seven charts answering questions about
  screen technology, screen size, brand and power use, and a conclusion.
- **About Us** &mdash; project goals and author information.

All three "pages" are `<section>` elements in [televisions.html](televisions.html), shown and
hidden by [js/script.js](js/script.js), which also highlights the current page in the nav and
keeps the browser back/forward buttons working. Clicking the logo returns to Home.

### Structure

```
televisions.html   # markup for all three pages/sections + nav + footer
css/style.css      # styling, colours matched to the logo (brown / gold / orange)
js/script.js       # JS-based page switching, active-link state, footer year
assets/            # logo.svg and the chart images (Q1 ... Q7)
vercel.json        # serves televisions.html at the site root
```

### Colour palette

Colours match the supplied logo (a lightning bolt in a pale gold circle with a brown outline):

| Colour     | Hex       | Used for                            |
| ---------- | --------- | ----------------------------------- |
| Brown      | `#6b5637` | header, headings, borders           |
| Pale gold  | `#f6e7a1` | active nav link, circle background  |
| Orange     | `#e9a23b` | accent, hover state, lightning bolt |
| Dark brown | `#4a3b26` | footer background                   |

---

## Data Story

**Audience:** Australian consumers who are buying a TV. They want an affordable,
energy-efficient, good-sized TV and prefer simple visual insights over technical detail.

**What they want to know** (most important first, as planned in the Miro storyboard):

1. What TV screen technologies are available, and which are most common?
2. What screen sizes are most common?
3. Which brands have the most models?
4. Which screen technology uses the least power?
5. How does screen size affect power use? _(context)_
6. Do larger TVs mean worse star ratings? _(context)_
7. Do brands differ in power consumption? _(extra detail)_

**How it is told:** the Televisions page opens with an intro for the audience, presents the
charts in that order (each with a caption and a plain-language takeaway), and ends with a
conclusion: balance size, brand and efficiency, and check the Energy Rating label.

## About the data

**Data source.** Australian Government, _Energy Rating Data for household appliances &ndash;
Labelled Products_ (Televisions dataset), published on data.gov.au as a CSV file with a
DOCX metadata file describing the fields.

**Data processing.** The CSV was processed and visualised in KNIME. The charts count and summarise fields from the CSV: screen technology
(`Screen_Tech`), screen size (`screensize_inches`), brand (`Brand_Reg`), model
(`Model_No` / `Submit_ID`), average power in a mode (`Avg_mode_power`) and the star rating
index. Counts are used for Q1 to Q3, the median power per technology for Q4, average power per
brand for Q7, and individual models are plotted for Q5 and Q6. The charts were exported from KNIME as PNG
images into `assets/`.

**Privacy.** The data describes products (brands, models, sizes, power use), not people, and
it is openly published by the government, so no personal information is used.

**Accuracy and limitations.**

- The data counts _registered models_, not TVs sold, so popular models are not weighted more.
- Some brands appear under more than one name (for example Samsung and Samsung Electronics
  are separate bars).
- Q2, Q3 and Q7 (bar chart) show only the top 10 sizes or brands, not everything in the data.
- Power values are as reported in the dataset; see its metadata for what they measure.
- The Q5 and Q6 takeaways describe patterns in the scatter plots and are approximate.
- LCD has the lowest median power, but it is only about 10% of models, so this does not mean
  it is the best choice for everyone.

**Ethics.** The source is credited and the data is used only to inform buyers. Brand
comparisons describe the data only and are not a judgement of quality, and takeaways were
written to avoid overstating what the charts show.

---

## AI Declaration

This project was built with the help of GitHub Copilot, an AI coding assistant.

**What the AI was used for**

- Scaffolding the HTML structure for the three pages and the shared header, nav and footer.
- Writing the JavaScript that swaps between pages (hash routing, active link highlighting).
- Writing the CSS, including a palette derived from the logo.
- Recreating the logo as an SVG.
- Laying out the chart images on the Televisions page and drafting captions and takeaways,
  which were then checked against the values shown in the charts.
- Drafting the general placeholder content on the Home page and this README.

**What I checked or changed myself**

- Chose the audience, questions and storyline (Miro storyboard) and produced the charts.
- Checked every takeaway against the chart values, which caught wrong figures in early drafts.
- Reviewed the navigation code to make sure pages are swapped with JavaScript, not by loading
  separate HTML files, and can explain how it works.
- Replaced made-up statistics with content from the real dataset or general statements.

**Reflection.** The AI made it fast to get a consistent structure and styling, and to iterate
on layout. It over-built at first (extra cards, tables, a lightbox), so I asked for it to be
simplified. It also produced plausible numbers that did not match my charts, so every figure
needed checking against the actual data. I learned to give it specific requirements and to
verify its output rather than trust it.

---

_&copy; 2026 Phyllis Yong_
