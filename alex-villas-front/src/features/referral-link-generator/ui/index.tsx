import { Button, Tooltip } from '@mui/material'
import { ConnectKitButton } from 'connectkit'
import { useUnit } from 'effector-react'
import { useEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'

import { CopyIcon } from '@/src/shared/icons'

import * as Styled from './style'
import {
  $copiedTooltipVisible,
  $referralLink,
  generateLinkClicked,
  linkCopied,
  pageLoaded,
} from '../model'

export const ReferralLinkGenerator = () => {
  const { address } = useAccount()

  const clickGenerateLink = useUnit(generateLinkClicked)
  const copyLink = useUnit(linkCopied)
  const handlePageLoading = useUnit(pageLoaded)

  const [referralLink, tooltipVisible] = useUnit([$referralLink, $copiedTooltipVisible])

  const button = useMemo(() => {
    if (!address) {
      return (
        <ConnectKitButton.Custom>
          {({ show }) => (
            <Button variant="containedSecondary" onClick={show}>
              Connect Wallet
            </Button>
          )}
        </ConnectKitButton.Custom>
      )
    }

    if (referralLink) {
      return (
        <Tooltip title="Copied" open={tooltipVisible} placement="top">
          <Button startIcon={<CopyIcon />} variant="containedSecondary" onClick={copyLink}>
            Copy link
          </Button>
        </Tooltip>
      )
    }

    return (
      <Button variant="containedSecondary" onClick={() => clickGenerateLink({ address })}>
        Generate Link
      </Button>
    )
  }, [address, clickGenerateLink, copyLink, referralLink, tooltipVisible])

  const link = useMemo(() => {
    return referralLink && address ? referralLink : 'Get an Invite Link and Earn $BALI'
  }, [address, referralLink])

  useEffect(() => {
    handlePageLoading()
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [])

  return (
    <Styled.LinkGeneratorContainer
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Styled.ReferralLink color="text.secondary" fontSize="17px" fontWeight={500}>
        {link}
      </Styled.ReferralLink>

      {button}
    </Styled.LinkGeneratorContainer>
  )
}
