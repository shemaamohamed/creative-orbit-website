import {getTranslations} from 'next-intl/server';
import {ShieldCheck} from 'lucide-react';

/**
 * Proof Section: Verified metrics and launch-phase commitments.
 */
export default async function HomeProof() {
  const t = await getTranslations('home');
  const proofItems = t.raw('proofItems') as Array<{
    num: string;
    label: string;
    desc: string;
  }>;

  return (
    <section className="proof-section section-pad">
      <div className="wrap">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('proofEyebrow')}
            </p>
            <h2 className="split-title">{t('proofTitle')}</h2>
          </div>
          <p className="split-desc">{t('proofLead')}</p>
        </div>

        <div className="proof-cards-grid">
          {proofItems.map((item, idx) => (
            <div className="proof-card" key={idx}>
              <div className="proof-card-top">
                <span className="proof-card-num">{item.num}</span>
                <ShieldCheck size={20} className="proof-icon" />
              </div>
              <h3 className="proof-card-label">{item.label}</h3>
              <p className="proof-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {HomeProof};
