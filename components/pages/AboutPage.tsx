import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {CheckCircle2, Sparkles, Target} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';
import CtaBand from '@/components/shared/CtaBand';

/**
 * About Us Page: Narrative perspective, Vision & Mission, priorities,
 * executive leadership, and operational principles.
 */
export default async function AboutPage() {
  const t = await getTranslations('about');
  const locale = await getLocale();
  const s = await getTranslations('shared');
  const rawObjectives = t.raw('priorities') as string[];
  const aboutValues = t.raw('values') as Array<{name: string; desc: string}>;

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="02"
        showBreadcrumb
      />

      {/* Narrative & Architecture Photo */}
      <section className="section-pad">
        <div className="wrap narrative-grid">
          <div className="narrative-aside">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('perspectiveEyebrow')}
            </p>
            <div className="about-media-box">
              <Image
                src="/images/corporate-hub.jpg"
                alt={locale === 'ar' ? 'مساحة أعمال حديثة في جدة' : 'Modern business space in Jeddah'}
                width={480}
                height={320}
                className="about-hub-img"
              />
            </div>
          </div>

          <div className="narrative-content">
            <h2 className="narrative-heading">{t('body')}</h2>

            <div className="vision-mission-cards">
              <article className="vision-card">
                <div className="card-top-marker">
                  <span className="marker-num">01</span>
                  <Sparkles size={18} />
                </div>
                <h3>{t('visionTitle')}</h3>
                <p>{t('vision')}</p>
              </article>

              <article className="mission-card">
                <div className="card-top-marker">
                  <span className="marker-num">02</span>
                  <Target size={18} />
                </div>
                <h3>{t('missionTitle')}</h3>
                <p>{t('mission')}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Client-facing priorities */}
      <section className="section-pad objectives-section">
        <div className="wrap">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {t('objectivesTitle')}
          </p>
          <h2 className="section-sub-title">{t('prioritiesHeadline')}</h2>
          <div className="objectives-list-grid">
            {rawObjectives.map((obj, i) => (
              <div className="objective-item" key={i}>
                <span className="obj-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Executive Profile */}
      <section className="leadership-section section-pad">
        <div className="wrap leadership-grid">
          <div className="leader-visual-col">
            <div className="leader-monogram-card">
              <div className="leader-seal">
                <Image
                  src="/favicon.png"
                  width={110}
                  height={70}
                  alt="Creative Orbit"
                  className="leader-seal-img"
                />
              </div>
              <div className="leader-orbit-ring" />
              <span className="leader-badge-title">{t('leadershipTitle')}</span>
            </div>
          </div>

          <div className="leader-info-col">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('leadershipTitle')}
            </p>
            <h2 className="leader-name">{t('leader')}</h2>
            <p className="leader-role">{t('role')}</p>
            <p className="leader-bio">{t('bio')}</p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="wrap section-pad">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          {t('aboutValuesTitle')}
        </p>
        <div className="values-cards-grid">
          {aboutValues.map((v, i) => (
            <div className="value-card" key={v.name}>
              <div className="value-card-top">
                <span className="value-idx">0{i + 1}</span>
                <CheckCircle2 size={16} className="value-check" />
              </div>
              <h4>{v.name}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title={t('ctaTitle')}
        lead={t('ctaLead')}
        secondaryHref="/services"
        secondaryLabel={s('services')}
      />
    </>
  );
}

export {AboutPage};
