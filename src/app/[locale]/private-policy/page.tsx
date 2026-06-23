// src/app/[locale]/privacy-policy/page.tsx

import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getPrivacyContent } from '@/types/privacy';
import {
  Badge,
  Box,
  Card,
  Container,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const generateStaticParams = generateLocaleParams;

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const content = getPrivacyContent(locale);

  return (
    <Container
      size={1500}
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 50, md: 65 }}
      pb={{ base: 80, md: 120 }}
    >
      <Stack gap={36}>
        <Stack gap="md" align="center" ta="center">
          <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
            {content.eyebrow}
          </Text>

          <Title
            order={1}
            c="sand.9"
            fw={400}
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.6rem)',
              lineHeight: 1.08,
            }}
          >
            {content.title}
          </Title>

          <Text c="sand.7" fz={{ base: 'md', md: 'lg' }} maw={820} mx="auto" lh={1.6}>
            {content.subtitle}
          </Text>

          <Badge color="aztecGold" variant="light" size="md" radius="sm">
            {content.lastUpdated}
          </Badge>
        </Stack>

        <Card
          radius="lg"
          p={{ base: 'lg', md: 'xl' }}
          bg="white"
          withBorder
          maw={1050}
          mx="auto"
          style={{ boxShadow: '0 12px 35px rgba(44, 43, 40, 0.06)' }}
        >
          <Stack gap="xl">
            <Box>
              <Text c="sand.6" tt="uppercase" lts="0.14em" fz="xs" fw={700} mb={6}>
                {content.contactTitle}
              </Text>

              <Text c="sand.9" fw={700}>
                {content.company}
              </Text>

              <Text c="sand.7" lh={1.6} mt={4}>
                {content.address}
              </Text>

              <Text c="sand.7" lh={1.6}>
                {content.email}
              </Text>
            </Box>

            {content.sections.map((section) => (
              <Box key={section.title}>
                <Title order={2} c="alicoBlue.7" fw={500} fz={{ base: 'lg', md: 'xl' }} mb="sm">
                  {section.title}
                </Title>

                <Stack gap="xs">
                  {section.body?.map((paragraph) => (
                    <Text key={paragraph} c="sand.7" lh={1.7}>
                      {paragraph}
                    </Text>
                  ))}

                  {section.items && (
                    <List spacing="xs" c="sand.7" lh={1.7} pl="md">
                      {section.items.map((item) => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </List>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
