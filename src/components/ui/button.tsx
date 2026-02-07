import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex-center shrink-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-25 rounded-full text-sm-medium font-medium text-neutral-950 hover:scale-105 hover:bg-neutral-25 active:bg-primary-100 transition-all duration-300 ease cursor-pointer',

        secondary:
          'bg-primary-300 rounded-full text-neutral-25 text-sm-medium font-medium md:text-md-medium hover:scale-105 transition-all duration-300 ease cursor-pointer',

        link: 'text-md-medium text-primary-300 hover:underline hover:text-primary-200 active:text-primary-100 transition-colors duration-300 cursor-pointer',

        pagiActive:
          'bg-primary-200 h-3 w-8 cursor-pointer rounded-full transition-colors duration-300 hover:bg-neutral-300',

        pagiInactive:
          'hover:bg-primary-200 h-3 w-4 cursor-pointer rounded-full bg-neutral-300 transition-colors duration-300',
      },
      size: {
        default: 'h-12 px-11.5',
        pagination: 'h-3 w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
