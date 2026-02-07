import type { StaticImageData } from 'next/image';

import adobe from '../../public/company-logos/adobe.svg';
import google from '../../public/company-logos/google.svg';
import netflix from '../../public/company-logos/netflix.svg';
import postman from '../../public/company-logos/postman.svg';
import spotify from '../../public/company-logos/spotify.svg';
import trustPilot from '../../public/company-logos/trust-pilot.svg';
import upwork from '../../public/company-logos/upwork.svg';
import zapier from '../../public/company-logos/zapier.svg';
import zoom from '../../public/company-logos/zoom.svg';

type SuccessStoriesDataProps = {
  logo: StaticImageData;
  description: string;
  rating: number;
  personName: string;
  personPosition: string;
};

export const SuccessStoriesData: SuccessStoriesDataProps[] = [
  {
    logo: upwork,
    description:
      'Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!',
    rating: 5,
    personName: 'Robert Lewandowski',
    personPosition: 'Head of Engineering, Upwork',
  },
  {
    logo: zapier,
    description:
      'Working with this developer was seamless. They understood our automation needs perfectly and delivered a solution that exceeded expectations.',
    rating: 4,
    personName: 'Dani Olmo',
    personPosition: 'Product Manager, Zapier',
  },
  {
    logo: zoom,
    description:
      'Our video conferencing platform required complex UI work that they handled with exceptional skill. The result is intuitive and highly performant.',
    rating: 5,
    personName: 'Jude Bellingham',
    personPosition: 'Vice President, Zoom',
  },
  {
    logo: google,
    description:
      'Their frontend expertise transformed our application performance. The UI is now incredibly responsive and our user retention has improved by 40%.',
    rating: 5,
    personName: 'Robert Lewandowski',
    personPosition: 'Head of Engineering, Google',
  },
  {
    logo: netflix,
    description:
      'The streaming interface they built for us is both beautiful and lightning-fast. Our users love the improved experience and engagement metrics are up.',
    rating: 4,
    personName: 'Emma Rodriguez',
    personPosition: 'Product Director, Netflix',
  },

  {
    logo: adobe,
    description:
      'The interactive design tools they implemented have revolutionized our creative platform. Technical excellence combined with design sensibility.',
    rating: 5,
    personName: 'Sarah Chen',
    personPosition: 'UX Director, Adobe',
  },
  {
    logo: spotify,
    description:
      'Their work on our music recommendation interface was outstanding. They delivered a responsive, accessible experience our users absolutely love.',
    rating: 4,
    personName: 'Marcus Johnson',
    personPosition: 'Technical Lead, Spotify',
  },
  {
    logo: postman,
    description:
      'The work they did on our API client was fantastic. The UI is now incredibly responsive and our user retention has improved by 35%.',
    rating: 5,
    personName: 'Ankit Sobti',
    personPosition: 'Co-founder, Postman',
  },
  {
    logo: trustPilot,
    description:
      'The team implemented a new review system that is both beautiful and highly performant. Our user engagement has increased by 30%.',
    rating: 4,
    personName: 'Peter Holten M hlmann',
    personPosition: 'CEO, Trustpilot',
  },
];
