import type { Lang } from "./types";

export const LANG_KEY = "lang";

const isLang = (value: string | null): value is Lang =>
  value === "nl" || value === "en";

export function getLangFromUrl(): Lang {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  return urlLang === "en" ? "en" : "nl";
}

export function setLangInUrl(lang: Lang): void {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.pushState(null, "", url.toString());
}

export function syncLangToHtml(lang: Lang): void {
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang-active", lang);
}

export function persistLang(lang: Lang): void {
  window.localStorage.setItem(LANG_KEY, lang);
}

export function getInitialLang(): Lang {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const stored = window.localStorage.getItem(LANG_KEY);
  const resolved: Lang = isLang(urlLang) ? urlLang : isLang(stored) ? stored : "nl";

  if (!isLang(urlLang)) {
    const normalized = new URL(window.location.href);
    normalized.searchParams.set("lang", resolved);
    window.history.replaceState(null, "", normalized.toString());
  }

  syncLangToHtml(resolved);
  persistLang(resolved);
  return resolved;
}
