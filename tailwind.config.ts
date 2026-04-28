import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        atl: {
          peach:    '#EB8258',
          rust:     '#B84C1E',
          gold:     '#C9A84C',
          forest:   '#4A6741',
          cream:    '#F5EFE6',
          charcoal: '#1A1612',
          stone:    '#7C6A58',
          sand:     '#DDD0BE',
        },
      },
      fontFamily: {
        migae: ['var(--font-migae)', 'serif'],
        milker: ['var(--font-milker)', 'serif'],
        editorial: ['"Georgia"', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '12xl': ['14rem', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
}

export default config
