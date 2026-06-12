import { useLanguage } from '../context/LanguageContext';
import { getOrgs, pageTitles } from '../data/content';
import './Organisations.css';

export default function Organisations() {
  const { lang, t } = useLanguage();
  const orgs = getOrgs(lang);

  return (
    <div className="page">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.orgs[lang]}
      </div>
      <h1 className="page-title">{pageTitles.orgs[lang]}</h1>
      <p className="lead">{t.orgsLead}</p>

      <div className="placeholder orgs-banner">
        <span className="placeholder__label">{t.phOrgsImg}</span>
      </div>

      <span className="orgs-placeholder-note">{t.placeholderNote}</span>

      <div className="grid-3">
        {orgs.map((org) => (
          <div className="card org-card" key={org.num}>
            <div className="org-card__num">{org.num}</div>
            <h3 className="org-card__name">{org.name}</h3>
            <p className="org-card__desc">{org.desc}</p>
            <a href="#" className="eyebrow-link">
              {t.learnMore} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
