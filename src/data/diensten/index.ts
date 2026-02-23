import type { L10n } from "../l10n";
import { l10n } from "../l10n";
import { ui } from "../ui";
import { services as hondenschoolServices } from "./hondenschool/index";

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
      "Kies eerst de categorie die past bij jouw vraag.",
      "First choose the category that fits your request.",
    ),
  },
  categories: [
    {
      slug: "hondenschool",
      href: "/diensten/hondenschool/",
      title: l10n("Hondenschool", "Dog training"),
      excerpt: l10n(
        "Prive hondentraining met 6 trajecten, van priveles tot speuren en detectie.",
        "Private dog training with 6 tracks, from private lessons to nose work and detection.",
      ),
      buttonLabel: l10n("Bekijk hondenschool", "View dog training"),
    },
    {
      slug: "oppas-uitlaatservice",
      href: "/diensten/oppas-uitlaatservice/",
      title: l10n("Oppas- & uitlaatservice", "Pet sitting & walking"),
      excerpt: l10n(
        "Individuele oppas en uitlaatservice, inclusief kennismaking en strippenkaart.",
        "Individual pet sitting and walking, including introduction and punch card options.",
      ),
      buttonLabel: l10n(
        "Bekijk oppas- en uitlaatservice",
        "View pet sitting & walking",
      ),
    },
  ],
} as const;
