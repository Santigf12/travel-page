// src/components/LocaleRedirect.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SUPPORTED = ['en', 'es', 'fr'];

export function LocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('preferred-locale');
    if (stored && SUPPORTED.includes(stored)) {
      router.replace(`/${stored}`);
      return;
    }

    const browserLang = navigator.language.slice(0, 2);
    const match = SUPPORTED.includes(browserLang) ? browserLang : 'en';
    router.replace(`/${match}`);
  }, [router]);

  return null;
}