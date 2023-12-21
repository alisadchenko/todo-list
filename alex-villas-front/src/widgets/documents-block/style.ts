import { Box, Button, Stack, styled } from '@mui/material'

export const DocumentBlock = styled(Button)(() => ({
  justifyContent: 'space-between',
  flex: '30%',

  maxWidth: '295px',
}))

export const FinancialsBlock = styled(Stack)(({ theme }) => ({
  padding: '24px 16px',

  borderRadius: '17px',

  background: theme.palette.background.surfaceLow,
}))

export const InfoIconBlock = styled(Box)(({ theme }) => ({
  cursor: 'pointer',

  display: 'flex',

  color: theme.palette.text.surfaceVariant,

  svg: {
    width: '16px',
    height: '16px',
  },
}))
