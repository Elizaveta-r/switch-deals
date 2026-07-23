import { AlgoliaResponse } from "./types";

const ALGOLIA_ID = "U3B6GR4UA3";
const ALGOLIA_KEY = "c4da8be7fd29f0f5bfa42920b0a99dc7";

export async function algolia(body: unknown): Promise<AlgoliaResponse> {
  const response = await fetch(
    `https://${ALGOLIA_ID}-dsn.algolia.net/1/indexes/*/queries`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Algolia-Application-Id": ALGOLIA_ID,
        "X-Algolia-API-Key": ALGOLIA_KEY,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Nintendo API returned ${response.status}`);
  }

  return response.json();
}
