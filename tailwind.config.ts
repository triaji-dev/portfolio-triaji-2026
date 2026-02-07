import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const textSizes = {
  'display-10xl': '--text-display-10xl',
  'display-9xl': '--text-display-9xl',
  'display-8xl': '--text-display-8xl',
  'display-7xl': '--text-display-7xl',
  'display-6xl': '--text-display-6xl',
  'display-5xl': '--text-display-5xl',
  'display-4xl': '--text-display-4xl',
  'display-3xl': '--text-display-3xl',
  'display-2xl': '--text-display-2xl',
  'display-xl': '--text-display-xl',
  'display-lg': '--text-display-lg',
  'display-md': '--text-display-md',
  'display-sm': '--text-display-sm',
  'display-xs': '--text-display-xs',
  'text-xl': '--text-xl',
  'text-lg': '--text-lg',
  'text-md': '--text-md',
  'text-sm': '--text-sm',
  'text-xs': '--text-xs',
};

const fontWeights = {
  regular: '--font-weight-regular',
  medium: '--font-weight-medium',
  semibold: '--font-weight-semibold',
  bold: '--font-weight-bold',
  extrabold: '--font-weight-extrabold',
};

const customTextPlugin = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, any> = {};

  for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
    for (const [weightName, weightVar] of Object.entries(fontWeights)) {
      const className = `.${sizeName}-${weightName}`;
      newUtilities[className] = {
        fontSize: `var(${sizeVar})`,
        lineHeight: `var(${sizeVar}--line-height)`,
        fontWeight: `var(${weightVar})`,
      };
    }
  }

  addUtilities(newUtilities);
});

export default {
  theme: {
    extend: {
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #002c6e 0%, #0c4eaf 100%)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [customTextPlugin],
} satisfies Config;
