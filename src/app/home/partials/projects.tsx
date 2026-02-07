import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { LatestWorksData } from '@/constants/latest-works-data';

const LatestWork = () => {
  return (
    <Section id='projects' title='My Latest Work' className='!md:pb-16'>
      {/* why the important doesnt work??? */}
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
    <div className='flex flex-wrap gap-y-6 md:gap-x-5 md:gap-y-10'>
      {children}
    </div>
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
    <div className='flex-1 basis-91'>
      {/* bisa pake flex-1 dengan basis yang dideclare? it is likely basis-91 has override the flex-1 basis 0% */}
      <div className='flex-between md:text-sm-regular text-xs-regular mb-5 gap-2.5 text-neutral-950'>
        <div className='rounded-full border-1 border-dashed border-neutral-400 px-4 py-1'>
          <h4>{dashboard}</h4>
        </div>
        <div className='rounded-full border-1 border-dashed border-neutral-400 px-4 py-1'>
          <h4>{year}</h4>
        </div>
      </div>
      <div className='relative h-71 w-full overflow-hidden rounded-lg shadow-[0_0_25px_rgba(102,0,235,0.08)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(102,0,235,0.15)] md:rounded-xl'>
        <Image
          src={image}
          alt='project'
          fill
          className='object-cover transition-all duration-500 hover:scale-115'
        />
      </div>
      <h3 className='md:text-xl-semibold text-md-semibold my-5 text-neutral-950'>
        {title}
      </h3>
      <div className='flex-start gap-2'>
        <p className='md:text-md-medium text-sm-medium text-primary-300 transition-all duration-300 hover:translate-x-2 hover:cursor-pointer'>
          {visit}
        </p>
        <Image
          src={icon}
          alt='icon'
          width={24}
          height={24}
          className='transition-all duration-300 hover:scale-125 hover:cursor-pointer'
        />
      </div>
    </div>
  );
};
