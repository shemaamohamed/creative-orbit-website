import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/lib/routing';
import {StandardPage} from '@/components/Pages';

const pages = ['about', 'services', 'opportunities', 'partners', 'experience', 'contact', 'privacy'];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => pages.map((slug) => ({locale, slug: [slug]})));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug?: string[]}>;
}) {
  const {slug = []} = await params;
  const page = slug[0] || 'home';
  const t = await getTranslations(
    page === 'services' ? 'servicesPage' : page === 'privacy' ? 'privacy' : page
  );
  return {
    title: `${t('title')} | Creative Orbit`,
    description: t('lead'),
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{locale: string; slug?: string[]}>;
  searchParams: Promise<{service?: string | string[]}>;
}) {
  const {locale, slug = []} = await params;

  if (!routing.locales.includes(locale as 'ar' | 'en') || slug.length !== 1 || !pages.includes(slug[0])) {
    notFound();
  }

  const query = slug[0] === 'contact' ? await searchParams : undefined;
  const initialService = typeof query?.service === 'string' ? query.service : undefined;

  return <StandardPage slug={slug[0]} initialService={initialService} />;
}

