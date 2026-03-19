import { l10n, type L10n } from "./l10n";

type Unit = {
  nl: string;
  en: string;
};

const formatAmount = (amount: number, locale: "nl-NL" | "en-US"): string =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

export const formatPrice = (amount: number): L10n =>
  l10n(`${formatAmount(amount, "nl-NL")} EUR`, `${formatAmount(amount, "en-US")} EUR`);

export const formatFromPrice = (amount: number): L10n =>
  l10n(
    `v.a. ${formatAmount(amount, "nl-NL")} EUR`,
    `from ${formatAmount(amount, "en-US")} EUR`,
  );

export const formatPricePerUnit = (amount: number, unit: Unit): L10n =>
  l10n(
    `${formatAmount(amount, "nl-NL")} EUR / ${unit.nl}`,
    `${formatAmount(amount, "en-US")} EUR / ${unit.en}`,
  );

export const formatFromPricePerUnit = (amount: number, unit: Unit): L10n =>
  l10n(
    `v.a. ${formatAmount(amount, "nl-NL")} EUR / ${unit.nl}`,
    `from ${formatAmount(amount, "en-US")} EUR / ${unit.en}`,
  );
