import { values } from './data';

export default function WhyVision() {
  return (
    <section className="why" id="team">
      <svg className="why__orbit" viewBox="0 0 900 900" aria-hidden="true">
        {[210, 300, 390, 470].map((r) => (
          <circle key={r} cx="90" cy="450" r={r} fill="none" stroke="#fff" strokeOpacity=".28" strokeDasharray="3 9" />
        ))}
        <path d="M90 240l7 7-7 7-7-7z" fill="#fff" fillOpacity=".5" />
        <path d="M90 660l7 7-7 7-7-7z" fill="#fff" fillOpacity=".5" />
      </svg>

      <div className="container why__grid">
        <div className="why__copy">
          <span className="pill pill--blue"><i />WHY VISION IIM</span>
          <h2 className="h2">Not Another<br />Coaching Institute</h2>
          <p>
            We built Vision IIM to replace impersonal coaching batches with bespoke mentorship and
            data-driven admission engineering.
          </p>
        </div>

        <div className="why__values">
          {values.map(([n, t, b]) => (
            <article className="val" key={n}>
              <span><b>◆</b> {n}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}