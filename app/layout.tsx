import {getLocale} from 'next-intl/server';
import type {Metadata, Viewport} from 'next';
import {Cairo, Outfit} from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#193150',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://creativeorbit.sa'),
  title: {
    default: 'Creative Orbit Marketing Co. | شركة كرييتيف أوربيت ماركتينج',
    template: '%s | Creative Orbit',
  },
  description:
    'نحوّل العلاقات إلى فرص، والفرص إلى شراكات، والشراكات إلى نمو. Creating Opportunities. Building Partnerships. Driving Growth. Jeddah, Saudi Arabia.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Creative Orbit Marketing Co. | شركة كرييتيف أوربيت ماركتينج',
    description: 'نحوّل العلاقات إلى فرص، والفرص إلى شراكات، والشراكات إلى نمو. Jeddah, Saudi Arabia.',
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    siteName: 'Creative Orbit',
  },
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const locale = await getLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${cairo.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={locale === 'ar' ? 'font-cairo' : 'font-outfit'}>
        {children}
      </body>
    </html>
  );
}
