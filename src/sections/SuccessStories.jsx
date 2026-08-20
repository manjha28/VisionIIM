import { useEffect, useRef } from 'react';
import { stories } from './data';

export default function SuccessStories() {
  const ref = useRef(null);

  // Centre the overflowing row so the outer cards peek in from both edges,
  // exactly as shown in the Figma frame.
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  return (
    <section className="section stories">
      <div className="container">
        <div className="head-center">
          <span className="pill pill--light"><i />SUCCESS STORIES</span>
          <h2 className="h2">They Had the Goal.<br />We Helped Them Build the Path.</h2>
          <p>Real student transformations into India's premier business schools.</p>
        </div>
      </div>

      <div className="stories__viewport" ref={ref}>
        <div className="stories__row">
          {stories.map((s) => (
            <article className="story" key={s.name}>
              <p className="story__quote">&ldquo;{s.quote}&rdquo;</p>
              <div className="story__person">
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.meta}</p>
                </div>
                <span className="story__badge">{s.score}</span>
              </div>
              <p className="story__before">{s.before}</p>
              <strong className="story__after">{s.after}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}