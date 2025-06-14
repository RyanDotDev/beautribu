import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        designColour: "#ffc0cb",
        debug: '#ff0000'
      },
    },
  },
  plugins: [],
};

export default config;