import type { Meta, StoryObj } from "@storybook/react"
import { DatePicker } from "./datePicker"

const meta: Meta<typeof DatePicker> = {
  title: "PiggyUI/Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido quando nenhuma data está selecionada",
      defaultValue: "Selecione uma data",
    },
    value: {
      control: "date",
      description: "Valor inicial da data",
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    placeholder: "Selecione uma data",
  },
  render: (args) => <DatePicker {...args} />,
}
