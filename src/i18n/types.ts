export type Lang = "nl" | "en";

export type L10n = {
  nl: string;
  en: string;
};

export function localize(value: L10n, lang: Lang): string {
  return value[lang] || value.nl;
}
