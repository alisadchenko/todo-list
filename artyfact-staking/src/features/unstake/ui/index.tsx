import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useModal } from 'connectkit'
import { useUnit } from 'effector-react'
import { useMemo } from 'react'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

import { ArtyInput } from '@/shared/ui'

import { $amountToUnstake, $unstakeLoading, unstaked } from '../model'

export const Unstake = () => {
  const unstake = useUnit(unstaked)

  const [amountToUnstake, loading] = useUnit([$amountToUnstake, $unstakeLoading])

  const { setOpen } = useModal()

  const { address } = useAccount()
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const buttonTitle = useMemo(() => {
    switch (true) {
      case Boolean(address):
        return 'Unstake $ARTY'
      case chain?.unsupported:
        return 'Switch Network'
      default:
        return 'Connect Wallet'
    }
  }, [address, chain?.unsupported])

  const buttonHandler = useMemo(() => {
    switch (true) {
      case Boolean(address):
        return () => unstake()
      case chain?.unsupported:
        return () => switchNetwork?.(chains[0].id)
      default:
        return () => setOpen(true)
    }
  }, [address, chain?.unsupported, chains, setOpen, switchNetwork, unstake])

  return (
    <Stack spacing={{ sm: '16px', xs: '12px' }}>
      <ArtyInput
        value={amountToUnstake}
        readonly={true}
        balance={
          <Typography
            fontSize="12px"
            color="text.tertiary"
            width="114px"
            height={{ sm: '21px', xs: '18px' }}
          >
            Unstake all tokens
          </Typography>
        }
      />

      <Button variant="contained" size="large" onClick={buttonHandler}>
        {loading ? <CircularProgress color="inherit" size="28px" /> : buttonTitle}
      </Button>
    </Stack>
  )
}
