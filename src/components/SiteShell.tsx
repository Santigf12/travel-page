'use client';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNavigation } from '@/components/SiteNavigation';
import { getLocale, type Locale } from '@/i18n/dictionaries';
import { getFooterLabels, getNavLabels } from '@/types/navigation';
import { Anchor, AppShell, Burger, Container, Group, ScrollArea, Stack, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const params = useParams<{ locale?: string }>();

  const locale: Locale = getLocale(params.locale ?? 'en');

  const nav = getNavLabels(locale);
  const footer = getFooterLabels(locale);

  // Lock body scroll while the mobile nav drawer is open
  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  return (
    <AppShell
      padding={0}
      header={{ height: 132 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between" align="center">
            <Anchor component={Link} href={`/${locale}`} underline="never">
              <div style={{ position: 'relative', width: 200, height: 80 }}>
                <Image
                  src="/logo_alico.png"
                  alt="Alico Tours"
                  fill
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </div>
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
        <ScrollArea h="100%" type="hover" scrollbarSize={4}>
          <Stack gap="md">
            <SiteNavigation
              locale={locale}
              labels={nav}
              orientation="vertical"
              onNavigate={close}
            />

            <LanguageSwitcher />
          </Stack>
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <SiteFooter locale={locale} nav={nav} labels={footer} />
      </AppShell.Main>
    </AppShell>
  );
}