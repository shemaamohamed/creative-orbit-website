import {getTranslations} from 'next-intl/server';
import {AlertTriangle} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';

/**
 * Privacy Policy Page: Transparency policy, preliminary regulatory disclosures,
 * and data privacy standards.
 */
export default async function PrivacyPage() {
  const t = await getTranslations('privacy');
  const sections = t.raw('sections') as Array<{title: string; text: string}>;

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="07"
      />

      <section className="section-pad">
        <div className="wrap privacy-content-wrap">
          <div className="privacy-review-banner">
            <AlertTriangle size={18} />
            <span>{t('note')}</span>
          </div>

          <p className="privacy-intro-p">{t('body')}</p>

          <div className="privacy-sections-stack">
            {sections.map((sec, idx) => (
              <article key={idx} className="privacy-sec-card">
                <h3>{sec.title}</h3>
                <p>{sec.text}</p>
              </article>
            ))}
          </div>

          <div className="privacy-pending-box">
            <p>{t('pending')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export {PrivacyPage};
