export interface NintendoGame {
  nsuid: string;
  title: string;
  slug: string;
  description: string;

  image: string;

  publisher: string | null;

  genres: string[];

  esrbRating: string | null;

  releaseDate: string | null;

  msrp: number | null;

  salePrice: number | null;

  lowestPrice: number | null;

  hasDiscount: boolean;
}

export interface AlgoliaResponse {
  results: {
    hits: unknown[];
    page: number;
    nbPages: number;
    nbHits: number;
  }[];
}
