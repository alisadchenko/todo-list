import { Stack, Typography } from '@mui/material'
import { useUnit } from 'effector-react'

import { $documentsRef, $financialsRef } from '@/src/features/navigation/model'
import { DownloadIcon, InfoIcon, LinkIcon } from '@/src/shared/icons'

import * as Styled from './style'

const FINANCIALS_DATA = [
  {
    title: 'Total Investment Value',
    value: '$220,000',
    icon: false,
    bold: true,
  },
  {
    title: 'Underlying Asset Price',
    value: '$213,100',
    icon: false,
    bold: false,
  },
  {
    title: 'Legal fees (1.23%)',
    value: '$2,700',
    icon: false,
    bold: false,
  },
  {
    title: 'Total Returns (IRR)',
    value: '31,3%',
    icon: true,
    bold: true,
  },
  {
    title: 'Projected Apprecation',
    value: '15%',
    icon: false,
    bold: false,
  },
  {
    title: 'Annual Percentage Rate (Rent)',
    value: '16,3%',
    icon: true,
    bold: false,
  },
  {
    title: 'Annual Gross Rents',
    value: '$47,880',
    icon: false,
    bold: true,
  },
  {
    title: 'Property Management',
    value: '$7,182',
    icon: false,
    bold: false,
  },
  {
    title: 'Utilities',
    value: '$3,595.79',
    icon: false,
    bold: false,
  },
  {
    title: 'Maintenance Reserve',
    value: '$1,197',
    icon: false,
    bold: false,
  },
  {
    title: 'Annual Cash Flow',
    value: '$35,905',
    icon: false,
    bold: false,
  },
  {
    title: 'Monthly Cash Flow',
    value: '$2,992',
    icon: false,
    bold: false,
  },
]

export const DocumentsBlock = () => {
  const [documentsRef, financialsRef] = useUnit([$documentsRef, $financialsRef])

  return (
    <Stack spacing="60px">
      <Stack spacing="30px" id="documents" ref={documentsRef}>
        <Typography variant="h3">Documents</Typography>

        <Stack direction="row" spacing="23px" justifyContent="space-between">
          <Styled.DocumentBlock variant="outlined" endIcon={<LinkIcon />}>
            DAO LLS Reference
          </Styled.DocumentBlock>
          <Styled.DocumentBlock variant="outlined" endIcon={<LinkIcon />}>
            Token
          </Styled.DocumentBlock>
          <Styled.DocumentBlock variant="outlined" endIcon={<DownloadIcon />}>
            Bali Asset 4 DAO LLC
          </Styled.DocumentBlock>
        </Stack>
      </Stack>

      <Stack spacing="30px" id="financials" ref={financialsRef}>
        <Typography variant="h3">Financials</Typography>

        <Stack spacing="12px">
          <Styled.FinancialsBlock spacing="24px">
            {FINANCIALS_DATA.map(
              (item, index) =>
                index <= 2 && (
                  <Stack
                    key={item.title}
                    direction="row"
                    spacing="12px"
                    justifyContent="space-between"
                  >
                    <Typography fontWeight={item.bold ? 700 : 500}>{item.title}</Typography>
                    <Typography fontWeight={500}>{item.value}</Typography>
                  </Stack>
                ),
            )}
          </Styled.FinancialsBlock>

          <Styled.FinancialsBlock spacing="24px">
            {FINANCIALS_DATA.map(
              (item, index) =>
                index > 2 &&
                index <= 5 && (
                  <Stack
                    key={item.title}
                    direction="row"
                    spacing="12px"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" spacing="8px" alignItems="center">
                      <Typography fontWeight={item.bold ? 700 : 500}>{item.title}</Typography>
                      {item.icon && (
                        <Styled.InfoIconBlock>
                          <InfoIcon />
                        </Styled.InfoIconBlock>
                      )}
                    </Stack>
                    <Typography fontWeight={500}>{item.value}</Typography>
                  </Stack>
                ),
            )}
          </Styled.FinancialsBlock>

          <Styled.FinancialsBlock spacing="24px">
            {FINANCIALS_DATA.map(
              (item, index) =>
                index > 5 && (
                  <Stack
                    key={item.title}
                    direction="row"
                    spacing="12px"
                    justifyContent="space-between"
                  >
                    <Typography fontWeight={item.bold ? 700 : 500}>{item.title}</Typography>
                    <Typography fontWeight={500}>{item.value}</Typography>
                  </Stack>
                ),
            )}
          </Styled.FinancialsBlock>

          <Typography fontSize="14px" color="text.secondary" mt="24px !important">
            The current calculated values are approximate, they may vary up or down, depending on
            the rental of each individual property.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
