import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mediumGray: 'var(--medium-gray)',
        veryLightGray: 'var(--very-light-gray)',
        veryDarkBlue: 'var(--very-dark-blue)',
        overlay: 'var(--overlay)',
      },
      maxWidth: {
        sm: '573px',
        md: '880px',
        lg: '1110px',
      },
      fontSize: {
        '2.5xl': '2rem',
      },
      transitionProperty: {
        right: 'right',
      },
      transitionDuration: {
        400: '400ms',
      },
      gap: {
        15: '3.75rem',
        19: '4.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
