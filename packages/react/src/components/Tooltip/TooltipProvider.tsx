import { Provider } from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import { ComponentProps } from 'react'

export const TooltipProvider = styled(Provider)

export interface TooltipProviderProps
  extends ComponentProps<typeof TooltipProvider> {}

TooltipProvider.displayName = 'TooltipProvider'
