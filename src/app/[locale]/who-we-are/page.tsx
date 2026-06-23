// src/app/[locale]/who-we-are/page.tsx

import { WhoWeAreReviewsCarousel } from '@/components/WhoWeAreReviewsCarousel';
import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getWhoWeAreContent, type WhoWeAreHighlightIcon } from '@/types/who-we-are';
import { Badge, Box, Button, Card, Container, Grid, GridCol, Group, SimpleGrid, Stack, Text, ThemeIcon, Timeline, TimelineItem, Title } from '@mantine/core';
import { IconBuildingSkyscraper, IconHeartHandshake, IconMapPin, IconQuote, IconSparkles, IconUsersGroup, IconWorld } from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

const highlightIcons = {
  building: IconBuildingSkyscraper,
  sparkles: IconSparkles,
  world: IconWorld,
} satisfies Record<WhoWeAreHighlightIcon, typeof IconSparkles>;

export default async function WhoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const content = getWhoWeAreContent(locale);

  return (
    <Container
      size={1500}
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 50, md: 65 }}
      pb={{ base: 50, md: 65 }}
    >
      <Stack gap={80}>
        <Grid gap={{ base: 40, md: 70 }} align="center" id="about-us">
          <GridCol span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              <Group gap={6}>
                <ThemeIcon
                  size="xs"
                  radius="xl"
                  variant="light"
                  color="aztecGold"
                  style={{ background: 'transparent' }}
                >
                  <IconSparkles size={14} stroke={2} />
                </ThemeIcon>

                <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
                  {content.hero.eyebrow}
                </Text>
              </Group>

              <Title
                order={1}
                c="sand.9"
                fw={400}
                style={{
                  fontSize: 'clamp(3.2rem, 7vw, 6.8rem)',
                  lineHeight: 0.95,
                }}
              >
                {content.hero.title}
              </Title>

              <Text c="sand.7" fz={{ base: 'lg', md: 'xl' }} maw={760} lh={1.65}>
                {content.hero.subtitle}
              </Text>

              <Group mt="sm">
                <Button
                  component="a"
                  href={`/${locale}/contact`}
                  size="md"
                  radius="xl"
                  color="alicoBlue"
                >
                  {content.hero.contactUs}
                </Button>

                <Button
                  component="a"
                  href={`/${locale}/trips`}
                  size="md"
                  radius="xl"
                  variant="light"
                  color="aztecGold"
                >
                  {content.hero.exploreTrips}
                </Button>
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 5 }}>
            <Card
              radius="xl"
              p={{ base: 'lg', md: 'xl' }}
              bg="sand.0"
              withBorder
              style={{ boxShadow: '0 24px 60px rgba(44, 43, 40, 0.12)' }}
            >
              <SimpleGrid cols={1} spacing="lg">
                {content.highlights.map((item) => {
                  const HighlightIcon = highlightIcons[item.icon];

                  return (
                    <Group key={`${item.value}-${item.label}`} gap="md" wrap="nowrap" align="center">
                      <ThemeIcon color="aztecGold" variant="light" radius="xl" size={54} style={{ flexShrink: 0 }}>
                        <HighlightIcon size={24} stroke={1.8} />
                      </ThemeIcon>

                      <Box style={{ minWidth: 0 }}>
                        <Text c="alicoBlue.7" fw={700} fz="xl">
                          {item.value}
                        </Text>

                        <Text c="sand.7" fz="sm" tt="uppercase" lts="0.08em" fw={600}>
                          {item.label}
                        </Text>
                      </Box>
                    </Group>
                  );
                })}
              </SimpleGrid>
            </Card>
          </GridCol>
        </Grid>

        <Grid gap={{ base: 40, md: 70 }} align="flex-start">
          <GridCol span={{ base: 12, md: 5 }}>
            <Stack gap="xl">
              <Box>
                <Text c="aztecGold.6" tt="uppercase" lts="0.16em" fz="sm" fw={600} mb="xs">
                  {content.mission.eyebrow}
                </Text>

                <Title order={2} c="alicoBlue.7" fw={400} mb="md">
                  {content.mission.title}
                </Title>

                <Stack gap="md">
                  <Text c="sand.8" fz={{ base: 'lg', md: 'xl' }} lh={1.65}>
                    {content.mission.body}
                  </Text>

                  <Text c="sand.7" fz="md" lh={1.7}>
                    {content.mission.body2}
                  </Text>
                </Stack>
              </Box>

              <Card radius="xl" p="xl" bg="alicoBlue.7">
                <Group gap="md" align="flex-start" wrap="nowrap">
                  <ThemeIcon color="sand" variant="light" radius="xl" size="xl">
                    <IconHeartHandshake size={22} stroke={1.8} />
                  </ThemeIcon>

                  <Box>
                    <Text c="sand.0" fw={700} fz="lg">
                      {content.companyCard.title}
                    </Text>

                    <Text c="sand.1" lh={1.6} mt={4}>
                      {content.companyCard.body}
                    </Text>
                  </Box>
                </Group>
              </Card>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }}>
            <Box>
              <Text c="aztecGold.6" tt="uppercase" lts="0.16em" fz="sm" fw={600} mb="xs">
                {content.history.title}
              </Text>

              <Timeline active={content.history.items.length} bulletSize={40} lineWidth={2} color="aztecGold">
                {content.history.items.map((item) => (
                  <TimelineItem
                    key={item.year}
                    bullet={
                      <ThemeIcon color="aztecGold" variant="light" radius="xl" size={40}>
                        <IconMapPin size={18} stroke={1.8} />
                      </ThemeIcon>
                    }
                  >
                    <Stack gap={6} pb="xl">
                      <Badge color="aztecGold" variant="light" radius="sm" w="fit-content">
                        {item.year}
                      </Badge>

                      <Title order={3} c="sand.9" fw={400}>
                        {item.title}
                      </Title>

                      <Text c="sand.7" lh={1.7}>
                        {item.description}
                      </Text>
                    </Stack>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>
          </GridCol>
        </Grid>

        <Box>
          <Stack gap="xs" ta="center" align="center" mb="xl">
            <Group gap={6} justify="center">
              <ThemeIcon size="xs" radius="xl" variant="light" color="aztecGold" style={{ background: 'transparent' }}>
                <IconUsersGroup size={14} stroke={2} />
              </ThemeIcon>

              <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
                {content.reviews.title}
              </Text>
            </Group>

            <Text c="sand.7" fz={{ base: 'md', md: 'lg' }} maw={760} mx="auto">
              {content.reviews.subtitle}
            </Text>
          </Stack>

          <WhoWeAreReviewsCarousel reviews={content.reviews.items} />
        </Box>
      </Stack>
    </Container>
  );
}