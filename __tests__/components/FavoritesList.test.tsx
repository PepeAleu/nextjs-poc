import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FavoritesList from "@/app/_components/FavoritesList";
import { FavoritesContext } from "@/app/_providers/FavoritesProvider";

vi.mock("@/app/_components/CharacterCard", () => ({
  default: ({ character }: { character: any }) => <div>{character.name}</div>,
}));

const TestProvider = ({
  children,
  filterFavorites,
}: {
  children: React.ReactNode;
  filterFavorites: (query: string) => any[];
}) => (
  <FavoritesContext.Provider
    value={{
      favorites: new Map(),
      toggleFavorite: vi.fn(),
      filterFavorites,
    }}
  >
    {children}
  </FavoritesContext.Provider>
);

describe.concurrent("FavoritesList", () => {
  it("renders an empty list when there are no favorites", () => {
    const filterFavorites = vi.fn(() => []);
    render(
      <TestProvider filterFavorites={filterFavorites}>
        <FavoritesList query="test" />
      </TestProvider>
    );

    expect(screen.queryByText("Favorite 1")).not.toBeInTheDocument();
  });

  it("correctly renders the favorites list", () => {
    const favoritesData = [
      { id: "1", name: "Favorite 1" },
      { id: "2", name: "Favorite 2" },
    ];
    const filterFavorites = vi.fn(() => favoritesData);
    render(
      <TestProvider filterFavorites={filterFavorites}>
        <FavoritesList query="Favorite" />
      </TestProvider>
    );

    expect(screen.getByText("Favorite 1")).toBeInTheDocument();
    expect(screen.getByText("Favorite 2")).toBeInTheDocument();
  });
});
