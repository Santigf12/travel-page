'use client';

import { TripsCarousel } from '@/components/TripsCarousel';
import { Carousel } from '@mantine/carousel';
import { Box, Container, Text, Title } from '@mantine/core';

const slides = [
  {
    image: '/images/mariachi.jpg',
    title: 'Experience Mexico with ease.',
    subtitle: 'Curated journeys designed with culture, comfort, and care.',
  },
  {
    image: '/images/beach.jpg',
    title: 'Travel beautifully.',
    subtitle: 'Handpicked escapes across Mexico’s coastlines, cities, and heritage.',
  },
  {
    image: '/images/cathedral.avif',
    title: 'Discover the art of travel.',
    subtitle: 'Luxury itineraries shaped around your rhythm, taste, and story.',
  },
];

export default function HomePage() {
  return (
    <>
      <Carousel
        height="100vh"
        withControls
        withIndicators={false}
        controlsOffset="xl"
        controlSize={42}
        emblaOptions={{
          loop: true,
          align: 'center',
        }}
        styles={{
          root: {
            width: '100%',
          },
          control: {
            color: 'var(--mantine-color-sand-0)',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          },
        }}
      >
        {slides.map((slide) => (
          <Carousel.Slide key={slide.image}>
            <Box
              h="100%"
              pos="relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                pos="absolute"
                inset={0}
                style={{
                  background:
                    'linear-gradient(90deg, rgba(44, 43, 40, 0.35) 0%, rgba(44, 43, 40, 0.12) 50%, rgba(44, 43, 40, 0.05) 100%)',
                }}
              />

              <Box
                pos="absolute"
                left="clamp(2rem, 10vw, 9rem)"
                bottom="clamp(3rem, 10vh, 7rem)"
                maw={760}
                c="sand.0"
                px={{ base: 'md', sm: 0 }}
              >
                <Title
                  order={1}
                  c="sand.0"
                  fw={400}
                  style={{
                    fontSize: 'clamp(2.4rem, 5vw, 5rem)',
                    lineHeight: 1,
                    textShadow: '0 2px 18px rgba(0, 0, 0, 0.28)',
                  }}
                >
                  {slide.title}
                </Title>

                <Text
                  mt="md"
                  maw={560}
                  c="sand.0"
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.35rem)',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 14px rgba(0, 0, 0, 0.28)',
                  }}
                >
                  {slide.subtitle}
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Box bg="alicoBlue.7" py={{ base: 80, md: 120 }}>
        <Container size="sm" ta="center">
          <Text
            c="sand.0"
            fz={{ base: 'lg', md: 'xl' }}
            lh={1.45}
          >
            You don’t just want an itinerary. You want someone who knows you — your
            pace, your preferences, the kind of moment that makes a journey worth
            remembering. At Alico Tours Mexico, that’s exactly what you get. Not a
            booking engine. Not a one-time transaction. Custom itineraries designed by
            a trusted advisor who is invested in your travel story, now and for every
            adventure that follows.
          </Text>

          <Text
            mt="lg"
            c="sand.0"
            fz="xs"
            tt="uppercase"
            lts="0.12em"
          >
            We make traveling through Mexico seamless for you
          </Text>

          <Box
            mt={8}
            mx="auto"
            w={260}
            h={1}
            bg="sand.0"
            opacity={0.8}
          />
        </Container>
      </Box>

      <TripsCarousel />

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
            Incoming Tour Operator · DMC · MICE
          </Text>

          <Title order={2} ta="center" fw={400} mb="xl">
            More than 24 years creating travel experiences in Mexico
          </Title>

          <Text c="sand.9" fz={{ base: 'lg', md: 'xl' }} lh={1.6} ta="center">
            ALICO TOURS is a Mexican incoming Tour Operator, DMC & MICE with more
            than 24 years of experience working B2B with wholesalers all over the
            world.
          </Text>

          <Text
            c="sand.9"
            fz={{ base: 'md', md: 'lg' }}
            lh={1.6}
            ta="center"
            mt="lg"
          >
            Our travel specialists will advise you and help you set up the perfect
            itinerary for your client. We also publish a manual with pre-set
            itineraries for your inspiration.
          </Text>
        </Container>
      </Box>
    </>
  );
}