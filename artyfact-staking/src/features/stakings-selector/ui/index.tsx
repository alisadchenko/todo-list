import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Popper,
  Stack,
  Typography,
} from '@mui/material'
import { watchAccount } from '@wagmi/core'
import { useGate, useUnit } from 'effector-react'
import { MouseEvent, useEffect } from 'react'
import { useAccount } from 'wagmi'

import {
  $totalStakings,
  $userStakings,
  stakingsCleared,
  stakingsRequested,
} from '@/entities/stakings'
import { ChevronDownIcon } from '@/shared/icons'
import { useDropdownMenu } from '@/shared/lib'

import * as Styled from './style'
import {
  $selectedItemName,
  selectedStakingChanged,
  stakingsSelectorGate,
  totalStakingsSelected,
} from '../model'

export const StakingsSelector = () => {
  const clearStakings = useUnit(stakingsCleared)
  const requestStakings = useUnit(stakingsRequested)
  const selectStaking = useUnit(selectedStakingChanged)
  const selectTotal = useUnit(totalStakingsSelected)

  const [userStakings, totalStakings, selectedStakingName] = useUnit([
    $userStakings,
    $totalStakings,
    $selectedItemName,
  ])

  useGate(stakingsSelectorGate)

  const { anchorRef, open, handleToggle, handleClose, handleListKeyDown } = useDropdownMenu()

  const { connector } = useAccount()

  const handleStakingSelect = (event: MouseEvent, index: number) => {
    selectStaking(index)

    handleClose(event)
  }

  const handleTotalSelect = (event: MouseEvent) => {
    selectTotal()

    handleClose(event)
  }

  useEffect(() => {
    const unwatch = watchAccount((account) => {
      if (!connector && account.connector) {
        requestStakings()
      }

      if (connector && !account.connector) {
        clearStakings()
      }
    })

    return () => unwatch()
  }, [clearStakings, connector, requestStakings])

  return (
    <Box position="relative">
      <Button
        id="network-select"
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={<ChevronDownIcon />}
        disabled={totalStakings === 0}
        style={{ minWidth: '133px' }}
      >
        <Stack width="100%" alignItems="flex-start">
          <Stack direction="row" spacing="4px" alignItems="center">
            {selectedStakingName}
          </Stack>
        </Stack>
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{ width: '100%', zIndex: 1111 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'top' }}>
            <Styled.Options>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {userStakings.map((item, index) => (
                    <MenuItem
                      key={item.startTime}
                      style={{ borderRadius: '12px ' }}
                      onClick={(event) => handleStakingSelect(event, index)}
                    >
                      <Typography fontSize={{ sm: '14px', xs: '12px' }}>
                        Staking #{index + 1}
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem
                    style={{ borderRadius: '12px ' }}
                    onClick={(event) => handleTotalSelect(event)}
                  >
                    <Typography fontSize={{ sm: '14px', xs: '12px' }}>Total</Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Styled.Options>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}
