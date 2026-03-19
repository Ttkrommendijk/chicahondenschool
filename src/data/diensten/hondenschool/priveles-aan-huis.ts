import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "priveles-aan-huis",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
  seo: {
    title: l10n(
      "Priveles aan huis | ChiCa Hondenschool",
      "Extra private lesson at home | ChiCa Dog School",
    ),
    description: l10n(
      "Uitgebreide 1-op-1 begeleiding bij jou thuis.",
      "Extended 1-on-1 guidance at your home.",
    ),
  },
  hero: {
    title: l10n("Priveles aan huis", "Extra private lesson at home"),
    subtitle: l10n(
      "Training in je eigen omgeving, waar gedrag echt ontstaat en verandert. Persoonlijk, rustig en volledig afgestemd op jouw situatie",
      "Training in your own environment, where behavior truly appears and changes. Personal, calm, and fully tailored to your situation.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Available in The Hague, Rijswijk, Voorschoten, and surrounding areas.",
    ),
    image: {
      src: "/images/services/op-de-plaats.webp",
      alt: l10n(
        "Priveles aan huis met hond en begeleider",
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
        '"Op de hondenschool leerden we de basis, maar niet de dagelijkse uitdagingen thuis. Borstelen, rustig in de bench blijven of bezoekers netjes begroeten – dit gaf mij veel meer begrip voor mijn hond."',
        '"On the dog school, we learned the basics, but not the daily challenges at home. Barking, staying calm in the bench, or greeting visitors gently – this gave me much more insight into my dog."',
      ),
      byline: l10n("Hondeneigenaar uit Den Haag", "Dog owner from The Hague"),
    },
  },
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "Training in je eigen omgeving, precies daar waar je tegen gedrag aanloopt of waar je nieuw gedrag wilt aanleren of ombuigen. Denk aan situaties zoals blaffen naar voorbijgangers, opspringen bij bezoek, leren alleen te zijn, benchtraining, op de plaats blijven, omgaan met de stofzuiger, het voorkomen van voernijd en een goede omgang met kinderen.",
        "Training in your own environment, exactly where you encounter unwanted behavior or want to teach or change behavior. Think of situations such as barking at passersby, jumping on visitors, learning to stay home alone, crate training, staying in place, getting used to the vacuum cleaner, preventing food aggression, and interacting calmly with children.",
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
      "Hondeneigenaar uit Voorschoten",
      "Dog owner from Voorschoten",
    ),
  },
  selector: {
    selectorLabel: l10n("Kies je pakket", "Choose your package"),
    ctaLabel: l10n("Boek gekozen optie", "Book selected option"),
    unavailableLabel: l10n("Binnenkort beschikbaar", "Available soon"),
    options: [
      {
        id: "3-lessen",
        label: l10n("3 lessen", "3 lessons"),
      },
      {
        id: "5-lessen",
        label: l10n("5 lessen", "5 lessons"),
      },
      {
        id: "extra-les",
        label: l10n("extra les", "extra lesson"),
        price: l10n("EUR 75,-", "EUR 75"),
        href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
        external: true,
      },
    ],
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 75,-", "EUR 75"),
    metaLines: [l10n("75 minuten", "75 minutes"), l10n("Aan huis", "At home")],
    options: [
      {
        label: l10n(
          "Boek in Den Haag / Rijswijk",
          "Book in The Hague / Rijswijk",
        ),
        href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/PPBMGZ",
        external: true,
      },
    ],
  },
  related: ["priveles-op-locatie", "sport-en-spel", "detectie"],
} as const;
