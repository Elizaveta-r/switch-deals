import { algolia } from "./client";
import { mapGame } from "./mapper";
import { NintendoGame } from "./types";

const INDEX_NAME = "ncom_game_en_us_title_asc";

export interface GetDiscountGamesOptions {
  page?: number;
  hitsPerPage?: number;
}

export interface DiscountGamesResponse {
  games: NintendoGame[];
  page: number;
  totalPages: number;
  totalGames: number;
}

export async function getDiscountGames(
  options: GetDiscountGamesOptions = {},
): Promise<DiscountGamesResponse> {
  const { page = 0, hitsPerPage = 100 } = options;

  const body = {
    requests: [
      {
        indexName: INDEX_NAME,
        params: new URLSearchParams({
          page: page.toString(),
          hitsPerPage: hitsPerPage.toString(),
          facetFilters: JSON.stringify([
            ["generalFilters:Deals"],
            ["availability:Available now"],
          ]),
        }).toString(),
      },
    ],
  };

  const response = await algolia(body);

  const result = response.results[0];

  return {
    games: result.hits.map(mapGame),
    page: result.page,
    totalPages: result.nbPages,
    totalGames: result.nbHits,
  };
}
