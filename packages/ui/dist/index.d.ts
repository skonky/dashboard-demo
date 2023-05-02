export { Avatar, AvatarFallback, AvatarImage } from './avatar.js';
export { Badge, BadgeProps, badgeVariants } from './badge.js';
export { Button, ButtonProps, buttonVariants } from './button.js';
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card.js';
export { Calendar, CalendarProps } from './calendar.js';
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible.js';
export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog.js';
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './dropdown-menu.js';
export { Input, InputProps } from './input.js';
export { Label } from './label.js';
export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from './menubar.js';
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from './navigation-menu.js';
export { Popover, PopoverContent, PopoverTrigger } from './popover.js';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs.js';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip.js';
import { ToastProps, ToastActionElement } from './toast.js';
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast.js';
export { Toaster } from './toaster.js';
export { Separator } from './separator.js';
import * as React from 'react';
import '@radix-ui/react-avatar';
import 'class-variance-authority/dist/types';
import 'class-variance-authority';
import 'react-day-picker';
import '@radix-ui/react-collapsible';
import '@radix-ui/react-dialog';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-label';
import '@radix-ui/react-menubar';
import '@radix-ui/react-navigation-menu';
import '@radix-ui/react-popover';
import '@radix-ui/react-tabs';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-toast';
import '@radix-ui/react-separator';

type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
declare const reducer: (state: State, action: Action) => State;
interface Toast extends Omit<ToasterToast, "id"> {
}
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

export { ToastActionElement, ToastProps, reducer, toast, useToast };
