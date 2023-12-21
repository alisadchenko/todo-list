import { Box, Button, Stack, styled } from '@mui/material'

export const ComplexSlideBig = styled(Box)<{ img: string }>(({ img }) => ({
  cursor: 'pointer',

  width: '942px',
  height: '557px',

  background: `url("/assets/images/${img}.png") no-repeat`,
  backgroundSize: 'cover',

  borderRadius: '40px',
  border: '1px solid rgba(255, 255, 255, 0.22)',
}))

export const ComplexSlideSmall = styled(Box)<{ img: string }>(({ img }) => ({
  cursor: 'pointer',

  minWidth: '219px',
  height: '121px',

  background: `url("/assets/images/${img}.png") no-repeat`,
  backgroundSize: 'cover',

  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.22)',
}))

export const Slides = styled(Box)(() => ({
  position: 'relative',
}))

export const SlidesContainer = styled(Stack)(() => ({
  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    padding: 0,
    height: 0,
  },
  '&::-webkit-scrollbar-thumb': {
    padding: 0,
    height: 0,
  },
}))

export const NavigationNextButton = styled(Button)(() => ({
  top: '46%',
  right: '-14px',

  transform: 'translateX(-48%)',
}))

export const NavigationPrevButton = styled(Button)(() => ({
  top: '46%',
  left: '-14px',

  transform: 'rotate(180deg) translateX(-48%)',
}))

export const SmallSlidesNextNavigationBlock = styled(Box)(() => ({
  position: 'absolute',

  top: '0',
  right: '0',

  height: '60%',
}))

export const SmallSlidesPrevNavigationBlock = styled(Box)(() => ({
  position: 'absolute',

  top: '0',

  height: '65%',
}))

export const MagnifiedImg = styled('img')(() => ({
  maxHeight: '80%',
}))
