import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Updated matcher to include 'ru'
  matcher: ["/", "/(ru|en|es)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
}
