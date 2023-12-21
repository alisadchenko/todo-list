import copy from 'copy-to-clipboard'
import { createEvent, createStore, sample } from 'effector'
import { interval } from 'patronum'

export const linkCopied = createEvent()
export const generateLinkClicked = createEvent<{ address?: `0x${string}` }>()
export const pageLoaded = createEvent()
const timerStarted = createEvent()
const timerStopped = createEvent()

export const $copiedTooltipVisible = createStore(false)
export const $referralLink = createStore('')
const $timer = createStore(0)

const { tick } = interval({
  timeout: 1000,
  start: timerStarted,
  stop: timerStopped,
})

sample({
  clock: generateLinkClicked,
  fn: ({ address }) => {
    const generatedLink = `${window.location.href.split('?')[0]}?ref=${address}`
    window.localStorage.setItem('link', generatedLink)

    return generatedLink
  },
  target: $referralLink,
})

sample({
  clock: pageLoaded,
  fn: () => {
    const link = window.localStorage.getItem('link')

    if (link) {
      return link
    }

    return ''
  },
  target: $referralLink,
})

sample({
  clock: linkCopied,
  source: { link: $referralLink },
  fn: ({ link }) => {
    copy(link)

    return true
  },
  target: [$copiedTooltipVisible, timerStarted],
})

sample({
  clock: tick,
  source: { counter: $timer },
  filter: ({ counter }) => counter > 0,
  fn: ({ counter }) => counter - 1,
  target: $timer,
})

sample({
  clock: tick,
  source: { counter: $timer },
  filter: ({ counter }) => counter === 0,
  target: timerStopped,
})

sample({
  source: timerStarted,
  fn: () => 2,
  target: $timer,
})

sample({
  source: timerStopped,
  fn: () => false,
  target: $copiedTooltipVisible,
})
