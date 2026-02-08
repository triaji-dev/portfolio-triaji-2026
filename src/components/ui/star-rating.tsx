import { Icon } from '@iconify/react';

import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  iconStyle?: 'filled' | 'rounded';
  className?: string;
  starClassName?: string;
  showValue?: boolean;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  iconStyle = 'filled',
  className,
  starClassName,
  showValue = false,
}) => {
  const iconMap = {
    filled: 'line-md:star-filled',
    rounded: 'material-symbols:star-rounded',
  };

  return (
    <div className={cn('flex items-center gap-0', className)}>
      {Array.from({ length: Math.min(rating, maxRating) }).map((_, index) => (
        <Icon
          key={index}
          icon={iconMap[iconStyle]}
          className={cn('text-secondary-200 text-3xl', starClassName)}
        />
      ))}
      {showValue && <span>{rating}</span>}
    </div>
  );
};
