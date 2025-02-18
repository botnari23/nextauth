import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/user-info"];
export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }
  }
  return NextResponse.next();
}
