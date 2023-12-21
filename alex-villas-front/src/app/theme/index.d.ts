import '@mui/material/styles'

declare module '@mui/material/styles' {
  export interface Palette {
    border?: string
    primaryOpacity?: string
    widgetDivider?: string
  }

  export interface PaletteOptions {
    border?: string
    primaryOpacity?: string
    widgetDivider?: string
  }

  export interface PaletteColor {
    mainOpacity?: string

    primaryDim?: string
    primaryOpacity?: string
    secondaryOpacity?: string
    surfaceVariant?: string
    tertiary?: string

    surfaceLow?: string
    surfaceHigh?: string
    surfaceHighest?: string
  }

  export interface TypeBackground {
    surfaceLow?: string
    surfaceHigh?: string
    surfaceHighest?: string
  }

  export interface TypeText {
    primaryDim: string
    primaryOpacity?: string
    secondaryOpacity?: string
    surfaceVariant?: string
    tertiary?: string
  }
}

declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides  {
    containedSecondary: true
    navigation: true
  }
}
