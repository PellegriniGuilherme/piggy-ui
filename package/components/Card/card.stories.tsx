import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Button } from "../Button/button"

const meta: Meta<typeof Card> = {
  title: "PiggyUI/Components/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[--neutral-700]">
          This is the content of the card. You can add anything here.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">Footer text</p>
      </CardFooter>
    </Card>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Long Content</CardTitle>
        <CardDescription>With longer content inside the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithCustomColors: Story = {
  render: () => (
    <Card className="bg-brand-50 text-brand-800 border-brand-200">
      <CardHeader>
        <CardTitle>Branded Card</CardTitle>
        <CardDescription>Using brand variables manually</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with a light brand background and darker brand text.</p>
      </CardContent>
    </Card>
  ),
}
