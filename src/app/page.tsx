import { BlackBandMarquee } from './home/partials/black-band';
import WhyChooseMe from './home/partials/choose-me';
import { ContactForm } from './home/partials/contact-form';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import { ProfessionalSkills } from './home/partials/profesional-skills';
import { ProfileSummaryBase } from './home/partials/profile-summary';
import Projects from './home/partials/projects';
import SuccessStories from './home/partials/success-stories';
import WorkExperience from './home/partials/work-experience';

const Home = () => {
  return (
    <div className='relative mx-auto overflow-hidden'>
      <Navbar />
      <Hero />
      <BlackBandMarquee />
      <ProfileSummaryBase />
      <ProfessionalSkills />
      <WhyChooseMe />
      <Projects />
      <WorkExperience />
      <SuccessStories />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
