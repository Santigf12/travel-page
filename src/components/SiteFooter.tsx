// src/components/SiteFooter.tsx

import type { Locale } from '@/i18n/dictionaries';
import type { FooterLabels, NavLabels } from '@/types/navigation';
import { Anchor, Box, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import Link from 'next/link';

type SiteFooterProps = {
  locale: Locale;
  nav: NavLabels;
  labels: FooterLabels;
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

export function SiteFooter({ locale, nav, labels }: SiteFooterProps) {
  const s = nav.submenus;

  const columns = [
    [
      {
        title: nav.aboutMexico,
        links: [
          {
            label: s.aboutMexico.whereToGo,
            href: `/${locale}/about-mexico/where-to-go`,
          },
          {
            label: s.aboutMexico.whenToGo,
            href: `/${locale}/about-mexico/when-to-go`,
          },
          {
            label: s.aboutMexico.howToGo,
            href: `/${locale}/about-mexico/how-to-go`,
          },
        ],
      },
      {
        title: nav.trips,
        links: [
          {
            label: s.trips.fits,
            href: `/${locale}/trips`,
          },
          {
            label: s.trips.groups,
            href: `/${locale}/trips/groups`,
          },
          {
            label: s.trips.oneDayTours,
            href: `/${locale}/trips/one-day-tours`,
          },
        ],
      },
    ],
    [
      {
        title: nav.handpickedTravel,
        links: [
          {
            label: s.handpickedTravel.luxuryExperiences,
            href: `/${locale}/handpicked-travel/luxury-experiences`,
          },
          {
            label: s.handpickedTravel.gastronomicTours,
            href: `/${locale}/handpicked-travel/gastronomic-tours`,
          },
          {
            label: s.handpickedTravel.photographicTours,
            href: `/${locale}/handpicked-travel/photographic-tours`,
          },
          {
            label: s.handpickedTravel.incentives,
            href: `/${locale}/handpicked-travel/incentives`,
          },
          {
            label: s.handpickedTravel.weddings,
            href: `/${locale}/handpicked-travel/weddings`,
          },
          {
            label: s.handpickedTravel.mexicanWomenTrails,
            href: `/${locale}/handpicked-travel/mexican-women-trails`,
          },
          {
            label: s.handpickedTravel.nativeCultures,
            href: `/${locale}/handpicked-travel/native-cultures`,
          },
          {
            label: s.handpickedTravel.socialAwareness,
            href: `/${locale}/handpicked-travel/social-awareness`,
          },
          {
            label: s.handpickedTravel.dayOfTheDead,
            href: `/${locale}/handpicked-travel/day-of-the-dead`,
          },
          {
            label: s.handpickedTravel.architecture,
            href: `/${locale}/handpicked-travel/architecture`,
          },
        ],
      },
    ],
    [
      {
        title: nav.whoWeAre,
        links: [
          {
            label: s.whoWeAre.aboutUs,
            href: `/${locale}/who-we-are/about-us`,
          },
          {
            label: s.whoWeAre.newsletter,
            href: `/${locale}/who-we-are/newsletter`,
          },
          {
            label: s.whoWeAre.careers,
            href: `/${locale}/who-we-are/careers`,
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
            href: '#',
          },
          {
            label: labels.legal.profecoFolio,
            href: '#',
          },
          {
            label: labels.legal.expediente,
            href: '#',
          },
          {
            label: labels.legal.contrato,
            href: '#',
          },
        ],
      },
    ],
  ];

  return (
    <Box bg="sand.0" pt={{ base: 60, md: 90 }} pb="xl">
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
                      key={`${section.title}-${link.label}`}
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