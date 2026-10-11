import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight} from 'lucide-react';

/**
 * Partners Preview Section: Evidence of alliance relationships with substantive descriptions.
 */
export default async function HomePartners() {
  const t = await getTranslations('home');
  const partnersList = await getTranslations('partnersList');

  const partners = partnersList.raw('items') as Array<{
    name: string;
    sector: string;
    tag: string;
    collaboration?: string;
  }>;

  return (
    <section className="partners-preview-section section-pad">
      <div className="wrap">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('partnersEyebrow')}
            </p>
            <h2 className="split-title">{t('partnersTitle')}</h2>
          </div>
          <p className="split-desc">{t('partnersLead')}</p>
        </div>

        <div className="partners-preview-grid">
          {partners.map((p, i) => (
            <div className="partner-item-card" key={p.name}>
              <div className="partner-card-header">
                <span className="partner-idx">0{i + 1}</span>
                <span className="partner-tag">{p.tag}</span>
              </div>
              <div className="partner-info">
                <h4>{p.name}</h4>
                <span className="partner-sector">{p.sector}</span>
              </div>
              {p.collaboration && (
                <p className="partner-collab-desc">{p.collaboration}</p>
              )}
            </div>
          ))}
        </div>

        <div className="section-footer-link">
          <Link className="button button-outline-dark" href="/partners">
            <span>{t('partnersLink')}</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export {HomePartners};
