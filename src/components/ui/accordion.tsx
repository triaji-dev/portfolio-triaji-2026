'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'gap-5 border-b border-neutral-300 last:border-b-0',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group data-[state=open]:text-primary-300 text-md-semibold md:text-xl-semibold data-[state=closed]:hover:text-primary-300 flex flex-1 items-start justify-between gap-4 pb-5 text-left transition-all duration-500 hover:cursor-pointer md:pb-8 data-[state=closed]:text-neutral-950 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <div className='shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180'>
          <div className='group-hover:bg-primary-300 flex aspect-square h-6 items-center justify-center rounded-full bg-neutral-200 transition-all duration-300 group-data-[state=open]:hidden md:h-10'>
            <Plus
              className='h-[60%] w-[60%] text-neutral-950 group-hover:text-white'
              strokeWidth={2}
            />
          </div>

          <div className='bg-primary-300 flex aspect-square h-6 items-center justify-center rounded-full group-data-[state=closed]:hidden md:h-10'>
            <Minus className='h-[60%] w-[60%] text-white' strokeWidth={2} />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:text-md-regular text-sm-regular overflow-hidden text-neutral-700'
      {...props}
    >
      <div className={cn('pb-5 md:pb-8', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
