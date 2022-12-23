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
    content: 'Toast Opened!',
    title: 'Toast',
  },
}
