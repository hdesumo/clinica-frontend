import "server-only";

const dictionaries: Record<string, () => Promise<any>> = {
  en: () =>
    import("./dictionaries/en.json").then((module) => module.default),
  fr: () =>
    import("./dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale]) {
    return dictionaries["en"]();
  }

  return dictionaries[locale]();
};
