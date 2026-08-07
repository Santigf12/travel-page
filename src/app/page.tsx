// src/app/page.tsx

import { LocaleRedirect } from '@/components/LocaleRedirect';

export default function RootPage() {
  return (
    <>
      <LocaleRedirect />

      <link rel="canonical" href="/en" />

      {/* Fallback for crawlers/JS-disabled visitors — LocaleRedirect handles everyone else */}
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en" />
      </noscript>
    </>
  );
}