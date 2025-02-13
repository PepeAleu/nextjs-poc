"use client";

import { ICharacter } from "@/modules/characters/domain/ICharacter";
import { createContext, useMemo, useState } from "react";

const initialFavorites = new Map<string, ICharacter>();

export const FavoritesContext = createContext<{
  favorites: Map<string, ICharacter>;
  toggleFavorite: (item: ICharacter) => void;
  filterFavorites: (query: string) => ICharacter[];
}>({
  favorites: initialFavorites,
  toggleFavorite: () => {},
  filterFavorites: () => [],
});

export function FavoritesProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [favorites, setFavorites] =
    useState<Map<string, ICharacter>>(initialFavorites);

  const toggleFavorite = (item: ICharacter) => {
    if (!favorites.delete(item.id)) {
      setFavorites(favorites.set(item.id, item));
    }
    setFavorites(new Map(favorites));
  };

  const filterFavorites = (query: string) => {
    return Array.from(favorites.values()).filter((character: ICharacter) =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const favoritesMemo = useMemo(
    () => ({ favorites, toggleFavorite, filterFavorites }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={favoritesMemo}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
