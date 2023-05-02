"use client"

import { useState } from "react"
import CalendarDateRangePicker from "@adhese/components/date-range"
import RenderMotion from "@adhese/components/render-motion"
import { cn } from "@adhese/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  Button,
  Calendar,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "ui"

type Indicator = {
  name: string
  value: number
}
const indicators: Indicator[] = [
  {
    name: "Impressions Last Week",
    value: 6317,
  },
  {
    name: "Impressions Yesterday",
    value: 2415,
  },
  {
    name: "Clicks Last Week",
    value: 1029,
  },
  {
    name: "Clicks Yesterday",
    value: 300,
  },
]

export default function AnalyticsPage() {
  const [date, setDate] = useState<Date>()
  return (
    <RenderMotion>
      <div>
        <h1 className="mb-3 ml-4 scroll-m-20 text-4xl font-bold tracking-tight transition-colors first:mt-0">
          Analytics
        </h1>
        <Separator />
        <div className="ml-4 mt-4">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Google AdWords Cost</h2>
              <CalendarDateRangePicker />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-10">
                {indicators.map((indicator) => (
                  <div key={indicator.name} className="">
                    <p className="text-sm text-gray-500">{indicator.name}</p>
                    <p className="text-2xl font-semibold">{indicator.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </RenderMotion>
  )
}
