import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight, MessageSquare, Phone} from 'lucide-react';
import {CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF} from '@/lib/contact';

/**
 * Contact Next Steps Section: Sets transparent expectations for what happens
 * after getting in touch, with direct action buttons.
 */
export default async function HomeContactCta() {
  const t = await getTranslations('home');
  const s = await getTranslations('shared');

  return (
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
              <span dir="ltr" className="phone-number">{CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export {HomeContactCta};
