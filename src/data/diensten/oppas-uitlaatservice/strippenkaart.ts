import { l10n } from "../../l10n";
import { ui } from "../../ui";
import { formatFromPrice, formatPrice } from "../../price";

export const dienst = {
  slug: "strippenkaart",
  checkoutUrl: ui.links.bookingUrl,
  seo: {
    title: l10n(
      "Strippenkaart | ChiCa Hondenschool",
      "Punch card | ChiCa Dog School",
    ),
    description: l10n(
      "Flexibele uuropties voor oppas- en uitlaatservice met persoonlijke begeleiding.",
      "Flexible hour options for pet sitting and walking with personal guidance.",
    ),
  },
  hero: {
    title: l10n("Strippenkaart", "Punch card"),
    subtitle: l10n(
      "Kies het aantal uur voor de periode dat jij en je hond de ondersteuning nodig hebben. U plant zelf flexibel in onze agenda wanneer je ons het hardst nodig heeft.",
      "Choose the amount of hours for th eperiod tha you and your dog needs support. You plan flexibly in our schedule when you need it the most.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Plan flexibel voor een betrouwbare oppas in Den Haag, Voorschoten en omstreken.",
      "Plan flexibly for a reliable pet sitter in Den Haag, Voorschoten and surrounding areas.",
    ),
    image: {
      src: "/images/services/strippenkaart.webp",
      alt: l10n(
        "Strippenkaart voor oppas- en uitlaatservice",
        "Punch card for pet sitting and walking service",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Met de strippenkaart kun je flexibel oppas inplannen in weken waarin je extra ondersteuning nodig hebt. Je hond blijft vertrouwd met dezelfde professionele oppas, terwijl jij de vrijheid hebt om per week te bepalen wanneer opvang nodig is.",
      "With the punch card, you can schedule dog sitting flexibly during weeks when you need extra support. Your dog stays familiar with the same professional sitter, while you have the freedom to decide each week when care is needed.",
    ),
    highlight: l10n(
      "Flexibiliteit zonder in te leveren op kwaliteit.",
      "Flexibility without compromising quality.",
    ),
    quote: {
      text: l10n(
        "De strippenkaart gaf ons precies de flexibiliteit die we zochten.",
        "The punch card gave us exactly the flexibility we needed.",
      ),
      byline: l10n("Hondeneigenaar", "Dog owner"),
    },
  },
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "We stemmen de begeleiding af op jouw hond, jouw situatie en jouw doel.",
        "We tailor the guidance to your dog, your situation, and your goal.",
      ),
      l10n(
        "Je krijgt duidelijke oefeningen die je direct in de praktijk kunt toepassen.",
        "You get clear exercises you can apply directly in practice.",
      ),
      l10n(
        "Na iedere les weet je precies welke volgende stap je thuis kunt zetten.",
        "After each lesson, you know exactly which next step to take at home.",
      ),
    ],
    ctaLabel: l10n(
      "Stuur een bericht met je vragen",
      "Send a message with your questions",
    ),
    ctaHref: ui.links.whatsappUrl,
  },
  benefits: {
    items: [
      l10n("Keuze uit meerdere uurbundels", "Choice of multiple hour bundles"),
      l10n(
        "1-op-1 begeleiding aan huis of in je directe omgeving",
        "1-on-1 guidance at home or in your direct area",
      ),
      l10n(
        "Praktische planning op jouw agenda",
        "Practical planning around your schedule",
      ),
      l10n("Korte terugkoppeling per moment", "Short feedback per session"),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je flexibel wilt kunnen plannen",
        "you want flexibility in planning",
      ),
      l10n(
        "je tijdelijk extra ondersteuning nodig hebt",
        "you need temporary extra support",
      ),
      l10n(
        "je hond baat heeft bij een vaste begeleider",
        "your dog benefits from one consistent handler",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Kiezen", "Choose"),
        text: l10n(
          "Je kiest de bundel die past.",
          "You choose the bundle that fits.",
        ),
      },
      {
        title: l10n("Plannen", "Plan"),
        text: l10n("We plannen momenten in.", "We schedule sessions."),
      },
      {
        title: l10n("Uitvoeren", "Execute"),
        text: l10n(
          "Je hond krijgt 1-op-1 begeleiding.",
          "Your dog gets 1-on-1 guidance.",
        ),
      },
      {
        title: l10n("Terugkoppelen", "Feedback"),
        text: l10n(
          "Je ontvangt korte terugkoppeling.",
          "You receive short feedback.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "De strippenkaart gaf ons precies de flexibiliteit die we zochten.",
      "The punch card gave us exactly the flexibility we needed.",
    ),
    byline: l10n("Hondeneigenaar", "Dog owner"),
  },
  selector: {
    selectorLabel: l10n("Kies je bundel", "Choose your bundle"),
    ctaLabel: l10n("Koop strippenkaart", "Buy a pass"),
    unavailableLabel: l10n("Binnenkort beschikbaar", "Available soon"),
    options: [
      {
        id: "kennismaking",
        label: l10n("Kennismaking", "Introduction session"),
        price: formatPrice(40),
        href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
        external: true,
      },
      {
        id: "3h",
        label: l10n("Strippenkaart 3 uur", "3-hour pass"),
        price: formatPrice(150),
        href: "https://chica-hondenschool.trainin.app/checkout/P2A2Y9",
        external: true,
      },
      {
        id: "6h",
        label: l10n("Strippenkaart 6 uur", "6-hour pass"),
        price: formatPrice(270),
        href: "https://chica-hondenschool.trainin.app/checkout/PGNYQN",
        external: true,
      },
      {
        id: "12h",
        label: l10n("Strippenkaart 12 uur", "12-hour pass"),
        price: formatPrice(525),
        href: "https://chica-hondenschool.trainin.app/checkout/P8PJ9J",
        external: true,
      },
    ],
  },
  pricing: {
    title: l10n("Prijzen", "Pricing"),
  },
  overview: {
    priceLabel: formatFromPrice(150),
  },
  related: ["kennismaking", "priveles-aan-huis", "priveles-op-locatie"],
} as const;
