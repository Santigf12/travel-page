// src/data/home.ts

import type { Locale } from "@/i18n/dictionaries";
import homeData from "./data/home.json";

type LocalizedRecord<T> = Record<Locale, T>;

export type HomeHeroSlide = {
  image: string;
  title: string;
  subtitle: string;
};

export type HomeContent = {
  hero: HomeHeroSlide[];
  intro: string;
  tagline: string;
  about: {
    eyebrow: string;
    title: string;
    body: string;
    body2: string;
  };
};

export const homeContent = homeData as LocalizedRecord<HomeContent>;

export function getHomeContent(locale: Locale) {
  return homeContent[locale];
}
