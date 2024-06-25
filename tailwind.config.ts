import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Add custom 24-column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      maxWidth: {
        '1200': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
