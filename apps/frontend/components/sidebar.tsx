"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import {
  Circle,
  Cookie,
  Leaf,
  LucideIcon,
  PieChart,
  Wallet,
} from "lucide-react"
import { Avatar, AvatarFallback, Button, Separator } from "ui"

import ThemeSwitcher from "./theme-switcher"

type SidebarLink = {
  href: string
  name: string
  icon: LucideIcon
  targetSegment?: string | null
  enabled: boolean
}

type Campaign = {
  name: string
  href: string
}

const links: SidebarLink[] = [
  {
    href: "/",
    name: "Overview",
    icon: Circle,
    targetSegment: null,
    enabled: true,
  },
  {
    href: "/analytics",
    name: "Analytics",
    icon: Cookie,
    targetSegment: "analytics",
    enabled: true,
  },
  {
    href: "/reports",
    name: "Reports",
    icon: PieChart,
    targetSegment: "reports",
    enabled: true,
  },
  {
    href: "/#",
    name: "Billing",
    icon: Wallet,
    targetSegment: "billing",
    enabled: true,
  },
  {
    href: "/campaigns",
    name: "Campaigns",
    icon: Leaf,
    targetSegment: "campaigns",
    enabled: false,
  },
]

const campaigns: Campaign[] = [
  {
    name: "Ahold ad shop",
    href: "/campaigns/1",
  },
  {
    name: "Delhaize and Albert Heijn",
    href: "/campaigns/2",
  },
  {
    name: "Mannenmedia zomertour",
    href: "/campaigns/3",
  },
]

const Sidebar = () => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <div className="sidebar w-1/4 min-w-[255px] border-r">
      <div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>DD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-left text-sm font-semibold">Donald Duck</p>
            <p className="text-left text-sm text-gray-500">Adhese Admin</p>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator className="my-3" />
      <div>
        <ul className="mr-4">
          {links.map((link) => (
            <li className="pl-0" key={link.href}>
              <Link href={link.href} className="flex items-center gap-2">
                <Button
                  disabled={!link.enabled}
                  variant={
                    activeSegment === link.targetSegment ? "default" : "ghost"
                  }
                  className="w-full justify-start text-left"
                >
                  <link.icon className="mr-2 h-4 w-4" /> {link.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator className="my-3" />
      <div>
        <p className="ml-4 flex items-center text-xs text-muted-foreground">
          Campaigns
        </p>
        <ul className="mr-4">
          {campaigns.map((campaign) => (
            <li key={campaign.href}>
              <Link href={"#" + campaign.href}>
                <Button className="text-left" variant="link">
                  {campaign.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Sidebar
