import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "5-privelessen-op-maat",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/PLONRJ",
  seo: {
    title: l10n(
      "5 privelessen op maat | ChiCa Hondenschool",
      "5 tailored private lessons | ChiCa Dog School",
    ),
    description: l10n(
      "Compact 1-op-1 traject voor snelle, praktische vooruitgang in het dagelijks leven met je hond.",
      "Compact 1-on-1 track for fast, practical progress in daily life with your dog.",
    ),
  },
  hero: {
    title: l10n("5 privelessen op maat", "5 tailored private lessons"),
    subtitle: l10n(
      "Duidelijke begeleiding in korte stappen, zodat je snel merkt wat werkt voor jou en je hond.",
      "Clear guidance in short steps, so you quickly see what works for you and your dog.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Persoonlijke begeleiding op een afgesproken locatie in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Personal guidance on an agreed location in Den Haag, Rijswijk, Voorschoten, and surrounding areas  .",
    ),
    image: {
      src: "/images/services/5-privelessen.jpg",
      alt: l10n(
        "Privéles met hond in training op maat",
        "Private tailored training session with a dog",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Als je direct gericht wilt starten, geeft een compact pakket rust en overzicht. Je krijgt per les heldere focuspunten en praktische oefeningen die aansluiten op jouw situatie.",
      "If you want to start with focus right away, a compact package gives calmness and structure. Each lesson gives clear focus points and practical exercises tailored to your situation.",
    ),
    highlight: l10n(
      "Vijf lessen, een duidelijke lijn, direct toepasbaar thuis en buiten.",
      "Five lessons, one clear line, directly usable at home and outside.",
    ),
    quote: {
      text: l10n(
        '"De korte lessen waren precies wat wij nodig hadden: duidelijk, rustig en direct bruikbaar."',
        '"The short sessions were exactly what we needed: clear, calm, and immediately usable."',
      ),
      byline: l10n("Hondeneigenaar uit de regio", "Dog owner from the area"),
    },
  },
  benefits: {
    items: [
      l10n("5 lessen van 30 minuten", "5 lessons of 30 minutes"),
      l10n("1-op-1 aanpak op maat", "Tailored 1-on-1 approach"),
      l10n(
        "Praktische oefeningen voor thuis en wandelen",
        "Practical exercises for home and walks",
      ),
      l10n(
        "Heldere vervolgacties na elke les",
        "Clear follow-up actions after each lesson",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je snel structuur wilt in training",
        "you want quick structure in training",
      ),
      l10n(
        "je gericht wilt werken aan dagelijks gedrag",
        "you want focused work on daily behavior",
      ),
      l10n(
        "je persoonlijke begeleiding belangrijk vindt",
        "you value personal guidance",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Kennismaken", "Introduction"),
        text: l10n("We bepalen doelen en focus.", "We set goals and focus."),
      },
      {
        title: l10n("Start les 1", "Start lesson 1"),
        text: l10n(
          "Eerste oefeningen in jouw context.",
          "First exercises in your context.",
        ),
      },
      {
        title: l10n("Opbouw", "Progression"),
        text: l10n(
          "We bouwen les voor les verder.",
          "We build further lesson by lesson.",
        ),
      },
      {
        title: l10n("Borgen", "Consolidate"),
        text: l10n(
          "Je gaat door met een duidelijk plan.",
          "You continue with a clear plan.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "De korte lessen waren precies wat wij nodig hadden: duidelijk, rustig en direct bruikbaar.",
      "The short sessions were exactly what we needed: clear, calm, and immediately usable.",
    ),
    byline: l10n("Hondeneigenaar uit de regio", "Dog owner from the area"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 160,-", "EUR 160"),
    metaLines: [
      l10n("5 lessen van 30 minuten", "5 lessons of 30 minutes"),
      l10n("Afgesproken locatie in Rijswijk", "Agreed location in Rijswijk"),
    ],
    options: [
      {
        label: l10n(
          "Boek in Den Haag / Rijswijk",
          "Book in Den Haag / Rijswijk",
        ),
        href: "https://chica-hondenschool.trainin.app/checkout/PLONRJ",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/PVRWMN",
        external: true,
      },
    ],
  },
  related: ["priveles-aan-huis", "priveles-op-locatie", "detectie"],
} as const;
