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
      "“De strippenkaart gaf ons precies de flexibiliteit die we zochten.”",
      '"The punch card gave us exactly the flexibility we needed."',
    ),
    byline: l10n("Hondeneigenaar", "Dog owner"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("Vanaf EUR 70,00", "From EUR 70.00"),
    metaLines: [
      l10n("1, 3, 5 of 10 uur", "1, 3, 5 or 10 hours"),
      l10n("Aan huis / directe omgeving", "At home / direct area"),
    ],
    options: [
      {
        label: l10n("Boek strippenkaart", "Book punch card"),
        href: ui.links.bookingUrl,
        external: true,
        note: l10n(
          "1, 3, 5 of 10 uur mogelijk in overleg.",
          "1, 3, 5, or 10 hours available by arrangement.",
        ),
      },
    ],
  },
  related: ["kennismaking", "priveles-aan-huis", "5-privelessen-op-maat"],
} as const;




