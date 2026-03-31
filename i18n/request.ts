import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Validate that the locale is supported
  if (!locale || !routing.locales.includes(locale as "en" | "ru")) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    // Using a more explicit import pattern for Turbopack
    messages: (locale === "ru"
      ? await import("../app/messages/ru.json")
      : await import("../app/messages/en.json")
    ).default,
  }
})
