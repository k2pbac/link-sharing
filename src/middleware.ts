import type { NextRequest } from "next/server";

import { isAuthenticated } from "./lib/jwtTokenControl";

// Limit the middleware to paths starting with `/api/`
// matcher: ['/about/:path*', '/dashboard/:path*'],
export const config = {
  // matcher: '/api/v1/:function*'
  matcher: ["/", "/login"],
};

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/login")) {
    const result = await isAuthenticated(request);
    if (!result) {
      return Response.redirect(new URL("/login", request.url));
    }
  } else if (request.nextUrl.pathname.startsWith("/login")) {
    const currentUser = request.cookies.get("token")?.value;
    if (currentUser) {
      return Response.redirect(new URL("/", request.url));
    } else {
      // do nothing
      return;
    }
  }
}
