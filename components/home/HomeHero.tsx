import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight} from 'lucide-react';

/**
 * Hero Section: Company identity, core mission, and primary call to action.
 */
export default async function HomeHero() {
  const t = await getTranslations('home');
  const s = await getTranslations('shared');

  return (
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
  );
}

export {HomeHero};
