import { Stack, styled } from '@mui/material'

export const WidgetWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: '1246px',

  padding: '34px',

  borderRadius: '36px',

  border: `1px solid ${theme.palette.whiteOpacity?.[4]}`,

  background: theme.palette.background.widgetBackground,

  [theme.breakpoints.down('lg')]: {
    padding: '19px',
    marginBottom: '40px',

    borderRadius: '32px',
  },
}))

export const WidgetInfoBlock = styled(Stack)(({ theme }) => ({
  flex: '60%',

  maxWidth: '633px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: 'unset',
  },
}))

export const WidgetExchangeBlock = styled(Stack)(({ theme }) => ({
  flex: '35%',

  maxWidth: '465px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: 'unset',
  },
}))

export const OverviewBlock = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  flex: '30%',

  height: '70px',

  borderRadius: '16px',

  background: theme.palette.whiteOpacity![0],

  '&[data-active="true"]': {
    background: theme.palette.primary.main,
  },

  '&:first-of-type': {
    maxWidth: '162px',
  },

  '&:nth-of-type(2)': {
    maxWidth: '214px',
  },

  [theme.breakpoints.down('sm')]: {
    height: '58px',

    '&:first-of-type': {
      flex: '100%',

      maxWidth: 'unset',
    },

    '&:nth-of-type(2)': {
      flex: '45%',

      maxWidth: 'unset',
    },

    '&:last-of-type': {
      flex: '45%',

      maxWidth: 'unset',
    },
  },
}))
