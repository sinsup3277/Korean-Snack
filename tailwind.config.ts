import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cold: {
          base: '#07121A',
          panel: '#0D1A24',
          surface: '#132432',
          line: '#27546A',
          cyan: '#47E0E8',
          mint: '#C7FFEE',
          text: '#D7EEF7',
          muted: '#8FA7B6'
        }
      },
      boxShadow: {
        cold: '0 10px 30px rgba(5, 15, 22, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
