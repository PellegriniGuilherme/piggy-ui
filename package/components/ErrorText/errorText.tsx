import * as React from "react"
import { cn } from "../../lib/utils"

export type ErrorTextProps = React.HTMLAttributes<HTMLParagraphElement>;

const ErrorText = ({ className, ...props }: ErrorTextProps) => (
  <p
    className={cn("text-sm text-danger-600 mt-1", className)}
    {...props}
  />
)

export { ErrorText }
