export const siteConfig = {
  name: 'VisionIIM',
  tagline:
    'Your partner in the journey from aspiration to admission. Expert mentorship, profile building, and CAT strategy.',
  formEndpoint: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
  nav: [
    { label: 'About us', href: '#about' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Our Team', href: '#team' },
  ],
  address: 'PLATINA TOWER-2, A Block, DLF Phase 1, Gurugram, Sikanderpur Ghosi, Haryana 122002',
  email: 'info@visioniim.com',
  phone: '+91-9870437600',
  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: '#' },
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'X', icon: 'x', href: '#' },
  ],
};

export const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;