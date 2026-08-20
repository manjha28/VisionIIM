import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Icon } from '../assets/icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a className="logo" href="#top" aria-label="VisionIIM home"><span className="logo-mark">✦</span><span>VisionIIM</span></a><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav"><Icon name={open ? 'close' : 'menu'} /></button><nav id="nav" className={open ? 'open' : ''}>{siteConfig.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="btn btn-yellow" href="#contact" onClick={() => setOpen(false)}>Book a Free Consultation</a></nav></header>;
}
