import { FeatureCard } from '@/components/FeatureCard';
import { getTripsByCategory } from '@/data/trips';
import {
  generateLocaleParams,
  isValidLocale,
  type Locale,
} from '@/i18n/dictionaries';
import { Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const generateStaticParams = generateLocaleParams;

export default async function TripsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const tripCards = getTripsByCategory('fits').map((trip) => ({
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
      pt={{ base: 180, md: 200 }}
      pb={{ base: 80, md: 120 }}
    >
      <Stack gap="md" align="center" ta="center">
        <Title
          order={2}
          c="alicoBlue.7"
          fw={400}
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            marginBottom: 0,
          }}
        >
          FIT’s
        </Title>

        <Text
          maw={{ base: 760, md: 1000, lg: 1120 }}
          mx="auto"
          c="sand.7"
          fz="1.05rem"
          lh={1.7}
        >
          Our FIT’S packages are in Seat-in coach and range from half or one-day
          excursions to over 15-day tours. All our itineraries are flexible and
          can be tailor made according to the interest of the client or budget.
          Featuring wildlife, beach, culture, history, sceneries, nature, local
          communities and thrilling activities. And of course, our selection of
          hotels are conveniently located near the main attractions.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 'xl', md: 75 }}
        mt={{ base: 50, md: 80 }}
      >
        {tripCards.map((trip) => (
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
    </Container>
  );
}