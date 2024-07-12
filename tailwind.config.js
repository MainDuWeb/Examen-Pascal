module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      sm2: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
        container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2em',
        lg: '2em',
        xl: '2em',
        xxl: '12em',
      },
    },
    extend: {
      backgroundImage: {
        'jaune': "url('~src/img/jaune.png')",
        'vert': "url('~src/img/vert.png')",
        'rouge': "url('~src/img/rouge.png')",
        'quote': "url('~src/img/quote.png')",
        'sm': "url('~src/img/gsm-student.png')",
        'big-jaune': "url('~src/img/big-jaune.png')",
        'big-vert': "url('~src/img/big-vert.png')",
        'big-rouge': "url('~src/img/big-rouge.png')",

      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
