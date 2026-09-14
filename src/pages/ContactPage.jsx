import PageHero from '../sections/PageHero.jsx';
import Contact from '../sections/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Ready to Start Your Journey?"
        body="We're here to answer all your questions and help you take the first step toward your IIM dream. Reach out to us today!"
      />
      <Contact heading="Contact us" showLinks />
    </>
  );
}