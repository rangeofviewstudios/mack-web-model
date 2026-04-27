import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        atl: {
          peach:    '#EB8258',
          rust:     '#EB8258',
          gold:     '#EB8258',
          forest:   '#000000',
          cream:    '#FFFFFF',
          charcoal: '#000000',
          stone:    '#7B74C4',
          sand:     '#BEB8EB',
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
