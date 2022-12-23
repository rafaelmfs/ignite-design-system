import { Provider } from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { ComponentProps } from 'react'

export const ToastProvider = styled(Provider)

export interface ToastProviderProps
  extends ComponentProps<typeof ToastProvider> {}

ToastProvider.displayName = 'ToastProvider'
