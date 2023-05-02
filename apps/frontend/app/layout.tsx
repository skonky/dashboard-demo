"use client"

import Sidebar from "@adhese/components/sidebar"
import { cn } from "@adhese/lib/utils"
import store from "@adhese/store/store"
import { Palette } from "lucide-react"
import { Toaster, useToast } from "ui"

import "ui/styles.css"
import "@adhese/styles/globals.css"
import { useEffect } from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { theme, mode } = store((state) => state)
  const { toast } = useToast()
  useEffect(() => {
    toast({
      title: "Subscribe to our newsletter!",
      description: (
        <div className="flex items-center gap-1">
          Want to increase your inbox spam? Sign up now for more!
        </div>
      ),
    })
  }, [])

  store.subscribe(({ theme, mode }) => {
    toast({
      title: "Toasty!",
      description: (
        <div className="flex items-center gap-1">
          <Palette className="w-4 text-primary" />
          Activated <strong>{mode}</strong> mode with <strong>{theme}</strong>{" "}
          theme
        </div>
      ),
    })
  })

  return (
    <>
      <html className={`${mode} ${theme}`} lang="en" suppressHydrationWarning>
        <head>
          <title>Adhese</title>
        </head>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased")}
        >
          <div className="relative m-auto flex min-h-screen max-w-6xl flex-row p-4">
            <Sidebar />
            <Toaster />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
