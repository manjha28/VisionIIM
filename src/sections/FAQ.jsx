import { useState } from 'react';
import { Icon } from '../assets/icons.jsx';
import { faqs } from './data';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="container">
        <div className="head-center">
          <span className="pill pill--light"><i />FAQ'S</span>
          <h2 className="h2">Frequently asked questions</h2>
          <p>Answers to common questions about our platform and services.</p>
        </div>

        <div className="faq__list">
          {faqs.map(([q, a], i) => (
            <article className={open === i ? 'faq__item is-open' : 'faq__item'} key={q}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{q}</span>
                <Icon name={open === i ? 'chevron-up' : 'chevron-down'} size={20} />
              </button>
              {open === i && <p className="faq__a">{a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}