import { Components, Theme } from '@mui/material/styles'

export const MuiTabs: Components['MuiTabs'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'unset',
      height: '44px',

      borderRadius: '12px',

      background: (theme as Theme).palette.background.default,

      [(theme as Theme).breakpoints.down('sm')]: {
        height: '36px',
      },
    }),

    indicator: {
      display: 'none',
    },
  },
}
