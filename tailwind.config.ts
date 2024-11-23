import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        buttonText: 'var(--button-text)',
        buttonDefault: 'var(--secondary)',
        buttonBorder: 'var(--button-border)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        blockquote: 'var(--blockquote)',
        backgroundLight: 'var(--background)',
        backgroundDark: 'var(--background-dark)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'custom-gradient': 'var(--custom-gradient)',
        'background-gradient': 'var(--background-dark)',
      },
      boxShadow: {
        shadowDefault: '2px 2px 6px 0px rgba(84, 60, 151, 0.251)',
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
