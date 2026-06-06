import { NextResponse, type NextRequest } from "next/server";

const SERVER_ACTION_HEADER = "next-action";

export function proxy(request: NextRequest) {
  if (request.method === "POST" && request.headers.has(SERVER_ACTION_HEADER)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "header", key: "next-action" }],
    },
  ],
};
