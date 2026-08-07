// src/app/layout.tsx

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { theme } from '@/theme';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Alico Tours',
  description: 'Luxury travel experiences in Mexico',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
        <Script
          defer
          src="https://annex.fuentes.it.com/script.js"
          data-website-id="937ec941-82cc-41cf-ac07-2ea0ef79a4d7"
          data-host-url="https://annex.fuentes.it.com"
          data-performance="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}