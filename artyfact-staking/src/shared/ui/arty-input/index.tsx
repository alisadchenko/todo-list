import { Input, Stack, Typography } from '@mui/material'
import { ChangeEvent, ReactNode } from 'react'
import { NumericFormat } from 'react-number-format'

import { NetworkIcon } from '@/shared/icons'

import * as Styled from './style'

type Props = {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  readonly?: boolean
  balance: ReactNode
}

export const ArtyInput = ({ value, onChange, balance, readonly = false }: Props) => {
  return (
    <Styled.InputWrapper direction="row" alignItems="center">
      <Stack direction="row" spacing="12px">
        <Styled.LogoIconWrapper>
          <Styled.LogoIcon />

          <Styled.NetworkIconWrapper>
            <NetworkIcon />
          </Styled.NetworkIconWrapper>
        </Styled.LogoIconWrapper>

        <NumericFormat
          readOnly={readonly}
          customInput={Input}
          value={value}
          onChange={onChange}
          placeholder="0.00"
        />
      </Stack>

      <Styled.BalanceWrapper spacing="8px">
        <Typography textAlign="end" fontSize={{ sm: '18px', xs: '16px' }}>
          $ARTY
        </Typography>

        {balance}
      </Styled.BalanceWrapper>
    </Styled.InputWrapper>
  )
}
