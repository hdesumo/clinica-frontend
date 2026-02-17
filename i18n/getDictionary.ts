import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
};

export const getDictionary = async (locale: string) => {
  const safeLocale = locale === "fr" ? "fr" : "en";
  return dictionaries[safeLocale]();
};
