import type { Meta, StoryObj } from "@storybook/react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "./dialog"
import { Button } from "../Button/button"
import { Label } from "../Label/label"
import { Input } from "../Input/input"

const meta: Meta<typeof Dialog> = {
  title: "PiggyUI/Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Category</DialogTitle>
          <DialogDescription>
            Fill in the fields below to create a new category.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter category name"
              className="rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </form>

        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancel
          </Button>
          <Button type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

