import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur, pariatur laudantium nesciunt quis inventore corporis unde expedita, recusandae dolore ipsa, obcaecati alias aliquid possimus. Officia est aliquid corrupti libero.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso sem problemas com a propriedade `as`',
      },
    },
  },
}
