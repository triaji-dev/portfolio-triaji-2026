'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

type CompanyExperienceProps = {
  position: string;
  jobdesc: string;
  isLast?: boolean;
};

export const CompanyExperience: React.FC<CompanyExperienceProps> = ({
  position,
  jobdesc,
  isLast = false,
}) => {
  return (
    <>
      <div
        className={cn(
          'group relative mb-4 last:mb-0 md:mb-8 [&:nth-last-child(2)]:mb-0',
          //target child
          '[&:nth-last-child(2)>.line-decoration]:h-1/2'
        )}
      >
        {/*line decoration*/}
        {!isLast && (
          <div className='absolute top-10 right-1 h-[calc(100%+1.5rem)] border-l-1 border-dashed border-neutral-400' />
        )}
        {/*index circle*/}
        <div className='absolute flex aspect-square h-10 w-auto items-center justify-center rounded-full border-1 border-dashed border-neutral-400'>
          <motion.div
            className='bg-primary-200 absolute top-1/2 left-1/2 z-10 aspect-square h-[1.5rem] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full'
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      <div className='mt-1 ml-7'>
        <h3 className='text-xl-semibold mb-4 text-neutral-950'>{position}</h3>
        <p className='text-md-regular text-neutral-700'>{jobdesc}</p>
      </div>
    </>
  );
};
