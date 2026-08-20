import { siteConfig } from '../config/siteConfig';

export async function submitToScript(formType, payload) {
  if (!siteConfig.formEndpoint) {
    const err = new Error('NOT_CONFIGURED');
    err.code = 'NOT_CONFIGURED';
    throw err;
  }
  const body = new FormData();
  Object.entries(payload).forEach(([k, v]) => body.append(k, v ?? ''));
  body.set('formType', formType);
  body.set('submissionId', `visioniim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  body.set('page', window.location.href);
  await fetch(siteConfig.formEndpoint, { method: 'POST', mode: 'no-cors', body });
}