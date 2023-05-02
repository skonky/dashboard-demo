import { a as a$1 } from './chunk-2BEREDYJ.mjs';
import { c, a, b } from './chunk-DYNA3PMW.mjs';
import * as e from '@radix-ui/react-menubar';
import { ChevronRight, Check, Circle } from 'lucide-react';
import * as d from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

var W=e.Menu,L=e.Group,G=e.Portal,z=e.Sub,H=e.RadioGroup,v=d.forwardRef((n,r)=>{var i=n,{className:t}=i,a$2=c(i,["className"]);return jsx(e.Root,a({ref:r,className:a$1("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",t)},a$2))});v.displayName=e.Root.displayName;var y=d.forwardRef((n,r)=>{var i=n,{className:t}=i,a$2=c(i,["className"]);return jsx(e.Trigger,a({ref:r,className:a$1("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",t)},a$2))});y.displayName=e.Trigger.displayName;var g=d.forwardRef((m,i)=>{var f=m,{className:t,inset:a$2,children:r}=f,n=c(f,["className","inset","children"]);return jsxs(e.SubTrigger,b(a({ref:i,className:a$1("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a$2&&"pl-8",t)},n),{children:[r,jsx(ChevronRight,{className:"ml-auto h-4 w-4"})]}))});g.displayName=e.SubTrigger.displayName;var x=d.forwardRef((n,r)=>{var i=n,{className:t}=i,a$2=c(i,["className"]);return jsx(e.SubContent,a({ref:r,className:a$1("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t)},a$2))});x.displayName=e.SubContent.displayName;var N=d.forwardRef((f,m)=>{var l=f,{className:t,align:a$2="start",alignOffset:r=-4,sideOffset:n=8}=l,i=c(l,["className","align","alignOffset","sideOffset"]);return jsx(e.Portal,{children:jsx(e.Content,a({ref:m,align:a$2,alignOffset:r,sideOffset:n,className:a$1("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-top-1",t)},i))})});N.displayName=e.Content.displayName;var h=d.forwardRef((i,n)=>{var m=i,{className:t,inset:a$2}=m,r=c(m,["className","inset"]);return jsx(e.Item,a({ref:n,className:a$1("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a$2&&"pl-8",t)},r))});h.displayName=e.Item.displayName;var C=d.forwardRef((m,i)=>{var f=m,{className:t,children:a$2,checked:r}=f,n=c(f,["className","children","checked"]);return jsxs(e.CheckboxItem,b(a({ref:i,className:a$1("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:r},n),{children:[jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:jsx(e.ItemIndicator,{children:jsx(Check,{className:"h-4 w-4"})})}),a$2]}))});C.displayName=e.CheckboxItem.displayName;var I=d.forwardRef((i,n)=>{var m=i,{className:t,children:a$2}=m,r=c(m,["className","children"]);return jsxs(e.RadioItem,b(a({ref:n,className:a$1("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t)},r),{children:[jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:jsx(e.ItemIndicator,{children:jsx(Circle,{className:"h-2 w-2 fill-current"})})}),a$2]}))});I.displayName=e.RadioItem.displayName;var w=d.forwardRef((i,n)=>{var m=i,{className:t,inset:a$2}=m,r=c(m,["className","inset"]);return jsx(e.Label,a({ref:n,className:a$1("px-2 py-1.5 text-sm font-semibold",a$2&&"pl-8",t)},r))});w.displayName=e.Label.displayName;var S=d.forwardRef((n,r)=>{var i=n,{className:t}=i,a$2=c(i,["className"]);return jsx(e.Separator,a({ref:r,className:a$1("-mx-1 my-1 h-px bg-muted",t)},a$2))});S.displayName=e.Separator.displayName;var T=r=>{var n=r,{className:t}=n,a$2=c(n,["className"]);return jsx("span",a({className:a$1("ml-auto text-xs tracking-widest text-muted-foreground",t)},a$2))};T.displayname="MenubarShortcut";

export { W as a, L as b, G as c, z as d, H as e, v as f, y as g, g as h, x as i, N as j, h as k, C as l, I as m, w as n, S as o, T as p };