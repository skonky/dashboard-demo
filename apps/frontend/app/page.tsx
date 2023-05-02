"use client"

import RenderMotion from "@adhese/components/render-motion"
import { motion } from "framer-motion"
import { Button, Card, CardContent, CardHeader, CardTitle, Separator } from "ui"

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
  {
    name: "Active Campaigns",
    value: 10,
  },
  {
    name: "Open Options",
    value: 2,
  },
]

export default function IndexPage() {
  return (
    <RenderMotion>
      <div>
        <h1 className="mb-3 ml-4 scroll-m-20 text-4xl font-bold tracking-tight transition-colors first:mt-0">
          Dashboard
        </h1>
        <Separator />
        <div className="ml-4 mt-4">
          <RenderMotion delay={0.25}>
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <Button>Download</Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Key Performance Indicators</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-10">
                  {indicators.map((indicator) => (
                    <div key={indicator.name} className="">
                      <p className="text-sm text-gray-500">{indicator.name}</p>
                      <p className="text-2xl font-semibold">
                        {indicator.value}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </RenderMotion>
          <RenderMotion delay={0.5}>
            <div className="mt-8">
              <h2 className="mb-3 text-2xl font-semibold">Active Campaigns</h2>
              <div className="flex flex-row gap-3">
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                  }}
                >
                  <Card className="w-full hover:bg-primary hover:text-primary-foreground">
                    <CardHeader>
                      <CardTitle>Ahold Delhaize</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                  }}
                >
                  <Card className="w-full hover:bg-primary hover:text-primary-foreground">
                    <CardHeader>
                      <CardTitle>Tweakers.net</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                  }}
                >
                  <Card className="w-full hover:bg-primary hover:text-primary-foreground">
                    <CardHeader>
                      <CardTitle>Mannenmedia</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              </div>
            </div>
          </RenderMotion>
        </div>
      </div>
    </RenderMotion>
  )
}
