import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FavoritesListCounter from "@/app/_components/FavoritesListCounter";
import { FavoritesContext } from "@/app/_providers/FavoritesProvider";

vi.mock("@/app/_components/ResultCounter", () => ({
  default: ({ counter }: { counter: number }) => <div>Counter: {counter}</div>,
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

describe.concurrent("FavoritesListCounter", () => {
  it("displays 0 when filterFavorites returns an empty list", () => {
    const filterFavorites = vi.fn(() => []);
    render(
      <TestProvider filterFavorites={filterFavorites}>
        <FavoritesListCounter query="test" />
      </TestProvider>
    );
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });

  it("displays the correct counter when filterFavorites returns multiple items", () => {
    const favorites = [
      { id: "1", name: "Favorite 1" },
      { id: "2", name: "Favorite 2" },
      { id: "3", name: "Favorite 3" },
    ];
    const filterFavorites = vi.fn(() => favorites);
    render(
      <TestProvider filterFavorites={filterFavorites}>
        <FavoritesListCounter query="Fav" />
      </TestProvider>
    );
    expect(screen.getByText("Counter: 3")).toBeInTheDocument();
  });
});
