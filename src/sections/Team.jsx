import { Icon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';
import { team } from './data';

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="team__head">
          <span className="pill pill--light"><i />OUR TEAM</span>
          <h2 className="h2">The people behind<br />your success</h2>
          <p>We bring the experience, strategy and perspective to help you move forward.</p>
        </div>

        <div className="team__grid">
          {team.map((m, i) => (
            <article className="tm" key={i}>
              <img
                className="tm__img"
                src={asset(m.img)}
                alt={m.name}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
              />
              <div className="tm__row">
                <div>
                  <h3 className="tm__name">{m.name}</h3>
                  <p className="tm__role">{m.role}</p>
                </div>
                <a className="tm__li" href={m.li} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`}>
                  <Icon name="linkedin" size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}