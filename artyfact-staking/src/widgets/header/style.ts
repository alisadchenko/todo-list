import { Box, styled } from '@mui/material'

export const Logo = styled(Box)(({ theme }) => ({
  width: '209px',
  height: '38px',

  background: `url("/assets/images/logo.png") no-repeat`,
  backgroundSize: 'contain',

  [theme.breakpoints.down('sm')]: {
    width: '143px',
    height: '26px',
  },
}))
