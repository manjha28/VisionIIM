import { Icon } from '../assets/icons.jsx';
import { beliefs } from './data';

export default function CoreBeliefs() {
  return (
    <section className="section beliefs">
      <div className="container">
        <span className="pill pill--light"><i />VALUES</span>
        <h2 className="h2 beliefs__h2">Our Core Beliefs</h2>
        <div className="beliefs__grid">
          {beliefs.map(([icon, title, body]) => (
            <article className="belief" key={title}>
              <span className="belief__icon"><Icon name={icon} size={22} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}