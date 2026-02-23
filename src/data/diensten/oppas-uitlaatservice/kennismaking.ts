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
      "Start met een duidelijk gesprek over jouw hond, doelen en gewenste begeleiding.",
      "Start with a clear conversation about your dog, goals, and desired guidance.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Een rustige eerste stap zonder druk.",
      "A calm first step without pressure.",
    ),
    image: {
      src: "/images/services/oppas-kennismaking.jpg",
      alt: l10n(
        "Kennismaking voor oppas- en uitlaatservice",
        "Introduction session for pet sitting and walking service",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Een heldere intake voorkomt losse adviezen. Je krijgt meteen overzicht over wat past bij jouw hond en welke route het meest logisch is.",
      "A clear intake prevents fragmented advice. You immediately get clarity on what fits your dog and which route is most logical.",
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
        "Persoonlijke intake van ca. 30 minuten",
        "Personal intake of about 30 minutes",
      ),
      l10n(
        "Duidelijke inventarisatie van jouw hulpvraag",
        "Clear inventory of your support request",
      ),
      l10n(
        "Advies over passend vervolgtraject",
        "Advice on a suitable follow-up track",
      ),
      l10n("Directe eerste handvatten", "Immediate first guidance"),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je wilt weten welk traject past",
        "you want to know which track fits",
      ),
      l10n("je een rustige start belangrijk vindt", "you value a calm start"),
      l10n(
        "je advies op maat wilt voor je situatie",
        "you want tailored advice for your situation",
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
      l10n("ca. 30 minuten", "about 30 minutes"),
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
