"use client";

import { useContext } from "react";
import { FavoritesContext } from "../_providers/FavoritesProvider";
import ResultCounter from "./ResultCounter";

export default function FavoritesListCounter({
  query,
}: {
  readonly query: string;
}) {
  const { filterFavorites } = useContext(FavoritesContext);
  const list = filterFavorites(query);
  const counter = list?.length ?? 0;
  return <ResultCounter counter={counter} />;
}
