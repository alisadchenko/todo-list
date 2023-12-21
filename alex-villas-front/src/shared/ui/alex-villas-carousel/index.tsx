import { Backdrop, Portal, Stack } from '@mui/material'
import { MouseEvent, useRef, useState } from 'react'
import Carousel from 'react-material-ui-carousel'

import { ChevronRightIcon } from '@/src/shared/icons'

import * as Styled from './style'

type Props = {
  items: string[]
}

export const AlexVillasCarousel = ({ items }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number | undefined>(0)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [magnifiedSlide, setMagnifiedSlide] = useState<string | null>(null)

  const slidesRef = useRef<HTMLDivElement | null>(null)
  const slidesContainerRef = useRef<HTMLDivElement | null>(null)
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  })

  const handleDragStart = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!slidesContainerRef.current) {
      return
    }

    const slider = slidesContainerRef.current as HTMLDivElement
    const startX = e.pageX - slider.offsetLeft
    const startY = e.pageY - slider.offsetTop
    const scrollLeft = slider.scrollLeft
    const scrollTop = slider.scrollTop
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    setIsMouseDown(true)
    document.body.style.cursor = 'grabbing'
  }

  const handleDragEnd = () => {
    setIsMouseDown(false)
    if (!slidesContainerRef.current) {
      return
    }
    document.body.style.cursor = 'default'
  }

  const handleDrag = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!isMouseDown || !slidesContainerRef.current) {
      return
    }

    e.preventDefault()

    const slider = slidesContainerRef.current as HTMLDivElement
    const x = e.pageX - slider.offsetLeft
    const y = e.pageY - slider.offsetTop
    const walkX = (x - mouseCoords.current.startX) * 1.5
    const walkY = (y - mouseCoords.current.startY) * 1.5
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX
    slider.scrollTop = mouseCoords.current.scrollTop - walkY
  }

  const handleNextSmallSlideClick = () => {
    const slideWidth = (document.querySelector('#small-slide-1')?.clientWidth || 0) + 24

    slidesContainerRef.current?.scroll({
      left: slidesContainerRef.current.scrollLeft + slideWidth,
      behavior: 'smooth',
    })
  }

  const handlePrevSmallSlideClick = () => {
    const slideWidth = (document.querySelector('#small-slide-1')?.clientWidth || 0) + 24

    slidesContainerRef.current?.scroll({
      left: slidesContainerRef.current.scrollLeft - slideWidth,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Stack spacing="30px">
        <Carousel
          autoPlay={false}
          animation="slide"
          indicators={false}
          onChange={(now) => setActiveSlide(now)}
          index={activeSlide}
          navButtonsAlwaysVisible={true}
          NavButton={({ onClick, prev }) => {
            return prev ? (
              <Styled.NavigationPrevButton variant="navigation" onClick={() => onClick()}>
                <ChevronRightIcon />
              </Styled.NavigationPrevButton>
            ) : (
              <Styled.NavigationNextButton variant="navigation" onClick={() => onClick()}>
                <ChevronRightIcon />
              </Styled.NavigationNextButton>
            )
          }}
        >
          {items.map((item) => (
            <Styled.ComplexSlideBig key={item} img={item} onClick={() => setMagnifiedSlide(item)} />
          ))}
        </Carousel>
        <Styled.Slides ref={slidesRef}>
          <Styled.SlidesContainer
            direction="row"
            spacing="22px"
            ref={slidesContainerRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
            onMouseLeave={handleDragEnd}
          >
            {items.map((item, index) => (
              <Styled.ComplexSlideSmall
                key={item}
                img={item}
                onClick={() => setActiveSlide(index)}
                id={`small-slide-${index}`}
              />
            ))}
          </Styled.SlidesContainer>

          <Styled.SmallSlidesPrevNavigationBlock>
            <Styled.NavigationPrevButton variant="navigation" onClick={handlePrevSmallSlideClick}>
              <ChevronRightIcon />
            </Styled.NavigationPrevButton>
          </Styled.SmallSlidesPrevNavigationBlock>

          <Styled.SmallSlidesNextNavigationBlock>
            <Styled.NavigationNextButton variant="navigation" onClick={handleNextSmallSlideClick}>
              <ChevronRightIcon />
            </Styled.NavigationNextButton>
          </Styled.SmallSlidesNextNavigationBlock>
        </Styled.Slides>
      </Stack>

      <Portal>
        <Backdrop open={Boolean(magnifiedSlide)} onClick={() => setMagnifiedSlide(null)}>
          <Styled.MagnifiedImg
            src={`/assets/images/${magnifiedSlide}.png`}
            alt={magnifiedSlide || 'slide'}
          />
        </Backdrop>
      </Portal>
    </>
  )
}
