import { l10n } from "./l10n";
import { ui, whatsappLink } from "./ui";

export const page = {
  seo: {
    title: l10n("Contact | ChiCa Hondenschool", "Contact | ChiCa Dog School"),
    description: l10n(
      "Neem contact op met ChiCa Hondenschool voor hondenschool en oppas- en uitlaatservice.",
      "Contact ChiCa Dog School for dog training and pet sitting & walking services.",
    ),
  },
  hero: {
    title: l10n("Contact", "Contact"),
    lead: l10n(
      "Heb je een vraag over training, oppas of uitlaatservice? Laat je gegevens achter, dan neem ik zo snel mogelijk contact met je op.",
      "Do you have a question about training, pet sitting, or walking service? Leave your details and I will contact you as soon as possible.",
    ),
  },
  formSectionTitle: l10n("Stuur een bericht", "Send a message"),
  directSectionTitle: l10n("Direct contact", "Direct contact"),
  bookingHelp: l10n(
    "Liever direct plannen? Via de boekingsagenda kun je meteen een traject of kennismaking kiezen.",
    "Prefer to plan directly? In the booking calendar you can immediately choose a program or introduction.",
  ),
  bookingCta: {
    label: l10n("Boek direct", "Book now"),
    href: ui.links.bookingUrl,
  },
  contactDetails: {
    phoneLabel: l10n("Telefoon", "Phone"),
    emailLabel: l10n("E-mail", "Email"),
    serviceAreaLabel: l10n("Werkgebied", "Service area"),
    kvkLabel: l10n("KvK", "Chamber of Commerce"),
    phone: ui.contact.phone,
    phoneHref: l10n(whatsappLink, whatsappLink),
    email: ui.contact.email,
    emailHref: l10n(
      `mailto:${ui.contact.email.nl}`,
      `mailto:${ui.contact.email.en}`,
    ),
    serviceArea: ui.contact.serviceArea,
    kvk: ui.contact.kvk,
  },
} as const;
