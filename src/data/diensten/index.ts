import type { L10n } from "../l10n";
import { l10n } from "../l10n";
import { ui } from "../ui";
import { services as hondenschoolServices } from "./hondenschool";
import { services as oppasServices } from "./oppas-uitlaatservice";

export type ServiceListItem = {
  slug: string;
  href: string;
  title: L10n;
  excerpt: L10n;
  buttonLabel: L10n;
};

export const serviceList: ServiceListItem[] = [
  ...hondenschoolServices.map((service) => ({
    slug: service.slug,
    href: service.href,
    title: service.shortTitle,
    excerpt: service.shortDescription,
    buttonLabel: ui.common.viewService,
  })),
  ...oppasServices.map((service) => ({
    slug: service.slug,
    href: service.href,
    title: service.shortTitle,
    excerpt: service.shortDescription,
    buttonLabel: ui.common.viewService,
  })),
];

export const dienstenIndexPage = {
  seo: {
    title: l10n("Diensten | ChiCa Hondenschool", "Services | ChiCa Dog School"),
    description: l10n(
      "Overzicht van alle diensten van ChiCa Hondenschool, inclusief hondentraining en oppas- en uitlaatservice.",
      "Overview of all ChiCa Dog School services, including dog training and pet sitting and walking.",
    ),
  },
  hero: {
    title: l10n("Onze diensten", "Our services"),
    subtitle: l10n(
      "Kies de begeleiding die past bij jou en je hond.",
      "Choose the guidance that fits you and your dog.",
    ),
  },
} as const;
