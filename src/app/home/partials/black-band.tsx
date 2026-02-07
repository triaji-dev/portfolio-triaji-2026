import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

import { blackBandData } from '@/constants/black-band-data';
import { generateClamp } from '@/functions/generate-clamp';

export const BlackBandMarquee = () => {
  return (
    <div className='relative z-30 mx-[-0.5vw] -mt-6 -rotate-[1.89deg] bg-neutral-950 md:-mt-9'>
      <div
        className='flex-center w-full overflow-hidden'
        style={{
          height: generateClamp(84, 140, 1440),
        }}
      >
        <Marquee className=''>
          {blackBandData.map((item, index) => (
            <div
              key={index}
              className='text-neutral-25 display-xs-bold -mx-5 flex h-full w-auto items-center object-contain select-none md:-mx-3'
              style={{
                fontSize: generateClamp(24, 48, 1440),
              }}
            >
              {item.text && <span>{item.text}</span>}
              {item.icon && (
                <Image
                  src={item.icon}
                  alt='icon'
                  className='mx-9'
                  style={{
                    height: generateClamp(35, 52.5, 1440),
                  }}
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
