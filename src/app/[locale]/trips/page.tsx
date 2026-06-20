import { FeatureCard } from '@/components/FeatureCard';
import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import {
  getFitsTrips,
  getGroupTrips,
  getOneDayTours,
  getTripsPageContent,
} from '@/types/trips';
import { Box, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const generateStaticParams = generateLocaleParams;

export default async function TripsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const pageContent = getTripsPageContent(locale);

  const fitCards = getFitsTrips().map((trip) => ({
    slug: trip.slug,
    image: trip.image,
    title: trip.title[locale],
    meta: trip.duration[locale],
    description: trip.summary[locale],
  }));

  const groupCards = getGroupTrips().map((trip) => ({
    slug: trip.slug,
    image: trip.image,
    title: trip.title[locale],
    meta: trip.duration[locale],
    description: trip.summary[locale],
  }));

  const oneDayTourCards = getOneDayTours().map((trip) => ({
    slug: trip.slug,
    image: trip.image,
    title: trip.title[locale],
    meta: trip.duration[locale],
    description: trip.summary[locale],
  }));

  return (
    <Container
      size={1500}
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 50, md: 65 }}
      pb={{ base: 80, md: 120 }}
    >
      <Stack gap="xl">
        <Box>
          <Stack gap="md" align="center" ta="center">
            <Title
              id="fits"
              order={2}
              c="alicoBlue.7"
              fw={400}
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                marginBottom: 0,
              }}
            >
              {pageContent.fits.title}
            </Title>

            <Text
              maw={{ base: 760, md: 1000, lg: 1120 }}
              mx="auto"
              c="sand.7"
              fz="1.05rem"
              lh={1.7}
            >
              {pageContent.fits.description}
            </Text>
          </Stack>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 'xl', md: 75 }}
            mt={{ base: 50, md: 80 }}
          >
            {fitCards.map((trip) => (
              <FeatureCard
                key={trip.slug}
                image={trip.image}
                title={trip.title}
                meta={trip.meta}
                description={trip.description}
                href={`/${locale}/trips/${trip.slug}`}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Stack gap="md" align="center" ta="center">
            <Title
              id="groups"
              order={2}
              c="alicoBlue.7"
              fw={400}
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                marginBottom: 0,
              }}
            >
              {pageContent.groups.title}
            </Title>

            <Text
              maw={{ base: 760, md: 1000, lg: 1120 }}
              mx="auto"
              c="sand.7"
              fz="1.05rem"
              lh={1.7}
            >
              {pageContent.groups.description}
            </Text>
          </Stack>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 'xl', md: 75 }}
            mt={{ base: 50, md: 80 }}
          >
            {groupCards.map((trip) => (
              <FeatureCard
                key={trip.slug}
                image={trip.image}
                title={trip.title}
                meta={trip.meta}
                description={trip.description}
                href={`/${locale}/trips/${trip.slug}`}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Stack gap="md" align="center" ta="center">
            <Title
              id="one-day-tours"
              order={2}
              c="alicoBlue.7"
              fw={400}
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                marginBottom: 0,
              }}
            >
              {pageContent.oneDayTours.title}
            </Title>

            <Text
              maw={{ base: 760, md: 1000, lg: 1120 }}
              mx="auto"
              c="sand.7"
              fz="1.05rem"
              lh={1.7}
            >
              {pageContent.oneDayTours.description}
            </Text>
          </Stack>

          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 'xl', md: 75 }}
            mt={{ base: 50, md: 80 }}
          >
            {oneDayTourCards.map((trip) => (
              <FeatureCard
                key={trip.slug}
                image={trip.image}
                title={trip.title}
                meta={trip.meta}
                description={trip.description}
                href={`/${locale}/trips/${trip.slug}`}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}