import { home } from "../data/home";
import { page as homePage } from "../data/home";
import { ui } from "../data/ui";
import { page as contactPage } from "../data/contact";
import { page as overPage } from "../data/over";
import { allReviews, reviewsPage } from "../data/reviews";
import { page as hondenschoolPage } from "../data/diensten/hondenschool/index";
import { page as oppasPage } from "../data/diensten/oppas-uitlaatservice/index";
import { dienstenIndexPage, serviceList } from "../data/diensten";
import { dienst as dienst5Privelessen } from "../data/diensten/hondenschool/5-privelessen-op-maat";
import { dienst as dienstPrivelesAanHuis } from "../data/diensten/hondenschool/priveles-aan-huis";
import { dienst as dienstPrivelesOpLocatie } from "../data/diensten/hondenschool/priveles-op-locatie";
import { dienst as dienstFunSpeuren } from "../data/diensten/hondenschool/fun-speuren-neuswerk";
import { dienst as dienstDetectie } from "../data/diensten/hondenschool/detectie";
import { dienst as dienstSportEnSpel } from "../data/diensten/hondenschool/sport-en-spel";
import { dienst as dienstKennismaking } from "../data/diensten/oppas-uitlaatservice/kennismaking";
import { dienst as dienstStrippenkaart } from "../data/diensten/oppas-uitlaatservice/strippenkaart";
import { page as privacyPage } from "../data/privacy";
import { page as termsPage } from "../data/algemene-voorwaarden";
import { localize, type L10n, type Lang } from "./types";
import {
  getInitialLang,
  persistLang,
  setLangInUrl,
  syncLangToHtml,
} from "./runtime";

type DataTree = Record<string, unknown>;

const sources: DataTree = {
  ui,
  home,
  homePage: { page: homePage },
  contact: { page: contactPage },
  over: { page: overPage },
  reviews: {
    page: reviewsPage,
    allReviews: Object.fromEntries(allReviews.map((item) => [item.id, item])),
  },
  hondenschool: { page: hondenschoolPage },
  oppas: { page: oppasPage },
  diensten: {
    index: dienstenIndexPage,
    list: serviceList,
    "5-privelessen-op-maat": dienst5Privelessen,
    "priveles-aan-huis": dienstPrivelesAanHuis,
    "priveles-op-locatie": dienstPrivelesOpLocatie,
    "fun-speuren-neuswerk": dienstFunSpeuren,
    detectie: dienstDetectie,
    "sport-en-spel": dienstSportEnSpel,
    kennismaking: dienstKennismaking,
    strippenkaart: dienstStrippenkaart,
  },
  privacy: { page: privacyPage },
  terms: { page: termsPage },
};

const getByPath = (path: string): unknown => {
  const parts = path.split(".").filter(Boolean);
  let current: unknown = sources;
  for (const part of parts) {
    if (
      !current ||
      typeof current !== "object" ||
      !(part in (current as DataTree))
    ) {
      return null;
    }
    current = (current as DataTree)[part];
  }
  return current;
};

const isL10n = (value: unknown): value is L10n =>
  Boolean(value) &&
  typeof value === "object" &&
  "nl" in (value as Record<string, unknown>) &&
  typeof (value as Record<string, unknown>).nl === "string";

const setLanguageSwitchState = (lang: Lang): void => {
  document
    .querySelectorAll<HTMLElement>("[data-lang-option]")
    .forEach((node) => {
      const current = node.dataset.langOption;
      const active = current === lang;
      node.classList.toggle("is-active", active);
      node.setAttribute("aria-current", active ? "true" : "false");
    });
};

const applyI18n = (lang: Lang): void => {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const resolved = getByPath(key);
    if (!isL10n(resolved)) return;
    node.textContent = localize(resolved, lang);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((node) => {
    const definition = node.dataset.i18nAttr;
    if (!definition) return;
    const [attrName, key] = definition.split(":");
    if (!attrName || !key) return;
    const resolved = getByPath(key);
    if (!isL10n(resolved)) return;
    node.setAttribute(attrName, localize(resolved, lang));
  });

  setLanguageSwitchState(lang);
};

const setLang = (lang: Lang): void => {
  setLangInUrl(lang);
  persistLang(lang);
  syncLangToHtml(lang);
  applyI18n(lang);
};

export const initI18nClient = (): void => {
  const lang = getInitialLang();
  applyI18n(lang);

  (window as Window & { __setLang?: (next: Lang) => void }).__setLang = setLang;

  window.addEventListener("popstate", () => {
    const current = new URLSearchParams(window.location.search).get("lang");
    const langFromUrl: Lang = current === "en" ? "en" : "nl";
    persistLang(langFromUrl);
    syncLangToHtml(langFromUrl);
    applyI18n(langFromUrl);
  });
};
