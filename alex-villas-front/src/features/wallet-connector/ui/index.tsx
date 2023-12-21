import { ConnectKitButton } from 'connectkit'

import { ChevronDownIcon, MetamaskIcon } from '@/src/shared/icons'
import { sliceAddress } from '@/src/shared/utils'

import { WalletButton } from './style'

export const WalletConnector = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, address, show }) => (
        <WalletButton
          startIcon={<MetamaskIcon />}
          endIcon={<ChevronDownIcon />}
          variant="contained"
          onClick={show}
        >
          {isConnected ? sliceAddress(address) : 'Connect Wallet'}
        </WalletButton>
      )}
    </ConnectKitButton.Custom>
  )
}
