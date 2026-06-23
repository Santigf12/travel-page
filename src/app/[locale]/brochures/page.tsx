// src/app/[locale]/brochures/page.tsx

import { generateLocaleParams, isValidLocale, type Locale } from '@/i18n/dictionaries';
import { getBrochuresContent } from '@/types/brochures';
import { Badge, Box, Button, Card, Container, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconDownload, IconFileText, IconSparkles } from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

export default async function BrochuresPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const content = getBrochuresContent(locale);
  const { brochure } = content;

  return (
    <Container size={1500} px={{ base: 'md', md: 'xl' }} pt={{ base: 50, md: 65 }} pb={{ base: 80, md: 120 }}>
      <Stack gap={64}>
        <Stack gap="md" align="center" ta="center">
          <Group gap={6} justify="center">
            <ThemeIcon size="xs" radius="xl" variant="light" color="aztecGold" style={{ background: 'transparent' }}>
              <IconSparkles size={14} stroke={2} />
            </ThemeIcon>

            <Text c="aztecGold.7" tt="uppercase" lts="0.18em" fz="sm" fw={600}>
              {content.eyebrow}
            </Text>
          </Group>

          <Title order={1} c="sand.9" fw={400} style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.05 }}>
            {content.title}
          </Title>

          <Text c="sand.7" fz={{ base: 'md', md: 'lg' }} maw={820} mx="auto" lh={1.65}>
            {content.subtitle}
          </Text>
        </Stack>

        <Card radius="xl" p={0} bg="white" withBorder maw={1120} mx="auto" style={{ overflow: 'hidden', boxShadow: '0 22px 55px rgba(44, 43, 40, 0.1)' }}>
          <SimpleGrid>
            <Stack gap="xl" p={{ base: 'xl', md: 44 }} justify="center">
              <Box>
                <Title order={2} c="alicoBlue.7" fw={400} style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.08 }}>
                  {brochure.title}
                </Title>

                <Text c="sand.7" lh={1.7} mt="md" fz={{ base: 'md', md: 'lg' }}>
                  {brochure.description}
                </Text>
              </Box>

              <Box>
                <Text c="aztecGold.7" tt="uppercase" lts="0.14em" fz="sm" fw={700} mb="md">
                  {content.chooseLanguage}
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                  {brochure.files.map((file) => (
                    <Card key={file.code} radius="lg" p="md" bg="sand.0" withBorder>
                      <Group justify="space-between" align="center" gap="sm">
                        <Group gap="sm">
                          <Badge color="alicoBlue" variant="light" radius="sm">
                            {file.code}
                          </Badge>

                          <Text c="sand.9" fw={600}>
                            {file.label}
                          </Text>
                        </Group>

                        <Group gap={6}>
                          <Button component="a" href={file.href} target="_blank" rel="noreferrer" size="xs" radius="xl" variant="subtle" color="alicoBlue" leftSection={<IconFileText size={14} />}>
                            {content.viewBrochure}
                          </Button>

                          <Button component="a" href={file.href} download size="xs" radius="xl" variant="light" color="aztecGold" leftSection={<IconDownload size={14} />}>
                            {content.downloadPdf}
                          </Button>
                        </Group>
                      </Group>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>
            </Stack>
          </SimpleGrid>
        </Card>

        <Card radius="xl" p={{ base: 'xl', md: 44 }} bg="alicoBlue.7">
          <Group justify="space-between" align="center" gap="xl">
            <Box maw={760}>
              <Text c="aztecGold.2" tt="uppercase" lts="0.16em" fz="sm" fw={700} mb="xs">
                {content.ctaTitle}
              </Text>

              <Text c="sand.0" fz={{ base: 'lg', md: 'xl' }} lh={1.6}>
                {content.ctaBody}
              </Text>
            </Box>

            <Button component="a" href={`/${locale}/contact`} color="aztecGold" variant="filled" radius="xl" size="md">
              {content.ctaButton}
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
