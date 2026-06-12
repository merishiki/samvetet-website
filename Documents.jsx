import { useLanguage } from '../context/LanguageContext';
import { getDocs, pageTitles } from '../data/content';
import Icon from '../components/Icon';
import './Documents.css';

export default function Documents() {
  const { lang, t } = useLanguage();
  const docs = getDocs(lang);

  return (
    <div className="page page--narrow">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.docs[lang]}
      </div>
      <h1 className="page-title">{pageTitles.docs[lang]}</h1>
      <p className="lead docs-lead">{t.docsLead}</p>

      <div className="card docs-list">
        {docs.map((doc) => (
          <div className="docs-row" key={doc.name}>
            <span className="docs-row__icon">
              <Icon name="docs" size={22} />
            </span>
            <div className="docs-row__body">
              <div className="docs-row__name">{doc.name}</div>
              <div className="docs-row__meta">{doc.meta}</div>
            </div>
            <a href="#" title={t.download} className="docs-row__download">
              <Icon name="download" size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
