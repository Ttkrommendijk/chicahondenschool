import { l10n } from "./l10n";

export const page = {
  seo: {
    title: l10n(
      "Algemene voorwaarden | ChiCa Hondenschool",
      "Terms and conditions | ChiCa Dog School",
    ),
    description: l10n("Algemene voorwaarden.", "Terms and conditions."),
  },
  title: l10n("Algemene voorwaarden", "Terms and conditions"),
  lead: l10n(
    "Algemene voorwaarden van ChiCa Hondenschool.",
    "Terms and conditions of ChiCa Dog School.",
  ),
  sections: [
    {
      title: l10n("Algemene voorwaarden", "Terms and conditions"),
      items: [
        l10n(
          "U beschikt over een WA-verzekering, zowel voor u als voor uw hond.",
          "You have third-party liability insurance for both yourself and your dog.",
        ),
        l10n(
          "ChiCa Hondenschool stelt zich niet aansprakelijk voor schade die geleden wordt door toedoen van uw hond; aan andere honden, deelnemers of derden.",
          "ChiCa Dog School is not liable for damage caused by your dog to other dogs, participants or third parties.",
        ),
        l10n(
          "Bij aanmelding verschaft u ChiCa Hondenschool de volgende gegevens: NAW-gegevens, naam van de hond, ras en leeftijd en eventuele bijzonderheden.",
          "When registering, you provide ChiCa Dog School with the following information: name and address details, the dog's name, breed and age, and any relevant particulars.",
        ),
        l10n(
          "In de software kunt u altijd een les cancelen. Wanneer u dit 24 uur van te voren doet dan krijgt u uw credit terug om opnieuw in te plannen. Bent u te laat dan zal de credit verloren gaan.",
          "In the software you can always cancel a lesson. If you do this at least 24 hours in advance, your credit will be returned so you can schedule again. If you are too late, the credit will be lost.",
        ),
        l10n(
          "Mocht u de lessen onverhoopt niet langer bij kunnen wonen, neem dan contact op. Indien mogelijk wordt er gezocht naar een passende oplossing. Geld kan niet geretourneerd worden.",
          "If you unexpectedly can no longer attend the lessons, please get in touch. If possible, a suitable solution will be sought. Payments cannot be refunded.",
        ),
        l10n(
          "De cursus vindt plaats op de afgesproken dag en tijd. Soms zullen door omstandigheden lessen in overleg verplaatst worden. Bijvoorbeeld bij gevoelstemperatuur vanaf 24 graden, storm, harde regen of sneeuw.",
          "The course takes place on the agreed day and time. Sometimes lessons may be rescheduled in consultation due to circumstances, for example with a perceived temperature from 24 degrees, storm, heavy rain or snow.",
        ),
      ],
    },
    {
      title: l10n("Belangrijk om te weten", "Important to know"),
      items: [
        l10n(
          "Bij ChiCa Hondenschool wordt getraind met een gewone halsband of een tuigje, en een riem die lang genoeg is voor uw hond (3 meter lijn).",
          "At ChiCa Dog School, training is done with a regular collar or a harness, and a leash that is long enough for your dog (3 metre lead).",
        ),
        l10n(
          "Er wordt niet gewerkt met correctiemiddelen als een slipketting, stroomband of half-check.",
          "Correction tools such as slip chains, shock collars or half-check collars are not used.",
        ),
        l10n(
          "Op het trainingsveld werken we niet met flexilijnen, zorg voor een gewone riem.",
          "We do not use retractable leads on the training field, so please bring a regular leash.",
        ),
        l10n(
          "Zorg voor voldoende beloningssnoepjes.",
          "Bring enough reward treats.",
        ),
        l10n(
          "Geef voor de training geen eten aan uw hond.",
          "Do not feed your dog before training.",
        ),
        l10n(
          "Zorg voor een speeltje, eentje die je samen kunt vasthouden (zonder piep).",
          "Bring a toy that you can hold together with your dog, without a squeaker.",
        ),
        l10n(
          "Het is goed thuis de oefeningen een aantal keren per week te herhalen. Train niet langer dan 5 minuten achter elkaar en stop altijd wanneer het goed gaat.",
          "It is good to repeat the exercises at home several times a week. Do not train for more than 5 minutes at a time and always stop while things are going well.",
        ),
        l10n(
          "Zorg voor poepzakjes.",
          "Bring poop bags.",
        ),
      ],
    },
  ],
} as const;
