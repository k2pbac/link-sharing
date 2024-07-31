import type { NextRequest } from "next/server";

import { isAuthenticated } from "./lib/tokenControl";

// Limit the middleware to paths starting with `/` or `/login`
export const config = {
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
