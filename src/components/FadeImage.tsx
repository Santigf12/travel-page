// src/components/FadeImage.tsx
'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

export function FadeImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      onLoad={() => setLoaded(true)}
      style={{
        ...props.style,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 400ms ease',
      }}
    />
  );
}