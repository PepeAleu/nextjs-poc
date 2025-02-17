import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FavoritesContext } from "@/app/_providers/FavoritesProvider";
import FavoritesCounter from "@/app/_components/FavoritesCounter";

const TestProvider = ({
  children,
  favorites,
}: {
  children: React.ReactNode;
  favorites: Map<string, any>;
}) => (
  <FavoritesContext.Provider
    value={{ favorites, toggleFavorite: vi.fn(), filterFavorites: vi.fn() }}
  >
    {children}
  </FavoritesContext.Provider>
);

describe.concurrent("FavoritesCounter", () => {
  it("muestra 0 cuando no hay favoritos", () => {
    render(
      <TestProvider favorites={new Map()}>
        <FavoritesCounter />
      </TestProvider>
    );
    const counterText = screen.getByText("0");
    const icon = screen.getByTitle("Add favorite");
    expect(counterText).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("muestra el número correcto de favoritos", () => {
    // Creamos un Map con 3 elementos
    const favoritesMap = new Map([
      ["1", { id: "1", name: "Character 1" }],
      ["2", { id: "2", name: "Character 2" }],
      ["3", { id: "3", name: "Character 3" }],
    ]);
    render(
      <TestProvider favorites={favoritesMap}>
        <FavoritesCounter />
      </TestProvider>
    );
    const counterText = screen.getByText("3");
    expect(counterText).toBeInTheDocument();
  });
});
