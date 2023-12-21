import { tableCellClasses } from '@mui/material'
import { Components, Theme } from '@mui/material/styles'

export const MuiTableCell: Components['MuiTableCell'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      lineHeight: '140%',

      padding: '15px 0',

      '&:first-of-type': {
        padding: '15px 0 15px 20px',
      },

      '&:last-of-type': {
        padding: '15px 20px 15px 0',
      },

      [`&.${tableCellClasses.head}`]: {
        fontSize: '14px',
        color: (theme as Theme).palette.text.secondary,

        borderBottom: `1px solid ${(theme as Theme).palette.whiteOpacity![1]}`,
      },

      [`&.${tableCellClasses.body}`]: {
        fontSize: '16px',
        borderBottom: 'none',

        '&:first-of-type': {
          color: (theme as Theme).palette.primary.main,
        },
      },

      [(theme as Theme).breakpoints.down('sm')]: {
        padding: '9px 0',

        '&:first-of-type': {
          padding: '9px 0 9px 12px',
        },

        '&:last-of-type': {
          padding: '9px 12px 9px 0',
        },

        [`&.${tableCellClasses.head}`]: {
          fontSize: '11px',
        },

        [`&.${tableCellClasses.body}`]: {
          fontSize: '13px',
        },
      },
    }),
  },
}
