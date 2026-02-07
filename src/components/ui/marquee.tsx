import { ComponentPropsWithRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  repeat = 4, //repeat 4 times coz item nya sdkit, klo di set default (1) aja ga cukup
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden [--duration:30s] [--gap:0.5rem]',

        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
