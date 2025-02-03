'use client'

import { createContext, useMemo, useState } from 'react';

const initialFavorites = new Set<string>();

export const FavoritesContext = createContext<{
  favorites: Set<string>;
  toggleFavorite: (item: string) => void;
}>({ favorites: initialFavorites, toggleFavorite: () => { } });

// Componente proveedor que envolverá a la parte de la app que use este contexto
export function FavoritesProvider({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [favorites, setFavorites] = useState<Set<string>>(initialFavorites);

  const toggleFavorite = (item: string) => {
    if (!favorites.delete(item)) {
      setFavorites(favorites.add(item));
    }
    setFavorites(new Set(favorites));
  };

  const favoritesMemo = useMemo(() => ({ favorites, toggleFavorite }), [favorites]);

  return (
    <FavoritesContext.Provider value={favoritesMemo}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;