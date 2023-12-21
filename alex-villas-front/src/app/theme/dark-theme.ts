import { createTheme } from '@mui/material/styles'

import { baseTheme } from './base-theme'
import { darkColors } from './colors/dark-colors'

export const darkTheme = createTheme({
  palette: {
    ...darkColors,
  },
  ...baseTheme,
})
