export const siteConfig = {
  name: 'VisionIIM',
  formEndpoint: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
  nav: [
    { label: 'About us', href: '#about' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Our Team', href: '#team' },
  ],
};

export const contactFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Select from the list', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '+91', autoComplete: 'tel' },
  { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Enter your message' },
];

export const missingAssets = [
  'Hero IIM students campus image',
  'Profile assessment student with analytics overlay image',
  'Program card images for CAT prep, counselling, resume, and GDPI',
  'Why Vision IIM decorative orbit illustration if not CSS-generated',
  'Get in touch woman image',
  'Final CTA student collage',
  'Footer campus line-art background',
];
