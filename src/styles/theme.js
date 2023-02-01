export const theme = Object.freeze({
  colors: {
    accentGreen: '#24CCA7',
    accentBlue: '#4A56E2',
    accentPink: '#FF6596',
    secondaryBlue: '#6E78E8',
    secondaryTextColor: '#A6A6A6',
    bgColor: '#E7EAF2',
    white: '#ffffff',
    black: '#000000',
    grey: '#BDBDBD',
  },
  fonts: {
    primary: 'CirceRegular, sans serif',
    primaryBold: 'CirceBold, sans serif',
    secondary: 'PoppinsRegular, sans serif',
    secondaryBold: 'PoppinsBold, sans serif',
  },
  fontSizes: {
    min: '12px',
    small: '16px',
    medium: '18px',
    max: '24px',
    large: '28px',
    title: '30px',
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
});
