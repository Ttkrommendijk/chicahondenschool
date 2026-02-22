import type { L10n } from "./l10n";
import { l10n } from "./l10n";
import { ui, whatsappLink } from "./ui";

export type ContactLink = {
  label: L10n;
  href: string;
};

export const contactLinks = [
  {
    label: l10n("WhatsApp", "WhatsApp"),
    href: whatsappLink,
  },
  {
    label: l10n("E-mail", "Email"),
    href: `mailto:${ui.contact.email.nl}`,
  },
] satisfies ContactLink[];
