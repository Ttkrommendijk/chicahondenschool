import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "sport-en-spel",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P479WW",
  seo: {
    title: l10n(
      "Sport en spel | ChiCa Hondenschool",
      "Sport and play | ChiCa Dog School",
    ),
    description: l10n(
      "Actieve lessen met balans tussen plezier, focus en controle.",
      "Active lessons balancing fun, focus, and control.",
    ),
  },
  hero: {
    title: l10n("Sport en spel", "Sport and play"),
    subtitle: l10n(
      "Actief trainen met duidelijke structuur, zodat energie en samenwerking in balans komen.",
      "Active training with clear structure so energy and cooperation become balanced.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Ideaal voor honden die graag bezig zijn.",
      "Ideal for dogs that like to stay active.",
    ),
    image: {
      src: "/images/services/sport-en-spel.jpg",
      alt: l10n(
        "Actieve sport- en spelles met hond",
        "Active sport and play session with a dog",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Door sport en spel doelgericht in te zetten, leert je hond schakelen tussen actie en rust. Jij leert hoe je energie ombuigt naar focus en samenwerking.",
      "By using sport and play with purpose, your dog learns to switch between action and calmness. You learn how to channel energy into focus and cooperation.",
    ),
    highlight: l10n(
      "Plezier met richting: actief trainen zonder chaos.",
      "Fun with direction: active training without chaos.",
    ),
    quote: {
      text: l10n(
        '"Onze hond kon zijn energie kwijt en werd tegelijk veel beter aanspreekbaar."',
        '"Our dog could release energy and became much more responsive at the same time."',
      ),
      byline: l10n("Hondeneigenaar, Voorschoten", "Dog owner, Voorschoten"),
    },
  },
  benefits: {
    items: [
      l10n(
        "5 actieve lessen met duidelijke structuur",
        "5 active lessons with clear structure",
      ),
      l10n(
        "Praktische oefeningen voor focus en controle",
        "Practical exercises for focus and control",
      ),
      l10n(
        "Persoonlijke coaching op jouw begeleiding",
        "Personal coaching on your handling",
      ),
      l10n(
        "Vervolgplan voor zelfstandig oefenen",
        "Follow-up plan for independent practice",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n("je hond veel energie heeft", "your dog has high energy"),
      l10n(
        "je focus en samenwerking wilt verbeteren",
        "you want to improve focus and cooperation",
      ),
      l10n(
        "je training leuk en doelgericht wilt houden",
        "you want training to stay fun and goal-focused",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Intake", "Intake"),
        text: l10n(
          "We bepalen energie- en focusdoelen.",
          "We set energy and focus goals.",
        ),
      },
      {
        title: l10n("Basis", "Foundation"),
        text: l10n(
          "Je hond leert duidelijke spelregels.",
          "Your dog learns clear game rules.",
        ),
      },
      {
        title: l10n("Opbouw", "Progression"),
        text: l10n(
          "We combineren actie met controle.",
          "We combine action with control.",
        ),
      },
      {
        title: l10n("Vervolg", "Follow-up"),
        text: l10n(
          "Je krijgt plan voor herhaling.",
          "You receive a repetition plan.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Onze hond kon zijn energie kwijt en werd tegelijk veel beter aanspreekbaar.”",
      '"Our dog could release energy and became much more responsive at the same time."',
    ),
    byline: l10n("Hondeneigenaar, Voorschoten", "Dog owner, Voorschoten"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 160,-", "EUR 160"),
    metaLines: [
      l10n("5 lessen", "5 lessons"),
      l10n(
        "Locaties: Den Haag, Voorschoten",
        "Locations: Den Haag, Voorschoten",
      ),
    ],
    options: [
      {
        label: l10n(
          "Boek in Rijswijk / Den Haag",
          "Book in Rijswijk / Den Haag",
        ),
        href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/P479WW",
        external: true,
      },
    ],
  },
  related: ["detectie", "fun-speuren-neuswerk", "priveles-op-locatie"],
} as const;
