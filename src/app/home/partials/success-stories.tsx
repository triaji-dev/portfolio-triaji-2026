'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PaginationDots } from '@/components/ui/pagination-dots';
import { StarRating } from '@/components/ui/star-rating';

import { SuccessStoriesData } from '@/constants/success-stories-data';
import { useCarouselPagination } from '@/hooks/useCarouselPagination';

const SuccessStories = () => {
  const mobile = useCarouselPagination();
  const desktop = useCarouselPagination();

  const groupedTestimonials = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < SuccessStoriesData.length; i += 3) {
      result.push(SuccessStoriesData.slice(i, i + 3));
    }
    return result;
  }, []);

  return (
    <Section id='testimonials' title='Success Stories from Clients'>
      {/* Mobile*/}
      <div className='md:hidden'>
        <Carousel
          setApi={mobile.setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent className='gap-5'>
            {SuccessStoriesData.map((story, index) => (
              <CarouselItem key={`mobile-${index}`} className=''>
                <div className='mx-auto w-full'>
                  <div className='h-[336px] w-full'>
                    <SuccessStoriesCard
                      logo={story.logo}
                      description={story.description}
                      rating={story.rating}
                      personName={story.personName}
                      personPosition={story.personPosition}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <PaginationDots
            count={mobile.count}
            current={mobile.current}
            onDotClick={mobile.scrollTo}
            size='sm'
            className='mt-8'
          />
        </Carousel>
      </div>

      {/* Desktop */}
      <div className='relative mb-12 hidden md:block'>
        <Carousel
          setApi={desktop.setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'center',
            containScroll: 'keepSnaps',
          }}
        >
          <CarouselContent className='md:gap-5'>
            {groupedTestimonials.map((group, groupIndex) => (
              <CarouselItem key={`page-${groupIndex}`}>
                <div className='flex justify-center md:gap-5'>
                  {group.map((story, storyIndex) => (
                    <div
                      key={`story-${groupIndex}-${storyIndex}`}
                      className='w-full p-0'
                    >
                      <SuccessStoriesCard
                        logo={story.logo}
                        description={story.description}
                        rating={story.rating}
                        personName={story.personName}
                        personPosition={story.personPosition}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <PaginationDots
          count={groupedTestimonials.length}
          current={desktop.current}
          onDotClick={desktop.scrollTo}
          className='mt-8 gap-3'
        />
      </div>
    </Section>
  );
};

export default SuccessStories;

type SuccessStoriesCardProps = {
  logo: StaticImageData;
  description: string;
  rating: number;
  personName: string;
  personPosition: string;
};

const SuccessStoriesCard: React.FC<SuccessStoriesCardProps> = ({
  logo,
  description,
  rating,
  personName,
  personPosition,
}) => {
  return (
    <div className='bg-base-white flex flex-col items-center rounded-xl p-4 shadow-[0_5px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-95 hover:cursor-pointer md:rounded-2xl md:p-6'>
      <Image src={logo} alt='logo' className='h-10 w-auto md:h-12' />
      <p className='text-sm-medium md:text-md-medium line-clamp-4 max-h-28 pt-3 pb-5 text-center text-neutral-950 md:pt-4 md:pb-8'>
        {description}
      </p>
      <StarRating
        rating={rating}
        showValue
        className='mt-5 mb-3 md:mt-8 md:mb-4'
      />
      <div className='flex-center flex-col text-center'>
        <p className='text-sm-semibold md:text-md-semibold text-neutral-950'>
          {personName}
        </p>
        <p className='text-sm-regular md:text-md-regular mb-8 text-neutral-600 md:mb-0'>
          {personPosition}
        </p>
      </div>
    </div>
  );
};
