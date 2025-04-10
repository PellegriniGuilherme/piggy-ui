import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";
import { cn } from "../../lib/utils";

const meta: Meta<typeof Separator> = {
  title: "PiggyUI/Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => {
    const isVertical = args.orientation === "vertical"

    return (
      <div
        className={cn(
          "bg-neutral-100 p-4 w-full",
          isVertical ? "flex items-center space-x-4 h-24" : "flex flex-col space-y-2"
        )}
      >
        <span>{isVertical ? "Esquerda" : "Cima"}</span>
        <Separator {...args} />
        <span>{isVertical ? "Direita" : "Baixo"}</span>
      </div>
    )
  },
  args: {
    orientation: "horizontal"
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-2 bg-neutral-100 p-4 w-full">
      <span>Cima</span>
      <Separator {...args} />
      <span>Baixo</span>
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4 h-24 bg-neutral-100 p-4">
      <span>Esquerda</span>
      <Separator {...args} />
      <span>Direita</span>
    </div>
  ),
  args: {
    orientation: "vertical",
  },
};
