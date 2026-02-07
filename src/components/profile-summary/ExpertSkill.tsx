import { Icon } from '@iconify/react';
import Image from 'next/image';

import { Marquee } from '@/components/ui/marquee';

import skillsData from '@/constants/skills-data';
import { cn } from '@/lib/utils';

type ExpertSkillProps = {
  className?: string;
};

const ExpertSkill: React.FC<ExpertSkillProps> = ({ className }) => {
  const skillRow1 = skillsData
    .slice(0, 5)
    .map((skill, i) => (
      <SkillItem key={i} icon={skill.icon} className='mx-1' />
    ));
  const skillRow2 = skillsData
    .slice(5, 10)
    .map((skill, i) => (
      <SkillItem key={i + 5} icon={skill.icon} className='mx-1' />
    ));

  return (
    <div
      className={cn(
        'relative min-h-[374px] w-auto overflow-hidden rounded-xl bg-neutral-900 text-white md:rounded-2xl md:pb-11',
        className
      )}
    >
      <h3 className='md:display-md-bold display-sm-bold mb-3 px-6 pt-6'>
        Expert Skill
      </h3>
      <div className='mb-3 flex px-6'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            icon='material-symbols:star-rounded'
            className='text-secondary-200 aspect-square h-8 w-auto'
          />
        ))}
      </div>
      <p className='md:text-md-regular text-base-white mb-7.75 px-6'>
        Mastering modern technologies to deliver impactful and efficient
        solutions
      </p>
      <div className='relative flex flex-col gap-6 py-1 pb-6'>
        <Marquee className='[--duration:35s]' pauseOnHover>
          {skillRow1}
        </Marquee>
        <Marquee className='[--duration:35s]' pauseOnHover reverse>
          {skillRow2}
        </Marquee>
        <div className='absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-neutral-900 to-transparent' />
        <div className='absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-neutral-900 to-transparent' />
      </div>
    </div>
  );
};

export default ExpertSkill;

type SkillItemProps = {
  icon: string;
  color?: string;
  className?: string;
};

const SkillItem: React.FC<SkillItemProps> = ({ icon, color, className }) => (
  <div
    className={cn(
      'flex h-13 w-13 items-center justify-center rounded-full',
      color || 'bg-neutral-800',
      className
    )}
  >
    <Image
      src={icon}
      alt='Skill icon'
      width={24}
      height={24}
      className='h-[60%] w-auto object-contain text-white'
    />
  </div>
);
