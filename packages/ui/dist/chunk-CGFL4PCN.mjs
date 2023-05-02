import { a as a$1 } from './chunk-2BEREDYJ.mjs';
import { c, a } from './chunk-DYNA3PMW.mjs';
import * as n from 'react';
import { cva } from 'class-variance-authority';
import { jsx } from 'react/jsx-runtime';

var f=cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef((b,u)=>{var e=b,{className:i,variant:a$2,size:s}=e,d=c(e,["className","variant","size"]);return jsx("button",a({className:a$1(f({variant:a$2,size:s,className:i})),ref:u},d))});l.displayName="Button";

export { f as a, l as b };
