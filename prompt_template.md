# ZED — CONTINUATION PATCH (STANDARD TEMPLATE)

Execute development_rules.md.
Execute AI_CONTRACT.md.

PROBLEM
<Describe what is wrong right now. What is broken / missing / inconsistent? Include symptoms, error messages, links, screenshots, and context.>

GOAL
<Describe the intended outcome in plain terms. What should the user see/experience? What must be true when done?>

SCOPE
- In scope:
  - <Bullet list of what the agent MUST do>
- Out of scope:
  - <Bullet list of what the agent MUST NOT do>

FILES
<List exact files to modify/create. If unknown, list likely files but instruct the agent to keep changes minimal.>
- <path/to/file.ext> (update|create)
- <path/to/file.ext> (update|create)

REQUIRED CHANGES
1. <Specific change #1>
2. <Specific change #2>
3. <Specific change #3>

DATA & TRANSLATIONS RULES (MANDATORY)
- All visible text must be stored in `src/data/**/*.ts`.
- No hardcoded text in `.astro`/HTML/components.
- Every CTA must have its own translation entry (no shared CTA labels unless explicitly requested).
- CTA links are data-driven and determined per CTA.
- External links may open in a new tab using `target="_blank"` + `rel="noopener noreferrer"` when appropriate.

COMPONENTS & LAYOUT RULES (MANDATORY)
- Reuse existing components where possible; avoid duplication.
- Standard page layout belongs in `src/layouts/`.
- Pages should compose components + data; keep pages thin.

STRUCTURE SAFETY RULES (MANDATORY)
- Do not make structural changes unless explicitly requested.
- If a structural change is necessary, STOP and ask for confirmation, explaining real risks.
- Never delete files/folders without explicit confirmation.
- Never move/rename routes without explicit confirmation.

QUALITY RULES
- Keep changes minimal and scoped.
- Prefer small, reversible changes.
- Keep code consistent with existing project patterns.
- Ensure build passes.

ACCEPTANCE CRITERIA
- <Bullet list of verifiable outcomes>
- No structure violations.
- No hardcoded text violations.
- Build succeeds (`npm run build`).

OUTPUT FORMAT
Apply changes in-place.
Do NOT output full files unless explicitly requested.
Return only a brief summary:
- Files changed
- What was done
- Any follow-ups needed
