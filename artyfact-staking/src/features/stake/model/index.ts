import {
  getAccount,
  prepareWriteContract,
  readContract,
  waitForTransaction,
  writeContract,
} from '@wagmi/core'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'
import { createForm } from 'effector-forms'
import { createGate } from 'effector-react'
import { formatUnits, parseUnits } from 'viem'

import { stakingsRequested } from '@/entities/stakings'
import { $tokenAddress, $tokenDecimals } from '@/entities/token'
import { StakingContractAbi } from '@/shared/abi/StakingContractAbi'
import { TokenContractAbi } from '@/shared/abi/TokenContractAbi'
import { errorNotificationOpened, notificationOpened } from '@/shared/lib'

import { MAX_UINT256 } from '../constants'
import { checkAllowanceFxProps, StakeFxProps } from '../types'

const checkAllowanceFx = createEffect(async ({ tokenAddress, decimals }: checkAllowanceFxProps) => {
  const { address: owner } = getAccount()

  if (owner) {
    const data = await readContract({
      address: tokenAddress as `0x${string}`,
      abi: TokenContractAbi,
      functionName: 'allowance',
      args: [owner, import.meta.env.VITE_STAKING_CONTRACT],
    })

    return formatUnits(data as bigint, decimals)
  }

  return '0'
})

const approveArtyFx = createEffect(async (tokenAddress: string) => {
  const config = await prepareWriteContract({
    address: tokenAddress as `0x${string}`,
    abi: TokenContractAbi,
    functionName: 'approve',
    args: [import.meta.env.VITE_STAKING_CONTRACT, MAX_UINT256],
  })

  const { hash } = await writeContract(config)

  await waitForTransaction({ hash: hash as `0x${string}` })
})

const stakeFx = createEffect(async ({ amount, decimals }: StakeFxProps) => {
  const bigAmount = parseUnits(amount, decimals)

  const config = await prepareWriteContract({
    address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
    abi: StakingContractAbi,
    functionName: 'newStake',
    args: [bigAmount],
  })

  const { hash } = await writeContract(config)

  await waitForTransaction({ hash: hash as `0x${string}` })
})

export const stakeGate = createGate()

export const staked = createEvent()
export const approved = createEvent()

export const stakeForm = createForm({
  fields: {
    stake: {
      init: '',
    },
  },
})

const checkAllowanceRequested = createEvent()

export const $allowance = createStore('0')
export const $stakingLoading = combine(
  stakeFx.pending,
  checkAllowanceFx.pending,
  approveArtyFx.pending,
  (stakeLoading, allowanceLoading, approveLoading) =>
    stakeLoading || allowanceLoading || approveLoading,
)

sample({
  clock: stakeGate.open,
  target: checkAllowanceRequested,
})

sample({
  clock: [stakeForm.fields.stake.changed, checkAllowanceRequested, approveArtyFx.done],
  source: { tokenAddress: $tokenAddress, decimals: $tokenDecimals },
  target: checkAllowanceFx,
})

sample({
  clock: checkAllowanceFx.done,
  fn: ({ result }) => result,
  target: $allowance,
})

sample({
  clock: approved,
  source: $tokenAddress,
  target: approveArtyFx,
})

sample({
  clock: approveArtyFx.done,
  fn: () => ({ message: 'You have successfully approved tokens to stake!' }),
  target: notificationOpened,
})

sample({
  clock: staked,
  source: {
    amount: stakeForm.fields.stake.$value,
    decimals: $tokenDecimals,
    loading: $stakingLoading,
  },
  filter: ({ amount, loading }) => amount.length > 0 && !loading,
  target: stakeFx,
})

sample({
  clock: stakeFx.done,
  fn: () => ({ message: 'You have successfully staked your tokens!' }),
  target: [notificationOpened, stakingsRequested, stakeForm.reset],
})

sample({
  clock: stakeFx.fail,
  fn: ({ error }) => {
    if (error.message.includes('NotAllowedAmount')) {
      return { message: 'The amount to stake is too high!' }
    }

    return { message: 'Something went wrong!' }
  },
  target: errorNotificationOpened,
})
