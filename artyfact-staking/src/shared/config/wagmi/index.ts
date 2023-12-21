import { publicProvider } from '@wagmi/core/providers/public'
import { getDefaultConfig } from 'connectkit'
import { configureChains, createConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: 'Artyfact Staking',
    chains,
    publicClient,
    webSocketPublicClient,
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID!,
    alchemyId: '',
  }),
)
