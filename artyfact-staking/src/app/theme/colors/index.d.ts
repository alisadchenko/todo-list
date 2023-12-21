import '@mui/material/styles'

declare module '@mui/material/styles' {
  export interface Palette {
    whiteOpacity?: string[]
    gradient?: stirng
  }

  export interface PaletteOptions {
    whiteOpacity?: string[]
    gradient?: stirng
  }

  export interface PaletteColor {
    error?: string
    inverse?: string
    secondary?: string
    tertiary?: string
    widgetBackground?: string
  }

  export interface TypeText {
    error?: string
    inverse?: string
    tertiary?: string
  }

  export interface TypeBackground {
    secondary?: string
    tertiary?: string
    widgetBackground?: string
  }
}

declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides {
    secondary: true
  }
}

declare module '@mui/material/Paper' {
  export interface PaperPropsVariantOverrides {
    light: true
  }
}
