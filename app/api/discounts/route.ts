import { NextRequest, NextResponse } from "next/server";
import { getDiscountGames } from "@/lib/nintendo";

export async function GET(request: NextRequest) {
  const all = request.nextUrl.searchParams.get("all") === "true";

  const limit = Number(request.nextUrl.searchParams.get("limit") ?? "100");

  if (!all) {
    const page = Number(request.nextUrl.searchParams.get("page") ?? "0");

    const data = await getDiscountGames({
      page,
      hitsPerPage: limit,
    });

    return NextResponse.json(data);
  }

  const firstPage = await getDiscountGames({
    page: 0,
    hitsPerPage: limit,
  });

  const pages = [];

  for (let i = 0; i < firstPage.totalPages; i++) {
    const page = await getDiscountGames({
      page: i,
      hitsPerPage: limit,
    });

    pages.push(...page.games);
  }

  return NextResponse.json({
    games: pages,
    total: pages.length,
  });
}
