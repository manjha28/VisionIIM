import { useState } from 'react';
import { Icon } from '../assets/icons.jsx';
import { stages } from './data';

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="roadmap">
      <div className="container">
        <span className="pill pill--dark"><i />END-TO-END ROADMAP</span>
        <h2 className="h2">One Platform.<br />Your Complete IIM Journey.</h2>
        <p className="roadmap__sub">
          Click through the 6 stages of your transition from aspirant to proud IIM student.
        </p>

        <div className="roadmap__grid">
          <div className="stage-list" role="tablist" aria-label="Roadmap stages">
            {stages.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={i === active}
                className={i === active ? 'stage is-active' : 'stage'}
                onClick={() => setActive(i)}
              >
                <span>{i + 1}. {s.key}</span>
                <Icon name="chevron-right" size={18} />
              </button>
            ))}
          </div>

          <article className="stage-panel">
            <span className="pill pill--dark pill--nodot">{stage.key}</span>
            <h3>{stage.title}</h3>
            <p className="stage-panel__body">{stage.body}</p>
            <h4>KEY ACTIVITIES</h4>
            <ul>
              {stage.activities.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <hr />
            <h5>Why it Matters</h5>
            <p className="stage-panel__why">
              Most aspirants fail not due to lack of hard work, but due to sequence misalignment. We
              ensure every milestone is rigorously verified before you step into the interview room.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}