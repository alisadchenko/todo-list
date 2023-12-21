import { createStore } from 'effector'

export const $tokenAddress = createStore('')
export const $tokenSymbol = createStore('')
export const $tokenDecimals = createStore(18)
