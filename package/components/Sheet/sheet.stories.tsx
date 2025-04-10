import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./sheet"
import { Button } from "../Button/button"

const meta: Meta<typeof Sheet> = {
  title: "PiggyUI/Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sheet>

const ContentTemplate = ({
  side,
  triggerText,
}: {
  side: "top" | "right" | "bottom" | "left"
  triggerText: string
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">{triggerText}</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you’re done.
        </SheetDescription>
      </SheetHeader>

      <div className="flex flex-col gap-4 px-4 py-2 text-sm text-muted-foreground">
        <p>This is where you could add a form, info, or components.</p>
      </div>

      <SheetFooter>
        <Button variant="ghost">Cancel</Button>
        <Button>Save changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const Right: Story = {
  render: () => <ContentTemplate side="right" triggerText="Open Right Sheet" />,
}

export const Left: Story = {
  render: () => <ContentTemplate side="left" triggerText="Open Left Sheet" />,
}

export const Top: Story = {
  render: () => <ContentTemplate side="top" triggerText="Open Top Sheet" />,
}

export const Bottom: Story = {
  render: () => <ContentTemplate side="bottom" triggerText="Open Bottom Sheet" />,
}
