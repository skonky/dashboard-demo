import { create } from "zustand"

type Mode = "light" | "dark"
type Theme = "adhese" | "ahold" | "bol" | "jumbo" | "tweakers"
type Store = {
  theme: Theme
  setTheme: (theme: Theme) => void
  mode: Mode
  setMode: (mode: Mode) => void
}
const store = create<Store>((set) => ({
  theme: "adhese",
  setTheme: (theme) => set(() => ({ theme })),
  mode: "dark",
  setMode: (mode) => set(() => ({ mode })),
}))

export default store
