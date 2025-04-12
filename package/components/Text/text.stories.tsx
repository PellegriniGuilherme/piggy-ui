import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'PiggyUi/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'label', 'div'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Texto padrão',
    size: 'md',
    weight: 'normal',
    align: 'left',
    as: 'span',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Texto XS</Text>
      <Text size="sm">Texto SM</Text>
      <Text size="md">Texto MD</Text>
      <Text size="lg">Texto LG</Text>
    </div>
  ),
};

export const CenteredMedium: Story = {
  args: {
    children: 'Texto centralizado e médio',
    align: 'center',
    weight: 'medium',
    size: 'md',
    as: 'p',
  },
};
