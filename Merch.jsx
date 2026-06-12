import { useLanguage } from '../context/LanguageContext';
import { getProducts, pageTitles } from '../data/content';
import './Merch.css';

export default function Merch() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);

  return (
    <div className="page">
      <div className="kicker">
        <span className="kicker__line" />
        {pageTitles.merch[lang]}
      </div>
      <h1 className="page-title">{pageTitles.merch[lang]}</h1>
      <p className="lead">{t.merchLead}</p>

      <div className="grid-3">
        {products.map((pr) => (
          <div className="card product-card" key={pr.name}>
            <div className="placeholder product-card__img">
              <span className="placeholder__label">{t.phProduct}</span>
            </div>
            <div className="product-card__body">
              <div>
                <h3 className="product-card__name">{pr.name}</h3>
                <div className="product-card__price">{pr.price}</div>
              </div>
              <button type="button" className="product-card__cart">
                {t.addCart}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
