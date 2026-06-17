// src/theme.ts
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "alicoBlue",

  colors: {
    // Primary brand blue — derived from logo #2596BE
    alicoBlue: [
      "#e8f5fa", // 0 — lightest tint
      "#c5e4f2", // 1
      "#9dd0e8", // 2
      "#62b3d8", // 3
      "#2596be", // 4 — logo color (default shade)
      "#1A6E8F", // 5 — hover / active
      "#145a77", // 6
      "#0E4A62", // 7 — Midnight Sea (headers, overlays)
      "#093748", // 8
      "#04212c", // 9 — deepest
    ],

    // Luxury gold accent
    aztecGold: [
      "#fdf8ee", // 0
      "#f5e9c8", // 1
      "#ead5a0", // 2
      "#dabb72", // 3
      "#C5A253", // 4 — primary gold
      "#ad8b3a", // 5
      "#8B6914", // 6 — Antique Bronze
      "#6e5210", // 7
      "#503b0b", // 8
      "#352607", // 9
    ],

    // Warm neutrals
    sand: [
      "#F7F5F2", // 0 — Linen (page background)
      "#F0E6C8", // 1 — Sand Dune (warm fills)
      "#E8E3DB", // 2 — Parchment (cards, dividers)
      "#d8d0c3", // 3
      "#c4baaa", // 4
      "#a49888", // 5
      "#877969", // 6
      "#655c4f", // 7
      "#44403a", // 8
      "#2C2B28", // 9 — Obsidian (body text)
    ],
  },

  black: "#2C2B28", // Obsidian — warm near-black for text
  white: "#F7F5F2", // Linen — warm off-white

  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontFamilyMonospace: "'Courier New', monospace",

  headings: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: "400",
    sizes: {
      h1: { fontSize: "3rem", lineHeight: "1.15" },
      h2: { fontSize: "2.25rem", lineHeight: "1.2" },
      h3: { fontSize: "1.75rem", lineHeight: "1.25" },
      h4: { fontSize: "1.375rem", lineHeight: "1.3" },
    },
  },

  defaultRadius: "sm",
  cursorType: "pointer",

  other: {
    // Named tokens for convenient use in sx / style props
    colors: {
      alicoBlue: "#2596BE",
      deepOcean: "#1A6E8F",
      midnightSea: "#0E4A62",
      aztecGold: "#C5A253",
      antiqueBronze: "#8B6914",
      sandDune: "#F0E6C8",
      linen: "#F7F5F2",
      parchment: "#E8E3DB",
      obsidian: "#2C2B28",
    },
  },

  components: {
    Anchor: {
      defaultProps: {
        underline: "never",
        c: "alicoBlue",
      },
    },

    Button: {
      defaultProps: {
        color: "alicoBlue",
      },
      styles: {
        root: {
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontSize: "0.8rem",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        },
      },
    },

    Badge: {
      defaultProps: {
        color: "aztecGold",
        variant: "light",
      },
    },

    Card: {
      defaultProps: {
        bg: "white",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: "#E8E3DB",
        },
      },
    },

    Title: {
      styles: {
        root: {
          color: "#0E4A62", // Midnight Sea for all headings
        },
      },
    },
  },
});
