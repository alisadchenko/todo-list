import { Components, Theme } from '@mui/material/styles'

export const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    h1: ({ theme }) => ({
      fontSize: '45px',
      lineHeight: '140%',

      [(theme as Theme).breakpoints.down('sm')]: {
        fontSize: '28px',
      },
    }),

    subtitle1: ({ theme }) => ({
      fontSize: '22px',
      lineHeight: '140%',

      [(theme as Theme).breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    }),

    subtitle2: ({ theme }) => ({
      fontSize: '20px',
      lineHeight: '140%',

      [(theme as Theme).breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    }),
  },
}
