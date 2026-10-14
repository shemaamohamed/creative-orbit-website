import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {CheckCircle2, Sparkles, Target, Compass, Globe, Quote} from 'lucide-react';
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
  const rawPositions = t.raw('positions') as Array<{
    entity: string;
    role: string;
    tag: string;
    scope: string;
  }>;
  const rawSectors = t.raw('sectors') as string[];

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

      {/* CEO Executive Profile & Strategic Portfolio */}
      <section className="leadership-section section-pad">
        <div className="wrap leadership-layout">
          <div className="leadership-grid">
            <div className="leader-visual-col">
              <div className="leader-portrait-card">
                <div className="leader-portrait-backdrop">
                  <div className="leader-orbit-ring" />
                  <div className="leader-orbit-ring-secondary" />
                </div>
                <div className="leader-portrait-frame">
                  <Image
                    src="/images/mohammed-ayedh-al-sufyani.png"
                    width={560}
                    height={550}
                    alt={t('leader')}
                    priority
                    className="leader-portrait-img"
                  />
                </div>
                <div className="leader-portrait-tag-pill">
                  <span className="pill-dot" />
                  <span>{t('ceoBadge')}</span>
                </div>
              </div>
            </div>

            <div className="leader-info-col">
              <div className="leader-badges-row">
                <span className="leader-badge-primary">
                  <span className="badge-pulse-dot" />
                  {t('entrepreneurBadge')}
                </span>
                <span className="leader-badge-secondary">
                  <Globe size={13} />
                  {t('scopeBadge')}
                </span>
              </div>

              <h2 className="leader-name">{t('leader')}</h2>

              <div className="leader-tagline-quote">
                <Quote size={20} className="tagline-quote-icon" />
                <p className="leader-tagline-text">{t('tagline')}</p>
              </div>

              <p className="leader-bio">{t('bio')}</p>

              <div className="leader-philosophy-card">
                <div className="philosophy-header">
                  <Compass size={16} className="philosophy-icon" />
                  <span className="philosophy-label">{t('philosophyLabel')}</span>
                </div>
                <p className="philosophy-body">{t('bioPhilosophy')}</p>
              </div>

              <div className="leader-sectors-block">
                <p className="sectors-title">{t('sectorsTitle')}</p>
                <div className="sectors-pills-wrap">
                  {rawSectors.map((sector) => (
                    <span key={sector} className="sector-pill">
                      <span className="sector-dot" />
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Executive Positions & Strategic Partnerships */}
          <div className="leader-positions-block">
            <div className="leader-positions-header">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('rolesTitle')}
              </p>
              <h3 className="section-sub-title">{t('rolesSubtitle')}</h3>
            </div>

            <div className="leader-positions-grid">
              {rawPositions.map((pos, idx) => (
                <article key={pos.entity} className={`leader-position-card ${idx === 0 ? 'is-flagship' : ''}`}>
                  <div className="position-card-top">
                    <span className="position-idx">0{idx + 1}</span>
                    <span className="position-tag">{pos.tag}</span>
                  </div>
                  <h4 className="position-entity">{pos.entity}</h4>
                  <div className="position-role-badge">
                    <span>{pos.role}</span>
                  </div>
                  <p className="position-scope">{pos.scope}</p>
                </article>
              ))}
            </div>
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
