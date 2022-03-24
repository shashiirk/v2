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
        grayDark: 'var(--gray-dark)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        breakpointXS: 'var(--breakpoint-xs)',
        breakpointSM: 'var(--breakpoint-sm)',
        breakpointMD: 'var(--breakpoint-md)',
        breakpointLG: 'var(--breakpoint-lg)',
        breakpointXL: 'var(--breakpoint-xl)',
      },
    },
    screens: {
      'small-phone': '530px',
      phone: '640px',
      tablet: '768px',
      'small-laptop': '992px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
};
