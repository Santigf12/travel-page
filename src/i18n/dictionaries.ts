// src/i18n/dictionaries.ts

export const locales = ["en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedRecord<T> = Record<Locale, T>;

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : "en";
}

export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
