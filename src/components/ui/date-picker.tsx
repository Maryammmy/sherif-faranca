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

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime());
}

interface IProps {
  name: string;
  value?: string; // <-- string بدل Date
  onChange?: (date: string | undefined) => void; // <-- يرجع string
  resetTrigger?: boolean;
  serverAction?: boolean;
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
  const [displayValue, setDisplayValue] = React.useState(formatDate(date));

  // لو حصل reset
  useEffect(() => {
    if (resetTrigger) {
      setDate(undefined);
      setMonth(undefined);
      setDisplayValue("");
    }
  }, [resetTrigger]);

  // لو propValue اتغيرت من بره
  useEffect(() => {
    if (propValue) {
      const d = new Date(propValue);
      if (isValidDate(d)) {
        setDate(d);
        setMonth(d);
        setDisplayValue(formatDate(d));
      }
    }
  }, [propValue]);

  return (
    <div className="relative flex justify-between gap-2 items-center w-full">
      <Input
        id="date"
        value={displayValue}
        placeholder="June 01, 2025"
        className="w-full"
        onChange={(e) => {
          const d = new Date(e.target.value);
          setDisplayValue(e.target.value);
          if (isValidDate(d)) {
            setDate(d);
            setMonth(d);
            onChange?.(formatDateToYYYYMMDD(d)); // نبعته كـ string
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />

      {/* hidden input هيتبعت كـ string ISO */}
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
            selected={date}
            month={month}
            onMonthChange={setMonth}
            onSelect={(d) => {
              if (!d) return;
              setDate(d);
              setDisplayValue(formatDate(d));
              setOpen(false);
              onChange?.(formatDateToYYYYMMDD(d)); // string ISO
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
