'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

export const StackedCircles: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={cn('style', className)} style={style} ref={ref}>
      <motion.div
        className='flex-center relative'
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className='absolute rounded-full bg-[#6600EB]/20'
          style={{
            width: 'clamp(37.94rem, 82.62vw, 63.63rem)',
            height: 'clamp(37.94rem, 82.62vw, 63.63rem)',
          }}
          variants={circleVariants}
        />

        <motion.div
          className='absolute rounded-full bg-[#6600EB]/40'
          style={{
            width: 'clamp(29.79rem, 64.89vw, 49.96rem)',
            height: 'clamp(29.79rem, 64.89vw, 49.96rem)',
          }}
          variants={circleVariants}
        />

        <motion.div
          className='absolute rounded-full bg-[#6600EB]/60'
          style={{
            width: 'clamp(21.64rem, 47.13vw, 36.3rem)',
            height: 'clamp(21.64rem, 47.13vw, 36.3rem)',
          }}
          variants={circleVariants}
        />

        <motion.div
          className='absolute rounded-full bg-[#6600EB]/80'
          style={{
            width: 'clamp(13.49rem, 29.39vw, 22.63rem)',
            height: 'clamp(13.49rem, 29.39vw, 22.63rem)',
          }}
          variants={circleVariants}
        />
      </motion.div>
    </div>
  );
};
