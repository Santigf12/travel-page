'use client';

import { Carousel } from '@mantine/carousel';
import {
    Badge,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Text,
    Title,
    useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const trips = [
  {
    image: '/images/cards/calaberas.jpg',
    title: 'Mini Cultural Mexico',
    duration: '3 Days',
    category: 'Culture',
  },
  {
    image: '/images/cards/beachcan.jpeg',
    title: 'Mini Cancún Escape',
    duration: '3 Days',
    category: 'Beach',
  },
  {
    image: '/images/cards/parade.jpg',
    title: 'Traditional Mexico',
    duration: '4 Days',
    category: 'Heritage',
  },
  {
    image: '/images/cards/yucatan.jpg',
    title: 'Mini Yucatán',
    duration: '3 Days',
    category: 'History',
  },
  {
    image: '/images/cards/heritage.jpg',
    title: 'All of Mexico',
    duration: '13 Days',
    category: 'Heritage',
  },
  {
    image: '/images/cards/chepe.jpg',
    title: 'Train in the Copper Canyon',
    duration: '8 Days',
    category: 'Heritage',
  },
  {
    image: '/images/cards/artesanias.jpg',
    title: 'Guatemala Highlights',
    duration: '13 Days',
    category: 'Heritage',
  },
  {
    image: '/images/cards/cenote-yucatan.jpeg',
    title: 'Mexico & Yucatan',
    duration: '8 Days',
    category: 'Beach',
  },
];

type TripCardProps = {
  image: string;
  title: string;
  duration: string;
  category: string;
};

function TripCard({ image, title, duration, category }: TripCardProps) {
  return (
    <Paper
      shadow="md"
      radius="sm"
      h={360}
      p="xl"
      pos="relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(14, 74, 98, 0.15), rgba(14, 74, 98, 0.72)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <Stack h="100%" justify="space-between">
        <Badge color="aztecGold" variant="filled" w="fit-content">
          {category}
        </Badge>

        <Box>
          <Text c="sand.0" size="sm" tt="uppercase" lts="0.12em">
            {duration}
          </Text>

          <Title order={3} c="sand.0" fw={400} mt={4}>
            {title}
          </Title>

          <Button
            mt="md"
            variant="white"
            color="alicoBlue"
            size="xs"
          >
            View trip
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export function TripsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box bg="sand.0" py={{ base: 70, md: 100 }}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb="xl">
          <Text
            c="aztecGold.6"
            tt="uppercase"
            lts="0.18em"
            size="sm"
            fw={600}
          >
            Mini routes, best selling, and one day tours available
          </Text>

          <Title order={2} ta="center" fw={400}>
            Handpicked Mexico Itineraries
          </Title>
        </Stack>

        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
          slideGap="md"
          controlsOffset="xs"
          controlSize={36}
          withControls
          withIndicators={false}
          emblaOptions={{
            align: 'start',
            loop: true,
            slidesToScroll: mobile ? 1 : 2,
          }}
          
        >
          {trips.map((trip) => (
            <Carousel.Slide key={trip.title}>
              <TripCard {...trip} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}