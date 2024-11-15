import { format } from "date-fns";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type DatePickerProps = {
  label?: string;
  onChange?: (date: Date) => void;
  buttonClassName?: string;
};
export function DatePicker({
  label,
  onChange,
  buttonClassName,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const handleChange = (val: Date | undefined) => {
    if (val) {
      onChange?.(val);
    }
    setDate(val);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-between rounded-[4px] border-border  text-left font-normal outline-none",
            buttonClassName
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{label ? label : "Pick a date"}</span>
          )}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleChange}
          initialFocus
          className="w-full"
        />
      </PopoverContent>
    </Popover>
  );
}
