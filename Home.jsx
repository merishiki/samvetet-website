import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getPillars, socials } from '../data/content';
import Icon from '../components/Icon';
import './Home.css';

export default function Home() {
  const { t, lang } = useLanguage();
  const pillars = getPillars(lang);

  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div>
          <div className="kicker">
            <span className="kicker__line" />
            {t.heroEyebrow}
          </div>
          <h1 className="home-hero__title">{t.heroTitle}</h1>
          <p className="home-hero__sub">{t.heroSub}</p>
          <div className="home-hero__ctas">
            <a href="#" className="btn btn--primary">
              {t.heroCta1}
            </a>
            <a href="#" className="btn btn--outline">
              {t.heroCta2}
            </a>
          </div>
        </div>
        <div className="placeholder home-hero__img">
          <span className="placeholder__label">{t.phHeroImg}</span>
        </div>
      </section>

      <div className="home-modules">
        {/* Pillars */}
        <section className="home-pillars">
          <h2 className="section-label">{t.pillarsT}</h2>
          <div className="grid-3">
            {pillars.map((p) => (
              <div className="card home-pillar" key={p.title}>
                <span className="home-pillar__icon">
                  <Icon name={p.icon} size={26} />
                </span>
                <h3 className="home-pillar__title">{p.title}</h3>
                <p className="home-pillar__desc">{p.desc}</p>
                {p.link && (
                  <Link to={p.link} className="home-pillar__cta">
                    {t.surveysCta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reps + Merch split */}
        <section className="home-split">
          <Link to="/about#reps-section" className="home-tile home-tile--reps">
            <span className="home-tile__icon home-tile__icon--reps">
              <Icon name="users" size={26} />
            </span>
            <div>
              <h3 className="home-tile__title">{t.repsT}</h3>
              <p className="home-tile__desc home-tile__desc--reps">{t.repsD}</p>
              <span className="home-tile__cta home-tile__cta--reps">{t.meetThem} →</span>
            </div>
          </Link>
          <Link to="/merch" className="home-tile home-tile--merch">
            <span className="home-tile__icon home-tile__icon--merch">
              <Icon name="bag" size={26} />
            </span>
            <div>
              <h3 className="home-tile__title home-tile__title--dark">{t.merchT}</h3>
              <p className="home-tile__desc home-tile__desc--merch">{t.merchD}</p>
              <span className="home-tile__cta home-tile__cta--merch">{t.shopNow} →</span>
            </div>
          </Link>
        </section>

        {/* Socials banner */}
        <section className="home-socials">
          <div>
            <h2 className="home-socials__title">{t.followT}</h2>
            <p className="home-socials__desc">{t.followD}</p>
          </div>
          <div className="home-socials__list">
            {socials.map((soc) => (
              <a key={soc.icon} href={soc.href} target="_blank" rel="noreferrer" className="home-social-link">
                <span className="home-social-link__icon">
                  <Icon name={soc.icon} size={18} />
                </span>
                {soc.handle}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
