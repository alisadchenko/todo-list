import { combine, createEvent, createStore, sample } from 'effector'
import { createGate } from 'effector-react'
import { spread } from 'patronum'

import {
  $selectedStaking,
  $selectedStakingIndex,
  $totalStakings,
  $userStakings,
  stakingsRequested,
} from '@/entities/stakings'

export const stakingsSelectorGate = createGate()

export const selectedStakingChanged = createEvent<number>()
export const totalStakingsSelected = createEvent()

export const $showTotalStakings = createStore(false)
export const $selectedItemName = combine(
  $showTotalStakings,
  $selectedStakingIndex,
  $totalStakings,
  (showTotal, selectedIndex, totalStakings) => {
    if (totalStakings === 0) {
      return 'No stakings'
    }

    if (showTotal) {
      return 'Total'
    }

    return `Staking #${selectedIndex + 1}`
  },
)

sample({
  clock: stakingsSelectorGate.open,
  target: stakingsRequested,
})

sample({
  clock: selectedStakingChanged,
  source: { stakings: $userStakings },
  fn: ({ stakings }, index) => ({ staking: stakings[index], index, total: false }),
  target: spread({
    targets: {
      staking: $selectedStaking,
      index: $selectedStakingIndex,
      total: $showTotalStakings,
    },
  }),
})

sample({
  clock: totalStakingsSelected,
  fn: () => true,
  target: $showTotalStakings,
})
