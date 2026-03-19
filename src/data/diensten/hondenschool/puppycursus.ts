import { l10n } from "../../l10n";
import { ui } from "../../ui";
import { formatPrice } from "../../price";

export const dienst = {
  slug: "puppycursus",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
  seo: {
    title: l10n(
      "Puppycursus (privé) | ChiCa Hondenschool",
      "Puppycursus (private) | ChiCa Dog School",
    ),
    description: l10n(
      "Uitgebreide 1-op-1 begeleiding bij jou thuis.",
      "Extended 1-on-1 guidance at your home.",
    ),
  },
  hero: {
    title: l10n("Puppycursus (privé)", "Puppycursus (private)"),
    subtitle: l10n(
      "Individuele aandacht zonder afleiding van een groep en zonder op je beurt te wachten en focus op die zaken die jij belangrijk vindt.",
      "Individually tailored without distractions from a group and without having to wait your turn and focus on what you find important.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Available in The Hague, Rijswijk, Voorschoten, and surrounding areas.",
    ),
    image: {
      src: "/images/services/puppy_cursus.webp",
      alt: l10n(
        "Priveles aan huis met hond en begeleider",
        "Private in-home lesson with dog and coach",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Je hond leert all basisvaardigheden, en met de persoonlijke individuele begeleiding passen we de activiteiten aan aan dat wat de hond nodig heeft en wat het meest van toepassingen is op de thuissituatie.",
      "Your dog learns all basic skills, and with personalized individual guidance we tailor the activities to what your dog needs and what is most applicable to your home situation.",
    ),
    highlight: l10n(
      "Geen algemene tips, maar begeleiding in jouw realiteit.",
      "No generic tips, but guidance in your reality.",
    ),
    quote: {
      text: l10n(
        '"Door de les aan huis leerde de hond veel sneller en konden we thuis veel beter doortrainen."',
        '"Because of the in-home lesson, the dog learned much faster and we could train at home much better."',
      ),
      byline: l10n("Hondeneigenaar uit Den Haag", "Dog owner from The Hague"),
    },
  },
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "We stemmen de begeleiding af op jouw hond, jouw situatie en jouw doel.",
        "We tailor the guidance to your dog, your situation, and your goal.",
      ),
      l10n(
        "Je krijgt duidelijke oefeningen die je direct in de praktijk kunt toepassen.",
        "You get clear exercises you can apply directly in practice.",
      ),
      l10n(
        "Na iedere les weet je precies welke volgende stap je thuis kunt zetten.",
        "After each lesson, you know exactly which next step to take at home.",
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
        "1 les van 75 minuten op een af te spreken locatie",
        "1 lesson of 75 minutes at an agreed location",
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
        "Je pup makkelijk overprikkelt raakt",
        "Your pup is easily overstimulated and reactive",
      ),
      l10n(
        "je graag rustig en persoonlijk begeleid wordt",
        "you want calm and personal guidance",
      ),
      l10n(
        "je een flexibel schema aan wilt houden dat past in je agenda",
        "you want a flexible schedule that fits your schedule",
      ),
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
        price: formatPrice(250),
      },
      {
        id: "extra-les",
        label: l10n("extra les", "extra lesson"),
        price: formatPrice(50),
        href: "https://chica-hondenschool.trainin.app/checkout/P4R2LV",
        external: true,
      },
    ],
  },
  pricing: {
    title: ui.common.price,
    priceText: formatPrice(50),
    metaLines: [
      l10n("45 minuten", "45 minutes"),
      l10n("Op af te spreken locatie", "At an agreed location"),
    ],
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
