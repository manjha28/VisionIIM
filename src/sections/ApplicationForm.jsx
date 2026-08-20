import { useMemo, useState } from 'react';
import { formFields, siteConfig } from '../config/siteConfig';

const initial = Object.fromEntries(formFields.map((field) => [field.name, '']));

function validate(values) {
  const errors = {};
  formFields.forEach((field) => { if (field.required && !values[field.name].trim()) errors[field.name] = `${field.label} is required.`; });
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.phone && !/^[0-9+\-\s()]{7,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.';
  return errors;
}

export default function ApplicationForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const submissionId = useMemo(() => `visioniim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, [status === 'idle']);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'submitting') return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (!siteConfig.formEndpoint) { setStatus('error'); setNotice('Form endpoint is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to connect submissions.'); return; }
    setStatus('submitting'); setNotice('');
    const body = new FormData(event.currentTarget);
    body.set('submissionId', submissionId); body.set('page', window.location.href);
    try {
      await fetch(siteConfig.formEndpoint, { method: 'POST', mode: 'no-cors', body });
      setStatus('success'); setNotice('Thank you. Your application has been received. We will contact you soon.'); setValues(initial);
    } catch {
      setStatus('error'); setNotice('We could not submit the form. Please check your connection and try again.');
    }
  }
  return <section className="apply section" id="apply"><div className="section-head"><p className="eyebrow">Apply</p><h2>Start with a focused strategy call.</h2><p>Share the details below and the VisionIIM team will help map your next preparation step.</p></div><form className="form-card" onSubmit={handleSubmit} noValidate><input type="text" name="company" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />{formFields.map((field)=><div className="field" key={field.name}><label htmlFor={field.name}>{field.label}{field.required && <span> *</span>}</label>{field.type==='textarea'?<textarea id={field.name} name={field.name} rows="4" value={values[field.name]} onChange={(e)=>setValues({...values,[field.name]:e.target.value})} aria-describedby={`${field.name}-error`} />:<input id={field.name} name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} value={values[field.name]} onChange={(e)=>setValues({...values,[field.name]:e.target.value})} aria-describedby={`${field.name}-error`} />}{errors[field.name] && <p className="error" id={`${field.name}-error`}>{errors[field.name]}</p>}</div>)}<button className="button primary submit" disabled={status==='submitting'}>{status==='submitting'?'Submitting…':'Request callback'}</button>{notice && <p className={`notice ${status}`} role="status">{notice}</p>}</form></section>;
}
