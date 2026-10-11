import {getTranslations} from 'next-intl/server';
import PageIntro from '@/components/shared/PageIntro';
import CtaBand from '@/components/shared/CtaBand';
import ServicesSection from '@/components/ServicesSection';

/**
 * Services Page: Full portfolio of capabilities with interactive sector filtering.
 */
export default async function ServicesPage() {
  const t = await getTranslations('servicesPage');

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="01"
        showBreadcrumb
      />

      <section className="wrap section-pad">
        <ServicesSection showFilters={true} />
      </section>

      <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
    </>
  );
}

export {ServicesPage};
