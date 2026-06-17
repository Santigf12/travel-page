// src/components/SiteNavigation.tsx

'use client';

import type { Locale, NavLabels } from '@/i18n/dictionaries';
import { Anchor, Menu, Stack } from '@mantine/core';
import Link from 'next/link';

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

type SiteNavigationProps = {
  locale: Locale;
  labels: NavLabels;
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
};

function getNavItems(locale: Locale, labels: NavLabels): NavItem[] {
  const s = labels.submenus;
  return [
    {
      label: labels.aboutMexico,
      href: `/${locale}/about-mexico`,
      children: [
        { label: s.aboutMexico.whereToGo, href: `/${locale}/about-mexico/where-to-go` },
        { label: s.aboutMexico.whenToGo,  href: `/${locale}/about-mexico/when-to-go` },
        { label: s.aboutMexico.howToGo,   href: `/${locale}/about-mexico/how-to-go` },
      ],
    },
    {
      label: labels.trips,
      href: `/${locale}/trips`,
      children: [
        { label: s.trips.fits,        href: `/${locale}/trips/fits` },
        { label: s.trips.groups,      href: `/${locale}/trips/groups` },
        { label: s.trips.oneDayTours, href: `/${locale}/trips/one-day-tours` },
      ],
    },
    {
      label: labels.handpickedTravel,
      href: `/${locale}/handpicked-travel`,
      children: [
        { label: s.handpickedTravel.luxuryExperiences,  href: `/${locale}/handpicked-travel/luxury-experiences` },
        { label: s.handpickedTravel.gastronomicTours,   href: `/${locale}/handpicked-travel/gastronomic-tours` },
        { label: s.handpickedTravel.photographicTours,  href: `/${locale}/handpicked-travel/photographic-tours` },
        { label: s.handpickedTravel.incentives,         href: `/${locale}/handpicked-travel/incentives` },
        { label: s.handpickedTravel.weddings,           href: `/${locale}/handpicked-travel/weddings` },
        { label: s.handpickedTravel.mexicanWomenTrails, href: `/${locale}/handpicked-travel/mexican-women-trails` },
        { label: s.handpickedTravel.nativeCultures,     href: `/${locale}/handpicked-travel/native-cultures` },
        { label: s.handpickedTravel.socialAwareness,    href: `/${locale}/handpicked-travel/social-awareness` },
        { label: s.handpickedTravel.dayOfTheDead,       href: `/${locale}/handpicked-travel/day-of-the-dead` },
        { label: s.handpickedTravel.architecture,       href: `/${locale}/handpicked-travel/architecture` },
      ],
    },
    {
      label: labels.whoWeAre,
      href: `/${locale}/who-we-are`,
      children: [
        { label: s.whoWeAre.aboutUs,    href: `/${locale}/who-we-are/about-us` },
        { label: s.whoWeAre.newsletter, href: `/${locale}/who-we-are/newsletter` },
        { label: s.whoWeAre.careers,    href: `/${locale}/who-we-are/careers` },
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
            <Anchor component={Link} href={item.href} c="sand.9" fw={600} onClick={onNavigate}>
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
          <Menu key={item.href} trigger="hover" openDelay={100} closeDelay={150} withinPortal>
            <Menu.Target>
              <Anchor component={Link} href={item.href} c="sand.9" size="sm" fw={500}>
                {item.label}
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>{item.label}</Menu.Label>
              {item.children.map((child) => (
                <Menu.Item key={child.href} component={Link} href={child.href} c="sand.8">
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