import {notFound} from 'next/navigation';
import {routing} from '@/lib/routing';
import HomePage from '@/components/pages/HomePage';

export default async function Page({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as 'ar' | 'en')) {
    notFound();
  }

  return <HomePage />;
}

