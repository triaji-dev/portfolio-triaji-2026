type AccordionDataProps = {
  id: string;
  title: string;
  description: string;
};

export const accordionData: AccordionDataProps[] = [
  {
    id: '1',
    title: 'What’s your approach to front-end development?',
    description:
      'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
  },
  {
    id: '2',
    title: 'What technologies and tools do you use?',
    description:
      'I specialize in React, Next.js, and TypeScript, styling with Tailwind CSS. I also use Framer Motion for animations and Git for version control to ensure efficient and scalable development.',
  },
  {
    id: '3',
    title: 'How do you ensure code quality and maintainability?',
    description:
      'I adhere to strict coding standards, utilize TypeScript for type safety, and implement modular, reusable component architecture. I also prioritize responsiveness and cross-browser compatibility testing.',
  },
  {
    id: '4',
    title: 'Can you handle full-stack development?',
    description:
      'While my primary expertise is Front-End, I have experience with backend technologies and database management, allowing me to build comprehensive full-stack solutions when needed or collaborate effectively with backend teams.',
  },
  {
    id: '5',
    title: 'Are you open to freelance or diverse project types?',
    description:
      'Yes, I am open to discussing various project types, from landing pages to complex web applications. I am always eager to tackle new challenges and deliver high-quality digital solutions tailored to your needs.',
  },
];
