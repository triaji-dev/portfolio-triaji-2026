import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
  style,
}) => {
  return (
    <div
      id={id}
      className={cn('custom-container py-10 pt-10 md:py-20', className)}
      style={style}
    >
      <div className='text-center'>
        <h2 className='md:display-2xl-bold display-md-bold pb-6 text-neutral-950 md:pb-12'>
          {title}
        </h2>
        <p className=''>{subtitle}</p>
      </div>
      <div className=''>{children}</div>
    </div>
  );
};
