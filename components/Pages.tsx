import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  AlertTriangle
} from 'lucide-react';
import ContactForm from './ContactForm';
import StrategicOrbitVisual from './StrategicOrbitVisual';
import ServicesSection from './ServicesSection';
import {CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF} from '@/lib/contact';

// Orbit Geometric Insignia
export function OrbitMark({className = ''}: {className?: string}) {
  return (
    <span aria-hidden="true" className={`orbit-mark ${className}`}>
      <span className="orbit-ring-outer" />
      <span className="orbit-ring-inner" />
      <i className="orbit-dot dot-1" />
      <b className="orbit-dot dot-2" />
      <em className="orbit-dot dot-3" />
    </span>
  );
}

// Reusable High-Impact CTA Band
export async function CtaBand({
  title,
  lead,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  lead: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const s = await getTranslations('shared');
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div className="cta-mark-col">
          <OrbitMark className="cta-orbit-mark" />
        </div>
        <div className="cta-copy-col">
          <p className="eyebrow cta-eyebrow">
            <span className="eyebrow-dot" />
            CREATIVE ORBIT · {s('opportunityCta')}
          </p>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-lead">{lead}</p>
        </div>
        <div className="cta-action-col">
          <Link className="button button-white cta-btn" href="/contact">
            <span>{s('discuss')}</span>
            <ArrowUpRight size={17} />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link className="cta-secondary-link" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// Page Intro Banner for Subpages
export async function PageIntro({
  eyebrow,
  title,
  lead,
  index,
  showBreadcrumb = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  index: string;
  showBreadcrumb?: boolean;
}) {
  const locale = await getLocale();
  const navigation = await getTranslations('navigation');
  return (
    <section className="page-intro">
      <div className="wrap page-intro-inner">
        {showBreadcrumb ? (
          <nav className="page-breadcrumb" aria-label={locale === 'ar' ? 'مسار التنقل' : 'Breadcrumb'}>
            <Link href="/">{navigation!('home')}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{eyebrow}</span>
          </nav>
        ) : (
          <p className="eyebrow intro-eyebrow">
            <span className="index-tag">{index} / 07</span>
            <span className="eyebrow-dot" />
            {eyebrow}
          </p>
        )}
        <h1 className="page-intro-title">{title}</h1>
        <p className="page-intro-lead">{lead}</p>

        {/* Ambient Orbit Motifs */}
        <div className="intro-orbit-ambient" aria-hidden="true">
          <div className="ambient-ellipse ellipse-1" />
          <div className="ambient-ellipse ellipse-2" />
          <i className="ambient-node node-a" />
          <i className="ambient-node node-b" />
        </div>
      </div>
    </section>
  );
}

// HOME PAGE
export async function HomePage() {
  const t = await getTranslations('home');
  const s = await getTranslations('shared');
  const services = await getTranslations('services');
  const values = await getTranslations('values');
  const steps = await getTranslations('steps');
  const partnersList = await getTranslations('partnersList');

  const cards = services.raw('items') as Array<{
    id: string;
    number: string;
    name: string;
    tagline: string;
    description: string;
    deliverable?: string;
  }>;
  const rawValues = values.raw('items') as Array<{
    name: string;
    desc: string;
    behavior?: string;
  }>;
  const rawSteps = steps.raw('items') as Array<{number: string; title: string; desc: string}>;
  const partners = partnersList.raw('items') as Array<{
    name: string;
    sector: string;
    tag: string;
    collaboration?: string;
  }>;
  const proofItems = t.raw('proofItems') as Array<{
    num: string;
    label: string;
    desc: string;
  }>;

  return (
    <>
      {/* 1. Hero Section: Who you help, what you do, one primary action */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              {t('eyebrow')}
            </p>

            <h1 className="hero-heading">{t('title')}</h1>

            <p className="hero-lead">{t('lead')}</p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-red hero-btn-primary">
                <span>{s('discuss')}</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link href="/services" className="hero-secondary-link">
                <span>{s('allServices')}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="hero-proof-badge">
              <div className="proof-seal">
                <span className="seal-text">CO</span>
              </div>
              <div className="proof-text">
                <strong>{t('localContext')}</strong>
                <small>{t('regionalAmbition')}</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <Image
                src="/images/hero-meeting.jpg"
                alt={t('imageAlt')}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="hero-main-photo"
              />
              <div className="hero-photo-scrim" />
            </div>

            {/* SVG Orbit Overlay on Photo */}
            <svg className="hero-orbit-svg" viewBox="0 0 600 450" fill="none" aria-hidden="true">
              <ellipse
                cx="300"
                cy="225"
                rx="260"
                ry="110"
                transform="rotate(-20 300 225)"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
              />
              <circle cx="460" cy="140" r="7" fill="#A22725" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="140" cy="310" r="5" fill="#FFFFFF" />
              <circle cx="340" cy="330" r="6" fill="#A22725" stroke="#FFFFFF" strokeWidth="2" />
            </svg>

            {/* Editorial Caption Bar */}
            <div className="hero-visual-caption">
              <span>01 / 04 · JEDDAH · KSA</span>
              <span>{t('connectionCaption')}</span>
            </div>

            {/* Authentic Brand Badge Overlay */}
            <div className="hero-logo-badge">
              <div className="badge-logo-frame">
                <Image
                  src="/logo.png"
                  alt="Creative Orbit Marketing Co."
                  width={140}
                  height={95}
                  className="badge-logo-img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Section: Project outcomes, credible metrics, launch-phase verified facts */}
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

      {/* 3. Services: What you offer and what a client gets from each service */}
      <section className="capability-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('servicesEyebrow')}
              </p>
              <h2 className="split-title">{t('capTitle')}</h2>
            </div>
            <p className="split-desc">{t('capLead')}</p>
          </div>

          <div className="service-editorial-grid">
            {cards.slice(0, 4).map((item) => (
              <article className="service-editorial-card" key={item.id}>
                <div className="service-card-top">
                  <span className="service-badge">{item.number}</span>
                  <div className="service-icon-box">
                    <Target size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="service-card-heading">
                  <span className="service-tagline">{item.tagline}</span>
                  <h3>{item.name}</h3>
                </div>
                <p className="service-desc">{item.description}</p>

                {item.deliverable && (
                  <div className="service-card-deliverable">
                    <div className="deliverable-label">
                      <Sparkles size={13} />
                      <span>{t('whatYouGet')}</span>
                    </div>
                    <p className="deliverable-text">{item.deliverable}</p>
                  </div>
                )}

                <div className="service-card-action">
                  <Link href={`/contact?service=${encodeURIComponent(item.name)}`} className="service-cta-link">
                    <span>{s('askAboutService')}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="button button-outline-dark" href="/services">
              <span>{s('allServices')}</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How It Works: Combined 4-stage model + practical 5-step methodology */}
      <section className="how-it-works-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('howItWorksEyebrow')}
              </p>
              <h2 className="split-title">{t('howItWorksTitle')}</h2>
            </div>
            <p className="split-desc">{t('howItWorksLead')}</p>
          </div>

          {/* Part A: The 4-Stage Architectural Trajectory */}
          <div className="how-model-wrapper">
            <StrategicOrbitVisual />
          </div>

          {/* Part B: The 5 Practical Operational Steps Underneath */}
          <div className="how-steps-wrapper">
            <div className="how-steps-header">
              <h3 className="how-steps-title">{t('fiveStepsTitle')}</h3>
              <p className="how-steps-lead">{t('fiveStepsLead')}</p>
            </div>

            <div className="how-steps-grid">
              {rawSteps.map((step) => (
                <div className="how-step-card" key={step.number}>
                  <div className="how-step-top">
                    <span className="how-step-badge">{step.number}</span>
                    <ArrowUpRight size={16} className="how-step-icon" />
                  </div>
                  <h4 className="how-step-name">{step.title}</h4>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="how-steps-action">
              <Link className="button button-outline-dark" href="/opportunities">
                <span>{t('viewMethod')}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partners or Projects: Evidence of work and relationships with substantive descriptions */}
      <section className="partners-preview-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('partnersEyebrow')}
              </p>
              <h2 className="split-title">{t('partnersTitle')}</h2>
            </div>
            <p className="split-desc">{t('partnersLead')}</p>
          </div>

          <div className="partners-preview-grid">
            {partners.map((p, i) => (
              <div className="partner-item-card" key={p.name}>
                <div className="partner-card-header">
                  <span className="partner-idx">0{i + 1}</span>
                  <span className="partner-tag">{p.tag}</span>
                </div>
                <div className="partner-info">
                  <h4>{p.name}</h4>
                  <span className="partner-sector">{p.sector}</span>
                </div>
                {p.collaboration && (
                  <p className="partner-collab-desc">{p.collaboration}</p>
                )}
              </div>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="button button-outline-dark" href="/partners">
              <span>{t('partnersLink')}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Company Values: 5 distinctive values supported by real team behaviors */}
      <section className="values-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('valuesEyebrow')}
              </p>
              <h2 className="split-title">{t('valuesTitle')}</h2>
            </div>
            <p className="split-desc">{t('valuesLead')}</p>
          </div>

          <div className="values-cards-grid">
            {rawValues.map((val, idx) => (
              <div className="value-card" key={val.name}>
                <div className="value-card-top">
                  <span className="value-idx">0{idx + 1}</span>
                  <CheckCircle2 size={18} className="value-check" />
                </div>
                <h4>{val.name}</h4>
                <p className="value-main-desc">{val.desc}</p>
                {val.behavior && (
                  <div className="value-behavior-box">
                    <span className="behavior-tag">{t('valueBehaviorLabel')}</span>
                    <p className="behavior-text">{val.behavior}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="button button-outline-dark" href="/about">
              <span>{t('aboutLink')}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Contact Section: What happens after someone gets in touch & primary action */}
      <section className="contact-next-section section-pad">
        <div className="wrap">
          <div className="contact-next-card">
            <div className="contact-next-header">
              <p className="eyebrow cta-eyebrow">
                <span className="eyebrow-dot" />
                {t('contactEyebrow')}
              </p>
              <h2 className="contact-next-title">{t('ctaTitle')}</h2>
              <p className="contact-next-lead">{t('ctaLead')}</p>
            </div>

            {/* What happens next 3-step sequence */}
            <div className="next-steps-container">
              <h3 className="next-steps-heading">{t('whatHappensNextTitle')}</h3>
              <div className="next-steps-grid">
                <div className="next-step-box">
                  <span className="next-step-num">{t('nextStep1Num')}</span>
                  <div className="next-step-content">
                    <h4>{t('nextStep1Title')}</h4>
                    <p>{t('nextStep1Desc')}</p>
                  </div>
                </div>
                <div className="next-step-box">
                  <span className="next-step-num">{t('nextStep2Num')}</span>
                  <div className="next-step-content">
                    <h4>{t('nextStep2Title')}</h4>
                    <p>{t('nextStep2Desc')}</p>
                  </div>
                </div>
                <div className="next-step-box">
                  <span className="next-step-num">{t('nextStep3Num')}</span>
                  <div className="next-step-content">
                    <h4>{t('nextStep3Title')}</h4>
                    <p>{t('nextStep3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct action links */}
            <div className="contact-next-actions">
              <Link className="button button-red contact-primary-btn" href="/contact">
                <span>{s('discuss')}</span>
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="button button-white contact-whatsapp-btn"
              >
                <MessageSquare size={17} />
                <span>{s('whatsapp')}</span>
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="button button-outline-light contact-phone-btn"
              >
                <Phone size={16} />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// STANDARD SUBPAGES
export async function StandardPage({slug, initialService}: {slug: string; initialService?: string}) {
  const s = await getTranslations('shared');

  // SERVICES PAGE
  if (slug === 'services') {
    const t = await getTranslations('servicesPage');
    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="01" showBreadcrumb />
        <section className="wrap section-pad">
          <ServicesSection showFilters={true} />
        </section>
        <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
      </>
    );
  }

  // ABOUT US PAGE
  if (slug === 'about') {
    const t = await getTranslations('about');
    const locale = await getLocale();
    const rawObjectives = t.raw('priorities') as string[];
    const aboutValues = t.raw('values') as Array<{name: string; desc: string}>;

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="02" showBreadcrumb />

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

        <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} secondaryHref="/services" secondaryLabel={s('services')} />
      </>
    );
  }

  // OPPORTUNITIES PAGE
  if (slug === 'opportunities') {
    const t = await getTranslations('opportunities');
    const steps = await getTranslations('steps');
    const rawSteps = steps.raw('items') as Array<{number: string; title: string; desc: string}>;

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="03" />

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

  // PARTNERS PAGE
  if (slug === 'partners') {
    const t = await getTranslations('partners');
    const partnersList = await getTranslations('partnersList');
    const partners = partnersList.raw('items') as Array<{name: string; sector: string; tag: string}>;

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="04" />

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

  // EXPERIENCE & PROJECTS PAGE
  if (slug === 'experience') {
    const t = await getTranslations('experience');
    const expAreas = await getTranslations('experienceAreas');
    const items = expAreas.raw('items') as Array<{number: string; title: string; desc: string}>;

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="05" />

        {/* Launch Phase Narrative */}
        <section className="section-pad">
          <div className="wrap launch-phase-card">
            <div className="launch-phase-badge">
              <span className="phase-mark">CO</span>
              <span className="phase-label">LAUNCH PHASE · مرحلة الانطلاق</span>
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
            <h2 className="section-sub-title">محاور التركيز الاستراتيجي والخبرة القيادية</h2>

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
                  توثيق منهجي للمشاريع والمخرجات فور اكتمالها لضمان مطابقة أعلى معايير الشفافية والمصداقية.
                </p>
              </div>
            </div>

            <div className="roadmap-milestones">
              <div className="milestone-box">
                <span className="milestone-dot" />
                <strong>المرحلة الحالية:</strong> إطلاق وتأسيس شبكة التحالفات والمشاريع
              </div>
              <div className="milestone-box">
                <span className="milestone-dot" />
                <strong>المرحلة التالية:</strong> توثيق مؤشرات الأداء ودراسات الجدوى المنجزة
              </div>
              <div className="milestone-box">
                <span className="milestone-dot" />
                <strong>المرحلة المستقبلية:</strong> نشر دراسات الحالة المفصلة والجوائز والشهادات
              </div>
            </div>
          </div>
        </section>

        <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
      </>
    );
  }

  // CONTACT PAGE
  if (slug === 'contact') {
    const t = await getTranslations('contact');
    const s = await getTranslations('shared');

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="06" />

        <section className="section-pad">
          <div className="wrap contact-page-grid">
            {/* Contact Aside Information */}
            <div className="contact-aside-info">
              <div className="aside-channel-card">
                <p className="eyebrow">
                  <span className="eyebrow-dot" />
                  {t('phoneLabel')}
                </p>
                <a href={CONTACT_PHONE_HREF} className="direct-phone-link">
                  <Phone size={20} />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={CONTACT_WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="direct-whatsapp-link"
                >
                  <MessageSquare size={20} />
                  <span>{s('whatsapp')}</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="aside-location-card">
                <div className="location-header">
                  <MapPin size={20} className="loc-icon" />
                  <div>
                    <strong>{t('locationLabel')}</strong>
                    <p>{t('headquartersValue')}</p>
                  </div>
                </div>
                <div className="hours-row">
                  <Clock size={16} />
                  <span>{t('officeHours')}</span>
                </div>
                <OrbitMark className="aside-orbit-mark" />
              </div>

              <div className="aside-assurance-note">
                <ShieldCheck size={18} />
                <p>
                  نلتزم بالرد السريع ومراجعة كافة الاستفسارات بخصوصية تامة واهتمام تنفيذي مباشر.
                </p>
              </div>
            </div>

            {/* Interactive Form Component */}
            <div className="contact-main-form">
              <ContactForm initialService={initialService} />
            </div>
          </div>
        </section>
      </>
    );
  }

  // PRIVACY PAGE
  if (slug === 'privacy') {
    const t = await getTranslations('privacy');
    const sections = t.raw('sections') as Array<{title: string; text: string}>;

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="07" />

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

  return (
    <PageIntro
      eyebrow="CREATIVE ORBIT"
      title="Find your next opportunity."
      lead="Explore our capabilities and begin a conversation with our team."
      index="00"
    />
  );
}
