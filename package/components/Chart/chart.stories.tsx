import type { Meta, StoryObj } from '@storybook/react'
import * as Recharts from 'recharts'
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from './chart'

const sampleData = [
  { name: 'Jan', uv: 400, pv: 240, amt: 240 },
  { name: 'Feb', uv: 300, pv: 139, amt: 221 },
  { name: 'Mar', uv: 200, pv: 980, amt: 229 },
  { name: 'Apr', uv: 278, pv: 390, amt: 200 },
  { name: 'May', uv: 189, pv: 480, amt: 218 },
]

const meta: Meta<typeof ChartContainer> = {
  title: 'Components/Charts',
  component: ChartContainer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '600px', height: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ChartContainer>

const Template: Story = {
  render: (args) => <ChartContainer {...args} />,
}

export const BarChartStory: Story = {
  ...Template,
  name: 'Bar Chart',
  args: {
    id: 'bar-chart',
    config: {
      uv: {
        label: 'Usuários Visitantes',
        theme: {
          light: 'var(--color-secondary-500)',
          dark: 'var(--color-secondary-500)',
        },
      },
      pv: {
        label: 'Páginas Visualizadas',
        theme: {
          light: 'var(--color-brand-400)',
          dark: 'var(--color-brand-400)',
        },
      },
    },
    children: (
      <Recharts.BarChart
        data={sampleData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <Recharts.CartesianGrid strokeDasharray="3 3" />
        <Recharts.XAxis dataKey="name" />
        <Recharts.YAxis />
        <Recharts.Tooltip content={<ChartTooltipContent />} />
        <Recharts.Bar dataKey="uv" fill="var(--color-uv)" />
        <Recharts.Bar dataKey="pv" fill="var(--color-pv)" />
      </Recharts.BarChart>
    ),
  },
}

export const LineChartStory: Story = {
  ...Template,
  name: 'Line Chart',
  args: {
    id: 'line-chart',
    config: {
      amt: {
        label: 'Amount',
        theme: {
          light: 'var(--color-secondary-400)',
          dark: 'var(--color-brand-500)',
        },
      },
    },
    children: (
      <Recharts.LineChart
        data={sampleData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <Recharts.CartesianGrid strokeDasharray="3 3" />
        <Recharts.XAxis dataKey="name" />
        <Recharts.YAxis />
        <Recharts.Tooltip content={<ChartTooltipContent />} />
        <Recharts.Line type="monotone" dataKey="amt" stroke="var(--color-amt)" />
      </Recharts.LineChart>
    ),
  },
}

export const PieChartStory: Story = {
  ...Template,
  name: 'Pie Chart',
  args: {
    id: 'pie-chart',
    config: {
      uv: { label: 'Visitantes', color: 'var(--color-brand-400)' },
      pv: { label: 'Visualizações', color: 'var(--color-brand-300)' },
    },
    children: (
      <Recharts.PieChart>
        <Recharts.Pie
          data={sampleData}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="var(--color-uv)"
          label
        />
        <Recharts.Pie
          data={sampleData}
          dataKey="pv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          fill="var(--color-pv)"
          label
        />
        <Recharts.Tooltip content={<ChartTooltipContent />} />
        <ChartLegendContent payload={[]} verticalAlign="bottom" />
      </Recharts.PieChart>
    ),
  },
}
