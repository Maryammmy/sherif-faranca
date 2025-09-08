"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Calendar } from "@/src/components/ui/calendar";
import { Input } from "@/src/components/ui/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { formatDateToYYYYMMDD } from "@/src/lib/utils";
import { useEffect } from "react";

interface IProps {
  name: string;
  value?: string;
  onChange?: (date: string | undefined) => void;
  resetTrigger?: boolean;
  serverAction?: boolean;
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime());
}

export function DatePicker({
  name,
  value: propValue,
  onChange,
  resetTrigger,
  serverAction = false,
}: IProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    propValue ? new Date(propValue) : undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [displayValue, setDisplayValue] = React.useState(propValue || "");

  // Reset input
  useEffect(() => {
    if (resetTrigger) {
      setDate(undefined);
      setMonth(undefined);
      setDisplayValue("");
    }
  }, [resetTrigger]);

  // Update when propValue changes
  useEffect(() => {
    if (propValue) {
      setDisplayValue(propValue);
      const d = new Date(propValue);
      if (isValidDate(d)) {
        setDate(d);
        setMonth(d);
      }
    }
  }, [propValue]);

  return (
    <div className="relative flex justify-between gap-2 items-center w-full">
      <Input
        id="date"
        value={displayValue}
        placeholder="YYYY-MM-DD"
        className="w-full"
        onChange={(e) => {
          const val = e.target.value;
          setDisplayValue(val); // show exactly what user types
          onChange?.(val); // update RHF state for live validation
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />

      {serverAction && (
        <Input
          type="hidden"
          name={name}
          value={date ? formatDateToYYYYMMDD(date) : ""}
        />
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button id="date-picker">
            <CalendarIcon className="size-5 text-primary" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="end" sideOffset={10}>
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={date}
            month={month}
            onMonthChange={setMonth}
            onSelect={(d) => {
              if (!d) return;
              setDate(d);
              const formatted = formatDateToYYYYMMDD(d);
              setDisplayValue(formatted); // format only when calendar selects
              setOpen(false);
              onChange?.(formatted);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
