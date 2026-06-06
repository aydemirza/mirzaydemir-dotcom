import { NextResponse, type NextRequest } from "next/server";

const SERVER_ACTION_HEADER = "next-action";
const SERVER_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";

export function proxy(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.next();
  }

  if (request.headers.has(SERVER_ACTION_HEADER)) {
    return new NextResponse("Server action not found.", {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
        [SERVER_ACTION_NOT_FOUND_HEADER]: "1",
      },
    });
  }

  return new NextResponse(null, {
    status: 405,
    headers: {
      Allow: "GET, HEAD, OPTIONS",
      "Cache-Control": "no-store",
    },
  });
}
