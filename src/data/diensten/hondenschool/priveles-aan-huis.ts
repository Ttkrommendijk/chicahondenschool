import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "priveles-aan-huis",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
  seo: {
    title: l10n(
      "Priveles aan huis | ChiCa Hondenschool",
      "Private lesson at home | ChiCa Dog School",
    ),
    description: l10n(
      "Uitgebreide 1-op-1 begeleiding bij jou thuis.",
      "Extended 1-on-1 guidance at your home.",
    ),
  },
  hero: {
    title: l10n("1 priveles aan huis", "1 private lesson at home"),
    subtitle: l10n(
      "Training in je eigen omgeving, waar gedrag echt ontstaat en verandert.",
      "Training in your own environment, where behavior truly appears and changes.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Persoonlijk, rustig en volledig afgestemd op jouw situatie.",
      "Personal, calm, and fully tailored to your situation.",
    ),
    image: {
      src: "/images/services/prive-aan-huis.jpg",
      alt: l10n(
        "Privéles aan huis met hond en begeleider",
        "Private in-home lesson with dog and coach",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Door thuis te trainen zie je direct welke kleine aanpassingen veel verschil maken. Je leert hoe je gedrag begeleidt op momenten die dagelijks terugkomen.",
      "By training at home, you immediately see which small adjustments make a big difference. You learn how to guide behavior during moments that return every day.",
    ),
    highlight: l10n(
      "Geen algemene tips, maar begeleiding in jouw realiteit.",
      "No generic tips, but guidance in your reality.",
    ),
    quote: {
      text: l10n(
        '"Door de les aan huis snapten wij eindelijk waar het gedrag vandaan kwam."',
        '"Because of the in-home lesson, we finally understood where the behavior came from."',
      ),
      byline: l10n(
        "Hondeneigenaar uit Zuid-Holland",
        "Dog owner from South Holland",
      ),
    },
  },
  benefits: {
    items: [
      l10n(
        "1 les van 75 minuten bij jou thuis",
        "1 lesson of 75 minutes at home",
      ),
      l10n(
        "Gedragsanalyse in huiselijke context",
        "Behavior analysis in a home context",
      ),
      l10n(
        "Praktisch plan voor na de les",
        "Practical plan for after the lesson",
      ),
      l10n(
        "Heldere feedback op jouw begeleiding",
        "Clear feedback on your handling",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je thuis tegen gedrag aanloopt",
        "you face behavior challenges at home",
      ),
      l10n(
        "je graag rustig en persoonlijk begeleid wordt",
        "you want calm and personal guidance",
      ),
      l10n(
        "je concrete stappen wilt voor dagelijks gebruik",
        "you want concrete steps for daily use",
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
          "We bespreken je vraag en doelen.",
          "We discuss your question and goals.",
        ),
      },
      {
        title: l10n("Observatie", "Observation"),
        text: l10n(
          "We kijken naar gedrag in huis.",
          "We observe behavior at home.",
        ),
      },
      {
        title: l10n("Oefenen", "Practice"),
        text: l10n(
          "Je oefent met directe coaching.",
          "You practice with direct coaching.",
        ),
      },
      {
        title: l10n("Vervolg", "Follow-up"),
        text: l10n(
          "Je krijgt duidelijke vervolgstappen.",
          "You get clear next steps.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Door de les aan huis snapten wij eindelijk waar het gedrag vandaan kwam.”",
      '"Because of the in-home lesson, we finally understood where the behavior came from."',
    ),
    byline: l10n(
      "Hondeneigenaar uit Zuid-Holland",
      "Dog owner from South Holland",
    ),
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 75,-", "EUR 75"),
    metaLines: [l10n("75 minuten", "75 minutes"), l10n("Aan huis", "At home")],
    options: [
      {
        label: l10n("Boek in Rijswijk", "Book in Rijswijk"),
        href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/activities/LY666G/5-privelessen-op-maat-voorschoten-zh",
        external: true,
      },
    ],
  },
  related: ["5-privelessen-op-maat", "priveles-op-locatie", "sport-en-spel"],
} as const;
