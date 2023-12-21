import { Box, Stack, styled } from '@mui/material'

export const InputWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',

  height: '74px',

  padding: '0 90px 0 15px',

  borderRadius: '12px',
  border: '1px solid transparent',

  background: theme.palette.whiteOpacity![3],

  transition: 'border 0.2s ease-out',

  '&:focus-within': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}))

export const LogoIconWrapper = styled(Box)(() => ({
  position: 'relative',

  width: '37px',
  height: '34px',
}))

export const LogoIcon = styled(Box)(() => ({
  width: '37px',
  height: '34px',

  background: `url("/assets/images/logo-icon.png") no-repeat`,
  backgroundSize: 'contain',
}))

export const NetworkIconWrapper = styled(Box)(() => ({
  position: 'absolute',
  left: '-8px',
  bottom: '-14px',
}))

export const BalanceWrapper = styled(Stack)(() => ({
  position: 'absolute',
  right: '16px',
}))
