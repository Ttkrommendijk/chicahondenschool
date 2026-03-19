import { l10n } from "./l10n";

const whatsappPrefilledText = l10n(
  "He Carine, ik heb een vraagje...",
  "Hi Carine, I have a question...",
);

export const ui = {
  links: {
    bookingUrl: "https://chica-hondenschool.trainin.app/",
    kennismakingUrl: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
    whatsappPhone: "31626467714",
    whatsappPrefilledText,
    whatsappUrl: `https://api.whatsapp.com/send?phone=31626467714&text=${encodeURIComponent(whatsappPrefilledText.nl)}`,
    instagram:
      "https://www.instagram.com/chicahondenschool?igsh=bjJlOW84ZDNzcHIx",
    facebook: "https://www.facebook.com/www.chicahondenschool.nl/",
    linkedin: "https://www.linkedin.com/in/carine-krommendijk-baa5259b/",
  },
  contact: {
    phone: l10n("06 26467714", "06 26467714"),
    email: l10n("info@chicahondenschool.nl", "info@chicahondenschool.nl"),
    serviceArea: l10n(
      "Den Haag, Rijswijk, Voorschoten en omgeving",
      "The Hague, Rijswijk, Voorschoten and surrounding area",
    ),
    kvk: l10n("63424924", "63424924"),
  },
  navigation: {
    home: l10n("Home", "Home"),
    services: l10n("Diensten", "Services"),
    reviews: l10n("Reviews", "Reviews"),
    about: l10n("Over ChiCa", "About ChiCa"),
    contact: l10n("Contact", "Contact"),
    mainLabel: l10n("Hoofdnavigatie", "Main navigation"),
    openNavigation: l10n("Open navigatie", "Open navigation"),
    menu: l10n("Menu", "Menu"),
    languageSwitch: {
      nl: l10n("NL", "NL"),
      en: l10n("EN", "EN"),
    },
  },
  common: {
    brandName: l10n("ChiCa Hondenschool", "ChiCa Dog School"),
    contact: l10n("Contact", "Contact"),
    viewService: l10n("Bekijk dienst", "View service"),
    serviceFallback: l10n("Dienst", "Service"),
    price: l10n("Prijs", "Price"),
    options: l10n("Opties", "Options"),
    relatedServices: l10n("Gerelateerde diensten", "Related services"),
    bookYourTraining: l10n("Boek jouw priveles", "Book your personal lesson"),
    planIntro: l10n("Plan een kennismaking", "Plan an introduction"),
    chooseService: l10n("Kies een dienst", "Choose a service"),
    whatWeDo: l10n("Wat gaan we doen", "What are we going to do"),
    questionsCta: l10n(
      "Stuur een bericht met je vragen",
      "Send a message with your questions",
    ),
    skipToContent: l10n("Direct naar inhoud", "Skip to content"),
  },
  footer: {
    followChica: l10n("Volg ChiCa", "Follow ChiCa"),
    socialInstagram: l10n("Instagram", "Instagram"),
    socialFacebook: l10n("Facebook", "Facebook"),
    socialLinkedIn: l10n("LinkedIn", "LinkedIn"),
    links: [
      {
        href: "/algemene-voorwaarden/",
        label: l10n("Algemene voorwaarden", "Terms and conditions"),
      },
      { href: "/privacy/", label: l10n("Privacy", "Privacy") },
    ],
  },
  floatingWhatsApp: {
    ariaLabel: l10n(
      "Stuur een WhatsApp bericht naar ChiCa",
      "Send a WhatsApp message to ChiCa",
    ),
    label: l10n("WhatsApp", "WhatsApp"),
  },
  contentLayout: {
    relatedPages: l10n("Gerelateerde pagina's", "Related pages"),
    contactCta: l10n("Neem contact op", "Contact us"),
  },
  contactForm: {
    name: l10n("Naam", "Name"),
    city: l10n("Woonplaats", "City"),
    phone: l10n("Telefoonnummer (WhatsApp)", "Phone number (WhatsApp)"),
    phoneHelp: l10n(
      "Gebruik bij voorkeur het nummer waarop je ook via WhatsApp bereikbaar bent.",
      "Preferably use the number where you are also reachable via WhatsApp.",
    ),
    email: l10n("E-mailadres", "Email address"),
    interest: l10n("Mijn interesse", "My interest"),
    interestPlaceholder: l10n("Maak een keuze", "Make a choice"),
    message: l10n("Bericht", "Message"),
    messagePlaceholder: l10n(
      "Waar kan ik je mee helpen?",
      "How can I help you?",
    ),
    submit: l10n("Verstuur bericht", "Send message"),
    submitting: l10n("Versturen...", "Sending..."),
    errorRequired: l10n("Dit veld is verplicht.", "This field is required."),
    errorEmail: l10n(
      "Vul een geldig e-mailadres in.",
      "Please enter a valid email address.",
    ),
    errorMessageShort: l10n(
      "Beschrijf je vraag in minimaal 10 tekens.",
      "Please describe your question in at least 10 characters.",
    ),
    errorCheckFields: l10n(
      "Controleer de gemarkeerde velden.",
      "Please check the highlighted fields.",
    ),
    errorSubmit: l10n("Versturen is niet gelukt.", "Sending failed."),
    success: l10n(
      "Dank je wel! Je bericht is verzonden.",
      "Thank you! Your message has been sent.",
    ),
    errorGeneric: l10n(
      "Er ging iets mis. Probeer het later opnieuw.",
      "Something went wrong. Please try again later.",
    ),
  },
  serviceDetail: {
    whyWorks: l10n("Waarom dit traject werkt", "Why this track works"),
    outcomes: l10n(
      "Wat je leert / wat het oplevert",
      "What you learn / outcomes",
    ),
    practical: l10n("Praktisch", "Practical"),
    duration: l10n("Duur", "Duration"),
    location: l10n("Locatie", "Location"),
    forWho: l10n("Voor wie", "For whom"),
    doubtTitle: l10n(
      "Twijfel je wat past bij jouw hond?",
      "Not sure what fits your dog?",
    ),
    doubtQuestion: l10n(
      "Niet zeker of dit aansluit bij je wensen?",
      "Not sure if this fits what you need?",
    ),
    whatsappCta: l10n("Stuur een berichtje", "Send a message"),
    priceInvestment: l10n("Investering", "Investment"),
  },
  redirect: {
    forwarding: l10n("Doorsturen naar", "Redirecting to"),
  },
  carousel: {
    prevImage: l10n("Vorige afbeelding", "Previous image"),
    nextImage: l10n("Volgende afbeelding", "Next image"),
    chooseImage: l10n("Afbeelding kiezen", "Choose image"),
    goToImage: l10n("Ga naar afbeelding", "Go to image"),
  },
} as const;

export const buildWhatsAppLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${ui.links.whatsappPhone}&text=${encodeURIComponent(message)}`;

export const whatsappLink = ui.links.whatsappUrl;
