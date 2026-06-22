// src/app/[locale]/who-we-are/page.tsx

import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
} from '@mantine/core';
import {
  IconBuildingSkyscraper,
  IconHeartHandshake,
  IconMapPin,
  IconQuote,
  IconSparkles,
  IconUsersGroup,
  IconWorld,
} from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

const pageText = {
  en: {
    eyebrow: 'Who We Are',
    title: 'About Alico Tours',
    subtitle:
      'Based in Mexico City, Alico Tours is a Mexican incoming Tour Operator, DMC and MICE specialist with more than 24 years of B2B experience with wholesalers around the world.',
    contactUs: 'Contact us',
    exploreTrips: 'Explore trips',
    founded: 'Founded',
    experience: 'Years of experience',
    market: 'International markets',
    missionTitle: 'Our Mission',
    mission:
      'Our mission is simple: to offer the most meaningful and personalized trips in Mexico today. Mexico is our home, and we want every guest to feel the warmth, care and hospitality that define it.',
    serviceTitle: 'Personal service, Mexico expertise',
    service:
      'Our travel specialists advise partners, shape itineraries for their clients and publish preset programs for inspiration. A 24-hour concierge in Mexico City supports guest requests, while our team anticipates the small details that make each journey feel effortless.',
    historyTitle: 'Our History',
    reviewsTitle: 'Client Reviews',
    reviewsSubtitle:
      'A few notes from partners and travelers who trusted Alico Tours with their Mexico programs.',
  },
  es: {
    eyebrow: 'Quiénes Somos',
    title: 'Acerca de Alico Tours',
    subtitle:
      'Con sede en Ciudad de México, Alico Tours es un operador receptivo mexicano, DMC y especialista MICE con más de 24 años de experiencia B2B con mayoristas de todo el mundo.',
    contactUs: 'Contáctanos',
    exploreTrips: 'Explorar viajes',
    founded: 'Fundación',
    experience: 'Años de experiencia',
    market: 'Mercados internacionales',
    missionTitle: 'Nuestra Misión',
    mission:
      'Nuestra misión es sencilla: ofrecer los viajes más significativos y personalizados en México. México es nuestro hogar, y queremos que cada huésped sienta la calidez, el cuidado y la hospitalidad que lo definen.',
    serviceTitle: 'Servicio personal, experiencia en México',
    service:
      'Nuestros especialistas asesoran a socios, diseñan itinerarios para sus clientes y publican programas prediseñados como inspiración. Un concierge 24 horas en Ciudad de México atiende las solicitudes de los huéspedes, mientras nuestro equipo cuida los detalles que hacen que cada viaje fluya.',
    historyTitle: 'Nuestra Historia',
    reviewsTitle: 'Opiniones de Clientes',
    reviewsSubtitle:
      'Algunas notas de socios y viajeros que confiaron sus programas en México a Alico Tours.',
  },
  fr: {
    eyebrow: 'Qui Nous Sommes',
    title: 'À Propos d’Alico Tours',
    subtitle:
      'Basé à Mexico, Alico Tours est un réceptif mexicain, DMC et spécialiste MICE avec plus de 24 ans d’expérience B2B auprès de grossistes du monde entier.',
    contactUs: 'Nous contacter',
    exploreTrips: 'Découvrir les voyages',
    founded: 'Fondation',
    experience: 'Années d’expérience',
    market: 'Marchés internationaux',
    missionTitle: 'Notre Mission',
    mission:
      'Notre mission est simple : proposer les voyages les plus personnalisés et significatifs au Mexique. Le Mexique est notre maison, et nous voulons que chaque voyageur ressente la chaleur, l’attention et l’hospitalité qui le définissent.',
    serviceTitle: 'Service personnalisé, expertise du Mexique',
    service:
      'Nos spécialistes conseillent les partenaires, créent des itinéraires pour leurs clients et publient des programmes prédéfinis pour inspirer. Un concierge 24 h/24 à Mexico accompagne les demandes des voyageurs, tandis que notre équipe anticipe les détails qui rendent chaque séjour fluide.',
    historyTitle: 'Notre Histoire',
    reviewsTitle: 'Avis Clients',
    reviewsSubtitle:
      'Quelques messages de partenaires et voyageurs qui ont confié leurs programmes au Mexique à Alico Tours.',
  },
};

const history = [
  {
    year: '1989',
    title: {
      en: 'Alico Tours was founded',
      es: 'Fundación de Alico Tours',
      fr: 'Fondation d’Alico Tours',
    },
    description: {
      en: 'Founded in 1989, Alico Tours has strengthened its reputation with every guest and every journey.',
      es: 'Fundada en 1989, Alico Tours ha fortalecido su reputación con cada huésped y cada viaje.',
      fr: 'Fondée en 1989, Alico Tours a renforcé sa réputation avec chaque voyageur et chaque séjour.',
    },
  },
  {
    year: '2008',
    title: {
      en: 'Asia branch opened',
      es: 'Apertura de la sucursal en Asia',
      fr: 'Ouverture de la branche en Asie',
    },
    description: {
      en: 'The company expanded its reach and began successfully attending groups and FITs from India, Thailand, the Philippines, China and Taiwan.',
      es: 'La empresa amplió su alcance y comenzó a atender con éxito grupos y FITs de India, Tailandia, Filipinas, China y Taiwán.',
      fr: 'L’entreprise a élargi sa portée et accompagne depuis des groupes et FITs venant d’Inde, de Thaïlande, des Philippines, de Chine et de Taïwan.',
    },
  },
];

const highlights = [
  {
    icon: IconBuildingSkyscraper,
    value: '1989',
    labelKey: 'founded',
  },
  {
    icon: IconSparkles,
    value: '24+',
    labelKey: 'experience',
  },
  {
    icon: IconWorld,
    value: 'B2B',
    labelKey: 'market',
  },
];

const reviews = [
  {
    quote:
      'Everything was well organised, prepared, timely delivered and planned. We learned much more than you can read in a guide book.',
    name: 'Lis',
    country: 'Denmark',
  },
  {
    quote:
      'You guys are great and I can’t thank you enough for your help with this last minute booking.',
    name: 'Brandee',
    country: 'USA',
  },
  {
    quote:
      'Everything turned out perfectly. A special thanks to all our guides and drivers. They all deserve a 5 star rating.',
    name: 'Roberto',
    country: 'Italy',
  },
];

export default async function WhoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const t = pageText[locale];

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
                  {t.eyebrow}
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
                {t.title}
              </Title>

              <Text c="sand.7" fz={{ base: 'lg', md: 'xl' }} maw={760} lh={1.65}>
                {t.subtitle}
              </Text>

              <Group mt="sm">
                <Button
                  component="a"
                  href={`/${locale}/contact`}
                  size="md"
                  radius="xl"
                  color="alicoBlue"
                >
                  {t.contactUs}
                </Button>

                <Button
                  component="a"
                  href={`/${locale}/trips`}
                  size="md"
                  radius="xl"
                  variant="light"
                  color="aztecGold"
                >
                  {t.exploreTrips}
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
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Group key={item.labelKey} gap="md" wrap="nowrap" align="center">
                      <ThemeIcon
                        color="aztecGold"
                        variant="light"
                        radius="xl"
                        size={54}
                        style={{ flexShrink: 0 }}
                      >
                        <Icon size={24} stroke={1.8} />
                      </ThemeIcon>

                      <Box style={{ minWidth: 0 }}>
                        <Text c="alicoBlue.7" fw={700} fz="xl">
                          {item.value}
                        </Text>

                        <Text c="sand.7" fz="sm" tt="uppercase" lts="0.08em" fw={600}>
                          {t[item.labelKey as keyof typeof t]}
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
                  {t.missionTitle}
                </Text>

                <Title order={2} c="alicoBlue.7" fw={400} mb="md">
                  {t.serviceTitle}
                </Title>

                <Stack gap="md">
                  <Text c="sand.8" fz={{ base: 'lg', md: 'xl' }} lh={1.65}>
                    {t.mission}
                  </Text>

                  <Text c="sand.7" fz="md" lh={1.7}>
                    {t.service}
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
                      100% Mexican Company
                    </Text>

                    <Text c="sand.1" lh={1.6} mt={4}>
                      Hospitality is a way of life in Mexico. Alico Tours brings that spirit
                      into each itinerary through warmth, detail and personalized attention.
                    </Text>
                  </Box>
                </Group>
              </Card>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 7 }}>
            <Box>
              <Text c="aztecGold.6" tt="uppercase" lts="0.16em" fz="sm" fw={600} mb="xs">
                {t.historyTitle}
              </Text>

              <Timeline active={history.length} bulletSize={40} lineWidth={2} color="aztecGold">
                {history.map((item) => (
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
                        {item.title[locale]}
                      </Title>

                      <Text c="sand.7" lh={1.7}>
                        {item.description[locale]}
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
              <ThemeIcon
                size="xs"
                radius="xl"
                variant="light"
                color="aztecGold"
                style={{ background: 'transparent' }}
              >
                <IconUsersGroup size={14} stroke={2} />
              </ThemeIcon>

              <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
                {t.reviewsTitle}
              </Text>
            </Group>

            <Text c="sand.7" fz={{ base: 'md', md: 'lg' }} maw={760} mx="auto">
              {t.reviewsSubtitle}
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {reviews.map((review) => (
              <Card
                key={`${review.name}-${review.country}`}
                radius="xl"
                p="xl"
                bg="sand.0"
                withBorder
                style={{ boxShadow: '0 18px 45px rgba(44, 43, 40, 0.08)' }}
              >
                <Stack gap="md">
                  <ThemeIcon color="aztecGold" variant="light" radius="xl" size="xl">
                    <IconQuote size={22} stroke={1.8} />
                  </ThemeIcon>

                  <Text c="sand.8" lh={1.7}>
                    “{review.quote}”
                  </Text>

                  <Box>
                    <Text c="sand.9" fw={700}>
                      {review.name}
                    </Text>

                    <Text c="sand.6" fz="sm">
                      {review.country}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}