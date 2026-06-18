// src/data/trips.ts

import type { Locale } from "@/i18n/dictionaries";
import tripsData from "./trips.json";

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;

export type TripItineraryDay = {
  day: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type Trip = {
  slug: string;
  category: "fits" | "groups" | "one-day-tours";
  image: string;
  duration: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedStringArray;
  itinerary: TripItineraryDay[];
  included: LocalizedStringArray;
};

export const trips = tripsData as Trip[];

export function getTripsByCategory(category: Trip["category"]) {
  return trips.filter((trip) => trip.category === category);
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}

export function getTripText<T extends Record<Locale, unknown>>(value: T, locale: Locale) {
  return value[locale];
}
