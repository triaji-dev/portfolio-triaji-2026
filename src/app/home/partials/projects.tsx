'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { LatestWorksData } from '@/constants/latest-works-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 50, damping: 20 },
  },
};

const LatestWork = () => {
  return (
    <Section id='projects' title='My Latest Work' className='md:pb-16!'>
      <Cards>
        {LatestWorksData.map((work, index) => (
          <Card
            key={index}
            dashboard={work.dashboard}
            year={work.year}
            image={work.image}
            title={work.title}
            visit={work.visit}
            icon={work.icon}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default LatestWork;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <motion.div
      className='flex flex-wrap gap-y-6 md:gap-x-5 md:gap-y-10'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

type CardProps = {
  dashboard: string;
  year: string;
  image: StaticImageData;
  title: string;
  visit: string;
  icon: string;
};

const Card: React.FC<CardProps> = ({
  dashboard,
  year,
  image,
  title,
  visit,
  icon,
}) => {
  return (
    <motion.div
      className='flex-1 basis-91'
      variants={cardVariants}
      whileHover='hover'
      initial='initial'
      animate='initial'
    >
      <div className='flex-between md:text-sm-regular text-xs-regular mb-5 gap-2.5 text-neutral-950'>
        <div className='rounded-full border border-dashed border-neutral-400 px-4 py-1'>
          <h4>{dashboard}</h4>
        </div>
        <div className='rounded-full border border-dashed border-neutral-400 px-4 py-1'>
          <h4>{year}</h4>
        </div>
      </div>
      <motion.div
        className='relative h-71 w-full overflow-hidden rounded-lg shadow-[0_0_25px_rgba(102,0,235,0.08)] md:rounded-xl'
        variants={{
          hover: {
            y: -8,
            boxShadow: '0 20px 40px -5px rgba(102,0,235,0.15)',
          },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          className='relative h-full w-full'
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={image}
            alt='project'
            fill
            className='object-cover'
          />
        </motion.div>
      </motion.div>
      <h3 className='md:text-xl-semibold text-md-semibold my-5 text-neutral-950'>
        {title}
      </h3>
      <motion.div
        className='flex-start gap-2'
        variants={{
          hover: { x: 5 },
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <p className='md:text-md-medium text-sm-medium text-primary-300 hover:cursor-pointer'>
          {visit}
        </p>
        <motion.div
          variants={{
            hover: { scale: 1.2 },
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src={icon}
            alt='icon'
            width={24}
            height={24}
            className='hover:cursor-pointer'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
