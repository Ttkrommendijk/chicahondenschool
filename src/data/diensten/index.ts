import type { L10n } from "../l10n";
import { l10n } from "../l10n";
import { dienst as dienst5Privelessen } from "./hondenschool/5-privelessen-op-maat";
import { dienst as dienstPrivelesAanHuis } from "./hondenschool/priveles-aan-huis";
import { dienst as dienstPrivelesOpLocatie } from "./hondenschool/priveles-op-locatie";
import { dienst as dienstFunSpeuren } from "./hondenschool/fun-speuren-neuswerk";
import { dienst as dienstDetectie } from "./hondenschool/detectie";
import { dienst as dienstSportEnSpel } from "./hondenschool/sport-en-spel";
import { dienst as dienstKennismaking } from "./oppas-uitlaatservice/kennismaking";
import { dienst as dienstStrippenkaart } from "./oppas-uitlaatservice/strippenkaart";

export type ServiceCta =
  | { kind: "direct"; label: L10n; href: string; external?: boolean }
  | {
      kind: "location";
      label: L10n;
      options: { label: L10n; href: string; external?: boolean }[];
    }
  | {
      kind: "selector";
      label: L10n;
      selectorLabel: L10n;
      options: {
        id: string;
        label: L10n;
        price?: L10n;
        href?: string;
        external?: boolean;
      }[];
      unavailableLabel: L10n;
    };

export type ServiceCard = {
  slug: string;
  category: "hondenschool" | "oppas-uitlaatservice";
  href: string;
  title: L10n;
  excerpt: L10n;
  priceBadge?: L10n;
  cta: ServiceCta;
};

export const services: readonly ServiceCard[] = [
  {
    slug: dienstPrivelesOpLocatie.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienstPrivelesOpLocatie.slug}/`,
    title: dienstPrivelesOpLocatie.hero.title,
    excerpt: dienstPrivelesOpLocatie.persuasion.body,
    priceBadge: dienstPrivelesOpLocatie.pricing.priceText,
    cta: {
      kind: "location",
      label: l10n("Boek training", "Book training"),
      options: [
        {
          label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
          href: "https://chica-hondenschool.trainin.app/checkout/P6QNWO",
          external: true,
        },
        {
          label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
          href: "https://chica-hondenschool.trainin.app/activities/LG5554/1-priveles-in-voorschoten",
          external: true,
        },
      ],
    },
  },
  {
    slug: dienstPrivelesAanHuis.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienstPrivelesAanHuis.slug}/`,
    title: dienstPrivelesAanHuis.hero.title,
    excerpt: dienstPrivelesAanHuis.persuasion.body,
    priceBadge: dienstPrivelesAanHuis.pricing.priceText,
    cta: {
      kind: "location",
      label: l10n("Boek training", "Book training"),
      options: [
        {
          label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
          href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
          external: true,
        },
        {
          label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
          href: "https://chica-hondenschool.trainin.app/activities/LY666G/5-privelessen-op-maat-voorschoten-zh",
          external: true,
        },
      ],
    },
  },
  {
    slug: dienst5Privelessen.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienst5Privelessen.slug}/`,
    title: dienst5Privelessen.hero.title,
    excerpt: dienst5Privelessen.persuasion.body,
    priceBadge: dienst5Privelessen.pricing.priceText,
    cta: {
      kind: "location",
      label: l10n("Boek training", "Book training"),
      options: [
        {
          label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
          href: "https://chica-hondenschool.trainin.app/checkout/PLONRJ",
          external: true,
        },
        {
          label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
          href: "https://chica-hondenschool.trainin.app/activities/LG5554/1-priveles-in-voorschoten",
          external: true,
        },
      ],
    },
  },
  {
    slug: dienstFunSpeuren.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienstFunSpeuren.slug}/`,
    title: dienstFunSpeuren.hero.title,
    excerpt: dienstFunSpeuren.persuasion.body,
    priceBadge: dienstFunSpeuren.pricing.priceText,
    cta: {
      kind: "location",
      label: l10n("Boek training", "Book training"),
      options: [
        {
          label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
          href: "https://chica-hondenschool.trainin.app/checkout/P8RE4B",
          external: true,
        },
        {
          label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
          href: "https://chica-hondenschool.trainin.app/activities/LK222J/fun-speuren-voorschoten",
          external: true,
        },
      ],
    },
  },
  {
    slug: dienstDetectie.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienstDetectie.slug}/`,
    title: dienstDetectie.hero.title,
    excerpt: dienstDetectie.persuasion.body,
    priceBadge: dienstDetectie.pricing.priceText,
    cta: {
      kind: "location",
      label: l10n("Boek training", "Book training"),
      options: [
        {
          label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
          href: "https://chica-hondenschool.trainin.app/checkout/P89XKJ",
          external: true,
        },
        {
          label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
          href: "https://chica-hondenschool.trainin.app/activities/LBVWV6/strippenkaart-detectie-voorschoten",
          external: true,
        },
      ],
    },
  },
  {
    slug: dienstSportEnSpel.slug,
    category: "hondenschool",
    href: `/diensten/hondenschool/${dienstSportEnSpel.slug}/`,
    title: dienstSportEnSpel.hero.title,
    excerpt: dienstSportEnSpel.persuasion.body,
    priceBadge: dienstSportEnSpel.pricing.priceText,
    cta: {
      kind: "direct",
      label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
      href: "https://chica-hondenschool.trainin.app/checkout/P479WW",
      external: true,
    },
  },
  {
    slug: dienstKennismaking.slug,
    category: "oppas-uitlaatservice",
    href: `/diensten/oppas-uitlaatservice/${dienstKennismaking.slug}/`,
    title: dienstKennismaking.hero.title,
    excerpt: dienstKennismaking.persuasion.body,
    priceBadge: dienstKennismaking.pricing.priceText,
    cta: {
      kind: "direct",
      label: l10n("Boek kennismaking", "Book an introduction"),
      href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
      external: true,
    },
  },
  {
    slug: dienstStrippenkaart.slug,
    category: "oppas-uitlaatservice",
    href: `/diensten/oppas-uitlaatservice/${dienstStrippenkaart.slug}/`,
    title: dienstStrippenkaart.hero.title,
    excerpt: dienstStrippenkaart.persuasion.body,
    priceBadge: l10n("v.a. € 70,00", "from € 70.00"),
    cta: {
      kind: "selector",
      label: l10n("Koop strippenkaart", "Buy a pass"),
      selectorLabel: l10n("Kies je bundel", "Choose your bundle"),
      unavailableLabel: l10n("Binnenkort beschikbaar", "Available soon"),
      options: [
        {
          id: "kennismaking",
          label: l10n("Kennismaking", "Introduction session"),
          price: l10n("€ 40,00", "€ 40.00"),
          href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
          external: true,
        },
        {
          id: "1h",
          label: l10n("Strippenkaart 1 uur", "1-hour pass"),
          price: l10n("€ 70,00", "€ 70.00"),
          href: "https://chica-hondenschool.trainin.app/checkout/P2A2Y9",
          external: true,
        },
        {
          id: "3h",
          label: l10n("Strippenkaart 3 uur", "3-hour pass"),
          price: l10n("€ 150,00", "€ 150.00"),
        },
        {
          id: "5h",
          label: l10n("Strippenkaart 5 uur", "5-hour pass"),
          price: l10n("€ 225,00", "€ 225.00"),
          href: "https://chica-hondenschool.trainin.app/checkout/PGNYQN",
          external: true,
        },
        {
          id: "10h",
          label: l10n("Strippenkaart 10 uur", "10-hour pass"),
          price: l10n("€ 450,00", "€ 450.00"),
        },
      ],
    },
  },
] as const;

export const serviceList = services.map((service) => ({
  slug: service.slug,
  href: service.href,
  title: service.title,
  excerpt: service.excerpt,
}));

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
        "Privé hondentraining met 6 trajecten, van privéles tot speuren en detectie.",
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
