// src/app/layout.tsx

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { theme } from '@/theme';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alico Tours',
  description: 'Luxury travel experiences in Mexico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}