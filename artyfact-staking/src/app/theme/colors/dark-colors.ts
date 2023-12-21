import { PaletteOptions } from '@mui/material/styles'

export const darkColors: PaletteOptions = {
  mode: 'dark',

  divider: '#FFFFFF17',

  background: {
    default: '#141218',
    secondary: '#2B2930',
    tertiary: '#49454F',
    widgetBackground: '#1E1F2A',
  },

  gradient: 'linear-gradient(180deg, #F3BA2F 27.08%, #FF8946 100%)',

  text: {
    error: '#FF817A',
    primary: '#FFFFFF',
    secondary: '#AEABB2',
    tertiary: '#938F99',
    inverse: '#000000',
  },

  primary: {
    main: '#F3BA2F',
  },

  whiteOpacity: ['#FFFFFF0D', '#FFFFFF14', '#FFFFFF17', '#FFFFFF1A', '#FFFFFF2E', '#FFFFFF6E'],
}
