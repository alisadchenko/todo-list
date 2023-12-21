import { Components, Theme } from '@mui/material/styles'

export const MuiPaper: Components['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',

      borderRadius: '16px',

      background: (theme as Theme).palette.whiteOpacity![0],
    }),
  },

  variants: [
    {
      props: { variant: 'light' },
      style: ({ theme }) => ({
        background: (theme as Theme).palette.whiteOpacity![3],
      }),
    },
  ],
}
