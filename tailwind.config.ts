import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightGreen: '#A8E05F',
        darkGreen: '#87C13C',
        lightYellow: '#FDD64B',
        darkYellow: '#efbe1d',
        lightOrange: '#FF9B57',
        darkOrange: '#F27E2F',
        lightRed: '#E84B50',
        darkRed: '#942431',
        lightPurple: '#A97ABC',
        darkPurple: '#543B63',
        textGreen: '#3E5116',
        textYellow: '#8C6C1D',
        textOrange: '#974A2D',
        textRed: '#942431',
        textPurple: '#543B63',
      },
    },
  },
  plugins: [],
}
export default config
