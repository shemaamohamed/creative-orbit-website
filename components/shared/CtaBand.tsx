import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight} from 'lucide-react';
import OrbitMark from './OrbitMark';

export interface CtaBandProps {
  title: string;
  lead: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Reusable high-impact Call To Action band component.
 */
export default async function CtaBand({
  title,
  lead,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  const s = await getTranslations('shared');

  return (
    <section className="cta-band mb-20">
      <div className="wrap cta-band-inner">
        <div className="cta-mark-col">
          <OrbitMark className="cta-orbit-mark" />
        </div>
        <div className="cta-copy-col">
          <p className="eyebrow cta-eyebrow">
            {s('opportunityCta')}
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

export {CtaBand};
