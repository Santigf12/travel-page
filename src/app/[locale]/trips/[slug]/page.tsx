// src/app/[locale]/trips/[slug]/page.tsx

import { generateLocaleParams, isValidLocale, type Locale, } from '@/i18n/dictionaries';
import { getTripBySlug, trips } from '@/types/trips';
import { Anchor, Badge, Box, Button, Card, Container, Divider, Grid, GridCol, Group, Image, List, ListItem, Stack, Text, ThemeIcon, Title, } from '@mantine/core';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return generateLocaleParams().flatMap(({ locale }) =>
    trips.map((trip) => ({
      locale,
      slug: trip.slug,
    }))
  );
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const trip = getTripBySlug(slug);

  const tripPageText = (locale: Locale, key: 'overview' | 'itinerary' | 'highlights' | 'included') => ({ 
    en: { overview: 'Overview', itinerary: 'Itinerary', highlights: 'Highlights', included: 'Included' }, 
    es: { overview: 'Resumen', itinerary: 'Itinerario', highlights: 'Destacados', included: 'Incluido' }, 
    fr: { overview: 'Aperçu', itinerary: 'Itinéraire', highlights: 'Points forts', included: 'Inclus' } 
    }[locale][key]);

  if (!trip) {
    notFound();
  }

  const title = trip.title[locale];
  const duration = trip.duration[locale];
  const summary = trip.summary[locale];
  const description = trip.description[locale];
  const highlights = trip.highlights[locale];
  const included = trip.included[locale];

  return (
    <Container
      size={1500}
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 180, md: 200 }}
      pb={{ base: 80, md: 120 }}
    >
      <Stack gap="xl">
        <Stack gap="xs" align="center" ta="center">
          <Text
            c="sand.6"
            tt="uppercase"
            lts="0.18em"
            fz={{ base: 'xs', md: 'sm' }}
            fw={500}
          >
            Mexico Travel Package
          </Text>

          <Title
            order={1}
            c="sand.9"
            fw={400}
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              lineHeight: 1,
            }}
          >
            {title}
          </Title>

          <Text
            c="sand.7"
            fz={{ base: 'lg', md: 'xl' }}
            maw={720}
            mx="auto"
          >
            {summary}
          </Text>

          <Badge
            color="aztecGold"
            variant="light"
            size="lg"
            mt="sm"
            radius="sm"
          >
            {duration}
          </Badge>
        </Stack>

        <Image
          src={trip.image}
          alt={title}
          h={{ base: 280, md: 620 }}
          fit="cover"
          radius="xl"
          style={{
            boxShadow: '0 24px 60px rgba(44, 43, 40, 0.16)',
          }}
        />

        <Grid gap={{ base: 'xl', md: 70 }} align="flex-start">
          <GridCol span={{ base: 12, md: 8 }}>
            <Stack gap={48}>
              <Box>
                <Text
                  c="aztecGold.6"
                  tt="uppercase"
                  lts="0.16em"
                  fz="sm"
                  fw={600}
                  mb="xs"
                >
                  {tripPageText(locale, 'overview')}
                </Text>

                <Text c="sand.8" fz={{ base: 'lg', md: 'xl' }} lh={1.65}>
                  {description}
                </Text>
              </Box>

              <Box>
                <Title order={2} c="alicoBlue.7" fw={400} mb="lg">
                  {tripPageText(locale, 'itinerary')}
                </Title>

                <Stack gap="xl">
                  {trip.itinerary.map((day) => (
                    <Box key={`${day.day}-${day.title[locale]}`}>
                      <Text
                        c="aztecGold.6"
                        tt="uppercase"
                        lts="0.16em"
                        fz="sm"
                        fw={700}
                      >
                        Day {day.day}
                      </Text>

                      <Title order={3} c="sand.9" fw={400} mt={4}>
                        {day.title[locale]}
                      </Title>

                      <Text c="sand.7" fz="lg" lh={1.7} mt="xs">
                        {day.description[locale]}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Card
              radius="xl"
              p={{ base: 'lg', md: 'xl' }}
              bg="sand.0"
              withBorder
              style={{
                position: 'sticky',
                top: 160,
                boxShadow: '0 20px 50px rgba(44, 43, 40, 0.10)',
              }}
            >
              <Stack gap="lg">
                <Box ta="center">
                  <Text
                    c="sand.6"
                    tt="uppercase"
                    lts="0.18em"
                    fz="xs"
                    fw={600}
                  >
                    Trip details
                  </Text>

                  <Title order={3} c="alicoBlue.7" fw={400} mt="xs">
                    {title}
                  </Title>

                  <Text c="aztecGold.6" tt="uppercase" lts="0.12em" fw={700}>
                    {duration}
                  </Text>
                </Box>

                <Divider color="sand.2" />

                <Box>
                  <Text fw={700} c="sand.9" mb="sm">
                    {tripPageText(locale, 'highlights')}
                  </Text>

                  <Stack gap="xs">
                    {highlights.map((highlight) => (
                      <Group key={highlight} gap="sm" align="flex-start" wrap="nowrap">
                        <ThemeIcon
                          color="aztecGold"
                          variant="light"
                          radius="xl"
                          size="sm"
                          mt={3}
                        >
                          •
                        </ThemeIcon>

                        <Text c="sand.7" size="sm" lh={1.45}>
                          {highlight}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Box>

                <Divider color="sand.2" />

                <Box>
                  <Text fw={700} c="sand.9" mb="sm">
                    {tripPageText(locale, 'included')}
                  </Text>

                  <Stack gap="xs">
                    {included.map((item) => (
                      <Group key={item} gap="sm" align="flex-start" wrap="nowrap">
                        <ThemeIcon
                          color="alicoBlue"
                          variant="light"
                          radius="xl"
                          size="sm"
                          mt={3}
                        >
                          ✓
                        </ThemeIcon>

                        <Text c="sand.7" size="sm" lh={1.45}>
                          {item}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Box>

                <Button
                  component="a"
                  href={`/${locale}/contact`}
                  size="md"
                  radius="xl"
                  color="alicoBlue"
                  fullWidth
                >
                  Contact us
                </Button>

                <Anchor
                  href={`mailto:alico@alico.com.mx?subject=${encodeURIComponent(
                    `Trip inquiry: ${title}`
                  )}`}
                  c="sand.7"
                  ta="center"
                  size="sm"
                >
                  alico@alico.com.mx
                </Anchor>
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Stack>
    </Container>
  );
}