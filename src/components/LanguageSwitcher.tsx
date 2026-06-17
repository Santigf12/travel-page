'use client';

import type { Locale } from '@/i18n/dictionaries';
import { Anchor, Group } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales: Locale[] = ['en', 'es', 'fr'];

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split('/');

  if (parts[1] === 'en' || parts[1] === 'es' || parts[1] === 'fr') {
    parts[1] = nextLocale;
    return parts.join('/');
  }

  return `/${nextLocale}`;
}

function getCurrentLocale(pathname: string): Locale {
  const locale = pathname.split('/')[1];

  if (locale === 'es' || locale === 'fr' || locale === 'en') {
    return locale;
  }

  return 'en';
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  return (
    <Group gap={8}>
      {locales.map((locale, index) => {
        const isActive = locale === currentLocale;

        return (
          <Group key={locale} gap={8}>
            <Anchor
                component={Link}
                href={getLocalizedPath(pathname, locale)}
                c="sand.9"
                size="sm"
                fw={500}
                tt="uppercase"
                style={{
                    borderBottom: isActive
                    ? '2px solid var(--mantine-color-aztecGold-4)'
                    : '2px solid transparent',
                    paddingBottom: 2,
                }}
            >
                {locale}
            </Anchor>

            {index < locales.length - 1 && (
              <span style={{ color: 'var(--mantine-color-sand-5)' }}>|</span>
            )}
          </Group>
        );
      })}
    </Group>
  );
}