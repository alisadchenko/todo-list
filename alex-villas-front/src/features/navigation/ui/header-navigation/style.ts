import { Box, styled } from '@mui/material'

export const NavItem = styled(Box)(({ theme }) => ({
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',

  height: '66px',

  padding: '0 12px',
  marginRight: '10px',

  borderBottom: '1px solid transparent',

  fontSize: '17px',
  fontWeight: 700,
  lineHeight: '140%',
  letterSpacing: '0.15px',
  color: theme.palette.text.secondaryOpacity,

  transition: 'all 0.2s ease-out',

  '&:last-of-type': {
    marginRight: '0',
  },

  '&:hover': {
    color: theme.palette.text.primary,
  },

  '&[data-active="true"]': {
    borderBottom: `1px solid ${theme.palette.primary.main}`,

    color: theme.palette.text.primary,
  },
}))
