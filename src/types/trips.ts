// src/types/trips.ts

import type { Locale } from "@/i18n/dictionaries";
import fitsData from "./data/fits.json";
import groupsData from "./data/groups.json";
import tripsPageData from "./data/trips.json";

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;

export type TripCategory = "fits" | "groups" | "one-day-tours";

export type TripItineraryDay = {
  day: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type Trip = {
  slug: string;
  category: TripCategory;
  image: string;
  duration: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedStringArray;
  itinerary: TripItineraryDay[];
  included: LocalizedStringArray;
};

export type TripsPageSection = {
  title: string;
  description: string;
};

export type TripsPageContent = {
  fits: TripsPageSection;
  groups: TripsPageSection;
};

export const fitsTrips = fitsData as Trip[];
export const groupTrips = groupsData as Trip[];

export const trips = [...fitsTrips, ...groupTrips];

export const tripsPageContent = tripsPageData as Record<Locale, TripsPageContent>;

export function getFitsTrips() {
  return fitsTrips;
}

export function getGroupTrips() {
  return groupTrips;
}

export function getAllTrips() {
  return trips;
}

export function getTripsByCategory(category: TripCategory) {
  if (category === "fits") {
    return fitsTrips;
  }

  if (category === "groups") {
    return groupTrips;
  }

  return trips.filter((trip) => trip.category === category);
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}

export function getTripsPageContent(locale: Locale) {
  return tripsPageContent[locale];
}

export function getTripText<T extends Record<Locale, unknown>>(value: T, locale: Locale) {
  return value[locale];
}
