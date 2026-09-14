import { BrandIcon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';
import { team } from './data';

export default function TeamGrid() {
  return (
    <section className="section team">
      <div className="container team__grid">
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
                <BrandIcon name="linkedin" size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}