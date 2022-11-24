import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Rafael Marques',
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WhitFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
