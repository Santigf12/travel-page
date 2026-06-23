// src/data/who-we-are.ts

import type { Locale } from '@/i18n/dictionaries';
import whoWeAreData from './data/who-we-are.json';

type LocalizedRecord<T> = Record<Locale, T>;

export type WhoWeAreHighlightIcon = 'building' | 'sparkles' | 'world';

export type WhoWeAreHero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  contactUs: string;
  exploreTrips: string;
};

export type WhoWeAreHighlight = {
  icon: WhoWeAreHighlightIcon;
  value: string;
  label: string;
};

export type WhoWeAreMission = {
  eyebrow: string;
  title: string;
  body: string;
  body2: string;
};

export type WhoWeAreCompanyCard = {
  title: string;
  body: string;
};

export type WhoWeAreHistoryItem = {
  year: string;
  title: string;
  description: string;
};

export type WhoWeAreHistory = {
  title: string;
  items: WhoWeAreHistoryItem[];
};

export type WhoWeAreReview = {
  quote: string;
  name: string;
  country: string;
};

export type WhoWeAreReviews = {
  title: string;
  subtitle: string;
  items: WhoWeAreReview[];
};

export type WhoWeAreContent = {
  hero: WhoWeAreHero;
  highlights: WhoWeAreHighlight[];
  mission: WhoWeAreMission;
  companyCard: WhoWeAreCompanyCard;
  history: WhoWeAreHistory;
  reviews: WhoWeAreReviews;
};

export const whoWeAreContent = whoWeAreData as LocalizedRecord<WhoWeAreContent>;

export function getWhoWeAreContent(locale: Locale) {
  return whoWeAreContent[locale];
}
