import Image from 'next/image';

import { cn } from '@/lib/utils';

type ExperienceProps = {
  className?: string;
};

const Experience: React.FC<ExperienceProps> = ({ className }) => (
  <div
    className={cn(
      'relative flex min-h-[374px] flex-col overflow-hidden rounded-xl md:rounded-2xl',
      className
    )}
  >
    <Image
      src='/images/man-with-laptop.jpg'
      alt='experience-image'
      fill
      className='object-cover'
    />
    <div className='absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-black to-transparent' />

    <div className='md:display-xl-bold text-base-white display-md-bold z-10 mt-19 flex w-full flex-col items-center'>
      <h3 className='text-center'>5+ Years</h3>
      <h3 className='-mt-2 text-center'>Experience</h3>
    </div>

    <div className='relative z-10 mt-auto flex w-full justify-end gap-3 overflow-hidden'>
      {[
        '/subimages/subimage-1.jpg',
        '/subimages/subimage-2.jpg',
        '/subimages/subimage-4.jpg',
      ].map((src) => (
        <div key={src} className='relative aspect-[4/3] flex-1'>
          <Image
            src={src}
            alt='experience-subimage'
            fill
            className='rounded-xl object-cover'
          />
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
