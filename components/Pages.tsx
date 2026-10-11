/**
 * @file Pages.tsx
 * Unified entry point re-exporting shared UI primitives and independent page components.
 *
 * For granular imports prefer:
 * - Shared primitives: `@/components/shared/...`
 * - Modular home sections: `@/components/home/...`
 * - Independent pages: `@/components/pages/...`
 */

// Shared Primitives
export {default as OrbitMark, OrbitMark as OrbitMarkNamed} from './shared/OrbitMark';
export * from './shared/OrbitMark';

export {default as CtaBand, CtaBand as CtaBandNamed} from './shared/CtaBand';
export * from './shared/CtaBand';

export {default as PageIntro, PageIntro as PageIntroNamed} from './shared/PageIntro';
export * from './shared/PageIntro';

// Modular Home Sections
export * from './home';

// Independent Pages
export {default as HomePage, HomePage as HomePageNamed} from './pages/HomePage';
export * from './pages/HomePage';

export {default as AboutPage, AboutPage as AboutPageNamed} from './pages/AboutPage';
export * from './pages/AboutPage';

export {default as ServicesPage, ServicesPage as ServicesPageNamed} from './pages/ServicesPage';
export * from './pages/ServicesPage';

export {default as OpportunitiesPage, OpportunitiesPage as OpportunitiesPageNamed} from './pages/OpportunitiesPage';
export * from './pages/OpportunitiesPage';

export {default as PartnersPage, PartnersPage as PartnersPageNamed} from './pages/PartnersPage';
export * from './pages/PartnersPage';

export {default as ExperiencePage, ExperiencePage as ExperiencePageNamed} from './pages/ExperiencePage';
export * from './pages/ExperiencePage';

export {default as ContactPage, ContactPage as ContactPageNamed} from './pages/ContactPage';
export * from './pages/ContactPage';

export {default as PrivacyPage, PrivacyPage as PrivacyPageNamed} from './pages/PrivacyPage';
export * from './pages/PrivacyPage';

export {default as StandardPage, StandardPage as StandardPageNamed} from './pages/StandardPage';
export * from './pages/StandardPage';
