import { LogOut, Search, Settings, User, Wallet } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Dialog,
  Input,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "ui"

const AppMenu = ({ className = "" }) => {
  return (
    <div className={className}>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar className="mr-2 h-auto w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Frank Selhorst
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="flex gap-1">
              <User size={18} /> Profile
            </MenubarItem>
            <MenubarItem className="flex gap-1">
              <Settings size={18} /> Settings
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="flex gap-1">
              <Wallet size={18} /> Billing
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="flex gap-1">
              <LogOut size={18} />
              Logout
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab<MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window<MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo<MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo<MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Copy<MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Paste<MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <div className="absolute right-8 ml-auto inline-flex">
          <Popover>
            <PopoverTrigger>
              <Search size={16} />
            </PopoverTrigger>
            <PopoverContent className="flex gap-3">
              <Input placeholder="Search" />
            </PopoverContent>
          </Popover>
        </div>
      </Menubar>
    </div>
  )
}

export default AppMenu
