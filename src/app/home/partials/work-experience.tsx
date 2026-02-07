'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { CompanyCard } from '@/components/work-experience/company-card';
import { CompanyExperience } from '@/components/work-experience/company-experience';

import { cn } from '@/lib/utils';

const WorkExperience = () => {
  return (
    <Section id='experience' title='My Work Experience' className=''>
      <div className='hidden md:block'>
        <CardsExperience>
          <CompanyCard
            icon='/company-logos/trust-pilot.svg'
            company='Trustpilot'
            year='2021-2024'
          />
          <CompanyExperience
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
          />
        </CardsExperience>

        <CardsExperience className='my-16'>
          <CompanyCard
            icon='/company-logos/postman.svg'
            company='Postman'
            year='2021-2024'
          />
          <CompanyExperience
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
          />
        </CardsExperience>

        <CardsExperience>
          <CompanyCard
            icon='/company-logos/spotify.svg'
            company='Spotify'
            year='2021-2024'
          />
          <CompanyExperience
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
            isLast={true}
          />
        </CardsExperience>
      </div>

      {/* Mobile */}
      <div className='block md:hidden'>
        <div className='relative space-y-6'>
          <div className='absolute left-4'></div>

          <MobileExperienceItem
            icon='/company-logos/trust-pilot.svg'
            company='Trustpilot'
            year='2021-2024'
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
          />

          <MobileExperienceItem
            icon='/company-logos/postman.svg'
            company='Postman'
            year='2021-2024'
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
          />

          <MobileExperienceItem
            icon='/company-logos/spotify.svg'
            company='Spotify'
            year='2021-2024'
            position='Frontend Developer'
            jobdesc='Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.'
            isLast={true}
          />
        </div>
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
    <div className='relative pl-10'>
      <div className='absolute left-1 flex h-6 w-6 items-center justify-center rounded-full border-1 border-dashed border-neutral-400'>
        <motion.div
          className='bg-primary-200 absolute top-1/2 left-1/2 z-10 aspect-square h-[16px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full'
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
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
        <div className='absolute top-6 left-4 z-0 h-full border-l-1 border-dashed border-neutral-400'></div>
      )}
    </div>
  );
};
