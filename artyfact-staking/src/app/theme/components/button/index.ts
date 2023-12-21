import { Components, Theme } from '@mui/material/styles'

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Roboto',

      textTransform: 'unset',
    },

    sizeMedium: ({ theme }) => ({
      height: '40px',

      fontSize: '14px',
      fontWeight: 600,

      [(theme as Theme).breakpoints.down('sm')]: {
        height: '32px',

        fontSize: '12px',
        fontWeight: 500,
      },
    }),

    sizeLarge: ({ theme }) => ({
      fontFamily: 'Aldrich',

      height: '52px',

      fontSize: '16px',

      borderRadius: '16px !important',

      [(theme as Theme).breakpoints.down('sm')]: {
        height: '44px',

        fontSize: '14px',
        fontWeight: 600,
      },
    }),

    startIcon: {
      margin: '0 8px 0 0',
    },

    endIcon: {
      margin: '0 0 0 8px',
    },
  },

  variants: [
    {
      props: { variant: 'contained' },
      style: ({ theme }) => ({
        background: (theme as Theme).palette.gradient,

        borderRadius: '30px',

        padding: '0 12px',
      }),
    },

    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        minWidth: 'unset',

        padding: '10px',

        borderRadius: '13px',

        background: (theme as Theme).palette.whiteOpacity?.[3],

        '&:disabled': {
          opacity: 0.6,
        },

        [(theme as Theme).breakpoints.down('sm')]: {
          padding: '8px',
        },
      }),
    },

    {
      props: { variant: 'text' },
      style: ({ theme }) => ({
        height: 'fit-content',
        minWidth: 'unset',

        padding: '0',

        fontFamily: 'Aldrich',
        fontSize: '12px',
        fontWeight: 400,

        [(theme as Theme).breakpoints.down('sm')]: {
          height: '18px',
        },
      }),
    },

    {
      props: { variant: 'outlined' },
      style: ({ theme }) => ({
        borderRadius: '20px',
        border: `2px solid ${(theme as Theme).palette.primary.main}`,

        background: (theme as Theme).palette.background.secondary,

        fontFamily: 'Aldrich',
        fontSize: '14px',
        fontWeight: 400,
        color: (theme as Theme).palette.text.primary,

        '&:hover': {
          border: `2px solid ${(theme as Theme).palette.primary.main}`,
        },
      }),
    },
  ],
}
