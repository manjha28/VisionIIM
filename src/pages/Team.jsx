import PageHero from '../sections/PageHero.jsx';
import TeamGrid from '../sections/TeamGrid.jsx';
import WhyVision from '../sections/WhyVision.jsx';
import FAQ from '../sections/FAQ.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { trustValues } from '../sections/data';

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="OUR TEAM"
        title={<>The people behind<br />your success</>}
        body="We bring the experience, strategy and perspective to help you move forward."
      />
      <TeamGrid />
      <WhyVision
        eyebrow="TEAM IN ACTION"
        title={<>Why students<br />trust us</>}
        items={trustValues}
      />
      <FAQ />
      <FinalCTA />
    </>
  );
}