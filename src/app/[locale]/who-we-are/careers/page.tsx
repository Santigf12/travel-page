// src/app/[locale]/who-we-are/careers/page.tsx

import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getCareersContent } from '@/types/careers';
import { Box, Button, Card, Container, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconMail, IconSparkles, IconUsersGroup } from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const content = getCareersContent(locale);

  return (
    <Box bg="sand.1">
      <Container
        size={1100}
        px={{ base: 'md', md: 'xl' }}
        pt={{ base: 50, md: 65 }}
        pb={{ base: 50, md: 65 }}
      >
        <Stack gap={44} align="center">
          <Stack gap="md" align="center" ta="center">
            <Group gap={6} justify="center">
              <ThemeIcon size="xs" radius="xl" variant="light" color="aztecGold" style={{ background: 'transparent' }}>
                <IconSparkles size={14} stroke={2} />
              </ThemeIcon>

              <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
                {content.eyebrow}
              </Text>
            </Group>

            <Title order={1} c="alicoBlue.8" fw={400} style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', lineHeight: 1.05 }}>
              {content.title}
            </Title>

            <Text c="sand.8" fz={{ base: 'md', md: 'lg' }} maw={760} mx="auto" lh={1.65}>
              {content.subtitle}
            </Text>
          </Stack>

          <Card
            radius="xl"
            p={{ base: 'xl', md: 44 }}
            bg="white"
            withBorder
            maw={820}
            w="100%"
            style={{
              borderColor: 'var(--mantine-color-sand-2)',
              boxShadow: '0 18px 45px rgba(44, 43, 40, 0.08)',
            }}
          >
            <Group gap="xl" align="flex-start" wrap="nowrap">
              <ThemeIcon color="alicoBlue" variant="light" radius="xl" size={58} style={{ flexShrink: 0 }}>
                <IconUsersGroup size={28} stroke={1.8} />
              </ThemeIcon>

              <Box>
                <Title order={2} c="sand.9" fw={400} mb="sm">
                  {content.cardTitle}
                </Title>

                <Text c="sand.8" lh={1.7} mb="md">
                  {content.cardBody}
                </Text>

                <Text c="sand.6" fs="italic" lh={1.6} mb="xl">
                  {content.note}
                </Text>

                <Button component="a" href={`mailto:${content.email}?subject=General%20Application%20-%20CV`} color="alicoBlue" radius="xl" leftSection={<IconMail size={17} />}>
                  {content.button}
                </Button>
              </Box>
            </Group>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
