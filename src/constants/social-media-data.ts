import { StaticImageData } from 'next/image';

import iconBall from '../../public/icons/socmed-ball.svg';
import iconInstagram from '../../public/icons/socmed-instagram.svg';
import iconLinkedin from '../../public/icons/socmed-linkedin.svg';

type SocialMediaDataProps = {
  href: string;
  target: string;
  icon: StaticImageData;
  alt: string;
};

export const SocialMediaData: SocialMediaDataProps[] = [
  {
    icon: iconBall,
    href: 'https://www.dribbble.com/',
    target: '_blank',
    alt: 'ball',
  },
  {
    icon: iconInstagram,
    href: 'https://www.instagram.com/',
    target: '_blank',
    alt: 'instagram',
  },
  {
    icon: iconLinkedin,
    href: 'https://www.linkedin.com/',
    target: '_blank',
    alt: 'linkedin',
  },
];
