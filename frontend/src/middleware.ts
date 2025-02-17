import { NextResponse, type NextRequest } from "next/server";
import client from "./lib/backend/client";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const reqToken = request.cookies.get("accessToken");
  console.log(request.nextUrl.toString());

  if (request.nextUrl.pathname.startsWith("/post/edit/")) {
    console.log("접근 권한이 없습니다.");
    return NextResponse.error();
  }
  const nextResponse = NextResponse.next();

  const response = await client.GET("/api/v1/members/me", {
    headers: {
      cookie: (await cookies()).toString(),
    },
  });

  const springCookie = response.response.headers.getSetCookie();
  nextResponse.headers.set("set-cookie", String(springCookie));

  return nextResponse;
}

export const config = {
  matcher: "/:path*",
};
