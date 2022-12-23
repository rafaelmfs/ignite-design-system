import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@rafaelmfs-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <ToastProvider swipeDirection="right" duration={3000}>
          <Box>
            <Button onClick={() => setOpen(!open)}>Open toast</Button>
            <Story
              open={open}
              onOpenChange={setOpen}
              title="Toast"
              content="Toast opened!"
            />
          </Box>
        </ToastProvider>
      )
    },
  ],

  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Toast',
    content: 'Toast Opened!',
  },
}
export const OnOff: StoryObj<ToastProps> = {
  args: {
    title: 'Toast',
    content: 'Toast Opened!',
    open: true,
  },

  parameters: {
    docs: {
      description: {
        story:
          'O toast recebe dois parametros para controlar quando ele será exibido, o open e onOpenChange que é uma função executada qual é exibido e quando ele some',
      },
    },
  },
}
