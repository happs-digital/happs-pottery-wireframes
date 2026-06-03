# Happs Pottery Wireframes — Claude Code Guide

## What this project is

A static HTML wireframe prototype for **happspottery.com.au**, hosted on GitHub Pages at:
`https://happs-digital.github.io/happs-pottery-wireframes/`

The prototype maps out the full site structure, page layouts, and content requirements ahead of a proper build. It is not a real website — no backend, no CMS, no JavaScript frameworks. Everything is static HTML, one shared CSS file, and two shared JS files injected on every page.

---

## Stack

- **wireframe.css** — single stylesheet at the project root. All styling lives here.
- **navigation.js** — injected via `<script src="../navigation.js">` (or `navigation.js` from root). Injects the nav bar, search overlay, footer, floating Book CTA, and promo banner into every page at runtime.
- **comments.js** — injected the same way. Adds the wireframe toolbar (the dark bar at the top with "Proto" and page navigation) and the comments/annotation panel.
- No build step. No npm. Edit files, commit, push.

---

## File structure

```
/                        ← root pages (index.html, sitemap.html)
/page/                   ← general site pages (about, visit, faq, book, contact, enquire)
/page/programs/          ← class and program pages
/shop/                   ← shop pages (index, product, cart, checkout, collection/)
/blog/                   ← blog/journal (index.html, article.html)
/landing-page/           ← campaign and segment landing pages
/policy/                 ← policy pages (privacy, shipping, terms, accessibility)
/experiences/            ← experiences index
wireframe.css            ← shared stylesheet
navigation.js            ← shared nav/footer injector
comments.js              ← wireframe toolbar and comments panel
```

### Path conventions

Pages in subdirectories link to the stylesheet and scripts with `../`:
```html
<link rel="stylesheet" href="../wireframe.css">
<script src="../navigation.js"></script>
<script src="../comments.js"></script>
```

Root-level pages use no prefix:
```html
<link rel="stylesheet" href="wireframe.css">
```

---

## Wireframe rules

### Greyscale only
No colour anywhere. All values must be greyscale — `#xxx`, `rgba(0,0,0,x)`, or `rgba(255,255,255,x)`. This is enforced by the comment at the top of wireframe.css:
```css
/* Strict greyscale only — no colour anywhere */
```

### Use existing wf- classes
Always use existing classes from wireframe.css before adding new ones. Key layout classes:

| Class | Purpose |
|---|---|
| `.page-width` | Max-width 1440px centred container — wrap content inside sections |
| `.wf-section` | Standard page section with padding |
| `.wf-grid-2/3/4` | Responsive grid (collapses to 1 col on mobile) |
| `.wf-card` | Bordered card with padding |
| `.wf-box` | Light grey background box |
| `.wf-image` | Grey placeholder image block |
| `.wf-label` | Small uppercase label/tag |
| `.wf-placeholder` | Italic grey text — marks content not yet written |
| `.wf-btn` | Primary filled button |
| `.wf-btn-outline` | Outlined button |
| `.wf-btn-placeholder` | Dashed, 45% opacity — use for buttons linking to pages not yet built |
| `.wf-form` | Form field styling |

### Page structure pattern
Every page follows this structure:
```html
<body>
  <!-- page content sections -->
  <script src="../navigation.js"></script>
  <script src="../comments.js"></script>
</body>
```
No `<header>` or `<footer>` tags — navigation.js injects those at runtime.

---

## Content outline blocks

Pages that haven't been written yet include a `.wf-outline` block as the **first element inside `<body>`** (before any wireframe sections). This is a planning tool, not live content — it documents page purpose, audience, suggested structure, content requirements, tone, keywords, and imagery notes for whoever writes the real copy.

Structure:
```html
<div class="wf-outline">
  <div class="page-width">

    <div class="wf-outline-section">
      <h3 class="wf-outline-label">Section label</h3>
      <p>Content...</p>
    </div>

  </div>
</div>
```

- Use `<h3 class="wf-outline-label">` for section labels (not `<p>`)
- Wrap all `wf-outline-section` elements in a `page-width` div inside the outline
- Use `<span class="wf-outline-tag">` for keyword chips
- Pages with outline blocks: `landing-page/schools.html`, `landing-page/corporate.html`, `landing-page/open-studios.html`

---

## Copy guidelines

### Studio vs Myles
Myles Happ is the founder and head potter, but other staff also make pieces to Happs Pottery's established styles and glazes. Copy should refer to **the studio** or **the team** except where Myles is specifically relevant:

**Use "the studio" or "our team":**
- Product descriptions ("hand-thrown in the Dunsborough studio")
- Experience descriptions when sessions may not always be Myles-led
- General shop and booking copy ("we'll be in touch within 2 business days")

**Myles by name is appropriate:**
- The About page (explicitly about him)
- Open Studios demo sessions (he leads these)
- Blog article bylines and author blocks
- Direct quotes
- Content outline notes that say "confirm with Myles" (those are internal planning notes, not live copy)

### Placeholder text conventions
- Use `.wf-placeholder` class for content that needs to be written or confirmed
- Items pending confirmation from Myles are marked `<strong>(confirm with Myles)</strong>` inside placeholder text
- Items pending a decision are marked `<strong>(decision outstanding)</strong>`

### Open Studios — scope restriction
Open Studios and the demo session event are **temporary and seasonal** (September, MRROS only). References to Open Studios and demos must only appear in:
- `landing-page/open-studios.html`
- `blog/` articles
- Temporary promo popups (injected via navigation.js)

**Do not mention Open Studios or demo sessions in standard/static pages** — including experiences/index.html, page/visit.html, page/what-we-do.html, page/contact.html, index.html, page/about.html, shop pages, or any other evergreen page. These pages are live year-round; Open Studios content will be stale for 11 months of the year.

### Tone
Avoid AI-flavoured phrasing. No em dashes used for rhetorical effect. Short sentences. Active language.

---

## Business context

- **Studio:** Happs Pottery, 749 Caves Road, Anniebrook (Dunsborough area), WA 6281
- **Open:** Daily 10am–4pm (hours may vary for events)
- **Core products:** Wheel-thrown and hand-built ceramics in 5 signature glazes (Shore Break, Bunker Bay, Desert Days, Wyadup Stone, Emerald)
- **Experiences:** Studio Pottery Experience $69/person, 1.5hrs (the core year-round offer)
- **Open Studios:** Seasonal event — MRROS (Margaret River Region Open Studios), September only. Demo sessions $10/person, led by Myles. Content about this lives only in the landing page, blog, and temporary promo popups — not in standard site pages.
- **Key segments:** General visitors, school groups, corporate gifting
- **CRM:** GoHighLevel — enquiry forms feed into GHL
- **Booking:** TryBooking or Eventbrite (decision outstanding)

---

## Git

- Remote: `git@github.com:happs-digital/happs-pottery-wireframes.git`
- Branch: `main`
- Deploy: GitHub Pages, automatic on push to main
- Always push to `main` — no PRs needed for this project
