// src/types/contact.ts

import type { Locale, LocalizedRecord } from "@/i18n/dictionaries";
import contactData from "./data/contact.json";

export type ContactIconName = "sparkles" | "users" | "buildingStore" | "calculator";

export type ContactEntry = {
  name: string;
  role?: string;
  email: string;
  office?: string;
  whatsapp?: string;
};

export type ContactSectionTitleKey = "quotationTitle" | "operationsTitle" | "supplierTitle" | "accountingTitle";

export type ContactSectionDescriptionKey = "quotationDescription" | "operationsDescription" | "supplierDescription" | "accountingDescription";

export type ContactSection = {
  title: ContactSectionTitleKey;
  description: ContactSectionDescriptionKey;
  icon: ContactIconName;
  contacts: ContactEntry[];
};

export type ContactGeneralInfo = {
  email: string;
  phone: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;

  generalTitle: string;
  generalDescription: string;
  tourOperator: string;

  quotationTitle: string;
  quotationDescription: string;
  operationsTitle: string;
  operationsDescription: string;
  supplierTitle: string;
  supplierDescription: string;
  accountingTitle: string;
  accountingDescription: string;

  office: string;
  whatsapp: string;
  email: string;

  generalContact: ContactGeneralInfo;
  sections: ContactSection[];
};

export const contactContent = contactData as LocalizedRecord<ContactContent>;

export function getContactContent(locale: Locale): ContactContent {
  return contactContent[locale];
}

export function getAllContactSections(locale: Locale): ContactSection[] {
  return contactContent[locale].sections;
}
