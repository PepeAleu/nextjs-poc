"use client";

import { FavoritesContext } from "@/app/_providers/FavoritesProvider";
import { ICharacter } from "@/modules/characters/domain/ICharacter";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

const FavoriteButton = ({ character }: { character: ICharacter }) => {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const favoriteIcon = favorites.has(character.id) ? (
    <HeartIcon title="Remove favorite" className="h-5 w-auto text-red-500" />
  ) : (
    <HeartIconOutline title="Add favorite" className="h-5 w-auto text-white" />
  );

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        toggleFavorite(character);
      }}
    >
      {favoriteIcon}
    </button>
  );
};

export { FavoriteButton };
