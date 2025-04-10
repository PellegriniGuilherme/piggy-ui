import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/popover"
import { Button } from "../Button"
import { Calendar } from "../Calendar"

export function DatePicker({
  value,
  onChange,
  placeholder = "Selecione uma data",
  className,
}: {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
}) {
  const [date, setDate] = React.useState<Date | undefined>(value)

  const handleSelect = (selected: Date | undefined) => {
    setDate(selected)
    onChange?.(selected)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-9 w-full min-w-[240px] justify-start text-left font-normal border border-neutral-300",
            "bg-neutral-50 text-neutral-900 placeholder-neutral-500 shadow-xs",
            "focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/50",
            "dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400 dark:border-neutral-600",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
