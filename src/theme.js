import '../src/stylesheet/fonts.css';

const theme = {
  colors: {
    mainTxtColor: '#000',
    secondaryTxtColor: '#BDBDBD',
    lightTxtColor: '#fff',
    lightBackgroundColor: '#fff',
    backgroundColor: '#E7EAF2',
    secondaryBackgroundColor: 'rgba(255, 255, 255, 0.4)',
    accentColor: '#4A56E2',
    iconColor: '#6E78E8',
    expenseColor: '#FF6596',
    incomeColor: '#24CCA7',
    borderColor: 'rgba(224, 224, 224, 1)',
  },
  fonts: {
    body: 'Circe',
    title: 'Poppins',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '18px',
    l: '30px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    normal: 1.5,
    small: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    icon: '2px',
    button: '20px',
    form: '20px',
    ellipse: '30px',
    round: '50px',
  },

  chartColors: [
    'rgba(254, 208, 87, 1)',
    'rgba(255, 216, 208, 1)',
    'rgba(253, 148, 152, 1)',
    'rgba(197, 186, 255, 1)',
    'rgba(110, 120, 232, 1)',
    'rgba(74, 86, 226, 1)',
    'rgba(129, 225, 255, 1)',
    'rgba(36, 204, 167, 1)',
    'rgba(0, 173, 132, 1)',
  ],
};

export default theme;
