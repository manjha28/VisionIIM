import { realityCards } from './data';
import Logo from '../components/Logo.jsx';

export default function RealityCheck() {
  return (
    <section className="section reality" id="about">
      <div className="container">
        <div className="head-center">
          <span className="pill pill--light"><i />THE REALITY CHECK</span>
          <h2 className="h2">CAT Isn't the Only Thing<br />Standing Between You &amp; IIM.</h2>
          <p>
            Getting into a top IIM isn't just about your percentile. You need the right strategy,
            profile, applications, resume and interview preparation all working together.
          </p>
        </div>

        <div className="reality__grid">
          {realityCards.map(([tag, title, body]) => (
            <article className="reality__card" key={tag}>
              <span className="pill pill--outline-blue">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="strip">
          <Logo size={40} showWord={false} />
          <strong>
            More than Coaching, Your Goal deserves a <em>Complete Strategy.</em>
          </strong>
        </div>
      </div>
    </section>
  );
}