'use client';

import { getBlurDataURL } from '@/lib/images/blur';
import { Anchor, Box, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type FeatureCardProps = {
  image: string;
  title: string;
  meta?: string;
  description: string;
  href?: string;
};

export function FeatureCard({ image, title, meta, description, href }: FeatureCardProps) {
  const [imgHovered, setImgHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const blurDataURL = getBlurDataURL(image);

  const content = (
    <Stack gap="sm">
      <Box
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        pos="relative"
        style={{
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 22px 50px rgba(44, 43, 40, 0.14)',
          aspectRatio: '4 / 3',
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          onLoad={() => setLoaded(true)}
          style={{
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transform: imgHovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 400ms ease, transform 250ms ease',
          }}
        />
      </Box>

      <Box px={{ base: 4, sm: 0 }}>
        <Title
          order={3}
          c="alicoBlue.7"
          fw={400}
          style={{
            fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </Title>

        {meta && (
          <Text mt={6} c="aztecGold.6" size="sm" fw={600} tt="uppercase" lts="0.12em">
            {meta}
          </Text>
        )}

        <Text mt="xs" c="sand.7" fz={{ base: 'lg', md: 'xl' }} lh={1.4}>
          {description}
        </Text>
      </Box>
    </Stack>
  );

  if (!href) {
    return content;
  }

  return (
    <Anchor component={Link} href={href} underline="never" c="inherit" style={{ display: 'block' }}>
      {content}
    </Anchor>
  );
}