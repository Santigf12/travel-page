// src/app/page.tsx

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en" />
      <link rel="canonical" href="/en" />

      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/en');`,
        }}
      />
    </>
  );
}