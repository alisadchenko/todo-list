import { createEffect, createEvent, createStore, sample } from 'effector'
import { createRef, RefObject } from 'react'

type HandleScrollToBlockEffectProps = {
  refs: RefObject<HTMLDivElement>[]
  index: number
}

const handleScrollToBlockFx = createEffect(({ refs, index }: HandleScrollToBlockEffectProps) => {
  const ref = refs[index]

  if (ref.current) {
    window.scroll({
      top: ref.current.offsetTop - 120,
      behavior: 'smooth',
    })
  }
})

export const navItemClicked = createEvent<number>()
export const scrollHandled = createEvent()

export const $activeNavItem = createStore(0)
export const $homeRef = createStore<RefObject<HTMLDivElement>>(createRef())
export const $complexRef = createStore<RefObject<HTMLDivElement>>(createRef())
export const $apartmentRef = createStore<RefObject<HTMLDivElement>>(createRef())
export const $documentsRef = createStore<RefObject<HTMLDivElement>>(createRef())
export const $financialsRef = createStore<RefObject<HTMLDivElement>>(createRef())
export const $faqRef = createStore<RefObject<HTMLDivElement>>(createRef())

sample({
  clock: navItemClicked,
  source: [$homeRef, $complexRef, $apartmentRef, $documentsRef, $financialsRef, $faqRef],
  fn: (refs, index) => ({ refs, index }),
  target: handleScrollToBlockFx,
})

sample({
  clock: scrollHandled,
  source: {
    activeItem: $activeNavItem,
    homeRef: $homeRef,
    complexRef: $complexRef,
    apartmentRef: $apartmentRef,
    documentsRef: $documentsRef,
    financialsRef: $financialsRef,
    faqRef: $faqRef,
  },
  fn: ({ activeItem, homeRef, complexRef, apartmentRef, documentsRef, financialsRef, faqRef }) => {
    let item = activeItem

    const refs = [homeRef, complexRef, apartmentRef, documentsRef, financialsRef, faqRef]

    const scrollPosition = window.scrollY + 200

    refs.forEach((ref, index) => {
      if (typeof ref === 'number') {
        return
      }

      if (ref.current) {
        const bottom = ref.current.offsetTop + ref.current.clientHeight + 100

        if (ref.current.offsetTop < 200 && scrollPosition < 200) {
          item = 0
        }

        if (window.scrollY + window.innerHeight === document.body.clientHeight) {
          item = refs.length - 1
        }

        if (scrollPosition >= ref.current.offsetTop && scrollPosition <= bottom) {
          item = index
        }
      }
    })

    return item
  },
  target: $activeNavItem,
})
