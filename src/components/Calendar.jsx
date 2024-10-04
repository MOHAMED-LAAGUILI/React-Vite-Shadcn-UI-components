

import { Calendar } from "@/components/ui/calendar"
import {useState} from 'react';

export function CalendarDemo() {
  const [date, setDate] = useState();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
