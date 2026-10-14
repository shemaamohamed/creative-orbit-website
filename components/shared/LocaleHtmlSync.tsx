'use client';

import {useLayoutEffect} from 'react';

/**
 * Ensures <html> lang and dir attributes as well as body font classes
 * are immediately synchronized upon client-side locale navigation.
 */
export default function LocaleHtmlSync({locale}: {locale: string}) {
  useLayoutEffect(() => {
    const isAr = locale === 'ar';
    document.documentElement.lang = locale;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    if (isAr) {
      document.body.classList.add('font-cairo');
      document.body.classList.remove('font-outfit');
    } else {
      document.body.classList.add('font-outfit');
      document.body.classList.remove('font-cairo');
    }
  }, [locale]);

  return null;
}
