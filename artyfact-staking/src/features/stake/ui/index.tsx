import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import BigNumber from 'bignumber.js'
import { useModal } from 'connectkit'
import { useForm } from 'effector-forms'
import { useGate, useUnit } from 'effector-react'
import { useMemo } from 'react'
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from 'wagmi'

import { $tokenAddress } from '@/entities/token'
import { ArtyInput } from '@/shared/ui'
import { formatNumber } from '@/shared/utils'

import { $allowance, $stakingLoading, approved, staked, stakeForm, stakeGate } from '../model'

export const Stake = () => {
  const [tokenAddress, loading, allowance] = useUnit([$tokenAddress, $stakingLoading, $allowance])

  const approve = useUnit(approved)
  const stake = useUnit(staked)

  const { fields } = useForm(stakeForm)

  const { setOpen } = useModal()

  const { address } = useAccount()
  const { data: tokenBalance } = useBalance({
    address,
    token: tokenAddress as `0x${string}`,
    watch: true,
  })
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const buttonTitle = useMemo(() => {
    switch (true) {
      case Boolean(!address):
        return 'Connect Wallet'
      case chain?.unsupported:
        return 'Switch Network'
      case new BigNumber(allowance).lt(fields.stake.value):
        return 'Approve $ARTY'
      default:
        return 'Stake $ARTY'
    }
  }, [address, allowance, chain?.unsupported, fields.stake.value])

  const buttonHandler = useMemo(() => {
    switch (true) {
      case Boolean(!address):
        return () => setOpen(true)
      case chain?.unsupported:
        return () => switchNetwork?.(chains[0].id)
      case new BigNumber(allowance).lt(fields.stake.value):
        return () => approve()
      default:
        return () => stake()
    }
  }, [
    address,
    allowance,
    approve,
    chain?.unsupported,
    chains,
    fields.stake.value,
    setOpen,
    stake,
    switchNetwork,
  ])

  useGate(stakeGate)

  return (
    <Stack spacing={{ sm: '16px', xs: '12px' }}>
      <ArtyInput
        value={fields.stake.value}
        onChange={(event) => fields.stake.set(event.target.value)}
        balance={
          <Stack
            direction="row"
            spacing="4px"
            width="190px"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography fontSize="12px" component="span" color="text.tertiary">
              Available for stake:
            </Typography>

            <Button
              variant="text"
              component="span"
              onClick={() => fields.stake.set(tokenBalance?.formatted as string)}
            >
              {tokenBalance ? formatNumber(tokenBalance.formatted) : 0}
            </Button>
          </Stack>
        }
      />

      <Button variant="contained" size="large" onClick={buttonHandler}>
        {loading ? <CircularProgress color="inherit" size="28px" /> : buttonTitle}
      </Button>
    </Stack>
  )
}
