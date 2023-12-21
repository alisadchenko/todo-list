import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { useUnit } from 'effector-react'

import { $faqRef } from '@/src/features/navigation/model'

const FAQ_ITEMS = [
  {
    question: 'At what price can I buy the $BALI token in the presale?',
    answer:
      'The presale takes place via our website https://app.wesendit.io. Beforehand, you need to start the whitelist process and answer a few questions truthfully. This process takes about one minute. The whitelist event will end on 25 October at 18:00. With a bit of luck, your BEP20 wallet address will be selected for the whitelisting process and you can get our WSI token for $0.032.',
  },
  {
    question: 'At what price can I buy the $BALI token in the presale?',
    answer:
      'The presale takes place via our website https://app.wesendit.io. Beforehand, you need to start the whitelist process and answer a few questions truthfully. This process takes about one minute. The whitelist event will end on 25 October at 18:00. With a bit of luck, your BEP20 wallet address will be selected for the whitelisting process and you can get our WSI token for $0.032.',
  },
  {
    question: 'At what price can I buy the $BALI token in the presale?',
    answer:
      'The presale takes place via our website https://app.wesendit.io. Beforehand, you need to start the whitelist process and answer a few questions truthfully. This process takes about one minute. The whitelist event will end on 25 October at 18:00. With a bit of luck, your BEP20 wallet address will be selected for the whitelisting process and you can get our WSI token for $0.032.',
  },
  {
    question: 'At what price can I buy the $BALI token in the presale?',
    answer:
      'The presale takes place via our website https://app.wesendit.io. Beforehand, you need to start the whitelist process and answer a few questions truthfully. This process takes about one minute. The whitelist event will end on 25 October at 18:00. With a bit of luck, your BEP20 wallet address will be selected for the whitelisting process and you can get our WSI token for $0.032.',
  },
  {
    question: 'At what price can I buy the $BALI token in the presale?',
    answer:
      'The presale takes place via our website https://app.wesendit.io. Beforehand, you need to start the whitelist process and answer a few questions truthfully. This process takes about one minute. The whitelist event will end on 25 October at 18:00. With a bit of luck, your BEP20 wallet address will be selected for the whitelisting process and you can get our WSI token for $0.032.',
  },
]

export const FaqBlock = () => {
  const [ref] = useUnit([$faqRef])

  return (
    <Stack spacing="30px" mb="160px !important" id="faq" ref={ref}>
      <Typography variant="h2">FAQ</Typography>
      <Stack>
        {FAQ_ITEMS.map((item, index) => (
          <Accordion key={`${item.question}_${index}`}>
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
            >
              <Typography fontSize="20px" fontWeight={600}>
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography fontSize="14px" color="text.tertiary" fontWeight={500}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  )
}
