import { l10n } from "./l10n";

export const page = {
  seo: {
    title: l10n("Privacy | ChiCa Hondenschool", "Privacy | ChiCa Dog School"),
    description: l10n("Privacyverklaring.", "Privacy statement."),
  },
  title: l10n("Privacy", "Privacy"),
  lead: l10n(
    "Privacyverklaring van ChiCa Hondenschool.",
    "Privacy statement of ChiCa Dog School.",
  ),
} as const;
