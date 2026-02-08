'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { CompanyCard } from '@/components/work-experience/company-card';
import { CompanyExperience } from '@/components/work-experience/company-experience';

import { workExperienceData } from '@/constants/work-experience-data';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 50, damping: 20 },
  },
};

const WorkExperience = () => {
  return (
    <Section id='experience' title='My Work Experience' className=''>
      <motion.div
        className='hidden md:block'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {workExperienceData.map((experience, index) => (
          <motion.div key={`desktop-${experience.company}`} variants={itemVariants}>
            <CardsExperience
              className={
                index !== 0 && index !== workExperienceData.length - 1
                  ? 'my-16'
                  : ''
              }
            >
              <CompanyCard
                icon={experience.icon}
                company={experience.company}
                year={experience.year}
              />
              <CompanyExperience
                position={experience.position}
                jobdesc={experience.jobdesc}
                isLast={index === workExperienceData.length - 1}
              />
            </CardsExperience>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile */}
      <div className='block md:hidden'>
        <motion.div
          className='relative space-y-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className='absolute left-4'></div>
          {workExperienceData.map((experience, index) => (
            <MobileExperienceItem 
              key={`mobile-${experience.company}`}
              icon={experience.icon}
              company={experience.company}
              year={experience.year}
              position={experience.position}
              jobdesc={experience.jobdesc}
              isLast={index === workExperienceData.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default WorkExperience;

type CardsExperienceProps = {
  children: React.ReactNode;
  className?: string;
};

const CardsExperience: React.FC<CardsExperienceProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn('grid grid-cols-[14.5rem_1.5rem_auto] gap-y-17', className)}
    >
      {children}
    </div>
  );
};


type MobileExperienceItemProps = {
  icon: string;
  company: string;
  year: string;
  position: string;
  jobdesc: string;
  isLast?: boolean;
};

const MobileExperienceItem: React.FC<MobileExperienceItemProps> = ({
  icon,
  company,
  year,
  position,
  jobdesc,
  isLast = false,
}) => {
  return (
    <motion.div className='relative pl-10' variants={itemVariants}>
      <div className='absolute left-1 flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-neutral-400'>
        <motion.div
          className='bg-primary-200 absolute top-1/2 left-1/2 z-10 aspect-square h-[16px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </div>

      <div>
        <Image
          src={icon}
          alt={company}
          width={102}
          height={32}
          className='h-8 w-auto transition-all duration-300 ease-in-out hover:scale-110'
        />
        <h3 className='text-md-semibold my-1 text-neutral-950'>{company}</h3>
        <p className='text-sm-regular mb-2 text-neutral-700'>{year}</p>
        <h4 className='text-md-semibold mb-1 text-neutral-950'>{position}</h4>
        <p className='text-sm-regular text-neutral-700'>{jobdesc}</p>
      </div>

      {!isLast && (
        <div className='absolute top-6 left-4 z-0 h-full border-l border-dashed border-neutral-400'></div>
      )}
    </motion.div>
  );
};
