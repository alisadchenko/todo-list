import { prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core'
import { combine, createEffect, createEvent, sample } from 'effector'
import { formatUnits } from 'viem'

import { $selectedStaking, $selectedStakingIndex, stakingsRequested } from '@/entities/stakings'
import { $tokenDecimals } from '@/entities/token'
import { StakingContractAbi } from '@/shared/abi/StakingContractAbi'
import { notificationOpened } from '@/shared/lib'

const unstakeFx = createEffect(async (id: number) => {
  const config = await prepareWriteContract({
    address: import.meta.env.VITE_STAKING_CONTRACT as `0x${string}`,
    abi: StakingContractAbi,
    functionName: 'unstake',
    args: [id],
  })

  const { hash } = await writeContract(config)

  await waitForTransaction({ hash: hash as `0x${string}` })
})

export const $amountToUnstake = combine($selectedStaking, $tokenDecimals, (staking, decimals) =>
  staking ? formatUnits(staking.amount, decimals) : '',
)

export const unstaked = createEvent()

export const $unstakeLoading = unstakeFx.pending

sample({
  clock: unstaked,
  source: { staking: $selectedStaking, index: $selectedStakingIndex },
  filter: ({ staking }) => Boolean(staking),
  fn: ({ index }) => index,
  target: unstakeFx,
})

sample({
  clock: unstakeFx.done,
  fn: () => ({ message: 'You have successfully unstaked your tokens!' }),
  target: [notificationOpened, stakingsRequested],
})
