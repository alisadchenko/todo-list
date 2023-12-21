import { combine, sample } from 'effector'
import { createGate } from 'effector-react'

import {
  $earlyPenalty,
  $oneYearBonus,
  $threeYearsBonus,
  $twoYearsBonus,
  getStakingConditionsFx,
} from '@/entities/stakings'

export const stakingConditionsGate = createGate()

export const $stakingConditionsData = combine(
  $earlyPenalty,
  $oneYearBonus,
  $twoYearsBonus,
  $threeYearsBonus,
  (earlyPenalty, oneYearBonus, twoYearBonus, threeYearBonus) => [
    {
      period: 'Less than a year',
      profit: '0%',
      apr: '0%',
      withdrawalFee: `${earlyPenalty}%`,
    },
    {
      period: '1 year',
      profit: `${oneYearBonus}%`,
      apr: '50%',
      withdrawalFee: '0%',
    },
    {
      period: '2 years',
      profit: `${twoYearBonus}%`,
      apr: '100%',
      withdrawalFee: '0%',
    },
    {
      period: '3 years',
      profit: `${threeYearBonus}%`,
      apr: '200%',
      withdrawalFee: '0%',
    },
  ],
)

sample({
  clock: stakingConditionsGate.open,
  target: getStakingConditionsFx,
})
