'use client';

import {useState} from 'react';
import {useLocale} from 'next-intl';
import {ArrowUpRight, Network, Target, Handshake, TrendingUp} from 'lucide-react';
import {Link} from '@/lib/navigation';

export default function StrategicOrbitVisual() {
  const locale = useLocale();
  const ar = locale === 'ar';
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'connection',
      num: '01',
      title: ar ? 'العلاقات وبناء الجسور' : 'Strategic Connections',
      subtitle: ar ? 'نبدأ بفهم منظومة الأعمال والأطراف المناسبة' : 'Mapping the ecosystem & key decision makers',
      desc: ar
        ? 'نبني شبكة علاقات موثوقة ونصل الكيانات برجال الأعمال والمستثمرين والشركاء القادرين على صناعة التأثير.'
        : 'Connecting enterprises, investors, and founders through an authoritative executive network.',
      icon: Network,
      nodePos: { cx: 70, cy: 190 },
      color: '#193150',
    },
    {
      id: 'opportunity',
      num: '02',
      title: ar ? 'صناعة واكتشاف الفرص' : 'Opportunity Creation',
      subtitle: ar ? 'نرى الإمكانات الكامنة حيث يتوقف الآخرون' : 'Unlocking latent value where others see friction',
      desc: ar
        ? 'تحليل السوق ودراسة الفجوات لصياغة فرص تجارية واستثمارية نوعية ذات جدوى اقتصادية واضحة.'
        : 'Analyzing market dynamics and gaps to architect viable, high-potential commercial ventures.',
      icon: Target,
      nodePos: { cx: 270, cy: 120 },
      color: '#A22725',
    },
    {
      id: 'partnership',
      num: '03',
      title: ar ? 'الشراكات والتحالفات' : 'Strategic Alliances',
      subtitle: ar ? 'هندسة نماذج تعاون عادلة تحقق قيمة متبادلة' : 'Structuring equitable, win-win collaboration frameworks',
      desc: ar
        ? 'إدارة الحوار التجاري والتفاوض الإيجابي حتى الوصول إلى اتفاقيات شراكة متينة وطويلة الأجل.'
        : 'Stewarding constructive negotiation to finalize sustainable, multi-party strategic pacts.',
      icon: Handshake,
      nodePos: { cx: 470, cy: 170 },
      color: '#193150',
    },
    {
      id: 'growth',
      num: '04',
      title: ar ? 'النمو والتوسع المستدام' : 'Sustainable Growth',
      subtitle: ar ? 'تحويل الشراكات إلى مشاريع وتوسع محلي ودولي' : 'Scaling ventures across Saudi & regional markets',
      desc: ar
        ? 'تفعيل المشاريع المشتركة ومواكبة التنفيذ للتوسع من السوق السعودي إلى الأسواق الخليجية والدولية.'
        : 'Operationalizing joint initiatives and scaling from the Saudi market to regional and global frontiers.',
      icon: TrendingUp,
      nodePos: { cx: 670, cy: 110 },
      color: '#A22725',
    },
  ];

  const current = stages[activeStage];
  const Icon = current.icon;

  return (
    <div className="strategic-orbit-container">
      <div className="orbit-interactive-header">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {ar ? 'المدار الاستراتيجي · فكرة الموقع الجوهرية' : 'STRATEGIC ORBIT · CORE VALUE FLOW'}
          </span>
          <h3 className="orbit-headline">
            {ar ? 'من العلاقة إلى النمو: مسار متصل لا ينقطع' : 'From Connection to Growth: An Unbroken Trajectory'}
          </h3>
        </div>
        <p className="orbit-subtext">
          {ar
            ? 'لا نقدم خدمات معزولة، بل نصمم مسارًا استراتيجيًا يربط كل مرحلة بما يليها لخلق قيمة اقتصادية مستدامة.'
            : 'We do not deliver isolated services; we engineer a continuous trajectory where every stage accelerates the next.'}
        </p>
      </div>

      <div className="orbit-diagram-card">
        {/* SVG Orbital Canvas */}
        <div className="orbit-canvas-wrapper" aria-hidden="true">
          <svg
            className="orbit-canvas"
            viewBox="0 0 740 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#193150" stopOpacity="0.25" />
                <stop offset="30%" stopColor="#A22725" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#193150" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A22725" stopOpacity="0.9" />
              </linearGradient>
              <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background gentle orbital ellipses */}
            <ellipse
              cx="370"
              cy="140"
              rx="340"
              ry="105"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <ellipse
              cx="370"
              cy="140"
              rx="310"
              ry="75"
              transform="rotate(-5 370 140)"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

            {/* Connecting Curving Pathway */}
            <path
              d="M 70 190 C 170 140, 190 120, 270 120 C 350 120, 390 170, 470 170 C 550 170, 590 110, 670 110"
              fill="none"
              stroke="url(#orbitLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Connecting Nodes */}
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const { cx, cy } = stage.nodePos;
              const isRed = stage.color === '#A22725';

              return (
                <g key={stage.id} className="orbit-svg-node">
                  {/* Outer pulse ring for active node */}
                  {isActive && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="22"
                      fill={isRed ? 'rgba(162, 39, 37, 0.12)' : 'rgba(25, 49, 80, 0.12)'}
                      className="node-pulse-circle"
                    />
                  )}
                  {/* Outer node circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? '13' : '9'}
                    fill="#FFFFFF"
                    stroke={stage.color}
                    strokeWidth={isActive ? '3.5' : '2'}
                    filter={isActive ? 'url(#nodeGlow)' : undefined}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  {/* Inner node center */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? '6' : '4'}
                    fill={stage.color}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  {/* Label on canvas */}
                  <text
                    x={cx}
                    y={cy + (idx % 2 === 0 ? 32 : -22)}
                    textAnchor="middle"
                    fill={isActive ? '#193150' : '#64748B'}
                    fontSize={isActive ? '11' : '10'}
                    fontWeight={isActive ? '700' : '600'}
                    fontFamily="inherit"
                  >
                    {stage.num} · {stage.title}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Interactive Stage Selector Tabs */}
        <div className="orbit-stage-selector" role="tablist" aria-label={ar ? 'مراحل المدار الاستراتيجي' : 'Strategic orbit stages'}>
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`stage-panel-${stage.id}`}
                id={`stage-tab-${stage.id}`}
                onClick={() => setActiveStage(idx)}
                className={`orbit-stage-btn ${isActive ? 'is-active' : ''}`}
                type="button"
              >
                <span className="stage-num">{stage.num}</span>
                <span className="stage-label">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Panel */}
        <div
          className="orbit-active-panel"
          id={`stage-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`stage-tab-${current.id}`}
        >
          <div className="active-panel-top">
            <div className="active-panel-badge">
              <Icon size={22} color={current.color} />
              <span>{current.num} / 04</span>
            </div>
            <div className="active-panel-titles">
              <h4>{current.title}</h4>
              <p className="panel-subtitle">{current.subtitle}</p>
            </div>
          </div>
          <p className="active-panel-desc">{current.desc}</p>
          <div className="active-panel-footer">
            <Link href="/opportunities" className="active-panel-cta">
              <span>{ar ? 'اكتشف كيف نطبق هذا في مشروعك' : 'Discover how we apply this to your project'}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
