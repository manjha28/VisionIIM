import { useState } from 'react';
import { Icon } from '../assets/icons.jsx';
import { asset } from '../config/siteConfig';
import { assessmentOptions, stageChips } from './data';

const blank = {
  stage: '', cgpa: '', experience: '', percentile: '', goal: '',
  name: '', email: '', phone: '',
};

export default function ProfileAssessment() {
  const [step, setStep] = useState(1);
  const [v, setV] = useState(blank);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    if (step === 1) {
      if (!v.stage) { setNotice('Please select your current stage.'); return; }
      setNotice(''); setStep(2); return;
    }
    if (!v.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      setNotice('Please enter your name and a valid email.'); return;
    }
    setStatus('submitting'); setNotice('');
    try {
      const { submitToScript } = await import('../lib/submitForm.js');
      await submitToScript('assessment', v);
      setStatus('success');
      setNotice('Thank you. Your profile assessment request has been received.');
      setV(blank); setStep(1);
    } catch (err) {
      setStatus('error');
      setNotice(err.code === 'NOT_CONFIGURED'
        ? 'Form endpoint is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to connect submissions.'
        : 'We could not submit the form. Please check your connection and try again.');
    }
  }

  return (
    <section className="section assess" id="assessment">
      <div className="container assess__grid">
        <div>
          <span className="pill pill--light"><i />FREE PROFILE ASSESSMENT</span>
          <h2 className="h2 assess__h2">How Strong Is Your<br />IIM Profile?</h2>
          <p className="assess__sub">
            Get a personalized profile assessment in 60 seconds with instant benchmark scoring.
          </p>

          <form className="assess__card" onSubmit={handleSubmit} noValidate>
            <input type="text" name="company" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <span className="pill pill--light pill--nodot step-pill">STEP {String(step).padStart(2, '0')}</span>

            {step === 1 ? (
              <>
                <p className="field-label">WHAT IS YOUR CURRENT STAGE?</p>
                <div className="chips">
                  {stageChips.map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={v.stage === c ? 'chip is-on' : 'chip'}
                      onClick={() => setV({ ...v, stage: c })}
                      aria-pressed={v.stage === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="field-grid">
                  <Select label="GRADUATION CGPA" value={v.cgpa} onChange={set('cgpa')} options={assessmentOptions.cgpa} />
                  <Select label="WORK EXPERIENCE" value={v.experience} onChange={set('experience')} options={assessmentOptions.experience} />
                  <Select label="EXPECTED CAT PERCENTILE" value={v.percentile} onChange={set('percentile')} options={assessmentOptions.percentile} />
                  <Select label="TARGET IIM / MBA GOAL" value={v.goal} onChange={set('goal')} options={assessmentOptions.goal} />
                </div>
              </>
            ) : (
              <div className="field-grid field-grid--one">
                <Text label="FULL NAME" value={v.name} onChange={set('name')} placeholder="Your name" />
                <Text label="EMAIL" type="email" value={v.email} onChange={set('email')} placeholder="your@email.com" />
                <Text label="PHONE" type="tel" value={v.phone} onChange={set('phone')} placeholder="+91" />
              </div>
            )}

            <button className="btn btn--pill btn--yellow assess__next" disabled={status === 'submitting'}>
              {step === 1 ? 'Next' : status === 'submitting' ? 'Submitting…' : 'Get my assessment'}
              <Icon name="arrow" size={17} />
            </button>
            {notice && <p className={`notice ${status}`} role="status">{notice}</p>}
          </form>
        </div>

        <img className="assess__img" src={asset('assessment-student.png')} alt="IIM aspirant with profile analytics" loading="lazy" />
      </div>
    </section>
  );
}

function Select({ label, options, ...rest }) {
  return (
    <label className="mini-field">
      <span className="field-label">{label}</span>
      <span className="select-wrap">
        <select {...rest}>
          <option value="">Select from the list</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <Icon name="chevron-down" size={18} />
      </span>
    </label>
  );
}

function Text({ label, type = 'text', ...rest }) {
  return (
    <label className="mini-field">
      <span className="field-label">{label}</span>
      <input type={type} {...rest} />
    </label>
  );
}