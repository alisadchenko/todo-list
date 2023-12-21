import { ThemeOptions } from '@mui/material/styles'

import * as components from './components'

export const baseTheme: ThemeOptions = {
  components,

  typography: {
    fontFamily: 'Roboto',

    h1: {
      fontFamily: 'Axiforma Regular',
      fontSize: '46px',
      lineHeight: '130%',
      fontWeight: 500,
    },

    h2: {
      fontFamily: 'Axiforma Regular',
      fontSize: '40px',
      lineHeight: '130%',
      fontWeight: 400,
    },

    h3: {
      fontFamily: 'Axiforma Regular',
      fontSize: '36px',
      lineHeight: '130%',
      fontWeight: 600,
    },

    h4: {
      fontFamily: 'Axiforma Regular',
      fontSize: '28px',
      lineHeight: '130%',
      fontWeight: 600,
    },
  },
}
