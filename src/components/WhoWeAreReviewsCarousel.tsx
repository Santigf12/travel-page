'use client';

import type { WhoWeAreReview } from '@/types/who-we-are';
import { Carousel } from '@mantine/carousel';
import { Box, Card, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

type WhoWeAreReviewsCarouselProps = {
  reviews: WhoWeAreReview[];
};

export function WhoWeAreReviewsCarousel({ reviews }: WhoWeAreReviewsCarouselProps) {

  const autoplay = useRef(Autoplay({ delay: 10000 }));

  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap="xl"
      controlsOffset="sm"
      controlSize={34}
      emblaOptions={{ loop: true, align: 'center', dragFree: false, watchDrag: true }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      styles={{
        root: {
          paddingBottom: 34,
        },
        viewport: {
          overflow: 'hidden',
        },
        indicator: {
          backgroundColor: 'var(--mantine-color-aztecGold-6)',
        },
        control: {
          borderColor: 'var(--mantine-color-sand-2)',
          color: 'var(--mantine-color-alicoBlue-7)',
          boxShadow: '0 10px 28px rgba(44, 43, 40, 0.14)',
        },
      }}
      aria-label="Featured travel highlights carousel"
      nextControlProps={{ 'aria-label': 'Next featured travel slide' }}
      previousControlProps={{ 'aria-label': 'Previous featured travel slide' }}
    >
      {reviews.map((review) => (
        <Carousel.Slide key={`${review.name}-${review.country}`}>
          <Card
            radius="xl"
            p="xl"
            bg="sand.0"
            withBorder
            h="100%"
          >
            <Stack gap="md" h="100%">
              <ThemeIcon color="aztecGold" variant="light" radius="xl" size="xl">
                <IconQuote size={22} stroke={1.8} />
              </ThemeIcon>

              <Text c="sand.8" lh={1.7} style={{ flex: 1 }}>
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
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
