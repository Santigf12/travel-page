'use client';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNavigation } from '@/components/SiteNavigation';
import { getLocale, type Locale } from '@/i18n/dictionaries';
import { getFooterLabels, getNavLabels } from '@/types/navigation';
import {
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Image,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const params = useParams<{ locale?: string }>();

  const locale: Locale = getLocale(params.locale ?? 'en');

  const nav = getNavLabels(locale);
  const footer = getFooterLabels(locale);

  return (
    <AppShell
      padding={0}
      header={{ height: 132, offset: false }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header withBorder={false}>
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between" align="center">
            <Anchor component={Link} href={`/${locale}`} underline="never">
              <Image
                src="/logo_alico.png"
                alt="Alico Tours"
                w={200}
                fit="contain"
              />
            </Anchor>

            <Group visibleFrom="sm" gap="xl">
              <SiteNavigation locale={locale} labels={nav} />
              <LanguageSwitcher />
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="md">
          <SiteNavigation
            locale={locale}
            labels={nav}
            orientation="vertical"
            onNavigate={close}
          />

          <LanguageSwitcher />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <SiteFooter locale={locale} nav={nav} labels={footer} />
      </AppShell.Main>
    </AppShell>
  );
}