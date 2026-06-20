// src/types/handpicked-travel.ts

import type { Locale } from "@/i18n/dictionaries";
import handpickedTravelData from "./data/handpicked-travel.json";

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;

export type HandpickedTravelStay = {
  hotel: LocalizedString;
  tag: LocalizedString;
  description: LocalizedString;
  room?: LocalizedString;
  image: string;
};

export type HandpickedTravelItineraryDay = {
  day: number;
  location: LocalizedString;
  narrative: LocalizedStringArray;
  stay?: HandpickedTravelStay | null;
  optional?: LocalizedString | null;
};

export type HandpickedTravelItem = {
  slug: string;
  collection: LocalizedString;
  title: LocalizedString;
  duration: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  heroImage: string;
  highlights: LocalizedStringArray;
  included: LocalizedStringArray;
  itinerary: HandpickedTravelItineraryDay[];
};

export const handpickedTravelItems = handpickedTravelData as HandpickedTravelItem[];

export type HandpickedTravelCategory = (typeof handpickedTravelItems)[number]["slug"];

export function getAllHandpickedTravelItems() {
  return handpickedTravelItems;
}

export function getHandpickedTravelBySlug(slug: HandpickedTravelCategory) {
  return handpickedTravelItems.find((item) => item.slug === slug);
}

export function getHandpickedTravelSlugs() {
  return handpickedTravelItems.map((item) => item.slug);
}

export function getHandpickedTravelText<T extends Record<Locale, unknown>>(value: T, locale: Locale) {
  return value[locale];
}
