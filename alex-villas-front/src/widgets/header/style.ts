import { Box, Stack, styled } from '@mui/material'

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  height: '107px',

  position: 'fixed',

  top: 0,
  left: 0,
  right: 0,

  padding: '40px 96px 0',

  background: theme.palette.background.default,

  zIndex: 111,
}))

export const Logo = styled(Box)(({ theme }) => ({
  width: '155px',
  height: '52px',

  background: `url("/assets/images/logo-${theme.palette.mode}.png") no-repeat`,
}))
