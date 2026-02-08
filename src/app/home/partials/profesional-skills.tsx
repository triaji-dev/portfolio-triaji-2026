'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PaginationDots } from '@/components/ui/pagination-dots';

import { ProfessionalSkillsData } from '@/constants/professional-skills-data';
import { generateClamp } from '@/functions/generate-clamp';
import { useCarouselPagination } from '@/hooks/useCarouselPagination';

export const ProfessionalSkills = () => {
  const mobile = useCarouselPagination();
  const desktop = useCarouselPagination();

  const groupedSkillsDesktop = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < ProfessionalSkillsData.length; i += 6) {
      result.push(ProfessionalSkillsData.slice(i, i + 6));
    }
    return result;
  }, []);

  const groupedSkillsMobile = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < ProfessionalSkillsData.length; i += 3) {
      result.push(ProfessionalSkillsData.slice(i, i + 3));
    }
    return result;
  }, []);

  return (
    <Section
      id='skills'
      title='My Professional Skills'
      className='items-center justify-center'
    >
      {/* Mobile */}
      <div className='md:hidden'>
        <Carousel
          setApi={mobile.setApi}
          className='mx-auto w-full px-0'
          opts={{ loop: true, align: 'center', containScroll: 'trimSnaps' }}
        >
          <CarouselContent className='gap-5'>
            {groupedSkillsMobile.map((group, groupIndex) => (
              <CarouselItem
                key={`mobile-page-${groupIndex}`}
                className='flex items-center justify-center'
              >
                <SkillCards>
                  {group.map((skill) => (
                    <SkillCard
                      key={`mobile-skill-${skill.title}`}
                      icon={skill.icon}
                      title={skill.title}
                      description={skill.description}
                      percentage={Number(skill.percentage)}
                    />
                  ))}
                </SkillCards>
              </CarouselItem>
            ))}
          </CarouselContent>
          <PaginationDots
            count={mobile.count}
            current={mobile.current}
            onDotClick={mobile.scrollTo}
            className='mt-3'
          />
        </Carousel>
      </div>

      {/* Desktop*/}
      <div className='relative hidden md:block'>
        <Carousel
          setApi={desktop.setApi}
          className='custom-container mx-auto w-full px-0'
          opts={{
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent className='gap-5'>
            {groupedSkillsDesktop.map((group, groupIndex) => (
              <CarouselItem key={`page-${groupIndex}`} className='flex-center'>
                <SkillCards>
                  {group.map((skill) => (
                    <SkillCard
                      key={`desktop-skill-${skill.title}`}
                      icon={skill.icon}
                      title={skill.title}
                      description={skill.description}
                      percentage={Number(skill.percentage)}
                    />
                  ))}
                </SkillCards>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <PaginationDots
          count={groupedSkillsDesktop.length}
          current={desktop.current}
          onDotClick={desktop.scrollTo}
          className='mt-6 md:mt-9'
        />
      </div>
    </Section>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 50,
      damping: 15,
      mass: 1,
    },
  },
};

type SkillCardsProps = {
  children: React.ReactNode;
};

const SkillCards: React.FC<SkillCardsProps> = ({ children }) => {
  return (
    <motion.div
      className='flex w-full flex-wrap justify-center gap-4 md:gap-5'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

type SkillCardProps = {
  icon: string | StaticImageData;
  title: string;
  description: string;
  percentage: number;
};

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  percentage,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className='bg-base-white flex-1 basis-full rounded-xl border-2 p-3 shadow-[0_5px_12px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:cursor-pointer sm:basis-[calc(50%-0.5rem)] md:basis-[calc(33.33%-0.75rem)] md:rounded-2xl md:p-4'
      style={{
        height: generateClamp(172, 184, 1232),
      }}
      whileHover={{
        scale: 1.02,
        borderColor: '#9D5CFF',
        boxShadow: '0 20px 40px -15px rgba(157, 92, 255, 0.2)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className='flex-start gap-3'>
        <div
          className='flex-center h-10 w-10 rounded-full bg-neutral-200'
          style={{}}
        >
          <Image
            src={icon}
            alt='icon'
            width={0}
            height={0}
            className='h-[65%] w-auto'
          />
        </div>
        <h3 className='md:text-lg-semibold text-md-semibold text-neutral-950'>
          {title}
        </h3>
      </div>

      <p className='text-sm-regular md:text-md-regular mt-2 mb-5 text-neutral-700 md:mb-5.25'>
        {description}
      </p>
      <div className='flex items-center gap-4'>
        <div className='relative flex-1'>
          <motion.div
            className='flex-center bg-primary-300 absolute h-3 w-auto rounded-full md:h-3.5'
            style={{ width: '0%' }}
            initial={{ width: '0%' }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          />
          <div className='h-3 w-full rounded-full bg-neutral-300 md:h-3.5' />
        </div>
        <span className='md:text-lg-semibold text-sm-regular text-neutral-950'>
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
};
