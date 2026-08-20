import { Icon } from '../assets/icons.jsx';
import { programs } from './data';
import { asset } from '../config/siteConfig';

export default function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        <div className="head-center">
          <span className="pill pill--light"><i />PROGRAMS</span>
          <h2 className="h2">Everything You Need to<br />Reach Your IIM Goal.</h2>
          <p>Comprehensive mentorship tracks curated by IIM alumni and top industry experts.</p>
        </div>

        <div className="programs__grid">
          {programs.map((p) => (
            <article className="prog" key={p.title}>
              <img className="prog__img" src={asset(p.image)} alt="" loading="lazy" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}><Icon name="check" size={16} className="tick" />{b}</li>
                ))}
              </ul>
              <a className="btn btn--rect btn--yellow" href="#contact">
                Explore <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}