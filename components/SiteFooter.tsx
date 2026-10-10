import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import Image from 'next/image';
import {ArrowUpRight, Phone, MessageSquare, MapPin} from 'lucide-react';
import {CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF} from '@/lib/contact';

export default async function SiteFooter() {
  const locale = await getLocale();
  const ar = locale === 'ar';
  const n = await getTranslations('navigation');
  const s = await getTranslations('shared');

  const navLinks = [
    {href: '/', label: n('home')},
    {href: '/about', label: n('about')},
    {href: '/services', label: n('services')},
    {href: '/opportunities', label: n('opportunities')},
    {href: '/partners', label: n('partners')},
    {href: '/experience', label: n('experience')},
    {href: '/contact', label: n('contact')},
  ];

  const capabilityLinks = [
    {href: '/services', label: ar ? 'التسويق والإعلان' : 'Advertising & Marketing'},
    {href: '/services', label: ar ? 'إدارة الفعاليات' : 'Event Management'},
    {href: '/services', label: ar ? 'أبحاث السوق واستطلاعات الرأي' : 'Market Research & Polls'},
    {href: '/services', label: ar ? 'تطوير الأعمال وصناعة الفرص' : 'Business Development'},
    {href: '/services', label: ar ? 'الشراكات والتحالفات الاستراتيجية' : 'Strategic Alliances'},
    {href: '/services', label: ar ? 'استقطاب الاستثمارات' : 'Investment Attraction'},
    {href: '/services', label: ar ? 'التوسع التجاري' : 'Business Expansion'},
  ];

  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link href="/" className="brand footer-brand-link" aria-label={ar ? 'شركة كرييتيف أوربيت' : 'Creative Orbit Marketing Co.'}>
            <div className="footer-logo-badge">
              <Image
                src="/logo.png"
                width={150}
                height={55}
                alt={ar ? 'شعار شركة كرييتيف أوربيت' : 'Creative Orbit Marketing Co.'}
                className="footer-logo-img"
              />
            </div>
            <span className="brand-wordmark footer-brand-wordmark">
              <strong className="brand-title footer-title">{ar ? 'كرييتيف أوربيت' : 'Creative Orbit'}</strong>
              <small className="brand-subtitle footer-subtitle">
                {ar ? 'للتسويق وتطوير الأعمال' : 'MARKETING CO.'}
              </small>
            </span>
          </Link>

          <p className="footer-statement">
            {s('brandStatement')}
          </p>

          <div className="footer-company-meta">
            <div className="meta-row">
              <MapPin size={15} className="meta-icon" />
              <span>{s('location')}</span>
            </div>
            <p className="meta-note">
              {ar
                ? 'شركة سعودية ذات مسؤولية محدودة تعمل في مجالات التسويق وتطوير الأعمال وبناء التحالفات.'
                : 'A Saudi limited liability company operating in marketing, business development, and strategic partnerships.'}
            </p>
          </div>

          {/* Saudi Vision 2030 context */}
          <div className="footer-vision-block">
            <div className="vision-badge-card">
              <div className="vision-img-frame">
                <Image
                  src="/vision-transparent.png"
                  width={80}
                  height={50}
                  alt={ar ? 'رؤية السعودية 2030' : 'Saudi Vision 2030'}
                  className="vision-logo-img"
                />
              </div>
              <div className="vision-badge-text">
                <span className="vision-badge-title">
                  {ar ? 'رؤية السعودية ٢٠٣٠' : 'Saudi Vision 2030'}
                </span>
                <p className="vision-badge-desc">
                  {ar
                    ? 'نركز على التسويق وتطوير الأعمال وبناء الشراكات في المملكة العربية السعودية.'
                    : 'Our work focuses on marketing, business development, and partnerships in Saudi Arabia.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <p className="footer-col-title">{ar ? 'خريطة الموقع' : 'SITEMAP'}</p>
          <ul className="footer-links-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities */}
        <div className="footer-links-col">
          <p className="footer-col-title">{ar ? 'المسارات الاستراتيجية' : 'CAPABILITIES'}</p>
          <ul className="footer-links-list">
            {capabilityLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="footer-links-col footer-contact-col">
          <p className="footer-col-title">{ar ? 'قنوات التواصل' : 'CONNECT'}</p>
          <div className="footer-contact-actions">
            <a href={CONTACT_PHONE_HREF} className="footer-contact-card" aria-label={ar ? 'الاتصال بكرييتيف أوربيت' : 'Call Creative Orbit'}>
              <Phone size={16} />
              <div>
                <span className="contact-card-label">{ar ? 'الاتصال الهاتفي' : 'Phone'}</span>
                <strong>{CONTACT_PHONE_DISPLAY}</strong>
              </div>
              <ArrowUpRight size={14} className="card-arrow" />
            </a>

            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-card is-whatsapp"
              aria-label={ar ? 'واتساب كرييتيف أوربيت' : 'WhatsApp Creative Orbit'}
            >
              <MessageSquare size={16} />
              <div>
                <span className="contact-card-label">{ar ? 'محادثة فورية' : 'Instant Chat'}</span>
                <strong>{ar ? 'واتساب الرسمي' : 'Official WhatsApp'}</strong>
              </div>
              <ArrowUpRight size={14} className="card-arrow" />
            </a>
          </div>

          <div className="footer-badge">
            <span className="badge-dot" />
            <span>{ar ? 'مقرنا: جدة · المملكة العربية السعودية' : 'HQ: Jeddah · Saudi Arabia'}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar with Developer Attribution & Links */}
      <div className="wrap footer-bottom">
        <div className="bottom-left">
          <span>© {new Date().getFullYear()} {ar ? 'شركة كرييتيف أوربيت للتسويق' : 'Creative Orbit Marketing Co.'}</span>
          <span className="bottom-divider">·</span>
          <span>{ar ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</span>
        </div>

        <div className="bottom-center">
          <span className="developer-credit">
            {ar ? 'تصميم وتطوير ' : 'Designed & Developed by '}
            <a
              href="https://shimaamohamed.bio.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-credit-link"
              title={ar ? 'زيارة صفحة محمود علي' : 'Visit Mahmoud Ali profile'}
            >
              {ar ? 'محمود علي' : 'Mahmoud Ali'}
            </a>
          </span>
        </div>

        <div className="bottom-right">
          <span>{ar ? 'جدة · المملكة العربية السعودية' : 'Jeddah · KSA'}</span>
        </div>
      </div>
    </footer>
  );
}
