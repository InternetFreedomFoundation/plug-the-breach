/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      boxShadow: {
        '3xl': '0 35px 60px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
