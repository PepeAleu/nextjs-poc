import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FavoriteButton from "@/app/_components/FavoriteButton";
import { FavoritesContext } from "@/app/_providers/FavoritesProvider";
import { ICharacter } from "@/modules/characters/domain/ICharacter";

const TestProvider = ({
  children,
  favorites,
  toggleFavorite,
}: {
  children: React.ReactNode;
  favorites: Map<string, ICharacter>;
  toggleFavorite: (character: ICharacter) => void;
}) => {
  const filterFavoritesMock = vi.fn();
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        filterFavorites: filterFavoritesMock,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

describe("FavoriteButton", () => {
  const testCharacter = {
    id: "1",
    name: "Test Character",
  } as ICharacter;

  it('muestra el ícono "Add favorite" si el personaje no está en favoritos', () => {
    const toggleFavoriteMock = vi.fn();
    render(
      <TestProvider favorites={new Map()} toggleFavorite={toggleFavoriteMock}>
        <FavoriteButton character={testCharacter} />
      </TestProvider>
    );
    // El ícono outline tiene title "Add favorite"
    const addIcon = screen.getByTitle("Add favorite");
    expect(addIcon).toBeInTheDocument();
  });

  it('muestra el ícono "Remove favorite" si el personaje ya está en favoritos', () => {
    const toggleFavoriteMock = vi.fn();
    const characterMock: ICharacter = {
      id: "1",
      name: "Test Character",
      image: "/test.src",
      description: "Test description",
    };
    render(
      <TestProvider
        favorites={new Map([["1", characterMock]])}
        toggleFavorite={toggleFavoriteMock}
      >
        <FavoriteButton character={testCharacter} />
      </TestProvider>
    );
    // El ícono filled tiene title "Remove favorite"
    const removeIcon = screen.getByTitle("Remove favorite");
    expect(removeIcon).toBeInTheDocument();
  });

  it("llama a toggleFavorite al hacer click en el botón", () => {
    const toggleFavoriteMock = vi.fn();
    const characterMock: ICharacter = {
      id: "1",
      name: "Test Character",
      image: "/test.src",
      description: "Test description",
    };
    render(
      <TestProvider
        favorites={new Map([["1", characterMock]])}
        toggleFavorite={toggleFavoriteMock}
      >
        <FavoriteButton character={testCharacter} />
      </TestProvider>
    );
    const button = screen.getByRole("button", { name: /Favorite button/i });
    fireEvent.click(button);
    expect(toggleFavoriteMock).toHaveBeenCalledWith(testCharacter);
  });
});
