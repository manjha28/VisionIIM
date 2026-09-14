import { asset } from '../config/siteConfig';

export default function AboutHero() {
  return (
    <section className="ahero">
      <div className="container">
        <span className="pill pill--blue"><i />ABOUT US</span>
        <h1 className="ahero__h1">Helping Future Business Leaders<br />Reach Their Dream B-Schools.</h1>
        <p className="ahero__sub">
          Personalized guidance for CAT, profile building, resumes, GDPI,<br />
          interviews, and your complete MBA journey.
        </p>
      </div>
      <div className="ahero__split">
        <div className="container ahero__imgs">
          <img src={asset('about-1.jpg')} alt="VisionIIM mentors in session" loading="lazy" />
          <img src={asset('about-2.jpg')} alt="Students planning their IIM journey" loading="lazy" />
        </div>
      </div>
    </section>
  );
}