'use client';

import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import { SuccessStoriesData } from '@/constants/success-stories-data';

const SuccessStories = () => {
  const [mobileApi, setMobileApi] = React.useState<CarouselApi>();
  const [mobileCurrent, setMobileCurrent] = React.useState(0);
  const [mobileCount, setMobileCount] = React.useState(0);
  const [desktopApi, setDesktopApi] = React.useState<CarouselApi>();
  const [desktopCurrent, setDesktopCurrent] = React.useState(0);

  const groupedTestimonials = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < SuccessStoriesData.length; i += 3) {
      result.push(SuccessStoriesData.slice(i, i + 3));
    }
    return result;
  }, []);

  const totalDesktopPages = groupedTestimonials.length;

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
    <Section id='testimonials' title='Success Stories from Clients'>
      {/* Mobile*/}
      <div className='md:hidden'>
        <Carousel
          setApi={setMobileApi}
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
          <div className='mt-8 flex items-center justify-center gap-2'>
            {Array.from({ length: mobileCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => mobileApi?.scrollTo(index)}
                className={
                  index === mobileCurrent
                    ? 'bg-primary-200 h-2.5 w-8 cursor-pointer rounded-full'
                    : 'h-2.5 w-4 cursor-pointer rounded-full bg-neutral-300'
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Desktop */}
      <div className='relative mb-12 hidden md:block'>
        <Carousel
          setApi={setDesktopApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'center',
            // containScroll: 'trimSnaps',??
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

          {/* <CarouselPrevious className='bg-primary-50 border-primary-100 hover:bg-primary-100 hover:text-primary-600 -left-12' />
          <CarouselNext className='bg-primary-50 border-primary-100 hover:bg-primary-100 hover:text-primary-600 -right-12' /> */}
        </Carousel>

        <div className='mt-8 flex items-center justify-center gap-3'>
          {Array.from({ length: totalDesktopPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (desktopApi) {
                  desktopApi.scrollTo(index);
                }
              }}
              className={
                desktopCurrent === index
                  ? 'bg-primary-200 h-3 w-8 cursor-pointer rounded-full'
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
      <div className='flex-center mt-5 mb-3 gap-0 md:mt-8 md:mb-4'>
        {new Array(rating).fill(0).map((_, index) => (
          <Icon
            key={index}
            icon='line-md:star-filled'
            className='text-secondary-200 text-3xl'
          />
        ))}
        <span>{rating}</span>
      </div>
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
