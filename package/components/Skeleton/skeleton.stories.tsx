import type { Meta, StoryObj } from "@storybook/react"
import { cn } from "../../lib/utils"
import { Skeleton } from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "PiggyUI/Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    style: { control: "object" },
  },
}
export default meta

type Story = StoryObj<typeof Skeleton>


export const Default: Story = {
  render: (args) => (
    <div className={cn("bg-neutral-50 p-4", "w-full")}>
      <Skeleton {...args} />
    </div>
  ),
  args: {
    className: "w-full h-4",
  },
}

export const CustomSize: Story = {
  render: (args) => (
    <div className="bg-neutral-50 p-4">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    className: "w-1/2 h-8",
  },
}

export const WithCustomStyle: Story = {
  render: (args) => (
    <div className="bg-neutral-100 p-4">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    className: "mb-2",
    style: { width: "200px", height: "16px" },
  },
}
