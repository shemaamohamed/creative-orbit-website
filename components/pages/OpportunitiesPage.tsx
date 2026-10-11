import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';
import CtaBand from '@/components/shared/CtaBand';
import OrbitMark from '@/components/shared/OrbitMark';

/**
 * Opportunities Page: Structured methodology for creating business opportunities,
 * commercial trajectory, and regulatory transparency disclaimer.
 */
export default async function OpportunitiesPage() {
  const t = await getTranslations('opportunities');
  const steps = await getTranslations('steps');
  const s = await getTranslations('shared');
  const rawSteps = steps.raw('items') as Array<{number: string; title: string; desc: string}>;

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="03"
      />

      {/* 5-Step Process Narrative */}
      <section className="process-section section-pad">
        <div className="wrap process-layout">
          <div className="process-intro-col">
            <p className="eyebrow process-eyebrow">
              <span className="eyebrow-dot" />
              {t('approachEyebrow')}
            </p>
            <h2 className="process-title">{t('processTitle')}</h2>
            <p className="process-lead-text">{t('processDesc')}</p>
          </div>

          <div className="process-steps-col">
            {rawSteps.map((step) => (
              <div className="process-step-item" key={step.number}>
                <span className="step-num-badge">{step.number}</span>
                <div className="step-text-wrap">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                <ArrowUpRight size={18} className="step-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Disclaimer Box */}
      <section className="section-pad">
        <div className="wrap opportunity-disclaimer-box">
          <OrbitMark className="disclaimer-orbit-mark" />
          <div className="disclaimer-content">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('disclaimerEyebrow')}
            </p>
            <h2>{t('disclaimerTitle')}</h2>
            <p>{t('disclaimerBody')}</p>
            <div className="disclaimer-action">
              <Link className="button button-red" href="/contact?service=تطوير الأعمال وصناعة الفرص">
                <span>{s('discuss')}</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
    </>
  );
}

export {OpportunitiesPage};
