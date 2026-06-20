// src/types/navigation.ts

import type { Locale, LocalizedRecord } from "@/i18n/dictionaries";
import navigationData from "./data/navigation.json";

export type NavLabels = {
  home: string;
  aboutMexico: string;
  trips: string;
  handpickedTravel: string;
  whoWeAre: string;
  contact: string;
  submenus: {
    aboutMexico: {
      whereToGo: string;
      whenToGo: string;
      howToGo: string;
    };
    trips: {
      fits: string;
      groups: string;
      oneDayTours: string;
    };
    whoWeAre: {
      aboutUs: string;
      newsletter?: string;
      careers: string;
    };
  };
};

export type FooterLabels = {
  copyright: string;
  tagline: string;
  contact: {
    title: string;
    contact: string;
  };
  legal: {
    title: string;
    privacyPolicy: string;
    profecoFolio: string;
    expediente: string;
    contrato: string;
  };
};

export type NavigationContent = {
  nav: NavLabels;
  footer: FooterLabels;
};

export const navigationContent = navigationData as LocalizedRecord<NavigationContent>;

export function getNavigationContent(locale: Locale): NavigationContent {
  return navigationContent[locale];
}

export function getNavLabels(locale: Locale): NavLabels {
  return navigationContent[locale].nav;
}

export function getFooterLabels(locale: Locale): FooterLabels {
  return navigationContent[locale].footer;
}
