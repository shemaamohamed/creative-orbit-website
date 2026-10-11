import HomeHero from '@/components/home/HomeHero';
import HomeProof from '@/components/home/HomeProof';
import HomeServices from '@/components/home/HomeServices';
import HomeHowItWorks from '@/components/home/HomeHowItWorks';
import HomePartners from '@/components/home/HomePartners';
import HomeValues from '@/components/home/HomeValues';
import HomeContactCta from '@/components/home/HomeContactCta';

/**
 * Creative Orbit Landing / Home Page composed of modular narrative sections.
 */
export default async function HomePage() {
  return (
    <>
      {/* 1. Hero Section: Who you help, what you do, one primary action */}
      <HomeHero />

      {/* 2. Proof Section: Project outcomes, credible metrics, launch-phase verified facts */}
      <HomeProof />

      {/* 3. Services: What you offer and what a client gets from each service */}
      <HomeServices />

      {/* 4. How It Works: Combined 4-stage model + practical 5-step methodology */}
      <HomeHowItWorks />

      {/* 5. Partners Preview: Evidence of alliance relationships */}
      <HomePartners />

      {/* 6. Company Values: 5 distinctive values supported by real team behaviors */}
      <HomeValues />

      {/* 7. Contact Section: What happens after someone gets in touch & primary action */}
      <HomeContactCta />
    </>
  );
}

export {HomePage};
