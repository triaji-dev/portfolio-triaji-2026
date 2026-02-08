import { cn } from '@/lib/utils';

type PaginationDotsProps = {
  count: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
  size?: 'sm' | 'md';
};

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  count,
  current,
  onDotClick,
  className,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { active: 'h-2.5 w-8', inactive: 'h-2.5 w-4' },
    md: { active: 'h-3 w-8', inactive: 'h-3 w-4' },
  };

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            'cursor-pointer rounded-full transition-colors duration-300',
            index === current
              ? cn('bg-primary-200', sizeClasses[size].active)
              : cn(
                  'bg-neutral-300 hover:bg-neutral-400',
                  sizeClasses[size].inactive
                )
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
