/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        surface: {
          DEFAULT: '#f9fafb',
          dark: '#1a1a1a',
        },
        text: {
          DEFAULT: '#1f2937',
          dark: '#f9fafb',
          secondary: '#6b7280',
          'secondary-dark': '##d1d5db',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
};
