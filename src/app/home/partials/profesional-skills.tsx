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
  type CarouselApi,
} from '@/components/ui/carousel';

import { ProfessionalSkillsData } from '@/constants/professional-skills-data';
import { generateClamp } from '@/functions/generate-clamp';

export const ProfessionalSkills = () => {
  const [mobileApi, setMobileApi] = React.useState<CarouselApi>();
  const [mobileCurrent, setMobileCurrent] = React.useState(0);
  const [mobileCount, setMobileCount] = React.useState(0);
  const [desktopApi, setDesktopApi] = React.useState<CarouselApi>();
  const [desktopCurrent, setDesktopCurrent] = React.useState(0);

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

  const totalDesktopPages = groupedSkillsDesktop.length;

  React.useEffect(() => {
    if (!mobileApi) return;

    const totalSlides = mobileApi.scrollSnapList().length;
    setMobileCount(totalSlides);
    setMobileCurrent(mobileApi.selectedScrollSnap());

    const onSelect = () => {
      setMobileCurrent(mobileApi.selectedScrollSnap());
    };

    mobileApi.on('select', onSelect);

    return () => {
      mobileApi.off('select', onSelect);
    };
  }, [mobileApi]);

  React.useEffect(() => {
    if (!desktopApi) return;

    setDesktopCurrent(0);
    const onSelect = () => {
      const pageIndex = desktopApi.selectedScrollSnap();
      setDesktopCurrent(pageIndex);
    };

    desktopApi.on('select', onSelect);

    onSelect();

    return () => {
      desktopApi.off('select', onSelect);
    };
  }, [desktopApi]);

  return (
    <Section
      id='skills'
      title='My Professional Skills'
      className='items-center justify-center'
    >
      {/* Mobile */}
      <div className='md:hidden'>
        <Carousel
          setApi={setMobileApi}
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
          <div className='flex-center mt-3 gap-2'>
            {Array.from({ length: mobileCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => mobileApi?.scrollTo(index)}
                className={
                  index === mobileCurrent
                    ? 'bg-primary-200 h-3 w-8 cursor-pointer rounded-full'
                    : 'hover:bg-primary-200 h-3 w-4 cursor-pointer rounded-full bg-neutral-300 transition-colors duration-300'
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Desktop*/}
      <div className='relative hidden md:block'>
        <Carousel
          setApi={setDesktopApi}
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

        <div className='mt-6 flex h-3 items-center justify-center gap-3 rounded-full md:mt-9'>
          {Array.from({ length: totalDesktopPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => desktopApi?.scrollTo(index)}
              className={
                desktopCurrent === index
                  ? 'bg-primary-200 h-3 w-8 cursor-pointer rounded-full transition-colors duration-300'
                  : 'h-3 w-4 cursor-pointer rounded-full bg-neutral-300 transition-colors duration-300 hover:bg-neutral-400'
              }
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

type SkillCardsProps = {
  children: React.ReactNode;
};

const SkillCards: React.FC<SkillCardsProps> = ({ children }) => {
  return (
    <div className='flex w-full flex-wrap justify-center gap-4 md:gap-5'>
      {children}
    </div>
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
    <div
      className='bg-base-white flex-1 basis-[100%] rounded-xl border-2 p-3 shadow-[0_5px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:cursor-pointer sm:basis-[calc(50%-0.5rem)] md:basis-[calc(33.33%-0.75rem)] md:rounded-2xl md:p-4'
      style={{
        height: generateClamp(172, 184, 1232),
      }}
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
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 1.5,
              ease: [0.5, 1.4, 0.5, 1],
              delay: 0.2,
            }}
          />
          <div className='h-3 w-full rounded-full bg-neutral-300 md:h-3.5' />
        </div>
        <span className='md:text-lg-semibold text-sm-regular text-neutral-950'>
          {percentage}%
        </span>
      </div>
    </div>
  );
};
