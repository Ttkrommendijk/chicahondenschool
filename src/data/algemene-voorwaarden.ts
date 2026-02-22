import { l10n } from "./l10n";

export const page = {
  seo: {
    title: l10n(
      "Algemene voorwaarden | ChiCa Hondenschool",
      "Terms and conditions | ChiCa Dog School",
    ),
    description: l10n("Algemene voorwaarden.", "Terms and conditions."),
  },
  title: l10n("Algemene voorwaarden", "Terms and conditions"),
  lead: l10n(
    "Algemene voorwaarden van ChiCa Hondenschool.",
    "Terms and conditions of ChiCa Dog School.",
  ),
} as const;
