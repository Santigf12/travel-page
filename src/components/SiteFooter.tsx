import {
    Anchor,
    Box,
    Container,
    Group,
    SimpleGrid,
    Stack,
    Text,
} from '@mantine/core';
import Link from 'next/link';

const footerColumns = [
  [
    {
      title: 'About Mexico',
      links: [
        { label: 'Where to go', href: '/en/about-mexico/where-to-go' },
        { label: 'When to go', href: '/en/about-mexico/when-to-go' },
        { label: 'How to go', href: '/en/about-mexico/how-to-go' },
      ],
    },
    {
      title: 'Trips',
      links: [
        { label: 'FITs', href: '/en/trips/fits' },
        { label: 'Groups', href: '/en/trips/groups' },
        { label: 'One day tours', href: '/en/trips/one-day-tours' },
      ],
    },
  ],
  [
    {
      title: 'Handpicked Travel',
      links: [
        { label: 'Luxury Experiences', href: '/en/handpicked-travel/luxury-experiences' },
        { label: 'Gastronomic tours', href: '/en/handpicked-travel/gastronomic-tours' },
        { label: 'Photographic tours', href: '/en/handpicked-travel/photographic-tours' },
        { label: 'Incentives', href: '/en/handpicked-travel/incentives' },
        { label: 'Weddings', href: '/en/handpicked-travel/weddings' },
        { label: 'Mexican women trails', href: '/en/handpicked-travel/mexican-women-trails' },
        { label: 'Native cultures', href: '/en/handpicked-travel/native-cultures' },
        { label: 'Social awareness', href: '/en/handpicked-travel/social-awareness' },
        { label: 'Day of the Dead', href: '/en/handpicked-travel/day-of-the-dead' },
        { label: 'Architecture', href: '/en/handpicked-travel/architecture' },
      ],
    },
  ],
  [
    {
      title: 'Who We Are',
      links: [
        { label: 'About Us', href: '/en/who-we-are/about-us' },
        { label: 'Careers', href: '/en/who-we-are/careers' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Contact', href: '/en/contact' },
        { label: 'alico@alico.com.mx', href: 'mailto:alico@alico.com.mx' },
        { label: '+52 (55) 5575-1774', href: 'tel:+525555751774' },
      ],
    },
  ],
  [
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'PROFECO Folio 8353229', href: '#' },
        { label: 'Expediente PFC.B.E.7/009595-2018', href: '#' },
        { label: 'Contrato 1138-2018', href: '#' },
      ],
    },
  ],
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Anchor
        component={Link}
        href={href}
        c="sand.8"
        size="sm"
        lh={1.4}
        style={{ width: 'fit-content' }}
      >
        {label}
      </Anchor>
    );
  }

  return (
    <Anchor
      href={href}
      c="sand.8"
      size="sm"
      lh={1.4}
      style={{ width: 'fit-content' }}
    >
      {label}
    </Anchor>
  );
}

export function SiteFooter() {
  return (
    <Box bg="sand.0" pt={{ base: 60, md: 90 }} pb="xl">
      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 'xl', md: 60 }}
        >
          {footerColumns.map((column, columnIndex) => (
            <Stack key={columnIndex} gap="xl">
              {column.map((section) => (
                <Stack key={section.title} gap="sm">
                  <Text fw={700} c="sand.9">
                    {section.title}
                  </Text>

                  {section.links.map((link) => (
                    <FooterLink
                      key={link.label}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </Stack>
              ))}
            </Stack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 50, md: 80 }}
          pt="lg"
          style={{ borderTop: '1px solid var(--mantine-color-sand-2)' }}
        >
          <Group justify="space-between" align="center" gap="md">
            <Text c="sand.7" size="sm">
              © Copyright - Alico Tours
            </Text>

            <Text c="sand.7" size="sm">
              Mexican Tour Operator · DMC · MICE
            </Text>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}