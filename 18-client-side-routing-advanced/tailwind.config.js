/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents, addUtilities }) => {
      addComponents({
        '.euid-button': {
          '@apply border-2 border-solid border-indigo-600 py-2 px-5 rounded-lg text-indigo-600 font-medium uppercase':
            {},
        },
      });
      addUtilities({
        '.a11y-hidden': {},
      });
    },
  ],
};
