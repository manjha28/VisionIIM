import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Icon } from '../assets/icons.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr" id="top">
      <div className="container hdr__in">
        <Link to="/" className="hdr__brand" aria-label="VisionIIM home" onClick={() => setOpen(false)}>
          <Logo size={40} wordSize={29} />
        </Link>
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
            <NavLink
              key={i.href}
              to={i.href}
              end={i.href === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {i.label}
            </NavLink>
          ))}
          <Link className="hdr__cta" to="/contact" onClick={() => setOpen(false)}>
            Book a Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}