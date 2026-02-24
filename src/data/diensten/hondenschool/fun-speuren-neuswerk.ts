import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "fun-speuren-neuswerk",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P8RE4B",
  seo: {
    title: l10n(
      "Fun speuren / neuswerk | ChiCa Hondenschool",
      "Fun tracking / nose work | ChiCa Dog School",
    ),
    description: l10n(
      "Neuswerk met focus op concentratie, rust en samenwerking.",
      "Nose work focused on concentration, calmness, and cooperation.",
    ),
  },
  hero: {
    title: l10n("Fun speuren / neuswerk", "Fun tracking / nose work"),
    subtitle: l10n(
      "Speelse mentale uitdaging waarmee je hond leert focussen en jij leert begeleiden.",
      "Playful mental challenge where your dog learns focus and you learn guidance.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Positieve opbouw, stap voor stap.",
      "Positive progression, step by step.",
    ),
    image: {
      src: "/images/services/fun-speuren.jpg",
      alt: l10n(
        "Hond aan het speuren tijdens neuswerk",
        "Dog tracking during nose work",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Neuswerk sluit aan bij natuurlijk gedrag. Dat maakt het laagdrempelig, motiverend en tegelijk heel waardevol voor focus en balans in het dagelijks leven.",
      "Nose work aligns with natural behavior. That makes it approachable, motivating, and highly valuable for focus and balance in daily life.",
    ),
    highlight: l10n(
      "Meer rust door gerichte mentale inspanning.",
      "More calmness through focused mental exercise.",
    ),
    quote: {
      text: l10n(
        '"Onze hond werd rustiger en wij leerden beter samenwerken."',
        '"Our dog became calmer and we learned to cooperate better."',
      ),
      byline: l10n("Hondeneigenaar, Voorschoten", "Dog owner, Voorschoten"),
    },
  },
  benefits: {
    items: [
      l10n(
        "5 lessen met duidelijke opbouw",
        "5 lessons with clear progression",
      ),
      l10n("Praktische zoekoefeningen", "Practical search exercises"),
      l10n(
        "Persoonlijke begeleiding voor jou en je hond",
        "Personal guidance for you and your dog",
      ),
      l10n("Oefeningen om thuis te herhalen", "Exercises to repeat at home"),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n("je hond graag met zijn neus werkt", "your dog enjoys nose work"),
      l10n(
        "je training leuk en doelgericht wilt combineren",
        "you want training that is fun and goal-focused",
      ),
      l10n(
        "je focus en samenwerking wilt versterken",
        "you want to strengthen focus and cooperation",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Start", "Start"),
        text: l10n("We bepalen niveau en doelen.", "We set level and goals."),
      },
      {
        title: l10n("Opbouw", "Progression"),
        text: l10n(
          "Je hond leert gericht zoeken.",
          "Your dog learns targeted searching.",
        ),
      },
      {
        title: l10n("Variatie", "Variation"),
        text: l10n(
          "We breiden oefeningen rustig uit.",
          "We expand exercises calmly.",
        ),
      },
      {
        title: l10n("Vastleggen", "Consolidate"),
        text: l10n(
          "Je krijgt een duidelijk vervolgplan.",
          "You get a clear follow-up plan.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Onze hond werd rustiger en wij leerden beter samenwerken.”",
      '"Our dog became calmer and we learned to cooperate better."',
    ),
    byline: l10n("Hondeneigenaar, Voorschoten", "Dog owner, Voorschoten"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 160,-", "EUR 160"),
    metaLines: [
      l10n("5 lessen", "5 lessons"),
      l10n("Praktijkgericht", "Practice-focused"),
    ],
    options: [
      {
        label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
        href: "https://chica-hondenschool.trainin.app/checkout/P8RE4B",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/PNZOOE",
        external: true,
      },
    ],
  },
  related: ["detectie", "sport-en-spel", "5-privelessen-op-maat"],
} as const;
