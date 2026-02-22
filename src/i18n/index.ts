import { localize as localizeStrict, type L10n, type Lang } from "./types";

const DEFAULT_LANG: Lang = "nl";
export const LANG_KEY = "lang";

export const isLang = (value: string | null | undefined): value is Lang =>
  value === "nl" || value === "en";

export const resolveLangFromUrl = (url: URL): Lang => {
  const fromQuery = url.searchParams.get("lang");
  return isLang(fromQuery) ? fromQuery : DEFAULT_LANG;
};

export const resolveLangClient = (): Lang => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (isLang(urlLang)) return urlLang;
  const stored = window.localStorage.getItem(LANG_KEY);
  return isLang(stored) ? stored : DEFAULT_LANG;
};

export const resolveLang = (): Lang =>
  typeof window === "undefined" ? DEFAULT_LANG : resolveLangClient();

export const getLangFromUrl = resolveLangFromUrl;
export const getLang = (): Lang => resolveLang();

export const ensureLangInUrl = (lang: Lang): void => {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const current = url.searchParams.get("lang");
  if (isLang(current)) return;
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", url.toString());
};

export const setLang = (lang: Lang): void => {
  if (typeof window === "undefined") return;
  if (!isLang(lang)) return;
  window.localStorage.setItem(LANG_KEY, lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", url.toString());
  document.documentElement.lang = lang;
  (window as Window & { __lang?: Lang }).__lang = lang;
};

export const localize = (
  value: L10n | string | undefined,
  lang?: Lang,
): string => {
  if (typeof value === "undefined") return "";
  if (typeof value === "string") return value;
  const effective = lang ?? resolveLang();
  return localizeStrict(value, effective);
};

export type { Lang, L10n };
