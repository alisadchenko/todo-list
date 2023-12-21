import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { bsc, fantom, mainnet, polygon } from 'wagmi/chains'

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: 'AlexVillas',
    chains: [
      mainnet,
      polygon,
      // optimism,
      // arbitrum,
      bsc,
      fantom,
    ],
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID!,
    alchemyId: '',
  }),
)
