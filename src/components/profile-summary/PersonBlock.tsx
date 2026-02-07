import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { generateClamp } from '@/functions/generate-clamp';
import { cn } from '@/lib/utils';

type PersonBlockProps = {
  className?: string;
};

const PersonBlock: React.FC<PersonBlockProps> = ({ className }) => (
  <div
    className={cn(
      'text-base-white bg-primary-300 relative flex min-h-[374px] flex-col items-center justify-end overflow-hidden rounded-xl md:rounded-2xl',
      className
    )}
  >
    <div className='absolute inset-0'>
      <Image
        src='/icons/edwin-pattern.svg'
        alt='ImagePattern'
        fill
        className='object-contain'
      />
    </div>
    <div
      className='absolute left-1/2 z-5 -translate-x-1/2 text-center'
      style={{
        top: generateClamp(79, 117, 1232),
      }}
    >
      <h2
        className='text-secondary-200 font-bold'
        style={{
          fontSize: generateClamp(63, 70, 1232),
          lineHeight: generateClamp(72, 75, 1232),
        }}
      >
        TRI AJI DEV__
      </h2>
    </div>
    <div
      className='absolute -bottom-[3%] left-1/2 z-5 -translate-x-1/2'
      style={{
        height: generateClamp(368, 384, 1232),
        width: generateClamp(366, 381, 1232),
      }}
    >
      <Image
        src='/images/profile-hero-purple1.png'
        alt='hero-image'
        fill
        className='scale-110 object-contain'
      />
    </div>
    <Button
      asChild
      className='bg-base-white text-sm-medium z-20 inline-flex h-[48px] w-[233px] items-center justify-center rounded-full text-neutral-950'
    >
      <Link href='#contact'>
        <Image
          src='/icons/mail-black.svg'
          alt='Mail'
          width={17}
          height={13}
          className='mr-2 h-4 w-4'
        />
        Hire Me
      </Link>
    </Button>
  </div>
);

export default PersonBlock;
