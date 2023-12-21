import { Components, Theme } from '@mui/material'

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      margin: '0 auto',

      fontSize: '16px',

      maxWidth: '1536px',

      boxSizing: 'border-box',

      '::-webkit-scrollbar': {
        width: '4px',
        background: (theme as Theme).palette.background.surfaceHigh,
      },

      '::-webkit-scrollbar-thumb': {
        borderRadius: '100px',
        backgroundColor: (theme as Theme).palette.primary.main,
      },

      [(theme as Theme).breakpoints.down(1584)]: {
        margin: '0 24px',
      },
    },
  }),
}
