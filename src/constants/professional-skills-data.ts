type ProfessionalSkillsDataProps = {
  icon: string;
  title: string;
  description: string;
  percentage: string;
};

const uniqueSkills: ProfessionalSkillsDataProps[] = [
  {
    icon: '/icons/expert-skill/html.svg',
    title: 'HTML',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '95',
  },
  {
    icon: '/icons/expert-skill/scss.svg',
    title: 'CSS',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '75',
  },
  {
    icon: '/icons/expert-skill/JS.svg',
    title: 'Javascript',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '80',
  },
  {
    icon: '/icons/expert-skill/react.svg',
    title: 'React JS',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '95',
  },
  {
    icon: '/icons/expert-skill/mongo.svg',
    title: 'Mongo DB',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '90',
  },
  {
    icon: '/icons/expert-skill/docker.svg',
    title: 'Docker',
    description:
      'Building the structure of web pages with semantic markup for accessibility.',
    percentage: '85',
  },
];

export const ProfessionalSkillsData: ProfessionalSkillsDataProps[] = [
  ...uniqueSkills,
  ...uniqueSkills,
  ...uniqueSkills,
];

export default ProfessionalSkillsData;
