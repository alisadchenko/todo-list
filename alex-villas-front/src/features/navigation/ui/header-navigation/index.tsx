import { Stack } from '@mui/material'
import { useUnit } from 'effector-react'

import * as Styled from './style'
import { NAV_ITEMS } from '../../constants'
import { $activeNavItem, navItemClicked } from '../../model'

export const HeaderNavigation = () => {
  const clickNavItem = useUnit(navItemClicked)

  const [activeNavItem] = useUnit([$activeNavItem])

  return (
    <Stack direction="row" justifyContent="space-between" maxWidth="790px" width="100%">
      {NAV_ITEMS.map((item, index) => (
        <Styled.NavItem
          key={item}
          data-active={activeNavItem === index}
          onClick={() => clickNavItem(index)}
        >
          {item}
        </Styled.NavItem>
      ))}
    </Stack>
  )
}
