import { Alert, Snackbar, SnackbarProps, useTheme } from '@mui/material'

type Props = {
  type: string
} & SnackbarProps

export const Notification = ({ message, onClose, type, ...props }: Props) => {
  const { palette } = useTheme()

  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={onClose}
      open={true}
      {...props}
    >
      <Alert
        variant="outlined"
        severity={type.length > 0 ? (type as 'success' | 'error') : 'success'}
        onClose={(event) => onClose?.(event, 'escapeKeyDown')}
        sx={{ borderRadius: '12px', width: '320px', background: palette.background.default }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
