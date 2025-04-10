import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "./calendar"
import { useState } from "react"
import type { DateRange } from "react-day-picker"

const meta: Meta<typeof Calendar> = {
  title: "PiggyUI/Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
    },
    selected: { control: false },
    onSelect: { action: "onSelect" },
  },
}
export default meta

type Story = StoryObj<typeof Calendar>

const CalendarWrapper = ({
  mode,
  ...args
}: {
  mode?: "single" | "multiple" | "range" | "default"
}) => {
  const [single, setSingle] = useState<Date | undefined>(new Date())
  const [multiple, setMultiple] = useState<Date[]>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 1)),
  ])
  const [range, setRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 3)),
    to: new Date(),
  })

  if (mode === "range") {
    return (
      <Calendar
        {...args}
        mode="range"
        selected={range}
        onSelect={(value) => {
          setRange(value as DateRange)
        }}
      />
    )
  }

  if (mode === "multiple") {
    return (
      <Calendar
        {...args}
        mode="multiple"
        selected={multiple}
        onSelect={(value) => {
          setMultiple(value as Date[])
        }}
      />
    )
  }

  return (
    <Calendar
      {...args}
      mode="single"
      selected={single}
      onSelect={(value) => {
        setSingle(value as Date)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <CalendarWrapper {...args} />,
  args: {
    mode: "single",
  },
}

export const Range: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(new Date().setDate(new Date().getDate() - 3)),
      to: new Date(),
    },
  },
}

export const Multiple: Story = {
  args: {
    mode: "multiple",
    selected: [
      new Date(),
      new Date(new Date().setDate(new Date().getDate() - 1)),
    ],
  },
}
