import type { Meta, StoryObj } from "@storybook/react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip"
import { Button } from "../Button/button"
import { InfoIcon } from "lucide-react"

const meta: Meta<typeof TooltipContent> = {
  title: "PiggyUI/Components/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Position of the tooltip relative to the trigger",
      defaultValue: "top",
    },
    sideOffset: {
      control: "number",
      description: "Offset between trigger and tooltip",
      defaultValue: 0,
    },
    content: {
      control: "text",
      description: "Tooltip content",
      defaultValue: "Tooltip content",
    },
  },
}


export default meta
type Story = StoryObj<typeof TooltipContent>

export const Default: Story = {
  args: {
    side: "top",
    sideOffset: 0,
    content: "Tooltip content",
  },
  render: ({ side, sideOffset, content }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">
          <InfoIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>This is extra info</TooltipContent>
    </Tooltip>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Delayed tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>Appears after 500ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 place-items-center py-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
  ),
}
