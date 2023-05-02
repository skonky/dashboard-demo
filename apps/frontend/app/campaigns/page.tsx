"use client"

import RenderMotion from "@adhese/components/render-motion"
import { Separator } from "ui"

export default function CampaignsPage() {
  return (
    <RenderMotion>
      <div>
        <h1 className="mb-3 ml-4 scroll-m-20 text-4xl font-bold tracking-tight transition-colors first:mt-0">
          Campaigns
        </h1>
      </div>
      <Separator />
    </RenderMotion>
  )
}
