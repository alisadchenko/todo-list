import { Stack } from '@mui/material'

import { WalletConnector } from '@/features/wallet-connector'

import * as Styled from './style'

export const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      height={{ sm: '72px', xs: '54px' }}
      alignItems="center"
    >
      <Styled.Logo />

      <WalletConnector />
    </Stack>
  )
}
