"use client";

import { ICharacter } from "@/modules/characters/domain/ICharacter";
import CharacterCard from "./CharacterCard";
import { useContext } from "react";
import { FavoritesContext } from "../_providers/FavoritesProvider";

export default function FavoritesList({ query }: { readonly query: string }) {
  const { filterFavorites } = useContext(FavoritesContext);
  const list = filterFavorites(query);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {list?.map((character: ICharacter) => (
        <CharacterCard key={character.id} character={character}></CharacterCard>
      ))}
    </div>
  );
}
