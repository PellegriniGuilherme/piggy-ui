import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Apple, Bell } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "PiggyUI/Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Clique aqui",
  },
};

export const Secondary: Story = {
  args: {
    children: "Botão secundário",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Botão perigoso",
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    children: "Botão com borda",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Botão transparente",
    variant: "ghost",
  },
};

export const WithIcon: Story = {
  args: {
    children: <><Bell /> Notificações</>,
    variant: "default",
    size: "lg",
  },
};

export const IconOnly: Story = {
  args: {
    children: <Apple />,
    variant: "default",
    size: "icon",
    "aria-label": "Pesquisar",
  },
};
