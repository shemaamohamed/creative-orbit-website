import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';

export interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead: string;
  index: string;
  showBreadcrumb?: boolean;
}

/**
 * Standardized page introduction header banner for subpages.
 */
export default async function PageIntro({
  eyebrow,
  title,
  lead,
  index,
  showBreadcrumb = false,
}: PageIntroProps) {
  const locale = await getLocale();
  const navigation = await getTranslations('navigation');

  return (
    <section className="page-intro">
      <div className="wrap page-intro-inner">
        {showBreadcrumb ? (
          <nav className="page-breadcrumb" aria-label={locale === 'ar' ? 'مسار التنقل' : 'Breadcrumb'}>
            <Link href="/">{navigation('home')}</Link>
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

export {PageIntro};
