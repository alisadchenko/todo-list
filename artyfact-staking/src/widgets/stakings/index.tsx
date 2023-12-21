import { Box, Paper, Stack, Tooltip, Typography } from '@mui/material'
import { useUnit } from 'effector-react'
import { useMemo } from 'react'

import { $earlyPenalty, $totalStakings } from '@/entities/stakings'
import { StakingsSelector } from '@/features/stakings-selector'
import { $showTotalStakings } from '@/features/stakings-selector/model'
import { AlertIcon, InfoIcon } from '@/shared/icons'

import * as Styled from './style'
import { $amountToDisplay, $rewardsTitle, $stakingFrom } from './model'

export const Stakings = () => {
  const [totalStakings, stakedAmount, stakingFrom, rewardsTitle, earlyPenalty, showTotal] = useUnit(
    [
      $totalStakings,
      $amountToDisplay,
      $stakingFrom,
      $rewardsTitle,
      $earlyPenalty,
      $showTotalStakings,
    ],
  )

  const renderStakingDate = useMemo(() => {
    if (totalStakings === 0) {
      return <Typography variant="subtitle2">—</Typography>
    }

    if (showTotal) {
      return (
        <Typography fontSize={{ sm: '14px', xs: '13px' }} color="text.secondary">
          {totalStakings} Stakings
        </Typography>
      )
    }

    return (
      <Stack alignItems="flex-end">
        <Stack direction="row" spacing="4px">
          <Typography fontSize={{ sm: '14px', xs: '13px' }}>Less than 1 year</Typography>

          <Tooltip
            title={
              <>
                <Typography component="span" fontSize={{ sm: '14px', xs: '13px' }}>
                  We remind you that in case of unstaking tokens, the
                </Typography>
                <Typography
                  component="span"
                  fontSize={{ sm: '14px', xs: '13px' }}
                  color="text.error"
                  m="0 0 0 4px"
                >
                  commission will be {earlyPenalty}%
                </Typography>
              </>
            }
            placement="top"
          >
            <Box>
              <AlertIcon />
            </Box>
          </Tooltip>
        </Stack>

        <Typography fontSize={{ sm: '12px', xs: '11px' }} color="text.tertiary">
          from {stakingFrom}
        </Typography>
      </Stack>
    )
  }, [earlyPenalty, showTotal, stakingFrom, totalStakings])

  return (
    <Stack spacing="16px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing="6px">
          <Typography variant="subtitle2">My Stakings</Typography>

          <Typography variant="subtitle2" color="text.tertiary">
            {totalStakings}
          </Typography>
        </Stack>

        <StakingsSelector />
      </Stack>

      <Paper
        component={Stack}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p="16px"
      >
        <Stack direction="row" alignItems="center" spacing="16px">
          <Styled.LogoIcon />

          <Stack>
            <Stack direction="row" alignItems="center" spacing="8px">
              <Typography variant="subtitle2">{totalStakings > 0 ? stakedAmount : '—'}</Typography>

              <InfoIcon />
            </Stack>

            <Typography fontSize={{ sm: '12px', xs: '11px' }} color="text.secondary">
              Staked
            </Typography>
          </Stack>
        </Stack>

        {renderStakingDate}
      </Paper>
      <Paper
        component={Stack}
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="40px"
        variant="light"
      >
        <Typography component="span" fontSize={{ sm: '14px', xs: '12px' }}>
          {rewardsTitle}
        </Typography>
        <Typography
          component="span"
          fontSize={{ sm: '14px', xs: '12px' }}
          color="primary.main"
          m="0 0 0 4px"
        >
          0 $ARTY
        </Typography>
      </Paper>
    </Stack>
  )
}
