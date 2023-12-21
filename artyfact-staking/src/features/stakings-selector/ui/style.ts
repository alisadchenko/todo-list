import { Paper, styled } from '@mui/material'

export const Options = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',

  marginTop: '10px',

  background: theme.palette.background.secondary,
}))
