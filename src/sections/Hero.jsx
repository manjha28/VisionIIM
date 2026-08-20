import { Icon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="pill pill--blue"><i />OUR IIM JOURNEY, PERSONALIZED.</span>
          <h1>The IIM Game<br />is Bigger Than CAT</h1>
          <p className="hero__sub">
            Personalized guidance for CAT, profile building, resumes, GDPI, interviews, and your
            complete MBA journey.
          </p>
          <div className="hero__actions">
            <a className="btn btn--rect btn--yellow" href="#assessment">
              Check My IIM Profile <Icon name="arrow" size={17} />
            </a>
            <a className="btn btn--rect btn--navy" href="#contact">
              Book a Free Consultation
            </a>
          </div>
          <p className="hero__trust">
            Personalized strategy <i>•</i> Expert mentorship <i>•</i> End-to-end guidance
          </p>
        </div>

        <div className="hero__media">
          <img
            className="hero__img"
            src={asset('hero-students.png')}
            alt="Students walking on an IIM campus"
            loading="eager"
          />
          <div className="hero__stat">
            <b>92%</b>
            <span className="hero__stat-label">Placement Rate</span>
            <p>Across all flagship programs · 2024–25</p>
            <div className="hero__stat-rules"><i /><i /></div>
          </div>
        </div>
      </div>
    </section>
  );
}