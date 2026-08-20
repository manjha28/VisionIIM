import { Icon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta__panel">
        <div className="cta__inner">
          <span className="pill pill--blue"><i />YOUR NEXT STEP</span>
          <h2 className="h2">Your IIM Journey<br />Doesn't Need More<br />Guesswork.</h2>
          <p>Get a clear, data-backed strategy built around your unique profile, academics, and goals.</p>
          <a className="btn btn--rect btn--yellow" href="#contact">
            Book free consultation <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
      <div className="cta__strips">
        <img
          src={asset('cta-strip.png')}
          alt="VisionIIM students"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
        />
      </div>
    </section>
  );
}