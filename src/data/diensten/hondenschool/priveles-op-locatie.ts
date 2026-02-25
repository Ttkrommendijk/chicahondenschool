import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "priveles-op-locatie",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P6QNWO",
  seo: {
    title: l10n(
      "Priveles op locatie | ChiCa Hondenschool",
      "Private lesson on location | ChiCa Dog School",
    ),
    description: l10n(
      "Praktische 1-op-1 begeleiding op locatie.",
      "Practical 1-on-1 guidance on location.",
    ),
  },
  hero: {
    title: l10n("1 priveles op locatie", "1 private lesson on location"),
    subtitle: l10n(
      "Samen oefenen waar jij en je hond het buiten echt nodig hebben.",
      "Practice together where you and your dog truly need it outdoors.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Gericht op wandelen, prikkels en samenwerking in de regios Den Haag, Rijswijk en Voorschoten.",
      "Focused on walks, stimuli, and cooperation in the regions of Den Haag, Rijswijk, and Voorschoten.",
    ),
    image: {
      src: "/images/services/prive-op-locatie.jpg",
      alt: l10n(
        "Privéles op locatie tijdens een wandeling",
        "Private lesson on location during a walk",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Buitengedrag vraagt timing en duidelijke keuzes. Op locatie krijg je directe coaching in realistische situaties, zodat je sneller grip krijgt tijdens wandelingen.",
      "Outdoor behavior requires timing and clear choices. On location you receive direct coaching in realistic situations, helping you gain control faster during walks.",
    ),
    highlight: l10n(
      "We trainen niet in theorie, maar in jouw dagelijkse praktijk.",
      "We do not train in theory, but in your daily reality.",
    ),
    quote: {
      text: l10n(
        '"Eindelijk wist ik wat ik buiten moest doen op lastige momenten."',
        '"Finally I knew what to do outdoors in difficult moments."',
      ),
      byline: l10n("Hondeneigenaar, Den Haag", "Dog owner, The Hague"),
    },
  },
  benefits: {
    items: [
      l10n(
        "1-op-1 les op een passende locatie",
        "1-on-1 lesson at a suitable location",
      ),
      l10n(
        "Gerichte begeleiding bij afleiding en spanning",
        "Focused guidance with distractions and tension",
      ),
      l10n(
        "Praktische technieken voor wandelen",
        "Practical techniques for walking",
      ),
      l10n(
        "Concreet vervolgplan voor zelfstandig oefenen",
        "Concrete follow-up plan for independent practice",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je buiten tegen gedrag aanloopt",
        "you face behavior challenges outdoors",
      ),
      l10n(
        "je begeleiding wilt in realistische prikkels",
        "you want guidance in realistic stimuli",
      ),
      l10n(
        "je praktisch en doelgericht wilt trainen",
        "you want practical, goal-focused training",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Afstemmen", "Alignment"),
        text: l10n(
          "We kiezen een passende locatie.",
          "We choose a suitable location.",
        ),
      },
      {
        title: l10n("Observeren", "Observe"),
        text: l10n(
          "We bekijken gedrag in context.",
          "We assess behavior in context.",
        ),
      },
      {
        title: l10n("Trainen", "Train"),
        text: l10n(
          "Je oefent met directe feedback.",
          "You practice with direct feedback.",
        ),
      },
      {
        title: l10n("Doorpakken", "Continue"),
        text: l10n(
          "Je krijgt duidelijke vervolgacties.",
          "You receive clear next actions.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Eindelijk wist ik wat ik buiten moest doen op lastige momenten.”",
      '"Finally I knew what to do outdoors in difficult moments."',
    ),
    byline: l10n("Hondeneigenaar, Den Haag", "Dog owner, The Hague"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 65,-", "EUR 65"),
    metaLines: [
      l10n("60 minuten", "60 minutes"),
      l10n("Op locatie", "On location"),
    ],
    options: [
      {
        label: l10n(
          "Boek in Den Haag / Rijswijk",
          "Book in Den Haag / Rijswijk",
        ),
        href: "https://chica-hondenschool.trainin.app/checkout/P6QNWO",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/PGQXMV",
        external: true,
      },
    ],
  },
  related: ["priveles-aan-huis", "5-privelessen-op-maat", "detectie"],
} as const;
