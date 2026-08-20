import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import RealityCheck from './sections/RealityCheck.jsx';
import Roadmap from './sections/Roadmap.jsx';
import ProfileAssessment from './sections/ProfileAssessment.jsx';
import Programs from './sections/Programs.jsx';
import WhyVision from './sections/WhyVision.jsx';
import SuccessStories from './sections/SuccessStories.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import FinalCTA from './sections/FinalCTA.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RealityCheck />
        <Roadmap />
        <ProfileAssessment />
        <Programs />
        <WhyVision />
        <SuccessStories />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}