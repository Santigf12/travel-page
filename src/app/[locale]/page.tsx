// src/app/[locale]/page.tsx
import { HeroCarousel } from '@/components/HeroCarousel';
import { TripsCarousel } from '@/components/TripsCarousel';
import { getDictionary, isValidLocale } from '@/i18n/dictionaries';
import { Box, Container, Text, Title } from '@mantine/core';

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const t = getDictionary(locale)

  return (
    <>
      <HeroCarousel slides={t.home.hero} />

      <Box bg="alicoBlue.7" py={{ base: 80, md: 120 }}>
        <Container size="sm" ta="center">
          <Text c="sand.0" fz={{ base: 'lg', md: 'xl' }} lh={1.45}>
            {t.home.intro}
          </Text>
          <Text mt="lg" c="sand.0" fz="xs" tt="uppercase" lts="0.12em">
            {t.home.tagline}
          </Text>
          <Box mt={8} mx="auto" w={260} h={1} bg="sand.0" opacity={0.8} />
        </Container>
      </Box>

      <TripsCarousel {...t.tripsCarousel} />

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
            {t.home.about.eyebrow}
          </Text>
          <Title order={2} ta="center" fw={400} mb="xl">
            {t.home.about.title}
          </Title>
          <Text c="sand.9" fz={{ base: 'lg', md: 'xl' }} lh={1.6} ta="center">
            {t.home.about.body}
          </Text>
          <Text c="sand.9" fz={{ base: 'md', md: 'lg' }} lh={1.6} ta="center" mt="lg">
            {t.home.about.body2}
          </Text>
        </Container>
      </Box>
    </>
  );
}