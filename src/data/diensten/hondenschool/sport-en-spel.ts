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
      "Actief trainen met duidelijke stappen, zodat je hond jouw signalen beter begrijpt vanuit plezier, ontspanning en samenwerking. Ideaal voor honden en eigenaren die samen variatie en leuke oefeningen willen, van trucjes en parcours tot apporteren en hulphondvaardigheden.",
      "Active training in clear steps, helping your dog understand your signals through fun, relaxation, and teamwork. Perfect for dogs and owners who enjoy varied exercises, from tricks and obstacle courses to retrieving and helper-dog skills.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Available in Den Haag, Rijswijk, Voorschoten and surrounding areas.",
    ),
    image: {
      src: "/images/services/sport_spel.webp",
      alt: l10n(
        "Actieve sport- en spelles met hond",
        "Active sport and play session with a dog",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Door sport en spel bouw je een sterke band op door beter te communiceren met je hond, hem te sturen op basis van samenwerking en vertrouwen, en samen vooral veel plezier te hebben.",
      "Through sport and play, you build a strong bond by communicating better with your dog, guiding him through teamwork and trust, and most of all, having fun together.",
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
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "- Leren zoeken van een speeltje en apporteren.",
        "- Learn to find a toy and retrieve it.",
      ),
      l10n(
        "- Trucjes als rollen, mooi zitten, onder je benen lopen",
        "- Tricks like rolling, sitting, and walking under your feet",
      ),
      l10n("- Een grote bal leren duwen (treibbal)", "- Push a big ball"),
      l10n(
        "- Parcourtje lopen met allerlei hindernissen (hoopers).",
        "- Run a track with various obstacles",
      ),
      l10n(
        "- Hulphond vaardigheden, bijvoorbeeld sok leren uittrekken, jas leren uittrekken, apporteren van sleutels.",
        "- Practice dog skills like pulling a toy, sitting, and carrying keys",
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
      l10n(
        "je vanuit rust en plezier met je hond wilt samenwerken",
        "you want to work with your dog in a relaxed and happy manner",
      ),
      l10n(
        "Je hond fysieke en geestelijke uitdaging wilt bieden. ",
        "You want to provide your dog with physical and mental challenges.",
      ),
      l10n(
        "je training leuk en doelgericht wilt houden",
        "You want to keep training fun and goal-oriented",
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
    priceText: l10n("EUR 250,-", "EUR 250"),
    metaLines: [
      l10n("5 lessen", "5 lessons"),
      l10n(
        "Locaties: Den Haag, Voorschoten",
        "Locations: The Hague, Voorschoten",
      ),
    ],
    options: [
      {
        label: l10n(
          "Boek in Den Haag / Rijswijk",
          "Book in The Hague / Rijswijk",
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
