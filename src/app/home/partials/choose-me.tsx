import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import ChooseMeData from '@/constants/choose-me-data';

const WhyChooseMe = () => {
  return (
    <div className='bg-neutral-100'>
      <Section id='choose-me' title='Why Choose Me' className='!mb-0'>
        <WhiteTable>
          <div className='text-base-white md:text-lg-semibold text-sm-semibold bg-primary-200 grid h-14 grid-cols-[3fr_1fr_1fr] items-center rounded-full text-center md:grid-cols-3'>
            <h4>Skill</h4>
            <h4>Me</h4>
            <h4>Other</h4>
          </div>
          <div className='divide-y-2 divide-neutral-200'>
            {ChooseMeData.map((item, index) => (
              <div
                key={index}
                className='grid h-18 grid-cols-[3fr_1fr_1fr] items-center text-center transition-all duration-300 hover:bg-neutral-100 md:grid-cols-3'
              >
                <p className='md:text-lg-medium text-sm-medium text-neutral-950'>
                  {item.title}
                </p>
                <div className='flex-center'>
                  <Image
                    src={item.icon1}
                    alt='check'
                    width={28}
                    height={28}
                    className='h-6 w-auto lg:h-7'
                  />
                </div>
                <div className='flex-center'>
                  <Image
                    src={item.icon2}
                    alt='x'
                    width={29}
                    height={29}
                    className='h-6 w-auto lg:h-7.25'
                  />
                </div>
              </div>
            ))}
          </div>
        </WhiteTable>
      </Section>
    </div>
  );
};

export default WhyChooseMe;

type WhiteTableProps = {
  children: React.ReactNode;
};

const WhiteTable: React.FC<WhiteTableProps> = ({ children }) => {
  return (
    <div className='bg-neutral-25 gap-x-4 rounded-xl p-3 md:gap-x-6 md:rounded-3xl md:p-6'>
      {children}
    </div>
  );
};
