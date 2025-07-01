import { NextResponse } from "next/server";
import { auth } from "../lib/auth";
import { NextAuthRequest } from "next-auth";

export default auth(async (request: NextAuthRequest) => {
  //If not logged in, redirect
  const role = request.auth?.user.role
  console.log("Middleware: " + role)
  if (!request.auth) {
    //change this to the login page
    // const absoluteURL = new URL("/signin", request.nextUrl.origin);
    return NextResponse.redirect("/");
  }

  //Has access, can continue
  return NextResponse.next();
});

//Matcher exampels at https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
//Paths to run middleware on, ig protects these paths
export const config = {
  matcher: ["/dashboard/collections/(.*)", "/dashboard/collections"],
};
