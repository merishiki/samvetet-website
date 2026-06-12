import { useLanguage } from '../context/LanguageContext';
import { getStats, getReps, getBoard, mapHref, pageTitles } from '../data/content';
import Icon from '../components/Icon';
import './About.css';

export default function About() {
  const { lang, t } = useLanguage();
  const stats = getStats(lang);
  const reps = getReps(lang);
  const board = getBoard(lang);

  return (
    <div className="page">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.about[lang]}
      </div>
      <h1 className="page-title about-title">{t.aboutLead}</h1>

      <div className="grid-3 about-stats">
        {stats.map((st) => (
          <div className="about-stat" key={st.label}>
            <div className="about-stat__num">{st.num}</div>
            <div className="about-stat__label">{st.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2 about-info">
        <div className="card about-info__card">
          <h2 className="about-info__title">{t.missionT}</h2>
          <p className="about-info__text">{t.missionD}</p>
        </div>
        <div className="card about-info__card">
          <h2 className="about-info__title">{t.structureT}</h2>
          <p className="about-info__text">{t.structureD}</p>
        </div>
      </div>

      {/* Office hours */}
      <section className="about-section">
        <h2 className="about-section__title">{t.officeHoursT}</h2>
        <div className="office-hours">
          <div className="card office-hours__card">
            <div className="office-hours__row">
              <span className="office-hours__icon">
                <Icon name="clock" size={22} />
              </span>
              <div>
                <div className="office-hours__label">{t.ohWhen}</div>
                <div className="office-hours__value">{t.ohDay}</div>
              </div>
            </div>
            <div className="office-hours__row office-hours__row--divider">
              <span className="office-hours__icon">
                <Icon name="pin" size={22} />
              </span>
              <div>
                <div className="office-hours__label">{t.ohWhere}</div>
                <div className="office-hours__address">
                  {t.ohVenue}
                  <br />
                  {t.ohAddress}
                </div>
              </div>
            </div>
          </div>
          <a href={mapHref} target="_blank" rel="noreferrer" className="placeholder office-hours__map">
            <span className="office-hours__map-dot" />
            <span className="office-hours__map-label">
              <span className="office-hours__map-label-icon">
                <Icon name="pin" size={22} />
              </span>
              {t.mapLabel} →
            </span>
          </a>
        </div>
      </section>

      {/* Representatives */}
      <section id="reps-section" className="about-section about-reps">
        <div className="kicker">
          <span className="kicker__line" />
          {t.repsKicker}
        </div>
        <h2 className="about-reps__title">{t.repsT}</h2>
        <p className="lead about-reps__lead">{t.repsLead}</p>

        <h3 className="section-label">{t.ftT}</h3>
        <div className="grid-4 about-reps__grid">
          {reps.map((r) => (
            <div className="card rep-card" key={r.name}>
              <div className="placeholder rep-card__photo">
                <span className="placeholder__label">{t.phPortrait}</span>
              </div>
              <div className="rep-card__body">
                <span className="rep-card__role">{r.role}</span>
                <h4 className="rep-card__name">{r.name}</h4>
                <a href="#" className="rep-card__email">
                  {t.emailMe} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-label">{t.boardT}</h3>
        <div className="grid-4">
          {board.map((b) => (
            <div className="card board-card" key={b.name}>
              <div className="board-card__avatar" />
              <div className="board-card__body">
                <div className="board-card__name">{b.name}</div>
                <div className="board-card__role">{b.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
