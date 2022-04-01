module.exports = {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '20px',
        xl: '25px',
        '2xl': '30px',
        '3xl': '30px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1900px',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        //
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
