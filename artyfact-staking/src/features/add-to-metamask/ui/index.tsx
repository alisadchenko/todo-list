import { Button, useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useUnit } from 'effector-react/compat'
import { useAccount } from 'wagmi'

import { MetamaskIcon } from '@/shared/icons'

import { addedToMetamask } from '../model'

export const AddToMetamask = () => {
  const { address } = useAccount()

  const addToMetamask = useUnit(addedToMetamask)

  const isMobile = useMediaQuery((theme) => (theme as Theme).breakpoints.down('sm'))

  return (
    <Button variant="secondary" onClick={addToMetamask} disabled={!address}>
      <MetamaskIcon width={isMobile ? '17px' : '22px'} />
    </Button>
  )
}
