import { l10n } from "../../l10n";
import { ui } from "../../ui";

export const dienst = {
  slug: "basiscursus",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
  seo: {
    title: l10n(
      "Basiscursus (privé) | ChiCa Hondenschool",
      "Basiscursus (private) | ChiCa Dog School",
    ),
    description: l10n(
      "Uitgebreide 1-op-1 begeleiding bij jou thuis.",
      "Extended 1-on-1 guidance at your home.",
    ),
  },
  hero: {
    title: l10n("Basiscursus (privé)", "Basiscursus (private)"),
    subtitle: l10n(
      "Individuele basiscursus in je eigen omgeving. Persoonlijk, rustig en volledig afgestemd op jouw situatie en de behoeftes van jouw hond.",
      "Individual basic training at your home. Personal, calm, and fully tailored to your situation and your dog's needs.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Available in The Hague, Rijswijk, Voorschoten, and surrounding areas.",
    ),
    image: {
      src: "/images/services/basiscursus.webp",
      alt: l10n(
        "Priveles aan huis met hond en begeleider",
        "Private in-home lesson with dog and coach",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Met de individuele basis cursus hoef je nooit op je beurt te wachten, ondervindt je geen afleiding van andere honden en kunnen we flexibel inspelen op de behoeftes van jou en van je hond.",
      "With the individual basic training, you do not need to wait your turn, and your dog is not distracted by other dogs, and we can flexibly tailor the training to your and your dog's needs.",
    ),
    highlight: l10n(
      "Geen algemene tips, maar begeleiding in jouw realiteit.",
      "No generic tips, but guidance in your reality.",
    ),
    quote: {
      text: l10n(
        '"Door de priveles snapten wij eindelijk waar het gedrag vandaan kwam."',
        '"Because of the private lesson, we finally understood where the behavior came from."',
      ),
      byline: l10n("Hondeneigenaar uit Den Haag", "Dog owner from The Hague"),
    },
  },
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "In de basiscursus werken we verder met jouw oudere pup of (pre)puber. Waar puppylessen nog vooral draaiden om opvoeding en eerste basisvaardigheden, maken we deze nu tot gewoontes. Je hond leert beter omgaan met de buitenwereld, geuren en prikkels, terwijl we basisvaardigheden uitbreiden en herhalen. Ideaal voor pups vanaf 4 maanden die beginnen te wisselen van tandjes of een beginnende puber.",
        "In the basic course, we continue with your older puppy or (pre)teen dog. Puppy lessons focused on early training and basic skills; here we turn them into habits. Your dog learns to handle the outside world, scents, and stimuli, while we expand and repeat foundational skills. Perfect for puppies from four months starting to teethe or early adolescents.",
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
        "1 les van 45 minuten bij jou thuis",
        "1 lesson of 45 minutes at home",
      ),
      l10n(
        "Kennismaking met jou en je hond",
        "Meet and greet with you and your dog",
      ),
      l10n(
        "Praktisch plan de lessen aangepast aan jou behoeftes",
        "Practical plan tailored to your needs",
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
        id: "5-lessen",
        label: l10n("5 lessen", "5 lessons"),
        price: l10n("EUR 250,-", "EUR 250"),
      },
      {
        id: "extra-les",
        label: l10n("extra les", "extra lesson"),
        price: l10n("EUR 50,-", "EUR 50"),
        href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
        external: true,
      },
    ],
  },
  pricing: {
    title: ui.common.price,
    priceText: l10n("EUR 50,-", "EUR 50"),
    metaLines: [l10n("45 minuten", "45 minutes"), l10n("Aan huis", "At home")],
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
