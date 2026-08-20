export const Icon = ({ name }) => {
  const paths = {
    menu: 'M4 6h16M4 12h16M4 18h16', close: 'M6 6l12 12M18 6L6 18', arrow: 'M5 12h14M13 5l7 7-7 7', check: 'M20 6L9 17l-5-5', target: 'M12 2v4m0 12v4M2 12h4m12 0h4M7 12a5 5 0 1010 0 5 5 0 00-10 0', chat: 'M4 5h16v10H8l-4 4V5z', book: 'M4 5a3 3 0 013-3h13v17H7a3 3 0 00-3 3V5z', news: 'M4 4h16v16H4zM8 8h8M8 12h8M8 16h5'
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
};
