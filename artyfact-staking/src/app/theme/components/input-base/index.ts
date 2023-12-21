import { Components } from '@mui/material/styles'

export const MuiInputBase: Components['MuiInputBase'] = {
  styleOverrides: {
    root: {
      fontSize: '22px',
      lineHeight: '140%',

      '&::before, &::after': {
        display: 'none',
      },
    },

    input: {
      minWidth: 'unset',

      padding: '0',
    },
  },
}
