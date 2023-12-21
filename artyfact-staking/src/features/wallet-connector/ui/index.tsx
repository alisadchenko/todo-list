import { Button } from '@mui/material'
import { ConnectKitButton } from 'connectkit'

import { ChevronDownIcon, MetamaskIcon } from '@/shared/icons'
import { sliceAddress } from '@/shared/utils'

export const WalletConnector = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, address, show }) => (
        <Button
          variant="contained"
          size="medium"
          onClick={show}
          startIcon={<MetamaskIcon />}
          endIcon={<ChevronDownIcon />}
        >
          {isConnected ? sliceAddress(address) : 'Connect Wallet'}
        </Button>
      )}
    </ConnectKitButton.Custom>
  )
}
