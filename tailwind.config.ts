import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#03344E',
          secondary: '#4785BF',
          accent: '#FB8500',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-kodchasan)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
