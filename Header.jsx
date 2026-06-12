import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { navLabels } from '../data/content';
import Icon from './Icon';
import logo from '../assets/logo.png';
import './Header.css';

const NAV_ITEMS = [
  { id: 'home', to: '/', end: true },
  { id: 'about', to: '/about' },
  { id: 'orgs', to: '/organisations' },
  { id: 'docs', to: '/documents' },
  { id: 'contact', to: '/contact' },
];

function FlagEn() {
  return (
    <svg viewBox="0 0 24 16" width="26" height="17" style={{ display: 'block' }}>
      <rect width="24" height="16" fill="#0A2240" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}

function FlagSv() {
  return (
    <svg viewBox="0 0 24 16" width="26" height="17" style={{ display: 'block' }}>
      <rect width="24" height="16" fill="#006AA7" />
      <path d="M8 0v16M0 7h24" stroke="#FECC00" strokeWidth="3" />
    </svg>
  );
}

export default function Header() {
  const { lang, isEn, setLang, t } = useLanguage();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!searchOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  // Close the search field on navigation.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setSearchOpen(false);
    setQuery('');
  }

  const isAboutActive = (isActive) => isActive || location.pathname === '/merch';

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="Samvetet" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">SAMVETET</span>
            <span className="brand-sub">{t.brandSub}</span>
          </span>
        </Link>

        <nav className="nav-tabs">
          {NAV_ITEMS.map(({ id, to, end }) => (
            <NavLink
              key={id}
              to={to}
              end={end}
              className={({ isActive }) =>
                'nav-tab' + ((id === 'about' ? isAboutActive(isActive) : isActive) ? ' nav-tab--active' : '')
              }
            >
              {navLabels[id][lang]}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            title="Search"
            className={'search-toggle' + (searchOpen ? ' search-toggle--open' : '')}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <Icon name="search" size={19} />
          </button>

          <div className="lang-toggle">
            <button
              type="button"
              title="English"
              className={'lang-btn' + (isEn ? ' lang-btn--active' : '')}
              onClick={() => setLang('en')}
            >
              <FlagEn />
            </button>
            <button
              type="button"
              title="Svenska"
              className={'lang-btn' + (!isEn ? ' lang-btn--active' : '')}
              onClick={() => setLang('sv')}
            >
              <FlagSv />
            </button>
          </div>

          <a href="#" className="join-btn">
            {t.joinCta}
          </a>
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <div className="search-bar-inner">
            <span className="search-bar__icon">
              <Icon name="search" size={19} />
            </span>
            <input
              className="search-bar__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPh}
              autoFocus
            />
            <span className="search-bar__hint">{t.searchHint}</span>
          </div>
        </div>
      )}
    </header>
  );
}
