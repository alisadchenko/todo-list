import { Divider, Stack } from '@mui/material'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

import { scrollHandled } from '@/src/features/navigation/model'
import { ComplexBlock } from '@/src/widgets/complex-block'
import { DocumentsBlock } from '@/src/widgets/documents-block'
import { FaqBlock } from '@/src/widgets/faq-block'
import { Header } from '@/src/widgets/header'
import { IndexBlock } from '@/src/widgets/index-block'
import { InviteBlock } from '@/src/widgets/invite-block'
import { PenthouseBlock } from '@/src/widgets/penthouse-block'

import * as Styled from './style'

export const Pages = () => {
  const handleScroll = useUnit(scrollHandled)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <Stack>
      <Header />
      <Styled.PageContainer spacing={10} divider={<Divider />}>
        <IndexBlock />
        <ComplexBlock />
        <PenthouseBlock />
        <InviteBlock />
        <DocumentsBlock />
        <FaqBlock />
      </Styled.PageContainer>
    </Stack>
  )
}
