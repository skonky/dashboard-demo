import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): JSX.Element;

export { Badge, BadgeProps, badgeVariants };
