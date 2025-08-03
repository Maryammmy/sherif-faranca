"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDateToYYYYMMDD } from "@/lib/utils";
import { useEffect } from "react";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

interface IProps {
  name: string;
  resetTrigger: boolean;
}
export function DatePicker({ name, resetTrigger }: IProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));
  useEffect(() => {
    if (resetTrigger) {
      setDate(undefined);
      setMonth(undefined);
      setValue("");
    }
  }, [resetTrigger]);

  return (
    <div className="relative flex justify-between gap-2 items-center w-full">
      <Input
        id="date"
        value={value}
        placeholder="June 01, 2025"
        className="w-full"
        onChange={(e) => {
          const date = new Date(e.target.value);
          setValue(e.target.value);
          if (isValidDate(date)) {
            setDate(date);
            setMonth(date);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      {/* ✅ Hidden input to send ISO format date */}
      <Input type="hidden" name={name} value={formatDateToYYYYMMDD(date)} />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button id="date-picker">
            <CalendarIcon className="size-5 text-primary" />
            <span className="sr-only">Select date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              setDate(date);
              setValue(formatDate(date));
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
