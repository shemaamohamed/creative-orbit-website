import {getTranslations} from 'next-intl/server';
import {Link} from '@/lib/navigation';
import {ArrowUpRight} from 'lucide-react';
import StrategicOrbitVisual from '@/components/StrategicOrbitVisual';

/**
 * How It Works Section: Combined 4-stage architectural model and 5 operational steps.
 */
export default async function HomeHowItWorks() {
  const t = await getTranslations('home');
  const steps = await getTranslations('steps');
  const rawSteps = steps.raw('items') as Array<{number: string; title: string; desc: string}>;

  return (
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
  );
}

export {HomeHowItWorks};
