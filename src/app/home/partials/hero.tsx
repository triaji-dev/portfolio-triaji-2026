'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import FeatureCard from '@/components/ui/feature-cards';
import { StackedCircles } from '@/components/ui/stacked-circles';

import { generateClamp } from '@/functions/generate-clamp';
import { generateClampInverse } from '@/functions/generate-clamp-inverse';

const Hero = () => {
  const ref = useRef(null);
  const animationPropsLeft = {
    initial: { x: 150, opacity: 0.1 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 70,
    },
  };
  const animationPropsRight = {
    initial: { x: -150, opacity: 0.1 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 70,
    },
  };
  const animationPropsBottomRight = {
    initial: { x: -100, y: 100, opacity: 0.1 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 70,
    },
  };
  const animationPropsTop = {
    initial: { y: 150, opacity: 0.1 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 70,
    },
  };
  return (
    <>
      <div
        id='Home'
        className='bg-primary-400 relative flex w-full flex-wrap justify-center'
      >
        <div
          className='relative w-[768px] overflow-hidden md:w-[1440px]'
          id='Hero'
          style={{
            height: generateClamp(701, 886, 1440),
          }}
          ref={ref}
        >
          <motion.h1
            initial={animationPropsTop.initial}
            whileInView={animationPropsTop.whileInView}
            viewport={animationPropsTop.viewport}
            transition={{
              ...animationPropsTop.transition,
              delay: 0.3,
            }}
            className='text-neutral-25 absolute left-1/2 z-20 w-full -translate-x-1/2 text-center font-extrabold'
            style={{
              fontSize: 'clamp(2.5rem, 10.17vw, 9.38rem)',
              lineHeight: 'clamp(2.13rem, 15.82vw, 12.19rem)',
              top: generateClamp(100, 144, 1440),
            }}
          >
            TRI AJI DEV
          </motion.h1>

          <StackedCircles
            className='absolute left-1/2 z-0 -translate-x-1/2'
            style={{ top: generateClamp(576, 751, 1440) }}
          />

          <motion.div
            initial={animationPropsTop.initial}
            whileInView={animationPropsTop.whileInView}
            viewport={animationPropsTop.viewport}
            transition={{
              ...animationPropsTop.transition,
              delay: 0.1,
            }}
            className='absolute left-1/2 z-20 aspect-square -translate-x-1/2'
            style={{
              height: generateClamp(424, 763, 1440),
              bottom: generateClampInverse(-75, 0, 1440),
            }}
          >
            <Image
              src='/images/profile-hero-purple1.png'
              alt='hero-image'
              fill
              className='z-50 object-contain md:translate-x-[6.3%]'
              priority
            />
          </motion.div>
          <motion.div
            initial={animationPropsBottomRight.initial}
            whileInView={animationPropsBottomRight.whileInView}
            viewport={animationPropsBottomRight.viewport}
            transition={{
              ...animationPropsBottomRight.transition,
              delay: 0.1,
            }}
          >
            <FeatureCard
              title='5.0'
              icon={
                <Image
                  src='/icons/5stars.svg'
                  alt='star'
                  width={200}
                  height={192}
                  className='object-contain'
                />
              }
              description='Many Client Trust with me'
              className='t translate-y-[5%] rotate-[6.73deg] md:translate-x-[4%] md:translate-y-[0%] md:rotate-[3.15deg]'
              style={{
                left: generateClamp(73, 313, 1440),
                top: generateClamp(185, 398, 1440),
                width: generateClamp(144, 200, 1440),
                height: generateClamp(136, 192, 1440),
                fontSize: generateClamp(24, 40, 1440),
                lineHeight: generateClamp(36, 48, 1440),
              }}
            />
          </motion.div>
          <motion.div
            initial={animationPropsRight.initial}
            whileInView={animationPropsRight.whileInView}
            viewport={animationPropsRight.viewport}
            transition={{
              ...animationPropsRight.transition,
              delay: 0.5,
            }}
          >
            <FeatureCard
              title='Frontend Developer'
              description={
                <span className='text-sm-medium flex items-center'>
                  <Icon
                    icon='bitcoin-icons:verify-filled'
                    className='text-base-white mr-0.5 h-6 w-auto md:mr-1'
                  />
                  React Expert
                </span>
              }
              className='translate-x-[-34%] translate-y-[20%] -rotate-[10.9deg] whitespace-nowrap md:translate-x-[0%] md:translate-y-[0%] md:-rotate-[3.24deg]'
              style={{
                // right: generateClamp(224, 920, 1440),
                left: generateClamp(0, 226, 1440),
                top: generateClamp(484, 658, 1440),
                width: generateClamp(166, 283, 1440),
                height: generateClamp(80, 104, 1440),
                fontSize: generateClamp(14, 24, 1440),
                lineHeight: generateClamp(24, 30, 1440),
                // rotate: generateClamp(-10.9, -3.24, 1440),
              }}
            />
          </motion.div>
          <motion.div
            initial={animationPropsLeft.initial}
            whileInView={animationPropsLeft.whileInView}
            viewport={animationPropsLeft.viewport}
            transition={{
              ...animationPropsLeft.transition,
              delay: 0.3,
            }}
          >
            <FeatureCard
              title='50+'
              description='Global Clients'
              className='md:display-xl-bold display-xs-bold translate-y-[5%] rotate-[5.31deg] md:translate-y-[0%]'
              style={{
                left: generateClamp(285, 950, 1440),
                top: generateClamp(443, 573, 1440),
                width: generateClamp(148, 208, 1440),
                height: generateClamp(136, 192, 1440),
                fontSize: generateClamp(24, 40, 1440),
                lineHeight: generateClamp(36, 56, 1440),
              }}
              imageSrc='/images/global-clients.png'
              width={168}
              height={52}
            />
          </motion.div>
        </div>
      </div>
      <div
        className='bg-primary-400 pointer-events-none! absolute left-1/2 z-[-1] ml-[-1vw] h-[150px] w-full -translate-x-1/2 -rotate-[1.89deg]'
        style={{ top: generateClamp(550, 750, 1440) }}
      />
      <div
        className='bg-base-white pointer-events-none! absolute left-1/2 z-1 h-[100px] w-full -translate-x-1/2 -rotate-[1.89deg]'
        style={{ top: generateClamp(700, 915, 1440) }}
      />
    </>
  );
};

export default Hero;
