module.exports = {
  purge: {
    layers: ['utilities'],
    content: [
      './pages/',
    ],
  },
  theme: {
    colors: {
      blue: '#473198',
      mint: '#9CFC97',
      green: '#6BA368',
      darkgreen: '#515B3A',
      shadowgreen: '#353D2F',
      black: '#292929',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
