import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/routing';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import LocaleHtmlSync from '@/components/shared/LocaleHtmlSync';
export function generateStaticParams(){return routing.locales.map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!routing.locales.includes(locale as 'ar'|'en')) notFound();
  const messages=await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlSync locale={locale} />
      <a className="skip-link" href="#main-content">{locale==='ar'?'تجاوز إلى المحتوى':'Skip to content'}</a>
      <SiteHeader/>
      <main id="main-content">{children}</main>
      <SiteFooter/>
    </NextIntlClientProvider>
  );
}
