import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md border bg-neutral-50 px-3 py-1 text-base shadow-xs transition-colors outline-none",
          "text-neutral-900 placeholder-neutral-500 selection:bg-brand-500 selection:text-white",
          "border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/50",
          "aria-invalid:border-danger-500 aria-invalid:ring-danger-500/30",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400 dark:border-neutral-600",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
