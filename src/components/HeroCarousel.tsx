'use client';

import { getBlurDataURL } from '@/lib/images/blur';
import { Carousel } from '@mantine/carousel';
import { Box, Text, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef, useState } from 'react';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  position?: string;
};

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const autoplay = useRef(Autoplay({ delay: 6000 }));
  const [loaded, setLoaded] = useState(false);

  return (
    <Carousel
      height="100vh"
      slideSize="100%"
      slideGap={0}
      withControls
      withIndicators={false}
      controlsOffset="xl"
      controlSize={42}
      emblaOptions={{ loop: true, align: 'center', dragFree: false, watchDrag: true }}
      plugins={[autoplay.current]}
      styles={{
        root: { width: '100%' },
        control: {
          color: 'var(--mantine-color-sand-0)',
          backgroundColor: 'rgba(44, 43, 40, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(6px)',
        },
      }}
    >
      {slides.map((slide, index) => {
        const blurDataURL = getBlurDataURL(slide.image);

        return (
          <Carousel.Slide key={slide.image} style={{ minWidth: '100%' }}>
            <Box h="100%" pos="relative" style={{ overflow: 'hidden' }}>
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                placeholder={blurDataURL ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                onLoad={() => setLoaded(true)}
                style={{
                  objectFit: 'cover',
                  objectPosition: slide.position ?? 'center',
                  opacity: loaded ? 1 : 0,
                  transition: 'opacity 500ms ease',
                }}
              />

              <Box
                pos="absolute"
                inset={0}
                style={{
                  background:
                    'linear-gradient(90deg, rgba(44,43,40,0.35) 0%, rgba(44,43,40,0.12) 50%, rgba(44,43,40,0.05) 100%)',
                }}
              />

              <Box
                pos="absolute"
                left="clamp(2rem, 10vw, 9rem)"
                bottom="clamp(3rem, 10vh, 7rem)"
                maw={760}
                px={{ base: 'md', sm: 0 }}
              >
                <Title
                  order={1}
                  c="sand.0"
                  fw={400}
                  style={{
                    fontSize: 'clamp(2.4rem, 5vw, 5rem)',
                    lineHeight: 1,
                    textShadow: '0 2px 18px rgba(0,0,0,0.28)',
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
                    textShadow: '0 2px 14px rgba(0,0,0,0.28)',
                  }}
                >
                  {slide.subtitle}
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
