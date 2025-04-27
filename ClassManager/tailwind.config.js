/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['OpenSans_400Regular'],
        'open-sans-bold': ['OpenSans_700Bold'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'gray-light': '#E0E0E0',
        'gray-dark': '#4F4F4F',
        danger: '#FF0000',
        success: '#4CAF50',
        info: '#0000FF',
        warning: '#BDBDBD',
        border: 'rgba(224, 224, 224, 1)',
        'text-primary': '#333333',
        'text-secondary': '#828282',
        'text-highlight': '#00B14F',
        'light-gray': '#f2f2f2',
        'background-overlay': 'rgba(0, 0, 0, 0.5)',
        'background-dark': 'rgba(0, 0, 0, 0.7)',
        'background-muted': '#E8EBEE',
        'background-disabled': '#A5B4FC',
        'background-button': '#2563EB',
      },
      width: {
        percent90: '90%',
        100: '25rem', // 400px to rem
      },
      height: {
        100: '25rem', // 400px to rem
        103.5: '25.875rem',
      },
      inset: {
        12.5: '3.125rem', // 50px to rem
      },
      marginBottom: {
        6.5: '1.625rem', // 26px to rem
        12.5: '3.125rem', // 50px to rem
      },
      fontSize: {
        xs: 12, // text-xs
        sm: 14, // text-sm
        base: 16, // text-base
        lg: 18, // text-lg
        xl: 20, // text-xl
        '2xl': 24, // text-2xl
        '3xl': 30, // text-3xl
        '4xl': 36, // text-4xl
        '5xl': 48, // text-5xl
        '6xl': 60, // text-6xl
        5.5: '22', // 22px to rem : 375rem
        3.25: '13', //   rem: 0.8125rem
      },
      paddingBottom: {
        14.5: '3.625rem', // 58px to rem
      },
      borderRadius: {
        150: '3.75rem', // 60px to rem
      },
    },
  },
  plugins: [],
}
