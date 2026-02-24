# Chica Hondenschool Website

Official website for **Chica Hondenschool**, built with Astro and deployed automatically to Hostinger.

This repository contains the full source code, structured content, and deployment configuration for the website.

---

# 🚀 Tech Stack

- Astro (static site generator)
- Node 20
- Static HTML output
- GitHub Actions (CI/CD)
- FTP deployment to Hostinger

---

# 📂 Project Structure

Below is the simplified structure of the project:

```text
/
├── public/                     # Static files served as-is
│   └── favicon.svg
│
├── src/
│   ├── assets/                  # Images and design assets
│   ├── components/              # Reusable UI components
│   ├── layouts/                 # Page layout wrappers
│   ├── pages/                   # Route-based pages
│   │   ├── index.astro          # Homepage
│   │   └── diensten/
│   │       ├── oppas-uitlaatservice/
│   │       │   └── index.astro
│   │       └── hondenschool/
│   │           └── index.astro
│   └── data/                    # Structured content & translations
│
├── scripts/                     # Utility or deployment scripts
├── package.json
└── astro.config.mjs
```

---

## 🧭 Routing (How Pages Are Generated)

Astro uses **file-based routing**:

| URL | File |
|------|------|
| `/` | `src/pages/index.astro` |
| `/diensten/oppas-uitlaatservice/` | `src/pages/diensten/oppas-uitlaatservice/index.astro` |
| `/diensten/hondenschool/` | `src/pages/diensten/hondenschool/index.astro` |

Each `.astro` file automatically becomes a route.

---

# 📁 The `data` Folder (Content & Translations)

All structured content and text used on the website is stored inside:

```
src/data/
```

This keeps content separate from layout and styling.

## Why this matters

- Content is centralized
- Text can be reused across components
- Pages remain clean and structured
- Future multilingual support becomes easy

## How It Works

The `data` files export structured objects, for example:

```js
export const hondenschool = {
  heroTitle: "Waarom kiezen voor Chica Hondenschool?",
  heroText: "Wij werken met positieve training...",
  sections: [
    {
      title: "Persoonlijke aandacht",
      content: "Elke hond krijgt individuele begeleiding..."
    }
  ]
}
```

Then inside a page:

```astro
---
import { hondenschool } from "../../data/hondenschool";
---

<h1>{hondenschool.heroTitle}</h1>
<p>{hondenschool.heroText}</p>
```

This means:

- All visible text originates from `data`
- Layout and structure stay inside `.astro` files
- Changing content does not require editing layout files

If multilingual support is added later, multiple language files can exist inside `/data` and be switched dynamically.

---

# 🛠 Development

All commands are executed from the root directory.

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

Local development runs at:

```
http://localhost:4321
```

## Build production version

```bash
npm run build
```

This generates static production files in:

```
/dist
```

---

# 🚀 Deployment (Automatic via GitHub)

Deployment is fully automated using **GitHub Actions**.

## Trigger

Deployment runs automatically when:

- Code is pushed to the `main` branch
- Or manually triggered from the GitHub Actions tab

---

## Deployment Flow

1. GitHub checks out the repository
2. Node 20 is installed
3. Dependencies are installed (`npm ci`)
4. Astro builds the project (`npm run build`)
5. The contents of `/dist` are uploaded via FTP to Hostinger

---

## What Gets Deployed

Only the contents of:

```
/dist
```

are uploaded to the server.

The source files (`src`, `package.json`, etc.) are never uploaded to production.

---

## FTP Configuration

GitHub stores FTP credentials securely using repository secrets:

- `FTP_HOST`
- `FTP_USER`
- `FTP_PASS`

These credentials are not stored in the repository.

The workflow uploads files to:

```
/public_html/
```

If the FTP user is already scoped to `public_html`, the workflow uses:

```yaml
server-dir: /
```

to avoid creating `public_html/public_html`.

---

# 🔁 Deployment Summary

```
git push origin main
        ↓
GitHub Action runs
        ↓
Astro builds static site
        ↓
Files in /dist uploaded via FTP
        ↓
Website is live
```

---

# 📌 Important Notes

- Never upload the entire repository — only `/dist`
- Always verify the correct `server-dir`
- Content changes should happen in `/src/data`
- Layout and styling should remain in components/layouts

---

# 📚 Astro Documentation

https://docs.astro.build
