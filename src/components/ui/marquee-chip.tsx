import { reverse } from 'dns';

import React from 'react';

import { cn } from '@/lib/utils';

type MarqueeChipRowProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export const MarqueeChipRow: React.FC<MarqueeChipRowProps> = ({
  children,
  direction = 'left',
  speed = 25,
  className,
  pauseOnHover = true,
}) => {
  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden py-1',
        {
          'animate-marquee flex-row': direction === 'left',
          'animate-marquee-vertical flex-col': direction === 'right',
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '[animation-direction:reverse]': reverse,
        },
        className
      )}
    >
      <div
        className={cn(
          'animate-marquee flex whitespace-nowrap',
          direction === 'left'
            ? 'animate-marquee-left'
            : 'animate-marquee-right'
        )}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

type MarqueeChipContainerProps = {
  rows: React.ReactNode[];
  className?: string;
};

export const MarqueeChipContainer: React.FC<MarqueeChipContainerProps> = ({
  rows,
  className,
}) => {
  return (
    <div className={cn('flex w-full flex-col', className)}>
      {rows.map((row, index) => (
        <MarqueeChipRow
          key={index}
          direction={index % 2 === 0 ? 'left' : 'right'}
          speed={25 + index * 2}
        >
          {row}
        </MarqueeChipRow>
      ))}
    </div>
  );
};
