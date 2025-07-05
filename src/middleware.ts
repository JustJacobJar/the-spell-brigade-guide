import { NextResponse } from "next/server";
import { auth } from "./auth";
import { NextAuthRequest } from "next-auth";

export default auth(async (request: NextAuthRequest) => {
  //Check for logged in
  if (!request.auth) {
    //change this to the login page
    // const absoluteURL = new URL("/signin", request.nextUrl.origin);
    const url = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  const role = request.auth.user.role;

  if (request.nextUrl.pathname.includes("curator")) {
    //USERS DO NOT HAVE ACCESS
    if (role !== "ADMIN" && role !== "CURATOR") {
      const url = new URL("/", request.nextUrl.origin);
      return NextResponse.redirect(url);
    }
  }

  //Has access, can continue
  return NextResponse.next();
});

//Matcher exampels at https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
//Paths to run middleware on, ig protects these paths
export const config = {
  matcher: ["/curator/(.*)"],
};

export const runtime = "experimental-edge";
