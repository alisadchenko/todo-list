import { Button, Divider, Stack, Typography, useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useGate, useUnit } from 'effector-react'

import { AddToMetamask } from '@/features/add-to-metamask'
import { CmcIcon } from '@/shared/icons'
import {
  $notificationMessage,
  $notificationType,
  $notificationVisible,
  notificationClosed,
} from '@/shared/lib'
import { Notification } from '@/shared/ui'
import { formatNumber } from '@/shared/utils'
import { Header } from '@/widgets/header'
import { StakingConditions } from '@/widgets/staking-conditions'
import { StakingTabs } from '@/widgets/staking-tabs'
import { Stakings } from '@/widgets/stakings'

import * as Styled from './style'
import { $tvl, pageGate } from './model'

export const Pages = () => {
  const closeNotification = useUnit(notificationClosed)

  const [notificationVisible, notificationMessage, tvl, notificationType] = useUnit([
    $notificationVisible,
    $notificationMessage,
    $tvl,
    $notificationType,
  ])

  const isLarge = useMediaQuery((theme) => (theme as Theme).breakpoints.up('lg'))

  useGate(pageGate)

  return (
    <Stack>
      <Header />

      <Typography variant="h1" textAlign="center" m={{ sm: '86px 0 32px', xs: '24px 0 18px' }}>
        $ARTY Staking
      </Typography>

      <Styled.WidgetWrapper
        direction={{ lg: 'row', xs: 'column-reverse' }}
        spacing={{ sm: '39px', xs: '32px' }}
        m="0 auto"
      >
        <Styled.WidgetInfoBlock spacing="26px">
          <Stack spacing="16px">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle2">Network Overview</Typography>

              <Stack direction="row" spacing="6px">
                <AddToMetamask />

                <Button
                  variant="secondary"
                  startIcon={<CmcIcon />}
                  component="a"
                  href="https://coinmarketcap.com/currencies/artyfact/"
                  target="_blank"
                  rel="noreferer"
                >
                  <Typography fontSize={{ sm: '12px', xs: '11px' }}>Add to CMC</Typography>
                </Button>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              spacing="12px"
              flexWrap={{ sm: 'nowrap', xs: 'wrap' }}
              useFlexGap
            >
              <Styled.OverviewBlock data-active="true">
                <Typography variant="subtitle2" color="text.inverse">
                  TBD
                </Typography>

                <Typography fontSize="12px" color="text.inverse">
                  Current APY
                </Typography>
              </Styled.OverviewBlock>

              <Styled.OverviewBlock>
                <Typography variant="subtitle2">{formatNumber(tvl)} $ARTY</Typography>

                <Typography fontSize="12px">TVL</Typography>
              </Styled.OverviewBlock>

              <Styled.OverviewBlock>
                <Typography variant="subtitle2">{formatNumber(3495)}</Typography>

                <Typography fontSize="12px">$ARTY Holders</Typography>
              </Styled.OverviewBlock>
            </Stack>
          </Stack>

          <StakingConditions />
        </Styled.WidgetInfoBlock>

        <Divider orientation={isLarge ? 'vertical' : 'horizontal'} flexItem />

        <Styled.WidgetExchangeBlock spacing={{ sm: '16px', xs: '20px' }}>
          <Typography variant="subtitle1" textAlign="center">
            My $ARTY Stake
          </Typography>

          <StakingTabs />

          <Stakings />
        </Styled.WidgetExchangeBlock>
      </Styled.WidgetWrapper>

      <Notification
        open={notificationVisible}
        type={notificationType}
        message={notificationMessage}
        onClose={closeNotification}
      />
    </Stack>
  )
}
