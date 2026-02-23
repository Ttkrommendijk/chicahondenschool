import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "detectie",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P89XKJ",
  seo: {
    title: l10n(
      "Detectie | ChiCa Hondenschool",
      "Detection | ChiCa Dog School",
    ),
    description: l10n(
      "Gestructureerde detectietraining met focus op nauwkeurigheid en samenwerking.",
      "Structured detection training focused on accuracy and cooperation.",
    ),
  },
  hero: {
    title: l10n("Detectie", "Detection"),
    subtitle: l10n(
      "Gerichte zoektraining waarin jij en je hond leren werken met focus en precisie.",
      "Focused search training where you and your dog learn to work with concentration and precision.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Duidelijke opbouw, rustige begeleiding.",
      "Clear progression, calm guidance.",
    ),
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Detectie vraagt om heldere communicatie en consequente begeleiding. Door de training op te bouwen in logische stappen, groeit zowel het zelfvertrouwen van je hond als jouw inzicht.",
      "Detection requires clear communication and consistent guidance. By building training in logical steps, both your dog's confidence and your insight grow.",
    ),
    highlight: l10n(
      "Precisie zonder druk: rustig opbouwen geeft het beste resultaat.",
      "Precision without pressure: calm progression delivers the best results.",
    ),
    quote: {
      text: l10n(
        '"Detectie gaf ons structuur en mijn hond werkt met veel meer focus."',
        '"Detection gave us structure and my dog now works with much more focus."',
      ),
      byline: l10n("Hondeneigenaar, Leiden", "Dog owner, Leiden"),
    },
  },
  benefits: {
    items: [
      l10n(
        "5 lessen met technische opbouw",
        "5 lessons with technical progression",
      ),
      l10n(
        "Duidelijke uitleg over zoekgedrag",
        "Clear guidance on search behavior",
      ),
      l10n(
        "Persoonlijke coaching op timing en belonen",
        "Personal coaching on timing and rewards",
      ),
      l10n(
        "Oefeningen voor zelfstandig vervolg",
        "Exercises for independent continuation",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je gericht met neuswerk wilt trainen",
        "you want focused nose work training",
      ),
      l10n(
        "je hond houdt van mentale uitdaging",
        "your dog enjoys mental challenge",
      ),
      l10n(
        "je stap voor stap wilt leren begeleiden",
        "you want to learn step-by-step handling",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Basis", "Foundation"),
        text: l10n(
          "We starten met duidelijke zoekopdrachten.",
          "We start with clear search tasks.",
        ),
      },
      {
        title: l10n("Bevestigen", "Reinforce"),
        text: l10n(
          "Je hond leert gericht markeren.",
          "Your dog learns targeted indication.",
        ),
      },
      {
        title: l10n("Uitbreiden", "Expand"),
        text: l10n(
          "We bouwen variatie en complexiteit op.",
          "We build variation and complexity.",
        ),
      },
      {
        title: l10n("Borgen", "Consolidate"),
        text: l10n(
          "Je krijgt een plan voor vervolgtraining.",
          "You get a plan for follow-up training.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Detectie gaf ons structuur en mijn hond werkt met veel meer focus.”",
      '"Detection gave us structure and my dog now works with much more focus."',
    ),
    byline: l10n("Hondeneigenaar, Leiden", "Dog owner, Leiden"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 160,-", "EUR 160"),
    metaLines: [
      l10n("5 lessen", "5 lessons"),
      l10n("Op locatie in overleg", "On location by agreement"),
    ],
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
  related: ["fun-speuren-neuswerk", "sport-en-spel", "priveles-op-locatie"],
} as const;



