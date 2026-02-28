import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "kennismaking",
  checkoutUrl: ui.links.kennismakingUrl,
  seo: {
    title: l10n(
      "Kennismaking | ChiCa Hondenschool",
      "Introduction | ChiCa Dog School",
    ),
    description: l10n(
      "Persoonlijke intake om jouw situatie en passende begeleiding helder te maken.",
      "Personal intake to clarify your situation and suitable guidance.",
    ),
  },
  hero: {
    title: l10n("Kennismaking", "Introduction"),
    subtitle: l10n(
      "Start met een duidelijk gesprek met een ervaren instructeur over jouw hond, doelen en gewenste begeleiding.",
      "Start with a clear conversation with an experienced instructor about your dog, goals, and desired guidance.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Voorschoten en omstreken.",
      "Available in Den Haag, Voorschoten and surrounding areas.",
    ),
    image: {
      src: "/images/services/kennismaking.webp",
      alt: l10n(
        "Kennismaking voor oppas- en uitlaatservice",
        "Introduction session for pet sitting and walking service",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Tijdens de kennismaking nemen we rustig de tijd om uw hond en uw wensen te bespreken. We bekijken welke verzoek uw hond al kent en of er specifieke aandachtspunten zijn voor de oppas- of uitlaatsituatie.",
      "During the introductory meeting, we take the time to discuss your dog and your wishes. We look at which requests your dog already knows and whether there are any specific points of attention for the sitting or walking situation.",
    ),
    highlight: l10n(
      "Eerst duidelijkheid, daarna doelgericht trainen.",
      "Clarity first, then focused training.",
    ),
    quote: {
      text: l10n(
        "De kennismaking gaf meteen rust en richting.",
        "The introduction immediately gave calmness and direction.",
      ),
      byline: l10n("Hondeneigenaar", "Dog owner"),
    },
  },
  benefits: {
    items: [
      l10n(
        "Persoonlijke intake van ca. 45 minuten",
        "Personal intake of about 45 minutes",
      ),
      l10n(
        "Duidelijke inventarisatie van jouw hulpvraag",
        "Clear inventory of your support request",
      ),
      l10n("Ruimte om je vragen te stellen", "Room to ask your questions"),
      l10n(
        "Kennismaken met uw hond door middel van een korte wandeling aan de lijn",
        "Getting to know your dog during a short walk on the leash",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This is right for you if"),
    fitItems: [
      l10n(
        "je incidenteel professionele oppas zoekt",
        "you are occasionally looking for professional dog sitting",
      ),
      l10n(
        "je hond niet mee kan met een uitlaatservice in groepen",
        "your dog cannot join group walking services",
      ),
      l10n(
        "je een pup hebt of een oudere hond",
        "you have a puppy or a senior dog",
      ),
      l10n(
        "je moet herstellen van een operatie, ziekte en minder energie hebt om te wandelen met je hond",
        "you are recovering from surgery or illness and have less energy to walk your dog",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Aanmelden", "Register"),
        text: l10n(
          "Je plant je kennismaking.",
          "You schedule your introduction.",
        ),
      },
      {
        title: l10n("Bespreken", "Discuss"),
        text: l10n("We bespreken jouw situatie.", "We discuss your situation."),
      },
      {
        title: l10n("Inschatten", "Assess"),
        text: l10n(
          "We bepalen wat nu nodig is.",
          "We determine what is needed now.",
        ),
      },
      {
        title: l10n("Keuze", "Choose"),
        text: l10n(
          "Je kiest een passend vervolg.",
          "You choose a suitable follow-up.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“De kennismaking gaf meteen rust en richting.”",
      '"The introduction immediately gave calmness and direction."',
    ),
    byline: l10n("Hondeneigenaar", "Dog owner"),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 40,00", "EUR 40.00"),
    metaLines: [
      l10n("ca. 45 minuten", "about 45 minutes"),
      l10n("Aan huis of in overleg", "At home or by agreement"),
    ],
    options: [
      {
        label: l10n("Boek kennismaking", "Book introduction"),
        href: ui.links.kennismakingUrl,
        external: true,
      },
    ],
  },
  related: ["5-privelessen-op-maat", "priveles-aan-huis", "strippenkaart"],
} as const;
