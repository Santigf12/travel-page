// src/components/SiteNavigation.tsx

'use client';

import type { Locale } from '@/i18n/dictionaries';
import { Anchor, Menu, Stack, Text } from '@mantine/core';
import Link from 'next/link';

type NavLabels = {
  home: string;
  aboutMexico: string;
  trips: string;
  handpickedTravel: string;
  whoWeAre: string;
  contact: string;
};

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

type SiteNavigationProps = {
  locale: Locale;
  labels: NavLabels;
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
};

function getNavItems(locale: Locale, labels: NavLabels): NavItem[] {
  return [
    {
      label: labels.aboutMexico,
      href: `/${locale}/about-mexico`,
      children: [
        { label: 'Where to go', href: `/${locale}/about-mexico/where-to-go` },
        { label: 'When to go', href: `/${locale}/about-mexico/when-to-go` },
        { label: 'How to go', href: `/${locale}/about-mexico/how-to-go` },
      ],
    },
    {
      label: labels.trips,
      href: `/${locale}/trips`,
      children: [
        { label: 'FITs', href: `/${locale}/trips/fits` },
        { label: 'Groups', href: `/${locale}/trips/groups` },
        { label: 'One day tours', href: `/${locale}/trips/one-day-tours` },
      ],
    },
    {
      label: labels.handpickedTravel,
      href: `/${locale}/handpicked-travel`,
      children: [
        {
          label: 'Luxury Experiences',
          href: `/${locale}/handpicked-travel/luxury-experiences`,
        },
        {
          label: 'Gastronomic tours',
          href: `/${locale}/handpicked-travel/gastronomic-tours`,
        },
        {
          label: 'Photographic tours',
          href: `/${locale}/handpicked-travel/photographic-tours`,
        },
        {
          label: 'Incentives',
          href: `/${locale}/handpicked-travel/incentives`,
        },
        {
          label: 'Weddings',
          href: `/${locale}/handpicked-travel/weddings`,
        },
        {
          label: 'Mexican women trails',
          href: `/${locale}/handpicked-travel/mexican-women-trails`,
        },
        {
          label: 'Native cultures',
          href: `/${locale}/handpicked-travel/native-cultures`,
        },
        {
          label: 'Social awareness',
          href: `/${locale}/handpicked-travel/social-awareness`,
        },
        {
          label: 'Day of the Dead',
          href: `/${locale}/handpicked-travel/day-of-the-dead`,
        },
        {
          label: 'Architecture',
          href: `/${locale}/handpicked-travel/architecture`,
        },
      ],
    },
    {
      label: labels.whoWeAre,
      href: `/${locale}/who-we-are`,
      children: [
        { label: 'About Us', href: `/${locale}/who-we-are/about-us` },
        {
          label: 'Subscribe to our newsletters',
          href: `/${locale}/who-we-are/newsletter`,
        },
        { label: 'Careers', href: `/${locale}/who-we-are/careers` },
      ],
    },
    {
      label: labels.contact,
      href: `/${locale}/contact`,
    },
  ];
}

export function SiteNavigation({
  locale,
  labels,
  orientation = 'horizontal',
  onNavigate,
}: SiteNavigationProps) {
  const navItems = getNavItems(locale, labels);

  if (orientation === 'vertical') {
    return (
      <Stack gap="lg">
        {navItems.map((item) => (
          <Stack key={item.href} gap={6}>
            <Anchor
              component={Link}
              href={item.href}
              c="sand.9"
              fw={600}
              onClick={onNavigate}
            >
              {item.label}
            </Anchor>

            {item.children?.map((child) => (
              <Anchor
                key={child.href}
                component={Link}
                href={child.href}
                c="sand.7"
                size="sm"
                pl="md"
                onClick={onNavigate}
              >
                {child.label}
              </Anchor>
            ))}
          </Stack>
        ))}
      </Stack>
    );
  }

  return (
    <>
      {navItems.map((item) => {
        if (!item.children) {
          return (
            <Anchor
              key={item.href}
              component={Link}
              href={item.href}
              c="sand.9"
              size="sm"
              fw={500}
              onClick={onNavigate}
            >
              {item.label}
            </Anchor>
          );
        }

        return (
          <Menu
            key={item.href}
            trigger="hover"
            openDelay={100}
            closeDelay={150}
            withinPortal
          >
            <Menu.Target>
              <Anchor
                component={Link}
                href={item.href}
                c="sand.9"
                size="sm"
                fw={500}
              >
                {item.label}
              </Anchor>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>{item.label}</Menu.Label>

              {item.children.map((child) => (
                <Menu.Item
                  key={child.href}
                  component={Link}
                  href={child.href}
                  c="sand.8"
                >
                  {child.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        );
      })}
    </>
  );
}