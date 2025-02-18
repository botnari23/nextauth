
import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// const protectedRoutes = ["/user-info"];
 /**
  * Next Auth system with middleware protection
  * @param request comment provider and uncomment this for using middleware
  * @returns 
  */
export default async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   if (isProtected) {
//     const token = await getToken({
//       req: request,
//       secret: process.env.AUTH_SECRET,
//     });
//     if (!token) {
//       return NextResponse.redirect(new URL("/api/auth/signin", request.url));
//     }
//   }
  return NextResponse.next();
}
