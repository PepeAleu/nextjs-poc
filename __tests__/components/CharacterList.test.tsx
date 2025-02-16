import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CharacterList from "@/app/_components/CharacterList";

vi.mock("@/modules/characters/application/getCharacters", () => ({
  getCharacters: vi.fn(() => [
    { id: "1", name: "Character 1" },
    { id: "2", name: "Character 2" },
  ]),
}));

vi.mock("./CharacterCard", () => ({
  default: ({ character }: { character: any }) => <div>{character.name}</div>,
}));

describe.concurrent("CharacterList", () => {
  it("displays the list of characters returned by getCharacters", async () => {
    // Dado que CharacterList es una función asíncrona (server component), esperamos su resultado
    const element = await CharacterList({ query: "some query" });

    // Renderizamos el elemento retornado
    render(element);

    const character1 = await screen.findByText("Character 1");
    const character2 = await screen.findByText("Character 2");

    // Validamos que se rendericen los nombres de los personajes
    expect(character1).toBeInTheDocument();
    expect(character2).toBeInTheDocument();
  });
});
