import PageIntro from '@/components/shared/PageIntro';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import OpportunitiesPage from './OpportunitiesPage';
import PartnersPage from './PartnersPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';

export interface StandardPageProps {
  slug: string;
  initialService?: string;
}

/**
 * StandardPage: High-level dispatcher component for catch-all localized routes.
 * Delegates cleanly to independent, self-contained page components.
 */
export async function StandardPage({slug, initialService}: StandardPageProps) {
  switch (slug) {
    case 'about':
      return <AboutPage />;
    case 'services':
      return <ServicesPage />;
    case 'opportunities':
      return <OpportunitiesPage />;
    case 'partners':
      return <PartnersPage />;
    case 'experience':
      return <ExperiencePage />;
    case 'contact':
      return <ContactPage initialService={initialService} />;
    case 'privacy':
      return <PrivacyPage />;
    default:
      return (
        <PageIntro
          eyebrow="CREATIVE ORBIT"
          title="Find your next opportunity."
          lead="Explore our capabilities and begin a conversation with our team."
          index="00"
        />
      );
  }
}

export default StandardPage;
