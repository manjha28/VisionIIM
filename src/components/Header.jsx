import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Icon } from '../assets/icons.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr" id="top">
      <div className="container hdr__in">
        <a href="#top" className="hdr__brand" aria-label="VisionIIM home">
          <Logo size={40} wordSize={29} />
        </a>
        <button
          className="hdr__burger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="site-nav" className={open ? 'hdr__nav is-open' : 'hdr__nav'}>
          {siteConfig.nav.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)}>
              {i.label}
            </a>
          ))}
          <a className="hdr__cta" href="#contact" onClick={() => setOpen(false)}>
            Book a Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}