import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { combine } from 'effector'
import { formatUnits } from 'viem'

import {
  $selectedStaking,
  $selectedStakingIndex,
  $totalStakings,
  $userStakings,
} from '@/entities/stakings'
import { $tokenDecimals } from '@/entities/token'
import { $showTotalStakings } from '@/features/stakings-selector/model'
import { formatNumber } from '@/shared/utils'

export const $stakedAmount = combine($selectedStaking, $tokenDecimals, (staking, decimals) =>
  staking ? formatNumber(formatUnits(staking.amount, decimals)) : '0',
)

export const $totalStaked = combine($userStakings, $tokenDecimals, (stakings, decimals) => {
  let total = new BigNumber(0)

  for (const staking of stakings) {
    total = total.plus(formatUnits(staking.amount, decimals))
  }

  return total.toString()
})

export const $amountToDisplay = combine(
  $showTotalStakings,
  $stakedAmount,
  $totalStaked,
  (showTotal, stakedAmount, totalStaked) => (showTotal ? totalStaked : stakedAmount),
)

export const $stakingFrom = $selectedStaking.map(
  () => dayjs(new Date()).format('DD/MM/YYYY'),
  /*staking
    ? dayjs(Number(formatUnits(staking.startTime, 0))).format('DD/MM/YYYY')
    : dayjs(new Date()).format('DD/MM/YYYY'),*/
)

export const $rewardsTitle = combine(
  $showTotalStakings,
  $selectedStakingIndex,
  $totalStakings,
  (showTotal, selectedStakingIndex, totalStakings) => {
    if (totalStakings === 0) {
      return 'My rewards from Stakings:'
    }

    if (showTotal) {
      return 'Total rewards:'
    }

    return `My rewards from Staking #${selectedStakingIndex + 1}:`
  },
)
