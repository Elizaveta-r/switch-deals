import { NextResponse } from "next/server";
import { getDiscountGames } from "@/lib/nintendo/games";

export async function GET() {
  const data = await getDiscountGames();

  return NextResponse.json(data);
}
