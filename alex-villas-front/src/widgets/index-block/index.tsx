import { Box, Stack, Typography } from '@mui/material'
import { useUnit } from 'effector-react'

import { $complexRef, $homeRef } from '@/src/features/navigation/model'
import { ScrollDownIcon, StatusIndicatorIcon } from '@/src/shared/icons'

import * as Styled from './style'

export const IndexBlock = () => {
  const [homeRef, complexRef] = useUnit([$homeRef, $complexRef])

  const handleScrollDown = () => {
    if (complexRef.current) {
      window.scroll({
        top: complexRef.current.offsetTop - 60,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Stack spacing="18px" id="home" ref={homeRef}>
      <Styled.IndexImg />
      <Box>
        <Typography component="span" variant="h1" color="text.primaryDim">
          Become an
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1">
          official co-owner of a
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1" color="primary.main">
          Bali
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1">
          penthouse
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1" color="text.primaryDim">
          even with a small investment, and
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1">
          start earning
        </Typography>
        <Typography component="span" variant="h1">
          {' '}
        </Typography>
        <Typography component="span" variant="h1" color="text.primaryDim">
          rental income
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Styled.ScrollDownBlock
          direction="row"
          alignItems="center"
          spacing="12px"
          onClick={handleScrollDown}
        >
          <ScrollDownIcon />
          <Typography fontSize="18px">Scroll down for Details</Typography>
        </Styled.ScrollDownBlock>

        <Styled.SalesInfoBlock spacing="6px" direction="row" alignItems="center">
          <StatusIndicatorIcon />
          <Box>
            <Typography component="span" fontWeight={500}>
              Sales Start
            </Typography>{' '}
            <Typography component="span" color="primary.main" fontWeight={500}>
              Complex 7
            </Typography>
          </Box>
        </Styled.SalesInfoBlock>
      </Stack>
    </Stack>
  )
}
