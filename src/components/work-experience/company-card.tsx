import Image from 'next/image';
import React from 'react';

type CompanyCardProps = {
  icon: string;
  company: string;
  year: string;
};

export const CompanyCard: React.FC<CompanyCardProps> = ({
  icon,
  company,
  year,
}) => {
  return (
    <div className='flex-col'>
      <Image
        src={icon}
        alt='icon'
        width={0}
        height={0}
        className='h-8 w-25.5 shrink-0 transition-all duration-300 ease-in-out hover:scale-110 md:h-12 md:w-38'
      />
      <h3 className='md:text-xl-semibold text-md-semibold my-1 text-neutral-950 md:my-3'>
        {company}
      </h3>
      <p className='md:text-md-regular text-sm-regular text-neutral-700'>
        {year}
      </p>
    </div>
  );
};

export const companyCardData: CompanyCardProps[] = [
  {
    icon: '/company-logos/trust-pilot.svg',
    company: 'Trustpilot',
    year: '2021-2024',
  },
  {
    icon: '/company-logos/postman.svg',
    company: 'Postman',
    year: '2021-2024',
  },
  {
    icon: '/company-logos/spotify.svg',
    company: 'Spotify',
    year: '2021-2024',
  },
];
