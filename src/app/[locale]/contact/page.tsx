// src/app/[locale]/contact/page.tsx

import {
  generateLocaleParams,
  isValidLocale,
  type Locale,
} from '@/i18n/dictionaries';
import {
  getContactContent,
  type ContactIconName,
} from '@/types/contact';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBuildingStore,
  IconCalculator,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react';

export const generateStaticParams = generateLocaleParams;

const contactIconMap = {
  sparkles: IconSparkles,
  users: IconUsers,
  buildingStore: IconBuildingStore,
  calculator: IconCalculator,
} satisfies Record<ContactIconName, typeof IconMail>;

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/[^\d]/g, '')}`;
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof IconMail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon
        color="alicoBlue"
        variant="light"
        radius="xl"
        size="sm"
        mt={3}
        style={{ flexShrink: 0 }}
      >
        <Icon size={13} stroke={2} />
      </ThemeIcon>

      <Box>
        <Text c="sand.6" fz="xs" tt="uppercase" lts="0.08em" fw={700}>
          {label}
        </Text>

        <Anchor href={href} c="sand.8" fz="sm" fw={500}>
          {value}
        </Anchor>
      </Box>
    </Group>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const t = getContactContent(locale);
  const contactSections = t.sections;

  return (
    <Container
      size={1500}
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 50, md: 65 }}
      pb={{ base: 50, md: 65 }}
    >
      <Stack gap={70}>
        <Stack gap="md" align="center" ta="center">
          <Badge color="aztecGold" variant="light" size="lg">
            {t.eyebrow}
          </Badge>

          <Title
            order={1}
            c="sand.9"
            fw={400}
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              lineHeight: 1,
            }}
          >
            {t.title}
          </Title>

          <Text
            c="sand.7"
            fz={{ base: 'lg', md: 'xl' }}
            maw={820}
            mx="auto"
            lh={1.6}
          >
            {t.subtitle}
          </Text>

          <Group justify="center" mt="md">
            <Button
              component="a"
              href={`mailto:${t.generalContact.email}?subject=Travel inquiry`}
              size="md"
              radius="xl"
              color="alicoBlue"
              leftSection={<IconMail size={18} />}
            >
              {t.primaryCta}
            </Button>

            <Button
              component="a"
              href={phoneHref(t.generalContact.phone)}
              size="md"
              radius="xl"
              variant="light"
              color="aztecGold"
              leftSection={<IconPhone size={18} />}
            >
              {t.secondaryCta}
            </Button>
          </Group>
        </Stack>

        <Card
          radius="xl"
          p={{ base: 'lg', md: 'xl' }}
          bg="alicoBlue.7"
          style={{
            boxShadow: '0 24px 60px rgba(44, 43, 40, 0.16)',
          }}
        >
          <Grid align="flex-start" gap={{ base: 'xl', md: 40 }}>
            <GridCol span={{ base: 12, md: 5 }}>
              <Group gap="md" align="flex-start" wrap="nowrap">
                <ThemeIcon
                  color="sand"
                  variant="light"
                  radius="xl"
                  size="xl"
                  style={{ flexShrink: 0 }}
                >
                  <IconMail size={22} stroke={1.8} />
                </ThemeIcon>

                <Box style={{ minWidth: 0, flex: 1 }}>
                  <Title
                    order={2}
                    c="sand.0"
                    fw={400}
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1.05,
                      wordBreak: 'normal',
                    }}
                  >
                    {t.generalTitle}
                  </Title>

                  <Text c="sand.1" lh={1.6} mt={6}>
                    {t.generalDescription}
                  </Text>
                </Box>
              </Group>
            </GridCol>

            <GridCol span={{ base: 12, md: 7 }}>
              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={{ base: 'md', md: 'xl' }}
              >
                <Stack gap="md">
                  <Group gap="sm" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      color="sand"
                      variant="light"
                      radius="xl"
                      size="sm"
                      mt={3}
                      style={{ flexShrink: 0 }}
                    >
                      <IconMail size={13} stroke={2} />
                    </ThemeIcon>

                    <Box>
                      <Text
                        c="sand.1"
                        fz="xs"
                        tt="uppercase"
                        lts="0.08em"
                        fw={700}
                      >
                        {t.email}
                      </Text>

                      <Anchor
                        c="sand.0"
                        href={`mailto:${t.generalContact.email}`}
                        fz="sm"
                        fw={500}
                      >
                        {t.generalContact.email}
                      </Anchor>
                    </Box>
                  </Group>

                  <Group gap="sm" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      color="sand"
                      variant="light"
                      radius="xl"
                      size="sm"
                      mt={3}
                      style={{ flexShrink: 0 }}
                    >
                      <IconPhone size={13} stroke={2} />
                    </ThemeIcon>

                    <Box>
                      <Text
                        c="sand.1"
                        fz="xs"
                        tt="uppercase"
                        lts="0.08em"
                        fw={700}
                      >
                        {t.office}
                      </Text>

                      <Anchor
                        c="sand.0"
                        href={phoneHref(t.generalContact.phone)}
                        fz="sm"
                        fw={500}
                      >
                        {t.generalContact.phone}
                      </Anchor>
                    </Box>
                  </Group>
                </Stack>

                <Stack gap="md">
                  <Group gap="sm" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      color="sand"
                      variant="light"
                      radius="xl"
                      size="sm"
                      mt={3}
                      style={{ flexShrink: 0 }}
                    >
                      <IconMapPin size={13} stroke={2} />
                    </ThemeIcon>

                    <Box>
                      <Text
                        c="sand.1"
                        fz="xs"
                        tt="uppercase"
                        lts="0.08em"
                        fw={700}
                      >
                        Mexico DMC MICE
                      </Text>

                      <Text c="sand.0" fz="sm" fw={500}>
                        {t.tourOperator} · DMC · MICE
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </SimpleGrid>
            </GridCol>
          </Grid>
        </Card>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
          {contactSections.map((section) => {
            const Icon = contactIconMap[section.icon];

            return (
              <Card
                key={section.title}
                radius="xl"
                p={{ base: 'lg', md: 'xl' }}
                bg="sand.0"
                withBorder
                style={{
                  boxShadow: '0 18px 45px rgba(44, 43, 40, 0.08)',
                }}
              >
                <Stack gap="lg">
                  <Group gap="md" align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      color="aztecGold"
                      variant="light"
                      radius="xl"
                      size="xl"
                      style={{ flexShrink: 0 }}
                    >
                      <Icon size={22} stroke={1.8} />
                    </ThemeIcon>

                    <Box style={{ minWidth: 0, flex: 1 }}>
                      <Title
                        order={2}
                        c="alicoBlue.7"
                        fw={400}
                        style={{
                          fontSize: 'clamp(2rem, 4vw, 3rem)',
                          lineHeight: 1.05,
                          wordBreak: 'normal',
                        }}
                      >
                        {t[section.title]}
                      </Title>

                      <Text c="sand.7" lh={1.5} mt={4}>
                        {t[section.description]}
                      </Text>
                    </Box>
                  </Group>

                  <Divider color="sand.2" />

                  <Stack gap="lg">
                    {section.contacts.map((contact) => (
                      <Card
                        key={`${section.title}-${contact.name}-${contact.whatsapp ?? contact.office ?? contact.email}`}
                        radius="lg"
                        p="md"
                        bg="white"
                        withBorder
                      >
                        <Stack gap="sm">
                          <Box>
                            <Text fw={700} c="sand.9">
                              {contact.name}
                            </Text>

                            {contact.role && (
                              <Text c="sand.6" size="sm">
                                {contact.role}
                              </Text>
                            )}
                          </Box>

                          <Stack gap="xs">
                            <ContactLine
                              icon={IconMail}
                              label={t.email}
                              value={contact.email}
                              href={`mailto:${contact.email}`}
                            />

                            {contact.office && (
                              <ContactLine
                                icon={IconPhone}
                                label={t.office}
                                value={contact.office}
                                href={phoneHref(contact.office)}
                              />
                            )}

                            {contact.whatsapp && (
                              <ContactLine
                                icon={IconMessageCircle}
                                label={t.whatsapp}
                                value={contact.whatsapp}
                                href={whatsappHref(contact.whatsapp)}
                              />
                            )}
                          </Stack>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}