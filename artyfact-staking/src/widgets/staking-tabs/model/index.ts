import { createEvent, createStore, sample } from 'effector'

export const activeTabSet = createEvent<string>()

export const $activeTab = createStore<string>('stake')

sample({
  clock: activeTabSet,
  target: $activeTab,
})
