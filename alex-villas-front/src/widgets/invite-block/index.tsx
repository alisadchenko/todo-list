import { Stack, Typography } from '@mui/material'

import { ReferralLinkGenerator } from '@/src/features/referral-link-generator'

import * as Styled from './style'

const INSTRUCTION_STEPS = [
  {
    title: 'Step 1',
    content: 'Connect your wallet to get a referral link',
  },
  {
    title: 'Step 2',
    content: 'Invite your friends to register via your referral link',
  },
  {
    title: 'Step 3',
    content: 'Get referral rewards in $BALI from the number of purchased tokens by your friends',
  },
]

export const InviteBlock = () => {
  return (
    <Stack alignItems="center" id="invite">
      <Typography variant="h2" textAlign="center" mb="18px">
        Invite your friends and earn $BALI
      </Typography>

      <ReferralLinkGenerator />

      <Typography color="text.secondary" mt="31px" textAlign="center" maxWidth="893px">
        Share your $BALI referral link with your friends and business partners and get rewards for
        every successful sale of tokens from three levels
      </Typography>

      <Stack direction="row" spacing="24px" mt="53px">
        {INSTRUCTION_STEPS.map((item) => (
          <Styled.InstructionBlock key={item.title} spacing="8px">
            <Typography fontSize="40px" fontWeight={600} color="primary">
              {item.title}
            </Typography>
            <Typography fontWeight={500}>{item.content}</Typography>
          </Styled.InstructionBlock>
        ))}
      </Stack>

      <Styled.ReferralsInfoBlock
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mt="26px"
        spacing="4px"
      >
        <Typography fontWeight={500} component="span">
          You can earn from three levels of referrals
        </Typography>
        <Typography fontWeight={500} component="span" color="primary">
          Level 1 (5%), Level 2 (3%), Level 3 (2%)
        </Typography>
      </Styled.ReferralsInfoBlock>
    </Stack>
  )
}
