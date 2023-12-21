import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useUnit } from 'effector-react'

import { $complexRef } from '@/src/features/navigation/model'
import { LocationIcon } from '@/src/shared/icons'
import { AlexVillasCarousel } from '@/src/shared/ui'

import * as Styled from './style'

const CAROUSEL_SLIDES = [
  'complex-slide-1',
  'complex-slide-2',
  'complex-slide-3',
  'complex-slide-4',
  'complex-slide-5',
]

const INFRASTRUCTURE_BLOCK_ITEMS = [
  {
    img: 'infrastructure-block-img-1',
    text: 'Jogging and bike paths, 500m long',
    width: '164px',
    height: '125px',
    textWidth: '160px',
  },
  {
    img: 'infrastructure-block-img-2',
    text: 'Green area with architectural portals and a river right on the territory of the complex',
    width: '165px',
    height: '114px',
    textWidth: 'unset',
  },
  {
    img: 'infrastructure-block-img-3',
    text: 'Coworking and studio for recording podcasts and songs',
    width: '184px',
    height: '121px',
    textWidth: '243px',
  },
  {
    img: 'infrastructure-block-img-4',
    text: 'Workout area and outdoor yoga area',
    width: '215px',
    height: '129px',
    textWidth: '171px',
  },
  {
    img: 'infrastructure-block-img-5',
    text: 'Spacious gym with modern equipment',
    width: '96px',
    height: '129px',
    textWidth: '188px',
  },
  {
    img: 'infrastructure-block-img-6',
    text: 'Private SPA area with sauna, Jacuzzi and massage service',
    width: '170px',
    height: '138px',
    textWidth: 'unset',
  },
  {
    img: 'infrastructure-block-img-7',
    text: 'Playground',
    width: '244px',
    height: '143px',
    textWidth: 'unset',
  },
  {
    img: 'infrastructure-block-img-8',
    text: 'Cozy restaurant and mini cinema',
    width: '222px',
    height: '119px',
    textWidth: 'unset',
  },
  {
    img: 'infrastructure-block-img-9',
    text: 'Huge swimming pool swimming pool with transitions of depths',
    width: '208px',
    height: '129px',
    textWidth: 'unset',
  },
]

export const ComplexBlock = () => {
  const theme = useTheme()

  const [ref] = useUnit([$complexRef])

  return (
    <Stack spacing="60px" id="complex-7" ref={ref}>
      <Stack spacing="40px">
        <Stack spacing="4px">
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing="8px" alignItems="center">
              <Typography variant="h2">Complex 7</Typography>
              <Typography variant="h4" fontSize="18px" color="text.primaryOpacity">
                from
              </Typography>
              <Typography variant="h4" fontSize="18px" color="primary">
                Alex Villas
              </Typography>
            </Stack>

            <Stack direction="row" spacing="16px" alignItems="center">
              <Styled.ComplexDetailsBlock direction="row" spacing="8px" alignItems="center">
                <Typography color="text.tertiary">Total Area:</Typography>
                <Typography color="primary">
                  8,980m<sup>2</sup>
                </Typography>
              </Styled.ComplexDetailsBlock>

              <Styled.ComplexDetailsBlock direction="row" spacing="8px" alignItems="center">
                <Typography color="text.tertiary">Completion Date:</Typography>
                <Typography color="primary">2025</Typography>
              </Styled.ComplexDetailsBlock>
            </Stack>
          </Stack>

          <Stack direction="row" spacing="8px" style={{ color: theme.palette.text.tertiary }}>
            <LocationIcon />
            <Typography>Indonesia, Bali, Changu</Typography>
          </Stack>
        </Stack>

        <AlexVillasCarousel items={CAROUSEL_SLIDES} />
      </Stack>

      <Box>
        <Typography variant="h2" component="span" color="text.primaryDim">
          A hotel-type apartment complex that
        </Typography>
        <Typography variant="h2" component="span">
          {' '}
        </Typography>
        <Typography variant="h2" component="span">
          has no analogues
        </Typography>
        <Typography variant="h2" component="span">
          {' '}
        </Typography>
        <Typography variant="h2" component="span" color="text.primaryDim">
          in the most popular area of Bali.
        </Typography>
      </Box>

      <Stack spacing="20px">
        <Typography variant="h3">Infrastructure</Typography>
        <Typography fontSize="18px" color="text.secondary">
          Complex 7 from Alex Villas in Bali is a unique complex of villas and apartments surrounded
          by picturesque rice terraces. Location — Changu district, the most developed and popular
          among tourists and expats. 5-10 minutes from the best beaches, surf spots and clubs. The
          complex is designed using bionic techniques characteristic of the eco-tech style. Unique
          conditions for living and recreation have been created here
        </Typography>
      </Stack>

      <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
        {INFRASTRUCTURE_BLOCK_ITEMS.map((item) => (
          <Styled.InfrastructureBlock
            key={item.img}
            spacing="16px"
            justifyContent="center"
            alignItems="center"
          >
            <Styled.InfrastructureBlockImg img={item.img} width={item.width} height={item.height} />
            <Typography color="text.tertiary" textAlign="center" maxWidth={item.textWidth}>
              {item.text}
            </Typography>
          </Styled.InfrastructureBlock>
        ))}
      </Stack>
    </Stack>
  )
}
