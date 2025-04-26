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
      },
      height: {
        103.5: '25.875rem',
      },
      insert: {
        12.5: '3.125rem', // 50px to rem
      },
      marginBottom: {
        6.5: '1.625rem', // 26px to rem
        12.5: '3.125rem', // 50px to rem
      },
      fontSize: {
        5.5 : '1.375rem', // 22px to rem
        3.25: '0.8125rem', // 13px to rem
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