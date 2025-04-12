import { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './errorText';

const meta: Meta<typeof ErrorText> = {
  title: 'PiggyUi/Typography/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorText>;
export const Default: Story = {
  args: {
    children: 'This is an error message',
  },
};

