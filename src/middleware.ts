import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/curator/(.*)"],

  // matcher: ["/dashboard"], // Specify the routes the middleware applies to
};

// import { NextResponse } from "next/server";
// import { NextAuthRequest } from "next-auth";
// import { auth } from "./lib/auth";

// export default auth(async (request: NextAuthRequest) => {
//   if (!request.auth) {
//     return NextResponse.redirect(new URL("/", request.nextUrl.origin));
//   }
//   const role = request.auth.user.role;
//   if (request.nextUrl.pathname.includes("curator")) {
//     if (role !== "ADMIN" && role !== "CURATOR") {
//       return NextResponse.redirect(new URL("/", request.nextUrl.origin));
//     }  }

//   return NextResponse.next();
// });
// export const config = {
//   // runtime: "nodejs",
//   matcher: ["/curator/(.*)"],
// };
