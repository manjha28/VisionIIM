export const Icon = ({ name, className = '' }) => {
  const paths = {
    arrow: 'M5 12h14M13 5l7 7-7 7', check: 'M20 6L9 17l-5-5', chevron: 'M9 6l6 6-6 6', up: 'M18 15l-6-6-6 6', down: 'M6 9l6 6 6-6', menu: 'M4 6h16M4 12h16M4 18h16', close: 'M6 6l12 12M18 6L6 18', mail: 'M4 6h16v12H4zM4 7l8 6 8-6', phone: 'M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.5 1.7L7.9 9.1a16 16 0 0 0 7 7l1.1-1.1a2 2 0 0 1 1.7-.5l2.6.4a2 2 0 0 1 1.7 2Z'
  };
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
};
