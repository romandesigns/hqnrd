import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  //@ts-ignore
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  //@ts-ignore
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
