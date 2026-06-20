// src/types/about.ts

import type { Locale } from "@/i18n/dictionaries";
import aboutData from "./data/about.json";

export type AboutIconKey = "calendar" | "cloudRain" | "creditCard" | "hanger" | "mapPin" | "shieldCheck" | "steam" | "sun" | "users";

export type AboutBasicSection = {
  id: string;
  badge: string;
  title: string;
  description: string;
};

export type AboutCard = {
  icon: AboutIconKey;
  title: string;
  description: string;
};

export type AboutQuickNotes = {
  title: string;
  paragraphs: string[];
  packingTitle: string;
  packing: string[];
  tip: string;
};

export type AboutAccordionItem = {
  value: string;
  title: string;
  content: string[];
};

export type AboutGroup = {
  icon: AboutIconKey;
  title: string;
  items: AboutAccordionItem[];
};

export type AboutContent = {
  whereToGo: AboutBasicSection;
  whenToGo: AboutBasicSection & {
    cards: AboutCard[];
    quickNotes: AboutQuickNotes;
  };
  howToGo: AboutBasicSection & {
    groups: AboutGroup[];
  };
};

export const aboutContent = aboutData as Record<Locale, AboutContent>;

export function getAboutContent(locale: Locale): AboutContent {
  return aboutContent[locale];
}
