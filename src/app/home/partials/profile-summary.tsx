'use client';

import { motion } from 'framer-motion';
import React from 'react';

import DigitalProducts from '@/components/profile-summary/DigitalProducts';
import Experience from '@/components/profile-summary/Experience';
import ExpertSkill from '@/components/profile-summary/ExpertSkill';
import PersonBlock from '@/components/profile-summary/PersonBlock';
import WhyChoose from '@/components/profile-summary/WhyChoose';

export const ProfileSummaryBase: React.FC = () => {
  return (
    <div id='about' className='custom-container mt-13 flex flex-wrap md:mt-28'>
      <p className='md:text-lg-semibold text-md-semibold text-neutral-950'>
        Hi, I&apos;m TRI AJI DEV 👋
      </p>
      <h2 className='md:display-md-semibold text-xl-semibold mt-3 text-neutral-950 md:mt-4'>
        Building digital products with a focus on crafting visually engaging and
        seamless user interfaces using React.js.{' '}
        <span className='text-neutral-400'>
          Prioritizing responsive design, performance optimization, and
          user-centric features to deliver exceptional web experiences.
        </span>
      </h2>
      <motion.div className='mx-auto mt-6 flex flex-wrap gap-5 overflow-hidden md:mt-12'>
        <motion.div
          className='min-w-[300px] flex-1 basis-[30%]'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 70, delay: 0 }}
        >
          <WhyChoose className='h-full w-full' />
        </motion.div>

        <motion.div
          className='min-w-[300px] flex-1 basis-[30%]'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 70,
            delay: 0.1,
          }}
        >
          <ExpertSkill className='h-full w-full' />
        </motion.div>

        <motion.div
          className='min-w-[300px] flex-1 basis-[30%]'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 70,
            delay: 0.2,
          }}
        >
          <Experience className='h-full w-full px-6.5 py-7.25 md:px-9 md:py-7' />
        </motion.div>

        <motion.div
          className='min-h-[374px] min-w-[300px] flex-1 basis-[30%]'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 70,
            delay: 0.3,
          }}
        >
          <PersonBlock className='h-full w-full p-7.75' />
        </motion.div>

        <motion.div
          className='min-w-[300px] flex-2 basis-[62%]'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 70,
            delay: 0.4,
          }}
        >
          <DigitalProducts className='px-4.5 pt-8 pb-9 md:px-6 md:pt-6 md:pb-8' />
        </motion.div>
      </motion.div>
    </div>
  );
};
