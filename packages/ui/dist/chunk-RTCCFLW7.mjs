import { a as a$1 } from './chunk-2BEREDYJ.mjs';
import { c as c$1, b, a } from './chunk-DYNA3PMW.mjs';
import * as v from 'react';
import * as t from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { jsxs, jsx } from 'react/jsx-runtime';

var N=v.forwardRef((e,m)=>{var f=e,{className:i,children:a$2}=f,o=c$1(f,["className","children"]);return jsxs(t.Root,b(a({ref:m,className:a$1("relative z-10 flex flex-1 items-center justify-center",i)},o),{children:[a$2,jsx(c,{})]}))});N.displayName=t.Root.displayName;var R=v.forwardRef((m,o)=>{var e=m,{className:i}=e,a$2=c$1(e,["className"]);return jsx(t.List,a({ref:o,className:a$1("group flex flex-1 list-none items-center justify-center space-x-1",i)},a$2))});R.displayName=t.List.displayName;var C=t.Item,M=cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max"),P=v.forwardRef((e,m)=>{var f=e,{className:i,children:a$2}=f,o=c$1(f,["className","children"]);return jsxs(t.Trigger,b(a({ref:m,className:a$1(M(),"group",i)},o),{children:[a$2," ",jsx(ChevronDown,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}))});P.displayName=t.Trigger.displayName;var y=v.forwardRef((m,o)=>{var e=m,{className:i}=e,a$2=c$1(e,["className"]);return jsx(t.Content,a({ref:o,className:a$1("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",i)},a$2))});y.displayName=t.Content.displayName;var I=t.Link,c=v.forwardRef((m,o)=>{var e=m,{className:i}=e,a$2=c$1(e,["className"]);return jsx("div",{className:a$1("absolute left-0 top-full flex justify-center"),children:jsx(t.Viewport,a({className:a$1("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",i),ref:o},a$2))})});c.displayName=t.Viewport.displayName;var h=v.forwardRef((m,o)=>{var e=m,{className:i}=e,a$2=c$1(e,["className"]);return jsx(t.Indicator,b(a({ref:o,className:a$1("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",i)},a$2),{children:jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}))});h.displayName=t.Indicator.displayName;

export { N as a, R as b, C as c, M as d, P as e, y as f, I as g, c as h, h as i };