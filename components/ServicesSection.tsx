'use client';

import {useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {
  Megaphone,
  CalendarCheck2,
  BarChart3,
  Rocket,
  Handshake,
  TrendingUp,
  Globe2,
  Building2,
  ArrowUpRight,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Target,
} from 'lucide-react';
import {Link} from '@/lib/navigation';

const iconMap: Record<string, React.ElementType> = {
  marketing: Megaphone,
  events: CalendarCheck2,
  research: BarChart3,
  development: Rocket,
  alliances: Handshake,
  'investor-relations': TrendingUp,
  expansion: Globe2,
  'real-estate': Building2,
};

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  scope?: string;
  fit: string;
  objectives: string;
}

export default function ServicesSection({showFilters = true}: {showFilters?: boolean}) {
  const locale = useLocale();
  const ar = locale === 'ar';
  const t = useTranslations('servicesPage');
  const servicesData = useTranslations('services');
  const rawItems = (servicesData.raw('items') as ServiceItem[]) || [];

  const [filter, setFilter] = useState<'all' | 'marketing' | 'research' | 'growth' | 'investment' | 'other'>('all');

  const filteredItems = filter === 'all'
    ? rawItems
    : rawItems.filter(item => item.category === filter);

  return (
    <div className="services-section-wrapper">
      {showFilters && (
        <div className="services-filter-bar" role="group" aria-label={ar ? 'تصفية الخدمات حسب المجال' : 'Filter services by category'}>
          <button
            type="button"
            aria-pressed={filter === 'all'}
            aria-controls="service-results"
            onClick={() => setFilter('all')}
            className={`filter-pill ${filter === 'all' ? 'is-active' : ''}`}
          >
            {t('allTabs')}
          </button>
          <button
            type="button"
            aria-pressed={filter === 'marketing'}
            aria-controls="service-results"
            onClick={() => setFilter('marketing')}
            className={`filter-pill ${filter === 'marketing' ? 'is-active' : ''}`}
          >
            {t('filterMarketing')}
          </button>
          <button
            type="button"
            aria-pressed={filter === 'research'}
            aria-controls="service-results"
            onClick={() => setFilter('research')}
            className={`filter-pill ${filter === 'research' ? 'is-active' : ''}`}
          >
            {t('filterResearch')}
          </button>
          <button
            type="button"
            aria-pressed={filter === 'growth'}
            aria-controls="service-results"
            onClick={() => setFilter('growth')}
            className={`filter-pill ${filter === 'growth' ? 'is-active' : ''}`}
          >
            {t('filterGrowth')}
          </button>
          <button
            type="button"
            aria-pressed={filter === 'investment'}
            aria-controls="service-results"
            onClick={() => setFilter('investment')}
            className={`filter-pill ${filter === 'investment' ? 'is-active' : ''}`}
          >
            {t('filterInvestment')}
          </button>
          <button
            type="button"
            aria-pressed={filter === 'other'}
            aria-controls="service-results"
            onClick={() => setFilter('other')}
            className={`filter-pill ${filter === 'other' ? 'is-active' : ''}`}
          >
            {t('filterOther')}
          </button>
        </div>
      )}

      {showFilters && <p className="services-results-count" aria-live="polite">{t('resultCount', {count: filteredItems.length})}</p>}

      <div className="services-editorial-grid" id="service-results">
        {filteredItems.map((item) => {
          const IconComponent = iconMap[item.id] || Target;
          return (
            <article key={item.id} className="service-editorial-card">
              <div className="service-card-top">
                <span className="service-badge">{item.number}</span>
                <div className="service-icon-box">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
              </div>

              <div className="service-card-heading">
                <h3>{item.name}</h3>
                <span className="service-tagline">{item.tagline}</span>
              </div>

              <p className="service-desc">{item.description}</p>

              <details className="service-details-box">
                <summary className="service-details-summary">
                  <span>{t('detailsToggle')}</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div className="service-details-content">
                  <div className="service-detail-block">
                    <div className="detail-header">
                      <HelpCircle size={14} className="detail-icon" />
                      <strong>{t('fitLabel')}</strong>
                    </div>
                    <p>{item.fit}</p>
                  </div>

                  {item.scope && (
                    <div className="service-detail-block">
                      <div className="detail-header">
                        <CheckCircle size={14} className="detail-icon" />
                        <strong>{t('scopeLabel')}</strong>
                      </div>
                      <p>{item.scope}</p>
                    </div>
                  )}

                  <div className="service-detail-block">
                    <div className="detail-header">
                      <Target size={14} className="detail-icon" />
                      <strong>{t('aimLabel')}</strong>
                    </div>
                    <p>{item.objectives}</p>
                  </div>
                </div>
              </details>

              <div className="service-card-action">
                <Link
                  href={`/contact?service=${encodeURIComponent(item.name)}`}
                  className="service-cta-link"
                  aria-label={t('ctaService', {service: item.name})}
                >
                  <span>{t('ctaService', {service: item.name})}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
