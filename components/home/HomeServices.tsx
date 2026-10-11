import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {Target, Sparkles, ArrowUpRight} from 'lucide-react';

/**
 * Capability Section: Editorial presentation of key service offerings and deliverables.
 */
export default async function HomeServices() {
  const t = await getTranslations('home');
  const s = await getTranslations('shared');
  const services = await getTranslations('services');

  const cards = services.raw('items') as Array<{
    id: string;
    number: string;
    name: string;
    tagline: string;
    description: string;
    deliverable?: string;
  }>;

  return (
    <section className="capability-section section-pad">
      <div className="wrap">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('servicesEyebrow')}
            </p>
            <h2 className="split-title">{t('capTitle')}</h2>
          </div>
          <p className="split-desc">{t('capLead')}</p>
        </div>

        <div className="service-editorial-grid">
          {cards.slice(0, 4).map((item) => (
            <article className="service-editorial-card" key={item.id}>
              <div className="service-card-top">
                <span className="service-badge">{item.number}</span>
                <div className="service-icon-box">
                  <Target size={22} strokeWidth={1.5} />
                </div>
              </div>
              <div className="service-card-heading">
                <span className="service-tagline">{item.tagline}</span>
                <h3>{item.name}</h3>
              </div>
              <p className="service-desc">{item.description}</p>

              {item.deliverable && (
                <div className="service-card-deliverable">
                  <div className="deliverable-label">
                    <Sparkles size={13} />
                    <span>{t('whatYouGet')}</span>
                  </div>
                  <p className="deliverable-text">{item.deliverable}</p>
                </div>
              )}

              <div className="service-card-action">
                <Link href={`/contact?service=${encodeURIComponent(item.name)}`} className="service-cta-link">
                  <span>{s('askAboutService')}</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer-link">
          <Link className="button button-outline-dark" href="/services">
            <span>{s('allServices')}</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export {HomeServices};
