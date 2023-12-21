import { Box, Stack, styled } from '@mui/material'

export const ComplexDetailsBlock = styled(Stack)(({ theme }) => ({
  height: '38px',

  padding: '0 20px',

  borderRadius: '28px',

  background: theme.palette.background.surfaceHigh,
}))

export const InfrastructureBlock = styled(Stack)(({ theme }) => ({
  flex: '25%',

  maxWidth: '298px',
  height: '256px',

  padding: '22px',
  marginBottom: '24px',

  borderRadius: '36px',

  background: theme.palette.background.surfaceLow,

  '&:nth-last-of-type(-n+3)': {
    marginBottom: '0',
  },
}))

export const InfrastructureBlockImg = styled(Box)<{ img: string; width: string; height: string }>(
  ({ img, width, height }) => ({
    width,
    height,

    background: `url("/assets/images/${img}.png") no-repeat`,
  }),
)
