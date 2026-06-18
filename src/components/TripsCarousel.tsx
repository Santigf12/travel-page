// src/components/TripsCarousel.tsx

"use client";

import type { Locale } from "@/i18n/dictionaries";
import { getTripsByCategory } from "@/types/trips";
import { Carousel } from "@mantine/carousel";
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
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

type TripsCarouselProps = {
  locale: Locale;
};

type TripCardProps = {
  image: string;
  title: string;
  duration: string;
  category: string;
  href: string;
};

function TripCard({ image, title, duration, category, href }: TripCardProps) {
  return (
    <Paper
      shadow="md"
      radius="sm"
      h={360}
      p="xl"
      pos="relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(14, 74, 98, 0.15), rgba(14, 74, 98, 0.72)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        userSelect: "none",
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
            component={Link}
            href={href}
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

export function TripsCarousel({ locale }: TripsCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const trips = getTripsByCategory("fits").map((trip) => ({
    slug: trip.slug,
    image: trip.image,
    title: trip.title[locale],
    duration: trip.duration[locale],
    category: trip.category,
    href: `/${locale}/trips/${trip.slug}`,
  }));

  return (
    <Box bg="sand.0" py={{ base: 70, md: 100 }}>
      <Container size="lg">
        <Stack align="center" gap="xs" mb="xl">
          <Text c="aztecGold.6" tt="uppercase" lts="0.18em" size="sm" fw={600}>
            Mini routes, best selling, and one day tours available
          </Text>

          <Title order={2} ta="center" fw={400}>
            Handpicked Mexico Itineraries
          </Title>
        </Stack>

        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333%" }}
          slideGap="md"
          controlsOffset="xs"
          controlSize={36}
          withControls
          withIndicators={false}
          emblaOptions={{
            align: "start",
            loop: true,
            dragFree: true,
            slidesToScroll: mobile ? 1 : 2,
          }}
          styles={{
            root: { touchAction: "pan-y pinch-zoom" },
            viewport: { touchAction: "pan-y pinch-zoom" },
          }}
        >
          {trips.map((trip) => (
            <Carousel.Slide key={trip.slug}>
              <TripCard
                image={trip.image}
                title={trip.title}
                duration={trip.duration}
                category={trip.category}
                href={trip.href}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}