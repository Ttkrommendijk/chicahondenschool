## Development Rules (General)

These rules apply to all development work in this repository. Treat them as default constraints unless a task explicitly overrides them.

## Contract Compliance Rule

All development must comply with:

- AI_CONTRACT.md (content, SEO, CTA, tone, narrative)
- development_rules.md (structure, data rules, safety rules)

If a requested change violates AI_CONTRACT.md:
- The AI must flag the violation.
- Explain the impact (SEO, structure, CTA flow, narrative break).
- Ask for confirmation before proceeding.

Neither document overrides the other.
They are complementary and must both be respected.

---

### 1) Do not change structure unless explicitly asked
- Never move, rename, delete, or reorganize folders/files unless the user explicitly requests it.
- Even if you *think* a structural change is an improvement, do not do it by default.
- If a structural change could be beneficial, propose it first and **ask for confirmation**.
- If the change involves **deleting** anything:
  - Always ask for confirmation first
  - Explain the real risks clearly (broken routes, broken imports, SEO issues, lost assets, deployment impact)
  - Prefer non-destructive alternatives (deprecate, keep old paths, redirect, leave placeholder)

---

### 2) Reuse components whenever possible
- Prefer composing pages from reusable components in `src/components/`.
- Do not duplicate markup across pages if it can be extracted into a component.
- When building new UI sections, first check if an existing component can be reused or extended.

---

### 3) Maintain flexibility when requested
- Build components and data models so they can be adjusted without rewriting the page.
- Use data-driven rendering (arrays/objects) where that improves maintainability.
- Avoid over-fitting to a single page if the user hints it will be reused elsewhere.

---

### 4) All text lives in `src/data` as `.ts` files
- All visible text must be stored in `src/data/**/*.ts`.
- Pages and components must import text from the data layer.
- No hardcoded text in `.astro`, `.html`, or components (except truly generic UI strings like “OK” if explicitly approved—otherwise also move them to data).

---

### 5) No hardcoded text in HTMLs / Astro pages
- `.astro` files and components should only reference text via imported data objects.
- Headings, paragraphs, bullet items, labels, button text, and helper text must all come from the data files.

---

### 6) CTA rules (Call To Action)
- Links can be determined per CTA (data-driven).
- Every CTA must have its own translation entry (even if multiple CTAs currently share the same label).
- CTA objects should include:
  - label (translation key / string from data)
  - href (internal or external)
  - optional: target / isExternal
- External links may open in a new tab/window:
  - use `target="_blank"` and `rel="noopener noreferrer"`
  - decide per CTA (don’t force globally)

---

### 7) Standard layout belongs in `src/layouts`
- Shared page wrappers (header/footer, meta tags, main grid, global spacing) belong in `src/layouts/`.
- Pages in `src/pages` should use a layout rather than re-implementing global structure.
- Layouts should not contain hardcoded text; they should consume data where needed (e.g., nav labels, footer text).

---

### 8) Keep routing predictable
- Pages live in `src/pages` and follow file-based routing.
- Do not introduce new routes or move existing routes unless explicitly asked.
- Route structure must stay consistent with the intended information architecture.

---

### 9) Data-first approach
- Prefer structured objects/arrays in `src/data` for:
  - service features
  - FAQs
  - testimonials
  - CTAs
  - section content
- Pages should render from those structures, not embed content inline.

---

### 10) Safety checks before destructive actions
Before anything that could break the site (deleting, renaming, moving, large refactors):
- Stop and ask for confirmation.
- Explain what can break and why.
- Suggest safer alternatives (e.g., keep old file, add redirect, leave stub component).

---
