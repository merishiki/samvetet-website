import { useLanguage } from '../context/LanguageContext';
import { getSurveys, pageTitles } from '../data/content';
import Icon from '../components/Icon';
import './Surveys.css';

export default function Surveys() {
  const { lang, t } = useLanguage();
  const surveys = getSurveys(lang);

  return (
    <div className="page page--medium">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.surveys[lang]}
      </div>
      <h1 className="page-title">{pageTitles.surveys[lang]}</h1>
      <p className="lead">{t.surveysLead}</p>

      <div className="grid-3">
        {surveys.map((survey) => (
          <div className="card survey-card" key={survey.name}>
            <span className="survey-card__icon">
              <Icon name="survey" size={24} />
            </span>
            <h3 className="survey-card__name">{survey.name}</h3>
            <p className="survey-card__desc">{survey.desc}</p>
            <a href="#" className="eyebrow-link">
              {t.takeSurvey} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
