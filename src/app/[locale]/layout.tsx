// src/app/[locale]/layout.tsx

import { SiteShell } from '@/components/SiteShell';
import { generateLocaleParams } from '@/i18n/dictionaries';

export const generateStaticParams = generateLocaleParams;

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}