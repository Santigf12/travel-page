// src/data/privacy.ts

import type { Locale } from "@/i18n/dictionaries";
import privacyData from "./data/privacy.json";

type LocalizedRecord<T> = Record<Locale, T>;

export type PrivacySection = {
  title: string;
  body?: string[];
  items?: string[];
};

export type PrivacyContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  contactTitle: string;
  company: string;
  address: string;
  email: string;
  sections: PrivacySection[];
};

export const privacyContent = privacyData as LocalizedRecord<PrivacyContent>;

export function getPrivacyContent(locale: Locale) {
  return privacyContent[locale];
}
