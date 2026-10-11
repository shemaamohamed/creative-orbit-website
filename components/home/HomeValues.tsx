import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {CheckCircle2, ArrowUpRight} from 'lucide-react';

/**
 * Values Section: Core corporate values supported by concrete team behaviors.
 */
export default async function HomeValues() {
  const t = await getTranslations('home');
  const values = await getTranslations('values');

  const rawValues = values.raw('items') as Array<{
    name: string;
    desc: string;
    behavior?: string;
  }>;

  return (
    <section className="values-section section-pad">
      <div className="wrap">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('valuesEyebrow')}
            </p>
            <h2 className="split-title">{t('valuesTitle')}</h2>
          </div>
          <p className="split-desc">{t('valuesLead')}</p>
        </div>

        <div className="values-cards-grid">
          {rawValues.map((val, idx) => (
            <div className="value-card" key={val.name}>
              <div className="value-card-top">
                <span className="value-idx">0{idx + 1}</span>
                <CheckCircle2 size={18} className="value-check" />
              </div>
              <h4>{val.name}</h4>
              <p className="value-main-desc">{val.desc}</p>
              {val.behavior && (
                <div className="value-behavior-box">
                  <span className="behavior-tag">{t('valueBehaviorLabel')}</span>
                  <p className="behavior-text">{val.behavior}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="section-footer-link">
          <Link className="button button-outline-dark" href="/about">
            <span>{t('aboutLink')}</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export {HomeValues};
