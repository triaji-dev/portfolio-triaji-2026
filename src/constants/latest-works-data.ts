import { StaticImageData } from 'next/image';

import project1 from '../../public/images/latest-works/project1.jpg';
import project2 from '../../public/images/latest-works/project2.jpg';
import project3 from '../../public/images/latest-works/project3.jpg';
import project4 from '../../public/images/latest-works/project4.jpg';
import project5 from '../../public/images/latest-works/project5.jpg';
import project6 from '../../public/images/latest-works/project6.jpg';

type LatestWorksDataProps = {
  dashboard: string;
  year: string;
  image: StaticImageData;
  title: string;
  visit: string;
  icon: string;
};

export const LatestWorksData: LatestWorksDataProps[] = [
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project1,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project2,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project3,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project4,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project5,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Dashboard',
    year: '2024',
    image: project6,
    title: 'Dashboard SaaS Task Management',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
];
