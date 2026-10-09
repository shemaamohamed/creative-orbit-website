import {getRequestConfig} from 'next-intl/server';
import {routing} from './lib/routing';
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = requested && routing.locales.includes(requested as 'ar'|'en') ? requested : routing.defaultLocale;
  return {locale, messages:(await import(`./lib/messages/${locale}.json`)).default};
});
