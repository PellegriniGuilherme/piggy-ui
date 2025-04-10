import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "PiggyUI/Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Checked: Story = {
  args: {
    children: "Label",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Label",
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    children: "Label",
    defaultChecked: true,
    disabled: true,
  },
};