// src/types/brochures.ts

import type { Locale } from "@/i18n/dictionaries";
import brochuresData from "./data/brochures.json";

type LocalizedRecord<T> = Record<Locale, T>;

export type BrochureFile = {
  label: string;
  code: string;
  href: string;
};

export type Brochure = {
  title: string;
  description: string;
  image: string;
  files: BrochureFile[];
};

export type BrochuresContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  chooseLanguage: string;
  viewBrochure: string;
  downloadPdf: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  brochure: Brochure;
};

export const brochuresContent = brochuresData as LocalizedRecord<BrochuresContent>;

export function getBrochuresContent(locale: Locale) {
  return brochuresContent[locale];
}
