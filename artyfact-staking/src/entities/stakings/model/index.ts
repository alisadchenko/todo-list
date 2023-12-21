import { getAccount, readContract } from '@wagmi/core'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { spread } from 'patronum'
import { Abi, formatUnits } from 'viem'
import { readContracts } from 'wagmi'

import { StakingContractAbi } from '@/shared/abi/StakingContractAbi'

import { UserStaking } from '../types'

export const getStakingConditionsFx = createEffect(async () => {
  const contract = {
    address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
    abi: StakingContractAbi as Abi,
  }

  const data = await readContracts({
    contracts: [
      {
        ...contract,
        functionName: 'EARLY_PENALTY',
      },
      {
        ...contract,
        functionName: 'ONE_YEAR_BONUS',
      },
      {
        ...contract,
        functionName: 'TWO_YEAR_BONUS',
      },
      {
        ...contract,
        functionName: 'THREE_YEAR_BONUS',
      },
    ],
  })

  return {
    earlyPenalty: formatUnits(data[0].result as bigint, 0),
    oneYearBonus: formatUnits(data[1].result as bigint, 0),
    twoYearBonus: formatUnits(data[2].result as bigint, 0),
    threeYearBonus: formatUnits(data[3].result as bigint, 0),
  }
})

const getUserStakingsFx = createEffect(async () => {
  const { address } = getAccount()

  if (address) {
    const data = await readContract({
      address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
      abi: StakingContractAbi as Abi,
      functionName: 'getUserStakes',
      args: [address],
    })

    return data as UserStaking[]
  }

  return []
})

export const stakingsRequested = createEvent()
export const stakingsCleared = createEvent()

export const $oneYearBonus = createStore('0')
export const $twoYearsBonus = createStore('0')
export const $threeYearsBonus = createStore('0')
export const $earlyPenalty = createStore('0')

export const $userStakings = createStore<UserStaking[]>([])
export const $totalStakings = $userStakings.map((stakings) => stakings.length)
export const $selectedStaking = createStore<UserStaking | null>(null)
export const $selectedStakingIndex = createStore(0)

sample({
  clock: stakingsRequested,
  target: getUserStakingsFx,
})

sample({
  clock: getUserStakingsFx.done,
  fn: ({ result }) => result,
  target: $userStakings,
})

sample({
  clock: stakingsCleared,
  fn: () => ({ stakings: [], selectedStaking: null, index: 0 }),
  target: spread({
    targets: {
      stakings: $userStakings,
      selectedStaking: $selectedStaking,
      index: $selectedStakingIndex,
    },
  }),
})

sample({
  clock: $userStakings,
  filter: (stakings) => stakings.length > 0,
  fn: (stakings) => ({ staking: stakings[0], index: 0 }),
  target: spread({
    targets: {
      staking: $selectedStaking,
      index: $selectedStakingIndex,
    },
  }),
})

sample({
  clock: $userStakings,
  filter: (stakings) => stakings.length === 0,
  fn: () => ({ staking: null, index: 0 }),
  target: spread({
    targets: {
      staking: $selectedStaking,
      index: $selectedStakingIndex,
    },
  }),
})

sample({
  clock: getStakingConditionsFx.done,
  fn: ({ result }) => ({
    earlyPenalty: result.earlyPenalty,
    oneYearBonus: result.oneYearBonus,
    twoYearBonus: result.twoYearBonus,
    threeYearBonus: result.threeYearBonus,
  }),
  target: spread({
    targets: {
      earlyPenalty: $earlyPenalty,
      oneYearBonus: $oneYearBonus,
      twoYearBonus: $twoYearsBonus,
      threeYearBonus: $threeYearsBonus,
    },
  }),
})
