import { Components, Theme } from '@mui/material/styles'

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      padding: '0 24px',
      margin: '0 auto',

      fontSize: '16px',
      fontWeight: 400,

      boxSizing: 'border-box',

      '::-webkit-scrollbar': {
        width: '4px',
        background: (theme as Theme).palette.background.default,
      },

      '::-webkit-scrollbar-thumb': {
        borderRadius: '100px',
        backgroundColor: (theme as Theme).palette.primary.main,
      },

      [(theme as Theme).breakpoints.down('sm')]: {
        padding: '0 16px',
      },
    },
  }),
}
