export const siteConfig = {
  name: 'VisionIIM',
  tagline: 'The Complete MBA Interview Prep Platform',
  formEndpoint: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
  cta: { primary: '#apply', secondary: '#program' },
  nav: [
    { label: 'Program', href: '#program' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Results', href: '#results' },
    { label: 'Apply', href: '#apply' },
  ],
  socials: [{ label: 'Email', href: 'mailto:hello@visioniim.example' }],
};

export const formFields = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'target', label: 'Target exam / interview', type: 'text', required: true },
  { name: 'message', label: 'How can we help?', type: 'textarea', required: false },
];
