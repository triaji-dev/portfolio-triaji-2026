import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({
  className,
  type,
  value,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'md:text-md-regular text-sm-regular bg-neutral-25 focus-visible:ring-primary-200 h-12 w-full rounded-xl border border-neutral-200 px-3 py-2 leading-5 text-neutral-700 transition-all outline-none focus-visible:ring-1 md:h-14 md:px-4 md:py-2.25 md:leading-7.5',
        className
      )}
      value={value ?? ''}
      {...props}
    />
  );
}

export { Input };
