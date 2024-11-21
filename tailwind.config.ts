import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        buttonDefault: 'var(--secondary)',
        buttonText: 'var(--button-text)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        backgroundLight: 'var(--background)',
        backgroundDark: 'var(--background-dark)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'custom-gradient': 'var(--custom-gradient)',
        'background-gradient': 'var(--background-dark)',
      },
      boxShadow: {
        button: 'var(--defaultShadow)',
      },
      fontSize: {
        'button-text': ['16px', { lineHeight: '24px' }],
        'text-lg': ['20px', { lineHeight: '28px' }],
        'text-sm': ['14px', { lineHeight: '20px' }],
      },
    },
  },
  plugins: [],
};
export default config;
