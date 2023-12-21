import { Components } from '@mui/material/styles'

export const MuiBackdrop: Components['MuiBackdrop'] = {
  styleOverrides: {
    root: {
      backdropFilter: 'blur(3px)',

      zIndex: '999',
    },
  },
}
