import { accordionClasses, accordionSummaryClasses, Components, Theme } from '@mui/material'

export const MuiAccordion: Components['MuiAccordion'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: '20px 0 0',

      borderRadius: '20px !important',

      background: (theme as Theme).palette.background.surfaceLow,

      transition: 'all 0.2s ease-out',

      '&:first-of-type': {
        margin: 0,
      },

      '&::before': {
        display: 'none',
      },

      [`&.${accordionClasses.expanded}`]: {
        margin: '20px 0 0',

        background: (theme as Theme).palette.background.surfaceHigh,
      },
    }),
  },
}

export const MuiAccordionSummary: Components['MuiAccordionSummary'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '0 16px 0 65px',

      position: 'relative',

      '&::before': {
        content: '"+"',

        position: 'absolute',

        display: 'block',

        left: '18px',
        top: '-6px',

        fontSize: '53px',
        fontWeight: 300,
        color: (theme as Theme).palette.primary.main,
      },

      [`&.${accordionSummaryClasses.expanded}`]: {
        '&::before': {
          content: '"–"',
        },
      },
    }),

    content: {
      margin: '20px 0',
    },
  },
}

export const MuiAccordionDetails: Components['MuiAccordionDetails'] = {
  styleOverrides: {
    root: {
      padding: '2px 16px 34px 65px',
    },
  },
}
