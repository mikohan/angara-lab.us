import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  // 1. Define a strict type based on your actual locales array
  type Locale = (typeof routing.locales)[number]

  // 2. Validate without using 'any'
  if (!locale || !routing.locales.includes(locale as Locale)) {
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../app/messages/${routing.defaultLocale}.json`))
        .default,
    }
  }

  return {
    locale: locale as Locale, // Now TS knows this is exactly "en", "ru", or "es"
    messages: (await import(`../app/messages/${locale}.json`)).default,
  }
})
