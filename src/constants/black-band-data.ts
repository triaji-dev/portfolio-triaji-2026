import { StaticImageData } from 'next/image';

import Star4edge from '../../public/icons/star-4edge.svg';

type BlackBandProps = {
  icon?: StaticImageData;
  text?: string;
};

export const blackBandData: BlackBandProps[] = [
  {
    text: 'Frontend Developer',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Expert React',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Programmer',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Mobile Developer',
  },
  {
    icon: Star4edge,
  },
];
