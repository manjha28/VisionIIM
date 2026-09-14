import { Link } from 'react-router-dom';
import { siteConfig, asset } from '../config/siteConfig';
import { Icon, BrandIcon } from '../assets/icons.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__bg" src={asset('footer-city.svg')} alt="" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size={62} wordSize={44} />
          <p>{siteConfig.tagline}</p>
          <div className="footer__social">
            {siteConfig.socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}><BrandIcon name={s.icon} size={24} /></a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/">CAT Preparation</Link>
          <Link to="/">Career &amp; IIM Counselling</Link>
          <Link to="/">Resume &amp; Profile Building</Link>
          <Link to="/">GDPI &amp; Interview Preparation</Link>
          <Link to="/team">Student Community</Link>
        </div>

        <div className="footer__col footer__contact">
          <h4>Contact us</h4>
          <p>{siteConfig.address}</p>
          <a href={`mailto:${siteConfig.email}`}><Icon name="mail" size={16} />{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}><Icon name="phone" size={16} />{siteConfig.phone}</a>
        </div>
      </div>
    </footer>
  );
}