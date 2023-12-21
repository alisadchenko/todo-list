import { Stack, Tab, Tabs } from '@mui/material'
import { useUnit } from 'effector-react'
import { JSX } from 'react'

import { Stake } from '@/features/stake'
import { Unstake } from '@/features/unstake'

import { $activeTab, activeTabSet } from './model'

const ACTIVE_TAB: Record<string, JSX.Element> = {
  stake: <Stake />,
  unstake: <Unstake />,
}

export const StakingTabs = () => {
  const setActiveTab = useUnit(activeTabSet)

  const [activeTab] = useUnit([$activeTab])

  return (
    <Stack spacing={{ sm: '16px', xs: '12px' }}>
      <Tabs value={activeTab} onChange={(_, value) => setActiveTab(value)}>
        <Tab value="stake" label="Stake" />
        <Tab value="unstake" label="Unstake" />
      </Tabs>

      {ACTIVE_TAB[activeTab]}
    </Stack>
  )
}
