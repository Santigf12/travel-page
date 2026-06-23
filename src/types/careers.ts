// src/data/careers.ts

import type { Locale } from "@/i18n/dictionaries";
import careersData from "./data/careers.json";

type LocalizedRecord<T> = Record<Locale, T>;

export type CareersContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  cardBody: string;
  note: string;
  email: string;
  button: string;
};

export const careersContent = careersData as LocalizedRecord<CareersContent>;

export function getCareersContent(locale: Locale) {
  return careersContent[locale];
}
