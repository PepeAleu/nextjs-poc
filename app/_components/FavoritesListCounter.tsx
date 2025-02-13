"use client";

import { useContext } from "react";
import { FavoritesContext } from "../_providers/FavoritesProvider";

export default function FavoritesListCounter({
  query,
}: {
  readonly query: string;
}) {
  const { filterFavorites } = useContext(FavoritesContext);
  const list = filterFavorites(query);
  return list?.length ?? 0;
}
