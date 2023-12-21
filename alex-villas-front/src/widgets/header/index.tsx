import { HeaderNavigation } from '@/src/features/navigation'
import { WalletConnector } from '@/src/features/wallet-connector'

import * as Styled from './style'

export const Header = () => {
  return (
    <Styled.HeaderContainer direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Logo />

      <HeaderNavigation />

      <WalletConnector />
    </Styled.HeaderContainer>
  )
}
