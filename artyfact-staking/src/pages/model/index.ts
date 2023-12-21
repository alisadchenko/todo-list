import { fetchToken, readContract } from '@wagmi/core'
import { createEffect, createStore, sample } from 'effector'
import { createGate } from 'effector-react'
import { spread } from 'patronum'
import { Abi, formatUnits } from 'viem'

import { $tokenAddress, $tokenDecimals, $tokenSymbol } from '@/entities/token'
import { StakingContractAbi } from '@/shared/abi/StakingContractAbi'

const getTokenDataFx = createEffect(async () => {
  const data = await readContract({
    address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
    abi: StakingContractAbi as Abi,
    functionName: 'artyToken',
  })

  const { decimals, symbol, address } = await fetchToken({ address: data as `0x${string}` })

  const stakedData = await readContract({
    address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
    abi: StakingContractAbi as Abi,
    functionName: 'totalStaked',
  })

  return { decimals, symbol, address, tvl: formatUnits(stakedData as bigint, decimals) }
})

export const pageGate = createGate()

export const $tvl = createStore('0')

sample({
  clock: pageGate.open,
  target: getTokenDataFx,
})

sample({
  clock: getTokenDataFx.done,
  fn: ({ result }) => ({
    address: result.address,
    decimals: result.decimals,
    symbol: result.symbol,
    tvl: result.tvl,
  }),
  target: spread({
    targets: {
      address: $tokenAddress,
      decimals: $tokenDecimals,
      symbol: $tokenSymbol,
      tvl: $tvl,
    },
  }),
})
