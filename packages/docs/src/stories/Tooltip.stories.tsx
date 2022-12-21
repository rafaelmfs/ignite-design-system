import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@rafaelmfs-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box>{Story()}</Box>
        </TooltipProvider>
      )
    },
  ],

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: '21 de Outubro - Indisponível',
    children: <Button>Hover-me</Button>,
  },
}
