import { Button, styled } from '@mui/material'

export const WalletButton = styled(Button)(({ theme }) => ({
  alignItems: 'center',

  height: '40px',

  padding: '0 12px',

  borderRadius: '30px',

  color: theme.palette.text.primary,
  fontSize: '14px',

  background: theme.palette.background.surfaceHighest,
}))
