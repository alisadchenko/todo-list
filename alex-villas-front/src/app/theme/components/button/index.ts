import { Components } from '@mui/material/styles'

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'unset',
    },

    startIcon: {
      margin: '0 8px 0 0',
    },

    endIcon: {
      margin: '0 0 0 8px',
    },
  },

  variants: [
    {
      props: { variant: 'navigation' },
      style: ({ theme }) => ({
        cursor: 'pointer',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '48px',
        height: '48px',
        minWidth: 'unset',

        padding: '0',

        borderRadius: '100px',

        background: theme.palette.background.surfaceHigh,

        color: theme.palette.text.tertiary,

        boxShadow: theme.shadows[3],
      }),
    },
    {
      props: { variant: 'containedSecondary' },
      style: ({ theme }) => ({
        height: '44px',

        padding: '0 30px',

        fontSize: '15px',

        borderRadius: '24px',

        background: theme.palette.primaryOpacity,

        '&:hover': {
          background: theme.palette.primary.dark,
        },
      }),
    },
    {
      props: { variant: 'outlined' },
      style: ({ theme }) => ({
        padding: '18px 15px',

        borderRadius: '17px',
        border: `1px solid ${theme.palette.border}`,

        background: theme.palette.background.surfaceLow,

        fontWeight: 600,
        color: theme.palette.text.primary,
      }),
    },
  ],
}
