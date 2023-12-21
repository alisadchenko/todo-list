import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography, useMediaQuery
} from "@mui/material";
import { useGate, useUnit } from 'effector-react'

import { InfoIcon } from '@/shared/icons'

import { $stakingConditionsData, stakingConditionsGate } from './model'
import { Theme } from "@mui/material/styles";

export const StakingConditions = () => {
  const [stakingConditionsData] = useUnit([$stakingConditionsData])

  useGate(stakingConditionsGate)

  const isSmall = useMediaQuery((theme) => (theme as Theme).breakpoints.down('sm'))

  return (
    <Stack spacing="16px">
      <Typography variant="subtitle2">Staking Conditions</Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>
                <Stack direction="row" spacing="4px" alignItems="center">
                  <Typography fontSize={{ sm: '14px', xs: '11px' }} color="text.secondary">
                    APR
                  </Typography>

                  <InfoIcon />
                </Stack>
              </TableCell>
              <TableCell>{isSmall ? 'Fee' : 'Withdrawal Fee'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stakingConditionsData.map((row) => (
              <TableRow key={row.period}>
                <TableCell>{row.period}</TableCell>
                <TableCell>{row.profit}</TableCell>
                <TableCell>{row.apr}</TableCell>
                <TableCell>{row.withdrawalFee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}
