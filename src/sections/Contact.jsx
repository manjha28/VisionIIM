import { useState } from 'react';
import { Icon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';
import { submitToScript } from '../lib/submitForm.js';

const blank = { name: '', email: '', phone: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Full name is required.';
  if (!v.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (!v.phone.trim()) e.phone = 'Phone number is required.';
  else if (!/^[0-9+\-\s()]{7,}$/.test(v.phone)) e.phone = 'Enter a valid phone number.';
  return e;
}

export default function Contact() {
  const [v, setV] = useState(blank);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    const next = validate(v);
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('submitting'); setNotice('');
    try {
      await submitToScript('contact', v);
      setStatus('success');
      setNotice('Thank you. Your message has been received. We will contact you soon.');
      setV(blank);
    } catch (err) {
      setStatus('error');
      setNotice(err.code === 'NOT_CONFIGURED'
        ? 'Form endpoint is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to connect submissions.'
        : 'We could not submit the form. Please check your connection and try again.');
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <img className="contact__img" src={asset('contact-woman.jpg')} alt="VisionIIM counsellor" loading="lazy" />

        <div className="contact__card">
          <h2 className="h2 contact__h2">Get in touch</h2>
          <p className="contact__sub">
            Feel free to contact us with any questions or concerns. You can use the below form or
            email us directly.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <input type="text" name="company" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />

            <Field id="name" label="FULL NAME" placeholder="Your name" value={v.name} onChange={set('name')} error={errors.name} autoComplete="name" />
            <Field id="email" label="EMAIL" type="email" placeholder="your@email.com" value={v.email} onChange={set('email')} error={errors.email} autoComplete="email" />
            <Field id="phone" label="PHONE" type="tel" placeholder="+91" value={v.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />

            <div className="c-field">
              <label className="field-label" htmlFor="message">MESSAGE</label>
              <textarea id="message" rows="4" placeholder="Enter your message" value={v.message} onChange={set('message')} />
            </div>

            <button className="btn btn--pill btn--yellow" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit'} <Icon name="arrow" size={17} />
            </button>
            {notice && <p className={`notice ${status}`} role="status">{notice}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, ...rest }) {
  return (
    <div className="c-field">
      <label className="field-label" htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={`${id}-error`} aria-invalid={!!error} {...rest} />
      {error && <p className="error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}