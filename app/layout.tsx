import {getLocale} from 'next-intl/server';
import './globals.css';
export const metadata = {title:'Creative Orbit Marketing Co.',description:'Creating Opportunities. Building Partnerships. Driving Growth.',icons:{icon:'/favicon.jpeg'}};
export default async function RootLayout({children}:{children:React.ReactNode}) {
  const locale = await getLocale();
  return <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}><body>{children}</body></html>;
}
