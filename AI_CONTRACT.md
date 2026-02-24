# AI_CONTRACT.md — ChiCa Hondenschool Website

This AI_CONTRACT defines the **product, content, SEO, CTA, tone/voice, and governance rules** for the ChiCa Hondenschool website.

It is the source of truth for **what the website must communicate** and **how pages should be structured** from a visitor + SEO perspective.

> Implementation constraints (folder structure, “no hardcoded text”, data sourcing, layouts, etc.) live in `development_rules.md` and must be executed for every change.  
> If there is a conflict between content goals and engineering constraints, propose alternatives and ask for confirmation.

## Enforcement Rule

This AI_CONTRACT and `development_rules.md` must always be executed together.

- AI_CONTRACT governs content, structure, SEO, CTA logic, and tone.
- development_rules.md governs implementation, structure safety, and engineering constraints.

If a requested change conflicts with either document:
- Stop immediately.
- Clearly explain the conflict.
- Ask for explicit confirmation before proceeding.

Neither document overrides the other.
Both are mandatory.


---

## 1) Website Goals

### Primary goals
- Convert visitors into **bookings** (Trainin booking link) and **contact leads**
- Explain the difference: **training in real-life situations** (at home / on the street) vs “training field only”
- Build trust using:
  - Instructor credibility (since 2015, background, method)
  - Reviews / testimonials
  - Clear service offerings + pricing anchors

### Secondary goals
- Support common visitor journeys:
  - “My dog behaves at training, but not at home” → hondentraining
  - “I need reliable 1-op-1 care/walks” → oppas & uitlaatservice
  - “Is this trustworthy?” → over + reviews
  - “How do I start?” → contact + booking

---

## 2) Site Map (Current Pages)

- `/` — Home
- `/diensten/hondenschool/` — Hondentraining aan huis (service overview + trajecten)
- `/diensten/oppas-uitlaatservice/` — Oppas & uitlaatservice (service overview + use cases)
- `/reviews/` — Reviews en recensies
- `/over/` — Over ChiCa Hondenschool (Carine Krommendijk)
- `/contact/` — Contact form + direct details
- External booking: `https://chica-hondenschool.trainin.app` (CTA destination)

The site includes a language toggle (NL/EN shown in menu on several pages). Language handling must be consistent across content and CTAs.

---

## 3) Narrative Flow Per Page

### 3.1 Home (`/`)
**Purpose:** explain the positioning + route visitors to the right service and a CTA.

**Required structure:**
1. **Hero**
   - H1: clear positioning (training in practice / real life)
   - 1–2 line value proposition
   - Primary CTAs: “Hondenschool” and “Oppas / Uitlaatservice”
2. **Problem recognition**
   - “Herken je dit?” section (problem framing)
3. **Why ChiCa**
   - 4 key benefits (practical training, maatwerk, plezier, gezin)
4. **Services overview**
   - Two service cards with short descriptions + “Bekijk …” CTA
5. **About teaser**
   - Short intro of Carine + “Lees meer” CTA to `/over/`
6. **Social proof**
   - Review snippets + CTA to `/reviews/`
7. **Conversion block**
   - “Contact” section with:
     - CTA to `/contact/`
     - CTA to booking (external)

**Key message:** training and support happen where it matters: at home and in daily routines.

---

### 3.2 Hondenschool (`/diensten/hondenschool/`)
**Purpose:** convert people searching for training help into booking/contact.

**Required structure:**
1. **Hero**
   - H1: “Hondentraining aan huis” (or equivalent)
   - Short summary
   - Primary CTAs: “Kies een dienst” + “Stel een vraag”
2. **Process**
   - “Hoe werkt onze hondentraining?” with steps:
     - Kennismaking
     - Training in je omgeving
     - Oefenen en begeleiden
   - Close with a “Resultaat” statement
3. **Offer selection**
   - “Kies jouw traject” with clearly separated options
   - Each option must have:
     - Name
     - Price anchor (if shown)
     - 2–4 lines explaining best-fit use case
     - CTA to detail (or booking/selection)
4. **FAQ**
   - Expandable FAQ targeting objections (lessons needed, group vs 1-1, location, problem behavior, age, method)
5. **Final conversion**
   - “Klaar om gericht te trainen?” section
   - CTAs: Contact + “Boek direct” (external)

---

### 3.3 Oppas & uitlaatservice (`/diensten/oppas-uitlaatservice/`)
**Purpose:** convert visitors needing help now into booking/contact.

**Required structure:**
1. **Hero**
   - H1: “Oppas & Uitlaatservice”
   - Trust-focused tagline
   - CTAs: “Boek direct” (external) + Contact
2. **Reassurance block**
   - “Met een gerust hart de deur uit” explanation
   - Bullet benefits (1-op-1, flexibel, rustig, vertrouwd)
3. **Offer selection**
   - Options like “Kennismaking”, “Strippenkaart”
   - Each option includes:
     - Price anchor
     - Use-case summary
     - CTA to detail/booking
4. **Real-life scenarios**
   - “Voorbeelden uit de praktijk” with 3–6 scenarios
5. **Final conversion**
   - “Snel ondersteuning nodig?” section
   - CTAs: Contact + “Boek direct” (external)

---

### 3.4 Reviews (`/reviews/`)
**Purpose:** increase trust and remove doubt.

**Required structure:**
1. **Hero**
   - H1: “Reviews en recensies”
   - Short trust statement
   - CTAs: “Boek direct” (external) + Contact
2. **Selection of reviews**
   - Quotes + name + category tag (e.g., Puppy/Detectie/Priveles)
3. **Photo impression**
   - Gallery with alt text for each image
4. **Conversion**
   - Short CTA block (book/contact)

---

### 3.5 Over (`/over/`)
**Purpose:** credibility + method clarity + personal story.

**Required structure:**
1. **Hero**
   - H1: “Over ChiCa Hondenschool”
   - Short summary of services and approach
   - CTA to hondentraining page
2. **Experience & background**
   - Bullet highlights + timeline highlights
3. **Method**
   - Clear method pillars (observeren, karakter, positief/duidelijk, praktijkgericht)
4. **Personal story**
   - Background + why this matters
5. **Conversion**
   - CTA to contact + CTA to services

---

### 3.6 Contact (`/contact/`)
**Purpose:** capture leads and route to booking.

**Required structure:**
1. **Hero**
   - H1: “Contact”
   - Short instruction
2. **Form**
   - Basic fields + service interest dropdown
   - Clear expectation setting (response time if desired)
3. **Direct contact**
   - Phone/WhatsApp
   - Email
   - Work area
   - KvK
4. **Booking alternative**
   - “Boek direct” CTA (external)

---

## 4) SEO Requirements

### 4.1 Headings (H1/H2/H3)
- Exactly **one H1 per page**.
- Use H2 for major sections (problem, method, offers, FAQ, reviews, contact).
- Use H3 for subsection titles (steps, benefit cards, offer titles).
- Headings must be descriptive and keyword-aware (natural Dutch).

### 4.2 Metadata (per page)
Each page must define:
- `title` (unique, keyword-aligned, 50–60 chars target)
- `meta description` (unique, 140–160 chars target, includes location when relevant)
- `canonical` (if applicable)
- Open Graph:
  - `og:title`
  - `og:description`
  - `og:image` (site-appropriate default or page-specific)

### 4.3 Internal linking strategy
- Home must link prominently to:
  - both service pages
  - reviews
  - about
  - contact
- Service pages must link to:
  - contact
  - booking (external)
  - at least one trust page (reviews or about)
- About page must link to:
  - both service pages
  - contact
- Reviews page must link to:
  - service pages and booking/contact

Anchor text should be meaningful (avoid “klik hier”).

### 4.4 Image alt text
- Every image must have an **alt** text:
  - descriptive, human-readable
  - context-specific (training, practice moment, service scenario)
- Decorative images may use empty alt (`alt=""`) only if truly decorative.
- Gallery images on reviews page must have distinct alt texts.

### 4.5 Local SEO (where appropriate)
- Mention service area naturally where relevant (e.g., Den Haag / Voorschoten en omgeving).
- Do not spam locations; prefer “werkgebied” block and 1–2 mentions in service pages.

---

## 5) CTA Philosophy & Placement Rules

### CTA types
- **Primary CTA:** book now / book directly (external) or choose a service
- **Secondary CTA:** contact / ask a question / read more
- **Support CTAs:** whatsapp, view reviews, view services

### Placement rules
- Every page must have:
  - A primary CTA **above the fold** (hero)
  - At least one CTA **mid-page** (after benefits/offers)
  - A final CTA **at the end** (conversion section)

### CTA text rules
- CTA labels must be action-oriented and specific:
  - “Boek direct”
  - “Neem contact op”
  - “Bekijk hondenschool”
  - “Bekijk oppas / uitlaatservice”
  - “Lees meer over ChiCa”
  - “Bekijk alle recensies”

### External link behavior
- Booking and social links may open in a new tab when appropriate.
- If opening new tab: use `target="_blank"` and `rel="noopener noreferrer"`.

---

## 6) Tone / Voice Rules

- Calm, professional, reassuring, practical.
- Always address the reader directly using the informal Dutch form: **jij / je / jouw**.
- Never use the formal form: **u / uw**.
- - Write one-on-one, as if speaking directly to the dog owner.
- Focus on:
  - clarity
  - empathy (recognize frustration)
  - confidence without exaggeration
- Avoid:
  - aggressive claims (“garantie”, “altijd”, “100%”)
  - shaming language (“je doet het fout”)
  - overly technical training jargon
- Use short paragraphs and scannable structure:
  - bullets
  - short headings
  - compact benefit blocks

---

## 7) Governance Rules

### Source of truth
- This AI_CONTRACT governs **content structure, messaging, SEO, CTA strategy, and tone**.
- Engineering/implementation constraints are governed by `development_rules.md`.

### Updating the contract
Whenever you change:
- page structure (add/remove sections),
- CTA strategy (new CTAs, changed destinations),
- SEO meta rules,
- tone/positioning,

…you must update this AI_CONTRACT to reflect the new reality.

### Change discipline
- If a requested change could impact SEO, routing, or conversions, call it out explicitly.
- If content is being removed, propose safer alternatives first (e.g., rewrite, compress, move, redirect), and ask for confirmation.

---

## 8) Definition of Done (Content / SEO)

A change is complete when:
- Page narrative flow matches this contract (or contract updated accordingly)
- H1/H2/H3 are correct and scannable
- Unique meta title + description exist
- Internal links match the linking strategy
- Images have correct alt text
- CTAs are present (hero + mid + end) and destinations are correct
- Tone/voice matches the rules above
