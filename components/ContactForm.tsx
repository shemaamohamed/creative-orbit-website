'use client';

import {useState, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import {CONTACT_WHATSAPP_HREF} from '@/lib/contact';
import {MessageSquare, Mail, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check} from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
  formId?: string;
}

export default function ContactForm({initialService = '', formId = 'contact-inquiry-form'}: ContactFormProps) {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
    consent: false,
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({...prev, service: initialService}));
    }
  }, [initialService]);

  const [feedback, setFeedback] = useState<{type: 'idle' | 'success' | 'email-success' | 'error'; message: string}>({
    type: 'idle',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const {name, value, type} = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (feedback.type !== 'idle') {
      setFeedback({type: 'idle', message: ''});
    }
  }

  // Construct localized structured message
  function constructMessage(isArabic: boolean): string {
    const {name, company, email, phone, service, message} = formData;
    if (isArabic) {
      const parts = [
        `مرحبًا فريق Creative Orbit،`,
        `أنا: ${name || '[الاسم]'}`,
        company ? `اسم الشركة / الجهة: ${company}` : '',
        service ? `المجال / الخدمة محل الاهتمام: ${service}` : '',
        phone ? `رقم الجوال: ${phone}` : '',
        email ? `البريد الإلكتروني: ${email}` : '',
        `التفاصيل: ${message || '[نص الاستفسار]'}`,
        `أود استكشاف فرص التعاون ومناقشة تفاصيل المشروع معكم.`,
      ].filter(Boolean);
      return parts.join('\n');
    } else {
      const parts = [
        `Hello Creative Orbit team,`,
        `My name is: ${name || '[Name]'}`,
        company ? `Company / Organization: ${company}` : '',
        service ? `Area of interest / Service: ${service}` : '',
        phone ? `Phone: ${phone}` : '',
        email ? `Email: ${email}` : '',
        `Inquiry details: ${message || '[Your message]'}`,
        `I would like to explore opportunities to work together.`,
      ].filter(Boolean);
      return parts.join('\n');
    }
  }

  function validate(): boolean {
    if (!formData.name.trim()) {
      setFeedback({type: 'error', message: t('required') + ` (${t('name')})`});
      return false;
    }
    if (!formData.message.trim()) {
      setFeedback({type: 'error', message: t('required') + ` (${t('message')})`});
      return false;
    }
    if (!formData.consent) {
      setFeedback({type: 'error', message: t('consent')});
      return false;
    }
    return true;
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
    const text = constructMessage(isArabic);
    const waUrl = `${CONTACT_WHATSAPP_HREF}?text=${encodeURIComponent(text)}`;

    setFeedback({
      type: 'success',
      message: t('success'),
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  function handleEmailDraft(e: React.MouseEvent) {
    e.preventDefault();
    if (!validate()) return;

    const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
    const text = constructMessage(isArabic);
    const subject = isArabic
      ? `استفسار جديد - Creative Orbit: ${formData.service || formData.name}`
      : `New Inquiry - Creative Orbit: ${formData.service || formData.name}`;

    // Configurable email address placeholder with honest disclaimer
    const fallbackMail = 'contact@creativeorbit.sa';
    const mailtoUrl = `mailto:${fallbackMail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    setFeedback({
      type: 'email-success',
      message: t('emailSuccess') + ' ' + t('emailDisclaimer'),
    });

    window.location.href = mailtoUrl;
  }

  function handleCopyPreview() {
    const isArabic = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
    const text = constructMessage(isArabic);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const isAr = typeof document !== 'undefined' ? (document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl') : true;
  const currentPreview = constructMessage(isAr);
  const types = (t.raw('types') as string[]) || [];

  return (
    <div className="contact-form-card" id={formId}>
      <div className="form-card-header">
        <h2>{t('formTitle')}</h2>
        <p className="form-card-desc">{t('formDesc')}</p>
      </div>

      <form onSubmit={handleWhatsApp} noValidate>
        <div className="field-row">
          <div className="form-group">
            <label htmlFor={`${formId}-name`}>
              {t('name')} <span className="req-star" aria-hidden="true">*</span>
            </label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t('namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-company`}>
              {t('company')}
            </label>
            <input
              id={`${formId}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              placeholder={t('companyPlaceholder')}
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="field-row">
          <div className="form-group">
            <label htmlFor={`${formId}-phone`}>
              {t('phone')}
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={t('phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${formId}-email`}>
              {t('email')}
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t('emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor={`${formId}-service`}>
            {t('service')}
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">{t('choose')}</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor={`${formId}-message`}>
            {t('message')} <span className="req-star" aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            required
            placeholder={t('messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          />
        </div>

        <div className="form-consent">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span>{t('consent')}</span>
          </label>
        </div>

        {/* Live Message Preview Accordion */}
        <div className="message-preview-container">
          <div className="preview-top">
            <span className="preview-title">{t('previewTitle')}</span>
            <button
              type="button"
              onClick={handleCopyPreview}
              className="copy-preview-btn"
              title="Copy message preview"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ النص' : 'Copy text')}</span>
            </button>
          </div>
          <pre className="message-preview-box">{currentPreview}</pre>
        </div>

        {/* Status / Feedback Banner */}
        {feedback.type !== 'idle' && (
          <div
            className={`form-feedback-banner ${feedback.type === 'error' ? 'is-error' : 'is-success'}`}
            role="status"
            aria-live="polite"
          >
            {feedback.type === 'error' ? (
              <AlertCircle size={18} className="feedback-icon" />
            ) : (
              <CheckCircle2 size={18} className="feedback-icon" />
            )}
            <p>{feedback.message}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="form-actions-row">
          <button type="submit" className="button button-red submit-btn">
            <MessageSquare size={17} />
            <span>{t('submit')}</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleEmailDraft}
            className="button button-outline-dark email-btn"
          >
            <Mail size={16} />
            <span>{t('emailDraftAction')}</span>
          </button>
        </div>

        <p className="form-bottom-disclaimer">
          {t('privacy')}
        </p>
      </form>
    </div>
  );
}
