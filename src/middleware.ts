import { NextResponse } from "next/server";
import { auth } from "./auth";
import { NextAuthRequest } from "next-auth";

export default auth(async (request: NextAuthRequest) => {
  if (!request.auth) {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }
  const role = request.auth.user.role;
  if (request.nextUrl.pathname.includes("curator")) {
    if (role !== "ADMIN" && role !== "CURATOR") {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }  }

  return NextResponse.next();
});
export const config = {
  // runtime: "nodejs",
  matcher: ["/curator/(.*)"],
};

