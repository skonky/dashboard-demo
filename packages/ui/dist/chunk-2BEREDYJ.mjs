import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function a(...r){return twMerge(clsx(r))}

export { a };
