import Image from 'next/image';

import { generateClamp } from '@/functions/generate-clamp';
import { generateClampInverse } from '@/functions/generate-clamp-inverse';
import { cn } from '@/lib/utils';

type DigitalProductsProps = {
  className?: string;
};

const DigitalProducts: React.FC<DigitalProductsProps> = ({ className }) => (
  <div
    className={cn(
      'bg-blue-gradient text-base-white relative flex flex-col items-start justify-between overflow-hidden rounded-xl md:rounded-2xl',
      className
    )}
    style={{ height: generateClampInverse(395, 452, 1232) }}
  >
    <h3 className='md:display-md-bold display-sm-bold max-w-64'>
      Building Digital Products{' '}
      <Image
        src='/icons/white-stars.svg'
        alt='star'
        width={26}
        height={26}
        className='inline'
      />
    </h3>

    <div className='mt-8 flex flex-col gap-6 md:mt-0 md:flex-row md:gap-9.75'>
      <StatCard value='50+' label="Global Client's Handle" />
      <StatCard value='99%' label='Client Satisfaction Rate' />
      <StatCard value='100+' label='Projects Delivered' />
    </div>

    <div
      className='absolute h-[367px] w-full -translate-x-[27%] scale-175 opacity-15 md:scale-100'
      style={{
        top: generateClampInverse(19, 105, 1232),
        left: generateClamp(240, 397, 1232),
        // height: generateClampInverse(367, 360, 1232),
      }}
    >
      <Image
        src='/images/world-map.png'
        alt='World Map'
        fill
        className='object-contain'
      />
    </div>
    <div className='absolute top-[29.2%] left-[51%] md:top-[34.18%] md:left-[41%]'>
      <div className='relative'>
        <Image
          src='/icons/german-flag.svg'
          alt='elips'
          width={50}
          height={32}
          className='mr-1 inline'
        />
        <Image
          src='/icons/elips-flag.svg'
          alt='elips'
          width={16}
          height={16}
          className='absolute inline'
        />
      </div>
    </div>
    <div className='absolute top-[46%] left-[77.3%] md:top-[27.34%] md:left-[81.86%]'>
      <div className='relative'>
        <Image
          src='/icons/usa-flag.svg'
          alt='elips'
          width={50}
          height={32}
          className='mr-1 inline'
        />
        <Image
          src='/icons/elips-flag.svg'
          alt='elips'
          width={16}
          height={16}
          className='absolute inline'
        />
      </div>
    </div>
    <div className='absolute top-[75.66%] left-[72%] md:top-[61.77%] md:left-[87.74%]'>
      <div className='relative'>
        <Image
          src='/icons/indo-flag.svg'
          alt='elips'
          width={50}
          height={32}
          className='mr-1 inline'
        />

        <Image
          src='/icons/elips-flag.svg'
          alt='elips'
          width={16}
          height={16}
          className='absolute inline'
        />
      </div>
    </div>
  </div>
);

export default DigitalProducts;

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => (
  <div className={cn('flex flex-col items-start', className)}>
    <div className='md:display-2xl-bold display-lg-bold text-neutral-25'>
      {value}
    </div>
    <div className='text-neutral-25 text-sm-medium md:text-lg-medium'>
      {label}
    </div>
  </div>
);
