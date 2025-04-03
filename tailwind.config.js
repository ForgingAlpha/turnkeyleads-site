import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--tk-color-primary)',
        secondary: 'var(--tk-color-secondary)',
        accent: 'var(--tk-color-accent)',
        default: 'var(--tk-color-text-default)',
        muted: 'var(--tk-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--tk-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--tk-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--tk-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
