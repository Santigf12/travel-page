// src/app/[locale]/about-mexico/page.tsx

import MexicoHandDrawnMap from '@/components/MexicoHandDrawnMap';
import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getAboutContent, type AboutIconKey } from '@/types/about';
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Badge, Box, Card, Container, Divider, Group, List, ListItem, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCalendar, IconCloudRain, IconCreditCard, IconHanger, IconMapPin, IconShieldCheck, IconSteam, IconSun, IconUsers, type Icon } from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

const iconMap: Record<AboutIconKey, Icon> = {
  calendar: IconCalendar,
  cloudRain: IconCloudRain,
  creditCard: IconCreditCard,
  hanger: IconHanger,
  mapPin: IconMapPin,
  shieldCheck: IconShieldCheck,
  steam: IconSteam,
  sun: IconSun,
  users: IconUsers,
};

export default async function AboutMexicoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const about = getAboutContent(locale);

  return (
    <Stack gap={0}>
      <Box id={about.whereToGo.id} py={{ base: 50, md: 65 }}>
        <Container size="lg">
          <Stack gap="xs">
            <Stack gap="xs" maw={820}>
              <Badge variant="light" size="lg">
                {about.whereToGo.badge}
              </Badge>

              <Title
                order={2}
                c="#0E4A62"
                fw={400}
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                }}
              >
                {about.whereToGo.title}
              </Title>

              <Text size="lg" c="dimmed">
                {about.whereToGo.description}
              </Text>
            </Stack>

            <MexicoHandDrawnMap />
          </Stack>
        </Container>
      </Box>

      <Box
        bg="alicoBlue.5"
        id={about.whenToGo.id}
        py={{ base: 60, md: 90 }}
        pos="relative"
        style={{ overflow: 'hidden' }}
      >
        <Box
          component="svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          pos="absolute"
          top={-1}
          left={0}
          w="100%"
          h={70}
          style={{ display: 'block' }}
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="var(--mantine-color-sand-0)"
          />
        </Box>

        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="sm" maw={820}>
              <Badge size="lg" variant="filled" bg="sand.1" c="alicoBlue.8">
                {about.whenToGo.badge}
              </Badge>

              <Title
                order={2}
                c="sand.0"
                fw={400}
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  lineHeight: 1.05,
                }}
              >
                {about.whenToGo.title}
              </Title>

              <Text size="lg" c="sand.1" opacity={0.85}>
                {about.whenToGo.description}
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {about.whenToGo.cards.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <Card
                    key={item.title}
                    withBorder
                    radius="lg"
                    padding="lg"
                    bg="sand.0"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <Stack gap="md">
                      <Group gap="sm" align="center">
                        <ThemeIcon size="lg" radius="md" variant="light" color="alicoBlue">
                          <Icon size={20} stroke={1.8} />
                        </ThemeIcon>

                        <Title order={3} size="h4" c="alicoBlue.8">
                          {item.title}
                        </Title>
                      </Group>

                      <Text c="gray.7" lh={1.6}>
                        {item.description}
                      </Text>
                    </Stack>
                  </Card>
                );
              })}
            </SimpleGrid>

            <Card
              withBorder
              radius="lg"
              padding="xl"
              bg="sand.0"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.18)',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.12)',
              }}
            >
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Stack gap="sm">
                  <Title order={3} c="alicoBlue.8">
                    {about.whenToGo.quickNotes.title}
                  </Title>

                  {about.whenToGo.quickNotes.paragraphs.map((paragraph) => (
                    <Text key={paragraph} c="gray.7" lh={1.7}>
                      {paragraph}
                    </Text>
                  ))}
                </Stack>

                <Stack gap="sm">
                  <Title order={3} c="alicoBlue.8">
                    {about.whenToGo.quickNotes.packingTitle}
                  </Title>

                  <List spacing="sm" c="gray.7">
                    {about.whenToGo.quickNotes.packing.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </List>
                </Stack>
              </SimpleGrid>

              <Divider my="xl" />

              <Text size="sm" c="gray.7">
                {about.whenToGo.quickNotes.tip}
              </Text>
            </Card>
          </Stack>
        </Container>

        <Box
          component="svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          pos="absolute"
          bottom={-1}
          left={0}
          w="100%"
          h={70}
          style={{ display: 'block', transform: 'rotate(180deg)' }}
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="var(--mantine-color-sand-0)"
          />
        </Box>
      </Box>

      <Box id={about.howToGo.id} py={{ base: 20, md: 30 }} bg="var(--mantine-color-sand-0)">
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="sm" maw={820}>
              <Badge variant="light" size="lg">
                {about.howToGo.badge}
              </Badge>

              <Title
                order={2}
                c="#0E4A62"
                fw={400}
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                }}
              >
                {about.howToGo.title}
              </Title>

              <Text size="lg" c="dimmed">
                {about.howToGo.description}
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
              {[...about.howToGo.groups]
                .sort((a, b) => a.items.length - b.items.length)
                .map((group) => {
                  const GroupIcon = iconMap[group.icon];

                  return (
                    <Card key={group.title} withBorder radius="lg" padding={0}>
                      <Group
                        gap="sm"
                        align="center"
                        px="lg"
                        py="md"
                        style={{
                          borderBottom: '1px solid var(--mantine-color-gray-2)',
                        }}
                      >
                        <ThemeIcon size="lg" radius="md" variant="light">
                          <GroupIcon size={20} stroke={1.8} />
                        </ThemeIcon>

                        <Title order={3} size="h4">
                          {group.title}
                        </Title>
                      </Group>

                      <Accordion multiple chevronPosition="right" px="sm">
                        {group.items.map((item) => (
                          <AccordionItem key={item.value} value={item.value}>
                            <AccordionControl>{item.title}</AccordionControl>

                            <AccordionPanel>
                              <Stack gap="sm">
                                {item.content.map((paragraph) => (
                                  <Text key={paragraph} c="dimmed" lh={1.7}>
                                    {paragraph}
                                  </Text>
                                ))}
                              </Stack>
                            </AccordionPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </Card>
                  );
                })}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
