import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

/**
 * Next Auth system with middleware protection
 * @param request comment provider and uncomment this for using middleware
 * @returns
 */
// export default withAuth(function middleware(request: NextRequest) {}, {
//   callbacks: {
//     authorized: ({ token }) => {
//       return !!token;
//     },
//   },
// });
// export const config = {
//   matcher: ["/user-info"],
// };
