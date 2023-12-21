import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useUnit } from 'effector-react'

import { $apartmentRef } from '@/src/features/navigation/model'
import {
  BathIcon,
  BedIcon,
  InfoIcon,
  LocationIcon,
  PoolIcon,
  RelaxationAreaIcon,
  SilverwareIcon,
  SittingAreaIcon,
  SmartSystemIcon,
  StairsIcon,
} from '@/src/shared/icons'
import { AlexVillasCarousel } from '@/src/shared/ui'

import * as Styled from './style'

const CAROUSEL_SLIDES = [
  'penthouse-slide-1',
  'penthouse-slide-2',
  'penthouse-slide-3',
  'penthouse-slide-4',
  'penthouse-slide-5',
]

const IN_APARTMENT_ITEMS = [
  {
    key: 'block-1',
    icon: <StairsIcon />,
    text: (
      <Typography color="text.tertiary" textAlign="center">
        3<sup>rd</sup> Floor + rooftop (198m<sup>2</sup>)
      </Typography>
    ),
  },
  {
    key: 'block-2',
    icon: <BedIcon />,
    text: (
      <Typography color="text.tertiary" maxWidth="125px" textAlign="center">
        2 Bedrooms with king size beds
      </Typography>
    ),
  },
  {
    key: 'block-3',
    icon: <SilverwareIcon />,
    text: (
      <Typography color="text.tertiary" maxWidth="165px" textAlign="center">
        Kitchen and Dining area for 4 people
      </Typography>
    ),
  },
  {
    key: 'block-4',
    icon: <BathIcon />,
    text: (
      <Typography color="text.tertiary" maxWidth="143px" textAlign="center">
        2 Big Bathrooms and guest toilet
      </Typography>
    ),
  },
  {
    key: 'block-5',
    icon: <PoolIcon />,
    text: (
      <Typography color="text.tertiary" textAlign="center">
        Swimming Pool and Jacuzzi on the rooftop
      </Typography>
    ),
  },
  {
    key: 'block-6',
    icon: <SmartSystemIcon />,
    text: (
      <Typography color="text.tertiary" maxWidth="118px" textAlign="center">
        Smart Home System
      </Typography>
    ),
  },
  {
    key: 'block-7',
    icon: <RelaxationAreaIcon />,
    text: (
      <Typography color="text.tertiary" textAlign="center">
        Relaxation Area with Projector on the roof
      </Typography>
    ),
  },
  {
    key: 'block-8',
    icon: <SittingAreaIcon />,
    text: (
      <Typography color="text.tertiary" maxWidth="150px" textAlign="center">
        2 Sitting Areas on the Terrace
      </Typography>
    ),
  },
]

export const PenthouseBlock = () => {
  const theme = useTheme()

  const [ref] = useUnit([$apartmentRef])

  return (
    <Stack spacing="60px" id="apartment" ref={ref}>
      <Stack spacing="40px">
        <Stack spacing="4px">
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing="8px" alignItems="center">
              <Typography variant="h2">
                2BR Penthouse 198 m<sup>2</sup>
              </Typography>
              <Typography variant="h2" color="text.surfaceVariant">
                $BALI
              </Typography>
            </Stack>

            <Stack direction="row" spacing="14px" alignItems="center">
              <Box style={{ display: 'flex', color: theme.palette.text.surfaceVariant }}>
                <InfoIcon />
              </Box>
              <Stack direction="row" spacing="8px">
                <Typography fontSize="24px" color="primary">
                  ROI
                </Typography>
                <Typography fontSize="24px">UP TO 35% in $</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" spacing="8px" style={{ color: theme.palette.text.tertiary }}>
            <LocationIcon />
            <Typography>Complex 7</Typography>
          </Stack>
        </Stack>

        <AlexVillasCarousel items={CAROUSEL_SLIDES} />
      </Stack>

      <Stack spacing="40px">
        <Stack spacing="20px">
          <Typography variant="h3">Interior</Typography>
          <Typography fontSize="18px" color="text.secondary">
            The main style direction of ECO-TECH: a combination of eco-friendly systems, rich fauna
            and high technologies.
          </Typography>
          <Typography fontSize="18px" color="text.secondary">
            Minimalistic interiors and ergonomic layouts, high-quality materials and excellent
            lighting solutions - everything for a comfortable stay of our guests.
          </Typography>
        </Stack>

        <Styled.InteriorBlockImg />
      </Stack>

      <Stack spacing="40px">
        <Typography variant="h4">In Apartment</Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
          {IN_APARTMENT_ITEMS.map((item) => (
            <Styled.InApartmentItem
              key={item.key}
              spacing="12px"
              justifyContent="center"
              alignItems="center"
            >
              {item.icon}
              {item.text}
            </Styled.InApartmentItem>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
