// src/components/SiteFooter.tsx

import type { Locale } from '@/i18n/dictionaries';
import { getAllHandpickedTravelItems } from '@/types/handpicked-travel';
import type { FooterLabels, NavLabels } from '@/types/navigation';
import { Anchor, Box, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import Link from 'next/link';

type SiteFooterProps = {
  locale: Locale;
  nav: NavLabels;
  labels: FooterLabels;
};

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Anchor
        component={Link}
        href={href}
        c="sand.8"
        size="sm"
        lh={1.4}
        style={{ width: 'fit-content' }}
      >
        {label}
      </Anchor>
    );
  }

  return (
    <Anchor
      href={href}
      c="sand.8"
      size="sm"
      lh={1.4}
      style={{ width: 'fit-content' }}
    >
      {label}
    </Anchor>
  );
}

function getHandpickedTravelFooterLinks(locale: Locale): FooterLinkItem[] {
  return getAllHandpickedTravelItems().map((item) => ({
    label: item.title[locale],
    href: `/${locale}/handpicked-travel/${item.slug}`,
  }));
}

export function SiteFooter({ locale, nav, labels }: SiteFooterProps) {
  const s = nav.submenus;

  const columns: FooterSection[][] = [
    [
      {
        title: nav.aboutMexico,
        links: [
          {
            label: s.aboutMexico.whereToGo,
            href: `/${locale}/about-mexico#where-to-go`,
          },
          {
            label: s.aboutMexico.whenToGo,
            href: `/${locale}/about-mexico#when-to-go`,
          },
          {
            label: s.aboutMexico.howToGo,
            href: `/${locale}/about-mexico#how-to-go`,
          },
        ],
      },
      {
        title: nav.trips,
        links: [
          {
            label: s.trips.fits,
            href: `/${locale}/trips#fits`,
          },
          {
            label: s.trips.groups,
            href: `/${locale}/trips#groups`,
          },
          {
            label: s.trips.oneDayTours,
            href: `/${locale}/trips#one-day-tours`,
          },
        ],
      },
    ],
    [
      {
        title: nav.handpickedTravel,
        links: getHandpickedTravelFooterLinks(locale),
      },
    ],
    [
      {
        title: nav.whoWeAre,
        links: [
          {
            label: s.whoWeAre.aboutUs,
            href: `/${locale}/who-we-are#about-us`,
          },
          {
            label: s.whoWeAre.careers,
            href: `/${locale}/who-we-are#careers`,
          },
        ],
      },
      {
        title: labels.contact.title,
        links: [
          {
            label: labels.contact.contact,
            href: `/${locale}/contact`,
          },
          {
            label: 'alico@alico.com.mx',
            href: 'mailto:alico@alico.com.mx',
          },
          {
            label: '+52 (55) 5575-1774',
            href: 'tel:+525555751774',
          },
        ],
      },
    ],
    [
      {
        title: labels.legal.title,
        links: [
          {
            label: labels.legal.privacyPolicy,
            href: `/${locale}/private-policy`,
          },
          {
            label: labels.legal.profecoFolio,
            href: '#profeco',
          },
          {
            label: labels.legal.expediente,
            href: '#record',
          },
          {
            label: labels.legal.contrato,
            href: '#contract',
          },
        ],
      },
    ],
  ];

  return (
    <Box
      bg="sand.0"
      pt={{ base: 60, md: 90 }}
      pb="xl"
      style={{
        borderTop: '1px solid rgba(44, 43, 40, 0.18)',
      }}
    >
      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 'xl', md: 60 }}
        >
          {columns.map((column, columnIndex) => (
            <Stack key={columnIndex} gap="xl">
              {column.map((section) => (
                <Stack key={section.title} gap="sm">
                  <Text fw={700} c="sand.9">
                    {section.title}
                  </Text>

                  {section.links.map((link) => (
                    <FooterLink
                      key={`${section.title}-${link.href}`}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </Stack>
              ))}
            </Stack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 50, md: 80 }}
          pt="lg"
          style={{ borderTop: '1px solid var(--mantine-color-sand-2)' }}
        >
          <Group justify="space-between" align="center" gap="md">
            <Text c="sand.7" size="sm">
              {labels.copyright}
            </Text>

            <Text c="sand.7" size="sm">
              {labels.tagline}
            </Text>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}