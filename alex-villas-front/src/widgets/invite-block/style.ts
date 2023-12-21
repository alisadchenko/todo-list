import { Stack, styled } from '@mui/material'

export const InstructionBlock = styled(Stack)(({ theme }) => ({
  flex: '30%',

  maxWidth: '300px',

  padding: '33px 23px',

  borderRadius: '36px',
  border: `1px solid ${theme.palette.border}`,

  background: theme.palette.background.surfaceLow,
}))

export const ReferralsInfoBlock = styled(Stack)(({ theme }) => ({
  height: '55px',

  borderRadius: '24px',

  background: theme.palette.background.surfaceHigh,

  backdropFilter: 'blur(17.34451675415039px)',
}))
