'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/lib/navigation';
import {Link} from '@/lib/navigation';
import {ArrowUpRight, Menu, X, Globe, MessageSquare} from 'lucide-react';
import {CONTACT_WHATSAPP_HREF} from '@/lib/contact';

export default function SiteHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ar = locale === 'ar';

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {key: 'home', url: '/', labelAr: 'الرئيسية', labelEn: 'Home'},
    {key: 'about', url: '/about', labelAr: 'من نحن', labelEn: 'About'},
    {key: 'services', url: '/services', labelAr: 'خدماتنا', labelEn: 'Services'},
    {key: 'opportunities', url: '/opportunities', labelAr: 'الفرص والشراكات', labelEn: 'Opportunities'},
    {key: 'partners', url: '/partners', labelAr: 'شركاؤنا', labelEn: 'Partners'},
    {key: 'experience', url: '/experience', labelAr: 'الخبرات والمشاريع', labelEn: 'Experience'},
    {key: 'contact', url: '/contact', labelAr: 'تواصل معنا', labelEn: 'Contact'},
  ];

  function switchLocale() {
    router.replace(pathname, {locale: ar ? 'en' : 'ar'});
    setOpen(false);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav-wrap">
          {/* Brand Link with Transparent Official Emblem */}
          <Link href="/" className="brand" aria-label="Creative Orbit Marketing Co.">
            <span className="brand-logo-container">
              <Image
                src="/favicon.png"
                width={50}
                height={30}
                alt="Creative Orbit"
                className="brand-logo-img"
                priority
              />
            </span>
            <span className="brand-wordmark">
              <strong className="brand-title">Creative Orbit</strong>
              <small className="brand-subtitle">
                {ar ? 'شركة كرييتيف أوربيت ماركتينج' : 'MARKETING CO.'}
              </small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>
            {navItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.key}
                  href={item.url}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                >
                  {ar ? item.labelAr : item.labelEn}
                </Link>
              );
            })}

            <div className="mobile-nav-footer">
              <button
                className="language-toggle mobile-lang-toggle"
                type="button"
                onClick={switchLocale}
                aria-label={ar ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <Globe size={16} />
                <span>{ar ? 'English (EN)' : 'العربية (AR)'}</span>
              </button>
              <Link className="button button-red mobile-contact-btn" href="/contact" onClick={() => setOpen(false)}>
                <span>{ar ? 'ناقش فرصتك معنا' : 'Discuss an Opportunity'}</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <button
              className="language-toggle"
              type="button"
              onClick={switchLocale}
              aria-label={ar ? 'Switch to English' : 'التبديل إلى العربية'}
              title={ar ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Globe size={14} className="globe-icon" />
              <span className="lang-code">{ar ? 'EN' : 'عربي'}</span>
            </button>

            <Link className="nav-cta button button-red" href="/contact">
              <span>{ar ? 'ناقش فرصتك' : 'Discuss Opportunity'}</span>
              <ArrowUpRight size={15} />
            </Link>

            <button
              className="menu-toggle"
              type="button"
              aria-label={open ? (ar ? 'إغلاق القائمة' : 'Close menu') : (ar ? 'فتح القائمة' : 'Open menu')}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Unobtrusive WhatsApp Quick Control */}
      <a
        href={CONTACT_WHATSAPP_HREF}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        aria-label={ar ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp'}
        title={ar ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp'}
      >
        <MessageSquare size={20} />
        <span className="floating-wa-label">{ar ? 'تواصل عبر واتساب' : 'WhatsApp'}</span>
      </a>
    </>
  );
}
