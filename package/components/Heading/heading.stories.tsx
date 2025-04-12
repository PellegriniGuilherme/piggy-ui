import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'PiggyUI/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Título padrão',
    size: 'lg',
    weight: 'bold',
    align: 'left',
    as: 'h2',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading size="xs">Heading XS</Heading>
      <Heading size="sm">Heading SM</Heading>
      <Heading size="md">Heading MD</Heading>
      <Heading size="lg">Heading LG</Heading>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="2xl">Heading 2XL</Heading>
    </div>
  ),
};

export const CenteredBold: Story = {
  args: {
    children: 'Centralizado e Bold',
    align: 'center',
    weight: 'bold',
    size: 'xl',
    as: 'h1',
  },
};
