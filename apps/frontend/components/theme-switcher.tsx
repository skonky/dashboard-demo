import store from "@adhese/store/store"
import { Palette } from "lucide-react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "ui"

const ThemeSwitcher = ({}) => {
  const { theme, setTheme, mode, setMode } = store((state) => state)
  return (
    <div className="ml-auto mr-[10px] self-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="Theme switcher"
            className="rounded-3xl border-primary p-[11px] "
            variant="ghost"
          >
            <Palette className="w-4 text-primary" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select a theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="adhese">Adhese</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="ahold">Ahold</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="jumbo">Jumbo</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="tweakers">
              Tweakers
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuLabel>Select a mode</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={mode} onValueChange={setMode}>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ThemeSwitcher
