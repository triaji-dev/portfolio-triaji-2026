import { Marquee } from '@/components/ui/marquee';

import { cn } from '@/lib/utils';

type ChipProps = {
  text: string;
  color?: string;
  className?: string;
};

interface WhyChooseProps {
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ text, color, className }) => (
  <div
    key={text}
    className={cn(
      'text-sm-regular rounded-full px-3 py-2 md:px-4 md:py-1.5',
      color,
      className
    )}
  >
    {text}
  </div>
);

const WhyChoose: React.FC<WhyChooseProps> = ({ className }) => {
  const row1 = [
    <Chip key='react' text='React Expert' color='bg-white' className='mx-1' />,
    <Chip
      key='fullstack'
      text='Fullstack Developer'
      color='bg-white'
      className='mx-1'
    />,
    <Chip
      key='responsive'
      text='Responsive Design'
      color='bg-white'
      className='mx-1'
    />,
    <Chip
      key='experience'
      text='5 Years Experience'
      color='bg-white'
      className='mx-1'
    />,
  ];
  const row2 = [
    <Chip
      key='frontend'
      text='Frontend Developer'
      color='bg-white'
      className='mx-1'
    />,

    <Chip key='clean' text='Clean Code' color='bg-white' className='mx-1' />,
    <Chip
      key='performance'
      text='Performance Optimization'
      color='bg-white'
      className='mx-1'
    />,
    <Chip
      key='reusable'
      text='Reusable Components'
      color='bg-white'
      className='mx-1'
    />,
  ];
  const row3 = [
    <Chip key='UI/UX' text='UI/UX Focus' color='bg-white' className='mx-1' />,
    <Chip
      key='tailwind'
      text='TailwindCSS'
      color='bg-white'
      className='mx-1'
    />,
    <Chip key='nextjs' text='Next.js' color='bg-white' className='mx-1' />,
    <Chip
      key='testing'
      text='Testing Best Practices'
      color='bg-white'
      className='mx-1'
    />,
  ];

  return (
    <div
      className={cn(
        'bg-secondary-300 relative min-h-[374px] w-auto overflow-hidden rounded-xl pt-6 pb-14.25 md:rounded-2xl',
        className
      )}
    >
      <h3 className='text-base-white md:display-md-bold display-sm-bold mb-4 px-6'>
        Why Choose Me
      </h3>
      <p className='text-base-white md:text-md-regular text-sm-regular mb-13 px-6'>
        Delivering excellence with innovative solutions and seamless execution.
      </p>
      <div className='text-sm-regular relative flex w-full flex-col gap-4 text-neutral-950'>
        <Marquee className='[--duration:35s]' pauseOnHover>
          {row1}
        </Marquee>
        <Marquee className='[--duration:35s]' pauseOnHover reverse>
          {row2}
        </Marquee>
        <Marquee className='[--duration:35s]' pauseOnHover>
          {row3}
        </Marquee>
        <div className='from-secondary-300 absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent' />
        <div className='from-secondary-300 absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent' />
      </div>
    </div>
  );
};

export default WhyChoose;
