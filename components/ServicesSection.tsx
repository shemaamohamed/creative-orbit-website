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
  Target
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
  challenges: string;
  objectives: string;
}

export default function ServicesSection({showFilters = true}: {showFilters?: boolean}) {
  const locale = useLocale();
  const ar = locale === 'ar';
  const t = useTranslations('servicesPage');
  const servicesData = useTranslations('services');
  const rawItems = (servicesData.raw('items') as ServiceItem[]) || [];

  const [filter, setFilter] = useState<'all' | 'marketing' | 'growth' | 'investment'>('all');

  const filteredItems = filter === 'all'
    ? rawItems
    : rawItems.filter(item => item.category === filter);

  return (
    <div className="services-section-wrapper">
      {showFilters && (
        <div className="services-filter-bar" role="tablist" aria-label={ar ? 'تصنيفات الخدمات' : 'Service categories'}>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            onClick={() => setFilter('all')}
            className={`filter-pill ${filter === 'all' ? 'is-active' : ''}`}
          >
            {t('allTabs')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'marketing'}
            onClick={() => setFilter('marketing')}
            className={`filter-pill ${filter === 'marketing' ? 'is-active' : ''}`}
          >
            {t('filterMarketing')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'growth'}
            onClick={() => setFilter('growth')}
            className={`filter-pill ${filter === 'growth' ? 'is-active' : ''}`}
          >
            {t('filterGrowth')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'investment'}
            onClick={() => setFilter('investment')}
            className={`filter-pill ${filter === 'investment' ? 'is-active' : ''}`}
          >
            {t('filterInvestment')}
          </button>
        </div>
      )}

      <div className="services-editorial-grid">
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
                <span className="service-tagline">{item.tagline}</span>
                <h3>{item.name}</h3>
              </div>

              <p className="service-desc">{item.description}</p>

              {/* Challenges & Objectives accordion/content */}
              <div className="service-details-box">
                <div className="service-detail-block">
                  <div className="detail-header">
                    <HelpCircle size={14} className="detail-icon" />
                    <strong>{ar ? 'التحديات المحتملة:' : 'Potential Challenges:'}</strong>
                  </div>
                  <p>{item.challenges}</p>
                </div>

                <div className="service-detail-block">
                  <div className="detail-header">
                    <CheckCircle size={14} className="detail-icon" />
                    <strong>{ar ? 'أهداف التعامل المعتادة:' : 'Engagement Objectives:'}</strong>
                  </div>
                  <p>{item.objectives}</p>
                </div>
              </div>

              <div className="service-card-action">
                <Link
                  href={`/contact?service=${encodeURIComponent(item.name)}`}
                  className="service-cta-link"
                >
                  <span>{t('cta')}</span>
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
