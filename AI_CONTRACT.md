# AI_CONTRACT.md - ChiCa Hondenschool Website

This contract describes the website as it exists today. Use it as the working reference for future changes.

It covers:
- current route and page structure
- where content lives
- how reusable components are expected to be used
- how service overview and detail pages are assembled
- how localization currently works
- how the contact flow is wired
- current layout, navigation, SEO, and deployment-related structure

`development_rules.md` still applies. This file does not replace it.

## Enforcement

Execute this contract together with `development_rules.md`.

If a requested change conflicts with the current documented structure:
- flag the conflict
- explain the implementation or SEO impact
- ask for confirmation before changing the established pattern

When the implementation changes materially, update this contract in the same task.

## 1) Current Site Structure

### Main routes
- `/` - home
- `/contact/`
- `/over/`
- `/reviews/`
- `/privacy/`
- `/algemene-voorwaarden/`
- `/diensten/hondenschool/`
- `/diensten/oppas-uitlaatservice/`

### Current service detail routes
- `/diensten/hondenschool/puppycursus/`
- `/diensten/hondenschool/basiscursus/`
- `/diensten/hondenschool/priveles-aan-huis/`
- `/diensten/hondenschool/priveles-op-locatie/`
- `/diensten/hondenschool/fun-speuren-neuswerk/`
- `/diensten/hondenschool/detectie/`
- `/diensten/hondenschool/sport-en-spel/`
- `/diensten/oppas-uitlaatservice/kennismaking/`
- `/diensten/oppas-uitlaatservice/strippenkaart/`

### Structural rule
- Service detail pages are first-class routes and part of the current information architecture.
- Do not describe the site as only having two service overview pages.
- Legal pages are present and should stay part of the documented structure.

## 2) File Layout And Ownership

### `src/pages`
- Contains route files only.
- Each service detail route has a minimal page file that imports one `dienst` data object and renders `ServiceLayout`.
- Overview pages and editorial pages can contain more page-specific composition, but still pull copy from data modules.

### `src/data`
- This is the content source of truth.
- Page copy lives in page-level data files such as `src/data/home.ts`, `src/data/contact.ts`, `src/data/over.ts`, `src/data/reviews.ts`, `src/data/privacy.ts`, and `src/data/algemene-voorwaarden.ts`.
- Global UI strings, navigation labels, footer text, and shared contact/link values live in `src/data/ui.ts`.
- Service content lives under `src/data/diensten/`.

### `src/data/diensten`
- `src/data/diensten/index.ts` is the central service registry for cross-site use.
- It defines:
  - the flattened service list used for navigation, sitemap, and related services
  - service cards and CTA behavior shared across categories
  - top-level diensten category data
- Category overview data lives in:
  - `src/data/diensten/hondenschool/index.ts`
  - `src/data/diensten/oppas-uitlaatservice/index.ts`
- Each individual service has its own file in the relevant category folder.

### `src/components`
- Holds reusable rendering primitives and page sections.
- Reuse existing components before introducing new page-specific markup patterns.
- Important shared components already define current conventions:
  - `Hero.astro`
  - `CTASection.astro`
  - `ServiceCards.astro`
  - `ProcessFlow.astro`
  - `FaqAccordion.astro`
  - `ServiceLayout.astro`
  - `PricingSidebar.astro`
  - `RelatedServices.astro`
  - `ContactForm.astro`

### `src/layouts`
- `BaseLayout.astro` is the standard wrapper for public pages.
- `ContentPageLayout.astro` is used for simple legal/content pages.
- Shared header, footer, canonical tag, global CSS, floating WhatsApp button, and i18n bootstrapping belong in layouts, not individual pages.

### `public`
- Static assets and server-served files live here.
- Images are served from `public/images/...`.
- `public/contact-submit.php` is part of the live contact flow and must be treated as active infrastructure, not dead legacy.

## 3) Content Flow Rules

### General rule
- Visible copy should come from `src/data`, usually as bilingual `l10n(...)` values.
- Astro pages and shared components should render data, not own editorial copy.

### Current content split
- Home page content: `src/data/home.ts`
- Contact page content and form interest groups: `src/data/contact.ts`
- About page content: `src/data/over.ts`
- Reviews page content and review entries: `src/data/reviews.ts`
- Legal page content: `src/data/privacy.ts`, `src/data/algemene-voorwaarden.ts`
- Shared UI labels and reusable business constants: `src/data/ui.ts`
- Service definitions: `src/data/diensten/**`

### Important exception to the old rule
- The project is not using one flat `src/data/*.ts` pattern anymore.
- Service data is intentionally nested by category under `src/data/diensten/`.
- Future work should follow that structure instead of creating ad hoc top-level service data files.

## 4) Localization And Translation Rules

### Current approach
- Localization is already implemented, not hypothetical.
- The site supports Dutch and English via `lang=nl` and `lang=en` query parameters.
- Language state is resolved from the URL first, then local storage, with Dutch as default.

### Translation structure
- Bilingual strings use the `L10n` shape from `src/data/l10n.ts`.
- New copy should usually be added via `l10n(nl, en)`.
- Shared localization helpers live in `src/i18n/`.

### Rendering pattern
- Server-rendered pages resolve the language with `resolveLangFromUrl(Astro.url)`.
- Components render localized values with `localize(...)`.
- Client-side language switching updates text and selected attributes through `data-i18n` and `data-i18n-attr`.

### Structural rule
- New public-facing strings should be added to the same data tree used by the page/component so the client i18n updater can address them predictably.
- Do not document or build a separate locale-file system unless the repo is actually changed to use one.

## 5) Layout, Navigation, And Shared UX Rules

### Base layout
- Public pages should usually use `BaseLayout.astro`.
- `BaseLayout` currently owns:
  - document title and meta description
  - canonical URL generation from `site.url`
  - header and footer
  - skip link
  - floating WhatsApp button
  - client i18n initialization

### Header and navigation
- Main navigation is data-driven from `src/data/ui.ts` and `src/data/diensten/index.ts`.
- The services menu is hierarchical:
  - top-level category links
  - nested links to every service detail route
- When adding or renaming services, the service registry must remain consistent so navigation, sitemap, and related services stay in sync.

### Footer
- Footer contact details come from `ui.contact`.
- Footer legal links come from `ui.footer.links`.

## 6) Service Architecture

### Two layers exist
- Category overview pages
- Individual service detail pages

Both layers are required parts of the current structure.

### 6.1 Category overview pages

#### Hondenschool overview
- Route: `/diensten/hondenschool/`
- Page file: `src/pages/diensten/hondenschool/index.astro`
- Data file: `src/data/diensten/hondenschool/index.ts`
- Structure currently includes:
  - hero
  - process flow
  - grouped service sections
  - FAQ
  - final CTA

#### Oppas-uitlaatservice overview
- Route: `/diensten/oppas-uitlaatservice/`
- Page file: `src/pages/diensten/oppas-uitlaatservice/index.astro`
- Data file: `src/data/diensten/oppas-uitlaatservice/index.ts`
- Structure currently includes:
  - hero
  - trust/intro block
  - process flow
  - service cards
  - scenario/use-case section
  - final CTA

### 6.2 How overview pages pull service content

#### Hondenschool
- The overview page does not hardcode every card independently.
- It assembles grouped cards from `services` defined in `src/data/diensten/hondenschool/index.ts`.
- Those grouped entries reference current service detail definitions and reuse their hero images, alt text, and pricing anchors where useful.

#### Oppas-uitlaatservice
- The overview page pulls its cards from the `services` array in `src/data/diensten/oppas-uitlaatservice/index.ts`.
- These cards are derived from the underlying service definitions for `kennismaking` and `strippenkaart`.

### 6.3 Individual service detail pages
- Each detail route is a thin wrapper around a `dienst` object and `ServiceLayout`.
- Current page pattern:
  - import `dienst`
  - resolve `lang`
  - render `<ServiceLayout dienst={dienst} lang={lang} />`

### 6.4 Service definition contract
- Individual service files currently define a rich `dienst` object with fields such as:
  - `slug`
  - `checkoutUrl`
  - `seo`
  - `hero`
  - `persuasion`
  - optional `whatWeDo`
  - `benefits`
  - `audience`
  - optional `timeline`
  - `testimonial`
  - `pricing`
  - `related`
- Some services also include additional structures like `selector` or overview-specific pricing labels.
- New service pages should match the existing service-data pattern instead of inventing bespoke page-only fields.

### 6.5 Service detail rendering responsibilities
- `ServiceLayout.astro` currently standardizes:
  - SEO title and description
  - hero block
  - main persuasion block
  - "what we do" section
  - audience/fit section
  - optional process timeline
  - testimonial handling
  - sticky pricing sidebar on desktop
  - related services
- `PricingSidebar.astro` owns booking options, price lines, selector states, and benefit list rendering.

## 7) Contact Form And Email Flow

### Current front-end architecture
- The contact page uses `src/pages/contact/index.astro`.
- Form UI and client-side validation live in `src/components/ContactForm.astro`.
- Form option groups come from `src/data/contact.ts`.
- The form also fetches a session-backed token from `public/contact-form-session.php` before submission is enabled.

### Current submission path
- The rendered form posts to `/contact-submit.php`.
- Client-side JS intercepts submit, validates fields, and sends `FormData` to that PHP endpoint.

### Current protection and validation
- Required fields: name, city, phone, email, interest, message
- Client-side email validation
- Minimum message length check
- Honeypot field: `company`
- minimum fill time lock
- consent checkbox gating submit button
- hidden `form_started_at` timestamp
- hidden `form_token` value issued by the PHP session helper

### Server-side handling
- `public/contact-submit.php` is the active server endpoint for production-style form submission.
- `public/contact-form-session.php` is the token bootstrap endpoint for the active form flow.
- It expects PHPMailer via `../vendor/autoload.php` and SMTP secrets via `../secrets.php`, both outside the public web root contract of this repo.
- `src/pages/api/contact.ts` also exists as an Astro API route using Nodemailer and env vars, but it is not the endpoint used by `ContactForm.astro` today.

### Current server-side anti-spam rules
- `public/contact-submit.php` must be safe on its own and may not rely on frontend-only checks.
- The PHP handler currently enforces:
  - POST-only requests
  - normal form content types only
  - empty honeypot field
  - valid `form_started_at` timing window
  - valid session-backed `form_token` checked with `hash_equals`
  - explicit consent
  - required-field validation for `name`, `city`, `phone`, `email`, `interest`, `message`, and consent
  - field-quality validation for name, email, and message length
  - basic sanitization:
    - null-byte stripping
    - CRLF stripping from email
    - line-break flattening in name
  - IP-based throttling:
    - max 5 submissions per 10 minutes per IP
    - max 25 submissions per day per IP
  - `error_log()` logging for blocked abuse attempts
- Non-AJAX failures redirect back to `/contact/` with `sent=0&reason=...` and preserve submitted values for refill.
- AJAX submissions still receive JSON responses and keep the current in-page success/failure UX.

### Structural rule
- Document and preserve the PHP path as the live form route unless the implementation is explicitly migrated.
- Do not rewrite the contract to pretend the Astro API route is the primary flow.
- Keep the token helper and the mail endpoint aligned. If token validation exists server-side, the form must actually submit the token and the environment must execute PHP correctly.

## 8) SEO And Metadata Conventions

### Current metadata rule
- Public pages define SEO title and description in their page or service data files.
- `BaseLayout.astro` receives `title` and `description` props and outputs:
  - `<title>`
  - meta description
  - robots index/follow
  - canonical URL

### Current canonical rule
- Canonicals are built from `site.url` in `src/data/site.ts` and the current pathname.
- Keep `site.url` as the source of truth for absolute URL generation.

### Sitemap rule
- `src/pages/sitemap.xml.ts` builds the sitemap from:
  - static routes
  - diensten categories
  - the flattened `serviceList`
- If service routes change, update the data registry so sitemap output stays correct.

### Current practical SEO rules
- One H1 per page remains the standard.
- Images should have real alt text, especially service and review imagery.
- Internal linking is intentionally distributed through:
  - service cards
  - related services
  - nav/footer
  - CTA sections
  - in-copy contextual links on editorial pages

### Important correction to the old contract
- There is no implemented Open Graph layer in `BaseLayout.astro` today.
- Do not claim OG fields are standard unless they are actually added to the project.

## 9) Current Page Composition Patterns

### Home
- Uses `BaseLayout` plus shared sections.
- Current composition:
  - hero
  - problem recognition block
  - USP section
  - service overview cards
  - about teaser
  - testimonial highlight
  - FAQ
  - final CTA

### About
- Uses custom section composition rather than `Hero.astro`.
- Includes:
  - hero/profile section
  - experience block with badges and timeline
  - method/how-I-work block
  - personal story block
  - callout band
  - final CTA with multiple service links

### Reviews
- Uses hero, highlighted reviews, image carousel, full review list, and final CTA.

### Legal pages
- `privacy` and `algemene-voorwaarden` currently use `ContentPageLayout.astro`.
- They are intentionally simple and should not be forced into the full marketing-page section pattern.

## 10) PHP / Public HTML / Deployment Notes

### What matters in the repo today
- PHP contact handling is shipped from `public/contact-submit.php`.
- PHP token bootstrap for the contact form is shipped from `public/contact-form-session.php`.
- The validator script explicitly guards against nested `public_html/public_html`.
- README deployment notes still refer to FTP upload into `/public_html/`.

### Structural rule
- Do not create repo folders that mirror deployed `public_html/public_html`.
- Keep deployment-facing PHP/public assets in `public/` unless the deployment setup is intentionally redesigned.
- The hosting environment must execute the PHP files in `public/`; if they are served as plain text, the contact form security flow is broken.

## 11) Rules To Preserve In Future Work

- Keep page copy in `src/data` and service copy in `src/data/diensten/**`.
- Keep overview pages data-driven from service/category definitions.
- Keep service detail routes thin and powered by `ServiceLayout`.
- Keep navigation, related services, and sitemap tied to the shared service registry.
- Keep the bilingual `l10n` pattern consistent.
- Keep `BaseLayout` as the standard wrapper for public marketing pages.
- Keep the live contact form contract aligned with `/contact-submit.php` until the code is migrated.

## 12) Outdated Assumptions Removed

The following older assumptions are no longer correct and should not be reintroduced:
- The site only consists of home, two overview service pages, reviews, over, and contact.
- Multilingual support is only a future possibility.
- Service pages are only overview pages without dedicated detail routes.
- All service content should live in flat page-specific files outside `src/data/diensten/`.
- Every page follows the same hero/process/offer/FAQ/final CTA template.
- Open Graph metadata is already part of the standard layout.
- Contact handling is defined only in abstract terms rather than by the actual PHP endpoint and current validation flow.

## 13) Definition Of Done For Structural Changes

A structure-aware content or page change is complete when:
- the route structure still matches the current information architecture, or this contract is updated with the new one
- page copy is stored in the correct data module
- bilingual values are added in the current `l10n` format when user-facing text changes
- service overview pages still derive their cards/content from the correct service definitions
- service detail pages still conform to the `ServiceLayout` pattern unless an intentional new pattern is introduced
- navigation, related services, and sitemap remain in sync
- metadata still flows through `BaseLayout`
- the contact form and its documented submission path still match reality
