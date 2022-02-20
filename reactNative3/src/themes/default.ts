export type ThemeType = typeof themeProps;

const themeProps = {
  fonts: {
    primary: 'Open Sans, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  colors: {
    blue: {
      900: '#03045E',
      800: '#023E8A',
      700: '#0077B6',
      600: '#0096C7',
      500: '#00B4D8',
      400: '#48CAE4',
      300: '#90E0EF',
      200: '#ADE8F4',
      100: '#CAF0F8',
    },
    white: '#FFF',
    black: '#000',
  },
};

export const defaultTheme: ThemeType = themeProps;
