/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'word-tight': '0.25rem',
        'word-normal': '0.5rem',
        'word-wide': '1rem',
      },
      colors: {
        primary: {
          light: '',
          DEFAULT: '#dcb948',
          dark: '',
        },
        secondary: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        headerBG: {
          DEFAULT: '#254151'
        },
        white: {
          DEFAULT: '#fff',
        }
        // Add more custom colors here
      },
    },
  },
  plugins: [],
}