// src/app/[locale]/handpicked-travel/[slug]/page.tsx

import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getHandpickedTravelBySlug, getHandpickedTravelSlugs, type HandpickedTravelCategory } from '@/types/handpicked-travel';
import { Anchor, Badge, Box, Button, Card, Container, Divider, Grid, GridCol, Group, Image, Stack, Text, ThemeIcon, Timeline, TimelineItem, Title } from '@mantine/core';
import { IconBuildingCastle, IconCompass, IconMapPin, IconPlaneDeparture, IconSparkles } from '@tabler/icons-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return generateLocaleParams().flatMap(({ locale }) =>
    getHandpickedTravelSlugs().map((slug) => ({
      locale,
      slug,
    }))
  );
}

const tagColor: Record<string, string> = {
  Boutique: 'aztecGold',
  Heritage: 'alicoBlue',
  Resort: 'sand',
};

const pageText = (
  locale: Locale,
  key: 'overview' | 'itinerary' | 'tripDetails' | 'highlights' | 'included' | 'contactUs' | 'day' | 'optional' | 'suggestedRoom'
) =>
  ({
    en: {
      overview: 'Overview',
      itinerary: 'Itinerary',
      tripDetails: 'Trip details',
      highlights: 'Highlights',
      included: 'Included',
      contactUs: 'Contact us',
      day: 'Day',
      optional: 'Optional',
      suggestedRoom: 'Suggested room',
    },
    es: {
      overview: 'Resumen',
      itinerary: 'Itinerario',
      tripDetails: 'Detalles del viaje',
      highlights: 'Destacados',
      included: 'Incluido',
      contactUs: 'Contáctanos',
      day: 'Día',
      optional: 'Opcional',
      suggestedRoom: 'Habitación sugerida',
    },
    fr: {
      overview: 'Aperçu',
      itinerary: 'Itinéraire',
      tripDetails: 'Détails du voyage',
      highlights: 'Points forts',
      included: 'Inclus',
      contactUs: 'Nous contacter',
      day: 'Jour',
      optional: 'Optionnel',
      suggestedRoom: 'Chambre suggérée',
    },
  })[locale][key];

export default async function TravelPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const trip = getHandpickedTravelBySlug(slug as HandpickedTravelCategory);

  if (!trip) {
    notFound();
  }

  const collection = trip.collection[locale];
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
      pt={{ base: 50, md: 65 }}
      pb={{ base: 50, md: 65 }}
    >
      <Stack gap="xl">
        <Stack gap="xs" align="center" ta="center">
          <Group gap={6} justify="center">
            <ThemeIcon
              size="xs"
              radius="xl"
              variant="light"
              color="aztecGold"
              style={{ background: 'transparent' }}
            >
              <IconSparkles size={14} stroke={2} />
            </ThemeIcon>

            <Text
              c="aztecGold.7"
              tt="uppercase"
              lts="0.18em"
              fz={{ base: 'xs', md: 'sm' }}
              fw={600}
            >
              {collection}
            </Text>
          </Group>

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

          <Text c="sand.7" fz={{ base: 'lg', md: 'xl' }} maw={760} mx="auto">
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
          src={trip.heroImage}
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
                  {pageText(locale, 'overview')}
                </Text>

                <Text c="sand.8" fz={{ base: 'lg', md: 'xl' }} lh={1.65}>
                  {description}
                </Text>
              </Box>

              <Box>
                <Group justify="space-between" align="flex-end" mb="lg">
                  <Title order={2} c="alicoBlue.7" fw={400}>
                    {pageText(locale, 'itinerary')}
                  </Title>

                  <Text c="sand.6" fz="sm">
                    {trip.itinerary.length} {pageText(locale, 'day').toLowerCase()}
                    {trip.itinerary.length === 1 ? '' : 's'}
                  </Text>
                </Group>

                <Timeline
                  active={trip.itinerary.length}
                  bulletSize={34}
                  lineWidth={2}
                  color="aztecGold"
                >
                  {trip.itinerary.map((day) => {
                    const hasStay = Boolean(day.stay);
                    const isFirstDay = day.day === 1;
                    const isLastDay = day.day === trip.itinerary.length;

                    return (
                      <TimelineItem
                        key={day.day}
                        bullet={
                          <ThemeIcon
                            size={34}
                            radius="xl"
                            color="aztecGold"
                            variant="light"
                          >
                            {hasStay ? (
                              <IconBuildingCastle size={16} stroke={1.8} />
                            ) : isFirstDay ? (
                              <IconPlaneDeparture size={16} stroke={1.8} />
                            ) : isLastDay ? (
                              <IconPlaneDeparture
                                size={16}
                                stroke={1.8}
                                style={{ transform: 'rotate(90deg)' }}
                              />
                            ) : (
                              <IconMapPin size={16} stroke={1.8} />
                            )}
                          </ThemeIcon>
                        }
                      >
                        <Stack gap="sm" pb="xl">
                          <Box>
                            <Text
                              c="aztecGold.6"
                              tt="uppercase"
                              lts="0.16em"
                              fz="xs"
                              fw={700}
                            >
                              {pageText(locale, 'day')} {day.day}
                            </Text>

                            <Title order={3} c="sand.9" fw={400} mt={2}>
                              {day.location[locale]}
                            </Title>
                          </Box>

                          <Stack gap={6}>
                            {day.narrative[locale].map((paragraph) => (
                              <Text key={paragraph} c="sand.7" fz="md" lh={1.7}>
                                {paragraph}
                              </Text>
                            ))}
                          </Stack>

                          {day.optional && (
                            <Group gap={6} align="center">
                              <IconCompass
                                size={14}
                                stroke={2}
                                color="var(--mantine-color-alicoBlue-6)"
                              />

                              <Text
                                c="alicoBlue.6"
                                fz="xs"
                                fw={600}
                                tt="uppercase"
                                lts="0.06em"
                              >
                                {pageText(locale, 'optional')} &mdash; {day.optional[locale]}
                              </Text>
                            </Group>
                          )}

                          {day.stay && (
                            <Card
                              radius="lg"
                              p={0}
                              withBorder
                              mt="xs"
                              style={{ overflow: 'hidden' }}
                            >
                              <Grid gap={0}>
                                <GridCol span={{ base: 12, sm: 4 }}>
                                  <Image
                                    src={day.stay.image}
                                    alt={day.stay.hotel[locale]}
                                    h={{ base: 160, sm: '100%' }}
                                    fit="cover"
                                  />
                                </GridCol>

                                <GridCol span={{ base: 12, sm: 8 }}>
                                  <Stack gap={6} p="md">
                                    <Group gap="xs" justify="space-between" align="flex-start">
                                      <Text fw={700} c="sand.9">
                                        {day.stay.hotel[locale]}
                                      </Text>

                                      <Badge
                                        size="sm"
                                        variant="light"
                                        color={tagColor[day.stay.tag.en] ?? 'sand'}
                                      >
                                        {day.stay.tag[locale]}
                                      </Badge>
                                    </Group>

                                    <Text c="sand.7" fz="sm" lh={1.6}>
                                      {day.stay.description[locale]}
                                    </Text>

                                    {day.stay.room && (
                                      <Text c="aztecGold.7" fz="xs" fw={600} mt={4}>
                                        {pageText(locale, 'suggestedRoom')}: {day.stay.room[locale]}
                                      </Text>
                                    )}
                                  </Stack>
                                </GridCol>
                              </Grid>
                            </Card>
                          )}
                        </Stack>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
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
                  <Text c="sand.6" tt="uppercase" lts="0.18em" fz="xs" fw={600}>
                    {pageText(locale, 'tripDetails')}
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
                    {pageText(locale, 'highlights')}
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
                          style={{ flexShrink: 0 }}
                        >
                          <IconSparkles size={10} stroke={2} />
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
                    {pageText(locale, 'included')}
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
                          style={{ flexShrink: 0 }}
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
                  {pageText(locale, 'contactUs')}
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