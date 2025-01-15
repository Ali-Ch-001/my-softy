"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DatePickerWithPresetsProps {
  onDateChange: (date: Date | undefined) => void
}

export function DatePickerWithPresets({ onDateChange }: DatePickerWithPresetsProps) {
  const [date, setDate] = React.useState<Date>()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    onDateChange(selectedDate)
    setIsOpen(false) // Close the calendar after selection
  }

  const toggleCalendar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full">
      <Button
        variant={"outline"}
        className={cn(
          "w-full justify-start text-left font-normal flex items-center",
          !date && "text-pink-700"
        )}
        onClick={toggleCalendar}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="date-picker"
      >
        <CalendarIcon className="mr-2 h-4 w-4 text-pink-700" />
        {date ? format(date, "PPP") : <span className="text-pink-700">Pick a date</span>}
      </Button>

      {isOpen && (
        <div
          id="date-picker"
          className="mt-2 p-4 bg-pink-100 rounded-lg shadow-lg transition-transform duration-300"
        >
          <Select
            onValueChange={(value) =>
              handleDateChange(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger className="w-full bg-pink-200 text-pink-700">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-pink-100 text-pink-700">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-4">
            <Calendar
              className="bg-pink-50 text-pink-700"
              mode="single"
              selected={date}
              onSelect={handleDateChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}