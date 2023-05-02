import "@adhese/styles/globals.css"
import "ui/styles.css"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
