import { l10n } from "../../l10n";
import { ui } from "../../ui";

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
      "Kies een bundel die past bij jouw planning en de ondersteuning die je hond nodig heeft.",
      "Choose a bundle that fits your schedule and the support your dog needs.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Flexibel plannen met een vaste, vertrouwde aanpak.",
      "Flexible planning with a consistent trusted approach.",
    ),
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Met de strippenkaart houd je ruimte voor wisselende weken zonder dat je begeleiding versnipperd raakt. Je plant flexibel en behoudt tegelijkertijd een duidelijke lijn voor je hond.",
      "With the punch card, you keep room for changing weeks without fragmented guidance. You plan flexibly while keeping a clear line for your dog.",
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
  strippenkaart: {
    selectorLabel: l10n("Kies je bundel", "Choose your bundle"),
    ctaLabel: l10n("Koop strippenkaart", "Buy a pass"),
    unavailableLabel: l10n("Binnenkort beschikbaar", "Available soon"),
    bundles: [
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
  pricing: {
    title: l10n("Prijzen", "Pricing"),
  },
  related: ["kennismaking", "priveles-aan-huis", "5-privelessen-op-maat"],
} as const;
