import '@fontsource/roboto'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ConnectKitProvider } from 'connectkit'
import { PropsWithChildren } from 'react'
import { WagmiConfig } from 'wagmi'

import { wagmiConfig } from '@/shared/config/wagmi'

import { darkTheme } from '../theme'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider theme="midnight">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline enableColorScheme={true} />
          {children}
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
