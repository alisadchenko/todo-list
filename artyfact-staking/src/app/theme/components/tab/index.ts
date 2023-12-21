import { Components, Theme } from '@mui/material/styles'

export const MuiTab: Components['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'unset',
      height: '44px',
      maxWidth: 'unset',
      width: '50%',

      padding: '0',

      borderRadius: '12px',

      background: 'transparent',

      textTransform: 'unset',
      fontSize: '14px',
      fontWeight: 500,
      color: (theme as Theme).palette.primary.main,

      transition: 'all 0.2s ease-out',

      '&[aria-selected="true"]': {
        background: (theme as Theme).palette.primary.main,

        color: (theme as Theme).palette.text.inverse,
      },

      [(theme as Theme).breakpoints.down('sm')]: {
        height: '36px',

        fontSize: '12px',
        fontWeight: 400,
      },
    }),
  },
}
