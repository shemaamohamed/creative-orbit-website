import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
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
export async function CtaBand({title, lead}: {title: string; lead: string}) {
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
}: {
  eyebrow: string;
  title: string;
  lead: string;
  index: string;
}) {
  return (
    <section className="page-intro">
      <div className="wrap page-intro-inner">
        <p className="eyebrow intro-eyebrow">
          <span className="index-tag">{index} / 07</span>
          <span className="eyebrow-dot" />
          {eyebrow}
        </p>
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
  }>;
  const rawValues = values.raw('items') as Array<{name: string; desc: string}>;
  const rawSteps = steps.raw('items') as Array<{number: string; title: string; desc: string}>;
  const partners = partnersList.raw('items') as Array<{name: string; sector: string; tag: string}>;

  return (
    <>
      {/* 1. Hero Section */}
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
                <span>{s('explore')}</span>
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

      {/* 2. Editorial Statement: From Connection to Opportunity */}
      <section className="intro-section section-pad">
        <div className="wrap intro-grid">
          <div className="intro-aside">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              01 — {t('introTitle')}
            </p>
            <div className="intro-stat-box">
              <span className="stat-number">CO</span>
              <p className="stat-label">
                {t('localContext') === 'جدة، المملكة العربية السعودية'
                  ? 'منظومة أعمال سعودية متكاملة'
                  : 'Integrated Saudi Business Platform'}
              </p>
            </div>
          </div>

          <div className="intro-main">
            <h2 className="intro-heading">{t('introTitle')}</h2>
            <p className="intro-body-large">{t('intro')}</p>

            <div className="intro-orbit-divider">
              <span className="divider-line" />
              <span className="divider-node node-navy" />
              <span className="divider-node node-red" />
              <span className="divider-node node-navy" />
              <span className="divider-line" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Strategic Orbit Component */}
      <section className="orbit-interactive-section section-pad">
        <div className="wrap">
          <StrategicOrbitVisual />
        </div>
      </section>

      {/* 4. Strategic Capabilities (8 Core Services Preview) */}
      <section className="capability-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                02 — {s('services')}
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
                <div className="service-card-action">
                  <Link href={`/contact?service=${encodeURIComponent(item.name)}`} className="service-cta-link">
                    <span>{s('discuss')}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="button button-outline-dark" href="/services">
              <span>{s('all')} (8 {s('services')})</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Opportunity & Partnership 5-Step Process */}
      <section className="process-section section-pad">
        <div className="wrap process-layout">
          <div className="process-intro-col">
            <p className="eyebrow process-eyebrow">
              <span className="eyebrow-dot" />
              {t('processEyebrow')}
            </p>
            <h2 className="process-title">{t('processTitle')}</h2>
            <p className="process-lead-text">
              {t('localContext') === 'جدة، المملكة العربية السعودية'
                ? 'نؤمن بأن كل فرصة عظيمة تمر بمسار متدرج يبدأ بالاستماع العميق وتحديد التطلعات، وصولاً إلى بناء تحالف يحقق أثرًا مستدامًا.'
                : 'We believe every transformative opportunity follows a structured trajectory, starting from active listening to structuring sustainable alliances.'}
            </p>
            <Link className="button button-outline-light" href="/opportunities">
              <span>{s('learn')}</span>
              <ArrowUpRight size={16} />
            </Link>
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

      {/* 6. Corporate Culture & 8 Values */}
      <section className="values-section section-pad">
        <div className="wrap">
          <div className="values-header">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {t('valuesEyebrow')}
              </p>
              <h2 className="values-title">
                {t('valuesHeadline')}
                <br />
                <span className="values-title-sub">{t('valuesSubheadline')}</span>
              </h2>
            </div>
            <Link className="button button-outline-dark" href="/about">
              <span>{s('learn')}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="values-cards-grid">
            {rawValues.map((val, idx) => (
              <div className="value-card" key={val.name}>
                <div className="value-card-top">
                  <span className="value-idx">0{idx + 1}</span>
                  <CheckCircle2 size={18} className="value-check" />
                </div>
                <h4>{val.name}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partner Ecosystem Preview */}
      <section className="partners-preview-section section-pad">
        <div className="wrap">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                05 — منظومة الشركاء
              </p>
              <h2 className="split-title">
                {t('localContext') === 'جدة، المملكة العربية السعودية'
                  ? 'شركاؤنا في مسيرة بناء الفرص'
                  : 'Our Partners in Value Creation'}
              </h2>
            </div>
            <Link className="button button-outline-dark" href="/partners">
              <span>{s('learn')}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="partners-preview-grid">
            {partners.map((p, i) => (
              <div className="partner-item-card" key={p.name}>
                <span className="partner-idx">0{i + 1}</span>
                <div className="partner-info">
                  <h4>{p.name}</h4>
                  <span className="partner-sector">{p.sector}</span>
                </div>
                <span className="partner-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA Band */}
      <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
    </>
  );
}

// STANDARD SUBPAGES
export async function StandardPage({slug}: {slug: string}) {
  const s = await getTranslations('shared');

  // SERVICES PAGE
  if (slug === 'services') {
    const t = await getTranslations('servicesPage');
    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="01" />
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
    const values = await getTranslations('values');
    const objectives = await getTranslations('strategicObjectives');
    const rawValues = values.raw('items') as Array<{name: string; desc: string}>;
    const rawObjectives = objectives.raw('items') as string[];

    return (
      <>
        <PageIntro eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')} index="02" />

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
                  alt="Creative Orbit Corporate Headquarters"
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

        {/* 10 Strategic Objectives */}
        <section className="section-pad objectives-section">
          <div className="wrap">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t('objectivesTitle')}
            </p>
            <h2 className="section-sub-title">عشرة أهداف استراتيجية توجه منظومة أعمالنا</h2>
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
                <span className="leader-badge-title">CREATIVE ORBIT LEADERSHIP</span>
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
              <blockquote className="leader-statement">
                {t('leaderStatement')}
              </blockquote>
            </div>
          </div>
        </section>

        {/* All 8 Values */}
        <section className="wrap section-pad">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {t('valuesEyebrow')}
          </p>
          <div className="values-cards-grid">
            {rawValues.map((v, i) => (
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

        <CtaBand title={t('ctaTitle')} lead={t('ctaLead')} />
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
              <ContactForm />
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
