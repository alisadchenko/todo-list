import { Box, Stack, styled } from '@mui/material'

export const IndexImg = styled(Box)(() => ({
  width: '942px',
  height: '499px',

  background: 'url("/assets/images/index-block-img.png") no-repeat',
}))

export const ScrollDownBlock = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',

  color: theme.palette.text.primaryDim,

  transition: 'color 0.2s ease-out',

  '&:hover': {
    color: theme.palette.text.primary,
  },
}))

export const SalesInfoBlock = styled(Stack)(({ theme }) => ({
  height: '52px',

  padding: '0 18px',

  borderRadius: '24px',

  background: theme.palette.background.surfaceHigh,

  backdropFilter: 'blur(7px)',
}))
