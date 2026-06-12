import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { navLabels, socials } from '../data/content';
import Icon from './Icon';
import logo from '../assets/logo.png';
import './Footer.css';

const EXPLORE_LINKS = [
  { id: 'about', to: '/about' },
  { id: 'orgs', to: '/organisations' },
  { id: 'docs', to: '/documents' },
  { id: 'contact', to: '/contact' },
];

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="Samvetet" className="footer-brand__logo" />
            <span className="footer-brand__name">SAMVETET</span>
          </div>
          <p className="footer-blurb">{t.footerBlurb}</p>
        </div>

        <div>
          <h4 className="footer-heading">{t.footerExplore}</h4>
          <div className="footer-links">
            {EXPLORE_LINKS.map(({ id, to }) => (
              <Link key={id} to={to} className="footer-link">
                {navLabels[id][lang]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer-heading">{t.followT}</h4>
          <div className="footer-links">
            {socials.map((soc) => (
              <a key={soc.icon} href={soc.href} target="_blank" rel="noreferrer" className="footer-social">
                <span className="footer-social__icon">
                  <Icon name={soc.icon} size={18} />
                </span>
                {soc.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <span>{t.copyright}</span>
          <span className="footer-bottom__loc">Lund · Sweden</span>
        </div>
      </div>
    </footer>
  );
}
