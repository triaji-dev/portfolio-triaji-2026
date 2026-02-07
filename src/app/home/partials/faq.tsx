import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/components/ui/phases-accordion';

import { accordionData } from '@/constants/accordion-data';
import { generateClamp } from '@/functions/generate-clamp';

const Faq = () => {
  const defaultOpenAccordion = '1';
  return (
    <div id='faq' className='custom-container mt-20'>
      <div
        className='flex flex-col gap-[0px] rounded-4xl border-1 border-neutral-300 bg-neutral-50 px-4 py-5 md:grid md:grid-cols-[22.3rem_auto] md:p-10'
        style={{ gap: generateClamp(0, 153, 1440) }}
      >
        <div className='order-1 flex flex-col gap-8 md:order-1 md:justify-between md:gap-51'>
          <div className='flex flex-col'>
            <div className='bg-primary-100 mb-5 h-12 w-12 rounded-full p-3'>
              <Image
                src='/icons/chat-square.svg'
                alt='faq'
                width={24}
                height={24}
              />
            </div>
            <h2 className='md:display-2xl-bold display-md-bold text-neutral-950'>
              Have Questions?
            </h2>
          </div>
          <div className='bg-base-white order-2 hidden flex-col gap-2.5 rounded-2xl border-1 border-neutral-300 p-6 md:order-2 md:flex'>
            <Image
              src='/images/person-orange.png'
              alt='faq'
              width={80}
              height={80}
              className='rounded-full'
            />
            <p className='md:text-lg-regular text-md-semibold mt-4 text-neutral-950'>
              Have more questions?
            </p>
            <p className='md:text-lg-regular text-md-medium mb-4 text-neutral-950'>
              Send me a message.
            </p>
            <Button asChild variant='secondary' className='w-full'>
              <Link href='#contact'>Get in touch</Link>
            </Button>
          </div>
        </div>
        <div className='order-2 py-5 md:order-1 md:pt-20 md:pb-10'>
          <PhasesAccordion defaultOpen={defaultOpenAccordion}>
            {accordionData.map((item) => (
              <PhasesAccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </PhasesAccordion>
        </div>

        {/* Mobile */}
        <div className='bg-base-white order-3 flex flex-col gap-4 rounded-2xl border-1 border-neutral-300 p-4 md:hidden'>
          <Image
            src='/images/person-orange.png'
            alt='faq'
            width={61.5}
            height={61.5}
            className='rounded-full'
          />
          <p className='text-sm-regular text-neutral-950'>
            Have more questions? Send me a message.
          </p>
          <Button asChild variant='secondary' className='w-full'>
            <Link href='#contact'>Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
