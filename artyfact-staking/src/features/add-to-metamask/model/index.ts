import { getAccount } from '@wagmi/core'
import { createEffect, createEvent, sample } from 'effector'

import { $tokenAddress, $tokenDecimals, $tokenSymbol } from '@/entities/token/model'

import { AddToMetamaskFnProps } from '../types'

const addToMetamaskFx = createEffect(
  async ({ decimals, address, symbol }: AddToMetamaskFnProps) => {
    const tokenImage = `${window.location.href}public/assets/images/logo-icon.png`

    const { connector } = getAccount()
    const provider = await connector?.getProvider()

    await provider?.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address,
          symbol,
          decimals,
          image: tokenImage,
        },
      },
    })
  },
)

export const addedToMetamask = createEvent()

sample({
  clock: addedToMetamask,
  source: { decimals: $tokenDecimals, address: $tokenAddress, symbol: $tokenSymbol },
  target: addToMetamaskFx,
})
