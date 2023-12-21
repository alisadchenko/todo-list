import { Box, Stack, styled } from '@mui/material'

export const InteriorBlockImg = styled(Box)(({ theme }) => ({
  width: '947px',
  height: '530px',

  background: 'url("/assets/images/interior-block-img.png") no-repeat',
  backgroundSize: 'cover',

  borderRadius: '40px',
  border: `1px solid ${theme.palette.background.default}`,
}))

export const InApartmentItem = styled(Stack)(({ theme }) => ({
  flex: '25%',

  maxWidth: '217px',
  height: '180px',

  padding: '22px',
  marginBottom: '24px',

  borderRadius: '36px',

  background: theme.palette.background.surfaceLow,

  '&:nth-last-of-type(-n+3)': {
    marginBottom: '0',
  },
}))
