import {getTranslations} from 'next-intl/server';
import {ArrowUpRight, ShieldCheck} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';
import CtaBand from '@/components/shared/CtaBand';

/**
 * Partners Page: Institutional partner ecosystem, sectors of collaboration,
 * and verified alliance commitments.
 */
export default async function PartnersPage() {
  const t = await getTranslations('partners');
  const partnersList = await getTranslations('partnersList');
  const partners = partnersList.raw('items') as Array<{name: string; sector: string; tag: string}>;

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="04"
      />

      <section className="section-pad">
        <div className="wrap">
          <div className="partners-detailed-list">
            {partners.map((p, i) => (
              <article key={p.name} className="partner-detailed-row">
                <span className="partner-row-idx">0{i + 1}</span>
                <div className="partner-row-names">
                  <h2>{p.name}</h2>
                  <p className="partner-row-sector">{p.sector}</p>
                </div>
                <span className="partner-row-tag">{p.tag}</span>
                <ArrowUpRight size={20} className="partner-row-arrow" />
              </article>
            ))}
          </div>

          <div className="partner-transparency-note">
            <ShieldCheck size={18} className="note-icon" />
            <p>{t('note')}</p>
          </div>
        </div>
      </section>

      <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
    </>
  );
}

export {PartnersPage};
