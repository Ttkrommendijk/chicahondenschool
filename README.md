# Chica Hondenschool Website

Official website for **ChiCa Hondenschool**, built with Astro.

This repository contains the website source, structured content, shared UI components, localization helpers, utility scripts, and deployment-related files.

## Tech Stack

- Astro 5
- Tailwind CSS
- TypeScript
- Static site output for the public site
- PHP mail handler in `public/contact-submit.php`
- Node-based utility scripts in `scripts/`

## Current Site Structure

### Main routes
- `/`
- `/contact/`
- `/over/`
- `/reviews/`
- `/privacy/`
- `/algemene-voorwaarden/`
- `/diensten/hondenschool/`
- `/diensten/oppas-uitlaatservice/`

### Service detail routes
- `/diensten/hondenschool/puppycursus/`
- `/diensten/hondenschool/basiscursus/`
- `/diensten/hondenschool/priveles-aan-huis/`
- `/diensten/hondenschool/priveles-op-locatie/`
- `/diensten/hondenschool/fun-speuren-neuswerk/`
- `/diensten/hondenschool/detectie/`
- `/diensten/hondenschool/sport-en-spel/`
- `/diensten/oppas-uitlaatservice/kennismaking/`
- `/diensten/oppas-uitlaatservice/strippenkaart/`

Astro uses file-based routing, so each `.astro` file in `src/pages/` becomes a route.

## Project Layout

```text
/
|-- public/                        # Static assets and server-served files
|   |-- contact-submit.php         # Active contact form endpoint
|   `-- images/
|-- scripts/                       # Validation and content utility scripts
|-- src/
|   |-- assets/                    # Design assets
|   |-- components/                # Reusable UI and page sections
|   |-- data/                      # Structured page content and shared copy
|   |   |-- diensten/              # Service category and detail definitions
|   |   `-- ui.ts                  # Shared UI labels, links, contact data
|   |-- i18n/                      # Localization runtime and client helpers
|   |-- layouts/                   # Shared page layouts
|   `-- pages/                     # Route files
|-- AI_CONTRACT.md
|-- development_rules.md
|-- package.json
`-- astro.config.mjs
```

## Content And Data Rules

Visible copy is data-driven.

- Page-level content lives in `src/data/*.ts`
- Service content lives in `src/data/diensten/**`
- Shared UI labels, navigation labels, footer links, contact values, and external URLs live in `src/data/ui.ts`
- Pages and components should render imported data instead of owning editorial copy

Important data entry points:

- `src/data/home.ts`
- `src/data/contact.ts`
- `src/data/over.ts`
- `src/data/reviews.ts`
- `src/data/privacy.ts`
- `src/data/algemene-voorwaarden.ts`
- `src/data/diensten/index.ts`
- `src/data/diensten/hondenschool/index.ts`
- `src/data/diensten/oppas-uitlaatservice/index.ts`

## Service Page Architecture

The site has two service layers:

- category overview pages
- individual service detail pages

### Overview pages

The overview pages are custom compositions that pull structured content from category data files:

- `src/pages/diensten/hondenschool/index.astro`
- `src/pages/diensten/oppas-uitlaatservice/index.astro`

Those pages use shared components such as:

- `Hero.astro`
- `ProcessFlow.astro`
- `ServiceCards.astro`
- `FaqAccordion.astro`
- `CTASection.astro`

### Service detail pages

Each individual service page is intentionally thin. The route file imports one `dienst` definition and renders `ServiceLayout`.

Example pattern:

```astro
---
import ServiceLayout from "../../../../components/ServiceLayout.astro";
import { dienst } from "../../../../data/diensten/hondenschool/puppycursus";
import { resolveLangFromUrl } from "../../../../i18n";

const lang = resolveLangFromUrl(Astro.url);
---

<ServiceLayout dienst={dienst} lang={lang} />
```

The reusable detail-page system is driven by:

- `src/components/ServiceLayout.astro`
- `src/components/PricingSidebar.astro`
- `src/components/RelatedServices.astro`

Overview pages also derive cards and related content from the same service definitions, so service data should stay centralized.

## Localization

Localization is already implemented.

- Supported languages: Dutch and English
- Language selection uses the `lang` query param: `?lang=nl` or `?lang=en`
- Dutch is the default fallback
- Language is also persisted in local storage

Core files:

- `src/data/l10n.ts`
- `src/i18n/index.ts`
- `src/i18n/runtime.ts`
- `src/i18n/client.ts`

Translation pattern:

```ts
import { l10n } from "./l10n";

export const example = l10n("Nederlands", "English");
```

Rendering pattern:

- resolve the current language with `resolveLangFromUrl(Astro.url)`
- render values with `localize(...)`
- use `data-i18n` and `data-i18n-attr` where client-side language switching must update text or attributes

## Layout And Shared Components

### Layouts

- `src/layouts/BaseLayout.astro`
  - standard public-page wrapper
  - owns meta title, description, canonical, header, footer, skip link, floating WhatsApp button, and i18n client bootstrapping
- `src/layouts/ContentPageLayout.astro`
  - used for simple legal/content pages

### Shared components

Commonly reused components include:

- `Hero.astro`
- `CTASection.astro`
- `CTAButton.astro`
- `ServiceCards.astro`
- `ProcessFlow.astro`
- `FaqAccordion.astro`
- `ContactForm.astro`
- `Header.astro`
- `Footer.astro`
- `LanguageSwitch.astro`

Prefer reusing these before introducing page-specific duplicates.

## Contact Form Architecture

The active contact flow is a hybrid Astro + PHP setup.

### Front end

- Page: `src/pages/contact/index.astro`
- Form component: `src/components/ContactForm.astro`
- Form option groups: `src/data/contact.ts`

The form:

- validates required fields on the client
- validates email format
- enforces a minimum message length
- uses a honeypot field
- uses a minimum-fill-time anti-spam check
- requires consent before submit is enabled

### Submission path

The rendered form posts to:

```text
/contact-submit.php
```

### Server side

The active mail endpoint is:

- `public/contact-submit.php`

That endpoint expects:

- `../vendor/autoload.php`
- `../secrets.php`

There is also an Astro API route at `src/pages/api/contact.ts`, but the current form component does not submit to it.

## SEO And Metadata

Current SEO conventions:

- page and service SEO fields are defined in data files
- `BaseLayout.astro` outputs title, meta description, robots, and canonical tags
- canonical URLs are built from `src/data/site.ts`
- `src/pages/sitemap.xml.ts` builds the sitemap from static routes plus the shared service registry

Current limitation:

- Open Graph metadata is not yet part of the shared layout

## Development

Run commands from the project root.

### Install dependencies

```bash
npm install
```

### Start local development

```bash
npm run dev
```

Default local URL:

```text
http://localhost:4321
```

### Build

```bash
npm run build
```

### Preview build output

```bash
npm run preview
```

### Validate repo structure assumptions

```bash
npm run validate
```

Note: the current validator may fail if extra top-level directories exist in the repo, even if the site code itself is fine.

### Sync generated review image data

```bash
npm run sync:review-images
```

## Deployment Notes

This repo still contains deployment-related assumptions for a Hostinger-style `/public_html/` target, and the validator explicitly guards against accidental `public_html/public_html` nesting.

Important notes:

- deploy only built output, not the whole repository
- keep PHP/public assets in `public/`
- verify the target directory carefully when using FTP-style deployment

The `package.json` currently includes a `deploy` script pointing to `scripts/deploy-ftp.mjs`, but that file is not present in this repo snapshot. Treat the deploy script reference as incomplete until the script is restored or the deployment flow is redefined.

## Working Rules

Before making structural or content changes, read:

- `AI_CONTRACT.md`
- `development_rules.md`

These two documents define the current content, structure, and implementation constraints for the project.

## Astro Documentation

https://docs.astro.build
