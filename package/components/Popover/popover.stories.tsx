import type { Meta, StoryObj } from "@storybook/react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./popover"
import { Button } from "../Button/button"
import { Input } from "../Input/input"

const meta: Meta<typeof PopoverContent> = {
  title: "PiggyUI/Components/Popover",
  component: PopoverContent,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the popover content",
      defaultValue: "center",
    },
    sideOffset: {
      control: "number",
      description: "Offset between trigger and popover",
      defaultValue: 4,
    },
    content: {
      control: "text",
      description: "Text inside the popover",
      defaultValue: "Popover content",
    },
  },
}

export default meta
type Story = StoryObj<typeof PopoverContent>

export const Default: Story = {
  args: {
    align: "center",
    sideOffset: 4,
    content: "Popover content",
  },
  render: ({ align, sideOffset, content }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align={align} sideOffset={sideOffset}>
        <p className="text-sm text-muted-foreground">{content}</p>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Email</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">
              Update your email address.
            </p>
          </div>
          <Input placeholder="example@email.com" />
          <div className="flex justify-end">
            <Button size="sm">Save</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
