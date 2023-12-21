import { createEvent, createStore, sample } from 'effector'
import { spread } from 'patronum'

export const notificationOpened = createEvent<{ message: string }>()
export const errorNotificationOpened = createEvent<{ message: string }>()
export const notificationClosed = createEvent()

export const $notificationVisible = createStore<boolean>(false)
export const $notificationMessage = createStore<string>('')
export const $notificationType = createStore('')

sample({
  clock: notificationOpened,
  fn: ({ message }) => message,
  target: $notificationMessage,
})

sample({
  clock: errorNotificationOpened,
  fn: ({ message }) => ({ message, type: 'error' }),
  target: spread({
    targets: {
      message: $notificationMessage,
      type: $notificationType,
    },
  }),
})

sample({
  clock: $notificationMessage,
  filter: (message) => message.length > 0,
  fn: () => true,
  target: $notificationVisible,
})

sample({
  clock: $notificationVisible,
  filter: (visible) => !visible,
  fn: () => '',
  target: $notificationMessage,
})

sample({
  clock: notificationClosed,
  fn: () => ({ visible: false, type: '' }),
  target: spread({
    targets: {
      visible: $notificationVisible,
      type: $notificationType,
    },
  }),
})
