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
          <a href="#top">Home</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <a href="#programs">CAT Preparation</a>
          <a href="#programs">Career &amp; IIM Counselling</a>
          <a href="#programs">Resume &amp; Profile Building</a>
          <a href="#programs">GDPI &amp; Interview Preparation</a>
          <a href="#team">Student Community</a>
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