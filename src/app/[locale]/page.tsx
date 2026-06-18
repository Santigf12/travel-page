// src/app/[locale]/page.tsx

import { HeroCarousel } from '@/components/HeroCarousel';
import { TripsCarousel } from '@/components/TripsCarousel';
import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getHomeContent } from '@/types/home';
import { Box, Container, Text, Title } from '@mantine/core';

export const generateStaticParams = generateLocaleParams;

export default async function HomePage({ params,}: { params: Promise<{ locale: string }>; }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const home = getHomeContent(locale);

  return (
    <>
      <HeroCarousel slides={home.hero} />

      <Box bg="alicoBlue.7" py={{ base: 80, md: 120 }}>
        <Container size="sm" ta="center">
          <Text c="sand.0" fz={{ base: 'lg', md: 'xl' }} lh={1.45}>
            {home.intro}
          </Text>

          <Text mt="lg" c="sand.0" fz="xs" tt="uppercase" lts="0.12em">
            {home.tagline}
          </Text>

          <Box mt={8} mx="auto" w={260} h={1} bg="sand.0" opacity={0.8} />
        </Container>
      </Box>

      <TripsCarousel locale={locale} />

      <Box bg="sand.1" py={{ base: 70, md: 100 }}>
        <Container size="md">
          <Text
            c="aztecGold.6"
            tt="uppercase"
            lts="0.16em"
            size="sm"
            fw={600}
            ta="center"
            mb="md"
          >
            {home.about.eyebrow}
          </Text>

          <Title order={2} ta="center" fw={400} mb="xl">
            {home.about.title}
          </Title>

          <Text c="sand.9" fz={{ base: 'lg', md: 'xl' }} lh={1.6} ta="center">
            {home.about.body}
          </Text>

          <Text
            c="sand.9"
            fz={{ base: 'md', md: 'lg' }}
            lh={1.6}
            ta="center"
            mt="lg"
          >
            {home.about.body2}
          </Text>
        </Container>
      </Box>
    </>
  );
}