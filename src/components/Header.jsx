import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Icon } from '../assets/icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="brand" href="#top" aria-label="VisionIIM home"><span className="brand-mark">V</span><span>{siteConfig.name}</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav"><Icon name={open ? 'close' : 'menu'} /><span className="sr-only">Toggle navigation</span></button><nav id="site-nav" className={open ? 'open' : ''}>{siteConfig.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="nav-cta" href="#apply" onClick={() => setOpen(false)}>Book Strategy Call</a></nav></header>;
}
