module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      footer: '1180px',
      work: '1440px',
      else: '1244px',
    },
    extend: {
      colors: {
        blue: 'var(--blue)',
        yellow: 'var(--yellow)',
        dark: 'var(--dark)',
      },
    },
    screens: {
      'small-phone': '530px',
      phone: '640px',
      tablet: '768px',
      'small-laptop': '992px',
      laptop: '1024px',
      desktop: '1280px',
      'hover-hover': { raw: '(hover: hover)' },
      'hover-none': { raw: '(hover: none)' },
    },
  },
  plugins: [],
};
