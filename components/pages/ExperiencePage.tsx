import {getLocale, getTranslations} from 'next-intl/server';
import {Briefcase, Layers} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';
import CtaBand from '@/components/shared/CtaBand';

/**
 * Experience & Projects Page: Launch-phase transparent positioning,
 * strategic focus tracks, and case studies documentation roadmap.
 */
export default async function ExperiencePage() {
  const t = await getTranslations('experience');
  const locale = await getLocale();
  const ar = locale === 'ar';
  const expAreas = await getTranslations('experienceAreas');
  const items = expAreas.raw('items') as Array<{number: string; title: string; desc: string}>;

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="05"
      />

      {/* Launch Phase Narrative */}
      <section className="section-pad">
        <div className="wrap launch-phase-card">
          <div className="launch-phase-badge">
            <span className="phase-mark">CO</span>
            <span className="phase-label">
              {ar ? 'مرحلة الانطلاق · LAUNCH PHASE' : 'LAUNCH PHASE · مرحلة الانطلاق'}
            </span>
          </div>
          <div className="launch-phase-text">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('noteTitle')}
            </p>
            <h2>{t('note')}</h2>
            <p className="verified-commitment-text">{t('verifiedNote')}</p>
          </div>
        </div>
      </section>

      {/* 6 Strategic Focus Tracks */}
      <section className="section-pad experience-tracks-section">
        <div className="wrap">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {t('focusAreasTitle')}
          </p>
          <h2 className="section-sub-title">
            {ar ? 'محاور التركيز الاستراتيجي والخبرة القيادية' : 'Strategic Focus Tracks & Executive Expertise'}
          </h2>

          <div className="exp-tracks-grid">
            {items.map((item) => (
              <div className="exp-track-card" key={item.number}>
                <div className="track-card-top">
                  <span className="track-number">{item.number}</span>
                  <Briefcase size={20} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Case Studies Roadmap */}
      <section className="section-pad roadmap-section">
        <div className="wrap roadmap-container">
          <div className="roadmap-header">
            <Layers size={24} className="roadmap-icon" />
            <div>
              <h3>{t('roadmapTitle')}</h3>
              <p>
                {ar
                  ? 'توثيق منهجي للمشاريع والمخرجات فور اكتمالها لضمان مطابقة أعلى معايير الشفافية والمصداقية.'
                  : 'Systematic documentation of projects and deliverables upon completion to adhere to the highest standards of transparency and integrity.'}
              </p>
            </div>
          </div>

          <div className="roadmap-milestones">
            <div className="milestone-box">
              <span className="milestone-dot" />
              <strong>{ar ? 'المرحلة الحالية:' : 'Current Phase:'}</strong>{' '}
              {ar ? 'إطلاق وتأسيس شبكة التحالفات والمشاريع' : 'Launching and establishing alliance networks and initiatives'}
            </div>
            <div className="milestone-box">
              <span className="milestone-dot" />
              <strong>{ar ? 'المرحلة التالية:' : 'Next Phase:'}</strong>{' '}
              {ar ? 'توثيق مؤشرات الأداء ودراسات الجدوى المنجزة' : 'Documenting key performance indicators and completed feasibility outcomes'}
            </div>
            <div className="milestone-box">
              <span className="milestone-dot" />
              <strong>{ar ? 'المرحلة المستقبلية:' : 'Future Phase:'}</strong>{' '}
              {ar ? 'نشر دراسات الحالة المفصلة والجوائز والشهادات' : 'Publishing verified case studies, industry recognitions, and formal credentials'}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
    </>
  );
}

export {ExperiencePage};
