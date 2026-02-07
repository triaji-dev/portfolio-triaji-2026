import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { generateClamp } from '@/functions/generate-clamp';
import { cn } from '@/lib/utils';

type FeatureCardsProps = {
  title: string;
  icon?: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  imageSrc?: string | StaticImageData;
  width?: number;
  height?: number;
};

const FeatureCard: React.FC<FeatureCardsProps> = ({
  title,
  icon,
  description,
  className,
  style,
  imageSrc,
  width,
  height,
}) => {
  return (
    <div
      className={cn(
        'absolute z-10 flex flex-col justify-between border border-[#FDFDFD]/10 bg-[#282828]/20 backdrop-blur-lg',
        className
      )}
      style={{
        ...style,
        padding: generateClamp(12, 20, 1440),
        rowGap: generateClamp(4, 6, 1440),
        borderRadius: generateClamp(12, 20, 1440),
      }}
    >
      <h3 className='text-neutral-25 font-bold'>{title}</h3>
      {icon && <div className='flex-between h-auto w-full'>{icon}</div>}
      <p
        className='text-neutral-25 font-medium'
        style={{
          fontSize: generateClamp(12, 14, 1440),
          lineHeight: generateClamp(20, 28, 1440),
        }}
      >
        {description}
      </p>
      {imageSrc && (
        <div className='flex-between h-auto w-full'>
          <Image
            src={imageSrc}
            alt={title}
            width={width}
            height={height}
            // className='h-[40px] w-[124px] md:h-[52px] md:w-[168px]'
            className='aspect-auto'
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
