import { Stack, styled, Typography } from '@mui/material'

export const LinkGeneratorContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: '516px',
  minWidth: '0',

  padding: '10px 6px 10px 24px',

  borderRadius: '20px',
  border: `1px solid ${theme.palette.primary.main}`,

  background: theme.palette.background.surfaceLow,
}))

export const ReferralLink = styled(Typography)(() => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '66%',
  minWidth: '0',
}))
