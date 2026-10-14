import {getLocale, getTranslations} from 'next-intl/server';
import {ArrowUpRight, Clock, MapPin, MessageSquare, Phone, ShieldCheck} from 'lucide-react';
import PageIntro from '@/components/shared/PageIntro';
import OrbitMark from '@/components/shared/OrbitMark';
import ContactForm from '@/components/ContactForm';
import {CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF} from '@/lib/contact';

export interface ContactPageProps {
  initialService?: string;
}

/**
 * Contact Page: Direct communication channels, Jeddah headquarters details,
 * executive assurances, and interactive inquiry drafting form.
 */
export default async function ContactPage({initialService}: ContactPageProps = {}) {
  const t = await getTranslations('contact');
  const s = await getTranslations('shared');
  const locale = await getLocale();
  const ar = locale === 'ar';

  return (
    <>
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        lead={t('lead')}
        index="06"
      />

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
                <span dir="ltr" className="phone-number">{CONTACT_PHONE_DISPLAY}</span>
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
                {ar
                  ? 'نلتزم بالرد السريع ومراجعة كافة الاستفسارات بخصوصية تامة واهتمام تنفيذي مباشر.'
                  : 'We are committed to prompt responses and reviewing all inquiries with absolute confidentiality and executive attention.'}
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

export {ContactPage};
