import { useLanguage } from '../context/LanguageContext';
import { mapHref, pageTitles } from '../data/content';
import Icon from '../components/Icon';
import './Contact.css';

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <div className="page page--medium">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.contact[lang]}
      </div>
      <h1 className="page-title">{pageTitles.contact[lang]}</h1>
      <p className="lead">{t.contactLead}</p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="card contact-info__item">
            <span className="contact-info__icon">
              <Icon name="pin" size={22} />
            </span>
            <div>
              <div className="contact-info__title">{t.visitT}</div>
              <p className="contact-info__text">
                {t.ohVenue}
                <br />
                {t.ohAddress}
              </p>
            </div>
          </div>
          <div className="card contact-info__item">
            <span className="contact-info__icon">
              <Icon name="contact" size={22} />
            </span>
            <div>
              <div className="contact-info__title">{t.emailT}</div>
              <p className="contact-info__text">
                info@samvetet.org
                <br />
                ordforande@samvetet.org
              </p>
            </div>
          </div>
          <div className="card contact-info__item">
            <span className="contact-info__icon">
              <Icon name="clock" size={22} />
            </span>
            <div>
              <div className="contact-info__title">{t.hoursT}</div>
              <p className="contact-info__text">{t.ohDay}</p>
            </div>
          </div>
          <a href={mapHref} target="_blank" rel="noreferrer" className="contact-map">
            <span className="contact-map__label">
              <span className="contact-map__label-icon">
                <Icon name="pin" size={22} />
              </span>
              {t.mapLabel} →
            </span>
          </a>
        </div>

        <div className="card contact-form">
          <form onSubmit={(e) => e.preventDefault()} className="contact-form__fields">
            <label className="contact-form__label">
              {t.formName}
              <input type="text" className="contact-form__input" />
            </label>
            <label className="contact-form__label">
              {t.formEmail}
              <input type="email" className="contact-form__input" />
            </label>
            <label className="contact-form__label">
              {t.formMsg}
              <textarea rows={5} className="contact-form__input contact-form__textarea" />
            </label>
            <button type="submit" className="btn btn--orange contact-form__submit">
              {t.formSend}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
