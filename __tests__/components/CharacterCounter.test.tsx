import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import CharacterCounter from "@/app/_components/CharacterCounter";

vi.mock("@/modules/characters/application/getCharacters", () => ({
  getCharacters: vi.fn(() =>
    Promise.resolve([
      { id: "1", name: "Character A" },
      { id: "2", name: "Character B" },
    ])
  ),
}));

describe.concurrent("CharacterCounter", () => {
  it("displays the correct counter", async () => {
    const element = await CharacterCounter({ query: "test" });
    render(element);
    const counterElement = await screen.findByText("2 RESULTS");
    expect(counterElement).toBeInTheDocument();
  });
});
