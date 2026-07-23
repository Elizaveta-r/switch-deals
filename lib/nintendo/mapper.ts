import { NintendoGame } from "./types";

export function mapGame(hit: any): NintendoGame {
  return {
    nsuid: hit.nsuid,
    title: hit.title,
    slug: hit.slug,
    description: hit.description,

    image: hit.horizontalHeaderImage,

    publisher: hit.publishers?.[0] ?? null,

    genres: hit.genres ?? [],

    esrbRating: hit.esrbRating ?? null,

    releaseDate: hit.releaseDateDisplay ?? null,

    msrp: hit.msrp ?? null,

    salePrice: hit.salePrice ?? null,

    lowestPrice: hit.lowestPrice ?? null,

    hasDiscount: hit.salePrice !== null,
  };
}
