import { l10n } from "../../l10n";
import { ui, whatsappLink } from "../../ui";
import type { L10n } from "../../l10n";

export type LinkItem = {
  label: L10n;
  href: string;
  external?: boolean;
};

type ScenarioItem = {
  title: L10n;
  textBeforeLink: L10n;
  linkLabel: L10n;
  linkHref: string;
  textAfterLink: L10n;
  external?: boolean;
};

export const services = [
  {
    slug: "kennismaking",
    href: "/diensten/oppas-uitlaatservice/kennismaking/",
    shortTitle: l10n("Kennismaking", "Introduction"),
    shortDescription: l10n(
      "Een eerste gesprek om jouw situatie, planning en hulpvraag helder te krijgen.",
      "A first conversation to clarify your situation, schedule, and support request.",
    ),
    priceLabel: l10n("EUR 40,00", "EUR 40.00"),
  },
  {
    slug: "strippenkaart",
    href: "/diensten/oppas-uitlaatservice/strippenkaart/",
    shortTitle: l10n("Strippenkaart", "Punch card"),
    shortDescription: l10n(
      "Flexibele urenbundels voor oppas en uitlaatservice, afgestemd op jouw planning.",
      "Flexible hour bundles for pet sitting and walking, tailored to your planning.",
    ),
    variants: [
      {
        label: l10n("1 uur", "1 hour"),
        priceLabel: l10n("EUR 70,00", "EUR 70.00"),
      },
      {
        label: l10n("3 uur", "3 hours"),
        priceLabel: l10n("EUR 150,00", "EUR 150.00"),
      },
      {
        label: l10n("5 uur", "5 hours"),
        priceLabel: l10n("EUR 225,00", "EUR 225.00"),
      },
      {
        label: l10n("10 uur", "10 hours"),
        priceLabel: l10n("EUR 450,00", "EUR 450.00"),
      },
    ],
  },
] as const;

export const strippenkaartLowestVariant = services[1].variants[0];

export const page = {
  seo: {
    title: l10n(
      "Oppas & uitlaatservice | ChiCa Hondenschool",
      "Pet sitting & walking | ChiCa Dog School",
    ),
    description: l10n(
      "Individuele oppas- en uitlaatservice voor noodgevallen en drukke weken.",
      "Individual pet sitting and walking service for urgent situations and busy weeks.",
    ),
  },
  hero: {
    title: l10n(
      "Oppas & Uitlaatservice aan huis",
      "In-home pet sitting & walking",
    ),
    subtitle: l10n(
      "Betrouwbare 1-op-1 oppas en uitlaatservice aan huis, met persoonlijke aandacht voor je hond.",
      "Reliable 1-on-1 in-home pet sitting and walking service with personal attention for your dog.",
    ),
    imageSrc: "/images/services/oppas-uitlaatservice-overview.jpg",
    imageAlt: l10n(
      "Individuele oppas en uitlaatservice",
      "Individual pet sitting and walking service",
    ),
    primaryCta: {
      label: l10n("Boek direct", "Book now"),
      href: ui.links.bookingUrl,
    },
    secondaryCta: { label: l10n("Contact", "Contact"), href: "/contact/" },
  },
  intro: {
    title: l10n(
      "Met een gerust hart de deur uit",
      "Leave home with peace of mind",
    ),
    lead: l10n(
      "Professionele 1-op-1 begeleiding van je hond wanneer je tijdelijk extra ondersteuning nodig hebt",
      "Professional 1-on-1 guidance for your dog when you temporarily need extra support",
    ),
    paragraphs: [
      l10n(
        "The in-home pet sitting and walking service of ChiCa is for moments when you need extra support, without your dog missing out on attention or calmness. Everything is 1-on-1, by an experienced kynological instructor in a familiar environment.",
        "ChiCa's in-home pet sitting and walking service is for moments when you need extra support, without your dog missing out on attention or calmness. Everything is 1-on-1, by an experienced kynological instructor in a familiar environment.",
      ),
      l10n(
        "Of je nu even weg moet, langer moet werken of tijdelijk minder mobiel bent: je hond krijgt individuele begeleiding die past bij karakter, energie en dagelijkse routine.",
        "Whether you need to leave for a while, work longer hours, or are temporarily less mobile: your dog receives individual guidance that matches character, energy, and daily routine.",
      ),
      l10n(
        "Zo weet je zeker dat je hond goed verzorgd wordt en kom je thuis bij een ontspannen hond.",
        "This ensures your dog is well cared for and you come home to a relaxed dog.",
      ),
      l10n(
        "Samen bepalen we wat praktisch en prettig werkt. Je krijgt een duidelijke aanpak, heldere afspraken en een vaste, betrouwbare lijn in de begeleiding.",
        "Together we determine what works practically and comfortably. You receive a clear approach, clear agreements, and a consistent, reliable line of guidance.",
      ),
    ],
    bullets: [
      l10n("Individuele oppas aan huis", "Individual in-home pet sitting"),
      l10n("Flexibel plannen", "Flexible planning"),
      l10n("Rustige 1-op-1 begeleiding", "Calm 1-on-1 guidance"),
      l10n("Vaste, vertrouwde begeleiding", "Consistent, trusted guidance"),
    ],
  },
  services,
  cards: {
    title: l10n("Oppas en uitlaatservice", "Pet sitting and walking service"),
    actionLink: {
      label: l10n("Neem contact op", "Contact"),
      href: "/contact/",
    },
    cardCtaLabel: l10n("Bekijk dienst", "View service"),
  },
  process: {
    title: l10n(
      "Hoe werkt onze oppas- en uitlaatservice?",
      "How does our pet sitting and walking service work?",
    ),
    lead: l10n(
      "Actief in Zuid-Holland, met persoonlijke oppas en uitlaatservice aan huis.",
      "Active in South Holland, with personal in-home pet sitting and walking service.",
    ),
    items: [
      {
        title: l10n("1. Kennismaking", "1. Introduction"),
        text: l10n(
          "We bespreken jouw wensen, de behoeften van je hond en praktische afspraken.",
          "We discuss your wishes, your dog's needs, and practical arrangements.",
        ),
      },
      {
        title: l10n("2. Planning", "2. Planning"),
        text: l10n(
          "We plannen vaste of flexibele momenten die aansluiten bij jouw agenda en de routine van je hond.",
          "We schedule fixed or flexible moments that match your agenda and your dog's routine.",
        ),
      },
      {
        title: l10n(
          "3. Oppas of uitlaatmoment",
          "3. Pet sitting or walking moment",
        ),
        text: l10n(
          "Je hond krijgt 1-op-1 begeleiding aan huis of tijdens een individuele wandeling in de vertrouwde omgeving.",
          "Your dog receives 1-on-1 guidance at home or during an individual walk in a familiar environment.",
        ),
      },
      {
        title: l10n("4. Terugkoppeling", "4. Feedback"),
        text: l10n(
          "Na afloop ontvang je een korte terugkoppeling, zodat je weet hoe het is verlopen.",
          "Afterward you receive short feedback, so you know how it went.",
        ),
      },
    ],
  },
  scenarios: {
    title: l10n(
      "Wanneer is onze oppas- en uitlaatservice geschikt?",
      "When is our pet sitting and walking service suitable?",
    ),
    lead: l10n(
      "Praktische voorbeelden uit het dagelijks leven — zodat je snel ziet wat past bij jouw situatie.",
      "Practical examples from daily life — so you can quickly see what fits your situation.",
    ),
    chips: [
      l10n("Werkdagen", "Workdays"),
      l10n("Vakantieperiodes", "Holiday periods"),
      l10n("Tijdelijke ondersteuning", "Temporary support"),
    ],
    items: [
      {
        title: l10n("Werkdagen", "Workdays"),
        textBeforeLink: l10n(
          "Voor lange werkdagen of onregelmatige diensten bieden we individuele uitlaatmomenten aan huis. Zo blijft je hond in zijn eigen ritme en krijgt hij persoonlijke aandacht. Bekijk ook onze ",
          "For long workdays or irregular shifts, we offer individual in-home walking moments. This helps your dog stay in its own rhythm and receive personal attention. Also view our ",
        ),
        linkLabel: l10n("hondentraining", "dog training"),
        linkHref: "/diensten/hondenschool/",
        textAfterLink: l10n(
          " als je structureel wilt werken aan gedrag tijdens het wandelen.",
          " if you want to work structurally on behavior during walks.",
        ),
      },
      {
        title: l10n("Vakantieperiodes", "Holiday periods"),
        textBeforeLink: l10n(
          "Tijdens vakanties of korte afwezigheid verzorgen wij oppas aan huis, zodat je hond in een vertrouwde omgeving kan blijven. Plan vooraf een ",
          "During holidays or short absences, we provide in-home pet sitting so your dog can stay in a familiar environment. Plan an ",
        ),
        linkLabel: l10n("kennismaking", "introduction"),
        linkHref: "/contact/",
        textAfterLink: l10n(
          " om samen te bespreken wat prettig werkt.",
          " in advance to discuss what works best together.",
        ),
      },
      {
        title: l10n("Tijdelijke ondersteuning", "Temporary support"),
        textBeforeLink: l10n(
          "Bij herstel, drukte of onverwachte situaties ondersteunen wij met flexibele 1-op-1 begeleiding van je hond. Heb je direct hulp nodig? Stuur dan een bericht via ",
          "During recovery, busy periods, or unexpected situations, we support you with flexible 1-on-1 guidance for your dog. Need immediate help? Send a message via ",
        ),
        linkLabel: l10n("WhatsApp", "WhatsApp"),
        linkHref: whatsappLink,
        textAfterLink: l10n(".", "."),
        external: true,
      },
    ] satisfies ScenarioItem[],
    ctas: [
      {
        label: l10n("Plan kennismaking", "Plan introduction"),
        href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
        external: true,
      },
      {
        label: l10n("WhatsApp", "WhatsApp"),
        href: whatsappLink,
        external: true,
      },
    ] satisfies LinkItem[],
  },
  cta: {
    title: l10n("Snel ondersteuning nodig?", "Need support quickly?"),
    text: l10n(
      "Start met een kennismaking of boek direct als je al weet welke ondersteuning je nodig hebt.",
      "Start with an introduction or book directly if you already know which support you need.",
    ),
    primary: {
      label: l10n("Contactformulier", "Contact form"),
      href: "/contact/",
    },
    secondary: {
      label: l10n("Boek een kennismaking", "Book introduction"),
      href: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
    },
  },
} as const;
