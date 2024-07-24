import type { NextRequest } from "next/server";

import { isAuthenticated } from "./lib/jwtTokenControl";

// Limit the middleware to paths starting with `/api/`
// matcher: ['/about/:path*', '/dashboard/:path*'],
export const config = {
  // matcher: '/api/v1/:function*'
  matcher: "/",
};

export async function middleware(request: NextRequest) {
  const result = await isAuthenticated(request);
  if (!result) {
    return Response.redirect(new URL("/login", request.url));
  }
  return Response.redirect(new URL("/", request.url));
}
